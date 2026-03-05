"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils/cn";
import { EncounterTable } from "./EncounterTable";
import { TrainerList } from "./TrainerList";
import { ItemList } from "./ItemList";
import { PokemonQuickView } from "./PokemonQuickView";
import type { GameWalkthrough, WalkthroughPart } from "@/lib/pokemon/walkthroughs";

interface WalkthroughTabProps {
  walkthrough: GameWalkthrough;
}

export function WalkthroughTab({ walkthrough }: WalkthroughTabProps) {
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [quickViewPokemonId, setQuickViewPokemonId] = useState<number | null>(null);

  const currentPart = selectedPart !== null
    ? walkthrough.parts.find((p) => p.part === selectedPart)
    : null;

  const currentIndex = selectedPart !== null
    ? walkthrough.parts.findIndex((p) => p.part === selectedPart)
    : -1;

  const prevPart = currentIndex > 0 ? walkthrough.parts[currentIndex - 1] : null;
  const nextPart =
    currentIndex >= 0 && currentIndex < walkthrough.parts.length - 1
      ? walkthrough.parts[currentIndex + 1]
      : null;

  const handlePokemonClick = useCallback((pokemonId: number) => {
    setQuickViewPokemonId(pokemonId);
  }, []);

  /* ── Table of Contents view ───────────────────────── */
  if (!currentPart) {
    // Separate main story and post-game
    const mainParts = walkthrough.parts.filter((p) => !p.isPostGame);
    const postParts = walkthrough.parts.filter((p) => p.isPostGame);

    return (
      <div>
        <div className="mb-4 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
            {walkthrough.gameLabel} Walkthrough
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            A step-by-step guide through the entire game. Tap a section to start.
          </p>
        </div>

        {/* Main storyline */}
        <h4 className="mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400">
          Main Storyline
        </h4>
        <div className="space-y-1.5 mb-5">
          {mainParts.map((part) => (
            <TOCItem
              key={part.part}
              part={part}
              onClick={() => setSelectedPart(part.part)}
            />
          ))}
        </div>

        {postParts.length > 0 && (
          <>
            <h4 className="mb-2 text-[10px] font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              Post-Game
            </h4>
            <div className="space-y-1.5">
              {postParts.map((part) => (
                <TOCItem
                  key={part.part}
                  part={part}
                  onClick={() => setSelectedPart(part.part)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  /* ── Part detail view ─────────────────────────────── */
  return (
    <div>
      {/* Return to TOC */}
      <button
        onClick={() => setSelectedPart(null)}
        className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        Table of Contents
      </button>

      {/* Part header */}
      <div className="mb-4 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
        <div className="flex items-center gap-2 mb-1">
          <span className="rounded-full bg-red-500 px-2 py-0.5 text-[9px] font-bold text-white">
            Part {currentPart.part}
          </span>
          {currentPart.isPostGame && (
            <span className="rounded-full bg-purple-500 px-2 py-0.5 text-[9px] font-bold text-white">
              Post-Game
            </span>
          )}
        </div>
        <h3 className="text-base font-bold text-gray-900 dark:text-white">
          {currentPart.title}
        </h3>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {currentPart.summary}
        </p>
      </div>

      {/* Locations */}
      {currentPart.locations.map((loc, i) => (
        <div key={`loc-${i}`} className="mb-5">
          <h4 className="mb-2 text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            {loc.name}
          </h4>

          {/* Story description */}
          <div className="mb-3 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
            <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
              {loc.description}
            </p>
          </div>

          {/* Encounters */}
          {loc.encounters && loc.encounters.length > 0 && (
            <div className="mb-3">
              <EncounterTable
                encounters={loc.encounters}
                versionTags={walkthrough.versionTags}
                onPokemonClick={handlePokemonClick}
              />
            </div>
          )}

          {/* Trainers */}
          {loc.trainers && loc.trainers.length > 0 && (
            <div className="mb-3">
              <TrainerList
                trainers={loc.trainers}
                onPokemonClick={handlePokemonClick}
              />
            </div>
          )}

          {/* Items */}
          {loc.items && loc.items.length > 0 && (
            <div className="mb-3">
              <ItemList items={loc.items} />
            </div>
          )}
        </div>
      ))}

      {/* Previous / Next navigation */}
      <div className="flex gap-2 mt-6 mb-4">
        {prevPart ? (
          <button
            onClick={() => {
              setSelectedPart(prevPart.part);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-1 rounded-xl bg-white p-3 shadow-sm text-left hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <p className="text-[10px] text-gray-400 dark:text-gray-500">← Previous</p>
            <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
              Part {prevPart.part}: {prevPart.title}
            </p>
          </button>
        ) : (
          <div className="flex-1" />
        )}

        {nextPart ? (
          <button
            onClick={() => {
              setSelectedPart(nextPart.part);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-1 rounded-xl bg-white p-3 shadow-sm text-right hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <p className="text-[10px] text-gray-400 dark:text-gray-500">Next →</p>
            <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">
              Part {nextPart.part}: {nextPart.title}
            </p>
          </button>
        ) : (
          <div className="flex-1" />
        )}
      </div>

      {/* Return to TOC button */}
      <button
        onClick={() => {
          setSelectedPart(null);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-full rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
      >
        ↑ Return to Table of Contents
      </button>

      {/* Quick View bottom sheet */}
      <PokemonQuickView
        pokemonId={quickViewPokemonId}
        onClose={() => setQuickViewPokemonId(null)}
      />
    </div>
  );
}

/* ── TOC Item ──────────────────────────────────────────── */
function TOCItem({
  part,
  onClick,
}: {
  part: WalkthroughPart;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl bg-white p-3 shadow-sm text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700",
        part.isPostGame && "ring-1 ring-purple-200 dark:ring-purple-700/40"
      )}
    >
      <span
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white",
          part.isPostGame ? "bg-purple-500" : "bg-red-500"
        )}
      >
        {part.part}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-semibold text-gray-900 dark:text-white truncate">
          {part.title}
        </h4>
        <p className="mt-0.5 text-[10px] text-gray-500 dark:text-gray-400 truncate">
          {part.summary}
        </p>
      </div>
      <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
