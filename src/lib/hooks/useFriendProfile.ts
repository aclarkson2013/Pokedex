"use client";

import { useState, useEffect } from "react";
import { getUserProfile, type UserProfile } from "@/lib/firebase/auth";
import { getTeams, type TeamDocument } from "@/lib/firebase/teams";

interface FriendProfileData {
  profile: UserProfile | null;
  publicTeams: TeamDocument[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Load a friend's UserProfile and their public teams.
 * Teams are filtered to only include public ones.
 */
export function useFriendProfile(friendUid: string): FriendProfileData {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [publicTeams, setPublicTeams] = useState<TeamDocument[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!friendUid) return;

    let cancelled = false;

    async function load() {
      setIsLoading(true);
      setError(null);

      try {
        const [profileData, teamsData] = await Promise.all([
          getUserProfile(friendUid),
          getTeams(friendUid),
        ]);

        if (cancelled) return;

        setProfile(profileData);
        // Only show public teams
        setPublicTeams(teamsData.filter((t) => t.isPublic));
      } catch (err) {
        console.error("[useFriendProfile] Failed to load:", err);
        if (!cancelled) {
          setError("Failed to load profile");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [friendUid]);

  return { profile, publicTeams, isLoading, error };
}
