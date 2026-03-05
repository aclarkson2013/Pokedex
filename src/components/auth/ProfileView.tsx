"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/providers/AuthProvider";
import { useUserDataStore } from "@/stores/user-data-store";
import { signOut, getUserProfile, type UserProfile } from "@/lib/firebase/auth";
import { cn } from "@/lib/utils/cn";

export function ProfileView() {
  const { user, isLoading, isConfigured } = useAuth();
  const { favorites, collection } = useUserDataStore();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    if (user && isConfigured) {
      getUserProfile(user.uid)
        .then(setProfile)
        .catch(console.error);
    }
  }, [user, isConfigured]);

  // Loading state
  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </main>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm text-center">
          {/* Pokeball icon */}
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <svg className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Your Trainer Profile
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Sign in to track favorites, build teams, and connect with friends.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-block w-full rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-600 active:scale-[0.98]"
          >
            Sign In / Create Account
          </Link>

          {/* Feature preview */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              { icon: "⭐", label: "Favorites", desc: "Save your faves" },
              { icon: "📊", label: "Collection", desc: "Track progress" },
              { icon: "👥", label: "Teams", desc: "Build dream teams" },
              { icon: "🤝", label: "Friends", desc: "Share & compare" },
            ].map((feature) => (
              <div
                key={feature.label}
                className="rounded-xl bg-white p-3 shadow-sm dark:bg-gray-800"
              >
                <span className="text-2xl">{feature.icon}</span>
                <p className="mt-1 text-xs font-semibold text-gray-800 dark:text-gray-100">
                  {feature.label}
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Logged in — show profile
  async function handleSignOut() {
    setSigningOut(true);
    try {
      await signOut();
    } catch (err) {
      console.error("Sign out error:", err);
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <main className="min-h-screen p-4">
      {/* Profile header */}
      <div className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-red-100 dark:bg-red-900/30">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="Avatar"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-red-500">
                {(user.displayName ?? user.email ?? "?")[0].toUpperCase()}
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate">
              {user.displayName ?? "Trainer"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              {user.email}
            </p>
            {profile?.friendCode && (
              <div className="mt-1 flex items-center gap-1">
                <span className="text-[10px] text-gray-400">Friend Code:</span>
                <span className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                  {profile.friendCode}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "Favorites", value: favorites.size.toString() },
          { label: "Caught", value: collection.size.toString() },
          { label: "Teams", value: "0" },
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

      {/* Menu items */}
      <div className="mt-4 rounded-2xl bg-white shadow-sm dark:bg-gray-800 overflow-hidden">
        {[
          { label: "My Favorites", icon: "⭐", href: "/profile/favorites", soon: false },
          { label: "My Collection", icon: "📊", href: "/profile/collection", soon: false },
          { label: "My Teams", icon: "👥", href: "/teams", soon: false },
          { label: "Friends", icon: "🤝", href: "/profile/friends", soon: true },
        ].map((item, idx) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700",
              idx > 0 && "border-t border-gray-100 dark:border-gray-700"
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="flex-1 text-sm font-medium text-gray-800 dark:text-gray-100">
              {item.label}
            </span>
            {item.soon && (
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                Soon
              </span>
            )}
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      {/* Sign Out */}
      <button
        onClick={handleSignOut}
        disabled={signingOut}
        className="mt-4 w-full rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 disabled:opacity-50 dark:border-red-900 dark:bg-gray-800 dark:hover:bg-red-900/20"
      >
        {signingOut ? "Signing out..." : "Sign Out"}
      </button>

      {/* Spacer for bottom nav */}
      <div className="h-4" />
    </main>
  );
}
