"use client";

import Image from "next/image";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import { formatPokemonName } from "@/lib/utils/format";
import type { TeamMember } from "@/lib/firebase/teams";

interface TeamSlotProps {
  member: TeamMember | null;
  index: number;
  onTap: () => void;
}

export function TeamSlot({ member, index, onTap }: TeamSlotProps) {
  if (!member) {
    return (
      <button
        onClick={onTap}
        className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-red-300 hover:bg-red-50/50 active:scale-[0.97] dark:border-gray-600 dark:bg-gray-800 dark:hover:border-red-500/50 dark:hover:bg-red-900/10"
        aria-label={`Add Pokemon to slot ${index + 1}`}
      >
        <svg
          className="h-8 w-8 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span className="mt-1 text-[10px] font-medium text-gray-400 dark:text-gray-500">
          Add
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onTap}
      className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-xl bg-white p-2 shadow-sm transition-all hover:shadow-md active:scale-[0.97] dark:bg-gray-800"
      aria-label={`Edit ${member.nickname || member.pokemonName}`}
    >
      {/* Sprite */}
      <div className="relative h-14 w-14 sm:h-16 sm:w-16">
        <Image
          src={member.sprite}
          alt={member.pokemonName}
          width={64}
          height={64}
          className="pixelated h-full w-full object-contain"
        />
      </div>

      {/* Name */}
      <p className="mt-1 w-full truncate text-center text-[11px] font-semibold text-gray-800 dark:text-gray-100">
        {member.nickname || formatPokemonName(member.pokemonName)}
      </p>

      {/* Types */}
      <div className="mt-0.5 flex gap-0.5">
        {member.types.map((type) => (
          <TypeBadge key={type} type={type} size="sm" />
        ))}
      </div>
    </button>
  );
}
