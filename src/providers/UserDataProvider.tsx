"use client";

import { useEffect, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { useUserDataStore } from "@/stores/user-data-store";
import { useTeamStore } from "@/stores/team-store";
import { useFriendsStore } from "@/stores/friends-store";

/**
 * Syncs the user data store with Firebase auth state.
 * Loads favorites/collection/teams/friends when user logs in, clears on logout.
 */
export function UserDataProvider({ children }: { children: ReactNode }) {
  const { user, isConfigured } = useAuth();
  const { loadUserData, clearUserData, isLoaded } = useUserDataStore();
  const { loadTeams, clearTeams, isLoaded: teamsLoaded } = useTeamStore();
  const { loadFriends, clearFriends, isLoaded: friendsLoaded } = useFriendsStore();

  useEffect(() => {
    if (!isConfigured) return;

    if (user) {
      if (!isLoaded) {
        loadUserData(user.uid);
      }
      if (!teamsLoaded) {
        loadTeams(user.uid);
      }
      if (!friendsLoaded) {
        loadFriends(user.uid);
      }
    } else {
      clearUserData();
      clearTeams();
      clearFriends();
    }
  }, [user, isConfigured, isLoaded, teamsLoaded, friendsLoaded, loadUserData, clearUserData, loadTeams, clearTeams, loadFriends, clearFriends]);

  return <>{children}</>;
}
