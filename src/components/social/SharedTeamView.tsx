"use client";

import Image from "next/image";
import { TypeBadge } from "@/components/pokemon/TypeBadge";
import type { SharedTeamDocument } from "@/lib/firebase/sharing";

interface SharedTeamViewProps {
  team: SharedTeamDocument;
}

/**
 * Read-only display of a shared team. Used on the public share page.
 */
export function SharedTeamView({ team }: SharedTeamViewProps) {
  // Pad to 6 slots
  const slots = Array.from({ length: 6 }, (_, i) => team.members[i] ?? null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div
        className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
        style={{ paddingTop: `calc(env(safe-area-inset-top, 0px) + 0.75rem)` }}
      >
        <div className="px-4 pb-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Shared by {team.ownerDisplayName || "Trainer"}
          </p>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            {team.teamName || "Unnamed Team"}
          </h1>
        </div>
      </div>

      <div className="p-4">
        {/* Team grid */}
        <div className="grid grid-cols-2 gap-3">
          {slots.map((member, idx) => (
            <div
              key={member ? member.pokemonId : `empty-${idx}`}
              className="rounded-xl bg-white p-3 shadow-sm dark:bg-gray-800"
            >
              {member ? (
                <div className="flex flex-col items-center">
                  <Image
                    src={member.sprite}
                    alt={member.pokemonName}
                    width={80}
                    height={80}
                    className="pixelated h-16 w-16 object-contain"
                  />
                  <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                    {member.nickname || member.pokemonName}
                  </p>
                  {member.nickname && (
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">
                      {member.pokemonName}
                    </p>
                  )}
                  <div className="mt-1.5 flex gap-1">
                    {member.types.map((type) => (
                      <TypeBadge key={type} type={type} size="sm" />
                    ))}
                  </div>
                  {/* Details */}
                  <div className="mt-2 w-full space-y-1">
                    {member.ability && (
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Ability:</span> {member.ability}
                      </p>
                    )}
                    {member.nature && (
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Nature:</span> {member.nature}
                      </p>
                    )}
                    {member.moves.length > 0 && (
                      <div className="text-[10px] text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Moves:</span>
                        <ul className="mt-0.5 ml-2">
                          {member.moves.map((move) => (
                            <li key={move}>{move}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex h-24 items-center justify-center">
                  <svg
                    className="h-8 w-8 text-gray-300 dark:text-gray-600"
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
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Type summary */}
        {team.members.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              Type Coverage
            </p>
            <div className="flex flex-wrap gap-1.5">
              {getUniqueTypes(team.members).map((type) => (
                <TypeBadge key={type} type={type} size="sm" />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Build your own teams in the Pokedex app!
          </p>
        </div>
      </div>
    </div>
  );
}

function getUniqueTypes(members: SharedTeamDocument["members"]): string[] {
  const seen = new Set<string>();
  for (const m of members) {
    for (const t of m.types) {
      seen.add(t);
    }
  }
  return Array.from(seen);
}
