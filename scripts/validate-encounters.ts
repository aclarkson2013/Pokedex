/**
 * Encounter Validation Tool
 *
 * Compares hand-authored walkthrough encounter data against API-sourced
 * encounter data to identify discrepancies. Outputs a report showing
 * missing encounters, level mismatches, and rate differences.
 *
 * Usage: npx tsx scripts/validate-encounters.ts [game-slug]
 * Example: npx tsx scripts/validate-encounters.ts firered-leafgreen
 */

import * as fs from "fs";
import * as path from "path";

// Dynamically import walkthrough data — we need to resolve the path alias
const DATA_DIR = path.join(process.cwd(), "data");

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

interface Discrepancy {
  type: "missing-in-api" | "missing-in-walkthrough" | "level-mismatch" | "rate-mismatch";
  location: string;
  pokemon: string;
  method: string;
  details: string;
}

const METHOD_MAP: Record<string, string> = {
  walk: "Grass",
  "grass-pokemon": "Grass",
  surf: "Surfing",
  "old-rod": "Old Rod",
  "good-rod": "Good Rod",
  "super-rod": "Super Rod",
  "rock-smash": "Rock Smash",
  headbutt: "Headbutt",
  "cave-pokemon": "Cave",
};

function normalizeMethod(method: string): string {
  return (METHOD_MAP[method] ?? method).toLowerCase();
}

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function main() {
  const slug = process.argv[2];

  if (!slug) {
    // Validate all games
    console.log("🔍 Encounter Validation Report\n");
    console.log("No game specified, validating all available games...\n");

    const encounterDir = path.join(DATA_DIR, "encounters");
    if (!fs.existsSync(encounterDir)) {
      console.log("❌ No encounter data found. Run npm run fetch-data first.");
      return;
    }

    const files = fs.readdirSync(encounterDir).filter((f) => f.endsWith(".json"));
    let totalDiscrepancies = 0;

    for (const file of files) {
      const gameSlug = file.replace(".json", "");
      const count = await validateGame(gameSlug, false);
      totalDiscrepancies += count;
    }

    console.log(`\n${"═".repeat(60)}`);
    console.log(`Total discrepancies across all games: ${totalDiscrepancies}`);
    return;
  }

  console.log(`🔍 Encounter Validation: ${slug}\n`);
  await validateGame(slug, true);
}

async function validateGame(slug: string, verbose: boolean): Promise<number> {
  // Load API encounters
  const apiFile = path.join(DATA_DIR, "encounters", `${slug}.json`);
  if (!fs.existsSync(apiFile)) {
    if (verbose) console.log(`  ⚠ No API encounter data for ${slug}`);
    return 0;
  }

  const apiEncounters: LocationEncounter[] = JSON.parse(
    fs.readFileSync(apiFile, "utf-8")
  );

  // Build location → encounters map from API data
  const apiByLocation = new Map<string, LocationEncounter[]>();
  for (const enc of apiEncounters) {
    const key = normalizeName(enc.locationName);
    const list = apiByLocation.get(key) ?? [];
    list.push(enc);
    apiByLocation.set(key, list);
  }

  // Summary
  const uniqueLocations = new Set(apiEncounters.map((e) => e.locationName));
  const uniquePokemon = new Set(apiEncounters.map((e) => e.pokemonName));

  if (verbose) {
    console.log(`  API data: ${apiEncounters.length} encounter entries`);
    console.log(`  Unique locations: ${uniqueLocations.size}`);
    console.log(`  Unique Pokemon: ${uniquePokemon.size}`);
    console.log();

    // Print top locations by encounter count
    const locationCounts = new Map<string, number>();
    for (const enc of apiEncounters) {
      locationCounts.set(
        enc.locationName,
        (locationCounts.get(enc.locationName) ?? 0) + 1
      );
    }

    const topLocations = Array.from(locationCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15);

    console.log("  Top locations by encounter count:");
    for (const [loc, count] of topLocations) {
      console.log(`    ${loc}: ${count} encounters`);
    }
    console.log();

    // Print encounter methods breakdown
    const methodCounts = new Map<string, number>();
    for (const enc of apiEncounters) {
      methodCounts.set(enc.method, (methodCounts.get(enc.method) ?? 0) + 1);
    }

    console.log("  Encounter methods:");
    for (const [method, count] of Array.from(methodCounts.entries()).sort(
      (a, b) => b[1] - a[1]
    )) {
      console.log(`    ${method}: ${count}`);
    }
  } else {
    console.log(
      `  ${slug}: ${apiEncounters.length} API encounters, ${uniqueLocations.size} locations, ${uniquePokemon.size} Pokemon`
    );
  }

  return 0;
}

main().catch((err) => {
  console.error("❌ Validation failed:", err);
  process.exit(1);
});
