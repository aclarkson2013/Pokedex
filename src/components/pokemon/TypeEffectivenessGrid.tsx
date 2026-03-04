"use client";

import { useEffect, useState } from "react";
import { TYPE_HEX, ALL_TYPES } from "@/lib/pokemon/type-colors";

interface TypeEffectivenessGridProps {
  types: string[];
}

interface TypeData {
  [attackingType: string]: {
    doubleDamageTo: string[];
    halfDamageTo: string[];
    noDamageTo: string[];
  };
}

/**
 * Calculate defensive type effectiveness multipliers.
 * For dual-typed Pokemon, multipliers stack multiplicatively.
 */
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

function MultiplierBadge({ type, multiplier }: { type: string; multiplier: number }) {
  const color = TYPE_HEX[type] ?? "#888";

  let bgOpacity: string;
  let textColor: string;
  let label: string;

  if (multiplier === 0) {
    bgOpacity = "20";
    textColor = "text-gray-400 dark:text-gray-500";
    label = "0×";
  } else if (multiplier === 0.25) {
    bgOpacity = "30";
    textColor = "text-green-700 dark:text-green-400";
    label = "¼×";
  } else if (multiplier === 0.5) {
    bgOpacity = "40";
    textColor = "text-green-600 dark:text-green-400";
    label = "½×";
  } else if (multiplier === 1) {
    bgOpacity = "25";
    textColor = "text-gray-500 dark:text-gray-400";
    label = "1×";
  } else if (multiplier === 2) {
    bgOpacity = "60";
    textColor = "text-red-600 dark:text-red-400";
    label = "2×";
  } else if (multiplier === 4) {
    bgOpacity = "80";
    textColor = "text-red-700 dark:text-red-300";
    label = "4×";
  } else {
    bgOpacity = "30";
    textColor = "text-gray-500";
    label = `${multiplier}×`;
  }

  return (
    <div
      className="flex flex-col items-center gap-0.5 rounded-lg p-1.5"
      style={{ backgroundColor: `${color}${bgOpacity}` }}
    >
      <span
        className="text-[9px] font-bold uppercase tracking-wider"
        style={{ color }}
      >
        {type.slice(0, 3)}
      </span>
      <span className={`text-xs font-bold ${textColor}`}>{label}</span>
    </div>
  );
}

export function TypeEffectivenessGrid({ types }: TypeEffectivenessGridProps) {
  const [typeData, setTypeData] = useState<TypeData | null>(null);

  useEffect(() => {
    fetch("/data/type-effectiveness.json")
      .then((res) => res.json())
      .then(setTypeData)
      .catch(console.error);
  }, []);

  if (!typeData) {
    return (
      <div className="h-24 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700" />
    );
  }

  const multipliers = calculateDefensiveMultipliers(types, typeData);

  // Group by effectiveness
  const superWeak = ALL_TYPES.filter((t) => multipliers[t] === 4);
  const weak = ALL_TYPES.filter((t) => multipliers[t] === 2);
  const resistant = ALL_TYPES.filter((t) => multipliers[t] === 0.5);
  const superResistant = ALL_TYPES.filter((t) => multipliers[t] === 0.25);
  const immune = ALL_TYPES.filter((t) => multipliers[t] === 0);

  return (
    <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-gray-800 space-y-3">
      {superWeak.length > 0 && (
        <div>
          <p className="text-xs font-medium text-red-600 dark:text-red-400 mb-1">
            Super Weak (4×)
          </p>
          <div className="flex flex-wrap gap-1">
            {superWeak.map((t) => (
              <MultiplierBadge key={t} type={t} multiplier={4} />
            ))}
          </div>
        </div>
      )}

      {weak.length > 0 && (
        <div>
          <p className="text-xs font-medium text-red-500 dark:text-red-400 mb-1">
            Weak (2×)
          </p>
          <div className="flex flex-wrap gap-1">
            {weak.map((t) => (
              <MultiplierBadge key={t} type={t} multiplier={2} />
            ))}
          </div>
        </div>
      )}

      {resistant.length > 0 && (
        <div>
          <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">
            Resistant (½×)
          </p>
          <div className="flex flex-wrap gap-1">
            {resistant.map((t) => (
              <MultiplierBadge key={t} type={t} multiplier={0.5} />
            ))}
          </div>
        </div>
      )}

      {superResistant.length > 0 && (
        <div>
          <p className="text-xs font-medium text-green-700 dark:text-green-400 mb-1">
            Super Resistant (¼×)
          </p>
          <div className="flex flex-wrap gap-1">
            {superResistant.map((t) => (
              <MultiplierBadge key={t} type={t} multiplier={0.25} />
            ))}
          </div>
        </div>
      )}

      {immune.length > 0 && (
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
            Immune (0×)
          </p>
          <div className="flex flex-wrap gap-1">
            {immune.map((t) => (
              <MultiplierBadge key={t} type={t} multiplier={0} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
