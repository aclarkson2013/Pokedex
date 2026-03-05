/**
 * Zustand store for friends and friend requests.
 *
 * Syncs with Firestore when user is logged in.
 * Uses optimistic updates for snappy UI.
 */

import { create } from "zustand";
import {
  getFriends,
  getIncomingRequests,
  getSentRequests,
  sendFriendRequest,
  acceptFriendRequest,
  declineFriendRequest,
  cancelSentRequest,
  removeFriend,
  type FriendEntry,
  type FriendRequestDocument,
  type SentRequestRef,
} from "@/lib/firebase/friends";
import type { UserProfile } from "@/lib/firebase/auth";

interface FriendsStoreState {
  // Data
  friends: FriendEntry[];
  incomingRequests: FriendRequestDocument[];
  sentRequests: SentRequestRef[];
  isLoaded: boolean;

  // Actions
  loadFriends: (uid: string) => Promise<void>;
  clearFriends: () => void;
  sendRequest: (
    fromUser: { uid: string; displayName: string; photoURL: string | null },
    toUser: UserProfile
  ) => Promise<void>;
  acceptRequest: (uid: string, request: FriendRequestDocument) => Promise<void>;
  declineRequest: (uid: string, request: FriendRequestDocument) => Promise<void>;
  cancelRequest: (uid: string, sentRequest: SentRequestRef) => Promise<void>;
  removeFriendAction: (uid: string, friendUid: string) => Promise<void>;
}

export const useFriendsStore = create<FriendsStoreState>((set, get) => ({
  friends: [],
  incomingRequests: [],
  sentRequests: [],
  isLoaded: false,

  loadFriends: async (uid: string) => {
    try {
      const [friends, incoming, sent] = await Promise.all([
        getFriends(uid),
        getIncomingRequests(uid),
        getSentRequests(uid),
      ]);
      set({
        friends,
        incomingRequests: incoming,
        sentRequests: sent,
        isLoaded: true,
      });
    } catch (err) {
      console.error("[FriendsStore] Failed to load:", err);
      set({ isLoaded: true });
    }
  },

  clearFriends: () => {
    set({
      friends: [],
      incomingRequests: [],
      sentRequests: [],
      isLoaded: false,
    });
  },

  sendRequest: async (fromUser, toUser) => {
    const { sentRequests } = get();

    // Optimistic: add to sent requests
    const tempId = `temp-${Date.now()}`;
    const optimistic: SentRequestRef = {
      id: tempId,
      requestId: tempId,
      toUid: toUser.uid,
      toDisplayName: toUser.displayName,
      toPhotoURL: toUser.photoURL,
      status: "pending",
      createdAt: new Date(),
    };
    set({ sentRequests: [optimistic, ...sentRequests] });

    try {
      await sendFriendRequest(fromUser, toUser);
    } catch (err) {
      console.error("[FriendsStore] Failed to send request:", err);
      set({ sentRequests });
      throw err;
    }
  },

  acceptRequest: async (uid: string, request: FriendRequestDocument) => {
    const { incomingRequests, friends } = get();

    // Optimistic: remove from incoming, add to friends
    const newFriend: FriendEntry = {
      friendUid: request.fromUid,
      friendDisplayName: request.fromDisplayName,
      friendPhotoURL: request.fromPhotoURL,
      friendCode: "",
      addedAt: new Date(),
    };
    set({
      incomingRequests: incomingRequests.filter((r) => r.id !== request.id),
      friends: [newFriend, ...friends],
    });

    try {
      await acceptFriendRequest(uid, request);
    } catch (err) {
      console.error("[FriendsStore] Failed to accept request:", err);
      set({ incomingRequests, friends });
      throw err;
    }
  },

  declineRequest: async (uid: string, request: FriendRequestDocument) => {
    const { incomingRequests } = get();

    // Optimistic: remove from incoming
    set({
      incomingRequests: incomingRequests.filter((r) => r.id !== request.id),
    });

    try {
      await declineFriendRequest(uid, request);
    } catch (err) {
      console.error("[FriendsStore] Failed to decline request:", err);
      set({ incomingRequests });
      throw err;
    }
  },

  cancelRequest: async (uid: string, sentRequest: SentRequestRef) => {
    const { sentRequests } = get();

    // Optimistic: remove from sent
    set({
      sentRequests: sentRequests.filter((r) => r.id !== sentRequest.id),
    });

    try {
      await cancelSentRequest(uid, sentRequest);
    } catch (err) {
      console.error("[FriendsStore] Failed to cancel request:", err);
      set({ sentRequests });
      throw err;
    }
  },

  removeFriendAction: async (uid: string, friendUid: string) => {
    const { friends } = get();

    // Optimistic: remove from list
    set({
      friends: friends.filter((f) => f.friendUid !== friendUid),
    });

    try {
      await removeFriend(uid, friendUid);
    } catch (err) {
      console.error("[FriendsStore] Failed to remove friend:", err);
      set({ friends });
      throw err;
    }
  },
}));
