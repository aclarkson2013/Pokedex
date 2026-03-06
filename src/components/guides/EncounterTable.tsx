"use client";

import Image from "next/image";
import { getSpriteUrl } from "@/lib/pokemon/sprite-utils";
import type { WalkthroughEncounter } from "@/lib/pokemon/walkthroughs";

interface EncounterTableProps {
  encounters: WalkthroughEncounter[];
  versionTags: string[];
  onPokemonClick: (pokemonId: number) => void;
}

export function EncounterTable({
  encounters,
  versionTags,
  onPokemonClick,
}: EncounterTableProps) {
  if (encounters.length === 0) return null;

  // Group by method
  const grouped = new Map<string, WalkthroughEncounter[]>();
  for (const enc of encounters) {
    const list = grouped.get(enc.method) ?? [];
    list.push(enc);
    grouped.set(enc.method, list);
  }

  return (
    <div className="space-y-3">
      {Array.from(grouped.entries()).map(([method, encs]) => {
        const hasApiData = encs.some((e) => e.source === "api");
        return (
          <div
            key={method}
            className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800"
          >
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-750">
              <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-400">
                🌿 Available Pokémon — {method}
              </h4>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 px-4 py-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wider dark:text-gray-500">
              <span>Pokémon</span>
              <span className="w-14 text-center">Games</span>
              <span className="w-14 text-center">Levels</span>
              <span className="w-12 text-center">Rate</span>
            </div>

            {/* Rows */}
            {encs.map((enc, i) => {
              const isApiSourced = enc.source === "api";
              return (
                <div
                  key={`${enc.pokemon}-${i}`}
                  className={
                    "grid grid-cols-[1fr_auto_auto_auto] items-center gap-2 border-t px-4 py-2 " +
                    (isApiSourced
                      ? "border-blue-50 bg-blue-50/40 dark:border-blue-900/20 dark:bg-blue-900/10"
                      : "border-gray-50 dark:border-gray-700/50")
                  }
                >
                  <button
                    onClick={() => onPokemonClick(enc.pokemonId)}
                    className={
                      "flex items-center gap-2 text-left text-sm font-medium hover:underline " +
                      (isApiSourced
                        ? "text-blue-400 hover:text-blue-600 dark:text-blue-300"
                        : "text-blue-600 hover:text-blue-800 dark:text-blue-400")
                    }
                  >
                    <div className="relative h-7 w-7 shrink-0">
                      <Image
                        src={getSpriteUrl(enc.pokemonId)}
                        alt={enc.pokemon}
                        fill
                        className={"object-contain pixelated" + (isApiSourced ? " opacity-70" : "")}
                        sizes="28px"
                        unoptimized
                      />
                    </div>
                    <span className="flex items-center gap-1">
                      {enc.pokemon}
                      {isApiSourced && (
                        <span className="inline-block rounded bg-blue-100 px-1 py-0.5 text-[8px] font-bold text-blue-500 dark:bg-blue-900/30 dark:text-blue-400">
                          API
                        </span>
                      )}
                    </span>
                  </button>
                  <div className="flex w-14 justify-center gap-0.5">
                    {versionTags.map((tag) => (
                      <span
                        key={tag}
                        className={
                          enc.games.includes(tag)
                            ? "rounded px-1.5 py-0.5 text-[9px] font-bold text-white " +
                              (tag === "FR" || tag === "R" || tag === "OR"
                                ? "bg-red-500"
                                : "bg-green-600")
                            : "rounded px-1.5 py-0.5 text-[9px] font-bold text-gray-300 bg-gray-100 dark:text-gray-600 dark:bg-gray-700"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={"w-14 text-center text-xs " + (isApiSourced ? "text-gray-400 dark:text-gray-500" : "text-gray-600 dark:text-gray-400")}>
                    {enc.levels}
                  </span>
                  <span className={"w-12 text-center text-xs font-medium " + (isApiSourced ? "text-gray-500 dark:text-gray-400" : "text-gray-700 dark:text-gray-300")}>
                    {enc.rate}
                  </span>
                </div>
              );
            })}

            {/* Footer note when API data is present */}
            {hasApiData && (
              <div className="border-t border-gray-100 px-4 py-1.5 dark:border-gray-700">
                <p className="text-[9px] text-blue-400 dark:text-blue-500">
                  ✦ Rows marked API are sourced from PokeAPI encounter data
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
