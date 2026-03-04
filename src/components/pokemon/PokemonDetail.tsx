"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { PokemonHero } from "./PokemonHero";
import { AboutTab } from "./AboutTab";
import { StatsTab } from "./StatsTab";
import { EvolutionTab } from "./EvolutionTab";
import { MovesTab } from "./MovesTab";
import { cn } from "@/lib/utils/cn";

interface PokemonDetailProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
    officialArtwork: string;
    height: number;
    weight: number;
    baseExperience: number;
    abilities: { name: string; isHidden: boolean }[];
    stats: {
      hp: number;
      attack: number;
      defense: number;
      specialAttack: number;
      specialDefense: number;
      speed: number;
    };
    moves: {
      name: string;
      learnMethod: string;
      levelLearnedAt: number;
      versionGroup: string;
    }[];
    species: {
      genus: string;
      flavorText: string;
      generation: number;
      habitat: string | null;
      growthRate: string;
      genderRate: number;
      captureRate: number;
      baseHappiness: number;
      eggGroups: string[];
      hatchCounter: number;
      evolutionChainId: number | null;
    };
  };
  totalPokemon: number;
}

const TAB_ITEMS = [
  { value: "about", label: "About" },
  { value: "stats", label: "Stats" },
  { value: "evolution", label: "Evolution" },
  { value: "moves", label: "Moves" },
];

export function PokemonDetail({ pokemon, totalPokemon }: PokemonDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <PokemonHero
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types}
        officialArtwork={pokemon.officialArtwork}
        genus={pokemon.species.genus}
        totalPokemon={totalPokemon}
      />

      {/* Tabbed content */}
      <Tabs.Root defaultValue="about" className="px-4 -mt-2 relative z-10">
        <Tabs.List className="flex rounded-xl bg-white p-1 shadow-sm dark:bg-gray-800 mb-4">
          {TAB_ITEMS.map((tab) => (
            <Tabs.Trigger
              key={tab.value}
              value={tab.value}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-medium transition-colors",
                "data-[state=active]:bg-red-500 data-[state=active]:text-white data-[state=active]:shadow-sm",
                "data-[state=inactive]:text-gray-500 data-[state=inactive]:hover:text-gray-700",
                "dark:data-[state=inactive]:text-gray-400 dark:data-[state=inactive]:hover:text-gray-200"
              )}
            >
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="about" className="pb-24">
          <AboutTab
            flavorText={pokemon.species.flavorText}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            genderRate={pokemon.species.genderRate}
            captureRate={pokemon.species.captureRate}
            baseHappiness={pokemon.species.baseHappiness}
            growthRate={pokemon.species.growthRate}
            eggGroups={pokemon.species.eggGroups}
            hatchCounter={pokemon.species.hatchCounter}
            habitat={pokemon.species.habitat}
            types={pokemon.types}
          />
        </Tabs.Content>

        <Tabs.Content value="stats" className="pb-24">
          <StatsTab stats={pokemon.stats} primaryType={pokemon.types[0]} />
        </Tabs.Content>

        <Tabs.Content value="evolution" className="pb-24">
          <EvolutionTab
            evolutionChainId={pokemon.species.evolutionChainId}
            currentPokemonId={pokemon.id}
          />
        </Tabs.Content>

        <Tabs.Content value="moves" className="pb-24">
          <MovesTab moves={pokemon.moves} />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
