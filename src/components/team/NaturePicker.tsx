"use client";

import { NATURES, STAT_LABELS, type Nature } from "@/lib/pokemon/natures";
import { cn } from "@/lib/utils/cn";

interface NaturePickerProps {
  selected: string;
  onSelect: (nature: string) => void;
}

export function NaturePicker({ selected, onSelect }: NaturePickerProps) {
  return (
    <div className="space-y-1.5">
      {NATURES.map((nature) => (
        <button
          key={nature.name}
          onClick={() => onSelect(nature.name)}
          className={cn(
            "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-colors",
            selected === nature.name
              ? "bg-red-50 ring-1 ring-red-400 dark:bg-red-900/20 dark:ring-red-500"
              : "bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
          )}
        >
          <span
            className={cn(
              "text-sm font-medium",
              selected === nature.name
                ? "text-red-600 dark:text-red-400"
                : "text-gray-900 dark:text-white"
            )}
          >
            {nature.name}
          </span>
          <NatureEffect nature={nature} />
        </button>
      ))}
    </div>
  );
}

function NatureEffect({ nature }: { nature: Nature }) {
  if (!nature.increasedStat || !nature.decreasedStat) {
    return (
      <span className="text-[10px] text-gray-400 dark:text-gray-500">
        Neutral
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2 text-[10px]">
      <span className="text-green-600 dark:text-green-400">
        +{STAT_LABELS[nature.increasedStat]}
      </span>
      <span className="text-red-500 dark:text-red-400">
        -{STAT_LABELS[nature.decreasedStat]}
      </span>
    </div>
  );
}
