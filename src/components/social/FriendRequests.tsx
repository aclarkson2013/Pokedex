"use client";

import Image from "next/image";
import { useAuth } from "@/providers/AuthProvider";
import { useFriendsStore } from "@/stores/friends-store";
import type { FriendRequestDocument, SentRequestRef } from "@/lib/firebase/friends";

export function FriendRequests() {
  const { user } = useAuth();
  const { incomingRequests, sentRequests, acceptRequest, declineRequest, cancelRequest } =
    useFriendsStore();

  const hasIncoming = incomingRequests.length > 0;
  const hasSent = sentRequests.length > 0;

  if (!hasIncoming && !hasSent) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          No pending requests
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Incoming */}
      {hasIncoming && (
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Incoming ({incomingRequests.length})
          </h3>
          <div className="space-y-2">
            {incomingRequests.map((req) => (
              <IncomingRequestCard
                key={req.id}
                request={req}
                onAccept={() => user && acceptRequest(user.uid, req)}
                onDecline={() => user && declineRequest(user.uid, req)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Sent */}
      {hasSent && (
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Sent ({sentRequests.length})
          </h3>
          <div className="space-y-2">
            {sentRequests.map((req) => (
              <SentRequestCard
                key={req.id}
                request={req}
                onCancel={() => user && cancelRequest(user.uid, req)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function IncomingRequestCard({
  request,
  onAccept,
  onDecline,
}: {
  request: FriendRequestDocument;
  onAccept: () => void;
  onDecline: () => void;
}) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
          {request.fromPhotoURL ? (
            <Image
              src={request.fromPhotoURL}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <span className="text-sm font-bold text-red-500">
              {(request.fromDisplayName || "?")[0].toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
            {request.fromDisplayName || "Trainer"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Wants to be friends
          </p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={onDecline}
          className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Decline
        </button>
        <button
          onClick={onAccept}
          className="flex-1 rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-600"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

function SentRequestCard({
  request,
  onCancel,
}: {
  request: SentRequestRef;
  onCancel: () => void;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-gray-800">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
        {request.toPhotoURL ? (
          <Image
            src={request.toPhotoURL}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span className="text-sm font-bold text-gray-500">
            {(request.toDisplayName || "?")[0].toUpperCase()}
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate dark:text-white">
          {request.toDisplayName || "Trainer"}
        </p>
        <p className="text-xs text-gray-400">Pending</p>
      </div>
      <button
        onClick={onCancel}
        className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700"
      >
        Cancel
      </button>
    </div>
  );
}
