"use client";

import { useEffect, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import { useUserDataStore } from "@/stores/user-data-store";

/**
 * Syncs the user data store with Firebase auth state.
 * Loads favorites/collection when user logs in, clears on logout.
 */
export function UserDataProvider({ children }: { children: ReactNode }) {
  const { user, isConfigured } = useAuth();
  const { loadUserData, clearUserData, isLoaded } = useUserDataStore();

  useEffect(() => {
    if (!isConfigured) return;

    if (user) {
      if (!isLoaded) {
        loadUserData(user.uid);
      }
    } else {
      clearUserData();
    }
  }, [user, isConfigured, isLoaded, loadUserData, clearUserData]);

  return <>{children}</>;
}
