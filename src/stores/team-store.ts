/**
 * Zustand store for team builder data.
 *
 * Syncs with Firestore when user is logged in.
 * Uses optimistic updates for snappy UI.
 */

import { create } from "zustand";
import { doc, updateDoc, increment } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase/config";
import {
  getTeams,
  createTeam,
  updateTeam,
  deleteTeam,
  getTeamCount,
  type TeamDocument,
  type TeamInput,
} from "@/lib/firebase/teams";

interface TeamStoreState {
  // Data
  teams: TeamDocument[];
  teamCount: number;
  isLoaded: boolean;

  // Actions
  loadTeams: (uid: string) => Promise<void>;
  clearTeams: () => void;
  addTeam: (uid: string, input: TeamInput) => Promise<string>;
  saveTeam: (uid: string, teamId: string, input: TeamInput) => Promise<void>;
  removeTeam: (uid: string, teamId: string) => Promise<void>;
  refreshCount: (uid: string) => Promise<void>;
}

export const useTeamStore = create<TeamStoreState>((set, get) => ({
  teams: [],
  teamCount: 0,
  isLoaded: false,

  loadTeams: async (uid: string) => {
    try {
      const [teams, count] = await Promise.all([
        getTeams(uid),
        getTeamCount(uid),
      ]);
      set({ teams, teamCount: count, isLoaded: true });
    } catch (err) {
      console.error("[TeamStore] Failed to load teams:", err);
      set({ isLoaded: true });
    }
  },

  clearTeams: () => {
    set({ teams: [], teamCount: 0, isLoaded: false });
  },

  addTeam: async (uid: string, input: TeamInput) => {
    // Optimistic: add a placeholder to the list
    const tempId = `temp-${Date.now()}`;
    const optimisticTeam: TeamDocument = {
      id: tempId,
      name: input.name,
      isPublic: input.isPublic,
      members: input.members,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const { teams, teamCount } = get();
    set({
      teams: [optimisticTeam, ...teams],
      teamCount: teamCount + 1,
    });

    try {
      const realId = await createTeam(uid, input);
      // Replace temp with real ID
      set({
        teams: get().teams.map((t) =>
          t.id === tempId ? { ...t, id: realId } : t
        ),
      });
      // Update profile counter (fire-and-forget)
      const db = getFirebaseDb();
      updateDoc(doc(db, "users", uid), {
        teamCount: increment(1),
      }).catch(() => {});
      return realId;
    } catch (err) {
      console.error("[TeamStore] Failed to create team:", err);
      // Revert optimistic update
      set({ teams, teamCount });
      throw err;
    }
  },

  saveTeam: async (uid: string, teamId: string, input: TeamInput) => {
    const { teams } = get();

    // Optimistic update
    set({
      teams: teams.map((t) =>
        t.id === teamId
          ? { ...t, name: input.name, isPublic: input.isPublic, members: input.members, updatedAt: new Date() }
          : t
      ),
    });

    try {
      await updateTeam(uid, teamId, input);
    } catch (err) {
      console.error("[TeamStore] Failed to save team:", err);
      // Revert
      set({ teams });
      throw err;
    }
  },

  removeTeam: async (uid: string, teamId: string) => {
    const { teams, teamCount } = get();

    // Optimistic: remove from list
    set({
      teams: teams.filter((t) => t.id !== teamId),
      teamCount: Math.max(0, teamCount - 1),
    });

    try {
      await deleteTeam(uid, teamId);
      // Update profile counter (fire-and-forget)
      const db = getFirebaseDb();
      updateDoc(doc(db, "users", uid), {
        teamCount: increment(-1),
      }).catch(() => {});
    } catch (err) {
      console.error("[TeamStore] Failed to delete team:", err);
      // Revert
      set({ teams, teamCount });
      throw err;
    }
  },

  refreshCount: async (uid: string) => {
    try {
      const count = await getTeamCount(uid);
      set({ teamCount: count });
    } catch (err) {
      console.error("[TeamStore] Failed to refresh count:", err);
    }
  },
}));
