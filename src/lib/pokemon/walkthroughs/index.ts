import { BLACK_WHITE_WALKTHROUGH } from "./black-white";
import { BLACK2_WHITE2_WALKTHROUGH } from "./black2-white2";
import { BDSP_WALKTHROUGH } from "./brilliant-diamond-shining-pearl";
import { CRYSTAL_WALKTHROUGH } from "./crystal";
import { DIAMOND_PEARL_WALKTHROUGH } from "./diamond-pearl";
import { EMERALD_WALKTHROUGH } from "./emerald";
import { FIRERED_LEAFGREEN_WALKTHROUGH } from "./firered-leafgreen";
import { GOLD_SILVER_WALKTHROUGH } from "./gold-silver";
import { ORAS_WALKTHROUGH } from "./omega-ruby-alpha-sapphire";
import { HEARTGOLD_SOULSILVER_WALKTHROUGH } from "./heartgold-soulsilver";
import { PLATINUM_WALKTHROUGH } from "./platinum";
import { RED_BLUE_WALKTHROUGH } from "./red-blue";
import { RUBY_SAPPHIRE_WALKTHROUGH } from "./ruby-sapphire";
import { SCARLET_VIOLET_WALKTHROUGH } from "./scarlet-violet";
import { X_Y_WALKTHROUGH } from "./x-y";
import { SUN_MOON_WALKTHROUGH } from "./sun-moon";
import { SWORD_SHIELD_WALKTHROUGH } from "./sword-shield";
import { USUM_WALKTHROUGH } from "./ultra-sun-ultra-moon";
import { LEGENDS_ARCEUS_WALKTHROUGH } from "./legends-arceus";
import { LETS_GO_WALKTHROUGH } from "./lets-go";
import { YELLOW_WALKTHROUGH } from "./yellow";
import type { GameWalkthrough } from "./types";

export type { GameWalkthrough, WalkthroughPart, WalkthroughEncounter, WalkthroughTrainer, WalkthroughItem, WalkthroughLocation } from "./types";

/** Map of game slug → walkthrough data (only for games that have walkthroughs) */
const WALKTHROUGHS: Record<string, GameWalkthrough> = {
  "black-white": BLACK_WHITE_WALKTHROUGH,
  "black2-white2": BLACK2_WHITE2_WALKTHROUGH,
  "brilliant-diamond-shining-pearl": BDSP_WALKTHROUGH,
  "red-blue": RED_BLUE_WALKTHROUGH,
  crystal: CRYSTAL_WALKTHROUGH,
  "diamond-pearl": DIAMOND_PEARL_WALKTHROUGH,
  emerald: EMERALD_WALKTHROUGH,
  "firered-leafgreen": FIRERED_LEAFGREEN_WALKTHROUGH,
  "gold-silver": GOLD_SILVER_WALKTHROUGH,
  "heartgold-soulsilver": HEARTGOLD_SOULSILVER_WALKTHROUGH,
  "omega-ruby-alpha-sapphire": ORAS_WALKTHROUGH,
  platinum: PLATINUM_WALKTHROUGH,
  "ruby-sapphire": RUBY_SAPPHIRE_WALKTHROUGH,
  "scarlet-violet": SCARLET_VIOLET_WALKTHROUGH,
  "sun-moon": SUN_MOON_WALKTHROUGH,
  "sword-shield": SWORD_SHIELD_WALKTHROUGH,
  "ultra-sun-ultra-moon": USUM_WALKTHROUGH,
  "legends-arceus": LEGENDS_ARCEUS_WALKTHROUGH,
  "lets-go": LETS_GO_WALKTHROUGH,
  "x-y": X_Y_WALKTHROUGH,
  "yellow": YELLOW_WALKTHROUGH,
};

export function getWalkthrough(slug: string): GameWalkthrough | undefined {
  return WALKTHROUGHS[slug];
}

export function hasWalkthrough(slug: string): boolean {
  return slug in WALKTHROUGHS;
}
