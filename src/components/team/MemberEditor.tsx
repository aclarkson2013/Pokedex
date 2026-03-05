"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { formatPokemonName, formatMoveName, formatAbilityName } from "@/lib/utils/format";
import { useTeamMemberData } from "@/lib/hooks/useTeamMemberData";
import { AbilityPicker } from "./AbilityPicker";
import { NaturePicker } from "./NaturePicker";
import { MovePicker } from "./MovePicker";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import { cn } from "@/lib/utils/cn";
import type { TeamMember } from "@/lib/firebase/teams";

interface MemberEditorProps {
  isOpen: boolean;
  member: TeamMember;
  onClose: () => void;
  onSave: (updated: TeamMember) => void;
  onRemove: () => void;
}

type EditorTab = "info" | "ability" | "nature" | "moves";

export function MemberEditor({
  isOpen,
  member,
  onClose,
  onSave,
  onRemove,
}: MemberEditorProps) {
  const [draft, setDraft] = useState<TeamMember>(member);
  const [activeTab, setActiveTab] = useState<EditorTab>("info");
  const [movePickerOpen, setMovePickerOpen] = useState(false);
  const memberData = useTeamMemberData(member.pokemonId);

  // Reset draft when member changes
  useEffect(() => {
    setDraft(member);
    setActiveTab("info");
  }, [member]);

  if (!isOpen) return null;

  function handleSave() {
    onSave(draft);
    onClose();
  }

  function handleToggleMove(moveName: string) {
    setDraft((prev) => {
      const has = prev.moves.includes(moveName);
      if (has) {
        return { ...prev, moves: prev.moves.filter((m) => m !== moveName) };
      }
      if (prev.moves.length >= 4) return prev;
      return { ...prev, moves: [...prev.moves, moveName] };
    });
  }

  const tabs: { key: EditorTab; label: string }[] = [
    { key: "info", label: "Info" },
    { key: "ability", label: "Ability" },
    { key: "nature", label: "Nature" },
    { key: "moves", label: "Moves" },
  ];

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <div
          className="border-b border-gray-200 bg-white px-4 pb-3 dark:border-gray-700 dark:bg-gray-800"
          style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
        >
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={onRemove}
                className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/20"
              >
                Remove
              </button>
              <button
                onClick={handleSave}
                className="rounded-lg bg-red-500 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-600"
              >
                Save
              </button>
            </div>
          </div>

          {/* Pokemon preview */}
          <div className="mt-2 flex items-center gap-3">
            <Image
              src={member.sprite}
              alt={member.pokemonName}
              width={48}
              height={48}
              className="pixelated h-12 w-12 object-contain"
            />
            <div>
              <h2 className="text-base font-bold text-gray-900 dark:text-white">
                {draft.nickname || formatPokemonName(member.pokemonName)}
              </h2>
              <div className="mt-0.5 flex gap-1">
                {member.types.map((type) => (
                  <TypeBadge key={type} type={type} size="sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-3 flex">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "flex-1 border-b-2 pb-2 text-xs font-medium transition-colors",
                  activeTab === tab.key
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto p-4 pb-[env(safe-area-inset-bottom,0px)]">
          {activeTab === "info" && (
            <div className="space-y-4">
              {/* Nickname */}
              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-500 dark:text-gray-400">
                  Nickname
                </label>
                <input
                  type="text"
                  value={draft.nickname}
                  onChange={(e) =>
                    setDraft((prev) => ({ ...prev, nickname: e.target.value }))
                  }
                  placeholder={formatPokemonName(member.pokemonName)}
                  maxLength={12}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:ring-red-900/30"
                />
              </div>

              {/* Summary */}
              <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Summary
                </h3>

                <div className="space-y-3">
                  <SummaryRow
                    label="Ability"
                    value={draft.ability ? formatAbilityName(draft.ability) : "Not set"}
                    hasValue={!!draft.ability}
                  />
                  <SummaryRow
                    label="Nature"
                    value={draft.nature || "Not set"}
                    hasValue={!!draft.nature}
                  />
                  <div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Moves ({draft.moves.length}/4)
                    </span>
                    {draft.moves.length > 0 ? (
                      <div className="mt-1 flex flex-wrap gap-1">
                        {draft.moves.map((move) => (
                          <span
                            key={move}
                            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                          >
                            {formatMoveName(move)}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-1 text-xs text-gray-400">Not set</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ability" && (
            <div>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                Choose an ability for this Pokemon.
              </p>
              {memberData.isLoading ? (
                <div className="flex justify-center py-8">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
                </div>
              ) : (
                <AbilityPicker
                  abilities={memberData.abilities}
                  selected={draft.ability}
                  onSelect={(ability) =>
                    setDraft((prev) => ({ ...prev, ability }))
                  }
                />
              )}
            </div>
          )}

          {activeTab === "nature" && (
            <div>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                Natures affect stat growth. Green = boosted, Red = lowered.
              </p>
              <NaturePicker
                selected={draft.nature}
                onSelect={(nature) =>
                  setDraft((prev) => ({ ...prev, nature }))
                }
              />
            </div>
          )}

          {activeTab === "moves" && (
            <div>
              <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
                Select up to 4 moves. Tap &ldquo;Choose Moves&rdquo; to browse all available moves.
              </p>

              {/* Selected moves */}
              <div className="mb-4 space-y-2">
                {draft.moves.length > 0 ? (
                  draft.moves.map((move, idx) => (
                    <div
                      key={move}
                      className="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5 shadow-sm dark:bg-gray-800"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-[10px] font-bold text-red-500 dark:bg-red-900/30">
                        {idx + 1}
                      </span>
                      <span className="flex-1 text-sm font-medium text-gray-900 dark:text-white">
                        {formatMoveName(move)}
                      </span>
                      <button
                        onClick={() => handleToggleMove(move)}
                        className="text-gray-400 hover:text-red-500"
                        aria-label={`Remove ${formatMoveName(move)}`}
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="rounded-lg bg-gray-100 p-4 text-center dark:bg-gray-800">
                    <p className="text-xs text-gray-400">No moves selected</p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setMovePickerOpen(true)}
                className="w-full rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-600"
              >
                Choose Moves
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Move Picker overlay */}
      <MovePicker
        isOpen={movePickerOpen}
        onClose={() => setMovePickerOpen(false)}
        moves={memberData.moves}
        selectedMoves={draft.moves}
        onToggleMove={handleToggleMove}
      />
    </>
  );
}

function SummaryRow({
  label,
  value,
  hasValue,
}: {
  label: string;
  value: string;
  hasValue: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
      <span
        className={cn(
          "text-sm font-medium",
          hasValue
            ? "text-gray-900 dark:text-white"
            : "text-gray-400 dark:text-gray-500"
        )}
      >
        {value}
      </span>
    </div>
  );
}
