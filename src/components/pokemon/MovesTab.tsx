"use client";

import { useState, useMemo, useEffect } from "react";
import { formatMoveName } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";
import { TypeBadge } from "./TypeBadge";
import { getAllMovesMap, type MoveDetail } from "@/lib/db/pokemon-db";

interface Move {
  name: string;
  learnMethod: string;
  levelLearnedAt: number;
  versionGroup: string;
}

interface MovesTabProps {
  moves: Move[];
}

const LEARN_METHOD_LABELS: Record<string, string> = {
  "level-up": "Level Up",
  machine: "TM / HM",
  egg: "Egg",
  tutor: "Tutor",
};

const LEARN_METHOD_ORDER = ["level-up", "machine", "egg", "tutor"];

const DAMAGE_CLASS_ICONS: Record<string, { label: string; color: string }> = {
  physical: { label: "PHY", color: "text-orange-500" },
  special: { label: "SPE", color: "text-blue-500" },
  status: { label: "STA", color: "text-gray-500" },
};

export function MovesTab({ moves }: MovesTabProps) {
  const [activeMethod, setActiveMethod] = useState("level-up");
  const [moveDetailsMap, setMoveDetailsMap] = useState<Map<string, MoveDetail>>(
    new Map()
  );

  // Load move details from IndexedDB
  useEffect(() => {
    getAllMovesMap()
      .then(setMoveDetailsMap)
      .catch(() => {}); // Graceful fallback if moves not loaded yet
  }, []);

  const hasMoveDetails = moveDetailsMap.size > 0;

  // Group moves by learn method
  const groupedMoves = useMemo(() => {
    const groups: Record<string, Move[]> = {};
    for (const move of moves) {
      if (!groups[move.learnMethod]) {
        groups[move.learnMethod] = [];
      }
      groups[move.learnMethod].push(move);
    }
    return groups;
  }, [moves]);

  // Available methods that have moves
  const availableMethods = LEARN_METHOD_ORDER.filter(
    (method) => groupedMoves[method] && groupedMoves[method].length > 0
  );

  // Also include any methods not in our predefined list
  const otherMethods = Object.keys(groupedMoves).filter(
    (m) => !LEARN_METHOD_ORDER.includes(m)
  );

  const allMethods = [...availableMethods, ...otherMethods];
  const currentMoves = groupedMoves[activeMethod] ?? [];

  // Ensure active method is valid
  if (!allMethods.includes(activeMethod) && allMethods.length > 0) {
    return null; // Will be corrected by useEffect
  }

  return (
    <div className="space-y-3">
      {/* Method filter tabs */}
      <div className="flex gap-1.5 overflow-x-auto scrollbar-hide">
        {allMethods.map((method) => {
          const label =
            LEARN_METHOD_LABELS[method] ??
            method
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
          const count = groupedMoves[method]?.length ?? 0;

          return (
            <button
              key={method}
              onClick={() => setActiveMethod(method)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                activeMethod === method
                  ? "bg-blue-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
              )}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      {/* Moves list */}
      <div className="rounded-xl bg-white shadow-sm dark:bg-gray-800 overflow-hidden">
        {/* Table header */}
        <div className="flex items-center border-b border-gray-100 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-750">
          {activeMethod === "level-up" && (
            <span className="w-10 text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
              Lv.
            </span>
          )}
          <span className="flex-1 text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
            Move
          </span>
          {hasMoveDetails && (
            <>
              <span className="w-14 text-center text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
                Type
              </span>
              <span className="w-8 text-center text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
                Cat
              </span>
              <span className="w-10 text-right text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
                Pow
              </span>
              <span className="w-10 text-right text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
                Acc
              </span>
              <span className="w-8 text-right text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
                PP
              </span>
            </>
          )}
        </div>

        {/* Move rows */}
        <div className="max-h-[400px] overflow-y-auto">
          {currentMoves.length === 0 ? (
            <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              No moves found for this method.
            </div>
          ) : (
            currentMoves.map((move, idx) => {
              const detail = moveDetailsMap.get(move.name);
              const dmgClass = detail
                ? DAMAGE_CLASS_ICONS[detail.damageClass]
                : null;

              return (
                <div
                  key={`${move.name}-${idx}`}
                  className={cn(
                    "flex items-center px-3 py-2",
                    idx % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50/50 dark:bg-gray-750/50"
                  )}
                >
                  {activeMethod === "level-up" && (
                    <span className="w-10 text-xs font-medium text-gray-500 dark:text-gray-400">
                      {move.levelLearnedAt > 0 ? move.levelLearnedAt : "—"}
                    </span>
                  )}
                  <span className="flex-1 text-sm text-gray-800 dark:text-gray-100 truncate pr-1">
                    {formatMoveName(move.name)}
                  </span>
                  {hasMoveDetails && detail && (
                    <>
                      <span className="w-14 flex justify-center">
                        <TypeBadge type={detail.type} size="sm" />
                      </span>
                      <span
                        className={cn(
                          "w-8 text-center text-[10px] font-bold",
                          dmgClass?.color ?? "text-gray-400"
                        )}
                        title={detail.damageClass}
                      >
                        {dmgClass?.label ?? "—"}
                      </span>
                      <span className="w-10 text-right text-xs text-gray-700 dark:text-gray-300">
                        {detail.power ?? "—"}
                      </span>
                      <span className="w-10 text-right text-xs text-gray-700 dark:text-gray-300">
                        {detail.accuracy ? `${detail.accuracy}%` : "—"}
                      </span>
                      <span className="w-8 text-right text-xs text-gray-500 dark:text-gray-400">
                        {detail.pp || "—"}
                      </span>
                    </>
                  )}
                  {hasMoveDetails && !detail && (
                    <>
                      <span className="w-14" />
                      <span className="w-8" />
                      <span className="w-10" />
                      <span className="w-10" />
                      <span className="w-8" />
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
