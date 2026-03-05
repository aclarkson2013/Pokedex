import type { GameDexEntry, GameDex } from "../game-dex";

/* ── Helper ─────────────────────────────────────── */
const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Gold & Silver — Johto + Kanto Pokedex
 * ══════════════════════════════════════════════════ */
export const GOLD_SILVER_DEX: GameDex = {
  slug: "gold-silver",
  versionTags: ["G", "S"],
  pokemon: [
    // ── Gen I Starters (obtainable via trade / post-game) ──
    d(1, "Bulbasaur", ["G", "S"], "Trade from RBY"),
    d(2, "Ivysaur", ["G", "S"], "Evolve Bulbasaur"),
    d(3, "Venusaur", ["G", "S"], "Evolve Ivysaur"),
    d(4, "Charmander", ["G", "S"], "Trade from RBY"),
    d(5, "Charmeleon", ["G", "S"], "Evolve Charmander"),
    d(6, "Charizard", ["G", "S"], "Evolve Charmeleon"),
    d(7, "Squirtle", ["G", "S"], "Trade from RBY"),
    d(8, "Wartortle", ["G", "S"], "Evolve Squirtle"),
    d(9, "Blastoise", ["G", "S"], "Evolve Wartortle"),

    // ── Caterpie line ──
    d(10, "Caterpie", ["G", "S"], "Routes 2, 30, 31, Ilex Forest, National Park, Bug Catching Contest"),
    d(11, "Metapod", ["G", "S"], "Bug Catching Contest, evolve Caterpie"),
    d(12, "Butterfree", ["G", "S"], "Bug Catching Contest, evolve Metapod"),

    // ── Weedle line ──
    d(13, "Weedle", ["G", "S"], "Routes 2, 30, 31, Ilex Forest, National Park, Bug Catching Contest"),
    d(14, "Kakuna", ["G", "S"], "Bug Catching Contest, evolve Weedle"),
    d(15, "Beedrill", ["G", "S"], "Bug Catching Contest, evolve Kakuna"),

    // ── Pidgey line ──
    d(16, "Pidgey", ["G", "S"], "Routes 1, 2, 5, 6, 25, 29, 30, 31, 35, 36, 37"),
    d(17, "Pidgeotto", ["G", "S"], "Routes 37, 43, evolve Pidgey"),
    d(18, "Pidgeot", ["G", "S"], "Evolve Pidgeotto"),

    // ── Rattata line ──
    d(19, "Rattata", ["G", "S"], "Routes 1, 3, 4, 7, 9, 29, 32, 33, 34, Sprout Tower, Burned Tower"),
    d(20, "Raticate", ["G", "S"], "Routes 26, 27, 38, 39, 42, evolve Rattata"),

    // ── Spearow line ──
    d(21, "Spearow", ["G", "S"], "Routes 3, 4, 9, 22, 33, 42, 46"),
    d(22, "Fearow", ["G", "S"], "Routes 9, 10, 16, 17, 22, evolve Spearow"),

    // ── Ekans / Arbok ──
    d(23, "Ekans", ["G"], "Routes 3, 4, 32, 33, Goldenrod Game Corner"),
    d(24, "Arbok", ["G"], "Routes 26, 27, evolve Ekans"),

    // ── Pikachu line ──
    d(25, "Pikachu", ["G", "S"], "Route 2 (Kanto)"),
    d(26, "Raichu", ["G", "S"], "Evolve Pikachu (Thunder Stone)"),

    // ── Sandshrew / Sandslash ──
    d(27, "Sandshrew", ["G", "S"], "Union Cave, Mt. Moon"),
    d(28, "Sandslash", ["G", "S"], "Routes 26, 27, evolve Sandshrew"),

    // ── Nidoran F line ──
    d(29, "Nidoran\u2640", ["G", "S"], "Route 35, 36"),
    d(30, "Nidorina", ["G", "S"], "Routes 13, 14, 15, evolve Nidoran\u2640"),
    d(31, "Nidoqueen", ["G", "S"], "Evolve Nidorina (Moon Stone)"),

    // ── Nidoran M line ──
    d(32, "Nidoran\u2642", ["G", "S"], "Route 35, 36"),
    d(33, "Nidorino", ["G", "S"], "Routes 13, 14, 15, evolve Nidoran\u2642"),
    d(34, "Nidoking", ["G", "S"], "Evolve Nidorino (Moon Stone)"),

    // ── Clefairy line ──
    d(35, "Clefairy", ["G", "S"], "Mt. Moon"),
    d(36, "Clefable", ["G", "S"], "Evolve Clefairy (Moon Stone)"),

    // ── Vulpix / Ninetales ──
    d(37, "Vulpix", ["S"], "Routes 7, 8, 36, 37"),
    d(38, "Ninetales", ["S"], "Evolve Vulpix (Fire Stone)"),

    // ── Jigglypuff line ──
    d(39, "Jigglypuff", ["G", "S"], "Routes 3, 4, 34, 46"),
    d(40, "Wigglytuff", ["G", "S"], "Evolve Jigglypuff (Moon Stone)"),

    // ── Zubat line ──
    d(41, "Zubat", ["G", "S"], "Union Cave, Slowpoke Well, Dark Cave, Sprout Tower, many caves"),
    d(42, "Golbat", ["G", "S"], "Ice Path, Victory Road, Mt. Silver, evolve Zubat"),

    // ── Oddish line ──
    d(43, "Oddish", ["G", "S"], "Ilex Forest, Routes 5, 6, 24, 25"),
    d(44, "Gloom", ["G", "S"], "Routes 5, 6, evolve Oddish"),
    d(45, "Vileplume", ["G", "S"], "Evolve Gloom (Leaf Stone)"),

    // ── Paras line ──
    d(46, "Paras", ["G", "S"], "Ilex Forest, National Park, Mt. Moon"),
    d(47, "Parasect", ["G", "S"], "Evolve Paras"),

    // ── Venonat / Venomoth ──
    d(48, "Venonat", ["G", "S"], "Routes 24, 25, 43, National Park"),
    d(49, "Venomoth", ["G", "S"], "Routes 24, 25, evolve Venonat"),

    // ── Diglett / Dugtrio ──
    d(50, "Diglett", ["G", "S"], "Diglett's Cave"),
    d(51, "Dugtrio", ["G", "S"], "Diglett's Cave, evolve Diglett"),

    // ── Meowth / Persian ──
    d(52, "Meowth", ["S"], "Routes 5, 6, 7, 8, 38, 39"),
    d(53, "Persian", ["S"], "Evolve Meowth"),

    // ── Psyduck / Golduck ──
    d(54, "Psyduck", ["G", "S"], "Ilex Forest (Surf), Routes 6, 35 (Surf)"),
    d(55, "Golduck", ["G", "S"], "Route 6 (Surf), evolve Psyduck"),

    // ── Mankey / Primeape ──
    d(56, "Mankey", ["G"], "Routes 9, 42"),
    d(57, "Primeape", ["G"], "Routes 9, evolve Mankey"),

    // ── Growlithe / Arcanine ──
    d(58, "Growlithe", ["G"], "Routes 7, 8, 36, 37"),
    d(59, "Arcanine", ["G"], "Evolve Growlithe (Fire Stone)"),

    // ── Poliwag line ──
    d(60, "Poliwag", ["G", "S"], "Route 30 (Surf), Violet City (Fishing)"),
    d(61, "Poliwhirl", ["G", "S"], "Route 30 (Surf), evolve Poliwag"),
    d(62, "Poliwrath", ["G", "S"], "Evolve Poliwhirl (Water Stone)"),

    // ── Abra line ──
    d(63, "Abra", ["G", "S"], "Routes 5, 6, 8, 24, 25, 34, Goldenrod Game Corner"),
    d(64, "Kadabra", ["G", "S"], "Route 8, evolve Abra"),
    d(65, "Alakazam", ["G", "S"], "Trade evolve Kadabra"),

    // ── Machop line ──
    d(66, "Machop", ["G", "S"], "Mt. Mortar, Rock Tunnel"),
    d(67, "Machoke", ["G", "S"], "Mt. Mortar, Victory Road, evolve Machop"),
    d(68, "Machamp", ["G", "S"], "Trade evolve Machoke"),

    // ── Bellsprout line ──
    d(69, "Bellsprout", ["G", "S"], "Routes 5, 6, 24, 25, 31, 32, 44"),
    d(70, "Weepinbell", ["G", "S"], "Route 44, evolve Bellsprout"),
    d(71, "Victreebel", ["G", "S"], "Evolve Weepinbell (Leaf Stone)"),

    // ── Tentacool / Tentacruel ──
    d(72, "Tentacool", ["G", "S"], "Surfing many water routes"),
    d(73, "Tentacruel", ["G", "S"], "Surfing Routes 40, 41, evolve Tentacool"),

    // ── Geodude line ──
    d(74, "Geodude", ["G", "S"], "Union Cave, Dark Cave, Mt. Mortar, Route 46"),
    d(75, "Graveler", ["G", "S"], "Victory Road, Mt. Silver, evolve Geodude"),
    d(76, "Golem", ["G", "S"], "Trade evolve Graveler"),

    // ── Ponyta / Rapidash ──
    d(77, "Ponyta", ["G", "S"], "Routes 26, 27, 28, Mt. Silver"),
    d(78, "Rapidash", ["G", "S"], "Route 28, Mt. Silver, evolve Ponyta"),

    // ── Slowpoke line ──
    d(79, "Slowpoke", ["G", "S"], "Slowpoke Well, Route 30 (Fishing)"),
    d(80, "Slowbro", ["G", "S"], "Evolve Slowpoke"),

    // ── Magnemite / Magneton ──
    d(81, "Magnemite", ["G", "S"], "Routes 6, 11, 38, 39"),
    d(82, "Magneton", ["G", "S"], "Evolve Magnemite"),

    // ── Farfetch'd ──
    d(83, "Farfetch\u2019d", ["G", "S"], "Ilex Forest (story event), Routes 38, 39"),

    // ── Doduo / Dodrio ──
    d(84, "Doduo", ["G", "S"], "Routes 26, 27, 28"),
    d(85, "Dodrio", ["G", "S"], "Route 28, evolve Doduo"),

    // ── Seel / Dewgong ──
    d(86, "Seel", ["G", "S"], "Whirl Islands"),
    d(87, "Dewgong", ["G", "S"], "Whirl Islands, evolve Seel"),

    // ── Grimer / Muk ──
    d(88, "Grimer", ["G", "S"], "Routes 16, 17, 18, Celadon City"),
    d(89, "Muk", ["G", "S"], "Routes 16, 17, 18, evolve Grimer"),

    // ── Shellder / Cloyster ──
    d(90, "Shellder", ["G", "S"], "Fishing (Olivine City, New Bark Town)"),
    d(91, "Cloyster", ["G", "S"], "Evolve Shellder (Water Stone)"),

    // ── Gastly line ──
    d(92, "Gastly", ["G", "S"], "Sprout Tower, Tin Tower, Route 31 (night)"),
    d(93, "Haunter", ["G", "S"], "Route 8, evolve Gastly"),
    d(94, "Gengar", ["G", "S"], "Trade evolve Haunter"),

    // ── Onix ──
    d(95, "Onix", ["G", "S"], "Union Cave, Rock Tunnel, Victory Road"),

    // ── Drowzee / Hypno ──
    d(96, "Drowzee", ["G", "S"], "Routes 11, 34, 35"),
    d(97, "Hypno", ["G", "S"], "Route 11, evolve Drowzee"),

    // ── Krabby / Kingler ──
    d(98, "Krabby", ["G", "S"], "Fishing (Olivine City, Cherrygrove)"),
    d(99, "Kingler", ["G", "S"], "Evolve Krabby"),

    // ── Voltorb / Electrode ──
    d(100, "Voltorb", ["G", "S"], "Route 10, Team Rocket HQ"),
    d(101, "Electrode", ["G", "S"], "Team Rocket HQ, evolve Voltorb"),

    // ── Exeggcute / Exeggutor ──
    d(102, "Exeggcute", ["G", "S"], "Headbutt trees (Ilex Forest, Routes 26, 27)"),
    d(103, "Exeggutor", ["G", "S"], "Evolve Exeggcute (Leaf Stone)"),

    // ── Cubone / Marowak ──
    d(104, "Cubone", ["G", "S"], "Rock Tunnel"),
    d(105, "Marowak", ["G", "S"], "Rock Tunnel, evolve Cubone"),

    // ── Hitmon trio ──
    d(106, "Hitmonlee", ["G", "S"], "Evolve Tyrogue (Atk > Def)"),
    d(107, "Hitmonchan", ["G", "S"], "Evolve Tyrogue (Def > Atk)"),

    // ── Lickitung ──
    d(108, "Lickitung", ["G", "S"], "Route 44"),

    // ── Koffing / Weezing ──
    d(109, "Koffing", ["G", "S"], "Burned Tower, Team Rocket HQ"),
    d(110, "Weezing", ["G", "S"], "Evolve Koffing"),

    // ── Rhyhorn / Rhydon ──
    d(111, "Rhyhorn", ["G", "S"], "Victory Road"),
    d(112, "Rhydon", ["G", "S"], "Evolve Rhyhorn"),

    // ── Chansey ──
    d(113, "Chansey", ["G", "S"], "Routes 13, 14, 15 (rare)"),

    // ── Tangela ──
    d(114, "Tangela", ["G", "S"], "Routes 21, 28, 44"),

    // ── Kangaskhan ──
    d(115, "Kangaskhan", ["G", "S"], "Rock Tunnel (rare)"),

    // ── Horsea / Seadra ──
    d(116, "Horsea", ["G", "S"], "Whirl Islands (Fishing)"),
    d(117, "Seadra", ["G", "S"], "Whirl Islands (Fishing), evolve Horsea"),

    // ── Goldeen / Seaking ──
    d(118, "Goldeen", ["G", "S"], "Fishing (many locations), Route 42"),
    d(119, "Seaking", ["G", "S"], "Fishing, evolve Goldeen"),

    // ── Staryu / Starmie ──
    d(120, "Staryu", ["G", "S"], "Cherrygrove City, Olivine City (Fishing, night)"),
    d(121, "Starmie", ["G", "S"], "Evolve Staryu (Water Stone)"),

    // ── Mr. Mime ──
    d(122, "Mr. Mime", ["G", "S"], "Route 21 (Kanto)"),

    // ── Scyther ──
    d(123, "Scyther", ["G", "S"], "Bug Catching Contest, National Park"),

    // ── Jynx ──
    d(124, "Jynx", ["G", "S"], "Ice Path"),

    // ── Electabuzz ──
    d(125, "Electabuzz", ["G", "S"], "Route 10 (Kanto)"),

    // ── Magmar ──
    d(126, "Magmar", ["G", "S"], "Burned Tower (rare)"),

    // ── Pinsir ──
    d(127, "Pinsir", ["G", "S"], "Bug Catching Contest, National Park"),

    // ── Tauros ──
    d(128, "Tauros", ["G", "S"], "Routes 38, 39"),

    // ── Magikarp / Gyarados ──
    d(129, "Magikarp", ["G", "S"], "Fishing (everywhere), Lake of Rage"),
    d(130, "Gyarados", ["G", "S"], "Lake of Rage (Red Gyarados), evolve Magikarp"),

    // ── Lapras ──
    d(131, "Lapras", ["G", "S"], "Union Cave B2F (Friday only)"),

    // ── Ditto ──
    d(132, "Ditto", ["G", "S"], "Routes 34, 35"),

    // ── Eevee line ──
    d(133, "Eevee", ["G", "S"], "Gift from Bill in Goldenrod City"),
    d(134, "Vaporeon", ["G", "S"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["G", "S"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["G", "S"], "Evolve Eevee (Fire Stone)"),

    // ── Porygon ──
    d(137, "Porygon", ["G", "S"], "Celadon Game Corner prize"),

    // ── Omanyte / Omastar ──
    d(138, "Omanyte", ["G", "S"], "Trade from RBY"),
    d(139, "Omastar", ["G", "S"], "Evolve Omanyte"),

    // ── Kabuto / Kabutops ──
    d(140, "Kabuto", ["G", "S"], "Trade from RBY"),
    d(141, "Kabutops", ["G", "S"], "Evolve Kabuto"),

    // ── Aerodactyl ──
    d(142, "Aerodactyl", ["G", "S"], "Trade from RBY"),

    // ── Snorlax ──
    d(143, "Snorlax", ["G", "S"], "Route 11 (Vermilion side, blocking path)"),

    // ── Articuno, Zapdos, Moltres ──
    d(144, "Articuno", ["G", "S"], "Trade from RBY"),
    d(145, "Zapdos", ["G", "S"], "Trade from RBY"),
    d(146, "Moltres", ["G", "S"], "Trade from RBY"),

    // ── Dratini line ──
    d(147, "Dratini", ["G", "S"], "Dragon's Den (Surf, Fishing), Goldenrod Game Corner"),
    d(148, "Dragonair", ["G", "S"], "Dragon's Den (Super Rod), evolve Dratini"),
    d(149, "Dragonite", ["G", "S"], "Evolve Dragonair"),

    // ── Mewtwo, Mew ──
    d(150, "Mewtwo", ["G", "S"], "Trade from RBY"),
    d(151, "Mew", ["G", "S"], "Trade (event only)"),

    // ═══════════════════════════════════════════════
    //  Generation II Pokemon
    // ═══════════════════════════════════════════════

    // ── Johto Starters ──
    d(152, "Chikorita", ["G", "S"], "Starter from Prof. Elm"),
    d(153, "Bayleef", ["G", "S"], "Evolve Chikorita"),
    d(154, "Meganium", ["G", "S"], "Evolve Bayleef"),
    d(155, "Cyndaquil", ["G", "S"], "Starter from Prof. Elm"),
    d(156, "Quilava", ["G", "S"], "Evolve Cyndaquil"),
    d(157, "Typhlosion", ["G", "S"], "Evolve Quilava"),
    d(158, "Totodile", ["G", "S"], "Starter from Prof. Elm"),
    d(159, "Croconaw", ["G", "S"], "Evolve Totodile"),
    d(160, "Feraligatr", ["G", "S"], "Evolve Croconaw"),

    // ── Sentret line ──
    d(161, "Sentret", ["G", "S"], "Routes 1, 29"),
    d(162, "Furret", ["G", "S"], "Route 1, evolve Sentret"),

    // ── Hoothoot line ──
    d(163, "Hoothoot", ["G", "S"], "Routes 1, 2, 29, 30, 31, 36, 37 (night)"),
    d(164, "Noctowl", ["G", "S"], "Routes 2, 37, 43, evolve Hoothoot"),

    // ── Ledyba line ──
    d(165, "Ledyba", ["S"], "Routes 2, 30, 31, 37 (morning)"),
    d(166, "Ledian", ["S"], "Evolve Ledyba"),

    // ── Spinarak line ──
    d(167, "Spinarak", ["G"], "Routes 2, 30, 31, 37 (night)"),
    d(168, "Ariados", ["G"], "Evolve Spinarak"),

    // ── Crobat ──
    d(169, "Crobat", ["G", "S"], "Evolve Golbat (friendship)"),

    // ── Chinchou / Lanturn ──
    d(170, "Chinchou", ["G", "S"], "Route 41 (Good Rod), New Bark Town (Super Rod)"),
    d(171, "Lanturn", ["G", "S"], "Evolve Chinchou"),

    // ── Pichu ──
    d(172, "Pichu", ["G", "S"], "Breed two Pikachu (or Pikachu + Ditto)"),

    // ── Cleffa ──
    d(173, "Cleffa", ["G", "S"], "Breed two Clefairy (or Clefairy + Ditto)"),

    // ── Igglybuff ──
    d(174, "Igglybuff", ["G", "S"], "Breed two Jigglypuff (or Jigglypuff + Ditto)"),

    // ── Togepi / Togetic ──
    d(175, "Togepi", ["G", "S"], "Mystery Egg from Mr. Pokemon (hatch)"),
    d(176, "Togetic", ["G", "S"], "Evolve Togepi (friendship)"),

    // ── Natu / Xatu ──
    d(177, "Natu", ["G", "S"], "Ruins of Alph (exterior grass)"),
    d(178, "Xatu", ["G", "S"], "Evolve Natu"),

    // ── Mareep line ──
    d(179, "Mareep", ["G", "S"], "Routes 32, 42, 43"),
    d(180, "Flaaffy", ["G", "S"], "Routes 42, 43, evolve Mareep"),
    d(181, "Ampharos", ["G", "S"], "Evolve Flaaffy"),

    // ── Bellossom ──
    d(182, "Bellossom", ["G", "S"], "Evolve Gloom (Sun Stone)"),

    // ── Marill / Azumarill ──
    d(183, "Marill", ["G", "S"], "Mt. Mortar"),
    d(184, "Azumarill", ["G", "S"], "Evolve Marill"),

    // ── Sudowoodo ──
    d(185, "Sudowoodo", ["G", "S"], "Route 36 (use SquirtBottle, one only)"),

    // ── Politoed ──
    d(186, "Politoed", ["G", "S"], "Trade Poliwhirl holding King's Rock"),

    // ── Hoppip line ──
    d(187, "Hoppip", ["G", "S"], "Routes 32, 33"),
    d(188, "Skiploom", ["G", "S"], "Route 14, evolve Hoppip"),
    d(189, "Jumpluff", ["G", "S"], "Evolve Skiploom"),

    // ── Aipom ──
    d(190, "Aipom", ["G", "S"], "Headbutt trees"),

    // ── Sunkern / Sunflora ──
    d(191, "Sunkern", ["G", "S"], "Routes 24, 25, National Park"),
    d(192, "Sunflora", ["G", "S"], "Evolve Sunkern (Sun Stone)"),

    // ── Yanma ──
    d(193, "Yanma", ["G", "S"], "Route 35 (rare)"),

    // ── Wooper / Quagsire ──
    d(194, "Wooper", ["G", "S"], "Route 32, Ruins of Alph, Union Cave (night)"),
    d(195, "Quagsire", ["G", "S"], "Routes 10, 12, 13, 26, 27, evolve Wooper"),

    // ── Espeon / Umbreon ──
    d(196, "Espeon", ["G", "S"], "Evolve Eevee (friendship, daytime)"),
    d(197, "Umbreon", ["G", "S"], "Evolve Eevee (friendship, nighttime)"),

    // ── Murkrow ──
    d(198, "Murkrow", ["G", "S"], "Routes 7, 16 (night)"),

    // ── Slowking ──
    d(199, "Slowking", ["G", "S"], "Trade Slowpoke holding King's Rock"),

    // ── Misdreavus ──
    d(200, "Misdreavus", ["G", "S"], "Mt. Silver (night)"),

    // ── Unown ──
    d(201, "Unown", ["G", "S"], "Ruins of Alph (26 forms)"),

    // ── Wobbuffet ──
    d(202, "Wobbuffet", ["G", "S"], "Dark Cave"),

    // ── Girafarig ──
    d(203, "Girafarig", ["G", "S"], "Route 43"),

    // ── Pineco / Forretress ──
    d(204, "Pineco", ["G", "S"], "Headbutt trees (Ilex Forest, Route 26)"),
    d(205, "Forretress", ["G", "S"], "Evolve Pineco"),

    // ── Dunsparce ──
    d(206, "Dunsparce", ["G", "S"], "Dark Cave (rare)"),

    // ── Gligar ──
    d(207, "Gligar", ["G"], "Route 45"),

    // ── Steelix ──
    d(208, "Steelix", ["G", "S"], "Trade Onix holding Metal Coat"),

    // ── Snubbull / Granbull ──
    d(209, "Snubbull", ["G", "S"], "Routes 34, 38"),
    d(210, "Granbull", ["G", "S"], "Evolve Snubbull"),

    // ── Qwilfish ──
    d(211, "Qwilfish", ["G", "S"], "Route 32 (Good Rod)"),

    // ── Scizor ──
    d(212, "Scizor", ["G", "S"], "Trade Scyther holding Metal Coat"),

    // ── Shuckle ──
    d(213, "Shuckle", ["G", "S"], "Gift from man in Cianwood City"),

    // ── Heracross ──
    d(214, "Heracross", ["G", "S"], "Headbutt trees (Route 33, Azalea Town)"),

    // ── Sneasel ──
    d(215, "Sneasel", ["G", "S"], "Ice Path, Mt. Silver"),

    // ── Teddiursa / Ursaring ──
    d(216, "Teddiursa", ["G"], "Route 45, Mt. Silver"),
    d(217, "Ursaring", ["G"], "Route 28, Mt. Silver, Victory Road, evolve Teddiursa"),

    // ── Slugma / Magcargo ──
    d(218, "Slugma", ["G", "S"], "Route 16, 17, 18 (Kanto)"),
    d(219, "Magcargo", ["G", "S"], "Evolve Slugma"),

    // ── Swinub / Piloswine ──
    d(220, "Swinub", ["G", "S"], "Ice Path"),
    d(221, "Piloswine", ["G", "S"], "Evolve Swinub"),

    // ── Corsola ──
    d(222, "Corsola", ["G", "S"], "Route 34 (Surf), Olivine City (Good Rod)"),

    // ── Remoraid / Octillery ──
    d(223, "Remoraid", ["G", "S"], "Route 44 (Good Rod)"),
    d(224, "Octillery", ["G", "S"], "Evolve Remoraid"),

    // ── Delibird ──
    d(225, "Delibird", ["S"], "Ice Path"),

    // ── Mantine ──
    d(226, "Mantine", ["G"], "Route 41 (Surf)"),

    // ── Skarmory ──
    d(227, "Skarmory", ["S"], "Route 45"),

    // ── Houndour / Houndoom ──
    d(228, "Houndour", ["G", "S"], "Route 7 (night, Kanto)"),
    d(229, "Houndoom", ["G", "S"], "Evolve Houndour"),

    // ── Kingdra ──
    d(230, "Kingdra", ["G", "S"], "Trade Seadra holding Dragon Scale"),

    // ── Phanpy / Donphan ──
    d(231, "Phanpy", ["S"], "Route 45"),
    d(232, "Donphan", ["S"], "Route 28, Victory Road, evolve Phanpy"),

    // ── Porygon2 ──
    d(233, "Porygon2", ["G", "S"], "Trade Porygon holding Up-Grade"),

    // ── Stantler ──
    d(234, "Stantler", ["G", "S"], "Routes 36, 37"),

    // ── Smeargle ──
    d(235, "Smeargle", ["G", "S"], "Ruins of Alph (exterior grass)"),

    // ── Tyrogue / Hitmontop ──
    d(236, "Tyrogue", ["G", "S"], "Gift from Karate King in Mt. Mortar"),
    d(237, "Hitmontop", ["G", "S"], "Evolve Tyrogue (Atk = Def)"),

    // ── Smoochum ──
    d(238, "Smoochum", ["G", "S"], "Breed Jynx"),

    // ── Elekid ──
    d(239, "Elekid", ["G", "S"], "Breed Electabuzz"),

    // ── Magby ──
    d(240, "Magby", ["G", "S"], "Breed Magmar"),

    // ── Miltank ──
    d(241, "Miltank", ["G", "S"], "Route 38, 39"),

    // ── Blissey ──
    d(242, "Blissey", ["G", "S"], "Evolve Chansey (friendship)"),

    // ── Legendary Beasts ──
    d(243, "Raikou", ["G", "S"], "Roaming Johto (after Burned Tower event)"),
    d(244, "Entei", ["G", "S"], "Roaming Johto (after Burned Tower event)"),
    d(245, "Suicune", ["G", "S"], "Roaming Johto (after Burned Tower event)"),

    // ── Tower Legendaries ──
    d(246, "Larvitar", ["G", "S"], "Mt. Silver (rare)"),
    d(247, "Pupitar", ["G", "S"], "Evolve Larvitar"),
    d(248, "Tyranitar", ["G", "S"], "Evolve Pupitar"),

    // ── Box Legendaries ──
    d(249, "Lugia", ["S"], "Whirl Islands (Lv. 40, Silver Wing required)"),
    d(250, "Ho-Oh", ["G"], "Tin Tower (Lv. 40, Rainbow Wing required)"),

    // ── Celebi ──
    d(251, "Celebi", ["G", "S"], "Event only (GS Ball)"),
  ],
};
