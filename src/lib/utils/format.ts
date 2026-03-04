/**
 * Formatting utilities for Pokemon data display.
 */

/** Format Pokemon name: "mr-mime" → "Mr. Mime", "tapu-koko" → "Tapu Koko" */
export function formatPokemonName(name: string): string {
  // Handle special cases
  const specialNames: Record<string, string> = {
    "mr-mime": "Mr. Mime",
    "mr-rime": "Mr. Rime",
    "mime-jr": "Mime Jr.",
    "type-null": "Type: Null",
    "ho-oh": "Ho-Oh",
    "porygon-z": "Porygon-Z",
    "jangmo-o": "Jangmo-o",
    "hakamo-o": "Hakamo-o",
    "kommo-o": "Kommo-o",
    "tapu-koko": "Tapu Koko",
    "tapu-lele": "Tapu Lele",
    "tapu-bulu": "Tapu Bulu",
    "tapu-fini": "Tapu Fini",
    "nidoran-f": "Nidoran♀",
    "nidoran-m": "Nidoran♂",
    "flabebe": "Flabébé",
    "farfetchd": "Farfetch'd",
    "sirfetchd": "Sirfetch'd",
    "chi-yu": "Chi-Yu",
    "chien-pao": "Chien-Pao",
    "ting-lu": "Ting-Lu",
    "wo-chien": "Wo-Chien",
    "great-tusk": "Great Tusk",
    "scream-tail": "Scream Tail",
    "brute-bonnet": "Brute Bonnet",
    "flutter-mane": "Flutter Mane",
    "slither-wing": "Slither Wing",
    "sandy-shocks": "Sandy Shocks",
    "iron-treads": "Iron Treads",
    "iron-bundle": "Iron Bundle",
    "iron-hands": "Iron Hands",
    "iron-jugulis": "Iron Jugulis",
    "iron-moth": "Iron Moth",
    "iron-thorns": "Iron Thorns",
    "iron-valiant": "Iron Valiant",
    "iron-leaves": "Iron Leaves",
    "iron-boulder": "Iron Boulder",
    "iron-crown": "Iron Crown",
    "roaring-moon": "Roaring Moon",
    "walking-wake": "Walking Wake",
    "gouging-fire": "Gouging Fire",
    "raging-bolt": "Raging Bolt",
  };

  if (specialNames[name]) return specialNames[name];

  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Format Pokemon ID: 1 → "#001", 25 → "#025", 1025 → "#1025" */
export function formatPokemonId(id: number): string {
  return `#${id.toString().padStart(3, "0")}`;
}

/** Format height from decimetres to feet/inches and meters */
export function formatHeight(decimetres: number): string {
  const meters = decimetres / 10;
  const totalInches = meters * 39.3701;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}'${inches.toString().padStart(2, "0")}" (${meters.toFixed(1)} m)`;
}

/** Format weight from hectograms to lbs and kg */
export function formatWeight(hectograms: number): string {
  const kg = hectograms / 10;
  const lbs = kg * 2.20462;
  return `${lbs.toFixed(1)} lbs (${kg.toFixed(1)} kg)`;
}

/** Format ability name: "lightning-rod" → "Lightning Rod" */
export function formatAbilityName(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Format move name: "thunder-punch" → "Thunder Punch" */
export function formatMoveName(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

/** Format stat name for display */
export function formatStatName(stat: string): string {
  const names: Record<string, string> = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    specialAttack: "Sp. Atk",
    specialDefense: "Sp. Def",
    speed: "Speed",
  };
  return names[stat] ?? stat;
}
