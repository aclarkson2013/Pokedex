"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeBadge } from "./TypeBadge";
import { formatPokemonName, formatPokemonId } from "@/lib/utils/format";
import { TYPE_HEX } from "@/lib/pokemon/type-colors";

interface PokemonHeroProps {
  id: number;
  name: string;
  types: string[];
  officialArtwork: string;
  genus: string;
  totalPokemon: number;
}

export function PokemonHero({
  id,
  name,
  types,
  officialArtwork,
  genus,
  totalPokemon,
}: PokemonHeroProps) {
  const primaryColor = TYPE_HEX[types[0]] ?? "#A8A77A";
  const hasPrev = id > 1;
  const hasNext = id < totalPokemon;

  return (
    <div
      className="relative overflow-hidden rounded-b-3xl px-6 pb-6"
      style={{
        background: `linear-gradient(135deg, ${primaryColor}CC, ${primaryColor}88)`,
        paddingTop: `calc(env(safe-area-inset-top, 0px) + 1rem)`,
      }}
    >
      {/* Back button + navigation */}
      <div className="flex items-center justify-between mb-2">
        <Link
          href="/"
          className="flex items-center gap-1 text-white/90 hover:text-white transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>

        <div className="flex items-center gap-2">
          {hasPrev && (
            <Link
              href={`/pokemon/${id - 1}`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Previous Pokemon"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
          )}
          {hasNext && (
            <Link
              href={`/pokemon/${id + 1}`}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Next Pokemon"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>

      {/* Name + ID */}
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl font-bold text-white">
          {formatPokemonName(name)}
        </h1>
        <span className="text-lg font-bold text-white/70">
          {formatPokemonId(id)}
        </span>
      </div>

      {/* Type badges + genus */}
      <div className="mt-2 flex items-center gap-2">
        {types.map((type) => (
          <TypeBadge key={type} type={type} size="md" />
        ))}
        <span className="ml-2 text-sm text-white/80">{genus}</span>
      </div>

      {/* Artwork */}
      <div className="mt-4 flex justify-center">
        <div className="relative h-52 w-52 sm:h-64 sm:w-64">
          {/* Pokeball background watermark */}
          <svg
            className="absolute inset-0 h-full w-full opacity-10"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="90" fill="none" stroke="white" strokeWidth="8" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="white" strokeWidth="8" />
            <circle cx="100" cy="100" r="25" fill="none" stroke="white" strokeWidth="8" />
          </svg>

          {officialArtwork ? (
            <Image
              src={officialArtwork}
              alt={name}
              width={256}
              height={256}
              className="relative z-10 h-full w-full object-contain drop-shadow-lg"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-6xl text-white/50">
              ?
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
