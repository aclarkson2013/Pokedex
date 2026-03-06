/**
 * Pokemon Data Pipeline
 *
 * Fetches all Pokemon data from PokeAPI v2 at build time and outputs
 * optimized JSON files for the app. This avoids ~3,000+ runtime API calls.
 *
 * Output files:
 *   data/all-pokemon.json       - Master list for grid display
 *   data/gen-{1-9}.json         - Per-generation full detail data
 *   data/evolution-chains.json  - All evolution chains
 *   data/type-effectiveness.json - Type matchup chart
 *   data/search-index.json      - Pre-built search index
 *   data/moves.json             - Full move details (type, power, accuracy, PP)
 *   data/encounters/{group}.json - Per-game encounter data
 *   data/items.json              - Item details (category, effect, cost)
 *
 * Usage: npm run fetch-data
 * Flags: --skip-moves --skip-encounters --skip-veekun --skip-items --force
 */

import * as fs from "fs";
import * as path from "path";
import { loadVeekunMoveEffects } from "./lib/veekun-moves";
import { loadVeekunLocationNames } from "./lib/veekun-encounters";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const API_BASE = "https://pokeapi.co/api/v2";
const DATA_DIR = path.join(process.cwd(), "data");
const PUBLIC_DATA_DIR = path.join(process.cwd(), "public", "data");
const CONCURRENCY = 20; // max parallel requests
const RETRY_LIMIT = 3;
const RETRY_DELAY = 1000; // ms

// CLI flags
const args = process.argv.slice(2);
const SKIP_MOVES = args.includes("--skip-moves");
const SKIP_ENCOUNTERS = args.includes("--skip-encounters");
const SKIP_VEEKUN = args.includes("--skip-veekun");
const SKIP_ITEMS = args.includes("--skip-items");
const FORCE = args.includes("--force");

// Version-to-version-group mapping (for encounter data grouping)
const VERSION_TO_GROUP: Record<string, string> = {
  red: "red-blue", blue: "red-blue",
  yellow: "yellow",
  gold: "gold-silver", silver: "gold-silver",
  crystal: "crystal",
  ruby: "ruby-sapphire", sapphire: "ruby-sapphire",
  emerald: "emerald",
  firered: "firered-leafgreen", leafgreen: "firered-leafgreen",
  diamond: "diamond-pearl", pearl: "diamond-pearl",
  platinum: "platinum",
  heartgold: "heartgold-soulsilver", soulsilver: "heartgold-soulsilver",
  black: "black-white", white: "black-white",
  "black-2": "black2-white2", "white-2": "black2-white2",
  x: "x-y", y: "x-y",
  "omega-ruby": "omega-ruby-alpha-sapphire", "alpha-sapphire": "omega-ruby-alpha-sapphire",
  sun: "sun-moon", moon: "sun-moon",
  "ultra-sun": "ultra-sun-ultra-moon", "ultra-moon": "ultra-sun-ultra-moon",
  "lets-go-pikachu": "lets-go", "lets-go-eevee": "lets-go",
  sword: "sword-shield", shield: "sword-shield",
  "legends-arceus": "legends-arceus",
  scarlet: "scarlet-violet", violet: "scarlet-violet",
};

// Generation ranges (national dex numbers)
const GENERATIONS: Record<number, { start: number; end: number; name: string }> = {
  1: { start: 1, end: 151, name: "Kanto" },
  2: { start: 152, end: 251, name: "Johto" },
  3: { start: 252, end: 386, name: "Hoenn" },
  4: { start: 387, end: 493, name: "Sinnoh" },
  5: { start: 494, end: 649, name: "Unova" },
  6: { start: 650, end: 721, name: "Kalos" },
  7: { start: 722, end: 809, name: "Alola" },
  8: { start: 810, end: 905, name: "Galar" },
  9: { start: 906, end: 1025, name: "Paldea" },
};

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface PokemonListItem {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  officialArtwork: string;
  height: number; // in decimetres
  weight: number; // in hectograms
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
    genderRate: number; // -1 = genderless, 0-8 = female ratio (eighths)
    captureRate: number;
    baseHappiness: number;
    eggGroups: string[];
    hatchCounter: number;
    evolutionChainId: number | null;
  };
}

interface EvolutionNode {
  id: number;
  name: string;
  sprite: string;
  trigger: string | null;
  triggerDetails: Record<string, string | number | boolean>;
  evolvesTo: EvolutionNode[];
}

interface EvolutionChain {
  id: number;
  chain: EvolutionNode;
}

interface TypeEffectiveness {
  [attackingType: string]: {
    doubleDamageTo: string[];
    halfDamageTo: string[];
    noDamageTo: string[];
  };
}

interface MoveDetail {
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

interface LocationEncounter {
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

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

async function fetchWithRetry(url: string, retries = RETRY_LIMIT): Promise<unknown> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${url}`);
      }
      return await res.json();
    } catch (err) {
      if (attempt === retries) {
        throw err;
      }
      const delay = RETRY_DELAY * attempt;
      console.warn(`  ⚠ Retry ${attempt}/${retries} for ${url} (waiting ${delay}ms)`);
      await sleep(delay);
    }
  }
  throw new Error("Unreachable");
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Process items in batches with concurrency control.
 */
async function batchProcess<T, R>(
  items: T[],
  fn: (item: T, index: number) => Promise<R>,
  concurrency: number,
  label: string
): Promise<R[]> {
  const results: R[] = [];
  let completed = 0;

  for (let i = 0; i < items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(
      batch.map((item, batchIdx) => fn(item, i + batchIdx))
    );
    results.push(...batchResults);
    completed += batch.length;
    const pct = Math.round((completed / items.length) * 100);
    process.stdout.write(`\r  ${label}: ${completed}/${items.length} (${pct}%)`);
  }
  process.stdout.write("\n");
  return results;
}

// ---------------------------------------------------------------------------
// Data extraction helpers
// ---------------------------------------------------------------------------

function extractPokemonDetail(pokemon: any, species: any): PokemonDetail {
  // Find English flavor text (prefer latest game)
  const flavorEntries = species.flavor_text_entries?.filter(
    (e: any) => e.language.name === "en"
  ) ?? [];
  const flavorText = flavorEntries.length > 0
    ? flavorEntries[flavorEntries.length - 1].flavor_text
        .replace(/\f/g, " ")
        .replace(/\n/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    : "";

  // Find English genus (e.g., "Lizard Pokémon")
  const genusEntry = species.genera?.find(
    (g: any) => g.language.name === "en"
  );

  // Extract generation number from URL like "generation/1/"
  const genUrl: string = species.generation?.url ?? "";
  const genMatch = genUrl.match(/\/generation\/(\d+)\//);
  const generation = genMatch ? parseInt(genMatch[1], 10) : 1;

  // Evolution chain ID
  const evoUrl: string = species.evolution_chain?.url ?? "";
  const evoMatch = evoUrl.match(/\/evolution-chain\/(\d+)\//);
  const evolutionChainId = evoMatch ? parseInt(evoMatch[1], 10) : null;

  // Get latest version group moves (prefer scarlet-violet, then sword-shield)
  const preferredVersions = [
    "scarlet-violet",
    "sword-shield",
    "ultra-sun-ultra-moon",
    "sun-moon",
    "omega-ruby-alpha-sapphire",
    "x-y",
  ];

  const moves: PokemonDetail["moves"] = [];
  for (const moveEntry of pokemon.moves ?? []) {
    // Pick the best version group detail
    const versionDetails = moveEntry.version_group_details ?? [];
    let bestDetail: any = null;

    for (const pref of preferredVersions) {
      bestDetail = versionDetails.find(
        (d: any) => d.version_group.name === pref
      );
      if (bestDetail) break;
    }

    // Fall back to the last entry
    if (!bestDetail && versionDetails.length > 0) {
      bestDetail = versionDetails[versionDetails.length - 1];
    }

    if (bestDetail) {
      moves.push({
        name: moveEntry.move.name,
        learnMethod: bestDetail.move_learn_method.name,
        levelLearnedAt: bestDetail.level_learned_at,
        versionGroup: bestDetail.version_group.name,
      });
    }
  }

  // Sort moves: level-up by level, then alphabetical
  moves.sort((a, b) => {
    if (a.learnMethod === "level-up" && b.learnMethod === "level-up") {
      return a.levelLearnedAt - b.levelLearnedAt;
    }
    if (a.learnMethod === "level-up") return -1;
    if (b.learnMethod === "level-up") return 1;
    return a.name.localeCompare(b.name);
  });

  return {
    id: pokemon.id,
    name: pokemon.name,
    types: pokemon.types.map((t: any) => t.type.name),
    sprite: pokemon.sprites?.front_default ?? "",
    officialArtwork:
      pokemon.sprites?.other?.["official-artwork"]?.front_default ?? "",
    height: pokemon.height,
    weight: pokemon.weight,
    baseExperience: pokemon.base_experience ?? 0,
    abilities: pokemon.abilities.map((a: any) => ({
      name: a.ability.name,
      isHidden: a.is_hidden,
    })),
    stats: {
      hp: pokemon.stats[0]?.base_stat ?? 0,
      attack: pokemon.stats[1]?.base_stat ?? 0,
      defense: pokemon.stats[2]?.base_stat ?? 0,
      specialAttack: pokemon.stats[3]?.base_stat ?? 0,
      specialDefense: pokemon.stats[4]?.base_stat ?? 0,
      speed: pokemon.stats[5]?.base_stat ?? 0,
    },
    moves,
    species: {
      genus: genusEntry?.genus ?? "",
      flavorText,
      generation,
      habitat: species.habitat?.name ?? null,
      growthRate: species.growth_rate?.name ?? "",
      genderRate: species.gender_rate ?? -1,
      captureRate: species.capture_rate ?? 0,
      baseHappiness: species.base_happiness ?? 0,
      eggGroups: species.egg_groups?.map((g: any) => g.name) ?? [],
      hatchCounter: species.hatch_counter ?? 0,
      evolutionChainId,
    },
  };
}

function extractEvolutionChain(chainData: any): EvolutionNode {
  const speciesUrl: string = chainData.species?.url ?? "";
  const idMatch = speciesUrl.match(/\/pokemon-species\/(\d+)\//);
  const id = idMatch ? parseInt(idMatch[1], 10) : 0;

  // Extract trigger details from evolution_details
  const details = chainData.evolution_details?.[0] ?? {};
  const trigger = details.trigger?.name ?? null;
  const triggerDetails: Record<string, string | number | boolean> = {};

  if (details.min_level) triggerDetails.minLevel = details.min_level;
  if (details.item) triggerDetails.item = details.item.name;
  if (details.held_item) triggerDetails.heldItem = details.held_item.name;
  if (details.known_move) triggerDetails.knownMove = details.known_move.name;
  if (details.known_move_type)
    triggerDetails.knownMoveType = details.known_move_type.name;
  if (details.location) triggerDetails.location = details.location.name;
  if (details.min_happiness)
    triggerDetails.minHappiness = details.min_happiness;
  if (details.min_beauty) triggerDetails.minBeauty = details.min_beauty;
  if (details.min_affection)
    triggerDetails.minAffection = details.min_affection;
  if (details.time_of_day) triggerDetails.timeOfDay = details.time_of_day;
  if (details.gender !== null && details.gender !== undefined)
    triggerDetails.gender = details.gender;
  if (details.needs_overworld_rain)
    triggerDetails.needsRain = details.needs_overworld_rain;
  if (details.turn_upside_down)
    triggerDetails.turnUpsideDown = details.turn_upside_down;
  if (details.trade_species)
    triggerDetails.tradeSpecies = details.trade_species.name;
  if (details.relative_physical_stats !== null && details.relative_physical_stats !== undefined)
    triggerDetails.relativePhysicalStats = details.relative_physical_stats;

  return {
    id,
    name: chainData.species?.name ?? "",
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    trigger,
    triggerDetails,
    evolvesTo: (chainData.evolves_to ?? []).map(extractEvolutionChain),
  };
}

// ---------------------------------------------------------------------------
// Main pipeline
// ---------------------------------------------------------------------------

async function main() {
  console.log("🔴 Pokedex Data Pipeline");
  console.log("========================\n");

  // Ensure data directory exists
  fs.mkdirSync(DATA_DIR, { recursive: true });

  const startTime = Date.now();

  // ---- Step 1: Fetch all Pokemon basic info --------------------------------
  console.log("📋 Step 1: Fetching Pokemon list...");
  const listData: any = await fetchWithRetry(
    `${API_BASE}/pokemon?limit=1025`
  );
  const pokemonList: { name: string; url: string }[] = listData.results;
  console.log(`  Found ${pokemonList.length} Pokemon\n`);

  // ---- Step 2: Fetch individual Pokemon + species data ---------------------
  console.log("📦 Step 2: Fetching Pokemon details + species data...");

  const ids = Array.from({ length: pokemonList.length }, (_, i) => i + 1);

  // Fetch Pokemon data
  const pokemonDataRaw = await batchProcess(
    ids,
    async (id) => fetchWithRetry(`${API_BASE}/pokemon/${id}`),
    CONCURRENCY,
    "Pokemon data"
  );

  // Fetch species data
  const speciesDataRaw = await batchProcess(
    ids,
    async (id) => fetchWithRetry(`${API_BASE}/pokemon-species/${id}`),
    CONCURRENCY,
    "Species data"
  );

  // Build full detail objects
  console.log("\n🔧 Processing Pokemon details...");
  const allDetails: PokemonDetail[] = [];
  const allListItems: PokemonListItem[] = [];

  for (let i = 0; i < ids.length; i++) {
    const detail = extractPokemonDetail(pokemonDataRaw[i], speciesDataRaw[i]);
    allDetails.push(detail);
    allListItems.push({
      id: detail.id,
      name: detail.name,
      types: detail.types,
      sprite: detail.sprite,
    });
  }
  console.log(`  Processed ${allDetails.length} Pokemon\n`);

  // ---- Step 3: Write master list -------------------------------------------
  console.log("💾 Step 3: Writing all-pokemon.json...");
  writeJson("all-pokemon.json", allListItems);

  // ---- Step 4: Write per-generation files ----------------------------------
  console.log("💾 Step 4: Writing per-generation files...");
  for (const [gen, range] of Object.entries(GENERATIONS)) {
    const genPokemon = allDetails.filter(
      (p) => p.id >= range.start && p.id <= range.end
    );
    const filename = `gen-${gen}.json`;
    writeJson(filename, genPokemon);
    console.log(
      `  gen-${gen}.json: ${genPokemon.length} Pokemon (${range.name})`
    );
  }
  console.log();

  // ---- Step 5: Fetch evolution chains --------------------------------------
  console.log("🔗 Step 5: Fetching evolution chains...");

  // Collect unique evolution chain IDs
  const chainIds = new Set<number>();
  for (const detail of allDetails) {
    if (detail.species.evolutionChainId) {
      chainIds.add(detail.species.evolutionChainId);
    }
  }
  const chainIdArray = Array.from(chainIds).sort((a, b) => a - b);
  console.log(`  Found ${chainIdArray.length} unique chains`);

  const chainDataRaw = await batchProcess(
    chainIdArray,
    async (id) => fetchWithRetry(`${API_BASE}/evolution-chain/${id}`),
    CONCURRENCY,
    "Evolution chains"
  );

  const evolutionChains: EvolutionChain[] = chainDataRaw.map(
    (raw: any, idx) => ({
      id: chainIdArray[idx],
      chain: extractEvolutionChain(raw.chain),
    })
  );

  console.log("\n💾 Writing evolution-chains.json...");
  writeJson("evolution-chains.json", evolutionChains);

  // ---- Step 6: Fetch type effectiveness ------------------------------------
  console.log("\n⚡ Step 6: Fetching type effectiveness...");
  const typeNames = [
    "normal", "fire", "water", "electric", "grass", "ice",
    "fighting", "poison", "ground", "flying", "psychic", "bug",
    "rock", "ghost", "dragon", "dark", "steel", "fairy",
  ];

  const typeDataRaw = await batchProcess(
    typeNames,
    async (name) => fetchWithRetry(`${API_BASE}/type/${name}`),
    CONCURRENCY,
    "Types"
  );

  const typeEffectiveness: TypeEffectiveness = {};
  for (let i = 0; i < typeNames.length; i++) {
    const t: any = typeDataRaw[i];
    typeEffectiveness[typeNames[i]] = {
      doubleDamageTo: t.damage_relations.double_damage_to.map(
        (d: any) => d.name
      ),
      halfDamageTo: t.damage_relations.half_damage_to.map(
        (d: any) => d.name
      ),
      noDamageTo: t.damage_relations.no_damage_to.map(
        (d: any) => d.name
      ),
    };
  }

  console.log("\n💾 Writing type-effectiveness.json...");
  writeJson("type-effectiveness.json", typeEffectiveness);

  // ---- Step 7: Build search index ------------------------------------------
  console.log("\n🔍 Step 7: Building search index...");
  const searchIndex = allDetails.map((p) => ({
    id: p.id,
    name: p.name,
    displayName: formatPokemonName(p.name),
    types: p.types,
    genus: p.species.genus,
    generation: p.species.generation,
    sprite: p.sprite,
  }));

  writeJson("search-index.json", searchIndex);

  // ---- Step 8: Fetch move details -------------------------------------------
  if (!SKIP_MOVES) {
    if (!FORCE && isCacheFresh("moves.json")) {
      console.log("\n🎯 Step 8: moves.json is fresh, skipping (use --force to override)");
    } else {
      console.log("\n🎯 Step 8: Fetching move details...");

      // Get list of all moves
      const moveListData: any = await fetchWithRetry(`${API_BASE}/move?limit=1000`);
      const moveUrls: { name: string; url: string }[] = moveListData.results;
      console.log(`  Found ${moveUrls.length} moves`);

      // Fetch individual move data
      const moveDataRaw = await batchProcess(
        moveUrls,
        async (m) => fetchWithRetry(m.url),
        CONCURRENCY,
        "Move details"
      );

      // Extract move details
      const moveDetails: MoveDetail[] = moveDataRaw.map((raw: any) => {
        // Find English short effect text
        const effectEntry = raw.effect_entries?.find(
          (e: any) => e.language.name === "en"
        );
        let effectText = effectEntry?.short_effect ?? "";
        // Replace $effect_chance placeholder with actual value
        if (raw.effect_chance != null) {
          effectText = effectText.replace(/\$effect_chance/g, String(raw.effect_chance));
        }

        return {
          id: raw.id,
          name: raw.name,
          type: raw.type?.name ?? "normal",
          damageClass: raw.damage_class?.name ?? "status",
          power: raw.power ?? null,
          accuracy: raw.accuracy ?? null,
          pp: raw.pp ?? 0,
          effectText,
          effectChance: raw.effect_chance ?? null,
        };
      });

      console.log(`\n💾 Writing moves.json (${moveDetails.length} moves)...`);
      writeJson("moves.json", moveDetails);
    }
  } else {
    console.log("\n⏭️  Step 8: Skipping moves (--skip-moves)");
  }

  // ---- Step 9: Fetch encounter data -----------------------------------------
  if (!SKIP_ENCOUNTERS) {
    const encounterDir = path.join("encounters");
    const firstFile = `encounters/red-blue.json`;
    if (!FORCE && isCacheFresh(firstFile)) {
      console.log("\n🗺️  Step 9: Encounter data is fresh, skipping (use --force to override)");
    } else {
      console.log("\n🗺️  Step 9: Fetching encounter data...");

      // Fetch encounters for all Pokemon
      const encountersByVersion = new Map<string, LocationEncounter[]>();

      const encounterDataRaw = await batchProcess(
        ids,
        async (id) => {
          try {
            return await fetchWithRetry(`${API_BASE}/pokemon/${id}/encounters`);
          } catch {
            return []; // Some Pokemon have no encounter data
          }
        },
        CONCURRENCY,
        "Encounters"
      );

      // Process encounter data
      for (let i = 0; i < ids.length; i++) {
        const pokemonId = ids[i];
        const pokemonName = allListItems[i]?.name ?? `pokemon-${pokemonId}`;
        const encounters: any[] = encounterDataRaw[i] as any[] ?? [];

        for (const enc of encounters) {
          const locationArea = enc.location_area?.name ?? "";
          const locationName = prettifyLocation(locationArea);

          for (const vd of enc.version_details ?? []) {
            const versionName = vd.version?.name ?? "";
            const groupSlug = VERSION_TO_GROUP[versionName];
            if (!groupSlug) continue; // Unknown version, skip

            for (const ed of vd.encounter_details ?? []) {
              const entry: LocationEncounter = {
                pokemonId,
                pokemonName,
                locationArea,
                locationName,
                versionName,
                method: ed.method?.name ?? "walk",
                minLevel: ed.min_level ?? 0,
                maxLevel: ed.max_level ?? 0,
                chance: ed.chance ?? 0,
              };

              if (!encountersByVersion.has(groupSlug)) {
                encountersByVersion.set(groupSlug, []);
              }
              encountersByVersion.get(groupSlug)!.push(entry);
            }
          }
        }
      }

      // Write per-version-group encounter files
      console.log(`\n💾 Writing encounter files...`);
      for (const [group, encounters] of encountersByVersion) {
        // Sort by location, then Pokemon ID
        encounters.sort((a, b) => {
          const locCmp = a.locationName.localeCompare(b.locationName);
          if (locCmp !== 0) return locCmp;
          return a.pokemonId - b.pokemonId;
        });
        writeJson(`encounters/${group}.json`, encounters);
        console.log(`  encounters/${group}.json: ${encounters.length} entries`);
      }
    }
  } else {
    console.log("\n⏭️  Step 9: Skipping encounters (--skip-encounters)");
  }

  // ---- Step 10: Veekun CSV enrichment ----------------------------------------
  if (!SKIP_VEEKUN) {
    console.log("\n📚 Step 10: Enriching data with Veekun CSVs...");

    try {
      // 10a: Enrich move effect descriptions
      if (!SKIP_MOVES && fs.existsSync(path.join(DATA_DIR, "moves.json"))) {
        console.log("  10a: Enriching move effects...");
        const veekunEffects = await loadVeekunMoveEffects();
        const movesRaw = fs.readFileSync(path.join(DATA_DIR, "moves.json"), "utf-8");
        const moves: MoveDetail[] = JSON.parse(movesRaw);

        let enriched = 0;
        for (const move of moves) {
          const veekunEffect = veekunEffects.effects.get(move.name);
          if (veekunEffect && veekunEffect.length > (move.effectText?.length ?? 0)) {
            // Use Veekun's text only if it's more detailed
            move.effectText = veekunEffect;
            enriched++;
          }
        }

        writeJson("moves.json", moves);
        console.log(`  Enriched ${enriched}/${moves.length} move descriptions from Veekun`);
      }

      // 10b: Enrich encounter location names
      if (!SKIP_ENCOUNTERS) {
        const encounterDir = path.join(DATA_DIR, "encounters");
        if (fs.existsSync(encounterDir)) {
          console.log("  10b: Enriching encounter location names...");
          const veekunLocations = await loadVeekunLocationNames();

          const encounterFiles = fs.readdirSync(encounterDir).filter(f => f.endsWith(".json"));
          let totalEnriched = 0;

          for (const file of encounterFiles) {
            const filePath = path.join(encounterDir, file);
            const encounters: LocationEncounter[] = JSON.parse(
              fs.readFileSync(filePath, "utf-8")
            );

            let fileEnriched = 0;
            for (const enc of encounters) {
              // Try to match location area identifier to a proper name
              const properName = veekunLocations.names.get(enc.locationArea);
              if (properName && properName !== enc.locationName) {
                enc.locationName = properName;
                fileEnriched++;
              }
            }

            if (fileEnriched > 0) {
              writeJson(`encounters/${file}`, encounters);
              totalEnriched += fileEnriched;
            }
          }
          console.log(`  Enriched ${totalEnriched} encounter location names from Veekun`);
        }
      }
    } catch (err) {
      console.warn("  ⚠ Veekun enrichment failed (non-fatal):", err);
      console.warn("  Continuing with PokeAPI data only...");
    }
  } else {
    console.log("\n⏭️  Step 10: Skipping Veekun enrichment (--skip-veekun)");
  }

  // ---- Step 11: Fetch item data -----------------------------------------------
  if (!SKIP_ITEMS) {
    if (!FORCE && isCacheFresh("items.json")) {
      console.log("\n🎒 Step 11: items.json is fresh, skipping (use --force to override)");
    } else {
      console.log("\n🎒 Step 11: Fetching item data...");

      try {
        // Get list of all items
        const itemListData: any = await fetchWithRetry(`${API_BASE}/item?limit=2500`);
        const itemUrls: { name: string; url: string }[] = itemListData.results;
        console.log(`  Found ${itemUrls.length} items`);

        // Fetch individual item data
        const itemDataRaw = await batchProcess(
          itemUrls,
          async (item) => {
            try {
              return await fetchWithRetry(item.url);
            } catch {
              return null;
            }
          },
          CONCURRENCY,
          "Item details"
        );

        // Extract item details
        interface ItemDetail {
          id: number;
          name: string;
          category: string;
          effectText: string;
          cost: number;
          sprite: string | null;
        }

        const items: ItemDetail[] = [];
        for (const raw of itemDataRaw) {
          if (!raw) continue;
          const r = raw as any;
          const effectEntry = r.effect_entries?.find(
            (e: any) => e.language?.name === "en"
          );

          items.push({
            id: r.id,
            name: r.name,
            category: r.category?.name ?? "other",
            effectText: effectEntry?.short_effect ?? "",
            cost: r.cost ?? 0,
            sprite: r.sprites?.default ?? null,
          });
        }

        console.log(`\n💾 Writing items.json (${items.length} items)...`);
        writeJson("items.json", items);
      } catch (err) {
        console.warn("  ⚠ Item fetching failed (non-fatal):", err);
      }
    }
  } else {
    console.log("\n⏭️  Step 11: Skipping items (--skip-items)");
  }

  // ---- Summary -------------------------------------------------------------
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log("\n========================");
  console.log(`✅ Data pipeline complete in ${elapsed}s`);
  console.log(`📁 Output directory: ${DATA_DIR}`);

  // Print file sizes (including subdirectories)
  printFileSizes(DATA_DIR, "");
}

function printFileSizes(dir: string, prefix: string) {
  let totalSize = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      printFileSizes(fullPath, `${prefix}${entry.name}/`);
    } else if (entry.name.endsWith(".json")) {
      const stat = fs.statSync(fullPath);
      totalSize += stat.size;
      console.log(`   ${prefix}${entry.name}: ${formatSize(stat.size)}`);
    }
  }
  if (prefix === "") {
    console.log(`   Total: ${formatSize(totalSize)}`);
  }
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function writeJson(filename: string, data: unknown) {
  const rootPath = path.join(DATA_DIR, filename);
  const publicPath = path.join(PUBLIC_DATA_DIR, filename);
  const json = JSON.stringify(data);
  fs.mkdirSync(path.dirname(rootPath), { recursive: true });
  fs.mkdirSync(path.dirname(publicPath), { recursive: true });
  fs.writeFileSync(rootPath, json);
  fs.writeFileSync(publicPath, json);
}

/** Check if a file exists and is recent (within 24h). */
function isCacheFresh(filename: string): boolean {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) return false;
  const stat = fs.statSync(filePath);
  const age = Date.now() - stat.mtimeMs;
  return age < 24 * 60 * 60 * 1000; // 24 hours
}

/** Prettify a kebab-case location name. */
function prettifyLocation(slug: string): string {
  return slug
    .replace(/-area$/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function formatPokemonName(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

main().catch((err) => {
  console.error("\n❌ Pipeline failed:", err);
  process.exit(1);
});
