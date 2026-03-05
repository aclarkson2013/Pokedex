"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { TYPE_COLORS } from "@/lib/pokemon/type-colors";
import { formatPokemonName, formatPokemonId } from "@/lib/utils/format";

interface PokemonData {
  id: number;
  name: string;
  types: string[];
  sprite: string;
  officialArtwork: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
}

interface PokemonQuickViewProps {
  pokemonId: number | null;
  onClose: () => void;
}

export function PokemonQuickView({ pokemonId, onClose }: PokemonQuickViewProps) {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pokemonId) {
      setPokemon(null);
      return;
    }
    setLoading(true);
    // Figure out which gen file to load
    const gen =
      pokemonId <= 151 ? 1 :
      pokemonId <= 251 ? 2 :
      pokemonId <= 386 ? 3 :
      pokemonId <= 493 ? 4 :
      pokemonId <= 649 ? 5 :
      pokemonId <= 721 ? 6 :
      pokemonId <= 809 ? 7 :
      pokemonId <= 905 ? 8 : 9;

    fetch(`/data/gen-${gen}.json`)
      .then((res) => res.json())
      .then((data: PokemonData[]) => {
        const found = data.find((p) => p.id === pokemonId);
        setPokemon(found ?? null);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [pokemonId]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  // Handle escape key
  useEffect(() => {
    if (!pokemonId) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pokemonId, onClose]);

  if (!pokemonId) return null;

  const statEntries = pokemon
    ? [
        { label: "HP", value: pokemon.stats.hp, color: "bg-green-500" },
        { label: "Atk", value: pokemon.stats.attack, color: "bg-red-500" },
        { label: "Def", value: pokemon.stats.defense, color: "bg-orange-400" },
        { label: "SpA", value: pokemon.stats.specialAttack, color: "bg-blue-500" },
        { label: "SpD", value: pokemon.stats.specialDefense, color: "bg-emerald-500" },
        { label: "Spe", value: pokemon.stats.speed, color: "bg-pink-500" },
      ]
    : [];

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm animate-in fade-in"
      onClick={handleBackdropClick}
    >
      {/* Bottom sheet */}
      <div className="w-full max-w-lg animate-in slide-in-from-bottom duration-300 rounded-t-3xl bg-white shadow-2xl dark:bg-gray-800">
        {/* Drag handle */}
        <div className="flex justify-center py-3">
          <div className="h-1 w-10 rounded-full bg-gray-300 dark:bg-gray-600" />
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
          </div>
        ) : pokemon ? (
          <div className="px-6 pb-8">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0">
                <Image
                  src={pokemon.officialArtwork || pokemon.sprite}
                  alt={pokemon.name}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-mono">
                  {formatPokemonId(pokemon.id)}
                </p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {formatPokemonName(pokemon.name)}
                </h3>
                <div className="mt-1 flex gap-1">
                  {pokemon.types.map((t) => (
                    <span
                      key={t}
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[10px] font-semibold capitalize text-white",
                        TYPE_COLORS[t]?.bg || "bg-gray-400"
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Compact stats */}
            <div className="mt-4 space-y-1.5">
              {statEntries.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="w-8 text-right text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                    {s.label}
                  </span>
                  <span className="w-8 text-xs font-bold text-gray-800 dark:text-gray-200">
                    {s.value}
                  </span>
                  <div className="flex-1 h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                    <div
                      className={cn("h-full rounded-full transition-all", s.color)}
                      style={{ width: `${Math.min((s.value / 255) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-1 border-t border-gray-100 dark:border-gray-700">
                <span className="w-8 text-right text-[10px] font-semibold text-gray-500">BST</span>
                <span className="w-8 text-xs font-bold text-gray-800 dark:text-gray-200">
                  {statEntries.reduce((s, e) => s + e.value, 0)}
                </span>
              </div>
            </div>

            {/* Link to full Pokédex entry */}
            <Link
              href={`/pokemon/${pokemon.id}`}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-red-500 py-2.5 text-sm font-semibold text-white hover:bg-red-600 transition-colors"
              onClick={onClose}
            >
              View Full Pokédex Entry →
            </Link>
          </div>
        ) : (
          <div className="px-6 pb-8 text-center text-sm text-gray-500">
            Pokémon data not found.
          </div>
        )}
      </div>
    </div>
  );
}
