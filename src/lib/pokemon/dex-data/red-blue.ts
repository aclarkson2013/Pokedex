import type { GameDex, GameDexEntry } from "../game-dex";

/* ── Helper ─────────────────────────────────────── */
const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Red & Blue — Kanto Pokédex (151 obtainable)
 * ══════════════════════════════════════════════════ */
export const RED_BLUE_DEX: GameDex = {
  slug: "red-blue",
  versionTags: ["Red", "Blue"],
  pokemon: [
    // ── Starters & evolutions ──────────────────────
    d(1, "Bulbasaur", ["Red", "Blue"], "Starter from Prof. Oak"),
    d(2, "Ivysaur", ["Red", "Blue"], "Evolve Bulbasaur"),
    d(3, "Venusaur", ["Red", "Blue"], "Evolve Ivysaur"),
    d(4, "Charmander", ["Red", "Blue"], "Starter from Prof. Oak"),
    d(5, "Charmeleon", ["Red", "Blue"], "Evolve Charmander"),
    d(6, "Charizard", ["Red", "Blue"], "Evolve Charmeleon"),
    d(7, "Squirtle", ["Red", "Blue"], "Starter from Prof. Oak"),
    d(8, "Wartortle", ["Red", "Blue"], "Evolve Squirtle"),
    d(9, "Blastoise", ["Red", "Blue"], "Evolve Wartortle"),

    // ── Bug-types & early routes ───────────────────
    d(10, "Caterpie", ["Red", "Blue"], "Routes 2, 24, 25, Viridian Forest"),
    d(11, "Metapod", ["Red", "Blue"], "Viridian Forest, evolve Caterpie"),
    d(12, "Butterfree", ["Red", "Blue"], "Evolve Metapod"),
    d(13, "Weedle", ["Red", "Blue"], "Routes 2, 24, 25, Viridian Forest"),
    d(14, "Kakuna", ["Red", "Blue"], "Viridian Forest, evolve Weedle"),
    d(15, "Beedrill", ["Red", "Blue"], "Evolve Kakuna"),

    // ── Route 1-3 Pokemon ──────────────────────────
    d(16, "Pidgey", ["Red", "Blue"], "Routes 1, 2, 3, 5-8, 12-15, 24, 25"),
    d(17, "Pidgeotto", ["Red", "Blue"], "Routes 13-15, 21, evolve Pidgey"),
    d(18, "Pidgeot", ["Red", "Blue"], "Evolve Pidgeotto"),
    d(19, "Rattata", ["Red", "Blue"], "Routes 1, 2, 4, 9, 16, 22"),
    d(20, "Raticate", ["Red", "Blue"], "Routes 16-18, 21, evolve Rattata"),
    d(21, "Spearow", ["Red", "Blue"], "Routes 3, 4, 9, 11, 16, 18, 22, 23"),
    d(22, "Fearow", ["Red", "Blue"], "Routes 17, 18, 23, evolve Spearow"),

    // ── Version exclusives: Ekans / Sandshrew ──────
    d(23, "Ekans", ["Red"], "Routes 4, 8, 9, 10, 11, 23"),
    d(24, "Arbok", ["Red"], "Route 23, evolve Ekans"),
    d(27, "Sandshrew", ["Blue"], "Routes 4, 8, 9, 10, 11, 23"),
    d(28, "Sandslash", ["Blue"], "Route 23, evolve Sandshrew"),

    // ── Pikachu line ───────────────────────────────
    d(25, "Pikachu", ["Red", "Blue"], "Viridian Forest, Power Plant"),
    d(26, "Raichu", ["Red", "Blue"], "Evolve Pikachu (Thunder Stone)"),

    // ── Nidoran lines ──────────────────────────────
    d(29, "Nidoran\u2640", ["Red", "Blue"], "Routes 3, 22, Safari Zone"),
    d(30, "Nidorina", ["Red", "Blue"], "Safari Zone, evolve Nidoran\u2640"),
    d(31, "Nidoqueen", ["Red", "Blue"], "Evolve Nidorina (Moon Stone)"),
    d(32, "Nidoran\u2642", ["Red", "Blue"], "Routes 3, 22, Safari Zone"),
    d(33, "Nidorino", ["Red", "Blue"], "Safari Zone, evolve Nidoran\u2642"),
    d(34, "Nidoking", ["Red", "Blue"], "Evolve Nidorino (Moon Stone)"),

    // ── Mt. Moon Pokemon ───────────────────────────
    d(35, "Clefairy", ["Red", "Blue"], "Mt. Moon"),
    d(36, "Clefable", ["Red", "Blue"], "Evolve Clefairy (Moon Stone)"),

    // ── Version exclusives: Vulpix / Growlithe ─────
    d(37, "Vulpix", ["Blue"], "Routes 7, 8, Pokemon Mansion"),
    d(38, "Ninetales", ["Blue"], "Evolve Vulpix (Fire Stone)"),
    d(58, "Growlithe", ["Red"], "Routes 7, 8, Pokemon Mansion"),
    d(59, "Arcanine", ["Red"], "Evolve Growlithe (Fire Stone)"),

    // ── Jigglypuff line ────────────────────────────
    d(39, "Jigglypuff", ["Red", "Blue"], "Route 3"),
    d(40, "Wigglytuff", ["Red", "Blue"], "Evolve Jigglypuff (Moon Stone)"),

    // ── Zubat line ─────────────────────────────────
    d(41, "Zubat", ["Red", "Blue"], "Mt. Moon, Rock Tunnel, Seafoam Islands, Victory Road"),
    d(42, "Golbat", ["Red", "Blue"], "Victory Road, Seafoam Islands, Cerulean Cave"),

    // ── Version exclusives: Oddish / Bellsprout ────
    d(43, "Oddish", ["Red"], "Routes 5, 6, 7, 12, 13, 14, 15, 24, 25"),
    d(44, "Gloom", ["Red"], "Routes 12-15, evolve Oddish"),
    d(45, "Vileplume", ["Red"], "Evolve Gloom (Leaf Stone)"),
    d(69, "Bellsprout", ["Blue"], "Routes 5, 6, 7, 12, 13, 14, 15, 24, 25"),
    d(70, "Weepinbell", ["Blue"], "Routes 12-15, evolve Bellsprout"),
    d(71, "Victreebel", ["Blue"], "Evolve Weepinbell (Leaf Stone)"),

    // ── Paras line ─────────────────────────────────
    d(46, "Paras", ["Red", "Blue"], "Mt. Moon, Safari Zone"),
    d(47, "Parasect", ["Red", "Blue"], "Safari Zone, Cerulean Cave, evolve Paras"),

    // ── Venonat line ───────────────────────────────
    d(48, "Venonat", ["Red", "Blue"], "Routes 12-15, Safari Zone"),
    d(49, "Venomoth", ["Red", "Blue"], "Safari Zone, Cerulean Cave, evolve Venonat"),

    // ── Diglett line ───────────────────────────────
    d(50, "Diglett", ["Red", "Blue"], "Diglett's Cave"),
    d(51, "Dugtrio", ["Red", "Blue"], "Diglett's Cave"),

    // ── Version exclusives: Meowth / Mankey ────────
    d(52, "Meowth", ["Blue"], "Routes 5, 6, 7, 8"),
    d(53, "Persian", ["Blue"], "Evolve Meowth"),
    d(56, "Mankey", ["Red"], "Routes 3, 4, 22"),
    d(57, "Primeape", ["Red"], "Evolve Mankey"),

    // ── Psyduck line ───────────────────────────────
    d(54, "Psyduck", ["Red", "Blue"], "Safari Zone (Surfing), Seafoam Islands"),
    d(55, "Golduck", ["Red", "Blue"], "Evolve Psyduck"),

    // ── Poliwag line ───────────────────────────────
    d(60, "Poliwag", ["Red", "Blue"], "Routes 22, 23, 25, Viridian City (Fishing)"),
    d(61, "Poliwhirl", ["Red", "Blue"], "Cerulean Cave (Surfing), evolve Poliwag"),
    d(62, "Poliwrath", ["Red", "Blue"], "Evolve Poliwhirl (Water Stone)"),

    // ── Abra line ──────────────────────────────────
    d(63, "Abra", ["Red", "Blue"], "Routes 24, 25"),
    d(64, "Kadabra", ["Red", "Blue"], "Cerulean Cave, evolve Abra"),
    d(65, "Alakazam", ["Red", "Blue"], "Trade evolve Kadabra"),

    // ── Machop line ────────────────────────────────
    d(66, "Machop", ["Red", "Blue"], "Rock Tunnel, Victory Road"),
    d(67, "Machoke", ["Red", "Blue"], "Victory Road, evolve Machop"),
    d(68, "Machamp", ["Red", "Blue"], "Trade evolve Machoke"),

    // ── Tentacool line ─────────────────────────────
    d(72, "Tentacool", ["Red", "Blue"], "Surfing (many water routes)"),
    d(73, "Tentacruel", ["Red", "Blue"], "Evolve Tentacool"),

    // ── Geodude line ───────────────────────────────
    d(74, "Geodude", ["Red", "Blue"], "Mt. Moon, Rock Tunnel, Victory Road"),
    d(75, "Graveler", ["Red", "Blue"], "Victory Road, Cerulean Cave, evolve Geodude"),
    d(76, "Golem", ["Red", "Blue"], "Trade evolve Graveler"),

    // ── Ponyta line ────────────────────────────────
    d(77, "Ponyta", ["Red", "Blue"], "Pokemon Mansion"),
    d(78, "Rapidash", ["Red", "Blue"], "Evolve Ponyta"),

    // ── Slowpoke line ──────────────────────────────
    d(79, "Slowpoke", ["Red", "Blue"], "Fishing (various routes), Seafoam Islands"),
    d(80, "Slowbro", ["Red", "Blue"], "Evolve Slowpoke"),

    // ── Magnemite line ─────────────────────────────
    d(81, "Magnemite", ["Red", "Blue"], "Power Plant"),
    d(82, "Magneton", ["Red", "Blue"], "Power Plant, Cerulean Cave, evolve Magnemite"),

    // ── Farfetch'd ─────────────────────────────────
    d(83, "Farfetch\u2019d", ["Red", "Blue"], "Trade Spearow on Route 12"),

    // ── Doduo line ─────────────────────────────────
    d(84, "Doduo", ["Red", "Blue"], "Routes 16, 17, 18, Safari Zone"),
    d(85, "Dodrio", ["Red", "Blue"], "Cerulean Cave, evolve Doduo"),

    // ── Seel line ──────────────────────────────────
    d(86, "Seel", ["Red", "Blue"], "Seafoam Islands"),
    d(87, "Dewgong", ["Red", "Blue"], "Seafoam Islands, evolve Seel"),

    // ── Grimer line ────────────────────────────────
    d(88, "Grimer", ["Red", "Blue"], "Pokemon Mansion"),
    d(89, "Muk", ["Red", "Blue"], "Pokemon Mansion, evolve Grimer"),

    // ── Shellder line ──────────────────────────────
    d(90, "Shellder", ["Red", "Blue"], "Fishing (various routes)"),
    d(91, "Cloyster", ["Red", "Blue"], "Evolve Shellder (Water Stone)"),

    // ── Gastly line ────────────────────────────────
    d(92, "Gastly", ["Red", "Blue"], "Pokemon Tower"),
    d(93, "Haunter", ["Red", "Blue"], "Pokemon Tower, evolve Gastly"),
    d(94, "Gengar", ["Red", "Blue"], "Trade evolve Haunter"),

    // ── Onix ───────────────────────────────────────
    d(95, "Onix", ["Red", "Blue"], "Rock Tunnel, Victory Road"),

    // ── Drowzee line ───────────────────────────────
    d(96, "Drowzee", ["Red", "Blue"], "Route 11"),
    d(97, "Hypno", ["Red", "Blue"], "Cerulean Cave, evolve Drowzee"),

    // ── Krabby line ────────────────────────────────
    d(98, "Krabby", ["Red", "Blue"], "Fishing (various routes)"),
    d(99, "Kingler", ["Red", "Blue"], "Evolve Krabby"),

    // ── Voltorb line ───────────────────────────────
    d(100, "Voltorb", ["Red", "Blue"], "Power Plant, Route 10"),
    d(101, "Electrode", ["Red", "Blue"], "Power Plant (disguised as items), evolve Voltorb"),

    // ── Exeggcute line ─────────────────────────────
    d(102, "Exeggcute", ["Red", "Blue"], "Safari Zone"),
    d(103, "Exeggutor", ["Red", "Blue"], "Evolve Exeggcute (Leaf Stone)"),

    // ── Cubone line ────────────────────────────────
    d(104, "Cubone", ["Red", "Blue"], "Pokemon Tower"),
    d(105, "Marowak", ["Red", "Blue"], "Victory Road, evolve Cubone"),

    // ── Hitmon pair ────────────────────────────────
    d(106, "Hitmonlee", ["Red", "Blue"], "Fighting Dojo (choice)"),
    d(107, "Hitmonchan", ["Red", "Blue"], "Fighting Dojo (choice)"),

    // ── Lickitung ──────────────────────────────────
    d(108, "Lickitung", ["Red", "Blue"], "Trade Slowbro on Route 18"),

    // ── Koffing line ───────────────────────────────
    d(109, "Koffing", ["Red", "Blue"], "Pokemon Mansion"),
    d(110, "Weezing", ["Red", "Blue"], "Pokemon Mansion, evolve Koffing"),

    // ── Rhyhorn line ───────────────────────────────
    d(111, "Rhyhorn", ["Red", "Blue"], "Safari Zone"),
    d(112, "Rhydon", ["Red", "Blue"], "Cerulean Cave, evolve Rhyhorn"),

    // ── Chansey ────────────────────────────────────
    d(113, "Chansey", ["Red", "Blue"], "Safari Zone (rare), Cerulean Cave"),

    // ── Tangela ────────────────────────────────────
    d(114, "Tangela", ["Red", "Blue"], "Route 21 (south of Pallet Town)"),

    // ── Kangaskhan ─────────────────────────────────
    d(115, "Kangaskhan", ["Red", "Blue"], "Safari Zone (rare)"),

    // ── Horsea line ────────────────────────────────
    d(116, "Horsea", ["Red", "Blue"], "Fishing (Seafoam Islands, various)"),
    d(117, "Seadra", ["Red", "Blue"], "Evolve Horsea"),

    // ── Goldeen line ───────────────────────────────
    d(118, "Goldeen", ["Red", "Blue"], "Fishing (various routes)"),
    d(119, "Seaking", ["Red", "Blue"], "Fishing, evolve Goldeen"),

    // ── Staryu line ────────────────────────────────
    d(120, "Staryu", ["Red", "Blue"], "Fishing (various routes)"),
    d(121, "Starmie", ["Red", "Blue"], "Evolve Staryu (Water Stone)"),

    // ── Mr. Mime ───────────────────────────────────
    d(122, "Mr. Mime", ["Red", "Blue"], "Trade Abra on Route 2"),

    // ── Version exclusives: Scyther / Pinsir ───────
    d(123, "Scyther", ["Red"], "Safari Zone"),
    d(127, "Pinsir", ["Blue"], "Safari Zone"),

    // ── Jynx ───────────────────────────────────────
    d(124, "Jynx", ["Red", "Blue"], "Trade Poliwhirl in Cerulean City"),

    // ── Version exclusives: Electabuzz / Magmar ────
    d(125, "Electabuzz", ["Red"], "Power Plant"),
    d(126, "Magmar", ["Blue"], "Pokemon Mansion"),

    // ── Tauros ─────────────────────────────────────
    d(128, "Tauros", ["Red", "Blue"], "Safari Zone"),

    // ── Magikarp line ──────────────────────────────
    d(129, "Magikarp", ["Red", "Blue"], "Fishing (everywhere), purchase on Route 4 for 500"),
    d(130, "Gyarados", ["Red", "Blue"], "Evolve Magikarp"),

    // ── Lapras ─────────────────────────────────────
    d(131, "Lapras", ["Red", "Blue"], "Gift from employee in Silph Co. (7F)"),

    // ── Ditto ──────────────────────────────────────
    d(132, "Ditto", ["Red", "Blue"], "Routes 13, 14, 15, 23, Pokemon Mansion, Cerulean Cave"),

    // ── Eevee & evolutions ─────────────────────────
    d(133, "Eevee", ["Red", "Blue"], "Gift in Celadon Mansion (back entrance, roof room)"),
    d(134, "Vaporeon", ["Red", "Blue"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["Red", "Blue"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["Red", "Blue"], "Evolve Eevee (Fire Stone)"),

    // ── Porygon ────────────────────────────────────
    d(137, "Porygon", ["Red", "Blue"], "Celadon Game Corner prize (9999 coins Red / 6500 coins Blue)"),

    // ── Fossils ────────────────────────────────────
    d(138, "Omanyte", ["Red", "Blue"], "Revive Helix Fossil (Cinnabar Lab)"),
    d(139, "Omastar", ["Red", "Blue"], "Evolve Omanyte"),
    d(140, "Kabuto", ["Red", "Blue"], "Revive Dome Fossil (Cinnabar Lab)"),
    d(141, "Kabutops", ["Red", "Blue"], "Evolve Kabuto"),
    d(142, "Aerodactyl", ["Red", "Blue"], "Revive Old Amber (Cinnabar Lab)"),

    // ── Snorlax ────────────────────────────────────
    d(143, "Snorlax", ["Red", "Blue"], "Route 12 or Route 16 (use Poke Flute to wake, 2 total)"),

    // ── Legendary birds ────────────────────────────
    d(144, "Articuno", ["Red", "Blue"], "Seafoam Islands (Lv. 50)"),
    d(145, "Zapdos", ["Red", "Blue"], "Power Plant (Lv. 50)"),
    d(146, "Moltres", ["Red", "Blue"], "Victory Road (Lv. 50)"),

    // ── Dratini line ───────────────────────────────
    d(147, "Dratini", ["Red", "Blue"], "Safari Zone (Super Rod fishing)"),
    d(148, "Dragonair", ["Red", "Blue"], "Safari Zone (Super Rod, rare), evolve Dratini"),
    d(149, "Dragonite", ["Red", "Blue"], "Evolve Dragonair"),

    // ── Mewtwo ─────────────────────────────────────
    d(150, "Mewtwo", ["Red", "Blue"], "Cerulean Cave (post-game, Lv. 70)"),

    // ── Mew ────────────────────────────────────────
    d(151, "Mew", ["Red", "Blue"], "Event distribution only (not obtainable in normal gameplay)"),
  ],
};
