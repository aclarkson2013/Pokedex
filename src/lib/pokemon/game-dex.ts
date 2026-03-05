/**
 * Per-game Pokédex data — which Pokémon can be caught in each game
 * and which version(s) they appear in.
 *
 * Each entry: { pokemonId, name, versionTags[] }
 * versionTags uses the same tags as walkthrough data (e.g. ["FR","LG"], ["R","S"])
 */

export interface GameDexEntry {
  pokemonId: number;
  name: string;
  /** Which version(s) of the paired games this Pokémon appears in */
  versions: string[];
  /** How/where to obtain */
  method?: string;
}

export interface GameDex {
  slug: string;
  versionTags: string[];
  pokemon: GameDexEntry[];
}

/* ── Helper ─────────────────────────────────────── */
const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  FireRed & LeafGreen — Kanto Pokédex (151 + extras)
 * ══════════════════════════════════════════════════ */
export const FIRERED_LEAFGREEN_DEX: GameDex = {
  slug: "firered-leafgreen",
  versionTags: ["FR", "LG"],
  pokemon: [
    // Starters & evolutions
    d(1, "Bulbasaur", ["FR", "LG"], "Starter from Prof. Oak"),
    d(2, "Ivysaur", ["FR", "LG"], "Evolve Bulbasaur"),
    d(3, "Venusaur", ["FR", "LG"], "Evolve Ivysaur"),
    d(4, "Charmander", ["FR", "LG"], "Starter from Prof. Oak"),
    d(5, "Charmeleon", ["FR", "LG"], "Evolve Charmander"),
    d(6, "Charizard", ["FR", "LG"], "Evolve Charmeleon"),
    d(7, "Squirtle", ["FR", "LG"], "Starter from Prof. Oak"),
    d(8, "Wartortle", ["FR", "LG"], "Evolve Squirtle"),
    d(9, "Blastoise", ["FR", "LG"], "Evolve Wartortle"),
    // Route 1-2 Pokemon
    d(10, "Caterpie", ["FR", "LG"], "Routes 2, 24, 25, Viridian Forest"),
    d(11, "Metapod", ["FR", "LG"], "Routes 24, 25, Viridian Forest"),
    d(12, "Butterfree", ["FR", "LG"], "Evolve Metapod"),
    d(13, "Weedle", ["FR", "LG"], "Routes 2, 24, 25, Viridian Forest"),
    d(14, "Kakuna", ["FR", "LG"], "Routes 24, 25, Viridian Forest"),
    d(15, "Beedrill", ["FR", "LG"], "Evolve Kakuna"),
    d(16, "Pidgey", ["FR", "LG"], "Routes 1, 2, 3, 5-8, 12-15, 24, 25"),
    d(17, "Pidgeotto", ["FR", "LG"], "Routes 13-15, evolve Pidgey"),
    d(18, "Pidgeot", ["FR", "LG"], "Evolve Pidgeotto"),
    d(19, "Rattata", ["FR", "LG"], "Routes 1, 2, 4, 9, 16, 22"),
    d(20, "Raticate", ["FR", "LG"], "Routes 16-18, evolve Rattata"),
    d(21, "Spearow", ["FR", "LG"], "Routes 3, 4, 9, 11, 16, 18, 22, 23"),
    d(22, "Fearow", ["FR", "LG"], "Routes 17, 18, 23, evolve Spearow"),
    d(23, "Ekans", ["FR"], "Routes 4, 8, 9, 10, 11, 23"),
    d(24, "Arbok", ["FR"], "Route 23, evolve Ekans"),
    d(25, "Pikachu", ["FR", "LG"], "Viridian Forest, Power Plant"),
    d(26, "Raichu", ["FR", "LG"], "Evolve Pikachu (Thunder Stone)"),
    d(27, "Sandshrew", ["LG"], "Routes 4, 8, 9, 10, 11, 23"),
    d(28, "Sandslash", ["LG"], "Route 23, evolve Sandshrew"),
    d(29, "Nidoran♀", ["FR", "LG"], "Routes 3, Safari Zone"),
    d(30, "Nidorina", ["FR", "LG"], "Safari Zone, evolve Nidoran♀"),
    d(31, "Nidoqueen", ["FR", "LG"], "Evolve Nidorina (Moon Stone)"),
    d(32, "Nidoran♂", ["FR", "LG"], "Routes 3, Safari Zone"),
    d(33, "Nidorino", ["FR", "LG"], "Safari Zone, evolve Nidoran♂"),
    d(34, "Nidoking", ["FR", "LG"], "Evolve Nidorino (Moon Stone)"),
    d(35, "Clefairy", ["FR", "LG"], "Mt. Moon"),
    d(36, "Clefable", ["FR", "LG"], "Evolve Clefairy (Moon Stone)"),
    d(37, "Vulpix", ["LG"], "Routes 7, 8, Pokémon Mansion"),
    d(38, "Ninetales", ["LG"], "Evolve Vulpix (Fire Stone)"),
    d(39, "Jigglypuff", ["FR", "LG"], "Route 3"),
    d(40, "Wigglytuff", ["FR", "LG"], "Evolve Jigglypuff (Moon Stone)"),
    d(41, "Zubat", ["FR", "LG"], "Mt. Moon, Rock Tunnel, Seafoam Islands"),
    d(42, "Golbat", ["FR", "LG"], "Victory Road, Seafoam Islands"),
    d(43, "Oddish", ["FR"], "Routes 5, 6, 7, 12, 13, 14, 15, 24, 25"),
    d(44, "Gloom", ["FR"], "Routes 12-15, evolve Oddish"),
    d(45, "Vileplume", ["FR"], "Evolve Gloom (Leaf Stone)"),
    d(46, "Paras", ["FR", "LG"], "Mt. Moon, Safari Zone"),
    d(47, "Parasect", ["FR", "LG"], "Safari Zone, evolve Paras"),
    d(48, "Venonat", ["FR", "LG"], "Routes 12-15, Safari Zone"),
    d(49, "Venomoth", ["FR", "LG"], "Safari Zone, evolve Venonat"),
    d(50, "Diglett", ["FR", "LG"], "Diglett's Cave"),
    d(51, "Dugtrio", ["FR", "LG"], "Diglett's Cave"),
    d(52, "Meowth", ["LG"], "Routes 5, 6, 7, 8"),
    d(53, "Persian", ["LG"], "Evolve Meowth"),
    d(54, "Psyduck", ["FR", "LG"], "Safari Zone, Surfing"),
    d(55, "Golduck", ["FR", "LG"], "Safari Zone, evolve Psyduck"),
    d(56, "Mankey", ["FR"], "Routes 3, 4"),
    d(57, "Primeape", ["FR"], "Evolve Mankey"),
    d(58, "Growlithe", ["FR"], "Routes 7, 8, Pokémon Mansion"),
    d(59, "Arcanine", ["FR"], "Evolve Growlithe (Fire Stone)"),
    d(60, "Poliwag", ["FR", "LG"], "Routes 22, 25, Viridian City (Fishing)"),
    d(61, "Poliwhirl", ["FR", "LG"], "Evolve Poliwag"),
    d(62, "Poliwrath", ["FR", "LG"], "Evolve Poliwhirl (Water Stone)"),
    d(63, "Abra", ["FR", "LG"], "Routes 24, 25"),
    d(64, "Kadabra", ["FR", "LG"], "Evolve Abra"),
    d(65, "Alakazam", ["FR", "LG"], "Trade evolve Kadabra"),
    d(66, "Machop", ["FR", "LG"], "Rock Tunnel, Victory Road"),
    d(67, "Machoke", ["FR", "LG"], "Victory Road, evolve Machop"),
    d(68, "Machamp", ["FR", "LG"], "Trade evolve Machoke"),
    d(69, "Bellsprout", ["LG"], "Routes 5, 6, 7, 12, 13, 14, 15, 24, 25"),
    d(70, "Weepinbell", ["LG"], "Routes 12-15, evolve Bellsprout"),
    d(71, "Victreebel", ["LG"], "Evolve Weepinbell (Leaf Stone)"),
    d(72, "Tentacool", ["FR", "LG"], "Surfing (many routes)"),
    d(73, "Tentacruel", ["FR", "LG"], "Surfing, evolve Tentacool"),
    d(74, "Geodude", ["FR", "LG"], "Mt. Moon, Rock Tunnel, Victory Road"),
    d(75, "Graveler", ["FR", "LG"], "Victory Road, evolve Geodude"),
    d(76, "Golem", ["FR", "LG"], "Trade evolve Graveler"),
    d(77, "Ponyta", ["FR", "LG"], "Pokémon Mansion"),
    d(78, "Rapidash", ["FR", "LG"], "Evolve Ponyta"),
    d(79, "Slowpoke", ["FR", "LG"], "Safari Zone, Fishing"),
    d(80, "Slowbro", ["FR", "LG"], "Evolve Slowpoke"),
    d(81, "Magnemite", ["FR", "LG"], "Power Plant"),
    d(82, "Magneton", ["FR", "LG"], "Power Plant, evolve Magnemite"),
    d(83, "Farfetch'd", ["FR", "LG"], "Trade on Route 12"),
    d(84, "Doduo", ["FR", "LG"], "Routes 16, 17, 18, Safari Zone"),
    d(85, "Dodrio", ["FR", "LG"], "Evolve Doduo"),
    d(86, "Seel", ["FR", "LG"], "Seafoam Islands"),
    d(87, "Dewgong", ["FR", "LG"], "Seafoam Islands, evolve Seel"),
    d(88, "Grimer", ["FR", "LG"], "Pokémon Mansion"),
    d(89, "Muk", ["FR", "LG"], "Pokémon Mansion, evolve Grimer"),
    d(90, "Shellder", ["FR", "LG"], "Fishing (various)"),
    d(91, "Cloyster", ["FR", "LG"], "Evolve Shellder (Water Stone)"),
    d(92, "Gastly", ["FR", "LG"], "Pokémon Tower"),
    d(93, "Haunter", ["FR", "LG"], "Pokémon Tower, evolve Gastly"),
    d(94, "Gengar", ["FR", "LG"], "Trade evolve Haunter"),
    d(95, "Onix", ["FR", "LG"], "Rock Tunnel, Victory Road"),
    d(96, "Drowzee", ["FR", "LG"], "Routes 11"),
    d(97, "Hypno", ["FR", "LG"], "Berry Forest, evolve Drowzee"),
    d(98, "Krabby", ["FR", "LG"], "Fishing (various routes)"),
    d(99, "Kingler", ["FR", "LG"], "Evolve Krabby"),
    d(100, "Voltorb", ["FR", "LG"], "Power Plant, Route 10"),
    d(101, "Electrode", ["FR", "LG"], "Power Plant, evolve Voltorb"),
    d(102, "Exeggcute", ["FR", "LG"], "Safari Zone"),
    d(103, "Exeggutor", ["FR", "LG"], "Evolve Exeggcute (Leaf Stone)"),
    d(104, "Cubone", ["FR", "LG"], "Pokémon Tower"),
    d(105, "Marowak", ["FR", "LG"], "Victory Road, evolve Cubone"),
    d(106, "Hitmonlee", ["FR", "LG"], "Fighting Dojo (choice)"),
    d(107, "Hitmonchan", ["FR", "LG"], "Fighting Dojo (choice)"),
    d(108, "Lickitung", ["FR", "LG"], "Safari Zone"),
    d(109, "Koffing", ["FR", "LG"], "Pokémon Mansion"),
    d(110, "Weezing", ["FR", "LG"], "Pokémon Mansion, evolve Koffing"),
    d(111, "Rhyhorn", ["FR", "LG"], "Safari Zone"),
    d(112, "Rhydon", ["FR", "LG"], "Evolve Rhyhorn"),
    d(113, "Chansey", ["FR", "LG"], "Safari Zone (rare)"),
    d(114, "Tangela", ["FR", "LG"], "Route 21 (Surfing south of Pallet)"),
    d(115, "Kangaskhan", ["FR", "LG"], "Safari Zone (rare)"),
    d(116, "Horsea", ["FR", "LG"], "Fishing (Seafoam Islands, various)"),
    d(117, "Seadra", ["FR", "LG"], "Evolve Horsea"),
    d(118, "Goldeen", ["FR", "LG"], "Fishing (various)"),
    d(119, "Seaking", ["FR", "LG"], "Fishing, evolve Goldeen"),
    d(120, "Staryu", ["FR", "LG"], "Fishing (various)"),
    d(121, "Starmie", ["FR", "LG"], "Evolve Staryu (Water Stone)"),
    d(122, "Mr. Mime", ["FR", "LG"], "Trade on Route 2"),
    d(123, "Scyther", ["FR"], "Safari Zone"),
    d(124, "Jynx", ["FR", "LG"], "Trade in Cerulean City"),
    d(125, "Electabuzz", ["FR"], "Power Plant"),
    d(126, "Magmar", ["LG"], "Pokémon Mansion"),
    d(127, "Pinsir", ["LG"], "Safari Zone"),
    d(128, "Tauros", ["FR", "LG"], "Safari Zone"),
    d(129, "Magikarp", ["FR", "LG"], "Fishing (everywhere), gift on Route 4"),
    d(130, "Gyarados", ["FR", "LG"], "Evolve Magikarp"),
    d(131, "Lapras", ["FR", "LG"], "Gift in Silph Co."),
    d(132, "Ditto", ["FR", "LG"], "Routes 13, 14, 15, Pokémon Mansion"),
    d(133, "Eevee", ["FR", "LG"], "Gift in Celadon Mansion"),
    d(134, "Vaporeon", ["FR", "LG"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["FR", "LG"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["FR", "LG"], "Evolve Eevee (Fire Stone)"),
    d(137, "Porygon", ["FR", "LG"], "Celadon Game Corner prize"),
    d(138, "Omanyte", ["FR", "LG"], "Revive Helix Fossil"),
    d(139, "Omastar", ["FR", "LG"], "Evolve Omanyte"),
    d(140, "Kabuto", ["FR", "LG"], "Revive Dome Fossil"),
    d(141, "Kabutops", ["FR", "LG"], "Evolve Kabuto"),
    d(142, "Aerodactyl", ["FR", "LG"], "Revive Old Amber"),
    d(143, "Snorlax", ["FR", "LG"], "Route 12 or Route 16 (Poké Flute)"),
    d(144, "Articuno", ["FR", "LG"], "Seafoam Islands"),
    d(145, "Zapdos", ["FR", "LG"], "Power Plant"),
    d(146, "Moltres", ["FR", "LG"], "Mt. Ember (One Island)"),
    d(147, "Dratini", ["FR", "LG"], "Safari Zone (Fishing)"),
    d(148, "Dragonair", ["FR", "LG"], "Safari Zone (Super Rod), evolve Dratini"),
    d(149, "Dragonite", ["FR", "LG"], "Evolve Dragonair"),
    d(150, "Mewtwo", ["FR", "LG"], "Cerulean Cave (post-game)"),
  ],
};

/* ── External dex data ─────────────────────────── */
import { BLACK_WHITE_DEX } from "./dex-data/black-white";
import { BLACK2_WHITE2_DEX } from "./dex-data/black2-white2";
import { BDSP_DEX } from "./dex-data/brilliant-diamond-shining-pearl";
import { CRYSTAL_DEX } from "./dex-data/crystal";
import { DIAMOND_PEARL_DEX } from "./dex-data/diamond-pearl";
import { EMERALD_DEX } from "./dex-data/emerald";
import { GOLD_SILVER_DEX } from "./dex-data/gold-silver";
import { HEARTGOLD_SOULSILVER_DEX } from "./dex-data/heartgold-soulsilver";
import { ORAS_DEX } from "./dex-data/omega-ruby-alpha-sapphire";
import { PLATINUM_DEX } from "./dex-data/platinum";
import { RED_BLUE_DEX } from "./dex-data/red-blue";
import { RUBY_SAPPHIRE_DEX } from "./dex-data/ruby-sapphire";
import { SCARLET_VIOLET_DEX } from "./dex-data/scarlet-violet";
import { SUN_MOON_DEX } from "./dex-data/sun-moon";
import { SWORD_SHIELD_DEX } from "./dex-data/sword-shield";
import { USUM_DEX } from "./dex-data/ultra-sun-ultra-moon";
import { X_Y_DEX } from "./dex-data/x-y";
import { LEGENDS_ARCEUS_DEX } from "./dex-data/legends-arceus";
import { LETS_GO_DEX } from "./dex-data/lets-go";
import { YELLOW_DEX } from "./dex-data/yellow";

/* ── Registry ───────────────────────────────────── */
const GAME_DEX_DATA: Record<string, GameDex> = {
  "black-white": BLACK_WHITE_DEX,
  "black2-white2": BLACK2_WHITE2_DEX,
  "brilliant-diamond-shining-pearl": BDSP_DEX,
  crystal: CRYSTAL_DEX,
  "diamond-pearl": DIAMOND_PEARL_DEX,
  emerald: EMERALD_DEX,
  "gold-silver": GOLD_SILVER_DEX,
  "heartgold-soulsilver": HEARTGOLD_SOULSILVER_DEX,
  "omega-ruby-alpha-sapphire": ORAS_DEX,
  platinum: PLATINUM_DEX,
  "red-blue": RED_BLUE_DEX,
  "ruby-sapphire": RUBY_SAPPHIRE_DEX,
  "scarlet-violet": SCARLET_VIOLET_DEX,
  "firered-leafgreen": FIRERED_LEAFGREEN_DEX,
  "sun-moon": SUN_MOON_DEX,
  "sword-shield": SWORD_SHIELD_DEX,
  "ultra-sun-ultra-moon": USUM_DEX,
  "legends-arceus": LEGENDS_ARCEUS_DEX,
  "lets-go": LETS_GO_DEX,
  "x-y": X_Y_DEX,
  "yellow": YELLOW_DEX,
};

export function getGameDex(slug: string): GameDex | undefined {
  return GAME_DEX_DATA[slug];
}

export function hasGameDex(slug: string): boolean {
  return slug in GAME_DEX_DATA;
}
