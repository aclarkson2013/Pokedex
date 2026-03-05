"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { GuideHero } from "./GuideHero";
import { GymLeadersTab } from "./GymLeadersTab";
import { EliteFourTab } from "./EliteFourTab";
import { LegendariesTab } from "./LegendariesTab";
import { TipsTab } from "./TipsTab";
import { cn } from "@/lib/utils/cn";
import type { GameGuide } from "@/lib/pokemon/game-data";

interface GuideDetailProps {
  guide: GameGuide;
}

export function GuideDetail({ guide }: GuideDetailProps) {
  const isTrials = guide.slug === "sun-moon" || guide.slug === "ultra-sun-ultra-moon";
  const isNobles = guide.slug === "legends-arceus";
  const gymLabel = isNobles ? "Nobles" : isTrials ? "Trials" : "Gyms";

  const TAB_ITEMS = [
    { value: "gyms", label: gymLabel },
    { value: "elite-four", label: "Elite Four" },
    { value: "legendaries", label: "Legendaries" },
    { value: "tips", label: "Tips" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <GuideHero guide={guide} />

      <Tabs.Root defaultValue="gyms" className="px-4 pt-4 relative z-10">
        <Tabs.List className="flex rounded-xl bg-white p-1 shadow-sm dark:bg-gray-800 mb-4">
          {TAB_ITEMS.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "flex-1 rounded-lg py-2 text-[10px] sm:text-xs font-medium transition-colors",
                "data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-sm",
                "data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700",
                "dark:data-[state=inactive]:text-gray-400 dark:data-[state=inactive]:hover:text-gray-200"
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="gyms" className="pb-24">
          <GymLeadersTab gymLeaders={guide.gymLeaders} isTrials={isTrials || isNobles} />
        </Tabs.Content>

        <Tabs.Content value="elite-four" className="pb-24">
          <EliteFourTab eliteFour={guide.eliteFour} champion={guide.champion} />
        </Tabs.Content>

        <Tabs.Content value="legendaries" className="pb-24">
          <LegendariesTab legendaries={guide.legendaries} />
        </Tabs.Content>

        <Tabs.Content value="tips" className="pb-24">
          <TipsTab tips={guide.tips} features={guide.features} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
