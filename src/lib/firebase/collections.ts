/**
 * Firestore service for favorites and collection tracking.
 *
 * Data model:
 *   users/{uid}/favorites/{pokemonId} → { pokemonId, addedAt }
 *   users/{uid}/collection/{pokemonId} → { pokemonId, caughtAt }
 */

import {
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  collection,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { getFirebaseDb } from "./config";

// ---------------------------------------------------------------------------
// Favorites
// ---------------------------------------------------------------------------

export interface FavoriteEntry {
  pokemonId: number;
  addedAt: unknown;
}

/** Add a Pokemon to favorites. */
export async function addFavorite(uid: string, pokemonId: number): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "favorites", String(pokemonId));
  await setDoc(ref, {
    pokemonId,
    addedAt: serverTimestamp(),
  });
}

/** Remove a Pokemon from favorites. */
export async function removeFavorite(uid: string, pokemonId: number): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "favorites", String(pokemonId));
  await deleteDoc(ref);
}

/** Get all favorite Pokemon IDs for a user. */
export async function getFavorites(uid: string): Promise<number[]> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", uid, "favorites");
  const q = query(ref, orderBy("addedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data().pokemonId as number);
}

// ---------------------------------------------------------------------------
// Collection (caught Pokemon)
// ---------------------------------------------------------------------------

export interface CollectionEntry {
  pokemonId: number;
  caughtAt: unknown;
}

/** Mark a Pokemon as caught. */
export async function addToCollection(uid: string, pokemonId: number): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "collection", String(pokemonId));
  await setDoc(ref, {
    pokemonId,
    caughtAt: serverTimestamp(),
  });
}

/** Remove a Pokemon from collection. */
export async function removeFromCollection(uid: string, pokemonId: number): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "collection", String(pokemonId));
  await deleteDoc(ref);
}

/** Get all caught Pokemon IDs for a user. */
export async function getCollection(uid: string): Promise<number[]> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", uid, "collection");
  const q = query(ref, orderBy("caughtAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data().pokemonId as number);
}
