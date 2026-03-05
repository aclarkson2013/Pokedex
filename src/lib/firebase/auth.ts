/**
 * Firebase Authentication helpers.
 *
 * Provides sign-in, sign-up, sign-out, and password reset functions.
 */

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  type User,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { getFirebaseAuth, getFirebaseDb } from "./config";

// ---------------------------------------------------------------------------
// User profile document in Firestore
// ---------------------------------------------------------------------------

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string | null;
  createdAt: unknown; // Firestore Timestamp
  lastLoginAt: unknown;
  friendCode: string;
}

function generateFriendCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

/**
 * Create or update user profile document in Firestore.
 */
async function upsertUserProfile(user: User): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    // Update last login
    await setDoc(ref, { lastLoginAt: serverTimestamp() }, { merge: true });
  } else {
    // Create new profile
    const profile: UserProfile = {
      uid: user.uid,
      email: user.email ?? "",
      displayName: user.displayName ?? "",
      photoURL: user.photoURL,
      createdAt: serverTimestamp(),
      lastLoginAt: serverTimestamp(),
      friendCode: generateFriendCode(),
    };
    await setDoc(ref, profile);
  }
}

// ---------------------------------------------------------------------------
// Auth functions
// ---------------------------------------------------------------------------

/**
 * Sign in with email and password.
 */
export async function signInWithEmail(
  email: string,
  password: string
): Promise<User> {
  const auth = getFirebaseAuth();
  const result = await signInWithEmailAndPassword(auth, email, password);
  await upsertUserProfile(result.user);
  return result.user;
}

/**
 * Create a new account with email and password.
 */
export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string
): Promise<User> {
  const auth = getFirebaseAuth();
  const result = await createUserWithEmailAndPassword(auth, email, password);

  // Set display name on the Firebase user
  await updateProfile(result.user, { displayName });

  // Create Firestore profile
  await upsertUserProfile(result.user);

  return result.user;
}

/**
 * Sign in with Google OAuth popup.
 */
export async function signInWithGoogle(): Promise<User> {
  const auth = getFirebaseAuth();
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  await upsertUserProfile(result.user);
  return result.user;
}

/**
 * Sign out the current user.
 */
export async function signOut(): Promise<void> {
  const auth = getFirebaseAuth();
  await firebaseSignOut(auth);
}

/**
 * Send password reset email.
 */
export async function resetPassword(email: string): Promise<void> {
  const auth = getFirebaseAuth();
  await sendPasswordResetEmail(auth, email);
}

/**
 * Get the user's Firestore profile.
 */
export async function getUserProfile(
  uid: string
): Promise<UserProfile | null> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as UserProfile) : null;
}
