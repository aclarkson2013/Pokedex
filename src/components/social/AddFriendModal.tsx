"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/providers/AuthProvider";
import { useFriendsStore } from "@/stores/friends-store";
import { lookupByFriendCode, areFriends, hasExistingRequest } from "@/lib/firebase/friends";
import type { UserProfile } from "@/lib/firebase/auth";

interface AddFriendModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddFriendModal({ isOpen, onClose }: AddFriendModalProps) {
  const { user } = useAuth();
  const { sendRequest } = useFriendsStore();

  const [code, setCode] = useState("");
  const [searching, setSearching] = useState(false);
  const [sending, setSending] = useState(false);
  const [foundUser, setFoundUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  function handleCodeChange(value: string) {
    // Auto-uppercase, strip non-alphanumeric
    const clean = value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 8);
    setCode(clean);
    setFoundUser(null);
    setError(null);
    setSuccess(false);
  }

  async function handleLookup() {
    if (!user || code.length < 4) return;
    setSearching(true);
    setError(null);
    setFoundUser(null);

    try {
      const profile = await lookupByFriendCode(code);
      if (!profile) {
        setError("No user found with that friend code.");
        return;
      }
      if (profile.uid === user.uid) {
        setError("That's your own friend code!");
        return;
      }

      // Check if already friends
      const alreadyFriends = await areFriends(user.uid, profile.uid);
      if (alreadyFriends) {
        setError("You're already friends!");
        return;
      }

      // Check for existing pending request
      const existingReq = await hasExistingRequest(user.uid, profile.uid);
      if (existingReq) {
        setError("You already have a pending request to this user.");
        return;
      }

      setFoundUser(profile);
    } catch (err: unknown) {
      console.error("[AddFriend] Lookup failed:", err);
      // Provide specific error messages based on the error type
      const errMsg = err instanceof Error ? err.message : String(err);
      const errCode = (err as { code?: string })?.code;

      if (errCode === "permission-denied" || errMsg.includes("permission")) {
        setError(
          "Unable to search users. Your Firestore security rules may need to allow reading the users collection. Check the console for details."
        );
      } else if (errCode === "failed-precondition" || errMsg.includes("index")) {
        setError(
          "Database setup required. Check the browser console for a link to create the required Firestore index."
        );
      } else if (errCode === "unavailable" || errMsg.includes("network") || errMsg.includes("offline")) {
        setError("Network error. Please check your connection and try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setSearching(false);
    }
  }

  async function handleSendRequest() {
    if (!user || !foundUser) return;
    setSending(true);
    setError(null);

    try {
      await sendRequest(
        {
          uid: user.uid,
          displayName: user.displayName ?? "Trainer",
          photoURL: user.photoURL,
        },
        foundUser
      );
      setSuccess(true);
      setFoundUser(null);
    } catch (err) {
      console.error("[AddFriend] Send failed:", err);
      setError("Failed to send request. Please try again.");
    } finally {
      setSending(false);
    }
  }

  function handleClose() {
    setCode("");
    setFoundUser(null);
    setError(null);
    setSuccess(false);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div
        className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 pb-3 dark:border-gray-700 dark:bg-gray-800"
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
      >
        <button
          onClick={handleClose}
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Add Friend
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          Enter your friend&apos;s 8-character code to send them a request.
        </p>

        {/* Code input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => handleCodeChange(e.target.value)}
            placeholder="ABCD1234"
            maxLength={8}
            className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-center font-mono text-lg font-bold tracking-widest text-gray-900 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-red-900/30"
          />
          <button
            onClick={handleLookup}
            disabled={code.length < 4 || searching}
            className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
          >
            {searching ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              "Look Up"
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-3 rounded-xl bg-red-50 px-4 py-3 dark:bg-red-900/20">
            <p className="text-xs text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mt-3 rounded-xl bg-green-50 px-4 py-3 dark:bg-green-900/20">
            <p className="text-xs text-green-700 dark:text-green-300">
              Friend request sent! They&apos;ll see it in their requests.
            </p>
          </div>
        )}

        {/* Found user */}
        {foundUser && (
          <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                {foundUser.photoURL ? (
                  <Image
                    src={foundUser.photoURL}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-bold text-red-500">
                    {(foundUser.displayName || "?")[0].toUpperCase()}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  {foundUser.displayName || "Trainer"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Friend Code: {foundUser.friendCode}
                </p>
              </div>
            </div>

            <button
              onClick={handleSendRequest}
              disabled={sending}
              className="mt-3 w-full rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Friend Request"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
