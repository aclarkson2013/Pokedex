"use client";

import { TYPE_HEX } from "@/lib/pokemon/type-colors";

interface StatsTabProps {
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  primaryType: string;
}

const STAT_CONFIG = [
  { key: "hp" as const, label: "HP", short: "HP", max: 255 },
  { key: "attack" as const, label: "Attack", short: "ATK", max: 190 },
  { key: "defense" as const, label: "Defense", short: "DEF", max: 230 },
  { key: "specialAttack" as const, label: "Sp. Atk", short: "SPA", max: 194 },
  { key: "specialDefense" as const, label: "Sp. Def", short: "SPD", max: 230 },
  { key: "speed" as const, label: "Speed", short: "SPE", max: 200 },
];

function getStatColor(value: number): string {
  if (value < 30) return "#F44336";
  if (value < 60) return "#FF9800";
  if (value < 90) return "#FFC107";
  if (value < 120) return "#8BC34A";
  if (value < 150) return "#4CAF50";
  return "#2196F3";
}

export function StatsTab({ stats, primaryType }: StatsTabProps) {
  const total =
    stats.hp +
    stats.attack +
    stats.defense +
    stats.specialAttack +
    stats.specialDefense +
    stats.speed;

  const accentColor = TYPE_HEX[primaryType] ?? "#6390F0";

  return (
    <div className="space-y-4">
      {/* Base Stats */}
      <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
        <h3 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
          Base Stats
        </h3>
        <div className="space-y-3">
          {STAT_CONFIG.map(({ key, label, short, max }) => {
            const value = stats[key];
            const percentage = Math.min((value / max) * 100, 100);
            const barColor = getStatColor(value);

            return (
              <div key={key} className="flex items-center gap-3">
                <span className="w-10 text-right text-xs font-medium text-gray-500 dark:text-gray-400">
                  {short}
                </span>
                <span className="w-8 text-right text-sm font-bold text-gray-800 dark:text-gray-100">
                  {value}
                </span>
                <div className="flex-1">
                  <div className="h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${percentage}%`,
                        backgroundColor: barColor,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total */}
        <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-3 dark:border-gray-700">
          <span className="w-10 text-right text-xs font-medium text-gray-500 dark:text-gray-400">
            TOT
          </span>
          <span className="w-8 text-right text-sm font-bold" style={{ color: accentColor }}>
            {total}
          </span>
          <div className="flex-1">
            <div className="h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${Math.min((total / 720) * 100, 100)}%`,
                  backgroundColor: accentColor,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stat Radar / Summary */}
      <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
        <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
          Stat Summary
        </h3>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg bg-gray-50 p-2 dark:bg-gray-700">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
              {Math.max(stats.attack, stats.specialAttack)}
            </p>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              Best Offense
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-2 dark:bg-gray-700">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
              {Math.max(stats.defense, stats.specialDefense)}
            </p>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              Best Defense
            </p>
          </div>
          <div className="rounded-lg bg-gray-50 p-2 dark:bg-gray-700">
            <p className="text-lg font-bold" style={{ color: accentColor }}>
              {total}
            </p>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">
              BST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
