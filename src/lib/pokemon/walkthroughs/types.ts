/* ──────────────────────────────────────────────────────────
 *  Walkthrough data types.
 *  Each game can have a walkthrough split into numbered parts.
 *  Each part covers one or more in-game locations with
 *  encounter tables, trainer battles, items, and story guidance.
 * ────────────────────────────────────────────────────────── */

export interface WalkthroughEncounter {
  pokemon: string;
  pokemonId: number;
  /** Version tags, e.g. ["FR","LG"], ["R","S"], ["Sw","Sh"] */
  games: string[];
  /** How encountered: "Grass", "Surfing", "Old Rod", "Good Rod", "Super Rod", "Cave", "Rock Smash", "Gift" */
  method: string;
  /** Level range string, e.g. "3-5" or "25" */
  levels: string;
  /** Encounter rate string, e.g. "40%", "10%", "—" for gift/event */
  rate: string;
  /** Data source: "hand-authored" (default) or "api" (from PokeAPI/Veekun) */
  source?: "hand-authored" | "api";
}

export interface WalkthroughTrainer {
  class: string; // e.g. "Bug Catcher", "Lass", "Gym Leader"
  name: string;
  pokemon: { name: string; level: number; pokemonId: number }[];
  reward?: string; // e.g. "₽320"
}

export interface WalkthroughItem {
  name: string;
  /** Where to find it */
  location: string;
}

export interface WalkthroughLocation {
  name: string;
  /** Narrative guidance text — what to do here, story beats, etc. */
  description: string;
  encounters?: WalkthroughEncounter[];
  trainers?: WalkthroughTrainer[];
  items?: WalkthroughItem[];
}

export interface WalkthroughPart {
  part: number;
  title: string;
  summary: string;
  locations: WalkthroughLocation[];
  isPostGame?: boolean;
}

export interface GameWalkthrough {
  slug: string;
  gameLabel: string;
  versionTags: string[]; // e.g. ["FR","LG"]
  parts: WalkthroughPart[];
}
