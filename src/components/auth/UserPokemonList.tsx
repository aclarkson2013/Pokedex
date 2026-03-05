"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { useUserDataStore } from "@/stores/user-data-store";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import {
  PokemonFilterBar,
  filterPokemon,
} from "@/components/pokemon/PokemonFilterBar";

interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface UserPokemonListProps {
  type: "favorites" | "collection";
}

export function UserPokemonList({ type }: UserPokemonListProps) {
  const { user, isLoading: authLoading } = useAuth();
  const { favorites, collection, isLoaded } = useUserDataStore();
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  /* ── Filter state ────────────────────────────────────── */
  const [selectedGens, setSelectedGens] = useState<Set<number>>(new Set());
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());

  const toggleGen = useCallback((gen: number) => {
    setSelectedGens((prev) => {
      const next = new Set(prev);
      if (next.has(gen)) next.delete(gen);
      else next.add(gen);
      return next;
    });
  }, []);

  const toggleType = useCallback((t: string) => {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setSelectedGens(new Set());
    setSelectedTypes(new Set());
  }, []);

  /* ── Derived data ────────────────────────────────────── */
  const title = type === "favorites" ? "My Favorites" : "My Collection";
  const emptyIcon = type === "favorites" ? "⭐" : "📊";
  const emptyText =
    type === "favorites"
      ? "No favorites yet! Tap the heart on any Pokémon to add it here."
      : "No Pokémon caught yet! Mark Pokémon as caught to track your progress.";

  const ids = type === "favorites" ? favorites : collection;

  // Load Pokemon data for display
  useEffect(() => {
    fetch("/data/all-pokemon.json")
      .then((res) => res.json())
      .then((data: PokemonListItem[]) => {
        setAllPokemon(data);
        setDataLoaded(true);
      })
      .catch(console.error);
  }, []);

  // Filter to user's pokemon, then apply gen + type filters
  const pokemonList = useMemo(() => {
    const userPokemon = allPokemon.filter((p) => ids.has(p.id));
    return filterPokemon(userPokemon, selectedGens, selectedTypes);
  }, [allPokemon, ids, selectedGens, selectedTypes]);

  // Total user pokemon (before gen/type filters) for context
  const totalUserPokemon = useMemo(
    () => allPokemon.filter((p) => ids.has(p.id)).length,
    [allPokemon, ids]
  );

  const totalPokemon = 1025;
  const progressPercent =
    type === "collection"
      ? Math.round((ids.size / totalPokemon) * 100)
      : null;

  /* ── Not logged in ───────────────────────────────────── */
  if (!authLoading && !user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Sign in to view your {type}.
        </p>
        <Link
          href="/login"
          className="rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Sign In
        </Link>
      </main>
    );
  }

  /* ── Loading ─────────────────────────────────────────── */
  if (authLoading || !isLoaded || !dataLoaded) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
      </main>
    );
  }

  /* ── Main view ───────────────────────────────────────── */
  return (
    <main className="min-h-screen p-4">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <Link
          href="/profile"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {ids.size} {type === "favorites" ? "favorited" : "caught"}
            {type === "collection" && ` / ${totalPokemon}`}
          </p>
        </div>
      </div>

      {/* Collection progress bar */}
      {type === "collection" && ids.size > 0 && (
        <div className="mb-4 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
              Collection Progress
            </span>
            <span className="text-xs font-bold text-green-600 dark:text-green-400">
              {progressPercent}%
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
            <div
              className="h-full rounded-full bg-green-500 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Filters (only show when user has pokemon) */}
      {totalUserPokemon > 0 && (
        <PokemonFilterBar
          selectedGens={selectedGens}
          selectedTypes={selectedTypes}
          onToggleGen={toggleGen}
          onToggleType={toggleType}
          onClearAll={clearAll}
          resultCount={pokemonList.length}
          totalCount={totalUserPokemon}
        />
      )}

      {/* Pokemon grid or empty state */}
      {totalUserPokemon === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <span className="text-5xl mb-4">{emptyIcon}</span>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-xs">
            {emptyText}
          </p>
          <Link
            href="/"
            className="mt-4 text-sm font-medium text-red-500 hover:text-red-600"
          >
            Browse Pokédex →
          </Link>
        </div>
      ) : pokemonList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <span className="text-3xl mb-3">🔍</span>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-xs">
            No matches for the current filters.
          </p>
          <button
            onClick={clearAll}
            className="mt-3 text-sm font-medium text-red-500 hover:text-red-600"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {pokemonList.map((p) => (
            <PokemonCard
              key={p.id}
              id={p.id}
              name={p.name}
              types={p.types}
              sprite={p.sprite}
            />
          ))}
        </div>
      )}

      <div className="h-4" />
    </main>
  );
}
