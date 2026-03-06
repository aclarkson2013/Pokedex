/**
 * Zustand store for friends and friend requests.
 *
 * Uses real-time Firestore listeners (onSnapshot) so that
 * incoming requests, sent requests, and friends list update instantly.
 */

import { create } from "zustand";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  type Unsubscribe,
} from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase/config";
import {
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
  subscribe: (uid: string) => void;
  unsubscribe: () => void;
  sendRequest: (
    fromUser: { uid: string; displayName: string; photoURL: string | null },
    toUser: UserProfile
  ) => Promise<void>;
  acceptRequest: (uid: string, request: FriendRequestDocument) => Promise<void>;
  declineRequest: (uid: string, request: FriendRequestDocument) => Promise<void>;
  cancelRequest: (uid: string, sentRequest: SentRequestRef) => Promise<void>;
  removeFriendAction: (uid: string, friendUid: string) => Promise<void>;
}

// Track active listeners outside the store so they survive re-renders
let _unsubFriends: Unsubscribe | null = null;
let _unsubIncoming: Unsubscribe | null = null;
let _unsubSent: Unsubscribe | null = null;
let _subscribedUid: string | null = null;

export const useFriendsStore = create<FriendsStoreState>((set, get) => ({
  friends: [],
  incomingRequests: [],
  sentRequests: [],
  isLoaded: false,

  subscribe: (uid: string) => {
    // Don't re-subscribe if already listening for this user
    if (_subscribedUid === uid) return;

    // Clean up any existing listeners
    get().unsubscribe();
    _subscribedUid = uid;

    const db = getFirebaseDb();

    // Listen to friends list
    const friendsRef = collection(db, "users", uid, "friends");
    const friendsQ = query(friendsRef, orderBy("addedAt", "desc"));
    _unsubFriends = onSnapshot(
      friendsQ,
      (snap) => {
        const friends = snap.docs.map(
          (d) => ({ ...d.data(), friendUid: d.id }) as FriendEntry
        );
        set({ friends, isLoaded: true });
      },
      (err) => {
        console.error("[FriendsStore] Friends listener error:", err);
        set({ isLoaded: true });
      }
    );

    // Listen to incoming friend requests (pending only)
    const incomingRef = collection(db, "users", uid, "friendRequests");
    const incomingQ = query(
      incomingRef,
      where("status", "==", "pending"),
      orderBy("createdAt", "desc")
    );
    _unsubIncoming = onSnapshot(
      incomingQ,
      (snap) => {
        const incomingRequests = snap.docs.map(
          (d) => ({ id: d.id, ...d.data() }) as FriendRequestDocument
        );
        set({ incomingRequests });
      },
      (err) => {
        console.error("[FriendsStore] Incoming requests listener error:", err);
      }
    );

    // Listen to sent requests (pending only)
    const sentRef = collection(db, "users", uid, "sentRequests");
    const sentQ = query(
      sentRef,
      where("status", "==", "pending"),
      orderBy("createdAt", "desc")
    );
    _unsubSent = onSnapshot(
      sentQ,
      (snap) => {
        const sentRequests = snap.docs.map(
          (d) => ({ id: d.id, ...d.data() }) as SentRequestRef
        );
        set({ sentRequests });
      },
      (err) => {
        console.error("[FriendsStore] Sent requests listener error:", err);
      }
    );
  },

  unsubscribe: () => {
    _unsubFriends?.();
    _unsubIncoming?.();
    _unsubSent?.();
    _unsubFriends = null;
    _unsubIncoming = null;
    _unsubSent = null;
    _subscribedUid = null;
    set({
      friends: [],
      incomingRequests: [],
      sentRequests: [],
      isLoaded: false,
    });
  },

  sendRequest: async (fromUser, toUser) => {
    // No optimistic update needed — the onSnapshot listener will pick it up
    await sendFriendRequest(fromUser, toUser);
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
