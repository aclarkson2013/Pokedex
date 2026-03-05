"use client";

import { formatAbilityName } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

interface AbilityPickerProps {
  abilities: { name: string; isHidden: boolean }[];
  selected: string;
  onSelect: (ability: string) => void;
}

export function AbilityPicker({ abilities, selected, onSelect }: AbilityPickerProps) {
  if (abilities.length === 0) {
    return (
      <p className="text-xs text-gray-400 dark:text-gray-500">
        No abilities available
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {abilities.map((ability) => (
        <button
          key={ability.name}
          onClick={() => onSelect(ability.name)}
          className={cn(
            "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors",
            selected === ability.name
              ? "border-red-400 bg-red-50 dark:border-red-500 dark:bg-red-900/20"
              : "border-gray-200 bg-white hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
          )}
        >
          {/* Radio circle */}
          <div
            className={cn(
              "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2",
              selected === ability.name
                ? "border-red-500 bg-red-500"
                : "border-gray-300 dark:border-gray-600"
            )}
          >
            {selected === ability.name && (
              <div className="h-2 w-2 rounded-full bg-white" />
            )}
          </div>

          <div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {formatAbilityName(ability.name)}
            </span>
            {ability.isHidden && (
              <span className="ml-2 rounded-full bg-purple-100 px-1.5 py-0.5 text-[10px] font-medium text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                Hidden
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
