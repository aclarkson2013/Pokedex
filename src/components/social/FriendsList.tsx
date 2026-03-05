"use client";

import Image from "next/image";
import Link from "next/link";
import type { FriendEntry } from "@/lib/firebase/friends";

interface FriendsListProps {
  friends: FriendEntry[];
}

export function FriendsList({ friends }: FriendsListProps) {
  if (friends.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          No friends yet
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
          Add friends using their friend code!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {friends.map((friend) => (
        <Link
          key={friend.friendUid}
          href={`/profile/friends/${friend.friendUid}`}
          className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm transition-all hover:shadow-md active:scale-[0.98] dark:bg-gray-800"
        >
          {/* Avatar */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            {friend.friendPhotoURL ? (
              <Image
                src={friend.friendPhotoURL}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <span className="text-sm font-bold text-red-500">
                {(friend.friendDisplayName || "?")[0].toUpperCase()}
              </span>
            )}
          </div>

          {/* Name */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
              {friend.friendDisplayName || "Trainer"}
            </p>
          </div>

          {/* Arrow */}
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
