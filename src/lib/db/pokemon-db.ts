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

export interface MoveDetail {
  id: number;
  name: string;
  type: string;
  damageClass: string; // "physical" | "special" | "status"
  power: number | null;
  accuracy: number | null;
  pp: number;
  effectText: string;
  effectChance: number | null;
}

export interface LocationEncounter {
  pokemonId: number;
  pokemonName: string;
  locationArea: string;
  locationName: string;
  versionName: string;
  method: string;
  minLevel: number;
  maxLevel: number;
  chance: number;
}

export interface ItemDetail {
  id: number;
  name: string;
  category: string;
  effectText: string;
  cost: number;
  sprite: string | null;
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
  moves: {
    key: string;
    value: MoveDetail;
    indexes: {
      "by-type": string;
    };
  };
  encounters: {
    key: [number, string, string]; // [pokemonId, versionName, locationArea]
    value: LocationEncounter;
    indexes: {
      "by-version": string;
      "by-location": string;
    };
  };
  items: {
    key: string;
    value: ItemDetail;
    indexes: {
      "by-category": string;
    };
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
const DB_VERSION = 4; // v2: +moves, v3: +encounters, v4: +items

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

        // v2: Moves store
        if (!db.objectStoreNames.contains("moves")) {
          const movesStore = db.createObjectStore("moves", {
            keyPath: "name",
          });
          movesStore.createIndex("by-type", "type");
        }

        // v3: Encounters store
        if (!db.objectStoreNames.contains("encounters")) {
          const encounterStore = db.createObjectStore("encounters", {
            keyPath: ["pokemonId", "versionName", "locationArea"],
          });
          encounterStore.createIndex("by-version", "versionName");
          encounterStore.createIndex("by-location", "locationArea");
        }

        // v4: Items store
        if (!db.objectStoreNames.contains("items")) {
          const itemsStore = db.createObjectStore("items", {
            keyPath: "name",
          });
          itemsStore.createIndex("by-category", "category");
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

  // Hydrate moves (if available)
  try {
    const movesRes = await fetch("/data/moves.json");
    if (movesRes.ok) {
      const movesData: MoveDetail[] = await movesRes.json();
      const movesTx = db.transaction("moves", "readwrite");
      for (const move of movesData) {
        movesTx.store.put(move);
      }
      await movesTx.done;
      console.log(`[PokedexDB] ${movesData.length} moves loaded`);
    }
  } catch (err) {
    console.warn("[PokedexDB] moves.json not found, skipping moves hydration");
  }

  // Hydrate items (if available)
  try {
    const itemsRes = await fetch("/data/items.json");
    if (itemsRes.ok) {
      const itemsData: ItemDetail[] = await itemsRes.json();
      const itemsTx = db.transaction("items", "readwrite");
      for (const item of itemsData) {
        itemsTx.store.put(item);
      }
      await itemsTx.done;
      console.log(`[PokedexDB] ${itemsData.length} items loaded`);
    }
  } catch (err) {
    console.warn("[PokedexDB] items.json not found, skipping items hydration");
  }

  // Mark as hydrated
  await db.put("meta", {
    key: "dataVersion",
    value: "4.0.0",
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

// ---------------------------------------------------------------------------
// Move queries
// ---------------------------------------------------------------------------

/**
 * Get a move's full details by name.
 */
export async function getMoveByName(
  name: string
): Promise<MoveDetail | undefined> {
  const db = await getDB();
  return db.get("moves", name);
}

/**
 * Get all moves as a Map keyed by name (for bulk lookups).
 */
export async function getAllMovesMap(): Promise<Map<string, MoveDetail>> {
  const db = await getDB();
  const all = await db.getAll("moves");
  const map = new Map<string, MoveDetail>();
  for (const move of all) {
    map.set(move.name, move);
  }
  return map;
}

/**
 * Check if moves data has been loaded.
 */
export async function isMovesLoaded(): Promise<boolean> {
  const db = await getDB();
  const count = await db.count("moves");
  return count > 0;
}

// ---------------------------------------------------------------------------
// Encounter queries (lazy-loaded per game)
// ---------------------------------------------------------------------------

/**
 * Hydrate encounters for a specific version group from static JSON.
 */
export async function hydrateEncounters(
  versionGroupSlug: string
): Promise<void> {
  const db = await getDB();

  // Check if already loaded
  const metaKey = `encounters-${versionGroupSlug}`;
  const existing = await db.get("meta", metaKey);
  if (existing) return;

  try {
    const res = await fetch(`/data/encounters/${versionGroupSlug}.json`);
    if (!res.ok) return;

    const encounters: LocationEncounter[] = await res.json();
    const tx = db.transaction("encounters", "readwrite");
    for (const enc of encounters) {
      tx.store.put(enc);
    }
    await tx.done;

    await db.put("meta", {
      key: metaKey,
      value: true,
      updatedAt: Date.now(),
    });

    console.log(
      `[PokedexDB] ${encounters.length} encounters loaded for ${versionGroupSlug}`
    );
  } catch {
    console.warn(
      `[PokedexDB] encounters/${versionGroupSlug}.json not found`
    );
  }
}

/**
 * Get encounters for a specific version.
 */
export async function getEncountersByVersion(
  versionName: string
): Promise<LocationEncounter[]> {
  const db = await getDB();
  const index = db.transaction("encounters", "readonly").store.index("by-version");
  return index.getAll(versionName);
}

// ---------------------------------------------------------------------------
// Item queries
// ---------------------------------------------------------------------------

/**
 * Get an item's details by name.
 */
export async function getItemByName(
  name: string
): Promise<ItemDetail | undefined> {
  const db = await getDB();
  return db.get("items", name);
}

/**
 * Get all items as a Map keyed by name (for bulk lookups).
 */
export async function getAllItemsMap(): Promise<Map<string, ItemDetail>> {
  const db = await getDB();
  const all = await db.getAll("items");
  const map = new Map<string, ItemDetail>();
  for (const item of all) {
    map.set(item.name, item);
  }
  return map;
}

/**
 * Get items by category.
 */
export async function getItemsByCategory(
  category: string
): Promise<ItemDetail[]> {
  const db = await getDB();
  const index = db.transaction("items", "readonly").store.index("by-category");
  return index.getAll(category);
}

/**
 * Check if items data has been loaded.
 */
export async function isItemsLoaded(): Promise<boolean> {
  const db = await getDB();
  const count = await db.count("items");
  return count > 0;
}
