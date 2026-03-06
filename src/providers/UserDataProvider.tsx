"use client";

import { useEffect, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { useUserDataStore } from "@/stores/user-data-store";
import { useTeamStore } from "@/stores/team-store";
import { useFriendsStore } from "@/stores/friends-store";

/**
 * Syncs the user data store with Firebase auth state.
 * Loads favorites/collection/teams when user logs in, clears on logout.
 * Subscribes to real-time friend/request listeners.
 */
export function UserDataProvider({ children }: { children: ReactNode }) {
  const { user, isConfigured } = useAuth();
  const { loadUserData, clearUserData, isLoaded } = useUserDataStore();
  const { loadTeams, clearTeams, isLoaded: teamsLoaded } = useTeamStore();
  const { subscribe, unsubscribe } = useFriendsStore();

  useEffect(() => {
    if (!isConfigured) return;

    if (user) {
      if (!isLoaded) {
        loadUserData(user.uid);
      }
      if (!teamsLoaded) {
        loadTeams(user.uid);
      }
      // Real-time listener — subscribe handles dedup internally
      subscribe(user.uid);
    } else {
      clearUserData();
      clearTeams();
      unsubscribe();
    }
  }, [user, isConfigured, isLoaded, teamsLoaded, loadUserData, clearUserData, loadTeams, clearTeams, subscribe, unsubscribe]);

  return <>{children}</>;
}
