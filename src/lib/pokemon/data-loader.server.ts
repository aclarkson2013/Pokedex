/**
 * Pokemon data loader (server-side only).
 *
 * Reads Pokemon data directly from disk for use in SSG
 * (generateStaticParams, generateMetadata, page components).
 *
 * DO NOT import this file from client components.
 */

import * as fs from "fs";
import * as path from "path";
import type {
  PokemonListItem,
  PokemonDetail,
  EvolutionChain,
  MoveDetail,
  LocationEncounter,
} from "@/lib/db/pokemon-db";

/** Load Pokemon list from disk. */
export function loadAllPokemonListSync(): PokemonListItem[] {
  const filePath = path.join(process.cwd(), "data", "all-pokemon.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

/** Load a generation's data from disk. */
export function loadGenerationSync(gen: number): PokemonDetail[] {
  const filePath = path.join(process.cwd(), "data", `gen-${gen}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

/** Load all Pokemon details from disk (all generations). */
export function loadAllPokemonDetailSync(): PokemonDetail[] {
  const all: PokemonDetail[] = [];
  for (let gen = 1; gen <= 9; gen++) {
    all.push(...loadGenerationSync(gen));
  }
  return all.sort((a, b) => a.id - b.id);
}

/** Load evolution chains from disk. */
export function loadEvolutionChainsSync(): EvolutionChain[] {
  const filePath = path.join(process.cwd(), "data", "evolution-chains.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

/** Load move details from disk. */
export function loadMovesSync(): MoveDetail[] {
  const filePath = path.join(process.cwd(), "data", "moves.json");
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

/** Load encounters for a version group from disk. */
export function loadEncountersByVersionGroupSync(
  slug: string
): LocationEncounter[] {
  const filePath = path.join(
    process.cwd(),
    "data",
    "encounters",
    `${slug}.json`
  );
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
