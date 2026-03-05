/**
 * Hook to load Pokemon data (moves, abilities) from IndexedDB
 * for configuring a team member.
 *
 * Returns moves grouped by learn method and all available abilities.
 */

"use client";

import { useState, useEffect } from "react";
import { getPokemonById, type PokemonDetail } from "@/lib/db/pokemon-db";

export interface GroupedMoves {
  levelUp: { name: string; level: number }[];
  tm: { name: string }[];
  egg: { name: string }[];
  tutor: { name: string }[];
}

export interface TeamMemberData {
  abilities: { name: string; isHidden: boolean }[];
  moves: GroupedMoves;
  types: string[];
  sprite: string;
  officialArtwork: string;
  isLoading: boolean;
}

/**
 * Load a Pokemon's moves and abilities from IndexedDB.
 * Returns `null` fields while loading, or if pokemonId is 0/undefined.
 */
export function useTeamMemberData(pokemonId: number | undefined): TeamMemberData {
  const [data, setData] = useState<TeamMemberData>({
    abilities: [],
    moves: { levelUp: [], tm: [], egg: [], tutor: [] },
    types: [],
    sprite: "",
    officialArtwork: "",
    isLoading: true,
  });

  useEffect(() => {
    if (!pokemonId) {
      setData({
        abilities: [],
        moves: { levelUp: [], tm: [], egg: [], tutor: [] },
        types: [],
        sprite: "",
        officialArtwork: "",
        isLoading: false,
      });
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        const pokemon: PokemonDetail | undefined = await getPokemonById(pokemonId!);
        if (cancelled || !pokemon) return;

        // Group moves by learn method, deduplicate by name
        const seenLevel = new Set<string>();
        const seenTM = new Set<string>();
        const seenEgg = new Set<string>();
        const seenTutor = new Set<string>();

        const grouped: GroupedMoves = {
          levelUp: [],
          tm: [],
          egg: [],
          tutor: [],
        };

        for (const move of pokemon.moves) {
          const method = move.learnMethod;
          const name = move.name;

          if (method === "level-up" && !seenLevel.has(name)) {
            seenLevel.add(name);
            grouped.levelUp.push({ name, level: move.levelLearnedAt });
          } else if (method === "machine" && !seenTM.has(name)) {
            seenTM.add(name);
            grouped.tm.push({ name });
          } else if (method === "egg" && !seenEgg.has(name)) {
            seenEgg.add(name);
            grouped.egg.push({ name });
          } else if (method === "tutor" && !seenTutor.has(name)) {
            seenTutor.add(name);
            grouped.tutor.push({ name });
          }
        }

        // Sort level-up by level, others alphabetically
        grouped.levelUp.sort((a, b) => a.level - b.level);
        grouped.tm.sort((a, b) => a.name.localeCompare(b.name));
        grouped.egg.sort((a, b) => a.name.localeCompare(b.name));
        grouped.tutor.sort((a, b) => a.name.localeCompare(b.name));

        setData({
          abilities: pokemon.abilities,
          moves: grouped,
          types: pokemon.types,
          sprite: pokemon.sprite,
          officialArtwork: pokemon.officialArtwork,
          isLoading: false,
        });
      } catch (err) {
        console.error("[useTeamMemberData] Failed to load:", err);
        if (!cancelled) {
          setData((prev) => ({ ...prev, isLoading: false }));
        }
      }
    }

    setData((prev) => ({ ...prev, isLoading: true }));
    load();

    return () => {
      cancelled = true;
    };
  }, [pokemonId]);

  return data;
}
