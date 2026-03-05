import { cn } from "@/lib/utils/cn";
import { TYPE_COLORS } from "@/lib/pokemon/type-colors";
import type { EliteFourMember } from "@/lib/pokemon/game-data";

interface EliteFourTabProps {
  eliteFour: EliteFourMember[];
  champion: EliteFourMember;
}

export function EliteFourTab({ eliteFour, champion }: EliteFourTabProps) {
  return (
    <div className="space-y-3">
      {/* Elite Four */}
      {eliteFour.length > 0 && (
        <>
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400">
            Elite Four
          </h3>
          {eliteFour.map((member, i) => (
            <MemberCard key={`e4-${member.name}-${i}`} member={member} index={i + 1} />
          ))}
        </>
      )}

      {/* Champion */}
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider dark:text-gray-400 pt-2">
        Champion
      </h3>
      <div className="overflow-hidden rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 shadow-sm ring-1 ring-yellow-200 dark:from-yellow-900/20 dark:to-amber-900/20 dark:ring-yellow-700/40">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-yellow-900">
            👑
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                {champion.name}
              </h3>
              <span className="rounded-full bg-yellow-400/30 px-2 py-0.5 text-[9px] font-semibold capitalize text-yellow-800 dark:text-yellow-300">
                {champion.type}
              </span>
            </div>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">Champion</p>
          </div>
        </div>
        <div className="border-t border-yellow-200/60 px-4 py-2 dark:border-yellow-700/30">
          <div className="flex flex-wrap gap-1.5">
            {champion.pokemon.map((poke, j) => (
              <span
                key={`champ-${poke.name}-${j}`}
                className="rounded-lg bg-yellow-100/60 px-2 py-1 text-[10px] text-gray-700 dark:bg-yellow-800/30 dark:text-gray-300"
              >
                {poke.name}{" "}
                <span className="font-semibold text-gray-500 dark:text-gray-400">
                  Lv.{poke.level}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Helper ────────────────────────────────────────────── */
function MemberCard({
  member,
  index,
}: {
  member: EliteFourMember;
  index: number;
}) {
  const mainType = member.type.split("/")[0];
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800">
      <div className="flex items-center gap-3 px-4 py-3">
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
            TYPE_COLORS[mainType]?.bg || "bg-gray-400"
          )}
        >
          {index}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[9px] font-semibold capitalize text-white",
                TYPE_COLORS[mainType]?.bg || "bg-gray-400"
              )}
            >
              {member.type}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 px-4 py-2 dark:border-gray-700">
        <div className="flex flex-wrap gap-1.5">
          {member.pokemon.map((poke, j) => (
            <span
              key={`${poke.name}-${j}`}
              className="rounded-lg bg-gray-50 px-2 py-1 text-[10px] text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {poke.name}{" "}
              <span className="font-semibold text-gray-500 dark:text-gray-400">
                Lv.{poke.level}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
