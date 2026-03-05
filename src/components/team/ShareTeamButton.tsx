"use client";

import { useState } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { createSharedTeam } from "@/lib/firebase/sharing";
import type { TeamMember } from "@/lib/firebase/teams";

interface ShareTeamButtonProps {
  teamName: string;
  members: TeamMember[];
}

/**
 * Share button that creates a shared team snapshot and uses
 * the Web Share API (native share sheet on iOS) with clipboard fallback.
 */
export function ShareTeamButton({ teamName, members }: ShareTeamButtonProps) {
  const { user } = useAuth();
  const [sharing, setSharing] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (!user || members.length === 0) return;
    setSharing(true);

    try {
      const shareId = await createSharedTeam(
        user.uid,
        user.displayName ?? "Trainer",
        teamName,
        members
      );

      const shareUrl = `${window.location.origin}/share/team/${shareId}`;

      // Try native share API first (iOS / Android)
      if (navigator.share) {
        try {
          await navigator.share({
            title: `${teamName} — Pokedex Team`,
            text: `Check out my team "${teamName}"!`,
            url: shareUrl,
          });
        } catch {
          // User cancelled share — that's fine
        }
      } else {
        // Clipboard fallback
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("[ShareTeamButton] Share failed:", err);
    } finally {
      setSharing(false);
    }
  }

  if (!user || members.length === 0) return null;

  return (
    <button
      onClick={handleShare}
      disabled={sharing}
      className="flex items-center gap-1.5 rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
    >
      {sharing ? (
        <div className="h-3.5 w-3.5 animate-spin rounded-full border border-white/30 border-t-white" />
      ) : (
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      )}
      {copied ? "Copied!" : sharing ? "Sharing..." : "Share"}
    </button>
  );
}
