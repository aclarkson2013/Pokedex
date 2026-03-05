import { cn } from "@/lib/utils/cn";
import { TYPE_COLORS } from "@/lib/pokemon/type-colors";
import type { LegendaryPokemon } from "@/lib/pokemon/game-data";

interface LegendariesTabProps {
  legendaries: LegendaryPokemon[];
}

export function LegendariesTab({ legendaries }: LegendariesTabProps) {
  if (legendaries.length === 0) {
    return (
      <div className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        No legendary Pokémon data available.
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {legendaries.map((legend, i) => {
        const mainType = legend.type.split("/")[0];
        return (
          <div
            key={`${legend.name}-${i}`}
            className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800"
          >
            <div className="flex items-start gap-3 p-4">
              {/* Type badge */}
              <div
                className={cn(
                  "mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[9px] font-semibold capitalize text-white",
                  TYPE_COLORS[mainType]?.bg || "bg-gray-400"
                )}
              >
                {legend.type}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  {legend.name}
                </h3>
                <p className="mt-0.5 text-[11px] text-gray-500 dark:text-gray-400">
                  📍 {legend.location}
                </p>
                {legend.notes && (
                  <p className="mt-1 text-[10px] text-gray-400 italic dark:text-gray-500">
                    {legend.notes}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
