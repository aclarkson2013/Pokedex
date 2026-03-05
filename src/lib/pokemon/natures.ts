/**
 * Static Pokemon nature data.
 *
 * 25 natures — each boosts one stat by 10% and lowers another by 10%.
 * Five natures are "neutral" (boost and lower the same stat, so no net change).
 */

export interface Nature {
  name: string;
  increasedStat: StatKey | null;
  decreasedStat: StatKey | null;
}

export type StatKey = "attack" | "defense" | "specialAttack" | "specialDefense" | "speed";

export const STAT_LABELS: Record<StatKey, string> = {
  attack: "Attack",
  defense: "Defense",
  specialAttack: "Sp. Atk",
  specialDefense: "Sp. Def",
  speed: "Speed",
};

export const NATURES: Nature[] = [
  // Neutral natures (no effect)
  { name: "Hardy", increasedStat: null, decreasedStat: null },
  { name: "Docile", increasedStat: null, decreasedStat: null },
  { name: "Serious", increasedStat: null, decreasedStat: null },
  { name: "Bashful", increasedStat: null, decreasedStat: null },
  { name: "Quirky", increasedStat: null, decreasedStat: null },

  // Attack-boosting
  { name: "Lonely", increasedStat: "attack", decreasedStat: "defense" },
  { name: "Brave", increasedStat: "attack", decreasedStat: "speed" },
  { name: "Adamant", increasedStat: "attack", decreasedStat: "specialAttack" },
  { name: "Naughty", increasedStat: "attack", decreasedStat: "specialDefense" },

  // Defense-boosting
  { name: "Bold", increasedStat: "defense", decreasedStat: "attack" },
  { name: "Relaxed", increasedStat: "defense", decreasedStat: "speed" },
  { name: "Impish", increasedStat: "defense", decreasedStat: "specialAttack" },
  { name: "Lax", increasedStat: "defense", decreasedStat: "specialDefense" },

  // Special Attack-boosting
  { name: "Modest", increasedStat: "specialAttack", decreasedStat: "attack" },
  { name: "Mild", increasedStat: "specialAttack", decreasedStat: "defense" },
  { name: "Quiet", increasedStat: "specialAttack", decreasedStat: "speed" },
  { name: "Rash", increasedStat: "specialAttack", decreasedStat: "specialDefense" },

  // Special Defense-boosting
  { name: "Calm", increasedStat: "specialDefense", decreasedStat: "attack" },
  { name: "Gentle", increasedStat: "specialDefense", decreasedStat: "defense" },
  { name: "Sassy", increasedStat: "specialDefense", decreasedStat: "speed" },
  { name: "Careful", increasedStat: "specialDefense", decreasedStat: "specialAttack" },

  // Speed-boosting
  { name: "Timid", increasedStat: "speed", decreasedStat: "attack" },
  { name: "Hasty", increasedStat: "speed", decreasedStat: "defense" },
  { name: "Jolly", increasedStat: "speed", decreasedStat: "specialAttack" },
  { name: "Naive", increasedStat: "speed", decreasedStat: "specialDefense" },
];

/** Look up a nature by name (case-insensitive). */
export function getNature(name: string): Nature | undefined {
  return NATURES.find((n) => n.name.toLowerCase() === name.toLowerCase());
}
