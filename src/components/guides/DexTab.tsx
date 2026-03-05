"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { getSpriteUrl } from "@/lib/pokemon/sprite-utils";
import { PokemonQuickView } from "./PokemonQuickView";
import type { GameDex } from "@/lib/pokemon/game-dex";

interface DexTabProps {
  dex: GameDex;
}

export function DexTab({ dex }: DexTabProps) {
  const [quickViewPokemonId, setQuickViewPokemonId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const handlePokemonClick = useCallback((pokemonId: number) => {
    setQuickViewPokemonId(pokemonId);
  }, []);

  // Filter Pokemon by version
  const filteredPokemon =
    filter === "all"
      ? dex.pokemon
      : dex.pokemon.filter((p) => p.versions.includes(filter));

  // Count stats
  const totalCount = dex.pokemon.length;
  const versionCounts = dex.versionTags.map((tag) => ({
    tag,
    count: dex.pokemon.filter((p) => p.versions.includes(tag)).length,
  }));

  return (
    <div>
      {/* Header */}
      <div className="mb-4 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
          Catchable Pokémon
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {totalCount} Pokémon available in this game.
          {versionCounts.map((vc) => (
            <span key={vc.tag}>
              {" "}
              <span className="font-semibold">{vc.tag}</span>: {vc.count}
            </span>
          ))}
        </p>
      </div>

      {/* Version filter */}
      <div className="mb-3 flex gap-1.5">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
            filter === "all"
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          All ({totalCount})
        </button>
        {dex.versionTags.map((tag, idx) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
              filter === tag
                ? idx === 0
                  ? "bg-red-500 text-white"
                  : "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {tag} ({versionCounts.find((v) => v.tag === tag)?.count ?? 0})
          </button>
        ))}
      </div>

      {/* Pokemon list */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
        {/* Header row */}
        <div className="grid grid-cols-[auto_1fr_auto_auto] gap-2 border-b border-gray-100 bg-gray-50 px-3 py-2 text-[9px] font-semibold text-gray-400 uppercase tracking-wider dark:border-gray-700 dark:bg-gray-750 dark:text-gray-500">
          <span className="w-5" />
          <span>Pokémon</span>
          <span className="w-14 text-center">Version</span>
          <span className="w-6 text-center">#</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
          {filteredPokemon.map((entry) => (
            <button
              key={entry.pokemonId}
              onClick={() => handlePokemonClick(entry.pokemonId)}
              className="grid w-full grid-cols-[auto_1fr_auto_auto] items-center gap-2 px-3 py-1.5 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="relative h-7 w-7 shrink-0">
                <Image
                  src={getSpriteUrl(entry.pokemonId)}
                  alt={entry.name}
                  fill
                  className="object-contain pixelated"
                  sizes="28px"
                  unoptimized
                />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-medium text-gray-900 dark:text-white">
                  {entry.name}
                </span>
                {entry.method && (
                  <p className="text-[9px] text-gray-400 dark:text-gray-500 truncate">
                    {entry.method}
                  </p>
                )}
              </div>
              <div className="flex w-14 justify-center gap-0.5">
                {dex.versionTags.map((tag, idx) => (
                  <span
                    key={tag}
                    className={
                      entry.versions.includes(tag)
                        ? "rounded px-1 py-0.5 text-[8px] font-bold text-white " +
                          (idx === 0 ? "bg-red-500" : "bg-green-600")
                        : "rounded px-1 py-0.5 text-[8px] font-bold text-gray-300 bg-gray-100 dark:text-gray-600 dark:bg-gray-700"
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="w-6 text-center text-[10px] font-mono text-gray-400 dark:text-gray-500">
                {entry.pokemonId}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Count footer */}
      <div className="mt-3 text-center text-[10px] text-gray-400 dark:text-gray-500">
        Showing {filteredPokemon.length} of {totalCount} Pokémon
      </div>

      {/* Quick View modal */}
      <PokemonQuickView
        pokemonId={quickViewPokemonId}
        onClose={() => setQuickViewPokemonId(null)}
      />
    </div>
  );
}
