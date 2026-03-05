"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { TYPE_COLORS } from "@/lib/pokemon/type-colors";
import { getSpriteUrl, loadNameToIdMap, pokemonNameToId } from "@/lib/pokemon/sprite-utils";
import type { GymLeader } from "@/lib/pokemon/game-data";

interface GymLeadersTabProps {
  gymLeaders: GymLeader[];
  isTrials?: boolean;
}

export function GymLeadersTab({ gymLeaders, isTrials }: GymLeadersTabProps) {
  const [nameMapLoaded, setNameMapLoaded] = useState(false);

  useEffect(() => {
    loadNameToIdMap().then(() => setNameMapLoaded(true));
  }, []);

  if (gymLeaders.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        This game uses a different progression system.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {gymLeaders.map((leader, i) => {
        const mainType = leader.type.split("/")[0];
        return (
          <div
            key={`${leader.name}-${i}`}
            className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3">
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
                  TYPE_COLORS[mainType]?.bg || "bg-gray-400"
                )}
              >
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {leader.name}
                  </h3>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[9px] font-semibold capitalize text-white",
                      TYPE_COLORS[mainType]?.bg || "bg-gray-400"
                    )}
                  >
                    {leader.type}
                  </span>
                </div>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  {leader.location} · {isTrials ? leader.badge : leader.badge}
                </p>
              </div>
            </div>

            {/* Pokemon with sprites */}
            <div className="border-t border-gray-100 px-4 py-2 dark:border-gray-700">
              <div className="flex flex-wrap gap-1.5">
                {leader.pokemon.map((poke, j) => {
                  const pokeId = nameMapLoaded ? pokemonNameToId(poke.name) : 0;
                  return (
                    <span
                      key={`${poke.name}-${j}`}
                      className="flex items-center gap-1 rounded-lg bg-gray-50 px-2 py-1 text-[10px] text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                    >
                      {pokeId > 0 && (
                        <span className="relative h-5 w-5 shrink-0 inline-block">
                          <Image
                            src={getSpriteUrl(pokeId)}
                            alt={poke.name}
                            fill
                            className="object-contain pixelated"
                            sizes="20px"
                            unoptimized
                          />
                        </span>
                      )}
                      {poke.name}{" "}
                      <span className="font-semibold text-gray-500 dark:text-gray-400">
                        Lv.{poke.level}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
