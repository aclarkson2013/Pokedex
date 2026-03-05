/**
 * Zustand store for user favorites and collection data.
 *
 * Syncs with Firestore when user is logged in.
 * Uses optimistic updates for snappy UI.
 */

import { create } from "zustand";
import { doc, updateDoc, increment } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase/config";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  getCollection,
  addToCollection,
  removeFromCollection,
} from "@/lib/firebase/collections";

interface UserDataState {
  // Data
  favorites: Set<number>;
  collection: Set<number>;
  isLoaded: boolean;

  // Actions
  loadUserData: (uid: string) => Promise<void>;
  clearUserData: () => void;
  toggleFavorite: (uid: string, pokemonId: number) => Promise<void>;
  toggleCaught: (uid: string, pokemonId: number) => Promise<void>;
  isFavorite: (pokemonId: number) => boolean;
  isCaught: (pokemonId: number) => boolean;
}

export const useUserDataStore = create<UserDataState>((set, get) => ({
  favorites: new Set(),
  collection: new Set(),
  isLoaded: false,

  loadUserData: async (uid: string) => {
    try {
      const [favs, caught] = await Promise.all([
        getFavorites(uid),
        getCollection(uid),
      ]);
      set({
        favorites: new Set(favs),
        collection: new Set(caught),
        isLoaded: true,
      });
    } catch (err) {
      console.error("[UserDataStore] Failed to load:", err);
      set({ isLoaded: true });
    }
  },

  clearUserData: () => {
    set({
      favorites: new Set(),
      collection: new Set(),
      isLoaded: false,
    });
  },

  toggleFavorite: async (uid: string, pokemonId: number) => {
    const { favorites } = get();
    const isFav = favorites.has(pokemonId);

    // Optimistic update
    const newFavs = new Set(favorites);
    if (isFav) {
      newFavs.delete(pokemonId);
    } else {
      newFavs.add(pokemonId);
    }
    set({ favorites: newFavs });

    // Sync with Firestore
    try {
      if (isFav) {
        await removeFavorite(uid, pokemonId);
      } else {
        await addFavorite(uid, pokemonId);
      }
      // Update profile counter (fire-and-forget)
      const db = getFirebaseDb();
      updateDoc(doc(db, "users", uid), {
        favoritesCount: increment(isFav ? -1 : 1),
      }).catch(() => {});
    } catch (err) {
      console.error("[UserDataStore] Toggle favorite failed:", err);
      // Revert on error
      set({ favorites });
    }
  },

  toggleCaught: async (uid: string, pokemonId: number) => {
    const { collection } = get();
    const isCaught = collection.has(pokemonId);

    // Optimistic update
    const newCollection = new Set(collection);
    if (isCaught) {
      newCollection.delete(pokemonId);
    } else {
      newCollection.add(pokemonId);
    }
    set({ collection: newCollection });

    // Sync with Firestore
    try {
      if (isCaught) {
        await removeFromCollection(uid, pokemonId);
      } else {
        await addToCollection(uid, pokemonId);
      }
      // Update profile counter (fire-and-forget)
      const db = getFirebaseDb();
      updateDoc(doc(db, "users", uid), {
        collectionCount: increment(isCaught ? -1 : 1),
      }).catch(() => {});
    } catch (err) {
      console.error("[UserDataStore] Toggle caught failed:", err);
      // Revert on error
      set({ collection });
    }
  },

  isFavorite: (pokemonId: number) => get().favorites.has(pokemonId),
  isCaught: (pokemonId: number) => get().collection.has(pokemonId),
}));
