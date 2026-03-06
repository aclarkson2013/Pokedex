"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils/cn";
import { EncounterTable } from "./EncounterTable";
import { TrainerList } from "./TrainerList";
import { ItemList } from "./ItemList";
import { PokemonQuickView } from "./PokemonQuickView";
import { hydrateEncounters, getEncountersByVersion } from "@/lib/db/pokemon-db";
import {
  mergeEncounters,
  findMatchingEncounters,
} from "@/lib/pokemon/encounter-enrichment";
import type { LocationEncounter } from "@/lib/db/pokemon-db";
import type {
  GameWalkthrough,
  WalkthroughPart,
  WalkthroughEncounter,
  WalkthroughLocation,
} from "@/lib/pokemon/walkthroughs";

/**
 * Map game slugs to their version group slugs (for encounter data loading)
 * and the version names to query for encounters.
 */
const SLUG_TO_VERSIONS: Record<string, { group: string; versions: string[] }> = {
  "red-blue": { group: "red-blue", versions: ["red", "blue"] },
  yellow: { group: "yellow", versions: ["yellow"] },
  "gold-silver": { group: "gold-silver", versions: ["gold", "silver"] },
  crystal: { group: "crystal", versions: ["crystal"] },
  "ruby-sapphire": { group: "ruby-sapphire", versions: ["ruby", "sapphire"] },
  emerald: { group: "emerald", versions: ["emerald"] },
  "firered-leafgreen": { group: "firered-leafgreen", versions: ["firered", "leafgreen"] },
  "diamond-pearl": { group: "diamond-pearl", versions: ["diamond", "pearl"] },
  platinum: { group: "platinum", versions: ["platinum"] },
  "heartgold-soulsilver": { group: "heartgold-soulsilver", versions: ["heartgold", "soulsilver"] },
  "black-white": { group: "black-white", versions: ["black", "white"] },
  "black2-white2": { group: "black2-white2", versions: ["black-2", "white-2"] },
  "x-y": { group: "x-y", versions: ["x", "y"] },
  "omega-ruby-alpha-sapphire": { group: "omega-ruby-alpha-sapphire", versions: ["omega-ruby", "alpha-sapphire"] },
  "sun-moon": { group: "sun-moon", versions: ["sun", "moon"] },
  "ultra-sun-ultra-moon": { group: "ultra-sun-ultra-moon", versions: ["ultra-sun", "ultra-moon"] },
  "lets-go": { group: "lets-go", versions: ["lets-go-pikachu", "lets-go-eevee"] },
  "sword-shield": { group: "sword-shield", versions: ["sword", "shield"] },
  "legends-arceus": { group: "legends-arceus", versions: ["legends-arceus"] },
  "scarlet-violet": { group: "scarlet-violet", versions: ["scarlet", "violet"] },
};

interface WalkthroughTabProps {
  walkthrough: GameWalkthrough;
}

export function WalkthroughTab({ walkthrough }: WalkthroughTabProps) {
  const [selectedPart, setSelectedPart] = useState<number | null>(null);
  const [quickViewPokemonId, setQuickViewPokemonId] = useState<number | null>(null);
  const [apiEncounters, setApiEncounters] = useState<LocationEncounter[]>([]);
  const [encountersLoaded, setEncountersLoaded] = useState(false);

  // Lazily load encounter data from IndexedDB for this game
  useEffect(() => {
    const config = SLUG_TO_VERSIONS[walkthrough.slug];
    if (!config) return;

    let cancelled = false;

    async function loadEncounters() {
      try {
        // Hydrate encounters into IndexedDB (no-op if already loaded)
        await hydrateEncounters(config.group);

        // Load all encounters for all versions of this game
        const allEncounters: LocationEncounter[] = [];
        for (const version of config.versions) {
          const versionEncs = await getEncountersByVersion(version);
          allEncounters.push(...versionEncs);
        }

        if (!cancelled) {
          setApiEncounters(allEncounters);
          setEncountersLoaded(true);
        }
      } catch (err) {
        console.warn("[WalkthroughTab] Failed to load API encounters:", err);
        if (!cancelled) setEncountersLoaded(true);
      }
    }

    loadEncounters();
    return () => {
      cancelled = true;
    };
  }, [walkthrough.slug]);

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
          <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
            {walkthrough.gameLabel} Walkthrough
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            A step-by-step guide through the entire game. Tap a section to start.
          </p>
          {encountersLoaded && apiEncounters.length > 0 && (
            <p className="mt-1 text-[10px] text-blue-500 dark:text-blue-400">
              ✦ Enriched with PokeAPI encounter data
            </p>
          )}
        </div>

        {/* Main storyline */}
        <h4 className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400">
          Main Storyline
        </h4>
        <div className="space-y-2 mb-5">
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
            <h4 className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400">
              Post-Game
            </h4>
            <div className="space-y-2">
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
        className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
        Table of Contents
      </button>

      {/* Part header */}
      <div className="mb-4 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
        <div className="flex items-center gap-2 mb-1">
          <span className="rounded-full bg-red-500 px-2.5 py-0.5 text-[10px] font-bold text-white">
            Part {currentPart.part}
          </span>
          {currentPart.isPostGame && (
            <span className="rounded-full bg-purple-500 px-2.5 py-0.5 text-[10px] font-bold text-white">
              Post-Game
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {currentPart.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {currentPart.summary}
        </p>
      </div>

      {/* Locations */}
      {currentPart.locations.map((loc, i) => (
        <EnrichedLocation
          key={`loc-${i}`}
          location={loc}
          versionTags={walkthrough.versionTags}
          apiEncounters={apiEncounters}
          encountersLoaded={encountersLoaded}
          onPokemonClick={handlePokemonClick}
        />
      ))}

      {/* Previous / Next navigation — simplified to "Part X" */}
      <div className="flex gap-3 mt-6 mb-4">
        {prevPart ? (
          <button
            onClick={() => {
              setSelectedPart(prevPart.part);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex-1 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm text-left hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500">Previous</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Part {prevPart.part}
              </p>
            </div>
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
            className="flex-1 flex items-center justify-end gap-2 rounded-xl bg-white px-4 py-3 shadow-sm text-right hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
          >
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500">Next</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                Part {nextPart.part}
              </p>
            </div>
            <svg className="h-4 w-4 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
        className="w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
      >
        ↑ Return to Table of Contents
      </button>

      {/* Quick View modal */}
      <PokemonQuickView
        pokemonId={quickViewPokemonId}
        onClose={() => setQuickViewPokemonId(null)}
      />
    </div>
  );
}

/* ── Enriched Location — merges API encounters ───────── */
function EnrichedLocation({
  location,
  versionTags,
  apiEncounters,
  encountersLoaded,
  onPokemonClick,
}: {
  location: WalkthroughLocation;
  versionTags: string[];
  apiEncounters: LocationEncounter[];
  encountersLoaded: boolean;
  onPokemonClick: (pokemonId: number) => void;
}) {
  // Merge hand-authored with API encounters
  const mergedEncounters = useMemo(() => {
    const handAuthored = location.encounters ?? [];
    if (!encountersLoaded || apiEncounters.length === 0) {
      return handAuthored;
    }

    // Find API encounters matching this location
    const matching = findMatchingEncounters(location.name, apiEncounters);
    if (matching.length === 0) return handAuthored;

    return mergeEncounters(handAuthored, matching, versionTags);
  }, [location.encounters, location.name, apiEncounters, encountersLoaded, versionTags]);

  return (
    <div className="mb-6">
      <h4 className="mb-2 text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        {location.name}
      </h4>

      {/* Story description */}
      <div className="mb-3 rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {location.description}
        </p>
      </div>

      {/* Encounters (merged) */}
      {mergedEncounters.length > 0 && (
        <div className="mb-3">
          <EncounterTable
            encounters={mergedEncounters}
            versionTags={versionTags}
            onPokemonClick={onPokemonClick}
          />
        </div>
      )}

      {/* Trainers */}
      {location.trainers && location.trainers.length > 0 && (
        <div className="mb-3">
          <TrainerList
            trainers={location.trainers}
            onPokemonClick={onPokemonClick}
          />
        </div>
      )}

      {/* Items */}
      {location.items && location.items.length > 0 && (
        <div className="mb-3">
          <ItemList items={location.items} />
        </div>
      )}
    </div>
  );
}

/* ── TOC Item — "Part X" as heading, title as subtext ─── */
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
        "flex w-full items-center gap-3 rounded-xl bg-white p-4 shadow-sm text-left transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700",
        part.isPostGame && "ring-1 ring-purple-200 dark:ring-purple-700/40"
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white",
          part.isPostGame ? "bg-purple-500" : "bg-red-500"
        )}
      >
        {part.part}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
          Part {part.part}
        </h4>
        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
          {part.title}
        </p>
      </div>
      <svg className="h-5 w-5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
