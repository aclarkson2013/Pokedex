"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeBadge } from "./TypeBadge";
import { formatPokemonName, formatPokemonId } from "@/lib/utils/format";
import { TYPE_HEX } from "@/lib/pokemon/type-colors";

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

export function PokemonCard({ id, name, types, sprite }: PokemonCardProps) {
  const primaryType = types[0] ?? "normal";
  const bgColor = TYPE_HEX[primaryType] ?? "#A8A77A";

  return (
    <Link
      href={`/pokemon/${id}`}
      className="group relative flex flex-col items-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-800"
    >
      {/* Number badge */}
      <span className="absolute right-2 top-2 text-[10px] font-bold text-gray-400 dark:text-gray-500">
        {formatPokemonId(id)}
      </span>

      {/* Colored background circle behind sprite */}
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-full sm:h-24 sm:w-24"
        style={{ backgroundColor: `${bgColor}20` }}
      >
        {sprite ? (
          <Image
            src={sprite}
            alt={name}
            width={80}
            height={80}
            className="pixelated h-16 w-16 object-contain transition-transform group-hover:scale-110 sm:h-20 sm:w-20"
            loading="lazy"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center text-2xl sm:h-20 sm:w-20">
            ?
          </div>
        )}
      </div>

      {/* Name */}
      <p className="mt-2 text-center text-xs font-semibold text-gray-800 sm:text-sm dark:text-gray-100">
        {formatPokemonName(name)}
      </p>

      {/* Type badges */}
      <div className="mt-1.5 flex gap-1">
        {types.map((type) => (
          <TypeBadge key={type} type={type} size="sm" />
        ))}
      </div>
    </Link>
  );
}
