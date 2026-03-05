"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { useFriendsStore } from "@/stores/friends-store";
import { FriendsList } from "./FriendsList";
import { FriendRequests } from "./FriendRequests";
import { AddFriendModal } from "./AddFriendModal";
import { cn } from "@/lib/utils/cn";

type Tab = "friends" | "requests";

export function FriendsPage() {
  const { user, isLoading: authLoading } = useAuth();
  const { friends, incomingRequests, isLoaded } = useFriendsStore();
  const [activeTab, setActiveTab] = useState<Tab>("friends");
  const [addModalOpen, setAddModalOpen] = useState(false);

  const pendingCount = incomingRequests.length;

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
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Friends
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Sign in to add friends and share your progress.
        </p>
        <Link
          href="/login"
          className="mt-6 inline-block rounded-xl bg-red-500 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600"
        >
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div
          className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
          style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
        >
          <div className="flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-2">
              <Link
                href="/profile"
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                Friends
              </h1>
            </div>
            <button
              onClick={() => setAddModalOpen(true)}
              className="rounded-lg bg-red-500 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-600"
            >
              Add Friend
            </button>
          </div>

          {/* Tabs */}
          <div className="flex px-4">
            <button
              onClick={() => setActiveTab("friends")}
              className={cn(
                "flex-1 border-b-2 pb-2.5 text-sm font-medium transition-colors",
                activeTab === "friends"
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
              )}
            >
              Friends ({friends.length})
            </button>
            <button
              onClick={() => setActiveTab("requests")}
              className={cn(
                "relative flex-1 border-b-2 pb-2.5 text-sm font-medium transition-colors",
                activeTab === "requests"
                  ? "border-red-500 text-red-500"
                  : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
              )}
            >
              Requests
              {pendingCount > 0 && (
                <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
                  {pendingCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 pb-24">
          {!isLoaded ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
            </div>
          ) : activeTab === "friends" ? (
            <FriendsList friends={friends} />
          ) : (
            <FriendRequests />
          )}
        </div>
      </div>

      <AddFriendModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
      />
    </>
  );
}
