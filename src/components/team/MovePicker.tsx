"use client";

import { useState, useEffect } from "react";
import { formatMoveName } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import { getAllMovesMap, type MoveDetail } from "@/lib/db/pokemon-db";
import type { GroupedMoves } from "@/lib/hooks/useTeamMemberData";

interface MovePickerProps {
  isOpen: boolean;
  onClose: () => void;
  moves: GroupedMoves;
  selectedMoves: string[];
  onToggleMove: (moveName: string) => void;
}

type MoveCategory = "levelUp" | "tm" | "egg" | "tutor";

const CATEGORY_LABELS: Record<MoveCategory, string> = {
  levelUp: "Level Up",
  tm: "TM / HM",
  egg: "Egg Moves",
  tutor: "Tutor",
};

const DAMAGE_CLASS_SHORT: Record<string, { label: string; color: string }> = {
  physical: { label: "PHY", color: "text-orange-500" },
  special: { label: "SPE", color: "text-blue-500" },
  status: { label: "STA", color: "text-gray-400" },
};

export function MovePicker({
  isOpen,
  onClose,
  moves,
  selectedMoves,
  onToggleMove,
}: MovePickerProps) {
  const [activeTab, setActiveTab] = useState<MoveCategory>("levelUp");
  const [searchQuery, setSearchQuery] = useState("");
  const [moveDetailsMap, setMoveDetailsMap] = useState<Map<string, MoveDetail>>(
    new Map()
  );

  // Load move details from IndexedDB
  useEffect(() => {
    if (isOpen && moveDetailsMap.size === 0) {
      getAllMovesMap().then(setMoveDetailsMap).catch(() => {});
    }
  }, [isOpen, moveDetailsMap.size]);

  if (!isOpen) return null;

  const hasMoveDetails = moveDetailsMap.size > 0;
  const categories: MoveCategory[] = ["levelUp", "tm", "egg", "tutor"];
  const availableCategories = categories.filter(
    (cat) => moves[cat].length > 0
  );

  // If the active tab has no moves, switch to the first available
  const effectiveTab =
    availableCategories.includes(activeTab)
      ? activeTab
      : availableCategories[0] ?? "levelUp";

  const currentMoves = moves[effectiveTab] ?? [];
  const filteredMoves = searchQuery
    ? currentMoves.filter((m) =>
        formatMoveName(m.name)
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : currentMoves;

  const atLimit = selectedMoves.length >= 4;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div
        className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 pb-3 dark:border-gray-700 dark:bg-gray-800"
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
      >
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Select Moves
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {selectedMoves.length}/4 selected
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg bg-red-500 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-600"
        >
          Done
        </button>
      </div>

      {/* Search */}
      <div className="border-b border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search moves..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 outline-none focus:border-red-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Category tabs */}
      <div className="flex border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        {availableCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={cn(
              "flex-1 border-b-2 px-2 py-2.5 text-xs font-medium transition-colors",
              effectiveTab === cat
                ? "border-red-500 text-red-500"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400"
            )}
          >
            {CATEGORY_LABELS[cat]}
            <span className="ml-1 text-[10px] opacity-60">
              ({moves[cat].length})
            </span>
          </button>
        ))}
      </div>

      {/* Move list */}
      <div className="flex-1 overflow-y-auto pb-[env(safe-area-inset-bottom,0px)]">
        {filteredMoves.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-sm text-gray-400">No moves found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {filteredMoves.map((move) => {
              const isSelected = selectedMoves.includes(move.name);
              const disabled = atLimit && !isSelected;
              const detail = hasMoveDetails
                ? moveDetailsMap.get(move.name)
                : undefined;
              const dmgClass = detail
                ? DAMAGE_CLASS_SHORT[detail.damageClass]
                : null;

              return (
                <button
                  key={move.name}
                  onClick={() => !disabled && onToggleMove(move.name)}
                  disabled={disabled}
                  className={cn(
                    "flex w-full items-center gap-2 px-4 py-2.5 text-left transition-colors",
                    isSelected
                      ? "bg-red-50 dark:bg-red-900/10"
                      : disabled
                        ? "opacity-40"
                        : "hover:bg-white dark:hover:bg-gray-800"
                  )}
                >
                  {/* Checkbox */}
                  <div
                    className={cn(
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded border-2",
                      isSelected
                        ? "border-red-500 bg-red-500"
                        : "border-gray-300 dark:border-gray-600"
                    )}
                  >
                    {isSelected && (
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Move name */}
                  <span className="flex-1 text-sm font-medium text-gray-900 truncate dark:text-white">
                    {formatMoveName(move.name)}
                  </span>

                  {/* Move details: type badge + category + power */}
                  {detail && (
                    <div className="flex items-center gap-1.5 shrink-0">
                      <TypeBadge type={detail.type} size="sm" />
                      <span
                        className={cn(
                          "text-[10px] font-bold",
                          dmgClass?.color ?? "text-gray-400"
                        )}
                      >
                        {dmgClass?.label ?? "—"}
                      </span>
                      {detail.power && (
                        <span className="text-[10px] text-gray-500 dark:text-gray-400">
                          {detail.power}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Level (for level-up moves) */}
                  {!detail &&
                    "level" in move &&
                    (move as { level: number }).level > 0 && (
                      <span className="text-xs text-gray-400">
                        Lv. {(move as { level: number }).level}
                      </span>
                    )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
