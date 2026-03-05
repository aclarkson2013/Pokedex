"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { GuideHero } from "./GuideHero";
import { GymLeadersTab } from "./GymLeadersTab";
import { EliteFourTab } from "./EliteFourTab";
import { DexTab } from "./DexTab";
import { WalkthroughTab } from "./WalkthroughTab";
import { cn } from "@/lib/utils/cn";
import { getWalkthrough, hasWalkthrough } from "@/lib/pokemon/walkthroughs";
import { getGameDex, hasGameDex } from "@/lib/pokemon/game-dex";
import type { GameGuide } from "@/lib/pokemon/game-data";

interface GuideDetailProps {
  guide: GameGuide;
}

export function GuideDetail({ guide }: GuideDetailProps) {
  const isTrials = guide.slug === "sun-moon" || guide.slug === "ultra-sun-ultra-moon";
  const isNobles = guide.slug === "legends-arceus";
  const gymLabel = isNobles ? "Nobles" : isTrials ? "Trials" : "Gyms";

  const walkthrough = getWalkthrough(guide.slug);
  const showWalkthrough = hasWalkthrough(guide.slug);

  const gameDex = getGameDex(guide.slug);
  const showDex = hasGameDex(guide.slug);

  // Build tab list — walkthrough first if available, then gyms, e4, dex
  const TAB_ITEMS = [
    ...(showWalkthrough ? [{ value: "walkthrough", label: "Walkthrough" }] : []),
    { value: "gyms", label: gymLabel },
    { value: "elite-four", label: "Elite Four" },
    ...(showDex ? [{ value: "dex", label: "Dex" }] : []),
  ];

  const defaultTab = showWalkthrough ? "walkthrough" : "gyms";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GuideHero guide={guide} />

      <Tabs.Root defaultValue={defaultTab} className="px-4 pt-4 relative z-10">
        <Tabs.List className="flex rounded-xl bg-white p-1 shadow-sm dark:bg-gray-800 mb-4 overflow-x-auto scrollbar-hide">
          {TAB_ITEMS.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "shrink-0 flex-1 rounded-lg py-2 text-[10px] sm:text-xs font-medium transition-colors",
                "data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-sm",
                "data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700",
                "dark:data-[state=inactive]:text-gray-400 dark:data-[state=inactive]:hover:text-gray-200"
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {showWalkthrough && walkthrough && (
          <Tabs.Content value="walkthrough" className="pb-24">
            <WalkthroughTab walkthrough={walkthrough} />
          </Tabs.Content>
        )}

        <Tabs.Content value="gyms" className="pb-24">
          <GymLeadersTab gymLeaders={guide.gymLeaders} isTrials={isTrials || isNobles} />
        </Tabs.Content>

        <Tabs.Content value="elite-four" className="pb-24">
          <EliteFourTab eliteFour={guide.eliteFour} champion={guide.champion} />
        </Tabs.Content>

        {showDex && gameDex && (
          <Tabs.Content value="dex" className="pb-24">
            <DexTab dex={gameDex} />
          </Tabs.Content>
        )}
      </Tabs.Root>
    </div>
  );
}
