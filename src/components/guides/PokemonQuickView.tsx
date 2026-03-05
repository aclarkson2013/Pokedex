"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { TYPE_COLORS, TYPE_HEX, ALL_TYPES } from "@/lib/pokemon/type-colors";
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

interface TypeData {
  [attackingType: string]: {
    doubleDamageTo: string[];
    halfDamageTo: string[];
    noDamageTo: string[];
  };
}

interface PokemonQuickViewProps {
  pokemonId: number | null;
  onClose: () => void;
}

function calculateDefensiveMultipliers(
  types: string[],
  typeData: TypeData
): Record<string, number> {
  const multipliers: Record<string, number> = {};
  for (const attackingType of ALL_TYPES) {
    let multiplier = 1;
    const attackData = typeData[attackingType];
    if (!attackData) continue;
    for (const defenseType of types) {
      if (attackData.doubleDamageTo.includes(defenseType)) {
        multiplier *= 2;
      } else if (attackData.halfDamageTo.includes(defenseType)) {
        multiplier *= 0.5;
      } else if (attackData.noDamageTo.includes(defenseType)) {
        multiplier *= 0;
      }
    }
    multipliers[attackingType] = multiplier;
  }
  return multipliers;
}

export function PokemonQuickView({ pokemonId, onClose }: PokemonQuickViewProps) {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [typeData, setTypeData] = useState<TypeData | null>(null);

  useEffect(() => {
    if (!pokemonId) {
      setPokemon(null);
      return;
    }
    setLoading(true);
    const gen =
      pokemonId <= 151 ? 1 :
      pokemonId <= 251 ? 2 :
      pokemonId <= 386 ? 3 :
      pokemonId <= 493 ? 4 :
      pokemonId <= 649 ? 5 :
      pokemonId <= 721 ? 6 :
      pokemonId <= 809 ? 7 :
      pokemonId <= 905 ? 8 : 9;

    Promise.all([
      fetch(`/data/gen-${gen}.json`).then((res) => res.json()),
      typeData ? Promise.resolve(typeData) : fetch("/data/type-effectiveness.json").then((res) => res.json()),
    ])
      .then(([data, tData]: [PokemonData[], TypeData]) => {
        const found = data.find((p) => p.id === pokemonId);
        setPokemon(found ?? null);
        if (!typeData) setTypeData(tData);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [pokemonId, typeData]);

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

  // Prevent body scroll when open
  useEffect(() => {
    if (pokemonId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [pokemonId]);

  if (!pokemonId) return null;

  // Compute type effectiveness
  const multipliers = pokemon && typeData
    ? calculateDefensiveMultipliers(pokemon.types, typeData)
    : null;

  const superWeak = multipliers ? ALL_TYPES.filter((t) => multipliers[t] === 4) : [];
  const weak = multipliers ? ALL_TYPES.filter((t) => multipliers[t] === 2) : [];
  const resistant = multipliers ? ALL_TYPES.filter((t) => multipliers[t] === 0.5) : [];
  const superResistant = multipliers ? ALL_TYPES.filter((t) => multipliers[t] === 0.25) : [];
  const immune = multipliers ? ALL_TYPES.filter((t) => multipliers[t] === 0) : [];

  return (
    /* Backdrop — centered */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      {/* Centered modal */}
      <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800 relative max-h-[85vh] overflow-y-auto">
        {/* X close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Close"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-red-500" />
          </div>
        ) : pokemon ? (
          <div className="px-5 pt-5 pb-5">
            {/* Header */}
            <div className="flex items-center gap-4 pr-8">
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

            {/* Type Effectiveness */}
            <div className="mt-4 space-y-2">
              <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Type Effectiveness
              </h4>

              {superWeak.length > 0 && (
                <div>
                  <p className="text-[10px] font-medium text-red-600 dark:text-red-400 mb-1">
                    Super Weak (4×)
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {superWeak.map((t) => (
                      <TypeBadge key={t} type={t} label="4×" variant="super-weak" />
                    ))}
                  </div>
                </div>
              )}

              {weak.length > 0 && (
                <div>
                  <p className="text-[10px] font-medium text-red-500 dark:text-red-400 mb-1">
                    Weak (2×)
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {weak.map((t) => (
                      <TypeBadge key={t} type={t} label="2×" variant="weak" />
                    ))}
                  </div>
                </div>
              )}

              {resistant.length > 0 && (
                <div>
                  <p className="text-[10px] font-medium text-green-600 dark:text-green-400 mb-1">
                    Resistant (½×)
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {resistant.map((t) => (
                      <TypeBadge key={t} type={t} label="½×" variant="resistant" />
                    ))}
                  </div>
                </div>
              )}

              {superResistant.length > 0 && (
                <div>
                  <p className="text-[10px] font-medium text-green-700 dark:text-green-400 mb-1">
                    Super Resistant (¼×)
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {superResistant.map((t) => (
                      <TypeBadge key={t} type={t} label="¼×" variant="super-resistant" />
                    ))}
                  </div>
                </div>
              )}

              {immune.length > 0 && (
                <div>
                  <p className="text-[10px] font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Immune (0×)
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {immune.map((t) => (
                      <TypeBadge key={t} type={t} label="0×" variant="immune" />
                    ))}
                  </div>
                </div>
              )}
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
          <div className="px-6 py-12 text-center text-sm text-gray-500">
            Pokémon data not found.
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Type badge for effectiveness display ─────────────── */
function TypeBadge({
  type,
  label,
  variant,
}: {
  type: string;
  label: string;
  variant: "super-weak" | "weak" | "resistant" | "super-resistant" | "immune";
}) {
  const hex = TYPE_HEX[type] ?? "#888";

  const opacityMap = {
    "super-weak": "80",
    weak: "60",
    resistant: "40",
    "super-resistant": "30",
    immune: "20",
  };

  const textColorMap = {
    "super-weak": "text-red-700 dark:text-red-300",
    weak: "text-red-600 dark:text-red-400",
    resistant: "text-green-600 dark:text-green-400",
    "super-resistant": "text-green-700 dark:text-green-400",
    immune: "text-gray-400 dark:text-gray-500",
  };

  return (
    <div
      className="flex flex-col items-center gap-0.5 rounded-lg p-1.5"
      style={{ backgroundColor: `${hex}${opacityMap[variant]}` }}
    >
      <span
        className="text-[8px] font-bold uppercase tracking-wider"
        style={{ color: hex }}
      >
        {type.slice(0, 3)}
      </span>
      <span className={`text-[10px] font-bold ${textColorMap[variant]}`}>
        {label}
      </span>
    </div>
  );
}
