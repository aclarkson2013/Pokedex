import type { GameDexEntry, GameDex } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Ultra Sun & Ultra Moon — Alola Pokédex (Expanded ~403 Pokémon)
 * ══════════════════════════════════════════════════ */
export const USUM_DEX: GameDex = {
  slug: "ultra-sun-ultra-moon",
  versionTags: ["US", "UM"],
  pokemon: [
    // ── Alola Dex #001-009: Rowlet line, Pikipek line, Yungoos line ──
    d(722, "Rowlet", ["US", "UM"], "Starter from Professor Kukui"),
    d(723, "Dartrix", ["US", "UM"], "Evolve Rowlet"),
    d(724, "Decidueye", ["US", "UM"], "Evolve Dartrix"),
    d(725, "Litten", ["US", "UM"], "Starter from Professor Kukui"),
    d(726, "Torracat", ["US", "UM"], "Evolve Litten"),
    d(727, "Incineroar", ["US", "UM"], "Evolve Torracat"),
    d(728, "Popplio", ["US", "UM"], "Starter from Professor Kukui"),
    d(729, "Brionne", ["US", "UM"], "Evolve Popplio"),
    d(730, "Primarina", ["US", "UM"], "Evolve Brionne"),
    d(731, "Pikipek", ["US", "UM"], "Routes 1, 4, 5, 6"),
    d(732, "Trumbeak", ["US", "UM"], "Routes 5, 8, 11, Lush Jungle"),
    d(733, "Toucannon", ["US", "UM"], "Poni Plains, evolve Trumbeak"),
    d(734, "Yungoos", ["US", "UM"], "Routes 1, 2, 4, 6 (Day)"),
    d(735, "Gumshoos", ["US", "UM"], "Routes 10, 15, Poni Wilds (Day)"),

    // ── Rattata/Raticate (Alolan) ──
    d(19, "Rattata (Alolan)", ["US", "UM"], "Routes 1, 2, 4, 6 (Night)"),
    d(20, "Raticate (Alolan)", ["US", "UM"], "Routes 10, 15, Poni Wilds (Night)"),

    // ── Caterpie line ──
    d(10, "Caterpie", ["US", "UM"], "Routes 1, 5, Melemele Meadow"),
    d(11, "Metapod", ["US", "UM"], "Routes 1, 5, evolve Caterpie"),
    d(12, "Butterfree", ["US", "UM"], "Route 5, Melemele Meadow, evolve Metapod"),

    // ── Ledyba/Spinarak ──
    d(165, "Ledyba", ["US", "UM"], "Route 1 (Day)"),
    d(166, "Ledian", ["US", "UM"], "Evolve Ledyba"),
    d(167, "Spinarak", ["US", "UM"], "Route 1 (Night)"),
    d(168, "Ariados", ["US", "UM"], "Evolve Spinarak"),

    // ── Pichu / Pikachu / Raichu-A ──
    d(172, "Pichu", ["US", "UM"], "Route 1 (SOS)"),
    d(25, "Pikachu", ["US", "UM"], "Route 1 (SOS), evolve Pichu"),
    d(26, "Raichu (Alolan)", ["US", "UM"], "Evolve Pikachu (Thunder Stone in Alola)"),

    // ── Grubbin line ──
    d(736, "Grubbin", ["US", "UM"], "Routes 1, 4, 5, 6"),
    d(737, "Charjabug", ["US", "UM"], "Route 9, Blush Mountain, evolve Grubbin"),
    d(738, "Vikavolt", ["US", "UM"], "Evolve Charjabug (level up at Vast Poni Canyon)"),

    // ── Bonsly / Sudowoodo ──
    d(438, "Bonsly", ["US", "UM"], "Route 1 (SOS)"),
    d(185, "Sudowoodo", ["US", "UM"], "Evolve Bonsly (learn Mimic)"),

    // ── Happiny / Chansey / Blissey ──
    d(440, "Happiny", ["US", "UM"], "Route 1 (SOS)"),
    d(113, "Chansey", ["US", "UM"], "Poni Plains (SOS)"),
    d(242, "Blissey", ["US", "UM"], "Evolve Chansey (high friendship)"),

    // ── Munchlax / Snorlax ──
    d(446, "Munchlax", ["US", "UM"], "Route 1 (SOS)"),
    d(143, "Snorlax", ["US", "UM"], "Evolve Munchlax (high friendship)"),

    // ── Slowpoke / Slowbro / Slowking ──
    d(79, "Slowpoke", ["US", "UM"], "Kala'e Bay"),
    d(80, "Slowbro", ["US", "UM"], "Evolve Slowpoke"),
    d(199, "Slowking", ["US", "UM"], "Trade Slowpoke holding King's Rock"),

    // ── Wingull / Pelipper ──
    d(278, "Wingull", ["US", "UM"], "Hau'oli City, Routes 7, 8, 14, 15"),
    d(279, "Pelipper", ["US", "UM"], "Poni Wilds, evolve Wingull"),

    // ── Abra line ──
    d(63, "Abra", ["US", "UM"], "Hau'oli City, Route 2"),
    d(64, "Kadabra", ["US", "UM"], "Evolve Abra"),
    d(65, "Alakazam", ["US", "UM"], "Trade evolve Kadabra"),

    // ── Meowth-A / Persian-A ──
    d(52, "Meowth (Alolan)", ["US", "UM"], "Route 2, Hau'oli City, Malie City"),
    d(53, "Persian (Alolan)", ["US", "UM"], "Evolve Alolan Meowth (high friendship)"),

    // ── Magnemite line ──
    d(81, "Magnemite", ["US", "UM"], "Route 1, Trainer's School"),
    d(82, "Magneton", ["US", "UM"], "Evolve Magnemite"),
    d(462, "Magnezone", ["US", "UM"], "Evolve Magneton (level up at Vast Poni Canyon)"),

    // ── Grimer-A / Muk-A ──
    d(88, "Grimer (Alolan)", ["US", "UM"], "Route 1, Hau'oli City, Malie City"),
    d(89, "Muk (Alolan)", ["US", "UM"], "Evolve Alolan Grimer"),

    // ── Growlithe / Arcanine ──
    d(58, "Growlithe", ["US", "UM"], "Route 2"),
    d(59, "Arcanine", ["US", "UM"], "Evolve Growlithe (Fire Stone)"),

    // ── Drowzee / Hypno ──
    d(96, "Drowzee", ["US", "UM"], "Route 2"),
    d(97, "Hypno", ["US", "UM"], "Poni Plains, evolve Drowzee"),

    // ── Makuhita / Hariyama ──
    d(296, "Makuhita", ["US", "UM"], "Route 2"),
    d(297, "Hariyama", ["US", "UM"], "Poni Plains, evolve Makuhita"),

    // ── Smeargle ──
    d(235, "Smeargle", ["US", "UM"], "Route 2"),

    // ── Crabrawler / Crabominable ──
    d(739, "Crabrawler", ["US", "UM"], "Berry piles on many routes"),
    d(740, "Crabominable", ["US", "UM"], "Evolve Crabrawler (level up at Mount Lanakila)"),

    // ── Gastly line ──
    d(92, "Gastly", ["US", "UM"], "Hau'oli Cemetery, Memorial Hill"),
    d(93, "Haunter", ["US", "UM"], "Thrifty Megamart, evolve Gastly"),
    d(94, "Gengar", ["US", "UM"], "Trade evolve Haunter"),

    // ── Drifloon / Drifblim ──
    d(425, "Drifloon", ["US", "UM"], "Hau'oli Cemetery"),
    d(426, "Drifblim", ["US", "UM"], "Evolve Drifloon"),

    // ── Misdreavus / Mismagius ──
    d(200, "Misdreavus", ["US", "UM"], "Hau'oli Cemetery (Night)"),
    d(429, "Mismagius", ["US", "UM"], "Evolve Misdreavus (Dusk Stone)"),

    // ── Zubat / Golbat / Crobat ──
    d(41, "Zubat", ["US", "UM"], "Verdant Cavern, Diglett's Tunnel, many caves"),
    d(42, "Golbat", ["US", "UM"], "Vast Poni Canyon, evolve Zubat"),
    d(169, "Crobat", ["US", "UM"], "Evolve Golbat (high friendship)"),

    // ── Diglett-A / Dugtrio-A ──
    d(50, "Diglett (Alolan)", ["US", "UM"], "Verdant Cavern, Diglett's Tunnel"),
    d(51, "Dugtrio (Alolan)", ["US", "UM"], "Haina Desert, evolve Alolan Diglett"),

    // ── Spearow / Fearow ──
    d(21, "Spearow", ["US", "UM"], "Route 2, Route 3"),
    d(22, "Fearow", ["US", "UM"], "Route 10, evolve Spearow"),

    // ── Cuttiefly / Ribombee ──
    d(742, "Cutiefly", ["US", "UM"], "Routes 2, 3, Melemele Meadow"),
    d(743, "Ribombee", ["US", "UM"], "Poni Meadow, evolve Cutiefly"),

    // ── Petilil / Lilligant (US) / Cottonee / Whimsicott (UM) ──
    d(548, "Petilil", ["US"], "Melemele Meadow, Malie Garden"),
    d(549, "Lilligant", ["US"], "Evolve Petilil (Sun Stone)"),
    d(546, "Cottonee", ["UM"], "Melemele Meadow, Malie Garden"),
    d(547, "Whimsicott", ["UM"], "Evolve Cottonee (Sun Stone)"),

    // ── Psyduck / Golduck ──
    d(54, "Psyduck", ["US", "UM"], "Brooklet Hill, Malie Garden (Surfing)"),
    d(55, "Golduck", ["US", "UM"], "Evolve Psyduck"),

    // ── Magikarp / Gyarados ──
    d(129, "Magikarp", ["US", "UM"], "Fishing (everywhere)"),
    d(130, "Gyarados", ["US", "UM"], "Evolve Magikarp"),

    // ── Barboach / Whiscash ──
    d(339, "Barboach", ["US", "UM"], "Paniola Town, Seaward Cave (Fishing)"),
    d(340, "Whiscash", ["US", "UM"], "Evolve Barboach"),

    // ── Machop / Machoke / Machamp ──
    d(66, "Machop", ["US", "UM"], "Route 3, Vast Poni Canyon"),
    d(67, "Machoke", ["US", "UM"], "Vast Poni Canyon, evolve Machop"),
    d(68, "Machamp", ["US", "UM"], "Trade evolve Machoke"),

    // ── Roggenrola / Boldore / Gigalith ──
    d(524, "Roggenrola", ["US", "UM"], "Ten Carat Hill"),
    d(525, "Boldore", ["US", "UM"], "Vast Poni Canyon, evolve Roggenrola"),
    d(526, "Gigalith", ["US", "UM"], "Trade evolve Boldore"),

    // ── Carbink ──
    d(703, "Carbink", ["US", "UM"], "Ten Carat Hill, Vast Poni Canyon"),

    // ── Rockruff / Lycanroc ──
    d(744, "Rockruff", ["US", "UM"], "Ten Carat Hill, Route 1"),
    d(745, "Lycanroc", ["US", "UM"], "Vast Poni Canyon, evolve Rockruff (Midday/Midnight/Dusk)"),

    // ── Spinda ──
    d(327, "Spinda", ["US", "UM"], "Route 3"),

    // ── Tentacool / Tentacruel ──
    d(72, "Tentacool", ["US", "UM"], "Surfing (many routes)"),
    d(73, "Tentacruel", ["US", "UM"], "Surfing, evolve Tentacool"),

    // ── Finneon / Lumineon ──
    d(456, "Finneon", ["US", "UM"], "Fishing (Routes 7, 8, 9, 14, 15)"),
    d(457, "Lumineon", ["US", "UM"], "Evolve Finneon"),

    // ── Wishiwashi ──
    d(746, "Wishiwashi", ["US", "UM"], "Brooklet Hill (Fishing), Route 7-9"),

    // ── Luvdisc ──
    d(370, "Luvdisc", ["US", "UM"], "Route 9 (Fishing)"),

    // ── Corsola ──
    d(222, "Corsola", ["US", "UM"], "Route 9 (Fishing)"),

    // ── Mareanie / Toxapex ──
    d(747, "Mareanie", ["US", "UM"], "Route 9 (SOS from Corsola)"),
    d(748, "Toxapex", ["US", "UM"], "Evolve Mareanie"),

    // ── Shellder / Cloyster ──
    d(90, "Shellder", ["US", "UM"], "Kala'e Bay (Fishing)"),
    d(91, "Cloyster", ["US", "UM"], "Evolve Shellder (Water Stone)"),

    // ── Bagon / Shelgon / Salamence ──
    d(371, "Bagon", ["US", "UM"], "Route 3, Kala'e Bay"),
    d(372, "Shelgon", ["US", "UM"], "Route 3 (SOS), evolve Bagon"),
    d(373, "Salamence", ["US", "UM"], "Evolve Shelgon"),

    // ── Lillipup / Herdier / Stoutland ──
    d(506, "Lillipup", ["US", "UM"], "Route 4, 5, 6"),
    d(507, "Herdier", ["US", "UM"], "Paniola Ranch, evolve Lillipup"),
    d(508, "Stoutland", ["US", "UM"], "Evolve Herdier"),

    // ── Eevee / Eeveelutions ──
    d(133, "Eevee", ["US", "UM"], "Route 4, Route 6"),
    d(134, "Vaporeon", ["US", "UM"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["US", "UM"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["US", "UM"], "Evolve Eevee (Fire Stone)"),
    d(196, "Espeon", ["US", "UM"], "Evolve Eevee (high friendship, Day)"),
    d(197, "Umbreon", ["US", "UM"], "Evolve Eevee (high friendship, Night)"),
    d(470, "Leafeon", ["US", "UM"], "Evolve Eevee (level up near Moss Rock, Lush Jungle)"),
    d(471, "Glaceon", ["US", "UM"], "Evolve Eevee (level up near Ice Rock, Mount Lanakila)"),
    d(700, "Sylveon", ["US", "UM"], "Evolve Eevee (high Affection + Fairy move)"),

    // ── Mudbray / Mudsdale ──
    d(749, "Mudbray", ["US", "UM"], "Routes 4, 6, 12, Paniola Ranch"),
    d(750, "Mudsdale", ["US", "UM"], "Poni Plains, evolve Mudbray"),

    // ── Igglybuff / Jigglypuff / Wigglytuff ──
    d(174, "Igglybuff", ["US", "UM"], "Route 4 (SOS)"),
    d(39, "Jigglypuff", ["US", "UM"], "Route 4, Route 6"),
    d(40, "Wigglytuff", ["US", "UM"], "Evolve Jigglypuff (Moon Stone)"),

    // ── Tauros ──
    d(128, "Tauros", ["US", "UM"], "Paniola Ranch"),

    // ── Miltank ──
    d(241, "Miltank", ["US", "UM"], "Paniola Ranch"),

    // ── Surskit / Masquerain ──
    d(283, "Surskit", ["US", "UM"], "Brooklet Hill"),
    d(284, "Masquerain", ["US", "UM"], "Malie Garden, evolve Surskit"),

    // ── Dewpider / Araquanid ──
    d(751, "Dewpider", ["US", "UM"], "Brooklet Hill"),
    d(752, "Araquanid", ["US", "UM"], "Malie Garden, evolve Dewpider"),

    // ── Fomantis / Lurantis ──
    d(753, "Fomantis", ["US", "UM"], "Route 5, Lush Jungle"),
    d(754, "Lurantis", ["US", "UM"], "Evolve Fomantis (level up in Day)"),

    // ── Morelull / Shiinotic ──
    d(755, "Morelull", ["US", "UM"], "Lush Jungle, Brooklet Hill"),
    d(756, "Shiinotic", ["US", "UM"], "Evolve Morelull"),

    // ── Paras / Parasect ──
    d(46, "Paras", ["US", "UM"], "Lush Jungle, Route 11"),
    d(47, "Parasect", ["US", "UM"], "Evolve Paras"),

    // ── Poliwag / Poliwhirl / Poliwrath / Politoed ──
    d(60, "Poliwag", ["US", "UM"], "Brooklet Hill, Malie Garden"),
    d(61, "Poliwhirl", ["US", "UM"], "Malie Garden, evolve Poliwag"),
    d(62, "Poliwrath", ["US", "UM"], "Evolve Poliwhirl (Water Stone)"),
    d(186, "Politoed", ["US", "UM"], "Trade Poliwhirl holding King's Rock"),

    // ── Goldeen / Seaking ──
    d(118, "Goldeen", ["US", "UM"], "Brooklet Hill (Fishing)"),
    d(119, "Seaking", ["US", "UM"], "Evolve Goldeen"),

    // ── Feebas / Milotic ──
    d(349, "Feebas", ["US", "UM"], "Brooklet Hill (Fishing, bubbling spots)"),
    d(350, "Milotic", ["US", "UM"], "Evolve Feebas (high Beauty / trade with Prism Scale)"),

    // ── Alomomola ──
    d(594, "Alomomola", ["US", "UM"], "Route 7, 8, 9 (Surfing)"),

    // ── Fletchling / Fletchinder / Talonflame ──
    d(661, "Fletchling", ["US", "UM"], "Wela Volcano Park (SOS)"),
    d(662, "Fletchinder", ["US", "UM"], "Route 8, Wela Volcano Park"),
    d(663, "Talonflame", ["US", "UM"], "Evolve Fletchinder"),

    // ── Salandit / Salazzle ──
    d(757, "Salandit", ["US", "UM"], "Wela Volcano Park, Route 8"),
    d(758, "Salazzle", ["US", "UM"], "Evolve female Salandit"),

    // ── Cubone / Marowak-A ──
    d(104, "Cubone", ["US", "UM"], "Wela Volcano Park"),
    d(105, "Marowak (Alolan)", ["US", "UM"], "Evolve Cubone (level up at Night in Alola)"),

    // ── Kangaskhan ──
    d(115, "Kangaskhan", ["US", "UM"], "Wela Volcano Park (rare)"),

    // ── Magby / Magmar / Magmortar ──
    d(240, "Magby", ["US", "UM"], "Wela Volcano Park"),
    d(126, "Magmar", ["US", "UM"], "Evolve Magby"),
    d(467, "Magmortar", ["US", "UM"], "Trade Magmar holding Magmarizer"),

    // ── Stufful / Bewear ──
    d(759, "Stufful", ["US", "UM"], "Route 8, Akala Outskirts"),
    d(760, "Bewear", ["US", "UM"], "Poni Gauntlet, evolve Stufful"),

    // ── Bounsweet / Steenee / Tsareena ──
    d(761, "Bounsweet", ["US", "UM"], "Lush Jungle"),
    d(762, "Steenee", ["US", "UM"], "Evolve Bounsweet"),
    d(763, "Tsareena", ["US", "UM"], "Evolve Steenee (level up with Stomp)"),

    // ── Comfey ──
    d(764, "Comfey", ["US", "UM"], "Lush Jungle, Poni Meadow"),

    // ── Pinsir (US) / Oranguru (UM) / Passimian (US) ──
    d(127, "Pinsir", ["US"], "Route 5 (SOS from Caterpie)"),
    d(765, "Oranguru", ["UM"], "Lush Jungle"),
    d(766, "Passimian", ["US"], "Lush Jungle"),

    // ── Goomy / Sliggoo / Goodra ──
    d(704, "Goomy", ["US", "UM"], "Route 17 (Rain), Lush Jungle (SOS)"),
    d(705, "Sliggoo", ["US", "UM"], "Evolve Goomy"),
    d(706, "Goodra", ["US", "UM"], "Evolve Sliggoo (level 50+ in Rain)"),

    // ── Castform ──
    d(351, "Castform", ["US", "UM"], "Route 17 (SOS with rain)"),

    // ── Wimpod / Golisopod ──
    d(767, "Wimpod", ["US", "UM"], "Route 8"),
    d(768, "Golisopod", ["US", "UM"], "Evolve Wimpod"),

    // ── Staryu / Starmie ──
    d(120, "Staryu", ["US", "UM"], "Route 7 (Fishing)"),
    d(121, "Starmie", ["US", "UM"], "Evolve Staryu (Water Stone)"),

    // ── Sandygast / Palossand ──
    d(769, "Sandygast", ["US", "UM"], "Hano Beach, Route 15"),
    d(770, "Palossand", ["US", "UM"], "Evolve Sandygast"),

    // ── Omanyte / Omastar ──
    d(138, "Omanyte", ["US", "UM"], "Revive Helix Fossil"),
    d(139, "Omastar", ["US", "UM"], "Evolve Omanyte"),

    // ── Kabuto / Kabutops ──
    d(140, "Kabuto", ["US", "UM"], "Revive Dome Fossil"),
    d(141, "Kabutops", ["US", "UM"], "Evolve Kabuto"),

    // ── Lileep / Cradily ──
    d(345, "Lileep", ["US", "UM"], "Revive Root Fossil"),
    d(346, "Cradily", ["US", "UM"], "Evolve Lileep"),

    // ── Anorith / Armaldo ──
    d(347, "Anorith", ["US", "UM"], "Revive Claw Fossil"),
    d(348, "Armaldo", ["US", "UM"], "Evolve Anorith"),

    // ── Cranidos / Rampardos ──
    d(408, "Cranidos", ["US", "UM"], "Revive Skull Fossil"),
    d(409, "Rampardos", ["US", "UM"], "Evolve Cranidos"),

    // ── Shieldon / Bastiodon ──
    d(410, "Shieldon", ["US", "UM"], "Revive Armor Fossil"),
    d(411, "Bastiodon", ["US", "UM"], "Evolve Shieldon"),

    // ── Tirtouga / Carracosta ──
    d(564, "Tirtouga", ["US", "UM"], "Revive Cover Fossil"),
    d(565, "Carracosta", ["US", "UM"], "Evolve Tirtouga"),

    // ── Archen / Archeops ──
    d(566, "Archen", ["US", "UM"], "Revive Plume Fossil"),
    d(567, "Archeops", ["US", "UM"], "Evolve Archen"),

    // ── Tyrunt / Tyrantrum ──
    d(696, "Tyrunt", ["US", "UM"], "Revive Jaw Fossil"),
    d(697, "Tyrantrum", ["US", "UM"], "Evolve Tyrunt (Day)"),

    // ── Amaura / Aurorus ──
    d(698, "Amaura", ["US", "UM"], "Revive Sail Fossil"),
    d(699, "Aurorus", ["US", "UM"], "Evolve Amaura (Night)"),

    // ── Aerodactyl ──
    d(142, "Aerodactyl", ["US", "UM"], "Revive Old Amber"),

    // ── Larvitar / Pupitar / Tyranitar ──
    d(246, "Larvitar", ["US", "UM"], "Diglett's Tunnel"),
    d(247, "Pupitar", ["US", "UM"], "Evolve Larvitar"),
    d(248, "Tyranitar", ["US", "UM"], "Evolve Pupitar"),

    // ── Phantump / Trevenant ──
    d(708, "Phantump", ["US", "UM"], "Memorial Hill"),
    d(709, "Trevenant", ["US", "UM"], "Trade evolve Phantump"),

    // ── Nosepass / Probopass ──
    d(299, "Nosepass", ["US", "UM"], "Akala Outskirts"),
    d(476, "Probopass", ["US", "UM"], "Evolve Nosepass (level up at Vast Poni Canyon)"),

    // ── Pyukumuku ──
    d(771, "Pyukumuku", ["US", "UM"], "Hano Beach, Route 7"),

    // ── Chinchou / Lanturn ──
    d(170, "Chinchou", ["US", "UM"], "Route 8 (Fishing)"),
    d(171, "Lanturn", ["US", "UM"], "Evolve Chinchou"),

    // ── Type: Null / Silvally ──
    d(772, "Type: Null", ["US", "UM"], "Gift from Gladion (post-game)"),
    d(773, "Silvally", ["US", "UM"], "Evolve Type: Null (high friendship)"),

    // ── Zorua / Zoroark ──
    d(570, "Zorua", ["US", "UM"], "Trainer's School (gift from Ilima)"),
    d(571, "Zoroark", ["US", "UM"], "Evolve Zorua"),

    // ── Vulpix-A / Ninetales-A (US) ──
    d(37, "Vulpix (Alolan)", ["US"], "Tapu Village, Mount Lanakila"),
    d(38, "Ninetales (Alolan)", ["US"], "Evolve Alolan Vulpix (Ice Stone)"),

    // ── Sandshrew-A / Sandslash-A (UM) ──
    d(27, "Sandshrew (Alolan)", ["UM"], "Tapu Village, Mount Lanakila"),
    d(28, "Sandslash (Alolan)", ["UM"], "Evolve Alolan Sandshrew (Ice Stone)"),

    // ── Vanillite / Vanillish / Vanilluxe ──
    d(582, "Vanillite", ["US", "UM"], "Tapu Village"),
    d(583, "Vanillish", ["US", "UM"], "Mount Lanakila, evolve Vanillite"),
    d(584, "Vanilluxe", ["US", "UM"], "Evolve Vanillish"),

    // ── Snubbull / Granbull ──
    d(209, "Snubbull", ["US", "UM"], "Route 2 (SOS)"),
    d(210, "Granbull", ["US", "UM"], "Poni Wilds, evolve Snubbull"),

    // ── Shellos / Gastrodon ──
    d(422, "Shellos", ["US", "UM"], "Route 7, Route 8 (Surfing)"),
    d(423, "Gastrodon", ["US", "UM"], "Poni Wilds, evolve Shellos"),

    // ── Relicanth ──
    d(369, "Relicanth", ["US", "UM"], "Poni Breaker Coast (Fishing)"),

    // ── Dhelmise ──
    d(781, "Dhelmise", ["US", "UM"], "Seafolk Village (Fishing, rare)"),

    // ── Carvanha / Sharpedo ──
    d(318, "Carvanha", ["US", "UM"], "Route 15 (Fishing)"),
    d(319, "Sharpedo", ["US", "UM"], "Poni Breaker Coast, evolve Carvanha"),

    // ── Wailmer / Wailord ──
    d(320, "Wailmer", ["US", "UM"], "Route 14, Route 15 (Surfing)"),
    d(321, "Wailord", ["US", "UM"], "Evolve Wailmer"),

    // ── Lapras ──
    d(131, "Lapras", ["US", "UM"], "Poni Wilds (Surfing, rare)"),

    // ── Exeggcute / Exeggutor-A ──
    d(102, "Exeggcute", ["US", "UM"], "Route 1 (SOS from Crabrawler)"),
    d(103, "Exeggutor (Alolan)", ["US", "UM"], "Exeggutor Island"),

    // ── Geodude-A / Graveler-A / Golem-A ──
    d(74, "Geodude (Alolan)", ["US", "UM"], "Route 12, Mount Hokulani"),
    d(75, "Graveler (Alolan)", ["US", "UM"], "Route 17, evolve Alolan Geodude"),
    d(76, "Golem (Alolan)", ["US", "UM"], "Trade evolve Alolan Graveler"),

    // ── Torkoal ──
    d(324, "Torkoal", ["US", "UM"], "Route 12"),

    // ── Elekid / Electabuzz / Electivire ──
    d(239, "Elekid", ["US", "UM"], "Route 12"),
    d(125, "Electabuzz", ["US", "UM"], "Evolve Elekid"),
    d(466, "Electivire", ["US", "UM"], "Trade Electabuzz holding Electirizer"),

    // ── Togedemaru ──
    d(777, "Togedemaru", ["US", "UM"], "Blush Mountain"),

    // ── Skarmory ──
    d(227, "Skarmory", ["US", "UM"], "Route 10, Mount Hokulani"),

    // ── Ditto ──
    d(132, "Ditto", ["US", "UM"], "Mount Hokulani, Konikoni City"),

    // ── Cleffa / Clefairy / Clefable ──
    d(173, "Cleffa", ["US", "UM"], "Mount Hokulani (SOS)"),
    d(35, "Clefairy", ["US", "UM"], "Mount Hokulani"),
    d(36, "Clefable", ["US", "UM"], "Evolve Clefairy (Moon Stone)"),

    // ── Minior ──
    d(774, "Minior", ["US", "UM"], "Mount Hokulani"),

    // ── Beldum / Metang / Metagross ──
    d(374, "Beldum", ["US", "UM"], "Mount Hokulani"),
    d(375, "Metang", ["US", "UM"], "Mount Hokulani (SOS), evolve Beldum"),
    d(376, "Metagross", ["US", "UM"], "Evolve Metang"),

    // ── Porygon / Porygon2 / Porygon-Z ──
    d(137, "Porygon", ["US", "UM"], "Route 15 (gift from Aether employee)"),
    d(233, "Porygon2", ["US", "UM"], "Trade Porygon holding Up-Grade"),
    d(474, "Porygon-Z", ["US", "UM"], "Trade Porygon2 holding Dubious Disc"),

    // ── Pancham / Pangoro ──
    d(674, "Pancham", ["US", "UM"], "Route 10, Route 11"),
    d(675, "Pangoro", ["US", "UM"], "Evolve Pancham (level 32+ with Dark type in party)"),

    // ── Komala ──
    d(775, "Komala", ["US", "UM"], "Route 11"),

    // ── Torchic / Combusken / Blaziken (new in USUM) ──
    d(255, "Torchic", ["US", "UM"], "Route 12 (Island Scan: Sunday)"),
    d(256, "Combusken", ["US", "UM"], "Evolve Torchic"),
    d(257, "Blaziken", ["US", "UM"], "Evolve Combusken"),

    // ── Turtonator (US) / Drampa (UM) ──
    d(776, "Turtonator", ["US"], "Blush Mountain"),
    d(780, "Drampa", ["UM"], "Mount Lanakila"),

    // ── Houndour / Houndoom ──
    d(228, "Houndour", ["US", "UM"], "Route 12 (Night SOS)"),
    d(229, "Houndoom", ["US", "UM"], "Evolve Houndour"),

    // ── Dedenne ──
    d(702, "Dedenne", ["US", "UM"], "Blush Mountain"),

    // ── Oricorio ──
    d(741, "Oricorio", ["US", "UM"], "Melemele Meadow (styles change with Nectar)"),

    // ── Murkrow / Honchkrow ──
    d(198, "Murkrow", ["US", "UM"], "Route 10 (Night)"),
    d(430, "Honchkrow", ["US", "UM"], "Evolve Murkrow (Dusk Stone)"),

    // ── Riolu / Lucario ──
    d(447, "Riolu", ["US", "UM"], "Poni Grove"),
    d(448, "Lucario", ["US", "UM"], "Evolve Riolu (high friendship, Day)"),

    // ── Dratini / Dragonair / Dragonite ──
    d(147, "Dratini", ["US", "UM"], "Poni Gauntlet (Fishing)"),
    d(148, "Dragonair", ["US", "UM"], "Poni Gauntlet (Fishing), evolve Dratini"),
    d(149, "Dragonite", ["US", "UM"], "Evolve Dragonair"),

    // ── Mareep / Flaaffy / Ampharos ──
    d(179, "Mareep", ["US", "UM"], "Poni Plains (SOS)"),
    d(180, "Flaaffy", ["US", "UM"], "Poni Plains, evolve Mareep"),
    d(181, "Ampharos", ["US", "UM"], "Evolve Flaaffy"),

    // ── Mankey / Primeape ──
    d(56, "Mankey", ["US", "UM"], "Route 3"),
    d(57, "Primeape", ["US", "UM"], "Evolve Mankey"),

    // ── Delibird ──
    d(225, "Delibird", ["US", "UM"], "Route 3"),

    // ── Hawlucha ──
    d(701, "Hawlucha", ["US", "UM"], "Route 3"),

    // ── Oricorio (already listed) — Rufflet / Braviary (US) ──
    d(627, "Rufflet", ["US"], "Route 3"),
    d(628, "Braviary", ["US"], "Poni Plains, evolve Rufflet"),

    // ── Vullaby / Mandibuzz (UM) ──
    d(629, "Vullaby", ["UM"], "Route 3"),
    d(630, "Mandibuzz", ["UM"], "Poni Plains, evolve Vullaby"),

    // ── Inkay / Malamar ──
    d(686, "Inkay", ["US", "UM"], "Route 1 (SOS)"),
    d(687, "Malamar", ["US", "UM"], "Evolve Inkay (level 30+ while holding console upside down)"),

    // ── Snorunt / Glalie / Froslass ──
    d(361, "Snorunt", ["US", "UM"], "Mount Lanakila, Tapu Village"),
    d(362, "Glalie", ["US", "UM"], "Evolve Snorunt"),
    d(478, "Froslass", ["US", "UM"], "Evolve female Snorunt (Dawn Stone)"),

    // ── Sneasel / Weavile ──
    d(215, "Sneasel", ["US", "UM"], "Mount Lanakila"),
    d(461, "Weavile", ["US", "UM"], "Evolve Sneasel (level up at Night with Razor Claw)"),

    // ── Absol ──
    d(359, "Absol", ["US", "UM"], "Mount Lanakila, Tapu Village"),

    // ── Sandile / Krokorok / Krookodile ──
    d(551, "Sandile", ["US", "UM"], "Haina Desert"),
    d(552, "Krokorok", ["US", "UM"], "Evolve Sandile"),
    d(553, "Krookodile", ["US", "UM"], "Evolve Krokorok"),

    // ── Trapinch / Vibrava / Flygon ──
    d(328, "Trapinch", ["US", "UM"], "Haina Desert"),
    d(329, "Vibrava", ["US", "UM"], "Evolve Trapinch"),
    d(330, "Flygon", ["US", "UM"], "Evolve Vibrava"),

    // ── Gible / Gabite / Garchomp ──
    d(443, "Gible", ["US", "UM"], "Haina Desert (SOS from Trapinch)"),
    d(444, "Gabite", ["US", "UM"], "Evolve Gible"),
    d(445, "Garchomp", ["US", "UM"], "Evolve Gabite"),

    // ── Baltoy / Claydol ──
    d(343, "Baltoy", ["US", "UM"], "Haina Desert"),
    d(344, "Claydol", ["US", "UM"], "Evolve Baltoy"),

    // ── Golett / Golurk ──
    d(622, "Golett", ["US", "UM"], "Haina Desert"),
    d(623, "Golurk", ["US", "UM"], "Evolve Golett"),

    // ── Klefki ──
    d(707, "Klefki", ["US", "UM"], "Thrifty Megamart, Mount Hokulani"),

    // ── Mimikyu ──
    d(778, "Mimikyu", ["US", "UM"], "Thrifty Megamart (Abandoned)"),

    // ── Shuppet / Banette ──
    d(353, "Shuppet", ["US", "UM"], "Route 14 (Night)"),
    d(354, "Banette", ["US", "UM"], "Thrifty Megamart (SOS), evolve Shuppet"),

    // ── Frillish / Jellicent ──
    d(592, "Frillish", ["US", "UM"], "Route 14 (Surfing)"),
    d(593, "Jellicent", ["US", "UM"], "Evolve Frillish"),

    // ── Bruxish ──
    d(779, "Bruxish", ["US", "UM"], "Route 13 (Fishing), Route 14"),

    // ── Sableye ──
    d(302, "Sableye", ["US", "UM"], "Ten Carat Hill (SOS from Carbink)"),

    // ── Litwick / Lampent / Chandelure ──
    d(607, "Litwick", ["US", "UM"], "Memorial Hill"),
    d(608, "Lampent", ["US", "UM"], "Evolve Litwick"),
    d(609, "Chandelure", ["US", "UM"], "Evolve Lampent (Dusk Stone)"),

    // ── Natu / Xatu ──
    d(177, "Natu", ["US", "UM"], "Akala Outskirts"),
    d(178, "Xatu", ["US", "UM"], "Evolve Natu"),

    // ── Emolga ──
    d(587, "Emolga", ["US", "UM"], "Blush Mountain"),

    // ── Scyther / Scizor ──
    d(123, "Scyther", ["US", "UM"], "Route 17 (SOS)"),
    d(212, "Scizor", ["US", "UM"], "Trade Scyther holding Metal Coat"),

    // ── Heracross ──
    d(214, "Heracross", ["US", "UM"], "Poni Grove"),

    // ── Aipom / Ambipom ──
    d(190, "Aipom", ["US", "UM"], "Route 2 (SOS)"),
    d(424, "Ambipom", ["US", "UM"], "Evolve Aipom (learn Double Hit)"),

    // ── Chandelure already listed — Litwick line covered above

    // ── Garbodor line ──
    d(568, "Trubbish", ["US", "UM"], "Malie City (Outer Cape)"),
    d(569, "Garbodor", ["US", "UM"], "Evolve Trubbish"),

    // ── Minccino / Cinccino ──
    d(572, "Minccino", ["US", "UM"], "Route 3 (SOS from Bonsly)"),
    d(573, "Cinccino", ["US", "UM"], "Evolve Minccino (Shiny Stone)"),

    // ── Pineco / Forretress ──
    d(204, "Pineco", ["US", "UM"], "Route 10"),
    d(205, "Forretress", ["US", "UM"], "Evolve Pineco"),

    // ── Skrelp / Dragalge (UM) ──
    d(690, "Skrelp", ["UM"], "Route 14 (Fishing)"),
    d(691, "Dragalge", ["UM"], "Evolve Skrelp"),

    // ── Clauncher / Clawitzer (US) ──
    d(692, "Clauncher", ["US"], "Route 14 (Fishing)"),
    d(693, "Clawitzer", ["US"], "Evolve Clauncher"),

    // ── Shelmet / Accelgor & Karrablast / Escavalier ──
    d(616, "Shelmet", ["US", "UM"], "Route 3 (SOS)"),
    d(617, "Accelgor", ["US", "UM"], "Trade Shelmet for Karrablast"),
    d(588, "Karrablast", ["US", "UM"], "Route 3 (SOS)"),
    d(589, "Escavalier", ["US", "UM"], "Trade Karrablast for Shelmet"),

    // ── Corphish / Crawdaunt ──
    d(341, "Corphish", ["US", "UM"], "Vast Poni Canyon (Fishing)"),
    d(342, "Crawdaunt", ["US", "UM"], "Evolve Corphish"),

    // ── Mienfoo / Mienshao ──
    d(619, "Mienfoo", ["US", "UM"], "Vast Poni Canyon"),
    d(620, "Mienshao", ["US", "UM"], "Evolve Mienfoo"),

    // ── Jangmo-o / Hakamo-o / Kommo-o ──
    d(782, "Jangmo-o", ["US", "UM"], "Vast Poni Canyon"),
    d(783, "Hakamo-o", ["US", "UM"], "Vast Poni Canyon, evolve Jangmo-o"),
    d(784, "Kommo-o", ["US", "UM"], "Evolve Hakamo-o"),

    // ── Noibat / Noivern ──
    d(714, "Noibat", ["US", "UM"], "Verdant Cavern (SOS)"),
    d(715, "Noivern", ["US", "UM"], "Evolve Noibat"),

    // ── Litleo / Pyroar ──
    d(667, "Litleo", ["US", "UM"], "Route 5 (SOS)"),
    d(668, "Pyroar", ["US", "UM"], "Evolve Litleo"),

    // ── Trevenant (covered with Phantump)
    // ── Crabominable (covered with Crabrawler)

    // ── Tapu guardians ──
    d(785, "Tapu Koko", ["US", "UM"], "Ruins of Conflict (post-game)"),
    d(786, "Tapu Lele", ["US", "UM"], "Ruins of Life (post-game)"),
    d(787, "Tapu Bulu", ["US", "UM"], "Ruins of Abundance (post-game)"),
    d(788, "Tapu Fini", ["US", "UM"], "Ruins of Hope (post-game)"),

    // ── Cosmog / Cosmoem / Solgaleo / Lunala ──
    d(789, "Cosmog", ["US", "UM"], "Lake of the Sunne/Moone (post-game)"),
    d(790, "Cosmoem", ["US", "UM"], "Evolve Cosmog"),
    d(791, "Solgaleo", ["US"], "Altar of the Sunne (story)"),
    d(792, "Lunala", ["UM"], "Altar of the Moone (story)"),

    // ── Necrozma & forms ──
    d(800, "Necrozma", ["US", "UM"], "Mount Lanakila (post-game encounter)"),

    // ── Nihilego ──
    d(793, "Nihilego", ["US", "UM"], "Ultra Space (Wormhole)"),

    // ── Buzzwole (US) / Pheromosa (UM) ──
    d(794, "Buzzwole", ["US"], "Ultra Space (Wormhole)"),
    d(795, "Pheromosa", ["UM"], "Ultra Space (Wormhole)"),

    // ── Xurkitree ──
    d(796, "Xurkitree", ["US", "UM"], "Ultra Space (Wormhole)"),

    // ── Celesteela (UM) / Kartana (US) ──
    d(797, "Celesteela", ["UM"], "Ultra Space (Wormhole)"),
    d(798, "Kartana", ["US"], "Ultra Space (Wormhole)"),

    // ── Guzzlord ──
    d(799, "Guzzlord", ["US", "UM"], "Ultra Space (Wormhole)"),

    // ── New UBs in USUM ──
    d(803, "Poipole", ["US", "UM"], "Gift from Ultra Recon Squad"),
    d(804, "Naganadel", ["US", "UM"], "Evolve Poipole (level up with Dragon Pulse)"),
    d(805, "Stakataka", ["US"], "Ultra Space (Wormhole)"),
    d(806, "Blacephalon", ["UM"], "Ultra Space (Wormhole)"),

    // ── Zygarde ──
    d(718, "Zygarde", ["US", "UM"], "Assemble Zygarde Cells (Route 16 lab)"),

    // ── Legendary Pokémon via Ultra Wormholes ──
    d(150, "Mewtwo", ["US", "UM"], "Ultra Space Wormhole"),
    d(243, "Raikou", ["US"], "Ultra Space Wormhole"),
    d(244, "Entei", ["UM"], "Ultra Space Wormhole"),
    d(245, "Suicune", ["US", "UM"], "Ultra Space Wormhole (Raikou + Entei required)"),
    d(249, "Lugia", ["UM"], "Ultra Space Wormhole"),
    d(250, "Ho-Oh", ["US"], "Ultra Space Wormhole"),
    d(380, "Latias", ["UM"], "Ultra Space Wormhole"),
    d(381, "Latios", ["US"], "Ultra Space Wormhole"),
    d(382, "Kyogre", ["UM"], "Ultra Space Wormhole"),
    d(383, "Groudon", ["US"], "Ultra Space Wormhole"),
    d(384, "Rayquaza", ["US", "UM"], "Ultra Space Wormhole (Groudon + Kyogre required)"),
    d(377, "Regirock", ["US", "UM"], "Ultra Space Wormhole"),
    d(378, "Regice", ["US", "UM"], "Ultra Space Wormhole"),
    d(379, "Registeel", ["US", "UM"], "Ultra Space Wormhole"),
    d(480, "Uxie", ["US", "UM"], "Ultra Space Wormhole"),
    d(481, "Mesprit", ["US", "UM"], "Ultra Space Wormhole"),
    d(482, "Azelf", ["US", "UM"], "Ultra Space Wormhole"),
    d(483, "Dialga", ["US"], "Ultra Space Wormhole"),
    d(484, "Palkia", ["UM"], "Ultra Space Wormhole"),
    d(487, "Giratina", ["US", "UM"], "Ultra Space Wormhole (Dialga + Palkia required)"),
    d(485, "Heatran", ["US"], "Ultra Space Wormhole"),
    d(486, "Regigigas", ["UM"], "Ultra Space Wormhole"),
    d(488, "Cresselia", ["US", "UM"], "Ultra Space Wormhole"),
    d(638, "Cobalion", ["US", "UM"], "Ultra Space Wormhole"),
    d(639, "Terrakion", ["US", "UM"], "Ultra Space Wormhole"),
    d(640, "Virizion", ["US", "UM"], "Ultra Space Wormhole"),
    d(641, "Tornadus", ["US"], "Ultra Space Wormhole"),
    d(642, "Thundurus", ["UM"], "Ultra Space Wormhole"),
    d(645, "Landorus", ["US", "UM"], "Ultra Space Wormhole (Tornadus + Thundurus required)"),
    d(643, "Reshiram", ["US"], "Ultra Space Wormhole"),
    d(644, "Zekrom", ["UM"], "Ultra Space Wormhole"),
    d(646, "Kyurem", ["US", "UM"], "Ultra Space Wormhole (Reshiram + Zekrom required)"),
    d(716, "Xerneas", ["US"], "Ultra Space Wormhole"),
    d(717, "Yveltal", ["UM"], "Ultra Space Wormhole"),

    // ── Magearna (QR code) ──
    d(801, "Magearna", ["US", "UM"], "QR code gift at Antiquities of the Ages shop"),

    // ── Additional Gen 1-6 Pokémon in the expanded USUM Alola Dex ──
    d(23, "Ekans", ["US", "UM"], "Route 2 (SOS)"),
    d(24, "Arbok", ["US", "UM"], "Evolve Ekans"),
    d(108, "Lickitung", ["US", "UM"], "Route 6 (SOS)"),
    d(463, "Lickilicky", ["US", "UM"], "Evolve Lickitung (learn Rollout)"),
    d(440, "Happiny", ["US", "UM"], "Route 1 (SOS)"),
    d(155, "Cyndaquil", ["US", "UM"], "Island Scan (Melemele, Tuesday)"),
    d(156, "Quilava", ["US", "UM"], "Evolve Cyndaquil"),
    d(157, "Typhlosion", ["US", "UM"], "Evolve Quilava"),
    d(158, "Totodile", ["US", "UM"], "Island Scan (Melemele, Monday)"),
    d(159, "Croconaw", ["US", "UM"], "Evolve Totodile"),
    d(160, "Feraligatr", ["US", "UM"], "Evolve Croconaw"),
    d(152, "Chikorita", ["US", "UM"], "Island Scan (Melemele, Friday)"),
    d(153, "Bayleef", ["US", "UM"], "Evolve Chikorita"),
    d(154, "Meganium", ["US", "UM"], "Evolve Bayleef"),
    d(495, "Snivy", ["US", "UM"], "Island Scan (Melemele, Sunday)"),
    d(496, "Servine", ["US", "UM"], "Evolve Snivy"),
    d(497, "Serperior", ["US", "UM"], "Evolve Servine"),
    d(501, "Oshawott", ["US", "UM"], "Island Scan (Melemele, Saturday)"),
    d(502, "Dewott", ["US", "UM"], "Evolve Oshawott"),
    d(503, "Samurott", ["US", "UM"], "Evolve Dewott"),
    d(498, "Tepig", ["US", "UM"], "Island Scan (Melemele, Thursday)"),
    d(499, "Pignite", ["US", "UM"], "Evolve Tepig"),
    d(500, "Emboar", ["US", "UM"], "Evolve Pignite"),
    d(387, "Turtwig", ["US", "UM"], "Island Scan (Melemele, Wednesday)"),
    d(388, "Grotle", ["US", "UM"], "Evolve Turtwig"),
    d(389, "Torterra", ["US", "UM"], "Evolve Grotle"),
    d(390, "Chimchar", ["US", "UM"], "Island Scan (Akala, Sunday)"),
    d(391, "Monferno", ["US", "UM"], "Evolve Chimchar"),
    d(392, "Infernape", ["US", "UM"], "Evolve Monferno"),
    d(393, "Piplup", ["US", "UM"], "Island Scan (Akala, Saturday)"),
    d(394, "Prinplup", ["US", "UM"], "Evolve Piplup"),
    d(395, "Empoleon", ["US", "UM"], "Evolve Prinplup"),
    d(650, "Chespin", ["US", "UM"], "Island Scan (Akala, Thursday)"),
    d(651, "Quilladin", ["US", "UM"], "Evolve Chespin"),
    d(652, "Chesnaught", ["US", "UM"], "Evolve Quilladin"),
    d(653, "Fennekin", ["US", "UM"], "Island Scan (Akala, Wednesday)"),
    d(654, "Braixen", ["US", "UM"], "Evolve Fennekin"),
    d(655, "Delphox", ["US", "UM"], "Evolve Braixen"),
    d(656, "Froakie", ["US", "UM"], "Island Scan (Akala, Friday)"),
    d(657, "Frogadier", ["US", "UM"], "Evolve Froakie"),
    d(658, "Greninja", ["US", "UM"], "Evolve Frogadier"),

    // ── More wild Pokémon in USUM Alola Dex ──
    d(206, "Dunsparce", ["US", "UM"], "Route 2 (SOS)"),
    d(676, "Furfrou", ["US", "UM"], "Route 2"),
    d(559, "Scraggy", ["US", "UM"], "Route 16 (Night)"),
    d(560, "Scrafty", ["US", "UM"], "Evolve Scraggy"),
    d(236, "Tyrogue", ["US", "UM"], "Poni Plains (SOS from Primeape)"),
    d(106, "Hitmonlee", ["US", "UM"], "Evolve Tyrogue (Atk > Def)"),
    d(107, "Hitmonchan", ["US", "UM"], "Evolve Tyrogue (Def > Atk)"),
    d(237, "Hitmontop", ["US", "UM"], "Evolve Tyrogue (Atk = Def)"),
    d(704, "Goomy", ["US", "UM"], "Route 17 (Rain SOS)"),
    d(625, "Bisharp", ["US", "UM"], "Evolve Pawniard"),
    d(624, "Pawniard", ["US", "UM"], "Route 17"),
    d(703, "Carbink", ["US", "UM"], "Ten Carat Hill, Vast Poni Canyon"),
    d(539, "Sawk", ["US", "UM"], "Route 11"),
    d(538, "Throh", ["US", "UM"], "Route 11"),
    d(559, "Scraggy", ["US", "UM"], "Route 16"),
    d(127, "Pinsir", ["US"], "Poni Plains"),
    d(214, "Heracross", ["US", "UM"], "Poni Grove"),

    // ── Tynamo / Eelektrik / Eelektross ──
    d(602, "Tynamo", ["US", "UM"], "Route 12 (SOS)"),
    d(603, "Eelektrik", ["US", "UM"], "Evolve Tynamo"),
    d(604, "Eelektross", ["US", "UM"], "Evolve Eelektrik (Thunder Stone)"),

    // ── Tropius ──
    d(357, "Tropius", ["US", "UM"], "Exeggutor Island"),

    // ── Girafarig ──
    d(203, "Girafarig", ["US", "UM"], "Haina Desert"),

    // ── Clamperl / Huntail / Gorebyss ──
    d(366, "Clamperl", ["US", "UM"], "Route 14 (Fishing)"),
    d(367, "Huntail", ["US", "UM"], "Trade Clamperl holding Deep Sea Tooth"),
    d(368, "Gorebyss", ["US", "UM"], "Trade Clamperl holding Deep Sea Scale"),

    // ── Basculin ──
    d(550, "Basculin", ["US", "UM"], "Malie Garden (Fishing)"),

    // ── Chansey / Blissey (already listed above)

    // ── Elgyem / Beheeyem ──
    d(605, "Elgyem", ["US", "UM"], "Mount Hokulani"),
    d(606, "Beheeyem", ["US", "UM"], "Evolve Elgyem"),

    // ── Chubbykins Nebby line covered above

    // ── Magikarp / Gyarados covered above

    // ── Bruxish covered above

    // ── Wooper / Quagsire ──
    d(194, "Wooper", ["US", "UM"], "Seaward Cave (Surfing)"),
    d(195, "Quagsire", ["US", "UM"], "Evolve Wooper"),

    // ── Seel / Dewgong ──
    d(86, "Seel", ["US", "UM"], "Kala'e Bay (Surfing)"),
    d(87, "Dewgong", ["US", "UM"], "Evolve Seel"),
  ],
};
