/**
 * Encounter data enrichment.
 *
 * Merges API-sourced encounter data from IndexedDB with hand-authored
 * walkthrough encounters to fill in gaps and provide more complete
 * encounter tables. Hand-authored data takes priority.
 */

import type { LocationEncounter } from "@/lib/db/pokemon-db";
import type { WalkthroughEncounter } from "@/lib/pokemon/walkthroughs";

/**
 * Map PokeAPI encounter methods to display-friendly method names.
 */
const METHOD_MAP: Record<string, string> = {
  walk: "Grass",
  "grass-pokemon": "Grass",
  "tall-grass-pokemon": "Tall Grass",
  surf: "Surfing",
  "old-rod": "Old Rod",
  "good-rod": "Good Rod",
  "super-rod": "Super Rod",
  "rock-smash": "Rock Smash",
  headbutt: "Headbutt",
  "dark-grass-pokemon": "Dark Grass",
  "yellow-flowers": "Yellow Flowers",
  "purple-flowers": "Purple Flowers",
  "red-flowers": "Red Flowers",
  "rough-terrain": "Rough Terrain",
  "cave-pokemon": "Cave",
  gift: "Gift",
  "gift-egg": "Gift Egg",
  "only-one": "Special",
  "pokeflute": "Poké Flute",
  "seaweed": "Seaweed",
  "bubble-pokemon": "Bubbling Spots",
};

/**
 * Map game version names to walkthrough version tags.
 * e.g. "firered" → "FR", "leafgreen" → "LG"
 */
const VERSION_TO_TAG: Record<string, string> = {
  red: "R", blue: "B",
  yellow: "Y",
  gold: "G", silver: "S",
  crystal: "C",
  ruby: "R", sapphire: "S",
  emerald: "E",
  firered: "FR", leafgreen: "LG",
  diamond: "D", pearl: "P",
  platinum: "Pt",
  heartgold: "HG", soulsilver: "SS",
  black: "B", white: "W",
  "black-2": "B2", "white-2": "W2",
  x: "X", y: "Y",
  "omega-ruby": "OR", "alpha-sapphire": "AS",
  sun: "S", moon: "M",
  "ultra-sun": "US", "ultra-moon": "UM",
  "lets-go-pikachu": "P", "lets-go-eevee": "E",
  sword: "Sw", shield: "Sh",
  "legends-arceus": "LA",
  scarlet: "S", violet: "V",
};

/**
 * Prettify a Pokemon name from kebab-case to title case.
 */
function prettifyName(name: string): string {
  return name
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Convert an API LocationEncounter to a WalkthroughEncounter format.
 */
function apiToWalkthrough(
  enc: LocationEncounter,
  allVersionTags: string[]
): WalkthroughEncounter {
  const tag = VERSION_TO_TAG[enc.versionName] ?? enc.versionName.toUpperCase();
  const games = allVersionTags.includes(tag) ? [tag] : allVersionTags;

  const method = METHOD_MAP[enc.method] ?? prettifyName(enc.method);
  const levels =
    enc.minLevel === enc.maxLevel
      ? String(enc.minLevel)
      : `${enc.minLevel}-${enc.maxLevel}`;
  const rate = enc.chance > 0 ? `${enc.chance}%` : "—";

  return {
    pokemon: prettifyName(enc.pokemonName),
    pokemonId: enc.pokemonId,
    games,
    method,
    levels,
    rate,
    source: "api",
  };
}

/**
 * Create a key for de-duplication: pokemonId + method.
 */
function encounterKey(enc: WalkthroughEncounter): string {
  return `${enc.pokemonId}:${enc.method}`;
}

/**
 * Merge API encounters into hand-authored encounters.
 *
 * Strategy:
 * - Hand-authored encounters always take priority
 * - API encounters are added only if the pokemon+method combo
 *   doesn't already exist in the hand-authored data
 * - API encounters are tagged with source: "api"
 *
 * @param handAuthored - The original hand-authored encounters for a location
 * @param apiEncounters - API encounters that match this location
 * @param versionTags - Version tags for the game (e.g. ["FR", "LG"])
 * @returns Merged encounter list with hand-authored first, then API additions
 */
export function mergeEncounters(
  handAuthored: WalkthroughEncounter[],
  apiEncounters: LocationEncounter[],
  versionTags: string[]
): WalkthroughEncounter[] {
  // Build a set of existing pokemon+method keys from hand-authored data
  const existingKeys = new Set<string>();
  for (const enc of handAuthored) {
    existingKeys.add(encounterKey(enc));
  }

  // Convert API encounters and filter out duplicates
  const apiConverted: WalkthroughEncounter[] = [];
  const seenApiKeys = new Set<string>();

  for (const apiEnc of apiEncounters) {
    const converted = apiToWalkthrough(apiEnc, versionTags);
    const key = encounterKey(converted);

    // Skip if hand-authored already covers this, or if we already added this
    if (existingKeys.has(key) || seenApiKeys.has(key)) continue;
    seenApiKeys.add(key);
    apiConverted.push(converted);
  }

  // Return hand-authored first (unmarked, defaults to "hand-authored"),
  // then API additions
  return [...handAuthored, ...apiConverted];
}

/**
 * Normalize a location name for fuzzy matching.
 * e.g. "Viridian Forest" → "viridianforest"
 */
function normalizeLocationName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/**
 * Try to match a walkthrough location name to API location encounters.
 *
 * Matching strategy:
 * 1. Exact normalized match on locationName
 * 2. Substring match (location name contained in API location name or vice versa)
 *
 * @returns API encounters matching this location, if any
 */
export function findMatchingEncounters(
  locationName: string,
  allApiEncounters: LocationEncounter[]
): LocationEncounter[] {
  const normalized = normalizeLocationName(locationName);
  if (!normalized) return [];

  const matches: LocationEncounter[] = [];

  for (const enc of allApiEncounters) {
    const apiNormalized = normalizeLocationName(enc.locationName);

    // Exact match or substring match
    if (
      apiNormalized === normalized ||
      apiNormalized.includes(normalized) ||
      normalized.includes(apiNormalized)
    ) {
      matches.push(enc);
    }
  }

  return matches;
}
