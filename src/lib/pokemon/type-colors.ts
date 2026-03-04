/**
 * Pokemon type colors used throughout the app for type badges,
 * backgrounds, and themed UI elements.
 */

export const TYPE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  normal:   { bg: "bg-[#A8A77A]", text: "text-white", border: "border-[#A8A77A]" },
  fire:     { bg: "bg-[#EE8130]", text: "text-white", border: "border-[#EE8130]" },
  water:    { bg: "bg-[#6390F0]", text: "text-white", border: "border-[#6390F0]" },
  electric: { bg: "bg-[#F7D02C]", text: "text-gray-900", border: "border-[#F7D02C]" },
  grass:    { bg: "bg-[#7AC74C]", text: "text-white", border: "border-[#7AC74C]" },
  ice:      { bg: "bg-[#96D9D6]", text: "text-gray-900", border: "border-[#96D9D6]" },
  fighting: { bg: "bg-[#C22E28]", text: "text-white", border: "border-[#C22E28]" },
  poison:   { bg: "bg-[#A33EA1]", text: "text-white", border: "border-[#A33EA1]" },
  ground:   { bg: "bg-[#E2BF65]", text: "text-gray-900", border: "border-[#E2BF65]" },
  flying:   { bg: "bg-[#A98FF3]", text: "text-white", border: "border-[#A98FF3]" },
  psychic:  { bg: "bg-[#F95587]", text: "text-white", border: "border-[#F95587]" },
  bug:      { bg: "bg-[#A6B91A]", text: "text-white", border: "border-[#A6B91A]" },
  rock:     { bg: "bg-[#B6A136]", text: "text-white", border: "border-[#B6A136]" },
  ghost:    { bg: "bg-[#735797]", text: "text-white", border: "border-[#735797]" },
  dragon:   { bg: "bg-[#6F35FC]", text: "text-white", border: "border-[#6F35FC]" },
  dark:     { bg: "bg-[#705746]", text: "text-white", border: "border-[#705746]" },
  steel:    { bg: "bg-[#B7B7CE]", text: "text-gray-900", border: "border-[#B7B7CE]" },
  fairy:    { bg: "bg-[#D685AD]", text: "text-white", border: "border-[#D685AD]" },
};

/** Get hex color for a Pokemon type (for CSS custom properties, SVG, etc.) */
export const TYPE_HEX: Record<string, string> = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

/** All Pokemon type names */
export const ALL_TYPES = Object.keys(TYPE_COLORS);
