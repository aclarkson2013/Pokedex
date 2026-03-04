/**
 * Pokemon data loader (client-side).
 *
 * Loads Pokemon data from static JSON files served from /public/data/.
 * Used for client-side data fetching before IndexedDB hydration.
 */

import type { PokemonListItem, PokemonDetail, EvolutionChain } from "@/lib/db/pokemon-db";

/** Load the master Pokemon list from static JSON. */
export async function loadAllPokemonList(): Promise<PokemonListItem[]> {
  const res = await fetch("/data/all-pokemon.json");
  if (!res.ok) throw new Error("Failed to load all-pokemon.json");
  return res.json();
}

/** Load per-generation detail data from static JSON. */
export async function loadGeneration(gen: number): Promise<PokemonDetail[]> {
  const res = await fetch(`/data/gen-${gen}.json`);
  if (!res.ok) throw new Error(`Failed to load gen-${gen}.json`);
  return res.json();
}

/** Load evolution chains from static JSON. */
export async function loadEvolutionChains(): Promise<EvolutionChain[]> {
  const res = await fetch("/data/evolution-chains.json");
  if (!res.ok) throw new Error("Failed to load evolution-chains.json");
  return res.json();
}

/** Load type effectiveness from static JSON. */
export async function loadTypeEffectiveness(): Promise<Record<string, {
  doubleDamageTo: string[];
  halfDamageTo: string[];
  noDamageTo: string[];
}>> {
  const res = await fetch("/data/type-effectiveness.json");
  if (!res.ok) throw new Error("Failed to load type-effectiveness.json");
  return res.json();
}

/** Load search index from static JSON. */
export async function loadSearchIndex(): Promise<Array<{
  id: number;
  name: string;
  displayName: string;
  types: string[];
  genus: string;
  generation: number;
  sprite: string;
}>> {
  const res = await fetch("/data/search-index.json");
  if (!res.ok) throw new Error("Failed to load search-index.json");
  return res.json();
}
