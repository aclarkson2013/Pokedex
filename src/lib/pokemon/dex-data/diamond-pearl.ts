import type { GameDexEntry, GameDex } from "../game-dex";

/* ── Helper ─────────────────────────────────────── */
const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Diamond & Pearl — Sinnoh Pokédex (151 Pokémon)
 * ══════════════════════════════════════════════════ */
export const DIAMOND_PEARL_DEX: GameDex = {
  slug: "diamond-pearl",
  versionTags: ["D", "P"],
  pokemon: [
    // #001-003  Turtwig line
    d(387, "Turtwig", ["D", "P"], "Starter from Prof. Rowan"),
    d(388, "Grotle", ["D", "P"], "Evolve Turtwig"),
    d(389, "Torterra", ["D", "P"], "Evolve Grotle"),

    // #004-006  Chimchar line
    d(390, "Chimchar", ["D", "P"], "Starter from Prof. Rowan"),
    d(391, "Monferno", ["D", "P"], "Evolve Chimchar"),
    d(392, "Infernape", ["D", "P"], "Evolve Monferno"),

    // #007-009  Piplup line
    d(393, "Piplup", ["D", "P"], "Starter from Prof. Rowan"),
    d(394, "Prinplup", ["D", "P"], "Evolve Piplup"),
    d(395, "Empoleon", ["D", "P"], "Evolve Prinplup"),

    // #010-012  Starly line
    d(396, "Starly", ["D", "P"], "Routes 201, 202, 203, 204"),
    d(397, "Staravia", ["D", "P"], "Routes 209, 212, evolve Starly"),
    d(398, "Staraptor", ["D", "P"], "Evolve Staravia"),

    // #013-014  Bidoof line
    d(399, "Bidoof", ["D", "P"], "Routes 201, 202, 203, 204"),
    d(400, "Bibarel", ["D", "P"], "Routes 208, 209, evolve Bidoof"),

    // #015-016  Kricketot line
    d(401, "Kricketot", ["D", "P"], "Routes 202, 203, 204 (morning/night)"),
    d(402, "Kricketune", ["D", "P"], "Routes 206, 210, 215, evolve Kricketot"),

    // #017-018  Shinx line (through Luxray)
    d(403, "Shinx", ["D", "P"], "Routes 202, 203, 204"),
    d(404, "Luxio", ["D", "P"], "Route 222, evolve Shinx"),
    d(405, "Luxray", ["D", "P"], "Evolve Luxio"),

    // #019  Abra line
    d(63, "Abra", ["D", "P"], "Routes 203, 215"),
    d(64, "Kadabra", ["D", "P"], "Route 215, evolve Abra"),
    d(65, "Alakazam", ["D", "P"], "Trade evolve Kadabra"),

    // #022  Magikarp line
    d(129, "Magikarp", ["D", "P"], "Fishing (Old Rod, everywhere)"),
    d(130, "Gyarados", ["D", "P"], "Fishing (Super Rod), evolve Magikarp"),

    // #024-025  Budew line
    d(406, "Budew", ["D", "P"], "Routes 204, 212, Eterna Forest"),
    d(315, "Roselia", ["D", "P"], "Routes 208, 212, 221, evolve Budew"),
    d(407, "Roserade", ["D", "P"], "Evolve Roselia (Shiny Stone)"),

    // #027  Zubat line
    d(41, "Zubat", ["D", "P"], "Caves, Eterna Forest (night)"),
    d(42, "Golbat", ["D", "P"], "Caves, Victory Road, evolve Zubat"),
    d(169, "Crobat", ["D", "P"], "Evolve Golbat (friendship)"),

    // #030  Geodude line
    d(74, "Geodude", ["D", "P"], "Oreburgh Gate, Mt. Coronet, caves"),
    d(75, "Graveler", ["D", "P"], "Iron Island, Victory Road, evolve Geodude"),
    d(76, "Golem", ["D", "P"], "Trade evolve Graveler"),

    // #033  Onix / Steelix
    d(95, "Onix", ["D", "P"], "Oreburgh Mine, Iron Island"),
    d(208, "Steelix", ["D", "P"], "Iron Island, evolve Onix (trade w/ Metal Coat)"),

    // #035  Cranidos line (Diamond fossil)
    d(408, "Cranidos", ["D"], "Revive Skull Fossil (Oreburgh Mining Museum)"),
    d(409, "Rampardos", ["D"], "Evolve Cranidos"),

    // #037  Shieldon line (Pearl fossil)
    d(410, "Shieldon", ["P"], "Revive Armor Fossil (Oreburgh Mining Museum)"),
    d(411, "Bastiodon", ["P"], "Evolve Shieldon"),

    // #039  Machop line
    d(66, "Machop", ["D", "P"], "Route 207, Mt. Coronet"),
    d(67, "Machoke", ["D", "P"], "Routes 210, 211, Mt. Coronet, evolve Machop"),
    d(68, "Machamp", ["D", "P"], "Trade evolve Machoke"),

    // #042  Psyduck line
    d(54, "Psyduck", ["D", "P"], "Routes 203, 210, Oreburgh Gate (Surfing)"),
    d(55, "Golduck", ["D", "P"], "Routes 210, 214 (Surfing), evolve Psyduck"),

    // #044  Burmy line
    d(412, "Burmy", ["D", "P"], "Honey Trees"),
    d(413, "Wormadam", ["D", "P"], "Evolve female Burmy"),
    d(414, "Mothim", ["D", "P"], "Evolve male Burmy"),

    // #047  Wurmple line
    d(265, "Wurmple", ["D", "P"], "Eterna Forest, Honey Trees"),
    d(266, "Silcoon", ["D", "P"], "Eterna Forest, evolve Wurmple"),
    d(267, "Beautifly", ["D", "P"], "Evolve Silcoon"),
    d(268, "Cascoon", ["D", "P"], "Eterna Forest, evolve Wurmple"),
    d(269, "Dustox", ["D", "P"], "Evolve Cascoon"),

    // #052  Combee line
    d(415, "Combee", ["D", "P"], "Honey Trees"),
    d(416, "Vespiquen", ["D", "P"], "Evolve female Combee"),

    // #054  Pachirisu
    d(417, "Pachirisu", ["D", "P"], "Routes 205, 212"),

    // #055  Buizel line
    d(418, "Buizel", ["D", "P"], "Routes 205, 213, Valley Windworks"),
    d(419, "Floatzel", ["D", "P"], "Routes 213, 218, 222, evolve Buizel"),

    // #057  Cherubi line
    d(420, "Cherubi", ["D", "P"], "Honey Trees"),
    d(421, "Cherrim", ["D", "P"], "Evolve Cherubi"),

    // #059  Shellos line
    d(422, "Shellos", ["D", "P"], "Routes 205, 213, 218 (West/East Sea forms)"),
    d(423, "Gastrodon", ["D", "P"], "Route 222, evolve Shellos"),

    // #061  Heracross
    d(214, "Heracross", ["D", "P"], "Honey Trees"),

    // #062  Aipom / Ambipom
    d(190, "Aipom", ["D", "P"], "Honey Trees"),
    d(424, "Ambipom", ["D", "P"], "Evolve Aipom (learn Double Hit)"),

    // #064  Drifloon line
    d(425, "Drifloon", ["D", "P"], "Valley Windworks (Friday only)"),
    d(426, "Drifblim", ["D", "P"], "Evolve Drifloon"),

    // #066  Buneary line
    d(427, "Buneary", ["D", "P"], "Eterna Forest"),
    d(428, "Lopunny", ["D", "P"], "Evolve Buneary (friendship)"),

    // #068  Gastly line
    d(92, "Gastly", ["D", "P"], "Old Chateau, Lost Tower"),
    d(93, "Haunter", ["D", "P"], "Old Chateau, Lost Tower, evolve Gastly"),
    d(94, "Gengar", ["D", "P"], "Trade evolve Haunter"),

    // #071  Misdreavus / Mismagius
    d(200, "Misdreavus", ["P"], "Eterna Forest, Lost Tower (night)"),
    d(429, "Mismagius", ["P"], "Evolve Misdreavus (Dusk Stone)"),

    // #073  Murkrow / Honchkrow
    d(198, "Murkrow", ["D"], "Eterna Forest, Lost Tower (night)"),
    d(430, "Honchkrow", ["D"], "Evolve Murkrow (Dusk Stone)"),

    // #075  Glameow / Purugly
    d(431, "Glameow", ["P"], "Routes 218, 222"),
    d(432, "Purugly", ["P"], "Evolve Glameow"),

    // #077  Goldeen line
    d(118, "Goldeen", ["D", "P"], "Fishing (Good Rod, various routes)"),
    d(119, "Seaking", ["D", "P"], "Fishing, evolve Goldeen"),

    // #079  Barboach line
    d(339, "Barboach", ["D", "P"], "Fishing (Good Rod, various routes)"),
    d(340, "Whiscash", ["D", "P"], "Fishing (Super Rod), evolve Barboach"),

    // #081  Chingling / Chimecho
    d(433, "Chingling", ["D", "P"], "Mt. Coronet, Lake Valor (night)"),
    d(358, "Chimecho", ["D", "P"], "Mt. Coronet (top), evolve Chingling (friendship, night)"),

    // #083  Stunky / Skuntank
    d(434, "Stunky", ["D"], "Routes 206, 214"),
    d(435, "Skuntank", ["D"], "Evolve Stunky"),

    // #085  Meditite line
    d(307, "Meditite", ["D", "P"], "Mt. Coronet, Route 210, Route 217"),
    d(308, "Medicham", ["D", "P"], "Route 217, Victory Road, evolve Meditite"),

    // #087  Bronzor line
    d(436, "Bronzor", ["D", "P"], "Mt. Coronet, Wayward Cave"),
    d(437, "Bronzong", ["D", "P"], "Mt. Coronet (summit), evolve Bronzor"),

    // #089  Ponyta line
    d(77, "Ponyta", ["D", "P"], "Routes 206, 207, 210, 211, 214, 215"),
    d(78, "Rapidash", ["D", "P"], "Routes 214, 227, evolve Ponyta"),

    // #091  Mime Jr. / Mr. Mime
    d(439, "Mime Jr.", ["D", "P"], "Route 209, Trophy Garden"),
    d(122, "Mr. Mime", ["D", "P"], "Route 218, 222, evolve Mime Jr."),

    // #093  Happiny / Chansey / Blissey
    d(440, "Happiny", ["D", "P"], "Gift Egg from Hiker in Hearthome City"),
    d(113, "Chansey", ["D", "P"], "Route 209, 210, Trophy Garden (rare)"),
    d(242, "Blissey", ["D", "P"], "Evolve Chansey (friendship)"),

    // #096  Cleffa / Clefairy / Clefable
    d(173, "Cleffa", ["D", "P"], "Mt. Coronet"),
    d(35, "Clefairy", ["D", "P"], "Mt. Coronet"),
    d(36, "Clefable", ["D", "P"], "Evolve Clefairy (Moon Stone)"),

    // #099  Chatot
    d(441, "Chatot", ["D", "P"], "Routes 213, 218, 222"),

    // #100  Pichu / Pikachu / Raichu
    d(172, "Pichu", ["D", "P"], "Trophy Garden, breed Pikachu"),
    d(25, "Pikachu", ["D", "P"], "Trophy Garden"),
    d(26, "Raichu", ["D", "P"], "Evolve Pikachu (Thunder Stone)"),

    // #103  Hoothoot / Noctowl
    d(163, "Hoothoot", ["D", "P"], "Routes 210, 211 (night)"),
    d(164, "Noctowl", ["D", "P"], "Route 210, evolve Hoothoot"),

    // #105  Spiritomb
    d(442, "Spiritomb", ["D", "P"], "Hallowed Tower (Route 209, talk to 32 people underground)"),

    // #106  Gible line
    d(443, "Gible", ["D", "P"], "Wayward Cave (hidden entrance, under Cycling Road)"),
    d(444, "Gabite", ["D", "P"], "Evolve Gible"),
    d(445, "Garchomp", ["D", "P"], "Evolve Gabite"),

    // #109  Munchlax / Snorlax
    d(446, "Munchlax", ["D", "P"], "Honey Trees (very rare)"),
    d(143, "Snorlax", ["D", "P"], "Evolve Munchlax (friendship)"),

    // #111  Unown
    d(201, "Unown", ["D", "P"], "Solaceon Ruins"),

    // #112  Riolu / Lucario
    d(447, "Riolu", ["D", "P"], "Gift Egg from Riley (Iron Island)"),
    d(448, "Lucario", ["D", "P"], "Evolve Riolu (friendship, daytime)"),

    // #114  Wooper / Quagsire
    d(194, "Wooper", ["D", "P"], "Route 212 (Surfing), Great Marsh"),
    d(195, "Quagsire", ["D", "P"], "Great Marsh, evolve Wooper"),

    // #116  Wingull / Pelipper
    d(278, "Wingull", ["D", "P"], "Routes 213, 218, 219, 220, 221"),
    d(279, "Pelipper", ["D", "P"], "Routes 219, 220, 221, evolve Wingull"),

    // #118  Girafarig
    d(203, "Girafarig", ["D", "P"], "Route 214"),

    // #119  Hippopotas / Hippowdon
    d(449, "Hippopotas", ["D", "P"], "Ruin Maniac Cave (Route 214)"),
    d(450, "Hippowdon", ["D", "P"], "Evolve Hippopotas"),

    // #121  Rhyhorn / Rhydon / Rhyperior
    d(111, "Rhyhorn", ["D", "P"], "Route 214, 227"),
    d(112, "Rhydon", ["D", "P"], "Route 227, evolve Rhyhorn"),
    d(464, "Rhyperior", ["D", "P"], "Trade Rhydon holding Protector"),

    // #124  Togepi / Togetic / Togekiss
    d(175, "Togepi", ["D", "P"], "Gift Egg from Cynthia in Eterna City"),
    d(176, "Togetic", ["D", "P"], "Evolve Togepi (friendship)"),
    d(468, "Togekiss", ["D", "P"], "Evolve Togetic (Shiny Stone)"),

    // #127  Duskull / Dusclops / Dusknoir
    d(355, "Duskull", ["D", "P"], "Route 224 (night, Poké Radar)"),
    d(356, "Dusclops", ["D", "P"], "Evolve Duskull"),
    d(477, "Dusknoir", ["D", "P"], "Trade Dusclops holding Reaper Cloth"),

    // #130  Ralts / Kirlia / Gallade / Gardevoir
    d(280, "Ralts", ["D", "P"], "Routes 208, 209, 212 (Poké Radar)"),
    d(281, "Kirlia", ["D", "P"], "Evolve Ralts"),
    d(282, "Gardevoir", ["D", "P"], "Evolve Kirlia"),
    d(475, "Gallade", ["D", "P"], "Evolve male Kirlia (Dawn Stone)"),

    // #134  Skorupi / Drapion
    d(451, "Skorupi", ["D", "P"], "Great Marsh, Route 210 (Poké Radar)"),
    d(452, "Drapion", ["D", "P"], "Evolve Skorupi"),

    // #136  Croagunk / Toxicroak
    d(453, "Croagunk", ["D", "P"], "Great Marsh, Route 212"),
    d(454, "Toxicroak", ["D", "P"], "Evolve Croagunk"),

    // #138  Carnivine
    d(455, "Carnivine", ["D", "P"], "Great Marsh"),

    // #139  Remoraid / Octillery
    d(223, "Remoraid", ["D", "P"], "Fishing (Good Rod, Route 213, 222)"),
    d(224, "Octillery", ["D", "P"], "Fishing (Super Rod), evolve Remoraid"),

    // #141  Finneon / Lumineon
    d(456, "Finneon", ["D", "P"], "Fishing (Good Rod, Route 205, 218, 219, 220)"),
    d(457, "Lumineon", ["D", "P"], "Fishing (Super Rod), evolve Finneon"),

    // #143  Tentacool / Tentacruel
    d(72, "Tentacool", ["D", "P"], "Surfing (Routes 205, 218, 219, 220, 221)"),
    d(73, "Tentacruel", ["D", "P"], "Surfing, evolve Tentacool"),

    // #145  Feebas / Milotic
    d(349, "Feebas", ["D", "P"], "Mt. Coronet B1F (Fishing, 4 random tiles)"),
    d(350, "Milotic", ["D", "P"], "Evolve Feebas (max Beauty condition)"),

    // #147  Mantyke / Mantine
    d(458, "Mantyke", ["D", "P"], "Surfing (Route 223)"),
    d(226, "Mantine", ["D", "P"], "Evolve Mantyke (with Remoraid in party)"),

    // #149  Snover / Abomasnow
    d(459, "Snover", ["D", "P"], "Routes 216, 217"),
    d(460, "Abomasnow", ["D", "P"], "Evolve Snover"),

    // #151  Sneasel / Weavile
    d(215, "Sneasel", ["D", "P"], "Routes 216, 217, Snowpoint Temple"),
    d(461, "Weavile", ["D", "P"], "Evolve Sneasel (hold Razor Claw, level at night)"),

    // Eevee & evolutions (gift)
    d(133, "Eevee", ["D", "P"], "Gift from Bebe in Hearthome City"),
    d(134, "Vaporeon", ["D", "P"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["D", "P"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["D", "P"], "Evolve Eevee (Fire Stone)"),
    d(196, "Espeon", ["D", "P"], "Evolve Eevee (friendship, daytime)"),
    d(197, "Umbreon", ["D", "P"], "Evolve Eevee (friendship, nighttime)"),
    d(470, "Leafeon", ["D", "P"], "Evolve Eevee (level up near Moss Rock, Eterna Forest)"),
    d(471, "Glaceon", ["D", "P"], "Evolve Eevee (level up near Ice Rock, Route 217)"),

    // Porygon line
    d(137, "Porygon", ["D", "P"], "Gift in Veilstone City"),
    d(233, "Porygon2", ["D", "P"], "Trade Porygon holding Up-Grade"),
    d(474, "Porygon-Z", ["D", "P"], "Trade Porygon2 holding Dubious Disc"),

    // Marill / Azumarill
    d(183, "Marill", ["D", "P"], "Route 215, Great Marsh"),
    d(184, "Azumarill", ["D", "P"], "Evolve Marill"),

    // Sudowoodo / Bonsly
    d(438, "Bonsly", ["D", "P"], "Trophy Garden, breed Sudowoodo"),
    d(185, "Sudowoodo", ["D", "P"], "Route 214 (Sudowoodo blocks path)"),

    // Roselia was already listed with Budew line

    // Ditto
    d(132, "Ditto", ["D", "P"], "Route 218 (Poké Radar, post-National Dex)"),

    // Electabuzz line
    d(239, "Elekid", ["D", "P"], "Route 204 (Poké Radar, post-National Dex)"),
    d(125, "Electabuzz", ["D", "P"], "Route 222, evolve Elekid"),
    d(466, "Electivire", ["D", "P"], "Trade Electabuzz holding Electirizer"),

    // Magmar line
    d(240, "Magby", ["D", "P"], "Route 227 (Poké Radar, post-National Dex)"),
    d(126, "Magmar", ["D", "P"], "Fuego Ironworks, evolve Magby"),
    d(467, "Magmortar", ["D", "P"], "Trade Magmar holding Magmarizer"),

    // Gligar / Gliscor
    d(207, "Gligar", ["D", "P"], "Route 206 (Poké Radar, post-National Dex)"),
    d(472, "Gliscor", ["D", "P"], "Evolve Gligar (hold Razor Fang, level at night)"),

    // Froslass
    d(478, "Froslass", ["D", "P"], "Evolve female Snorunt (Dawn Stone)"),

    // Absol
    d(359, "Absol", ["D", "P"], "Mt. Coronet summit, Route 213 (Poké Radar)"),

    // Rotom
    d(479, "Rotom", ["D", "P"], "Old Chateau TV (night, post-National Dex)"),

    // ── Legendary Pokémon ──────────────────────────
    // Lake trio
    d(480, "Uxie", ["D", "P"], "Lake Acuity (post-game, Lv. 50)"),
    d(481, "Mesprit", ["D", "P"], "Lake Verity (roaming after encounter, Lv. 50)"),
    d(482, "Azelf", ["D", "P"], "Lake Valor (post-game, Lv. 50)"),

    // Box legendaries
    d(483, "Dialga", ["D"], "Spear Pillar (Lv. 47)"),
    d(484, "Palkia", ["P"], "Spear Pillar (Lv. 47)"),

    // Post-game legendaries
    d(485, "Heatran", ["D", "P"], "Stark Mountain (post-game, Lv. 70)"),
    d(486, "Regigigas", ["D", "P"], "Snowpoint Temple (post-game, Lv. 70, need Regis)"),
    d(487, "Giratina", ["D", "P"], "Turnback Cave (post-game, Lv. 70)"),
    d(488, "Cresselia", ["D", "P"], "Fullmoon Island (roaming, Lv. 50)"),

    // Mythicals (event only, listed for completeness)
    d(489, "Phione", ["D", "P"], "Breed Manaphy with Ditto"),
    d(490, "Manaphy", ["D", "P"], "Event (Pokémon Ranger transfer)"),
    d(491, "Darkrai", ["D", "P"], "Event (Member Card, Newmoon Island)"),
    d(492, "Shaymin", ["D", "P"], "Event (Oak's Letter, Route 224)"),
    d(493, "Arceus", ["D", "P"], "Event (Azure Flute, Hall of Origin)"),
  ],
};
