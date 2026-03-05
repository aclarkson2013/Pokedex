"use client";

import Link from "next/link";
import { TeamList } from "@/components/team/TeamList";
import { useAuth } from "@/providers/AuthProvider";

export default function TeamsPage() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-gray-50 pb-24 dark:bg-gray-900">
      {/* Header */}
      <div
        className="border-b border-gray-200 bg-white px-4 pb-3 dark:border-gray-700 dark:bg-gray-800"
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
      >
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Teams
        </h1>
      </div>

      <div className="p-4">
        <TeamList />
      </div>

      {/* Floating add button */}
      {user && (
        <Link
          href="/teams/new"
          className="fixed bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-xl active:scale-90"
          aria-label="Create new team"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
      )}
    </main>
  );
}
