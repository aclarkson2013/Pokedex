"use client";

import { useState, useMemo } from "react";
import { formatMoveName } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

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

export function MovesTab({ moves }: MovesTabProps) {
  const [activeMethod, setActiveMethod] = useState("level-up");

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
        <div className="flex items-center border-b border-gray-100 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-750">
          {activeMethod === "level-up" && (
            <span className="w-12 text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
              Lv.
            </span>
          )}
          <span className="flex-1 text-[10px] font-semibold uppercase text-gray-500 dark:text-gray-400">
            Move
          </span>
        </div>

        {/* Move rows */}
        <div className="max-h-[400px] overflow-y-auto">
          {currentMoves.length === 0 ? (
            <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              No moves found for this method.
            </div>
          ) : (
            currentMoves.map((move, idx) => (
              <div
                key={`${move.name}-${idx}`}
                className={cn(
                  "flex items-center px-4 py-2.5",
                  idx % 2 === 0
                    ? "bg-white dark:bg-gray-800"
                    : "bg-gray-50/50 dark:bg-gray-750/50"
                )}
              >
                {activeMethod === "level-up" && (
                  <span className="w-12 text-xs font-medium text-gray-500 dark:text-gray-400">
                    {move.levelLearnedAt > 0 ? move.levelLearnedAt : "—"}
                  </span>
                )}
                <span className="flex-1 text-sm text-gray-800 dark:text-gray-100">
                  {formatMoveName(move.name)}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
