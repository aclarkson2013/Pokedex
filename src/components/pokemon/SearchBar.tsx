"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Fuse from "fuse.js";
import { TypeBadge } from "./TypeBadge";
import { formatPokemonName, formatPokemonId } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

interface SearchItem {
  id: number;
  name: string;
  displayName: string;
  types: string[];
  genus: string;
  generation: number;
  sprite: string;
}

interface SearchBarProps {
  searchIndex: SearchItem[];
}

export function SearchBar({ searchIndex }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fuseRef = useRef<Fuse<SearchItem> | null>(null);

  // Initialize Fuse.js
  useEffect(() => {
    fuseRef.current = new Fuse(searchIndex, {
      keys: [
        { name: "displayName", weight: 2 },
        { name: "name", weight: 1.5 },
        { name: "types", weight: 0.5 },
        { name: "id", weight: 0.3 },
      ],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 1,
    });
  }, [searchIndex]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const timer = setTimeout(() => {
      if (!fuseRef.current) return;
      const fuseResults = fuseRef.current.search(query.trim(), { limit: 8 });
      setResults(fuseResults.map((r) => r.item));
      setSelectedIndex(-1);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, -1));
      } else if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();
        const selected = results[selectedIndex];
        if (selected) {
          window.location.href = `/pokemon/${selected.id}`;
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    },
    [results, selectedIndex]
  );

  return (
    <div className="relative w-full">
      {/* Search input */}
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
          placeholder="Search Pokemon by name, type, or number..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-red-400 focus:ring-2 focus:ring-red-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-red-500 dark:focus:ring-red-900/30"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
              inputRef.current?.focus();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Results dropdown */}
      {isOpen && results.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-800"
        >
          {results.map((result, idx) => (
            <Link
              key={result.id}
              href={`/pokemon/${result.id}`}
              onClick={() => {
                setIsOpen(false);
                setQuery("");
              }}
              className={cn(
                "flex items-center gap-3 px-4 py-3 transition-colors",
                idx === selectedIndex
                  ? "bg-red-50 dark:bg-red-900/20"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700",
                idx < results.length - 1 &&
                  "border-b border-gray-100 dark:border-gray-700"
              )}
            >
              {result.sprite && (
                <Image
                  src={result.sprite}
                  alt={result.name}
                  width={40}
                  height={40}
                  className="pixelated h-10 w-10"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-gray-800 dark:text-gray-100">
                    {formatPokemonName(result.name)}
                  </span>
                  <span className="text-xs text-gray-400">
                    {formatPokemonId(result.id)}
                  </span>
                </div>
                <div className="flex gap-1 mt-0.5">
                  {result.types.map((type) => (
                    <TypeBadge key={type} type={type} size="sm" />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No results message */}
      {isOpen && query.trim() && results.length === 0 && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 top-full z-50 mt-1 rounded-xl border border-gray-200 bg-white p-4 text-center text-sm text-gray-500 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
        >
          No Pokemon found for &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}
