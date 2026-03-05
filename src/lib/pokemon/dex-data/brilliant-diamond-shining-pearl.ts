import type { GameDexEntry, GameDex } from "../game-dex";

/* ── Helper ─────────────────────────────────────── */
const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Brilliant Diamond & Shining Pearl — Sinnoh Pokédex
 *  Includes the 151 Sinnoh Dex Pokemon plus Grand Underground
 *  Hideaway extras available after National Dex.
 * ══════════════════════════════════════════════════ */
export const BDSP_DEX: GameDex = {
  slug: "brilliant-diamond-shining-pearl",
  versionTags: ["BD", "SP"],
  pokemon: [
    // ── Starters ──────────────────────────────────
    // #001-003  Turtwig line
    d(387, "Turtwig", ["BD", "SP"], "Starter from Prof. Rowan"),
    d(388, "Grotle", ["BD", "SP"], "Evolve Turtwig"),
    d(389, "Torterra", ["BD", "SP"], "Evolve Grotle"),

    // #004-006  Chimchar line
    d(390, "Chimchar", ["BD", "SP"], "Starter from Prof. Rowan"),
    d(391, "Monferno", ["BD", "SP"], "Evolve Chimchar"),
    d(392, "Infernape", ["BD", "SP"], "Evolve Monferno"),

    // #007-009  Piplup line
    d(393, "Piplup", ["BD", "SP"], "Starter from Prof. Rowan"),
    d(394, "Prinplup", ["BD", "SP"], "Evolve Piplup"),
    d(395, "Empoleon", ["BD", "SP"], "Evolve Prinplup"),

    // ── Early-game Pokemon ────────────────────────
    // #010-012  Starly line
    d(396, "Starly", ["BD", "SP"], "Routes 201, 202, 203, 204, Lake Verity"),
    d(397, "Staravia", ["BD", "SP"], "Routes 209, 212, evolve Starly"),
    d(398, "Staraptor", ["BD", "SP"], "Evolve Staravia"),

    // #013-014  Bidoof line
    d(399, "Bidoof", ["BD", "SP"], "Routes 201, 202, 203, 204"),
    d(400, "Bibarel", ["BD", "SP"], "Routes 208, 209, 212, evolve Bidoof"),

    // #015-016  Kricketot line
    d(401, "Kricketot", ["BD", "SP"], "Routes 202, 203, 204 (morning/night)"),
    d(402, "Kricketune", ["BD", "SP"], "Routes 206, 210, 215, evolve Kricketot"),

    // #017-019  Shinx line
    d(403, "Shinx", ["BD", "SP"], "Routes 202, 203, 204"),
    d(404, "Luxio", ["BD", "SP"], "Route 222, evolve Shinx"),
    d(405, "Luxray", ["BD", "SP"], "Evolve Luxio"),

    // #020-021  Abra line
    d(63, "Abra", ["BD", "SP"], "Routes 203, 215"),
    d(64, "Kadabra", ["BD", "SP"], "Route 215, evolve Abra"),
    d(65, "Alakazam", ["BD", "SP"], "Trade evolve Kadabra"),

    // #022-023  Magikarp line
    d(129, "Magikarp", ["BD", "SP"], "Fishing (Old Rod, everywhere)"),
    d(130, "Gyarados", ["BD", "SP"], "Fishing (Super Rod), evolve Magikarp"),

    // #024-026  Budew / Roselia / Roserade
    d(406, "Budew", ["BD", "SP"], "Routes 204, 212, Eterna Forest"),
    d(315, "Roselia", ["BD", "SP"], "Routes 208, 212, 221, evolve Budew (friendship, day)"),
    d(407, "Roserade", ["BD", "SP"], "Evolve Roselia (Shiny Stone)"),

    // #027-029  Zubat line
    d(41, "Zubat", ["BD", "SP"], "Caves, Eterna Forest (night)"),
    d(42, "Golbat", ["BD", "SP"], "Caves, Victory Road, evolve Zubat"),
    d(169, "Crobat", ["BD", "SP"], "Evolve Golbat (friendship)"),

    // #030-032  Geodude line
    d(74, "Geodude", ["BD", "SP"], "Oreburgh Gate, Mt. Coronet, caves"),
    d(75, "Graveler", ["BD", "SP"], "Iron Island, Victory Road, evolve Geodude"),
    d(76, "Golem", ["BD", "SP"], "Trade evolve Graveler"),

    // #033-034  Onix / Steelix
    d(95, "Onix", ["BD", "SP"], "Oreburgh Mine, Iron Island"),
    d(208, "Steelix", ["BD", "SP"], "Iron Island, evolve Onix (trade w/ Metal Coat)"),

    // #035-036  Cranidos line (BD fossil)
    d(408, "Cranidos", ["BD"], "Revive Skull Fossil (Oreburgh Mining Museum)"),
    d(409, "Rampardos", ["BD"], "Evolve Cranidos"),

    // #037-038  Shieldon line (SP fossil)
    d(410, "Shieldon", ["SP"], "Revive Armor Fossil (Oreburgh Mining Museum)"),
    d(411, "Bastiodon", ["SP"], "Evolve Shieldon"),

    // #039-041  Machop line
    d(66, "Machop", ["BD", "SP"], "Route 207, Mt. Coronet"),
    d(67, "Machoke", ["BD", "SP"], "Routes 210, 211, Mt. Coronet, Victory Road, evolve Machop"),
    d(68, "Machamp", ["BD", "SP"], "Trade evolve Machoke"),

    // #042-043  Psyduck line
    d(54, "Psyduck", ["BD", "SP"], "Routes 203, 210, Oreburgh Gate (Surfing)"),
    d(55, "Golduck", ["BD", "SP"], "Routes 210, 214 (Surfing), evolve Psyduck"),

    // #044-046  Burmy line
    d(412, "Burmy", ["BD", "SP"], "Honey Trees"),
    d(413, "Wormadam", ["BD", "SP"], "Evolve female Burmy"),
    d(414, "Mothim", ["BD", "SP"], "Evolve male Burmy"),

    // #047-051  Wurmple line
    d(265, "Wurmple", ["BD", "SP"], "Eterna Forest, Honey Trees"),
    d(266, "Silcoon", ["BD", "SP"], "Eterna Forest, evolve Wurmple"),
    d(267, "Beautifly", ["BD", "SP"], "Evolve Silcoon"),
    d(268, "Cascoon", ["BD", "SP"], "Eterna Forest, evolve Wurmple"),
    d(269, "Dustox", ["BD", "SP"], "Evolve Cascoon"),

    // #052-053  Combee line
    d(415, "Combee", ["BD", "SP"], "Honey Trees"),
    d(416, "Vespiquen", ["BD", "SP"], "Evolve female Combee"),

    // #054  Pachirisu
    d(417, "Pachirisu", ["BD", "SP"], "Routes 205, 212, Valley Windworks"),

    // #055-056  Buizel line
    d(418, "Buizel", ["BD", "SP"], "Routes 205, 213, Valley Windworks"),
    d(419, "Floatzel", ["BD", "SP"], "Routes 213, 218, 222, evolve Buizel"),

    // #057-058  Cherubi line
    d(420, "Cherubi", ["BD", "SP"], "Honey Trees"),
    d(421, "Cherrim", ["BD", "SP"], "Evolve Cherubi"),

    // #059-060  Shellos line
    d(422, "Shellos", ["BD", "SP"], "Routes 205, 213, 218 (West/East Sea forms)"),
    d(423, "Gastrodon", ["BD", "SP"], "Route 222, evolve Shellos"),

    // #061  Heracross
    d(214, "Heracross", ["BD", "SP"], "Honey Trees"),

    // #062-063  Aipom / Ambipom
    d(190, "Aipom", ["BD", "SP"], "Honey Trees"),
    d(424, "Ambipom", ["BD", "SP"], "Evolve Aipom (learn Double Hit)"),

    // #064-065  Drifloon line
    d(425, "Drifloon", ["BD", "SP"], "Valley Windworks (Friday only)"),
    d(426, "Drifblim", ["BD", "SP"], "Evolve Drifloon"),

    // #066-067  Buneary line
    d(427, "Buneary", ["BD", "SP"], "Eterna Forest"),
    d(428, "Lopunny", ["BD", "SP"], "Evolve Buneary (friendship)"),

    // #068-070  Gastly line
    d(92, "Gastly", ["BD", "SP"], "Old Chateau, Lost Tower, Eterna Forest"),
    d(93, "Haunter", ["BD", "SP"], "Old Chateau, Lost Tower, evolve Gastly"),
    d(94, "Gengar", ["BD", "SP"], "Trade evolve Haunter"),

    // #071-072  Misdreavus / Mismagius (SP exclusive)
    d(200, "Misdreavus", ["SP"], "Eterna Forest, Lost Tower (night)"),
    d(429, "Mismagius", ["SP"], "Evolve Misdreavus (Dusk Stone)"),

    // #073-074  Murkrow / Honchkrow (BD exclusive)
    d(198, "Murkrow", ["BD"], "Eterna Forest, Lost Tower (night)"),
    d(430, "Honchkrow", ["BD"], "Evolve Murkrow (Dusk Stone)"),

    // #075-076  Glameow / Purugly (SP exclusive)
    d(431, "Glameow", ["SP"], "Routes 218, 222"),
    d(432, "Purugly", ["SP"], "Evolve Glameow"),

    // #077-078  Goldeen line
    d(118, "Goldeen", ["BD", "SP"], "Fishing (Good Rod, various routes)"),
    d(119, "Seaking", ["BD", "SP"], "Fishing, evolve Goldeen"),

    // #079-080  Barboach line
    d(339, "Barboach", ["BD", "SP"], "Fishing (Good Rod, various routes)"),
    d(340, "Whiscash", ["BD", "SP"], "Fishing (Super Rod), evolve Barboach"),

    // #081-082  Chingling / Chimecho
    d(433, "Chingling", ["BD", "SP"], "Mt. Coronet, Lake Valor (night)"),
    d(358, "Chimecho", ["BD", "SP"], "Mt. Coronet (top), evolve Chingling (friendship, night)"),

    // #083-084  Stunky / Skuntank (BD exclusive)
    d(434, "Stunky", ["BD"], "Routes 206, 214"),
    d(435, "Skuntank", ["BD"], "Evolve Stunky"),

    // #085-086  Meditite line
    d(307, "Meditite", ["BD", "SP"], "Mt. Coronet, Route 210, Route 217"),
    d(308, "Medicham", ["BD", "SP"], "Route 217, Victory Road, evolve Meditite"),

    // #087-088  Bronzor line
    d(436, "Bronzor", ["BD", "SP"], "Mt. Coronet, Wayward Cave"),
    d(437, "Bronzong", ["BD", "SP"], "Mt. Coronet (summit), evolve Bronzor"),

    // #089-090  Ponyta line
    d(77, "Ponyta", ["BD", "SP"], "Routes 206, 207, 210, 211, 214, 215"),
    d(78, "Rapidash", ["BD", "SP"], "Routes 214, 227, evolve Ponyta"),

    // #091-092  Mime Jr. / Mr. Mime
    d(439, "Mime Jr.", ["BD", "SP"], "Route 209, Trophy Garden"),
    d(122, "Mr. Mime", ["BD", "SP"], "Routes 218, 222, evolve Mime Jr."),

    // #093-095  Happiny / Chansey / Blissey
    d(440, "Happiny", ["BD", "SP"], "Gift Egg from Hiker in Hearthome City"),
    d(113, "Chansey", ["BD", "SP"], "Routes 209, 210, Trophy Garden (rare)"),
    d(242, "Blissey", ["BD", "SP"], "Evolve Chansey (friendship)"),

    // #096-098  Cleffa / Clefairy / Clefable
    d(173, "Cleffa", ["BD", "SP"], "Mt. Coronet"),
    d(35, "Clefairy", ["BD", "SP"], "Mt. Coronet"),
    d(36, "Clefable", ["BD", "SP"], "Evolve Clefairy (Moon Stone)"),

    // #099  Chatot
    d(441, "Chatot", ["BD", "SP"], "Routes 213, 218, 222"),

    // #100-102  Pichu / Pikachu / Raichu
    d(172, "Pichu", ["BD", "SP"], "Trophy Garden, breed Pikachu"),
    d(25, "Pikachu", ["BD", "SP"], "Trophy Garden"),
    d(26, "Raichu", ["BD", "SP"], "Evolve Pikachu (Thunder Stone)"),

    // #103-104  Hoothoot / Noctowl
    d(163, "Hoothoot", ["BD", "SP"], "Routes 210, 211 (night)"),
    d(164, "Noctowl", ["BD", "SP"], "Route 210, evolve Hoothoot"),

    // #105  Spiritomb
    d(442, "Spiritomb", ["BD", "SP"], "Hallowed Tower (Route 209, talk to 32 people underground)"),

    // #106-108  Gible line
    d(443, "Gible", ["BD", "SP"], "Wayward Cave (hidden entrance, under Cycling Road)"),
    d(444, "Gabite", ["BD", "SP"], "Evolve Gible"),
    d(445, "Garchomp", ["BD", "SP"], "Evolve Gabite"),

    // #109-110  Munchlax / Snorlax
    d(446, "Munchlax", ["BD", "SP"], "Honey Trees (very rare)"),
    d(143, "Snorlax", ["BD", "SP"], "Evolve Munchlax (friendship)"),

    // #111  Unown
    d(201, "Unown", ["BD", "SP"], "Solaceon Ruins"),

    // #112-113  Riolu / Lucario
    d(447, "Riolu", ["BD", "SP"], "Gift Egg from Riley (Iron Island)"),
    d(448, "Lucario", ["BD", "SP"], "Evolve Riolu (friendship, daytime)"),

    // #114-115  Wooper / Quagsire
    d(194, "Wooper", ["BD", "SP"], "Route 212 (Surfing), Great Marsh"),
    d(195, "Quagsire", ["BD", "SP"], "Great Marsh, evolve Wooper"),

    // #116-117  Wingull / Pelipper
    d(278, "Wingull", ["BD", "SP"], "Routes 213, 218, 219, 220, 221"),
    d(279, "Pelipper", ["BD", "SP"], "Routes 219, 220, 221, evolve Wingull"),

    // #118  Girafarig
    d(203, "Girafarig", ["BD", "SP"], "Route 214"),

    // #119-120  Hippopotas / Hippowdon
    d(449, "Hippopotas", ["BD", "SP"], "Ruin Maniac Cave (Route 214)"),
    d(450, "Hippowdon", ["BD", "SP"], "Evolve Hippopotas"),

    // #121-123  Rhyhorn / Rhydon / Rhyperior
    d(111, "Rhyhorn", ["BD", "SP"], "Routes 214, 227, Victory Road"),
    d(112, "Rhydon", ["BD", "SP"], "Route 227, evolve Rhyhorn"),
    d(464, "Rhyperior", ["BD", "SP"], "Trade Rhydon holding Protector"),

    // #124-126  Togepi / Togetic / Togekiss
    d(175, "Togepi", ["BD", "SP"], "Gift Egg from Cynthia in Eterna City"),
    d(176, "Togetic", ["BD", "SP"], "Evolve Togepi (friendship)"),
    d(468, "Togekiss", ["BD", "SP"], "Evolve Togetic (Shiny Stone)"),

    // #127-129  Duskull / Dusclops / Dusknoir
    d(355, "Duskull", ["BD", "SP"], "Route 224 (night, Poke Radar)"),
    d(356, "Dusclops", ["BD", "SP"], "Evolve Duskull"),
    d(477, "Dusknoir", ["BD", "SP"], "Trade Dusclops holding Reaper Cloth"),

    // #130-133  Ralts / Kirlia / Gardevoir / Gallade
    d(280, "Ralts", ["BD", "SP"], "Routes 208, 209, 212 (Poke Radar)"),
    d(281, "Kirlia", ["BD", "SP"], "Evolve Ralts"),
    d(282, "Gardevoir", ["BD", "SP"], "Evolve Kirlia"),
    d(475, "Gallade", ["BD", "SP"], "Evolve male Kirlia (Dawn Stone)"),

    // #134-135  Skorupi / Drapion
    d(451, "Skorupi", ["BD", "SP"], "Great Marsh, Route 210 (Poke Radar)"),
    d(452, "Drapion", ["BD", "SP"], "Evolve Skorupi"),

    // #136-137  Croagunk / Toxicroak
    d(453, "Croagunk", ["BD", "SP"], "Great Marsh, Route 212"),
    d(454, "Toxicroak", ["BD", "SP"], "Evolve Croagunk"),

    // #138  Carnivine
    d(455, "Carnivine", ["BD", "SP"], "Great Marsh"),

    // #139-140  Remoraid / Octillery
    d(223, "Remoraid", ["BD", "SP"], "Fishing (Good Rod, Routes 213, 222)"),
    d(224, "Octillery", ["BD", "SP"], "Fishing (Super Rod), evolve Remoraid"),

    // #141-142  Finneon / Lumineon
    d(456, "Finneon", ["BD", "SP"], "Fishing (Good Rod, Routes 205, 218, 219, 220)"),
    d(457, "Lumineon", ["BD", "SP"], "Fishing (Super Rod), evolve Finneon"),

    // #143-144  Tentacool / Tentacruel
    d(72, "Tentacool", ["BD", "SP"], "Surfing (Routes 205, 218, 219, 220, 221)"),
    d(73, "Tentacruel", ["BD", "SP"], "Surfing, evolve Tentacool"),

    // #145-146  Feebas / Milotic
    d(349, "Feebas", ["BD", "SP"], "Mt. Coronet B1F (Fishing, 4 random tiles)"),
    d(350, "Milotic", ["BD", "SP"], "Evolve Feebas (max Beauty condition or trade w/ Prism Scale)"),

    // #147-148  Mantyke / Mantine
    d(458, "Mantyke", ["BD", "SP"], "Surfing (Route 223)"),
    d(226, "Mantine", ["BD", "SP"], "Evolve Mantyke (with Remoraid in party)"),

    // #149-150  Snover / Abomasnow
    d(459, "Snover", ["BD", "SP"], "Routes 216, 217"),
    d(460, "Abomasnow", ["BD", "SP"], "Evolve Snover"),

    // #151  Sneasel / Weavile
    d(215, "Sneasel", ["BD", "SP"], "Routes 216, 217, Snowpoint Temple"),
    d(461, "Weavile", ["BD", "SP"], "Evolve Sneasel (hold Razor Claw, level at night)"),

    // ── Additional Sinnoh-available Pokemon ───────
    // Eevee & evolutions
    d(133, "Eevee", ["BD", "SP"], "Gift from Bebe in Hearthome City, Grand Underground"),
    d(134, "Vaporeon", ["BD", "SP"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["BD", "SP"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["BD", "SP"], "Evolve Eevee (Fire Stone)"),
    d(196, "Espeon", ["BD", "SP"], "Evolve Eevee (friendship, daytime)"),
    d(197, "Umbreon", ["BD", "SP"], "Evolve Eevee (friendship, nighttime)"),
    d(470, "Leafeon", ["BD", "SP"], "Evolve Eevee (level up near Moss Rock, Eterna Forest)"),
    d(471, "Glaceon", ["BD", "SP"], "Evolve Eevee (level up near Ice Rock, Route 217)"),

    // Porygon line
    d(137, "Porygon", ["BD", "SP"], "Trophy Garden (after National Dex)"),
    d(233, "Porygon2", ["BD", "SP"], "Trade Porygon holding Up-Grade"),
    d(474, "Porygon-Z", ["BD", "SP"], "Trade Porygon2 holding Dubious Disc"),

    // Marill / Azumarill
    d(183, "Marill", ["BD", "SP"], "Route 215, Great Marsh"),
    d(184, "Azumarill", ["BD", "SP"], "Evolve Marill"),

    // Sudowoodo / Bonsly
    d(438, "Bonsly", ["BD", "SP"], "Route 209, Trophy Garden, breed Sudowoodo"),
    d(185, "Sudowoodo", ["BD", "SP"], "Route 214 (blocks path)"),

    // Ditto
    d(132, "Ditto", ["BD", "SP"], "Route 218 (Poke Radar), Grand Underground"),

    // Electabuzz line
    d(239, "Elekid", ["BD", "SP"], "Grand Underground (post-National Dex)"),
    d(125, "Electabuzz", ["BD", "SP"], "Route 222, Grand Underground, evolve Elekid"),
    d(466, "Electivire", ["BD", "SP"], "Trade Electabuzz holding Electirizer"),

    // Magmar line
    d(240, "Magby", ["BD", "SP"], "Grand Underground (post-National Dex)"),
    d(126, "Magmar", ["BD", "SP"], "Fuego Ironworks, Grand Underground, evolve Magby"),
    d(467, "Magmortar", ["BD", "SP"], "Trade Magmar holding Magmarizer"),

    // Gligar / Gliscor
    d(207, "Gligar", ["BD", "SP"], "Grand Underground (post-National Dex)"),
    d(472, "Gliscor", ["BD", "SP"], "Evolve Gligar (hold Razor Fang, level at night)"),

    // Froslass
    d(478, "Froslass", ["BD", "SP"], "Evolve female Snorunt (Dawn Stone)"),

    // Snorunt
    d(361, "Snorunt", ["BD", "SP"], "Grand Underground (post-National Dex)"),
    d(362, "Glalie", ["BD", "SP"], "Evolve Snorunt"),

    // Absol
    d(359, "Absol", ["BD", "SP"], "Mt. Coronet summit, Grand Underground"),

    // Rotom
    d(479, "Rotom", ["BD", "SP"], "Old Chateau TV (night, post-National Dex)"),

    // Houndour / Houndoom
    d(228, "Houndour", ["BD", "SP"], "Grand Underground (Volcanic Cave)"),
    d(229, "Houndoom", ["BD", "SP"], "Grand Underground, evolve Houndour"),

    // Swinub / Piloswine / Mamoswine
    d(220, "Swinub", ["BD", "SP"], "Routes 216, 217"),
    d(221, "Piloswine", ["BD", "SP"], "Evolve Swinub"),
    d(473, "Mamoswine", ["BD", "SP"], "Evolve Piloswine (learn Ancient Power)"),

    // Lickitung / Lickilicky
    d(108, "Lickitung", ["BD", "SP"], "Route 215, Grand Underground"),
    d(463, "Lickilicky", ["BD", "SP"], "Evolve Lickitung (learn Rollout)"),

    // Tangela / Tangrowth
    d(114, "Tangela", ["BD", "SP"], "Grand Underground (post-National Dex)"),
    d(465, "Tangrowth", ["BD", "SP"], "Evolve Tangela (learn Ancient Power)"),

    // Yanma / Yanmega
    d(193, "Yanma", ["BD", "SP"], "Grand Underground (post-National Dex)"),
    d(469, "Yanmega", ["BD", "SP"], "Evolve Yanma (learn Ancient Power)"),

    // Nosepass / Probopass
    d(299, "Nosepass", ["BD", "SP"], "Grand Underground (post-National Dex)"),
    d(476, "Probopass", ["BD", "SP"], "Evolve Nosepass (level up in Mt. Coronet)"),

    // Magnezone
    d(81, "Magnemite", ["BD", "SP"], "Grand Underground (Dazzling Cave)"),
    d(82, "Magneton", ["BD", "SP"], "Grand Underground, evolve Magnemite"),
    d(462, "Magnezone", ["BD", "SP"], "Evolve Magneton (level up in Mt. Coronet)"),

    // ── Version Exclusives ────────────────────────
    // BD exclusives
    d(10, "Caterpie", ["BD"], "Grand Underground (Grassland Cave)"),
    d(11, "Metapod", ["BD"], "Grand Underground, evolve Caterpie"),
    d(12, "Butterfree", ["BD"], "Evolve Metapod"),
    d(23, "Ekans", ["BD"], "Grand Underground (Spacious Cave)"),
    d(24, "Arbok", ["BD"], "Grand Underground, evolve Ekans"),
    d(58, "Growlithe", ["BD"], "Grand Underground (Volcanic Cave)"),
    d(59, "Arcanine", ["BD"], "Evolve Growlithe (Fire Stone)"),
    d(86, "Seel", ["BD"], "Grand Underground (Icy Cave)"),
    d(87, "Dewgong", ["BD"], "Grand Underground, evolve Seel"),
    d(123, "Scyther", ["BD"], "Grand Underground (Grassland Cave)"),
    d(212, "Scizor", ["BD"], "Trade Scyther holding Metal Coat"),
    d(246, "Larvitar", ["BD"], "Grand Underground (Rocky Cave, Big Bluff Cavern)"),
    d(247, "Pupitar", ["BD"], "Grand Underground, evolve Larvitar"),
    d(248, "Tyranitar", ["BD"], "Evolve Pupitar"),
    d(273, "Seedot", ["BD"], "Grand Underground (Grassland Cave)"),
    d(274, "Nuzleaf", ["BD"], "Grand Underground, evolve Seedot"),
    d(275, "Shiftry", ["BD"], "Evolve Nuzleaf (Leaf Stone)"),
    d(303, "Mawile", ["BD"], "Grand Underground (Dazzling Cave, Spacious Cave)"),
    d(335, "Zangoose", ["BD"], "Grand Underground (Spacious Cave)"),
    d(338, "Solrock", ["BD"], "Grand Underground (Dazzling Cave)"),
    d(352, "Kecleon", ["BD"], "Grand Underground (Grassland Cave)"),

    // SP exclusives
    d(13, "Weedle", ["SP"], "Grand Underground (Grassland Cave)"),
    d(14, "Kakuna", ["SP"], "Grand Underground, evolve Weedle"),
    d(15, "Beedrill", ["SP"], "Evolve Kakuna"),
    d(27, "Sandshrew", ["SP"], "Grand Underground (Spacious Cave)"),
    d(28, "Sandslash", ["SP"], "Grand Underground, evolve Sandshrew"),
    d(37, "Vulpix", ["SP"], "Grand Underground (Volcanic Cave)"),
    d(38, "Ninetales", ["SP"], "Evolve Vulpix (Fire Stone)"),
    d(79, "Slowpoke", ["SP"], "Grand Underground (Riverbank Cave)"),
    d(80, "Slowbro", ["SP"], "Grand Underground, evolve Slowpoke"),
    d(199, "Slowking", ["SP"], "Trade Slowpoke holding King's Rock"),
    d(127, "Pinsir", ["SP"], "Grand Underground (Grassland Cave)"),
    d(234, "Stantler", ["SP"], "Grand Underground (Grassland Cave)"),
    d(270, "Lotad", ["SP"], "Grand Underground (Riverbank Cave)"),
    d(271, "Lombre", ["SP"], "Grand Underground, evolve Lotad"),
    d(272, "Ludicolo", ["SP"], "Evolve Lombre (Water Stone)"),
    d(302, "Sableye", ["SP"], "Grand Underground (Dazzling Cave, Spacious Cave)"),
    d(336, "Seviper", ["SP"], "Grand Underground (Spacious Cave)"),
    d(337, "Lunatone", ["SP"], "Grand Underground (Dazzling Cave)"),
    d(371, "Bagon", ["SP"], "Grand Underground (Rocky Cave, Big Bluff Cavern)"),
    d(372, "Shelgon", ["SP"], "Grand Underground, evolve Bagon"),
    d(373, "Salamence", ["SP"], "Evolve Shelgon"),

    // ── Grand Underground extras (both versions) ──
    d(4, "Charmander", ["BD", "SP"], "Grand Underground (Volcanic Cave, post-National Dex)"),
    d(5, "Charmeleon", ["BD", "SP"], "Grand Underground, evolve Charmander"),
    d(6, "Charizard", ["BD", "SP"], "Evolve Charmeleon"),
    d(1, "Bulbasaur", ["BD", "SP"], "Grand Underground (Grassland Cave, post-National Dex)"),
    d(2, "Ivysaur", ["BD", "SP"], "Grand Underground, evolve Bulbasaur"),
    d(3, "Venusaur", ["BD", "SP"], "Evolve Ivysaur"),
    d(7, "Squirtle", ["BD", "SP"], "Grand Underground (Fountainspring Cave, post-National Dex)"),
    d(8, "Wartortle", ["BD", "SP"], "Grand Underground, evolve Squirtle"),
    d(9, "Blastoise", ["BD", "SP"], "Evolve Wartortle"),
    d(152, "Chikorita", ["BD", "SP"], "Grand Underground (Grassland Cave, post-National Dex)"),
    d(153, "Bayleef", ["BD", "SP"], "Grand Underground, evolve Chikorita"),
    d(154, "Meganium", ["BD", "SP"], "Evolve Bayleef"),
    d(155, "Cyndaquil", ["BD", "SP"], "Grand Underground (Volcanic Cave, post-National Dex)"),
    d(156, "Quilava", ["BD", "SP"], "Grand Underground, evolve Cyndaquil"),
    d(157, "Typhlosion", ["BD", "SP"], "Evolve Quilava"),
    d(158, "Totodile", ["BD", "SP"], "Grand Underground (Fountainspring Cave, post-National Dex)"),
    d(159, "Croconaw", ["BD", "SP"], "Grand Underground, evolve Totodile"),
    d(160, "Feraligatr", ["BD", "SP"], "Evolve Croconaw"),
    d(252, "Treecko", ["BD", "SP"], "Grand Underground (Grassland Cave, post-National Dex)"),
    d(253, "Grovyle", ["BD", "SP"], "Grand Underground, evolve Treecko"),
    d(254, "Sceptile", ["BD", "SP"], "Evolve Grovyle"),
    d(255, "Torchic", ["BD", "SP"], "Grand Underground (Volcanic Cave, post-National Dex)"),
    d(256, "Combusken", ["BD", "SP"], "Grand Underground, evolve Torchic"),
    d(257, "Blaziken", ["BD", "SP"], "Evolve Combusken"),
    d(258, "Mudkip", ["BD", "SP"], "Grand Underground (Fountainspring Cave, post-National Dex)"),
    d(259, "Marshtomp", ["BD", "SP"], "Grand Underground, evolve Mudkip"),
    d(260, "Swampert", ["BD", "SP"], "Evolve Marshtomp"),
    d(174, "Igglybuff", ["BD", "SP"], "Grand Underground (Dazzling Cave)"),
    d(39, "Jigglypuff", ["BD", "SP"], "Grand Underground, evolve Igglybuff (friendship)"),
    d(40, "Wigglytuff", ["BD", "SP"], "Evolve Jigglypuff (Moon Stone)"),
    d(147, "Dratini", ["BD", "SP"], "Grand Underground (Fountainspring Cave, post-National Dex)"),
    d(148, "Dragonair", ["BD", "SP"], "Grand Underground, evolve Dratini"),
    d(149, "Dragonite", ["BD", "SP"], "Evolve Dragonair"),
    d(304, "Aron", ["BD", "SP"], "Grand Underground (Rocky Cave)"),
    d(305, "Lairon", ["BD", "SP"], "Grand Underground, evolve Aron"),
    d(306, "Aggron", ["BD", "SP"], "Evolve Lairon"),
    d(236, "Tyrogue", ["BD", "SP"], "Grand Underground (Spacious Cave, post-National Dex)"),
    d(106, "Hitmonlee", ["BD", "SP"], "Evolve Tyrogue (Attack > Defense)"),
    d(107, "Hitmonchan", ["BD", "SP"], "Evolve Tyrogue (Defense > Attack)"),
    d(237, "Hitmontop", ["BD", "SP"], "Evolve Tyrogue (Attack = Defense)"),
    d(216, "Teddiursa", ["BD", "SP"], "Grand Underground (Spacious Cave)"),
    d(217, "Ursaring", ["BD", "SP"], "Grand Underground, evolve Teddiursa"),
    d(261, "Poochyena", ["BD", "SP"], "Grand Underground (Spacious Cave, post-National Dex)"),
    d(262, "Mightyena", ["BD", "SP"], "Grand Underground, evolve Poochyena"),
    d(327, "Spinda", ["BD", "SP"], "Grand Underground (Spacious Cave)"),
    d(343, "Baltoy", ["BD", "SP"], "Grand Underground (Spacious Cave)"),
    d(344, "Claydol", ["BD", "SP"], "Grand Underground, evolve Baltoy"),
    d(357, "Tropius", ["BD", "SP"], "Great Marsh (post-National Dex)"),
    d(369, "Relicanth", ["BD", "SP"], "Grand Underground (Still-Water Cavern)"),
    d(363, "Spheal", ["BD", "SP"], "Grand Underground (Icy Cave)"),
    d(364, "Sealeo", ["BD", "SP"], "Grand Underground, evolve Spheal"),
    d(365, "Walrein", ["BD", "SP"], "Evolve Sealeo"),
    d(179, "Mareep", ["BD", "SP"], "Grand Underground (Dazzling Cave)"),
    d(180, "Flaaffy", ["BD", "SP"], "Grand Underground, evolve Mareep"),
    d(181, "Ampharos", ["BD", "SP"], "Evolve Flaaffy"),
    d(204, "Pineco", ["BD", "SP"], "Grand Underground (Grassland Cave)"),
    d(205, "Forretress", ["BD", "SP"], "Grand Underground, evolve Pineco"),
    d(227, "Skarmory", ["BD", "SP"], "Grand Underground (Rocky Cave)"),
    d(328, "Trapinch", ["BD", "SP"], "Grand Underground (Sandy Cave)"),
    d(329, "Vibrava", ["BD", "SP"], "Grand Underground, evolve Trapinch"),
    d(330, "Flygon", ["BD", "SP"], "Evolve Vibrava"),
    d(333, "Swablu", ["BD", "SP"], "Grand Underground (Spacious Cave, Dazzling Cave)"),
    d(334, "Altaria", ["BD", "SP"], "Grand Underground, evolve Swablu"),
    d(374, "Beldum", ["BD", "SP"], "Grand Underground (Rocky Cave, post-National Dex)"),
    d(375, "Metang", ["BD", "SP"], "Grand Underground, evolve Beldum"),
    d(376, "Metagross", ["BD", "SP"], "Evolve Metang"),
    d(345, "Lileep", ["BD", "SP"], "Grand Underground (Still-Water Cavern, post-National Dex)"),
    d(346, "Cradily", ["BD", "SP"], "Grand Underground, evolve Lileep"),
    d(347, "Anorith", ["BD", "SP"], "Grand Underground (Still-Water Cavern, post-National Dex)"),
    d(348, "Armaldo", ["BD", "SP"], "Grand Underground, evolve Anorith"),
    d(285, "Shroomish", ["BD", "SP"], "Grand Underground (Grassland Cave)"),
    d(286, "Breloom", ["BD", "SP"], "Grand Underground, evolve Shroomish"),
    d(296, "Makuhita", ["BD", "SP"], "Grand Underground (Spacious Cave)"),
    d(297, "Hariyama", ["BD", "SP"], "Grand Underground, evolve Makuhita"),
    d(104, "Cubone", ["BD", "SP"], "Grand Underground (Rocky Cave)"),
    d(105, "Marowak", ["BD", "SP"], "Grand Underground, evolve Cubone"),
    d(320, "Wailmer", ["BD", "SP"], "Grand Underground (Fountainspring Cave)"),
    d(321, "Wailord", ["BD", "SP"], "Grand Underground, evolve Wailmer"),
    d(324, "Torkoal", ["BD", "SP"], "Grand Underground (Volcanic Cave)"),
    d(322, "Numel", ["BD", "SP"], "Grand Underground (Volcanic Cave)"),
    d(323, "Camerupt", ["BD", "SP"], "Grand Underground, evolve Numel"),

    // ── Legendary Pokemon ─────────────────────────
    // Lake trio
    d(480, "Uxie", ["BD", "SP"], "Lake Acuity (post-game, Lv. 50)"),
    d(481, "Mesprit", ["BD", "SP"], "Lake Verity (roaming after encounter, Lv. 50)"),
    d(482, "Azelf", ["BD", "SP"], "Lake Valor (post-game, Lv. 50)"),

    // Box legendaries
    d(483, "Dialga", ["BD"], "Spear Pillar (Lv. 47)"),
    d(484, "Palkia", ["SP"], "Spear Pillar (Lv. 47)"),

    // Post-game legendaries
    d(485, "Heatran", ["BD", "SP"], "Stark Mountain (post-game, Lv. 70)"),
    d(486, "Regigigas", ["BD", "SP"], "Snowpoint Temple (post-game, Lv. 70, need Regis)"),
    d(487, "Giratina", ["BD", "SP"], "Turnback Cave (post-game, Lv. 70)"),
    d(488, "Cresselia", ["BD", "SP"], "Fullmoon Island (roaming, Lv. 50)"),

    // Ramanas Park legendaries (BD)
    d(243, "Raikou", ["BD"], "Ramanas Park (Johto Slate, Lv. 70)"),
    d(244, "Entei", ["BD"], "Ramanas Park (Johto Slate, Lv. 70)"),
    d(245, "Suicune", ["BD"], "Ramanas Park (Johto Slate, Lv. 70)"),
    d(250, "Ho-Oh", ["BD"], "Ramanas Park (Rainbow Slate, Lv. 70)"),
    d(383, "Groudon", ["BD"], "Ramanas Park (Tectonic Slate, Lv. 70)"),

    // Ramanas Park legendaries (SP)
    d(377, "Regirock", ["SP"], "Ramanas Park (Discovery Slate, Lv. 70)"),
    d(378, "Regice", ["SP"], "Ramanas Park (Discovery Slate, Lv. 70)"),
    d(379, "Registeel", ["SP"], "Ramanas Park (Discovery Slate, Lv. 70)"),
    d(380, "Latias", ["SP"], "Ramanas Park (Soul Slate, Lv. 70)"),
    d(381, "Latios", ["SP"], "Ramanas Park (Soul Slate, Lv. 70)"),
    d(382, "Kyogre", ["SP"], "Ramanas Park (Oceanic Slate, Lv. 70)"),
    d(249, "Lugia", ["SP"], "Ramanas Park (Tidal Slate, Lv. 70)"),

    // Ramanas Park legendaries (both)
    d(384, "Rayquaza", ["BD", "SP"], "Ramanas Park (Stratospheric Slate, Lv. 70)"),
    d(150, "Mewtwo", ["BD", "SP"], "Ramanas Park (Genome Slate, Lv. 70)"),

    // Mythicals (event only)
    d(489, "Phione", ["BD", "SP"], "Breed Manaphy with Ditto"),
    d(490, "Manaphy", ["BD", "SP"], "Event (Pokemon Ranger transfer)"),
    d(491, "Darkrai", ["BD", "SP"], "Event (Member Card, Newmoon Island)"),
    d(492, "Shaymin", ["BD", "SP"], "Event (Oak's Letter, Route 224)"),
    d(493, "Arceus", ["BD", "SP"], "Event (Azure Flute, Hall of Origin)"),
  ],
};
