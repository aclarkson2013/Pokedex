import { FIRERED_LEAFGREEN_WALKTHROUGH } from "./firered-leafgreen";
import type { GameWalkthrough } from "./types";

export type { GameWalkthrough, WalkthroughPart, WalkthroughEncounter, WalkthroughTrainer, WalkthroughItem, WalkthroughLocation } from "./types";

/** Map of game slug → walkthrough data (only for games that have walkthroughs) */
const WALKTHROUGHS: Record<string, GameWalkthrough> = {
  "firered-leafgreen": FIRERED_LEAFGREEN_WALKTHROUGH,
};

export function getWalkthrough(slug: string): GameWalkthrough | undefined {
  return WALKTHROUGHS[slug];
}

export function hasWalkthrough(slug: string): boolean {
  return slug in WALKTHROUGHS;
}
