"use client";

import Image from "next/image";
import { getSpriteUrl } from "@/lib/pokemon/sprite-utils";
import type { WalkthroughTrainer } from "@/lib/pokemon/walkthroughs";

interface TrainerListProps {
  trainers: WalkthroughTrainer[];
  onPokemonClick: (pokemonId: number) => void;
}

export function TrainerList({ trainers, onPokemonClick }: TrainerListProps) {
  if (trainers.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
      <div className="border-b border-gray-100 bg-gray-50 px-4 py-2.5 dark:border-gray-700 dark:bg-gray-750">
        <h4 className="text-xs font-bold text-gray-600 uppercase tracking-wider dark:text-gray-400">
          ⚔️ Trainers
        </h4>
      </div>

      <div className="divide-y divide-gray-50 dark:divide-gray-700/50">
        {trainers.map((trainer, i) => {
          const isImportant =
            trainer.class === "Gym Leader" ||
            trainer.class === "Champion" ||
            trainer.class === "Elite Four" ||
            trainer.class === "Rival" ||
            trainer.class === "Team Rocket Boss";

          return (
            <div
              key={`${trainer.name}-${i}`}
              className={
                isImportant
                  ? "bg-yellow-50/60 px-4 py-3 dark:bg-yellow-900/10"
                  : "px-4 py-3"
              }
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {trainer.class} {trainer.name}
                  </span>
                  {isImportant && (
                    <span className="ml-1.5 text-xs text-yellow-600 dark:text-yellow-400">★</span>
                  )}
                </div>
                {trainer.reward && (
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {trainer.reward}
                  </span>
                )}
              </div>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {trainer.pokemon.map((poke, j) => (
                  <button
                    key={`${poke.name}-${j}`}
                    onClick={() => onPokemonClick(poke.pokemonId)}
                    className="flex items-center gap-1 rounded-lg bg-gray-50 px-2 py-1 text-xs text-blue-600 hover:bg-blue-50 hover:text-blue-800 hover:underline dark:bg-gray-700 dark:text-blue-400 dark:hover:bg-blue-900/30"
                  >
                    <div className="relative h-6 w-6 shrink-0">
                      <Image
                        src={getSpriteUrl(poke.pokemonId)}
                        alt={poke.name}
                        fill
                        className="object-contain pixelated"
                        sizes="24px"
                        unoptimized
                      />
                    </div>
                    {poke.name}{" "}
                    <span className="font-semibold text-gray-500 dark:text-gray-400">
                      Lv.{poke.level}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
