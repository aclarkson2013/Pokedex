"use client";

import { useEffect, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { useUserDataStore } from "@/stores/user-data-store";
import { useTeamStore } from "@/stores/team-store";

/**
 * Syncs the user data store with Firebase auth state.
 * Loads favorites/collection/teams when user logs in, clears on logout.
 */
export function UserDataProvider({ children }: { children: ReactNode }) {
  const { user, isConfigured } = useAuth();
  const { loadUserData, clearUserData, isLoaded } = useUserDataStore();
  const { loadTeams, clearTeams, isLoaded: teamsLoaded } = useTeamStore();

  useEffect(() => {
    if (!isConfigured) return;

    if (user) {
      if (!isLoaded) {
        loadUserData(user.uid);
      }
      if (!teamsLoaded) {
        loadTeams(user.uid);
      }
    } else {
      clearUserData();
      clearTeams();
    }
  }, [user, isConfigured, isLoaded, teamsLoaded, loadUserData, clearUserData, loadTeams, clearTeams]);

  return <>{children}</>;
}
