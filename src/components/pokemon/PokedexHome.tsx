"use client";

import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { PokemonGrid } from "./PokemonGrid";

interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface SearchItem {
  id: number;
  name: string;
  displayName: string;
  types: string[];
  genus: string;
  generation: number;
  sprite: string;
}

export function PokedexHome() {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  const [searchIndex, setSearchIndex] = useState<SearchItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [listRes, searchRes] = await Promise.all([
          fetch("/data/all-pokemon.json"),
          fetch("/data/search-index.json"),
        ]);

        const [listData, searchData] = await Promise.all([
          listRes.json(),
          searchRes.json(),
        ]);

        setPokemon(listData);
        setSearchIndex(searchData);
      } catch (err) {
        console.error("Failed to load Pokemon data:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col p-4" style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 1rem)` }}>
        {/* Header skeleton */}
        <div className="mb-4 flex items-center justify-between">
          <div className="h-8 w-28 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-6 w-20 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
        </div>
        {/* Search bar skeleton */}
        <div className="mb-4 h-12 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
        {/* Grid skeleton */}
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"
            />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col p-4" style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 1rem)` }}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Pokédex
        </h1>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {pokemon.length} Pokemon
        </span>
      </div>

      {/* Search */}
      <div className="mb-4">
        <SearchBar searchIndex={searchIndex} />
      </div>

      {/* Grid */}
      <PokemonGrid pokemon={pokemon} />
    </main>
  );
}
