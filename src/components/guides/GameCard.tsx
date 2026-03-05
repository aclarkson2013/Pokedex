"use client";

import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { TYPE_COLORS } from "@/lib/pokemon/type-colors";
import type { GameGuide } from "@/lib/pokemon/game-data";

interface GameCardProps {
  guide: GameGuide;
}

export function GameCard({ guide }: GameCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] dark:bg-gray-800"
    >
      {/* Color header */}
      <div className={cn("relative h-24 overflow-hidden", guide.color)}>
        {/* Pokéball watermark */}
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full border-[6px] border-white/20" />
        <div className="absolute -right-2 top-0 h-16 w-16 rounded-full border-[4px] border-white/10" />

        <div className="relative z-10 flex h-full flex-col justify-between p-4">
          <div>
            <h3 className="text-sm font-bold text-white leading-tight">
              {guide.title}
            </h3>
            <p className="mt-0.5 text-[10px] font-medium text-white/70">
              {guide.region} · {guide.platform} · {guide.releaseYear}
            </p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-3">
        {/* Starters — wrap so names don't get cropped */}
        <div className="flex flex-wrap gap-1 mb-2">
          {guide.starters.map((s) => (
            <span
              key={s.name}
              className={cn(
                "rounded-full px-2 py-0.5 text-[9px] font-medium capitalize text-white whitespace-nowrap",
                TYPE_COLORS[s.type]?.bg || "bg-gray-400"
              )}
            >
              {s.name}
            </span>
          ))}
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-3 text-[10px] text-gray-500 dark:text-gray-400">
          <span>{guide.gymLeaders.length} {guide.gymLeaders.length > 0 && guide.slug.includes("legends") ? "Nobles" : "Gyms"}</span>
          <span>·</span>
          <span>{guide.legendaries.length} Legendaries</span>
        </div>
      </div>
    </Link>
  );
}
