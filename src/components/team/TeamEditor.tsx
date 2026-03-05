"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/providers/AuthProvider";
import { useTeamStore } from "@/stores/team-store";
import { getPokemonById } from "@/lib/db/pokemon-db";
import { TeamSlot } from "./TeamSlot";
import { PokemonPicker } from "./PokemonPicker";
import { MemberEditor } from "./MemberEditor";
import { ShareTeamButton } from "./ShareTeamButton";
import type { TeamMember, TeamDocument } from "@/lib/firebase/teams";
import type { PokemonListItem } from "@/lib/db/pokemon-db";

interface TeamEditorProps {
  /** Existing team to edit, or undefined for new team. */
  team?: TeamDocument;
}

export function TeamEditor({ team }: TeamEditorProps) {
  const router = useRouter();
  const { user } = useAuth();
  const { addTeam, saveTeam, removeTeam } = useTeamStore();

  // Draft state
  const [name, setName] = useState(team?.name ?? "");
  const [isPublic, setIsPublic] = useState(team?.isPublic ?? false);
  const [members, setMembers] = useState<(TeamMember | null)[]>(() => {
    const slots = Array.from({ length: 6 }, (_, i) =>
      team?.members[i] ?? null
    );
    return slots;
  });

  // UI state
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [editingMember, setEditingMember] = useState<{
    index: number;
    member: TeamMember;
  } | null>(null);

  // Handlers
  function handleSlotTap(index: number) {
    const member = members[index];
    if (member) {
      // Edit existing member
      setEditingMember({ index, member });
    } else {
      // Open picker for empty slot
      setActiveSlot(index);
      setPickerOpen(true);
    }
  }

  const handlePokemonSelected = useCallback(
    async (pokemon: PokemonListItem) => {
      if (activeSlot === null) return;
      setPickerOpen(false);

      // Load full details from IndexedDB for abilities
      const detail = await getPokemonById(pokemon.id);
      const defaultAbility =
        detail?.abilities.find((a) => !a.isHidden)?.name ??
        detail?.abilities[0]?.name ??
        "";

      const newMember: TeamMember = {
        pokemonId: pokemon.id,
        pokemonName: pokemon.name,
        nickname: "",
        sprite: pokemon.sprite,
        types: pokemon.types,
        ability: defaultAbility,
        nature: "",
        moves: [],
      };

      setMembers((prev) => {
        const next = [...prev];
        next[activeSlot] = newMember;
        return next;
      });
      setActiveSlot(null);
    },
    [activeSlot]
  );

  function handleMemberSave(updated: TeamMember) {
    if (editingMember === null) return;
    setMembers((prev) => {
      const next = [...prev];
      next[editingMember.index] = updated;
      return next;
    });
    setEditingMember(null);
  }

  function handleMemberRemove() {
    if (editingMember === null) return;
    setMembers((prev) => {
      const next = [...prev];
      next[editingMember.index] = null;
      return next;
    });
    setEditingMember(null);
  }

  async function handleSave() {
    if (!user) return;
    setSaving(true);
    setError(null);

    const input = {
      name: name.trim() || "Unnamed Team",
      isPublic,
      members: members.filter((m): m is TeamMember => m !== null),
    };

    try {
      if (team) {
        await saveTeam(user.uid, team.id, input);
      } else {
        await addTeam(user.uid, input);
      }
      router.push("/teams");
    } catch (err) {
      console.error("[TeamEditor] Save failed:", err);
      const msg = err instanceof Error ? err.message : "Unknown error";
      setError(`Failed to save team: ${msg}`);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!user || !team) return;
    setDeleting(true);
    try {
      await removeTeam(user.uid, team.id);
      router.push("/teams");
    } catch (err) {
      console.error("[TeamEditor] Delete failed:", err);
    } finally {
      setDeleting(false);
      setConfirmDelete(false);
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header bar */}
        <div
          className="flex items-center justify-between border-b border-gray-200 bg-white px-4 pb-3 dark:border-gray-700 dark:bg-gray-800"
          style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="flex items-center gap-2">
            {team && (
              <ShareTeamButton
                teamName={name.trim() || "Unnamed Team"}
                members={members.filter((m): m is TeamMember => m !== null)}
              />
            )}
            <button
              onClick={handleSave}
              disabled={saving}
              className="rounded-lg bg-red-500 px-5 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </div>

        <div className="px-4 py-4">
          {/* Error banner */}
          {error && (
            <div className="mb-3 flex items-start gap-2 rounded-xl bg-red-50 px-4 py-3 dark:bg-red-900/20">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="flex-1 text-xs text-red-700 dark:text-red-300">{error}</p>
              <button
                onClick={() => setError(null)}
                className="text-red-400 hover:text-red-600"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {/* Team name */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Team Name"
            maxLength={30}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-base font-semibold text-gray-900 outline-none transition-colors focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-red-900/30"
          />

          {/* Public toggle */}
          <div className="mt-3 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-gray-800">
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Public Team
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Visible to friends
              </p>
            </div>
            <button
              onClick={() => setIsPublic(!isPublic)}
              className={`relative h-7 w-12 rounded-full transition-colors ${
                isPublic ? "bg-red-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
              role="switch"
              aria-checked={isPublic}
            >
              <div
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
                  isPublic ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          {/* 2x3 slot grid */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {members.map((member, idx) => (
              <TeamSlot
                key={idx}
                member={member}
                index={idx}
                onTap={() => handleSlotTap(idx)}
              />
            ))}
          </div>

          {/* Delete button (only for existing teams) */}
          {team && (
            <div className="mt-6">
              {confirmDelete ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => setConfirmDelete(false)}
                    className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    disabled={deleting}
                    className="flex-1 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600 disabled:opacity-50"
                  >
                    {deleting ? "Deleting..." : "Confirm Delete"}
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmDelete(true)}
                  className="w-full rounded-xl border border-red-200 bg-white px-4 py-3 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 dark:border-red-900 dark:bg-gray-800 dark:hover:bg-red-900/20"
                >
                  Delete Team
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Pokemon Picker */}
      <PokemonPicker
        isOpen={pickerOpen}
        onClose={() => {
          setPickerOpen(false);
          setActiveSlot(null);
        }}
        onSelect={handlePokemonSelected}
      />

      {/* Member Editor */}
      {editingMember && (
        <MemberEditor
          isOpen={true}
          member={editingMember.member}
          onClose={() => setEditingMember(null)}
          onSave={handleMemberSave}
          onRemove={handleMemberRemove}
        />
      )}
    </>
  );
}
