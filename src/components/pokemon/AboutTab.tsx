"use client";

import {
  formatHeight,
  formatWeight,
  formatAbilityName,
} from "@/lib/utils/format";
import { TypeEffectivenessGrid } from "./TypeEffectivenessGrid";

interface AboutTabProps {
  flavorText: string;
  height: number;
  weight: number;
  abilities: { name: string; isHidden: boolean }[];
  genderRate: number;
  captureRate: number;
  baseHappiness: number;
  growthRate: string;
  eggGroups: string[];
  hatchCounter: number;
  habitat: string | null;
  types: string[];
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex py-2.5 border-b border-gray-100 dark:border-gray-700 last:border-0">
      <span className="w-32 shrink-0 text-sm text-gray-500 dark:text-gray-400">
        {label}
      </span>
      <span className="text-sm text-gray-800 dark:text-gray-100">{value}</span>
    </div>
  );
}

function formatGender(rate: number): React.ReactNode {
  if (rate === -1) return "Genderless";
  const femalePercent = (rate / 8) * 100;
  const malePercent = 100 - femalePercent;
  return (
    <span className="flex items-center gap-2">
      <span className="text-blue-500">♂ {malePercent}%</span>
      <span className="text-pink-500">♀ {femalePercent}%</span>
    </span>
  );
}

function formatGrowthRate(rate: string): string {
  return rate
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function formatEggGroup(group: string): string {
  return group
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function AboutTab({
  flavorText,
  height,
  weight,
  abilities,
  genderRate,
  captureRate,
  baseHappiness,
  growthRate,
  eggGroups,
  hatchCounter,
  habitat,
  types,
}: AboutTabProps) {
  return (
    <div className="space-y-6">
      {/* Flavor text */}
      {flavorText && (
        <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 italic">
          &ldquo;{flavorText}&rdquo;
        </p>
      )}

      {/* Physical info */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          Pokédex Data
        </h3>
        <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-gray-800">
          <InfoRow label="Height" value={formatHeight(height)} />
          <InfoRow label="Weight" value={formatWeight(weight)} />
          <InfoRow
            label="Abilities"
            value={
              <div className="flex flex-wrap gap-1.5">
                {abilities.map((a) => (
                  <span
                    key={a.name}
                    className={`inline-block rounded-md px-2 py-0.5 text-xs ${
                      a.isHidden
                        ? "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                        : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    }`}
                  >
                    {formatAbilityName(a.name)}
                    {a.isHidden && " (Hidden)"}
                  </span>
                ))}
              </div>
            }
          />
        </div>
      </div>

      {/* Breeding info */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          Training & Breeding
        </h3>
        <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-gray-800">
          <InfoRow label="Gender" value={formatGender(genderRate)} />
          <InfoRow label="Catch Rate" value={captureRate} />
          <InfoRow label="Base Happiness" value={baseHappiness} />
          <InfoRow label="Growth Rate" value={formatGrowthRate(growthRate)} />
          <InfoRow
            label="Egg Groups"
            value={eggGroups.map(formatEggGroup).join(", ") || "—"}
          />
          <InfoRow
            label="Egg Cycles"
            value={hatchCounter > 0 ? `${hatchCounter} (${hatchCounter * 257} steps)` : "—"}
          />
          {habitat && (
            <InfoRow
              label="Habitat"
              value={habitat.charAt(0).toUpperCase() + habitat.slice(1)}
            />
          )}
        </div>
      </div>

      {/* Type Effectiveness */}
      <div>
        <h3 className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          Type Effectiveness
        </h3>
        <TypeEffectivenessGrid types={types} />
      </div>
    </div>
  );
}
