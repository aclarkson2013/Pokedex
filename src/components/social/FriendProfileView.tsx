"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { useFriendsStore } from "@/stores/friends-store";
import { useFriendProfile } from "@/lib/hooks/useFriendProfile";
import { TeamCard } from "@/components/team/TeamCard";

interface FriendProfileViewProps {
  friendUid: string;
}

export function FriendProfileView({ friendUid }: FriendProfileViewProps) {
  const router = useRouter();
  const { user } = useAuth();
  const { removeFriendAction } = useFriendsStore();
  const { profile, publicTeams, isLoading, error } = useFriendProfile(friendUid);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [removing, setRemoving] = useState(false);

  async function handleRemove() {
    if (!user) return;
    setRemoving(true);
    try {
      await removeFriendAction(user.uid, friendUid);
      router.push("/profile/friends");
    } catch (err) {
      console.error("[FriendProfileView] Remove failed:", err);
      setRemoving(false);
      setConfirmRemove(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div
          className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 pb-3 dark:border-gray-700 dark:bg-gray-800"
          style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
        >
          <Link
            href="/profile/friends"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">Profile</h1>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {error || "Could not load this profile."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div
        className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
      >
        <div className="flex items-center gap-2 px-4 pb-3">
          <Link
            href="/profile/friends"
            className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate">
            {profile.displayName || "Trainer"}
          </h1>
        </div>
      </div>

      <div className="p-4 pb-24">
        {/* Profile card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center gap-4">
            {/* Avatar */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-red-100 dark:bg-red-900/30">
              {profile.photoURL ? (
                <Image
                  src={profile.photoURL}
                  alt=""
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-red-500">
                  {(profile.displayName || "?")[0].toUpperCase()}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-bold text-gray-900 truncate dark:text-white">
                {profile.displayName || "Trainer"}
              </h2>
              {profile.friendCode && (
                <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                  Code: <span className="font-mono font-semibold">{profile.friendCode}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: "Favorites", value: profile.favoritesCount ?? 0 },
            { label: "Caught", value: profile.collectionCount ?? 0 },
            { label: "Teams", value: profile.teamCount ?? 0 },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white p-3 text-center shadow-sm dark:bg-gray-800"
            >
              <p className="text-xl font-bold text-red-500">{stat.value}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Public teams */}
        <div className="mt-6">
          <h3 className="mb-3 text-sm font-bold text-gray-900 dark:text-white">
            Public Teams ({publicTeams.length})
          </h3>
          {publicTeams.length === 0 ? (
            <div className="rounded-xl bg-white px-4 py-8 text-center shadow-sm dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No public teams to show
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {publicTeams.map((team) => (
                <TeamCard key={team.id} team={team} readOnly />
              ))}
            </div>
          )}
        </div>

        {/* Remove friend */}
        <div className="mt-6">
          {confirmRemove ? (
            <div className="flex gap-2">
              <button
                onClick={() => setConfirmRemove(false)}
                className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleRemove}
                disabled={removing}
                className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
              >
                {removing ? "Removing..." : "Confirm Remove"}
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmRemove(true)}
              className="w-full rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 dark:border-red-900 dark:bg-gray-800 dark:hover:bg-red-900/20"
            >
              Remove Friend
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
