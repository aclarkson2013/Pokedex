"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { useTeamStore } from "@/stores/team-store";
import { getTeam, type TeamDocument } from "@/lib/firebase/teams";
import { TeamEditor } from "@/components/team/TeamEditor";

export default function EditTeamPage() {
  const params = useParams();
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const { isLoaded, loadTeams } = useTeamStore();

  const teamId = params.teamId as string;
  const [team, setTeam] = useState<TeamDocument | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  // Load teams into store if not already loaded
  useEffect(() => {
    if (user && !isLoaded) {
      loadTeams(user.uid);
    }
  }, [user, isLoaded, loadTeams]);

  // Fetch the specific team
  useEffect(() => {
    if (!user || !teamId) return;

    let cancelled = false;

    async function fetchTeam() {
      setLoading(true);
      try {
        const doc = await getTeam(user!.uid, teamId);
        if (cancelled) return;
        if (!doc) {
          router.replace("/teams");
          return;
        }
        setTeam(doc);
      } catch (err) {
        console.error("[EditTeamPage] Failed to load team:", err);
        if (!cancelled) router.replace("/teams");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchTeam();
    return () => {
      cancelled = true;
    };
  }, [user, teamId, router]);

  // Auth loading
  if (authLoading || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  // Not logged in
  if (!user) {
    router.replace("/login");
    return null;
  }

  if (!team) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </div>
    );
  }

  return <TeamEditor team={team} />;
}
