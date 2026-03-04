/**
 * IndexedDB wrapper for Pokemon data using idb.
 *
 * Stores all Pokemon data client-side for offline access and fast queries.
 * Data is hydrated from static JSON files on first visit, then all reads
 * come from IndexedDB for fast indexed queries.
 */

import { openDB, type DBSchema, type IDBPDatabase } from "idb";

// ---------------------------------------------------------------------------
// Schema
// ---------------------------------------------------------------------------

export interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  officialArtwork: string;
  height: number;
  weight: number;
  baseExperience: number;
  abilities: {
    name: string;
    isHidden: boolean;
  }[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  moves: {
    name: string;
    learnMethod: string;
    levelLearnedAt: number;
    versionGroup: string;
  }[];
  species: {
    genus: string;
    flavorText: string;
    generation: number;
    habitat: string | null;
    growthRate: string;
    genderRate: number;
    captureRate: number;
    baseHappiness: number;
    eggGroups: string[];
    hatchCounter: number;
    evolutionChainId: number | null;
  };
}

export interface EvolutionNode {
  id: number;
  name: string;
  sprite: string;
  trigger: string | null;
  triggerDetails: Record<string, string | number | boolean>;
  evolvesTo: EvolutionNode[];
}

export interface EvolutionChain {
  id: number;
  chain: EvolutionNode;
}

export interface TypeEffectiveness {
  [attackingType: string]: {
    doubleDamageTo: string[];
    halfDamageTo: string[];
    noDamageTo: string[];
  };
}

interface PokedexDB extends DBSchema {
  pokemon: {
    key: number;
    value: PokemonDetail;
    indexes: {
      "by-name": string;
      "by-generation": number;
      "by-type": string[];
    };
  };
  "pokemon-list": {
    key: number;
    value: PokemonListItem;
  };
  "evolution-chains": {
    key: number;
    value: EvolutionChain;
  };
  meta: {
    key: string;
    value: {
      key: string;
      value: unknown;
      updatedAt: number;
    };
  };
}

// ---------------------------------------------------------------------------
// Database singleton
// ---------------------------------------------------------------------------

const DB_NAME = "pokedex";
const DB_VERSION = 1;

let dbPromise: Promise<IDBPDatabase<PokedexDB>> | null = null;

function getDB(): Promise<IDBPDatabase<PokedexDB>> {
  if (!dbPromise) {
    dbPromise = openDB<PokedexDB>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        // Pokemon detail store with indexes
        if (!db.objectStoreNames.contains("pokemon")) {
          const pokemonStore = db.createObjectStore("pokemon", {
            keyPath: "id",
          });
          pokemonStore.createIndex("by-name", "name");
          pokemonStore.createIndex("by-generation", "species.generation");
          pokemonStore.createIndex("by-type", "types", { multiEntry: true });
        }

        // Pokemon list (lightweight, for grid display)
        if (!db.objectStoreNames.contains("pokemon-list")) {
          db.createObjectStore("pokemon-list", { keyPath: "id" });
        }

        // Evolution chains
        if (!db.objectStoreNames.contains("evolution-chains")) {
          db.createObjectStore("evolution-chains", { keyPath: "id" });
        }

        // Metadata (version tracking, etc.)
        if (!db.objectStoreNames.contains("meta")) {
          db.createObjectStore("meta", { keyPath: "key" });
        }
      },
    });
  }
  return dbPromise;
}

// ---------------------------------------------------------------------------
// Data hydration from static JSON
// ---------------------------------------------------------------------------

/**
 * Check if the database is populated.
 */
export async function isDataLoaded(): Promise<boolean> {
  const db = await getDB();
  const meta = await db.get("meta", "dataVersion");
  return !!meta;
}

/**
 * Hydrate IndexedDB from static JSON files. Called once on first visit.
 */
export async function hydrateFromStatic(): Promise<void> {
  const db = await getDB();

  // Check if already hydrated
  const existing = await db.get("meta", "dataVersion");
  if (existing) return;

  console.log("[PokedexDB] Hydrating from static JSON...");

  // Fetch all-pokemon list
  const listRes = await fetch("/data/all-pokemon.json");
  const listData: PokemonListItem[] = await listRes.json();

  // Write list items in a transaction
  const listTx = db.transaction("pokemon-list", "readwrite");
  for (const item of listData) {
    listTx.store.put(item);
  }
  await listTx.done;

  // Fetch per-gen detail files and hydrate
  const gens = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (const gen of gens) {
    const genRes = await fetch(`/data/gen-${gen}.json`);
    const genData: PokemonDetail[] = await genRes.json();

    const tx = db.transaction("pokemon", "readwrite");
    for (const pokemon of genData) {
      tx.store.put(pokemon);
    }
    await tx.done;
    console.log(`[PokedexDB] Gen ${gen}: ${genData.length} Pokemon loaded`);
  }

  // Fetch evolution chains
  const evoRes = await fetch("/data/evolution-chains.json");
  const evoData: EvolutionChain[] = await evoRes.json();

  const evoTx = db.transaction("evolution-chains", "readwrite");
  for (const chain of evoData) {
    evoTx.store.put(chain);
  }
  await evoTx.done;
  console.log(`[PokedexDB] ${evoData.length} evolution chains loaded`);

  // Mark as hydrated
  await db.put("meta", {
    key: "dataVersion",
    value: "1.0.0",
    updatedAt: Date.now(),
  });

  console.log("[PokedexDB] Hydration complete!");
}

// ---------------------------------------------------------------------------
// Query functions
// ---------------------------------------------------------------------------

/**
 * Get all Pokemon for the grid display (lightweight list items).
 */
export async function getAllPokemonList(): Promise<PokemonListItem[]> {
  const db = await getDB();
  return db.getAll("pokemon-list");
}

/**
 * Get a single Pokemon's full details by ID.
 */
export async function getPokemonById(
  id: number
): Promise<PokemonDetail | undefined> {
  const db = await getDB();
  return db.get("pokemon", id);
}

/**
 * Get a single Pokemon's full details by name.
 */
export async function getPokemonByName(
  name: string
): Promise<PokemonDetail | undefined> {
  const db = await getDB();
  const index = db.transaction("pokemon").store.index("by-name");
  return index.get(name);
}

/**
 * Get all Pokemon for a specific generation.
 */
export async function getPokemonByGeneration(
  generation: number
): Promise<PokemonDetail[]> {
  const db = await getDB();
  const index = db.transaction("pokemon").store.index("by-generation");
  return index.getAll(generation);
}

/**
 * Get all Pokemon of a specific type.
 */
export async function getPokemonByType(
  type: string
): Promise<PokemonDetail[]> {
  const db = await getDB();
  const tx = db.transaction("pokemon", "readonly");
  const index = tx.store.index("by-type");
  const results: PokemonDetail[] = [];
  let cursor = await index.openCursor(IDBKeyRange.only(type));
  while (cursor) {
    results.push(cursor.value);
    cursor = await cursor.continue();
  }
  return results;
}

/**
 * Get an evolution chain by its ID.
 */
export async function getEvolutionChain(
  chainId: number
): Promise<EvolutionChain | undefined> {
  const db = await getDB();
  return db.get("evolution-chains", chainId);
}

/**
 * Get total Pokemon count.
 */
export async function getPokemonCount(): Promise<number> {
  const db = await getDB();
  return db.count("pokemon-list");
}
