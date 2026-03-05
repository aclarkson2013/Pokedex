"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getSharedTeam, type SharedTeamDocument } from "@/lib/firebase/sharing";
import { SharedTeamView } from "@/components/social/SharedTeamView";

export default function SharedTeamPage() {
  const params = useParams();
  const shareId = params.shareId as string;

  const [team, setTeam] = useState<SharedTeamDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!shareId) return;

    let cancelled = false;

    async function load() {
      setLoading(true);
      try {
        const doc = await getSharedTeam(shareId);
        if (cancelled) return;
        if (!doc) {
          setNotFound(true);
        } else {
          setTeam(doc);
        }
      } catch (err) {
        console.error("[SharedTeamPage] Failed to load:", err);
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [shareId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  if (notFound || !team) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center dark:bg-gray-900">
        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Team Not Found
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          This shared team link may have expired or been removed.
        </p>
      </div>
    );
  }

  return <SharedTeamView team={team} />;
}
