"use client";

import { GAME_GUIDES, GENERATION_LABELS } from "@/lib/pokemon/game-data";
import { GameCard } from "./GameCard";

export function GuidesHome() {
  // Group guides by generation
  const generations = Array.from(
    new Set(GAME_GUIDES.map((g) => g.generation))
  ).sort((a, b) => a - b);

  return (
    <main className="min-h-screen p-4 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Game Guides
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Walkthroughs for every mainline Pokémon game — gym leaders, elite four,
          legendaries, and tips.
        </p>
      </div>

      {generations.map((gen) => {
        const guides = GAME_GUIDES.filter((g) => g.generation === gen);
        return (
          <section key={gen} className="mb-6">
            <h2 className="mb-3 text-sm font-bold text-gray-700 uppercase tracking-wider dark:text-gray-300">
              {GENERATION_LABELS[gen] || `Generation ${gen}`}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {guides.map((guide) => (
                <GameCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
