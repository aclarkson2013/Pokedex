"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Fuse from "fuse.js";
import { getAllPokemonList, type PokemonListItem } from "@/lib/db/pokemon-db";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import { formatPokemonName, formatPokemonId } from "@/lib/utils/format";

interface PokemonPickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (pokemon: PokemonListItem) => void;
}

export function PokemonPicker({ isOpen, onClose, onSelect }: PokemonPickerProps) {
  const [allPokemon, setAllPokemon] = useState<PokemonListItem[]>([]);
  const [results, setResults] = useState<PokemonListItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const fuseRef = useRef<Fuse<PokemonListItem> | null>(null);

  // Load all Pokemon from IndexedDB
  useEffect(() => {
    if (!isOpen) return;

    let cancelled = false;

    async function load() {
      setIsLoading(true);
      try {
        const list = await getAllPokemonList();
        if (cancelled) return;
        setAllPokemon(list);
        setResults(list.slice(0, 100)); // Show first 100 by default
        fuseRef.current = new Fuse(list, {
          keys: ["name", "id"],
          threshold: 0.3,
          distance: 100,
        });
      } catch (err) {
        console.error("[PokemonPicker] Failed to load:", err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && !isLoading) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isLoading]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setResults([]);
    }
  }, [isOpen]);

  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      if (!query.trim()) {
        setResults(allPokemon.slice(0, 100));
        return;
      }

      if (fuseRef.current) {
        const fuseResults = fuseRef.current.search(query, { limit: 50 });
        setResults(fuseResults.map((r) => r.item));
      }
    },
    [allPokemon]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div
        className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 pb-3 dark:border-gray-700 dark:bg-gray-800"
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
      >
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Choose Pokemon
        </h2>
      </div>

      {/* Search */}
      <div className="border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name or number..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 outline-none transition-colors focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-red-500 dark:focus:ring-red-900/30"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 p-0.5 text-gray-500 dark:bg-gray-600 dark:text-gray-400"
            >
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto pb-[env(safe-area-inset-bottom,0px)]">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
          </div>
        ) : results.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              No Pokemon found for &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {results.map((pokemon) => (
              <button
                key={pokemon.id}
                onClick={() => onSelect(pokemon)}
                className="flex w-full items-center gap-3 px-4 py-2.5 transition-colors hover:bg-white active:bg-gray-100 dark:hover:bg-gray-800 dark:active:bg-gray-700"
              >
                <Image
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  width={40}
                  height={40}
                  className="pixelated h-10 w-10 object-contain"
                  loading="lazy"
                />
                <div className="flex-1 text-left">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {formatPokemonName(pokemon.name)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {formatPokemonId(pokemon.id)}
                    </span>
                  </div>
                  <div className="mt-0.5 flex gap-1">
                    {pokemon.types.map((type) => (
                      <TypeBadge key={type} type={type} size="sm" />
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
