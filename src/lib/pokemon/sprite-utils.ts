/**
 * Utility functions for Pokemon sprite images.
 */

/** Get the small sprite URL for a Pokemon by its National Dex ID */
export function getSpriteUrl(pokemonId: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
}

/** Get the official artwork URL for a Pokemon by its National Dex ID */
export function getArtworkUrl(pokemonId: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
}

/**
 * Resolve a Pokemon display name (e.g. "Pikachu") to its National Dex ID.
 * This is loaded lazily from /data/all-pokemon.json.
 * Returns undefined if name is not found.
 */
let nameMapCache: Map<string, number> | null = null;
let nameMapPromise: Promise<Map<string, number>> | null = null;

export async function loadNameToIdMap(): Promise<Map<string, number>> {
  if (nameMapCache) return nameMapCache;

  if (!nameMapPromise) {
    nameMapPromise = fetch("/data/all-pokemon.json")
      .then((res) => res.json())
      .then((data: { id: number; name: string }[]) => {
        const map = new Map<string, number>();
        for (const p of data) {
          map.set(p.name.toLowerCase(), p.id);
        }
        nameMapCache = map;
        return map;
      });
  }

  return nameMapPromise;
}

/**
 * Synchronous lookup — only works after loadNameToIdMap() has resolved.
 * Returns 0 if not found or not yet loaded.
 */
export function pokemonNameToId(displayName: string): number {
  if (!nameMapCache) return 0;
  // Convert display names like "Mr. Mime", "Nidoran♀" to API format
  const normalized = displayName
    .toLowerCase()
    .replace(/♀/g, "-f")
    .replace(/♂/g, "-m")
    .replace(/\./g, "")
    .replace(/'/g, "")
    .replace(/\s+/g, "-")
    .replace(/:/g, "");
  return nameMapCache.get(normalized) ?? 0;
}
