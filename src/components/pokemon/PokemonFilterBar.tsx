"use client";

import { ALL_TYPES } from "@/lib/pokemon/type-colors";
import { cn } from "@/lib/utils/cn";

/* ── Generation ranges ─────────────────────────────────── */
export const GENERATIONS = [
  { label: "Gen I", value: 1, range: [1, 151] as [number, number] },
  { label: "Gen II", value: 2, range: [152, 251] as [number, number] },
  { label: "Gen III", value: 3, range: [252, 386] as [number, number] },
  { label: "Gen IV", value: 4, range: [387, 493] as [number, number] },
  { label: "Gen V", value: 5, range: [494, 649] as [number, number] },
  { label: "Gen VI", value: 6, range: [650, 721] as [number, number] },
  { label: "Gen VII", value: 7, range: [722, 809] as [number, number] },
  { label: "Gen VIII", value: 8, range: [810, 905] as [number, number] },
  { label: "Gen IX", value: 9, range: [906, 1025] as [number, number] },
];

/* ── Filter helper ─────────────────────────────────────── */
export function filterPokemon<
  T extends { id: number; types: string[] },
>(pokemon: T[], selectedGens: Set<number>, selectedTypes: Set<string>): T[] {
  let result = pokemon;

  if (selectedGens.size > 0) {
    result = result.filter((p) =>
      Array.from(selectedGens).some((genValue) => {
        const gen = GENERATIONS.find((g) => g.value === genValue);
        return gen ? p.id >= gen.range[0] && p.id <= gen.range[1] : false;
      })
    );
  }

  if (selectedTypes.size > 0) {
    result = result.filter((p) =>
      p.types.some((t) => selectedTypes.has(t))
    );
  }

  return result;
}

/* ── Component ─────────────────────────────────────────── */
interface PokemonFilterBarProps {
  selectedGens: Set<number>;
  selectedTypes: Set<string>;
  onToggleGen: (gen: number) => void;
  onToggleType: (type: string) => void;
  onClearAll: () => void;
  resultCount: number;
  totalCount: number;
}

export function PokemonFilterBar({
  selectedGens,
  selectedTypes,
  onToggleGen,
  onToggleType,
  onClearAll,
  resultCount,
  totalCount,
}: PokemonFilterBarProps) {
  const hasFilters = selectedGens.size > 0 || selectedTypes.size > 0;
  const filterCount = selectedGens.size + selectedTypes.size;

  return (
    <div className="flex flex-col">
      {/* Generation filter chips */}
      <div className="mb-2 flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        <button
          onClick={onClearAll}
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            !hasFilters
              ? "bg-red-500 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          )}
        >
          All
        </button>
        {GENERATIONS.map((gen) => (
          <button
            key={gen.value}
            onClick={() => onToggleGen(gen.value)}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              selectedGens.has(gen.value)
                ? "bg-red-500 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            )}
          >
            {gen.label}
          </button>
        ))}
      </div>

      {/* Type filter chips */}
      <div className="mb-3 flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        <button
          onClick={() => {
            /* "All Types" just clears selected types (keep gens) */
            if (selectedTypes.size > 0) {
              /* remove all types by toggling each — or we can pass a dedicated clear */
              for (const t of Array.from(selectedTypes)) {
                onToggleType(t);
              }
            }
          }}
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            selectedTypes.size === 0
              ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
          )}
        >
          All Types
        </button>
        {ALL_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => onToggleType(type)}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors",
              selectedTypes.has(type)
                ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Result count + clear filters */}
      <div className="mb-3 flex items-center gap-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Showing {resultCount} Pokémon
          {resultCount < totalCount && ` of ${totalCount}`}
        </p>
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="text-xs font-medium text-red-500 hover:text-red-600 dark:text-red-400"
          >
            Clear filters ({filterCount})
          </button>
        )}
      </div>
    </div>
  );
}
