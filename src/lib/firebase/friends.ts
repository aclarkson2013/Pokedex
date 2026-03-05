/**
 * Firestore service for friends and friend requests.
 *
 * Data model:
 *   users/{uid}/friends/{friendUid}        → FriendEntry
 *   users/{uid}/friendRequests/{reqId}      → FriendRequestDocument (incoming)
 *   users/{uid}/sentRequests/{reqId}        → SentRequestRef (outgoing)
 *
 * Uses writeBatch for atomic operations when accepting requests
 * (writes to both users' friends subcollections simultaneously).
 */

import {
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
  serverTimestamp,
  query,
  where,
  orderBy,
  limit,
  writeBatch,
  updateDoc,
} from "firebase/firestore";
import { getFirebaseDb } from "./config";
import type { UserProfile } from "./auth";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FriendEntry {
  friendUid: string;
  friendDisplayName: string;
  friendPhotoURL: string | null;
  friendCode: string;
  addedAt: unknown;
}

export interface FriendRequestDocument {
  id: string;
  fromUid: string;
  toUid: string;
  fromDisplayName: string;
  fromPhotoURL: string | null;
  toDisplayName: string;
  toPhotoURL: string | null;
  status: "pending" | "accepted" | "declined";
  createdAt: unknown;
  updatedAt: unknown;
}

export interface SentRequestRef {
  id: string;
  requestId: string;
  toUid: string;
  toDisplayName: string;
  toPhotoURL: string | null;
  status: "pending" | "accepted" | "declined";
  createdAt: unknown;
}

// ---------------------------------------------------------------------------
// Friend Code Lookup
// ---------------------------------------------------------------------------

/**
 * Look up a user by their friend code.
 * Returns null if no user found.
 */
export async function lookupByFriendCode(
  code: string
): Promise<UserProfile | null> {
  const db = getFirebaseDb();
  const q = query(
    collection(db, "users"),
    where("friendCode", "==", code.toUpperCase()),
    limit(1)
  );
  const snap = await getDocs(q);
  if (snap.empty) return null;
  return snap.docs[0].data() as UserProfile;
}

// ---------------------------------------------------------------------------
// Friend Requests
// ---------------------------------------------------------------------------

/**
 * Send a friend request from one user to another.
 * Writes to receiver's friendRequests AND sender's sentRequests.
 */
export async function sendFriendRequest(
  fromUser: { uid: string; displayName: string; photoURL: string | null },
  toUser: UserProfile
): Promise<string> {
  const db = getFirebaseDb();

  // Create the request document in receiver's subcollection
  const reqRef = doc(collection(db, "users", toUser.uid, "friendRequests"));
  const requestId = reqRef.id;

  const batch = writeBatch(db);

  // Write incoming request for receiver
  batch.set(reqRef, {
    fromUid: fromUser.uid,
    toUid: toUser.uid,
    fromDisplayName: fromUser.displayName,
    fromPhotoURL: fromUser.photoURL,
    toDisplayName: toUser.displayName,
    toPhotoURL: toUser.photoURL,
    status: "pending",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  // Write sent request reference for sender
  const sentRef = doc(db, "users", fromUser.uid, "sentRequests", requestId);
  batch.set(sentRef, {
    requestId,
    toUid: toUser.uid,
    toDisplayName: toUser.displayName,
    toPhotoURL: toUser.photoURL,
    status: "pending",
    createdAt: serverTimestamp(),
  });

  await batch.commit();
  return requestId;
}

/**
 * Accept a friend request. Atomically:
 * 1. Updates request status to "accepted"
 * 2. Writes FriendEntry to both users' friends subcollections
 * 3. Updates the sender's sentRequest status
 */
export async function acceptFriendRequest(
  currentUid: string,
  request: FriendRequestDocument
): Promise<void> {
  const db = getFirebaseDb();
  const batch = writeBatch(db);

  // Update the request status
  const reqRef = doc(db, "users", currentUid, "friendRequests", request.id);
  batch.update(reqRef, {
    status: "accepted",
    updatedAt: serverTimestamp(),
  });

  // Add friend to current user's friends
  const myFriendRef = doc(db, "users", currentUid, "friends", request.fromUid);
  batch.set(myFriendRef, {
    friendUid: request.fromUid,
    friendDisplayName: request.fromDisplayName,
    friendPhotoURL: request.fromPhotoURL,
    friendCode: "", // Will be filled when viewing profile
    addedAt: serverTimestamp(),
  });

  // Add current user to sender's friends
  const theirFriendRef = doc(
    db,
    "users",
    request.fromUid,
    "friends",
    currentUid
  );
  batch.set(theirFriendRef, {
    friendUid: currentUid,
    friendDisplayName: request.toDisplayName,
    friendPhotoURL: request.toPhotoURL,
    friendCode: "",
    addedAt: serverTimestamp(),
  });

  // Update the sender's sentRequest status
  const sentRef = doc(
    db,
    "users",
    request.fromUid,
    "sentRequests",
    request.id
  );
  batch.update(sentRef, { status: "accepted" });

  await batch.commit();
}

/**
 * Decline a friend request.
 */
export async function declineFriendRequest(
  uid: string,
  request: FriendRequestDocument
): Promise<void> {
  const db = getFirebaseDb();
  const batch = writeBatch(db);

  // Update request status
  const reqRef = doc(db, "users", uid, "friendRequests", request.id);
  batch.update(reqRef, {
    status: "declined",
    updatedAt: serverTimestamp(),
  });

  // Update sender's sent request
  const sentRef = doc(db, "users", request.fromUid, "sentRequests", request.id);
  batch.update(sentRef, { status: "declined" });

  await batch.commit();
}

/**
 * Cancel an outgoing friend request.
 */
export async function cancelSentRequest(
  uid: string,
  sentRequest: SentRequestRef
): Promise<void> {
  const db = getFirebaseDb();
  const batch = writeBatch(db);

  // Delete from sender's sentRequests
  batch.delete(doc(db, "users", uid, "sentRequests", sentRequest.id));

  // Delete from receiver's friendRequests
  batch.delete(
    doc(db, "users", sentRequest.toUid, "friendRequests", sentRequest.requestId)
  );

  await batch.commit();
}

// ---------------------------------------------------------------------------
// Friends CRUD
// ---------------------------------------------------------------------------

/**
 * Remove a friend (deletes from both users).
 */
export async function removeFriend(
  uid: string,
  friendUid: string
): Promise<void> {
  const db = getFirebaseDb();
  const batch = writeBatch(db);

  batch.delete(doc(db, "users", uid, "friends", friendUid));
  batch.delete(doc(db, "users", friendUid, "friends", uid));

  await batch.commit();
}

/**
 * Get all friends for a user.
 */
export async function getFriends(uid: string): Promise<FriendEntry[]> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", uid, "friends");
  const q = query(ref, orderBy("addedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(
    (d) => ({ ...d.data(), friendUid: d.id }) as FriendEntry
  );
}

/**
 * Get incoming friend requests (pending only).
 */
export async function getIncomingRequests(
  uid: string
): Promise<FriendRequestDocument[]> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", uid, "friendRequests");
  const q = query(ref, where("status", "==", "pending"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as FriendRequestDocument);
}

/**
 * Get sent friend requests (pending only).
 */
export async function getSentRequests(
  uid: string
): Promise<SentRequestRef[]> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", uid, "sentRequests");
  const q = query(ref, where("status", "==", "pending"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as SentRequestRef);
}

/**
 * Check if two users are already friends.
 */
export async function areFriends(
  uid: string,
  otherUid: string
): Promise<boolean> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "friends", otherUid);
  const { getDoc } = await import("firebase/firestore");
  const snap = await getDoc(ref);
  return snap.exists();
}

/**
 * Check if a friend request already exists between two users.
 */
export async function hasExistingRequest(
  fromUid: string,
  toUid: string
): Promise<boolean> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", toUid, "friendRequests");
  const q = query(
    ref,
    where("fromUid", "==", fromUid),
    where("status", "==", "pending"),
    limit(1)
  );
  const snap = await getDocs(q);
  return !snap.empty;
}
