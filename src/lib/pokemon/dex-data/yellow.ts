import type { GameDex, GameDexEntry } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ==============================================================
 *  Pokemon Yellow -- Kanto Pokedex (151 obtainable)
 *  Single version: all entries use ["Y"]
 *  Yellow has unique availability: all 3 starters are gifts,
 *  both Oddish/Bellsprout lines appear, both Growlithe/Vulpix
 *  lines appear, Mankey available early, Jessie & James bring
 *  Ekans/Meowth/Koffing, etc.
 * ============================================================== */
export const YELLOW_DEX: GameDex = {
  slug: "yellow",
  versionTags: ["Y"],
  pokemon: [
    // Starters & evolutions (all 3 obtained as gifts in Yellow)
    d(1, "Bulbasaur", ["Y"], "Gift from woman in Cerulean City (high Pikachu friendship)"),
    d(2, "Ivysaur", ["Y"], "Evolve Bulbasaur"),
    d(3, "Venusaur", ["Y"], "Evolve Ivysaur"),
    d(4, "Charmander", ["Y"], "Gift from trainer on Route 24"),
    d(5, "Charmeleon", ["Y"], "Evolve Charmander"),
    d(6, "Charizard", ["Y"], "Evolve Charmeleon"),
    d(7, "Squirtle", ["Y"], "Gift from Officer Jenny in Vermilion City (requires Cascade Badge)"),
    d(8, "Wartortle", ["Y"], "Evolve Squirtle"),
    d(9, "Blastoise", ["Y"], "Evolve Wartortle"),

    // Route 1-2 / Viridian Forest Pokemon
    d(10, "Caterpie", ["Y"], "Routes 2, 24, 25, Viridian Forest"),
    d(11, "Metapod", ["Y"], "Viridian Forest, evolve Caterpie"),
    d(12, "Butterfree", ["Y"], "Evolve Metapod"),
    d(13, "Weedle", ["Y"], "Route 2 (east, post-Cut), Routes 24, 25"),
    d(14, "Kakuna", ["Y"], "Evolve Weedle"),
    d(15, "Beedrill", ["Y"], "Evolve Kakuna"),
    d(16, "Pidgey", ["Y"], "Routes 1, 2, 3, 5-8, 12-15, 24, 25, Viridian Forest"),
    d(17, "Pidgeotto", ["Y"], "Routes 13-15, Viridian Forest (rare), evolve Pidgey"),
    d(18, "Pidgeot", ["Y"], "Evolve Pidgeotto"),
    d(19, "Rattata", ["Y"], "Routes 1, 2, 4, 9, 16, 22"),
    d(20, "Raticate", ["Y"], "Routes 16-18, evolve Rattata"),
    d(21, "Spearow", ["Y"], "Routes 3, 4, 9, 16, 18, 22, 23"),
    d(22, "Fearow", ["Y"], "Routes 17, 18, 23, evolve Spearow"),

    // Ekans line (available in Yellow via wild encounters)
    d(23, "Ekans", ["Y"], "Routes 4, 9, 10"),
    d(24, "Arbok", ["Y"], "Route 23, evolve Ekans"),

    // Pikachu line
    d(25, "Pikachu", ["Y"], "Starter from Prof. Oak, Viridian Forest, Power Plant"),
    d(26, "Raichu", ["Y"], "Evolve Pikachu (Thunder Stone) -- your starter Pikachu refuses the stone"),

    // Sandshrew line
    d(27, "Sandshrew", ["Y"], "Routes 4, 9, 10, Mt. Moon"),
    d(28, "Sandslash", ["Y"], "Route 23, evolve Sandshrew"),

    // Nidoran lines
    d(29, "Nidoran\u2640", ["Y"], "Routes 2, 3, 9, 10, 22, Safari Zone"),
    d(30, "Nidorina", ["Y"], "Safari Zone, evolve Nidoran\u2640"),
    d(31, "Nidoqueen", ["Y"], "Evolve Nidorina (Moon Stone)"),
    d(32, "Nidoran\u2642", ["Y"], "Routes 2, 3, 9, 10, 22, Safari Zone"),
    d(33, "Nidorino", ["Y"], "Safari Zone, evolve Nidoran\u2642"),
    d(34, "Nidoking", ["Y"], "Evolve Nidorino (Moon Stone)"),

    // Clefairy line
    d(35, "Clefairy", ["Y"], "Mt. Moon (rare)"),
    d(36, "Clefable", ["Y"], "Evolve Clefairy (Moon Stone)"),

    // Vulpix line (available in Yellow unlike Red)
    d(37, "Vulpix", ["Y"], "Routes 7, 8, Pokemon Mansion"),
    d(38, "Ninetales", ["Y"], "Evolve Vulpix (Fire Stone)"),

    // Jigglypuff line
    d(39, "Jigglypuff", ["Y"], "Routes 3, 8"),
    d(40, "Wigglytuff", ["Y"], "Evolve Jigglypuff (Moon Stone)"),

    // Zubat line
    d(41, "Zubat", ["Y"], "Mt. Moon, Rock Tunnel, Seafoam Islands, Victory Road"),
    d(42, "Golbat", ["Y"], "Seafoam Islands, Victory Road, Cerulean Cave"),

    // Oddish line (available in Yellow)
    d(43, "Oddish", ["Y"], "Routes 5, 6, 7, 9, 12, 13, 14, 15, 24, 25"),
    d(44, "Gloom", ["Y"], "Routes 12-15, evolve Oddish"),
    d(45, "Vileplume", ["Y"], "Evolve Gloom (Leaf Stone)"),

    // Paras line
    d(46, "Paras", ["Y"], "Mt. Moon, Safari Zone"),
    d(47, "Parasect", ["Y"], "Safari Zone, Cerulean Cave, evolve Paras"),

    // Venonat line
    d(48, "Venonat", ["Y"], "Routes 12-15, Safari Zone"),
    d(49, "Venomoth", ["Y"], "Safari Zone, Cerulean Cave, Victory Road, evolve Venonat"),

    // Diglett line
    d(50, "Diglett", ["Y"], "Diglett's Cave"),
    d(51, "Dugtrio", ["Y"], "Diglett's Cave, evolve Diglett"),

    // Meowth line (available in Yellow)
    d(52, "Meowth", ["Y"], "Routes 5, 6, 7, 8"),
    d(53, "Persian", ["Y"], "Evolve Meowth"),

    // Psyduck line
    d(54, "Psyduck", ["Y"], "Seafoam Islands (Surfing), Safari Zone"),
    d(55, "Golduck", ["Y"], "Evolve Psyduck"),

    // Mankey line (available early in Yellow)
    d(56, "Mankey", ["Y"], "Routes 3, 4, 22"),
    d(57, "Primeape", ["Y"], "Evolve Mankey"),

    // Growlithe line (available in Yellow)
    d(58, "Growlithe", ["Y"], "Routes 7, 8, Pokemon Mansion"),
    d(59, "Arcanine", ["Y"], "Evolve Growlithe (Fire Stone)"),

    // Poliwag line
    d(60, "Poliwag", ["Y"], "Routes 22, 25, Viridian City, Cerulean City (Fishing)"),
    d(61, "Poliwhirl", ["Y"], "Evolve Poliwag"),
    d(62, "Poliwrath", ["Y"], "Evolve Poliwhirl (Water Stone)"),

    // Abra line
    d(63, "Abra", ["Y"], "Routes 5, 6, 7, 8, 24, 25"),
    d(64, "Kadabra", ["Y"], "Cerulean Cave, evolve Abra"),
    d(65, "Alakazam", ["Y"], "Trade evolve Kadabra"),

    // Machop line
    d(66, "Machop", ["Y"], "Rock Tunnel, Victory Road"),
    d(67, "Machoke", ["Y"], "Victory Road, Cerulean Cave, evolve Machop"),
    d(68, "Machamp", ["Y"], "Trade evolve Machoke"),

    // Bellsprout line (available in Yellow)
    d(69, "Bellsprout", ["Y"], "Routes 5, 6, 7, 12, 13, 14, 15, 24, 25"),
    d(70, "Weepinbell", ["Y"], "Routes 12-15, evolve Bellsprout"),
    d(71, "Victreebel", ["Y"], "Evolve Weepinbell (Leaf Stone)"),

    // Tentacool line
    d(72, "Tentacool", ["Y"], "Surfing (many routes)"),
    d(73, "Tentacruel", ["Y"], "Surfing, evolve Tentacool"),

    // Geodude line
    d(74, "Geodude", ["Y"], "Mt. Moon, Rock Tunnel, Victory Road"),
    d(75, "Graveler", ["Y"], "Victory Road, Cerulean Cave, evolve Geodude"),
    d(76, "Golem", ["Y"], "Trade evolve Graveler"),

    // Ponyta line
    d(77, "Ponyta", ["Y"], "Pokemon Mansion"),
    d(78, "Rapidash", ["Y"], "Evolve Ponyta"),

    // Slowpoke line
    d(79, "Slowpoke", ["Y"], "Seafoam Islands (Surfing), Fishing"),
    d(80, "Slowbro", ["Y"], "Evolve Slowpoke"),

    // Magnemite line
    d(81, "Magnemite", ["Y"], "Power Plant"),
    d(82, "Magneton", ["Y"], "Power Plant, evolve Magnemite"),

    // Farfetch'd
    d(83, "Farfetch'd", ["Y"], "Trade in Vermilion City (give Spearow)"),

    // Doduo line
    d(84, "Doduo", ["Y"], "Routes 16, 17, 18, Safari Zone"),
    d(85, "Dodrio", ["Y"], "Cerulean Cave, evolve Doduo"),

    // Seel line
    d(86, "Seel", ["Y"], "Seafoam Islands"),
    d(87, "Dewgong", ["Y"], "Seafoam Islands, evolve Seel"),

    // Grimer line
    d(88, "Grimer", ["Y"], "Pokemon Mansion"),
    d(89, "Muk", ["Y"], "Pokemon Mansion, evolve Grimer"),

    // Shellder line
    d(90, "Shellder", ["Y"], "Seafoam Islands (Surfing), Fishing"),
    d(91, "Cloyster", ["Y"], "Evolve Shellder (Water Stone)"),

    // Gastly line
    d(92, "Gastly", ["Y"], "Pokemon Tower"),
    d(93, "Haunter", ["Y"], "Pokemon Tower, evolve Gastly"),
    d(94, "Gengar", ["Y"], "Trade evolve Haunter"),

    // Onix
    d(95, "Onix", ["Y"], "Rock Tunnel, Victory Road"),

    // Drowzee line
    d(96, "Drowzee", ["Y"], "Route 11"),
    d(97, "Hypno", ["Y"], "Evolve Drowzee"),

    // Krabby line
    d(98, "Krabby", ["Y"], "Fishing (various routes)"),
    d(99, "Kingler", ["Y"], "Evolve Krabby"),

    // Voltorb line
    d(100, "Voltorb", ["Y"], "Power Plant, Route 10"),
    d(101, "Electrode", ["Y"], "Power Plant, evolve Voltorb"),

    // Exeggcute line
    d(102, "Exeggcute", ["Y"], "Safari Zone"),
    d(103, "Exeggutor", ["Y"], "Evolve Exeggcute (Leaf Stone)"),

    // Cubone line
    d(104, "Cubone", ["Y"], "Pokemon Tower"),
    d(105, "Marowak", ["Y"], "Victory Road, Cerulean Cave, evolve Cubone"),

    // Hitmonlee & Hitmonchan
    d(106, "Hitmonlee", ["Y"], "Fighting Dojo (choice)"),
    d(107, "Hitmonchan", ["Y"], "Fighting Dojo (choice)"),

    // Lickitung
    d(108, "Lickitung", ["Y"], "Safari Zone"),

    // Koffing line
    d(109, "Koffing", ["Y"], "Pokemon Mansion"),
    d(110, "Weezing", ["Y"], "Pokemon Mansion, evolve Koffing"),

    // Rhyhorn line
    d(111, "Rhyhorn", ["Y"], "Safari Zone"),
    d(112, "Rhydon", ["Y"], "Cerulean Cave, evolve Rhyhorn"),

    // Chansey
    d(113, "Chansey", ["Y"], "Safari Zone (rare), Cerulean Cave"),

    // Tangela
    d(114, "Tangela", ["Y"], "Route 21 (south of Pallet Town)"),

    // Kangaskhan
    d(115, "Kangaskhan", ["Y"], "Safari Zone (rare), Rock Tunnel (rare)"),

    // Horsea line
    d(116, "Horsea", ["Y"], "Seafoam Islands (Surfing), Fishing"),
    d(117, "Seadra", ["Y"], "Evolve Horsea"),

    // Goldeen line
    d(118, "Goldeen", ["Y"], "Fishing (various)"),
    d(119, "Seaking", ["Y"], "Fishing, evolve Goldeen"),

    // Staryu line
    d(120, "Staryu", ["Y"], "Fishing (various)"),
    d(121, "Starmie", ["Y"], "Evolve Staryu (Water Stone)"),

    // Mr. Mime
    d(122, "Mr. Mime", ["Y"], "Trade on Route 2 (give Clefairy)"),

    // Scyther
    d(123, "Scyther", ["Y"], "Safari Zone"),

    // Jynx
    d(124, "Jynx", ["Y"], "Trade in Cerulean City (give Poliwhirl)"),

    // Electabuzz
    d(125, "Electabuzz", ["Y"], "Power Plant"),

    // Magmar
    d(126, "Magmar", ["Y"], "Pokemon Mansion"),

    // Pinsir
    d(127, "Pinsir", ["Y"], "Safari Zone"),

    // Tauros
    d(128, "Tauros", ["Y"], "Safari Zone"),

    // Magikarp line
    d(129, "Magikarp", ["Y"], "Fishing (everywhere), purchase on Route 4 for 500"),
    d(130, "Gyarados", ["Y"], "Evolve Magikarp"),

    // Lapras
    d(131, "Lapras", ["Y"], "Gift in Silph Co. (7F)"),

    // Ditto
    d(132, "Ditto", ["Y"], "Routes 13, 14, 15, Pokemon Mansion, Cerulean Cave"),

    // Eevee & evolutions
    d(133, "Eevee", ["Y"], "Gift in Celadon Mansion (rooftop room)"),
    d(134, "Vaporeon", ["Y"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["Y"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["Y"], "Evolve Eevee (Fire Stone)"),

    // Porygon
    d(137, "Porygon", ["Y"], "Celadon Game Corner prize (6,500 coins)"),

    // Fossils
    d(138, "Omanyte", ["Y"], "Revive Helix Fossil (Cinnabar Lab)"),
    d(139, "Omastar", ["Y"], "Evolve Omanyte"),
    d(140, "Kabuto", ["Y"], "Revive Dome Fossil (Cinnabar Lab)"),
    d(141, "Kabutops", ["Y"], "Evolve Kabuto"),

    // Aerodactyl
    d(142, "Aerodactyl", ["Y"], "Revive Old Amber (Cinnabar Lab)"),

    // Snorlax
    d(143, "Snorlax", ["Y"], "Route 12 or Route 16 (Poke Flute, two available)"),

    // Legendary birds
    d(144, "Articuno", ["Y"], "Seafoam Islands (Lv. 50)"),
    d(145, "Zapdos", ["Y"], "Power Plant (Lv. 50)"),
    d(146, "Moltres", ["Y"], "Victory Road (Lv. 50)"),

    // Dratini line
    d(147, "Dratini", ["Y"], "Safari Zone (Super Rod)"),
    d(148, "Dragonair", ["Y"], "Safari Zone (Super Rod, rare), evolve Dratini"),
    d(149, "Dragonite", ["Y"], "Evolve Dragonair"),

    // Mewtwo
    d(150, "Mewtwo", ["Y"], "Cerulean Cave (Lv. 70, post-game)"),

    // Mew (event only -- included for completeness)
    d(151, "Mew", ["Y"], "Event distribution only"),
  ],
};
