"use client";

import { useState, useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { PokemonCard } from "./PokemonCard";
import { ALL_TYPES } from "@/lib/pokemon/type-colors";
import { cn } from "@/lib/utils/cn";

interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokemonGridProps {
  pokemon: PokemonListItem[];
}

const GENERATIONS = [
  { label: "All", value: 0, range: [1, 1025] },
  { label: "I", value: 1, range: [1, 151] },
  { label: "II", value: 2, range: [152, 251] },
  { label: "III", value: 3, range: [252, 386] },
  { label: "IV", value: 4, range: [387, 493] },
  { label: "V", value: 5, range: [494, 649] },
  { label: "VI", value: 6, range: [650, 721] },
  { label: "VII", value: 7, range: [722, 809] },
  { label: "VIII", value: 8, range: [810, 905] },
  { label: "IX", value: 9, range: [906, 1025] },
];

export function PokemonGrid({ pokemon }: PokemonGridProps) {
  const [selectedGen, setSelectedGen] = useState(0);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  // Filter Pokemon by generation and type
  const filtered = useMemo(() => {
    let result = pokemon;

    if (selectedGen > 0) {
      const gen = GENERATIONS.find((g) => g.value === selectedGen);
      if (gen) {
        result = result.filter(
          (p) => p.id >= gen.range[0] && p.id <= gen.range[1]
        );
      }
    }

    if (selectedType) {
      result = result.filter((p) => p.types.includes(selectedType));
    }

    return result;
  }, [pokemon, selectedGen, selectedType]);

  // Calculate grid columns based on container width
  // We'll use CSS grid for columns and virtualize rows
  const COLS = 3; // mobile default, we handle responsive via CSS
  const ROW_HEIGHT = 180; // approximate row height in px

  const rowCount = Math.ceil(filtered.length / COLS);

  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5,
  });

  return (
    <div className="flex flex-col h-full">
      {/* Generation filter chips */}
      <div className="mb-3 flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        {GENERATIONS.map((gen) => (
          <button
            key={gen.value}
            onClick={() => setSelectedGen(gen.value)}
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
              selectedGen === gen.value
                ? "bg-red-500 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            )}
          >
            {gen.value === 0 ? "All" : `Gen ${gen.label}`}
          </button>
        ))}
      </div>

      {/* Type filter chips */}
      <div className="mb-4 flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
        <button
          onClick={() => setSelectedType(null)}
          className={cn(
            "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            selectedType === null
              ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
          )}
        >
          All Types
        </button>
        {ALL_TYPES.map((type) => (
          <button
            key={type}
            onClick={() =>
              setSelectedType(selectedType === type ? null : type)
            }
            className={cn(
              "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium capitalize transition-colors",
              selectedType === type
                ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
            )}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p className="mb-3 text-xs text-gray-500 dark:text-gray-400">
        Showing {filtered.length} Pokemon
      </p>

      {/* Virtualized grid */}
      <div
        ref={parentRef}
        className="flex-1 overflow-y-auto"
        style={{ height: "calc(100vh - 280px)" }}
      >
        <div
          className="relative w-full"
          style={{ height: `${virtualizer.getTotalSize()}px` }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const startIndex = virtualRow.index * COLS;
            const rowItems = filtered.slice(startIndex, startIndex + COLS);

            return (
              <div
                key={virtualRow.key}
                className="absolute left-0 right-0 grid grid-cols-3 gap-2 px-0.5 sm:gap-3"
                style={{
                  top: `${virtualRow.start}px`,
                  height: `${virtualRow.size}px`,
                }}
              >
                {rowItems.map((p) => (
                  <PokemonCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    types={p.types}
                    sprite={p.sprite}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
