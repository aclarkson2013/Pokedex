"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { PokemonCard } from "./PokemonCard";
import { PokemonFilterBar, filterPokemon } from "./PokemonFilterBar";

interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokemonGridProps {
  pokemon: PokemonListItem[];
}

export function PokemonGrid({ pokemon }: PokemonGridProps) {
  const [selectedGens, setSelectedGens] = useState<Set<number>>(new Set());
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const parentRef = useRef<HTMLDivElement>(null);

  const toggleGen = useCallback((gen: number) => {
    setSelectedGens((prev) => {
      const next = new Set(prev);
      if (next.has(gen)) next.delete(gen);
      else next.add(gen);
      return next;
    });
  }, []);

  const toggleType = useCallback((type: string) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setSelectedGens(new Set());
    setSelectedTypes(new Set());
  }, []);

  // Filter Pokemon by selected generations and types
  const filtered = useMemo(
    () => filterPokemon(pokemon, selectedGens, selectedTypes),
    [pokemon, selectedGens, selectedTypes]
  );

  // Virtualization
  const COLS = 3;
  const ROW_HEIGHT = 180;
  const rowCount = Math.ceil(filtered.length / COLS);

  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5,
  });

  return (
    <div className="flex flex-col h-full">
      <PokemonFilterBar
        selectedGens={selectedGens}
        selectedTypes={selectedTypes}
        onToggleGen={toggleGen}
        onToggleType={toggleType}
        onClearAll={clearAll}
        resultCount={filtered.length}
        totalCount={pokemon.length}
      />

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
