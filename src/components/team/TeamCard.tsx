"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import type { TeamDocument } from "@/lib/firebase/teams";

interface TeamCardProps {
  team: TeamDocument;
  /** When true, card is not clickable (used on friend profiles). */
  readOnly?: boolean;
}

export function TeamCard({ team, readOnly }: TeamCardProps) {
  // Pad to 6 slots
  const slots = Array.from({ length: 6 }, (_, i) => team.members[i] ?? null);

  const Wrapper = readOnly ? "div" : Link;
  const wrapperProps = readOnly
    ? {}
    : { href: `/teams/${team.id}` };

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className={`block rounded-2xl bg-white p-4 shadow-sm dark:bg-gray-800 ${
        readOnly ? "" : "transition-all hover:shadow-md active:scale-[0.98]"
      }`}
    >
      {/* Team name + visibility */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
          {team.name || "Unnamed Team"}
        </h3>
        <div className="flex items-center gap-1.5">
          {team.isPublic && (
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
              Public
            </span>
          )}
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* 6-slot grid */}
      <div className="mt-3 grid grid-cols-6 gap-1.5">
        {slots.map((member, idx) => (
          <div
            key={member ? member.pokemonId : `empty-${idx}`}
            className="flex aspect-square items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700/50"
          >
            {member ? (
              <Image
                src={member.sprite}
                alt={member.pokemonName}
                width={48}
                height={48}
                className="pixelated h-10 w-10 object-contain"
                loading="lazy"
              />
            ) : (
              <svg
                className="h-5 w-5 text-gray-300 dark:text-gray-600"
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
            )}
          </div>
        ))}
      </div>

      {/* Type summary — unique types across team */}
      {team.members.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {getUniqueTypes(team.members).map((type) => (
            <TypeBadge key={type} type={type} size="sm" />
          ))}
        </div>
      )}
    </Wrapper>
  );
}

function getUniqueTypes(
  members: TeamDocument["members"]
): string[] {
  const seen = new Set<string>();
  for (const m of members) {
    for (const t of m.types) {
      seen.add(t);
    }
  }
  return Array.from(seen);
}
