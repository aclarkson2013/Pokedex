import type { GameDexEntry, GameDex } from "../game-dex";

/* ── Helper ─────────────────────────────────────── */
const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Let's Go, Pikachu! & Eevee! — Kanto Pokédex
 *  151 original + Meltan (#808) + Melmetal (#809)
 * ══════════════════════════════════════════════════ */
export const LETS_GO_DEX: GameDex = {
  slug: "lets-go",
  versionTags: ["LGP", "LGE"],
  pokemon: [
    // ── Starters & evolutions ──────────────────────
    d(1, "Bulbasaur", ["LGP", "LGE"], "Rare spawn in Viridian Forest (catch combo)"),
    d(2, "Ivysaur", ["LGP", "LGE"], "Evolve Bulbasaur"),
    d(3, "Venusaur", ["LGP", "LGE"], "Evolve Ivysaur"),
    d(4, "Charmander", ["LGP", "LGE"], "Rare spawn on Route 3, Route 4, Rock Tunnel (catch combo)"),
    d(5, "Charmeleon", ["LGP", "LGE"], "Evolve Charmander"),
    d(6, "Charizard", ["LGP", "LGE"], "Evolve Charmeleon"),
    d(7, "Squirtle", ["LGP", "LGE"], "Rare spawn on Route 24, Route 25, Seafoam Islands (catch combo)"),
    d(8, "Wartortle", ["LGP", "LGE"], "Evolve Squirtle"),
    d(9, "Blastoise", ["LGP", "LGE"], "Evolve Wartortle"),

    // ── Bug types (early routes) ───────────────────
    d(10, "Caterpie", ["LGP", "LGE"], "Routes 2, 24, 25, Viridian Forest"),
    d(11, "Metapod", ["LGP", "LGE"], "Viridian Forest, Routes 24, 25"),
    d(12, "Butterfree", ["LGP", "LGE"], "Evolve Metapod"),
    d(13, "Weedle", ["LGP", "LGE"], "Routes 2, 24, 25, Viridian Forest"),
    d(14, "Kakuna", ["LGP", "LGE"], "Viridian Forest, Routes 24, 25"),
    d(15, "Beedrill", ["LGP", "LGE"], "Evolve Kakuna"),

    // ── Common early Pokémon ───────────────────────
    d(16, "Pidgey", ["LGP", "LGE"], "Routes 1, 2, 3, 5-8, 12-15, 24, 25"),
    d(17, "Pidgeotto", ["LGP", "LGE"], "Routes 13-15, evolve Pidgey"),
    d(18, "Pidgeot", ["LGP", "LGE"], "Evolve Pidgeotto"),
    d(19, "Rattata", ["LGP", "LGE"], "Routes 1, 2, 4, 9, 16, 22"),
    d(20, "Raticate", ["LGP", "LGE"], "Routes 16-18, evolve Rattata"),
    d(21, "Spearow", ["LGP", "LGE"], "Routes 3, 4, 9, 11, 16, 18, 22, 23"),
    d(22, "Fearow", ["LGP", "LGE"], "Routes 17, 18, 23, evolve Spearow"),

    // ── Version exclusives: Ekans / Sandshrew ──────
    d(23, "Ekans", ["LGE"], "Routes 3, 4, 9, 10, 11"),
    d(24, "Arbok", ["LGE"], "Route 23, evolve Ekans"),
    d(25, "Pikachu", ["LGP", "LGE"], "Viridian Forest, Power Plant; partner Pokémon (LGP)"),
    d(26, "Raichu", ["LGP", "LGE"], "Evolve Pikachu (Thunder Stone) — partner cannot evolve"),
    d(27, "Sandshrew", ["LGP"], "Routes 3, 4, 9, 10, 11"),
    d(28, "Sandslash", ["LGP"], "Route 23, evolve Sandshrew"),

    // ── Nidoran lines ──────────────────────────────
    d(29, "Nidoran♀", ["LGP", "LGE"], "Routes 3, 9, 10, 22, 23"),
    d(30, "Nidorina", ["LGP", "LGE"], "Route 23, evolve Nidoran♀"),
    d(31, "Nidoqueen", ["LGP", "LGE"], "Evolve Nidorina (Moon Stone)"),
    d(32, "Nidoran♂", ["LGP", "LGE"], "Routes 3, 9, 10, 22, 23"),
    d(33, "Nidorino", ["LGP", "LGE"], "Route 23, evolve Nidoran♂"),
    d(34, "Nidoking", ["LGP", "LGE"], "Evolve Nidorino (Moon Stone)"),

    // ── Clefairy ───────────────────────────────────
    d(35, "Clefairy", ["LGP", "LGE"], "Mt. Moon"),
    d(36, "Clefable", ["LGP", "LGE"], "Evolve Clefairy (Moon Stone)"),

    // ── Version exclusives: Vulpix / Growlithe ─────
    d(37, "Vulpix", ["LGE"], "Routes 5, 6, 7, 8, Pokémon Mansion"),
    d(38, "Ninetales", ["LGE"], "Evolve Vulpix (Fire Stone)"),
    d(39, "Jigglypuff", ["LGP", "LGE"], "Route 3"),
    d(40, "Wigglytuff", ["LGP", "LGE"], "Evolve Jigglypuff (Moon Stone)"),

    // ── Cave Pokémon ───────────────────────────────
    d(41, "Zubat", ["LGP", "LGE"], "Mt. Moon, Rock Tunnel, Seafoam Islands, Victory Road"),
    d(42, "Golbat", ["LGP", "LGE"], "Victory Road, Seafoam Islands, Cerulean Cave"),

    // ── Version exclusives: Oddish / Bellsprout ────
    d(43, "Oddish", ["LGP"], "Routes 1, 5, 6, 7, 12, 13, 14, 15, 24, 25"),
    d(44, "Gloom", ["LGP"], "Routes 12-15, evolve Oddish"),
    d(45, "Vileplume", ["LGP"], "Evolve Gloom (Leaf Stone)"),

    // ── Mt. Moon / Safari area ─────────────────────
    d(46, "Paras", ["LGP", "LGE"], "Mt. Moon"),
    d(47, "Parasect", ["LGP", "LGE"], "Evolve Paras"),
    d(48, "Venonat", ["LGP", "LGE"], "Routes 12-15, 24, 25"),
    d(49, "Venomoth", ["LGP", "LGE"], "Route 24, evolve Venonat"),

    // ── Diglett's Cave ─────────────────────────────
    d(50, "Diglett", ["LGP", "LGE"], "Diglett's Cave"),
    d(51, "Dugtrio", ["LGP", "LGE"], "Diglett's Cave"),

    // ── Version exclusives: Meowth / Mankey ────────
    d(52, "Meowth", ["LGE"], "Routes 5, 6, 7, 8, 24, 25"),
    d(53, "Persian", ["LGE"], "Evolve Meowth"),
    d(54, "Psyduck", ["LGP", "LGE"], "Routes 4, 6, 10, 12, 24, 25, Seafoam Islands"),
    d(55, "Golduck", ["LGP", "LGE"], "Route 6, evolve Psyduck"),
    d(56, "Mankey", ["LGP"], "Routes 3, 4, 5, 6, 7, 8"),
    d(57, "Primeape", ["LGP"], "Evolve Mankey"),

    // ── Version exclusives: Growlithe / Vulpix ─────
    d(58, "Growlithe", ["LGP"], "Routes 5, 6, 7, 8, Pokémon Mansion"),
    d(59, "Arcanine", ["LGP"], "Evolve Growlithe (Fire Stone)"),

    // ── Water Pokémon ──────────────────────────────
    d(60, "Poliwag", ["LGP", "LGE"], "Routes 22, 25, Viridian City (Surfing)"),
    d(61, "Poliwhirl", ["LGP", "LGE"], "Route 25, evolve Poliwag"),
    d(62, "Poliwrath", ["LGP", "LGE"], "Evolve Poliwhirl (Water Stone)"),

    // ── Abra line ──────────────────────────────────
    d(63, "Abra", ["LGP", "LGE"], "Routes 5, 6, 7, 8, 24, 25"),
    d(64, "Kadabra", ["LGP", "LGE"], "Route 8, evolve Abra"),
    d(65, "Alakazam", ["LGP", "LGE"], "Trade evolve Kadabra (or trade with NPC)"),

    // ── Machop line ────────────────────────────────
    d(66, "Machop", ["LGP", "LGE"], "Rock Tunnel, Victory Road"),
    d(67, "Machoke", ["LGP", "LGE"], "Victory Road, evolve Machop"),
    d(68, "Machamp", ["LGP", "LGE"], "Trade evolve Machoke (or trade with NPC)"),

    // ── Version exclusives: Bellsprout / Oddish ────
    d(69, "Bellsprout", ["LGE"], "Routes 1, 5, 6, 7, 12, 13, 14, 15, 24, 25"),
    d(70, "Weepinbell", ["LGE"], "Routes 12-15, evolve Bellsprout"),
    d(71, "Victreebel", ["LGE"], "Evolve Weepinbell (Leaf Stone)"),

    // ── Water/Surfing Pokémon ──────────────────────
    d(72, "Tentacool", ["LGP", "LGE"], "Surfing (Routes 4, 10, 11, 12, 13, 17, 18, 19, 20, 21)"),
    d(73, "Tentacruel", ["LGP", "LGE"], "Surfing, evolve Tentacool"),

    // ── Rock/Ground types ──────────────────────────
    d(74, "Geodude", ["LGP", "LGE"], "Mt. Moon, Rock Tunnel, Victory Road"),
    d(75, "Graveler", ["LGP", "LGE"], "Victory Road, Cerulean Cave, evolve Geodude"),
    d(76, "Golem", ["LGP", "LGE"], "Trade evolve Graveler (or trade with NPC)"),
    d(77, "Ponyta", ["LGP", "LGE"], "Route 17, Pokémon Mansion"),
    d(78, "Rapidash", ["LGP", "LGE"], "Evolve Ponyta"),

    // ── Psychic / Water ────────────────────────────
    d(79, "Slowpoke", ["LGP", "LGE"], "Seafoam Islands (Surfing)"),
    d(80, "Slowbro", ["LGP", "LGE"], "Evolve Slowpoke"),

    // ── Electric types ─────────────────────────────
    d(81, "Magnemite", ["LGP", "LGE"], "Power Plant, Route 6"),
    d(82, "Magneton", ["LGP", "LGE"], "Power Plant, evolve Magnemite"),

    // ── Route trades & misc ────────────────────────
    d(83, "Farfetch'd", ["LGP", "LGE"], "Route 12, in-game trade"),
    d(84, "Doduo", ["LGP", "LGE"], "Routes 16, 17, 18"),
    d(85, "Dodrio", ["LGP", "LGE"], "Evolve Doduo"),

    // ── Seafoam Islands ────────────────────────────
    d(86, "Seel", ["LGP", "LGE"], "Seafoam Islands"),
    d(87, "Dewgong", ["LGP", "LGE"], "Seafoam Islands, evolve Seel"),

    // ── Version exclusives: Grimer / Koffing ───────
    d(88, "Grimer", ["LGP"], "Pokémon Mansion, Power Plant"),
    d(89, "Muk", ["LGP"], "Evolve Grimer"),
    d(90, "Shellder", ["LGP", "LGE"], "Seafoam Islands (Surfing), Route 17"),
    d(91, "Cloyster", ["LGP", "LGE"], "Evolve Shellder (Water Stone)"),

    // ── Ghost types ────────────────────────────────
    d(92, "Gastly", ["LGP", "LGE"], "Pokémon Tower"),
    d(93, "Haunter", ["LGP", "LGE"], "Pokémon Tower, evolve Gastly"),
    d(94, "Gengar", ["LGP", "LGE"], "Trade evolve Haunter (or trade with NPC)"),

    // ── Rock Tunnel / cave ─────────────────────────
    d(95, "Onix", ["LGP", "LGE"], "Rock Tunnel, Victory Road"),
    d(96, "Drowzee", ["LGP", "LGE"], "Route 11"),
    d(97, "Hypno", ["LGP", "LGE"], "Evolve Drowzee"),

    // ── Fishing / Water ────────────────────────────
    d(98, "Krabby", ["LGP", "LGE"], "Routes 6, 10, 12, 13, 17, 18, 24, 25 (Surfing)"),
    d(99, "Kingler", ["LGP", "LGE"], "Evolve Krabby"),

    // ── Electric types (Power Plant) ───────────────
    d(100, "Voltorb", ["LGP", "LGE"], "Power Plant, Route 10"),
    d(101, "Electrode", ["LGP", "LGE"], "Power Plant, evolve Voltorb"),

    // ── Safari / Grass types ───────────────────────
    d(102, "Exeggcute", ["LGP", "LGE"], "Routes 23, 24, 25"),
    d(103, "Exeggutor", ["LGP", "LGE"], "Evolve Exeggcute (Leaf Stone)"),

    // ── Pokémon Tower ──────────────────────────────
    d(104, "Cubone", ["LGP", "LGE"], "Pokémon Tower, Rock Tunnel"),
    d(105, "Marowak", ["LGP", "LGE"], "Victory Road, evolve Cubone"),

    // ── Fighting Dojo ──────────────────────────────
    d(106, "Hitmonlee", ["LGP", "LGE"], "Fighting Dojo in Saffron City (choose one)"),
    d(107, "Hitmonchan", ["LGP", "LGE"], "Fighting Dojo in Saffron City (choose one)"),

    // ── Misc Pokémon ───────────────────────────────
    d(108, "Lickitung", ["LGP", "LGE"], "Cerulean Cave"),

    // ── Version exclusives: Koffing / Grimer ───────
    d(109, "Koffing", ["LGE"], "Pokémon Mansion, Power Plant"),
    d(110, "Weezing", ["LGE"], "Evolve Koffing"),

    // ── Ground types ───────────────────────────────
    d(111, "Rhyhorn", ["LGP", "LGE"], "Route 17, Victory Road"),
    d(112, "Rhydon", ["LGP", "LGE"], "Evolve Rhyhorn"),
    d(113, "Chansey", ["LGP", "LGE"], "Routes 5, 6, 8, 17, Cerulean Cave (rare)"),

    // ── Grass types ────────────────────────────────
    d(114, "Tangela", ["LGP", "LGE"], "Route 21"),

    // ── Safari / Rare ──────────────────────────────
    d(115, "Kangaskhan", ["LGP", "LGE"], "Rock Tunnel (rare spawn)"),

    // ── Water types ────────────────────────────────
    d(116, "Horsea", ["LGP", "LGE"], "Routes 4, 10, 11, 12 (Surfing)"),
    d(117, "Seadra", ["LGP", "LGE"], "Route 12, evolve Horsea"),
    d(118, "Goldeen", ["LGP", "LGE"], "Routes 4, 10, 11, 12, 13, 17, 18, 24, 25 (Surfing)"),
    d(119, "Seaking", ["LGP", "LGE"], "Evolve Goldeen"),
    d(120, "Staryu", ["LGP", "LGE"], "Routes 18, 19, 20, 21 (Surfing)"),
    d(121, "Starmie", ["LGP", "LGE"], "Evolve Staryu (Water Stone)"),

    // ── Psychic / Misc ─────────────────────────────
    d(122, "Mr. Mime", ["LGP", "LGE"], "Route 11, in-game trade or rare spawn"),

    // ── Version exclusives: Scyther / Pinsir ───────
    d(123, "Scyther", ["LGP"], "Route 14, Route 15"),
    d(124, "Jynx", ["LGP", "LGE"], "Seafoam Islands, in-game trade in Cerulean City"),
    d(125, "Electabuzz", ["LGP", "LGE"], "Power Plant"),
    d(126, "Magmar", ["LGP", "LGE"], "Pokémon Mansion"),
    d(127, "Pinsir", ["LGE"], "Route 14, Route 15"),

    // ── Rare / Special ─────────────────────────────
    d(128, "Tauros", ["LGP", "LGE"], "Routes 14, 15"),
    d(129, "Magikarp", ["LGP", "LGE"], "Surfing (many locations), gift on Route 4"),
    d(130, "Gyarados", ["LGP", "LGE"], "Evolve Magikarp"),
    d(131, "Lapras", ["LGP", "LGE"], "Gift in Silph Co. (7F)"),
    d(132, "Ditto", ["LGP", "LGE"], "Pokémon Mansion, Cerulean Cave"),

    // ── Eevee & Eeveelutions ───────────────────────
    d(133, "Eevee", ["LGP", "LGE"], "Route 17 (rare spawn); partner Pokémon (LGE)"),
    d(134, "Vaporeon", ["LGP", "LGE"], "Evolve Eevee (Water Stone) — partner cannot evolve"),
    d(135, "Jolteon", ["LGP", "LGE"], "Evolve Eevee (Thunder Stone) — partner cannot evolve"),
    d(136, "Flareon", ["LGP", "LGE"], "Evolve Eevee (Fire Stone) — partner cannot evolve"),

    // ── Porygon ────────────────────────────────────
    d(137, "Porygon", ["LGP", "LGE"], "Celadon Game Corner prize"),

    // ── Fossil Pokémon ─────────────────────────────
    d(138, "Omanyte", ["LGP", "LGE"], "Revive Helix Fossil (Cinnabar Lab)"),
    d(139, "Omastar", ["LGP", "LGE"], "Evolve Omanyte"),
    d(140, "Kabuto", ["LGP", "LGE"], "Revive Dome Fossil (Cinnabar Lab)"),
    d(141, "Kabutops", ["LGP", "LGE"], "Evolve Kabuto"),
    d(142, "Aerodactyl", ["LGP", "LGE"], "Revive Old Amber (Cinnabar Lab)"),

    // ── Snorlax ────────────────────────────────────
    d(143, "Snorlax", ["LGP", "LGE"], "Route 12 or Route 16 (wake with Poké Flute)"),

    // ── Legendary Birds ────────────────────────────
    d(144, "Articuno", ["LGP", "LGE"], "Seafoam Islands (Lv. 50)"),
    d(145, "Zapdos", ["LGP", "LGE"], "Power Plant (Lv. 50)"),
    d(146, "Moltres", ["LGP", "LGE"], "Victory Road (Lv. 50)"),

    // ── Dratini line ───────────────────────────────
    d(147, "Dratini", ["LGP", "LGE"], "Route 10 (rare spawn)"),
    d(148, "Dragonair", ["LGP", "LGE"], "Route 10 (rare spawn), evolve Dratini"),
    d(149, "Dragonite", ["LGP", "LGE"], "Evolve Dragonair"),

    // ── Mewtwo & Mew ───────────────────────────────
    d(150, "Mewtwo", ["LGP", "LGE"], "Cerulean Cave (Lv. 70, post-game)"),
    d(151, "Mew", ["LGP", "LGE"], "Poké Ball Plus accessory (special gift)"),

    // ── Mythical / Pokémon GO exclusives ────────────
    d(808, "Meltan", ["LGP", "LGE"], "Transfer from Pokémon GO via GO Park"),
    d(809, "Melmetal", ["LGP", "LGE"], "Evolve Meltan in Pokémon GO (400 candy), then transfer"),
  ],
};
