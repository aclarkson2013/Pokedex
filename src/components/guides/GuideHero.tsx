import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { TYPE_COLORS } from "@/lib/pokemon/type-colors";
import type { GameGuide } from "@/lib/pokemon/game-data";

interface GuideHeroProps {
  guide: GameGuide;
}

export function GuideHero({ guide }: GuideHeroProps) {
  return (
    <div className={cn("relative overflow-hidden", guide.color)}>
      {/* Pokeball watermarks */}
      <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[10px] border-white/10" />
      <div className="absolute right-10 bottom-0 h-32 w-32 rounded-full border-[8px] border-white/5" />

      <div className="relative z-10 px-4 pt-12 pb-6">
        {/* Back button */}
        <Link
          href="/guides"
          className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
        >
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Guides
        </Link>

        <h1 className="text-2xl font-bold text-white leading-tight">
          {guide.title}
        </h1>

        <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/80">
          <span className="rounded-full bg-white/20 px-2.5 py-0.5">{guide.region}</span>
          <span className="rounded-full bg-white/20 px-2.5 py-0.5">{guide.platform}</span>
          <span className="rounded-full bg-white/20 px-2.5 py-0.5">{guide.releaseYear}</span>
          <span className="rounded-full bg-white/20 px-2.5 py-0.5">Gen {guide.generation}</span>
        </div>

        <p className="mt-3 text-sm text-white/90 leading-relaxed">
          {guide.description}
        </p>

        {/* Starters */}
        <div className="mt-4">
          <p className="text-[10px] font-semibold text-white/60 uppercase tracking-wider mb-1.5">
            Starters
          </p>
          <div className="flex gap-1.5">
            {guide.starters.map((s) => (
              <span
                key={s.name}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-semibold capitalize text-white",
                  TYPE_COLORS[s.type]?.bg || "bg-gray-400"
                )}
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
