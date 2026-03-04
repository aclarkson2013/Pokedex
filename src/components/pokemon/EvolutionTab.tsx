"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPokemonName } from "@/lib/utils/format";
import { cn } from "@/lib/utils/cn";

interface EvolutionNode {
  id: number;
  name: string;
  sprite: string;
  trigger: string | null;
  triggerDetails: Record<string, string | number | boolean>;
  evolvesTo: EvolutionNode[];
}

interface EvolutionChain {
  id: number;
  chain: EvolutionNode;
}

interface EvolutionTabProps {
  evolutionChainId: number | null;
  currentPokemonId: number;
}

function formatTrigger(
  trigger: string | null,
  details: Record<string, string | number | boolean>
): string {
  if (!trigger) return "";

  const parts: string[] = [];

  switch (trigger) {
    case "level-up":
      if (details.minLevel) {
        parts.push(`Lv. ${details.minLevel}`);
      } else {
        parts.push("Level up");
      }
      break;
    case "trade":
      parts.push("Trade");
      break;
    case "use-item":
      parts.push("Use item");
      break;
    case "shed":
      parts.push("Shed");
      break;
    case "spin":
      parts.push("Spin");
      break;
    case "tower-of-darkness":
      parts.push("Tower of Darkness");
      break;
    case "tower-of-waters":
      parts.push("Tower of Waters");
      break;
    case "three-critical-hits":
      parts.push("3 Critical Hits");
      break;
    case "take-damage":
      parts.push("Take Damage");
      break;
    default:
      parts.push(
        trigger
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")
      );
  }

  // Add specific details
  if (details.item) {
    const itemName = String(details.item)
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    parts.push(itemName);
  }
  if (details.heldItem) {
    const itemName = String(details.heldItem)
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    parts.push(`Hold ${itemName}`);
  }
  if (details.minHappiness) parts.push(`Happiness ≥${details.minHappiness}`);
  if (details.timeOfDay) {
    parts.push(String(details.timeOfDay).charAt(0).toUpperCase() + String(details.timeOfDay).slice(1));
  }
  if (details.knownMove) {
    const moveName = String(details.knownMove)
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    parts.push(`Know ${moveName}`);
  }
  if (details.location) {
    const loc = String(details.location)
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    parts.push(`at ${loc}`);
  }
  if (details.tradeSpecies) {
    const species = String(details.tradeSpecies).charAt(0).toUpperCase() + String(details.tradeSpecies).slice(1);
    parts.push(`for ${species}`);
  }

  return parts.join(" · ");
}

function EvolutionNodeComponent({
  node,
  currentPokemonId,
  isFirst,
}: {
  node: EvolutionNode;
  currentPokemonId: number;
  isFirst: boolean;
}) {
  const isCurrent = node.id === currentPokemonId;
  const triggerText = formatTrigger(node.trigger, node.triggerDetails);

  return (
    <>
      {/* Arrow + trigger text (skip for first in chain) */}
      {!isFirst && (
        <div className="flex flex-col items-center justify-center px-1">
          <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          {triggerText && (
            <span className="mt-0.5 max-w-[80px] text-center text-[9px] leading-tight text-gray-500 dark:text-gray-400">
              {triggerText}
            </span>
          )}
        </div>
      )}

      {/* Pokemon node */}
      <Link
        href={`/pokemon/${node.id}`}
        className={cn(
          "flex shrink-0 flex-col items-center rounded-xl p-2 transition-colors",
          isCurrent
            ? "bg-blue-50 ring-2 ring-blue-300 dark:bg-blue-900/30 dark:ring-blue-600"
            : "hover:bg-gray-50 dark:hover:bg-gray-700"
        )}
      >
        <div className="relative h-16 w-16 sm:h-20 sm:w-20">
          {node.sprite ? (
            <Image
              src={node.sprite}
              alt={node.name}
              width={80}
              height={80}
              className="pixelated h-full w-full object-contain"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl text-gray-400">
              ?
            </div>
          )}
        </div>
        <span
          className={cn(
            "mt-1 text-xs font-medium",
            isCurrent
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300"
          )}
        >
          {formatPokemonName(node.name)}
        </span>
      </Link>
    </>
  );
}

function flattenChain(
  node: EvolutionNode,
  currentPokemonId: number
): React.ReactNode[] {
  const elements: React.ReactNode[] = [];

  // Render current node
  elements.push(
    <EvolutionNodeComponent
      key={`node-${node.id}`}
      node={node}
      currentPokemonId={currentPokemonId}
      isFirst={elements.length === 0}
    />
  );

  // Render each evolution branch
  for (const child of node.evolvesTo) {
    elements.push(
      ...flattenChainInner(child, currentPokemonId)
    );
  }

  return elements;
}

function flattenChainInner(
  node: EvolutionNode,
  currentPokemonId: number
): React.ReactNode[] {
  const elements: React.ReactNode[] = [];

  elements.push(
    <EvolutionNodeComponent
      key={`node-${node.id}`}
      node={node}
      currentPokemonId={currentPokemonId}
      isFirst={false}
    />
  );

  for (const child of node.evolvesTo) {
    elements.push(
      ...flattenChainInner(child, currentPokemonId)
    );
  }

  return elements;
}

export function EvolutionTab({ evolutionChainId, currentPokemonId }: EvolutionTabProps) {
  const [chain, setChain] = useState<EvolutionChain | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!evolutionChainId) {
      setLoading(false);
      return;
    }

    fetch("/data/evolution-chains.json")
      .then((res) => res.json())
      .then((chains: EvolutionChain[]) => {
        const found = chains.find((c) => c.id === evolutionChainId);
        setChain(found ?? null);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [evolutionChainId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500" />
      </div>
    );
  }

  if (!chain) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow-sm dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This Pokemon does not evolve.
        </p>
      </div>
    );
  }

  // Check if it's a single Pokemon (no evolutions)
  if (chain.chain.evolvesTo.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center shadow-sm dark:bg-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This Pokemon does not evolve.
        </p>
      </div>
    );
  }

  // Check for branching evolutions (like Eevee)
  const hasBranching = chain.chain.evolvesTo.length > 3;

  if (hasBranching) {
    // Branching layout (e.g., Eevee)
    return (
      <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <EvolutionNodeComponent
            node={chain.chain}
            currentPokemonId={currentPokemonId}
            isFirst={true}
          />
          <svg className="my-1 h-4 w-4 rotate-90 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
            {chain.chain.evolvesTo.map((evo) => (
              <div key={evo.id} className="flex flex-col items-center">
                <EvolutionNodeComponent
                  node={evo}
                  currentPokemonId={currentPokemonId}
                  isFirst={false}
                />
                {evo.evolvesTo.map((evo2) => (
                  <EvolutionNodeComponent
                    key={evo2.id}
                    node={evo2}
                    currentPokemonId={currentPokemonId}
                    isFirst={false}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Linear / simple branching layout
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-800">
      {chain.chain.evolvesTo.length <= 3 && chain.chain.evolvesTo.length > 1 ? (
        // Multiple branches but manageable (2-3)
        <div className="space-y-4">
          {chain.chain.evolvesTo.map((branch) => (
            <div
              key={branch.id}
              className="flex items-center overflow-x-auto scrollbar-hide"
            >
              <EvolutionNodeComponent
                node={chain.chain}
                currentPokemonId={currentPokemonId}
                isFirst={true}
              />
              {flattenChainInner(branch, currentPokemonId)}
            </div>
          ))}
        </div>
      ) : (
        // Simple linear chain
        <div className="flex items-center overflow-x-auto scrollbar-hide">
          {flattenChain(chain.chain, currentPokemonId)}
        </div>
      )}
    </div>
  );
}
