"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { useTeamStore } from "@/stores/team-store";
import { TeamCard } from "./TeamCard";

export function TeamList() {
  const { user, isLoading: authLoading, isConfigured } = useAuth();
  const { teams, isLoaded, loadTeams } = useTeamStore();

  useEffect(() => {
    if (user && isConfigured && !isLoaded) {
      loadTeams(user.uid);
    }
  }, [user, isConfigured, isLoaded, loadTeams]);

  // Auth loading
  if (authLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg
            className="h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Team Builder
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Sign in to build and manage your dream teams.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-xl bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600 active:scale-[0.98]"
        >
          Sign In
        </Link>
      </div>
    );
  }

  // Teams loading
  if (!isLoaded) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  // Empty state
  if (teams.length === 0) {
    return (
      <div className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
          <svg
            className="h-10 w-10 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          No Teams Yet
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Create your first team and pick up to 6 Pokemon!
        </p>
        <Link
          href="/teams/new"
          className="mt-6 inline-block rounded-xl bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600 active:scale-[0.98]"
        >
          Create Team
        </Link>
      </div>
    );
  }

  // Team list
  return (
    <div className="space-y-3">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}
