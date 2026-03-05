import type { GameDexEntry, GameDex } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ==============================================================
 *  Pokemon Platinum — Sinnoh Dex (210 Pokemon)
 *  All Pokemon obtainable in Platinum without trading.
 * ============================================================== */
export const PLATINUM_DEX: GameDex = {
  slug: "platinum",
  versionTags: ["Pt"],
  pokemon: [
    // #001-003 — Turtwig line
    d(387, "Turtwig", ["Pt"], "Starter from Professor Rowan"),
    d(388, "Grotle", ["Pt"], "Evolve Turtwig (Lv 18)"),
    d(389, "Torterra", ["Pt"], "Evolve Grotle (Lv 32)"),

    // #004-006 — Chimchar line
    d(390, "Chimchar", ["Pt"], "Starter from Professor Rowan"),
    d(391, "Monferno", ["Pt"], "Evolve Chimchar (Lv 14)"),
    d(392, "Infernape", ["Pt"], "Evolve Monferno (Lv 36)"),

    // #007-009 — Piplup line
    d(393, "Piplup", ["Pt"], "Starter from Professor Rowan"),
    d(394, "Prinplup", ["Pt"], "Evolve Piplup (Lv 16)"),
    d(395, "Empoleon", ["Pt"], "Evolve Prinplup (Lv 36)"),

    // #010-011 — Starly line
    d(396, "Starly", ["Pt"], "Routes 201, 202, 203, 204"),
    d(397, "Staravia", ["Pt"], "Routes 209, 210, 212, evolve Starly"),
    d(398, "Staraptor", ["Pt"], "Evolve Staravia (Lv 34)"),

    // #013-014 — Bidoof line
    d(399, "Bidoof", ["Pt"], "Routes 201, 202, 203, 204"),
    d(400, "Bibarel", ["Pt"], "Routes 208, 209, 210, evolve Bidoof"),

    // #015-016 — Kricketot line
    d(401, "Kricketot", ["Pt"], "Routes 202, 204 (morning/night)"),
    d(402, "Kricketune", ["Pt"], "Routes 206, 210, evolve Kricketot"),

    // #017-018 — Shinx line
    d(403, "Shinx", ["Pt"], "Routes 202, 203, 204"),
    d(404, "Luxio", ["Pt"], "Route 222, evolve Shinx"),
    d(405, "Luxray", ["Pt"], "Evolve Luxio (Lv 30)"),

    // #020 — Abra line (carried over from Gen I)
    d(63, "Abra", ["Pt"], "Routes 203, 215"),
    d(64, "Kadabra", ["Pt"], "Route 215, evolve Abra"),
    d(65, "Alakazam", ["Pt"], "Trade evolve Kadabra"),

    // #022 — Magikarp line
    d(129, "Magikarp", ["Pt"], "Fishing (everywhere, Old Rod)"),
    d(130, "Gyarados", ["Pt"], "Fishing (various, Super Rod), evolve Magikarp"),

    // #024-025 — Budew line
    d(406, "Budew", ["Pt"], "Routes 204, Eterna Forest"),
    d(315, "Roselia", ["Pt"], "Routes 212, 221, 224, 225, Trophy Garden"),
    d(407, "Roserade", ["Pt"], "Evolve Roselia (Shiny Stone)"),

    // #027-028 — Zubat line
    d(41, "Zubat", ["Pt"], "Most caves, Eterna Forest"),
    d(42, "Golbat", ["Pt"], "Most caves, evolve Zubat"),
    d(169, "Crobat", ["Pt"], "Evolve Golbat (friendship)"),

    // #030-031 — Geodude line
    d(74, "Geodude", ["Pt"], "Oreburgh Gate, Mt. Coronet, caves"),
    d(75, "Graveler", ["Pt"], "Iron Island, Victory Road, evolve Geodude"),
    d(76, "Golem", ["Pt"], "Trade evolve Graveler"),

    // #032 — Onix / Steelix
    d(95, "Onix", ["Pt"], "Oreburgh Mine, Iron Island, Victory Road"),
    d(208, "Steelix", ["Pt"], "Iron Island, Victory Road, evolve Onix (trade w/ Metal Coat)"),

    // #034 — Cranidos line
    d(408, "Cranidos", ["Pt"], "Revive Skull Fossil (Underground)"),
    d(409, "Rampardos", ["Pt"], "Evolve Cranidos (Lv 30)"),

    // #036 — Shieldon line
    d(410, "Shieldon", ["Pt"], "Revive Armor Fossil (Underground)"),
    d(411, "Bastiodon", ["Pt"], "Evolve Shieldon (Lv 30)"),

    // #038 — Machop line
    d(66, "Machop", ["Pt"], "Route 207, Mt. Coronet"),
    d(67, "Machoke", ["Pt"], "Routes 210, 211, Mt. Coronet, evolve Machop"),
    d(68, "Machamp", ["Pt"], "Trade evolve Machoke"),

    // #041 — Psyduck line
    d(54, "Psyduck", ["Pt"], "Oreburgh Gate, Routes 203, 210 (Surfing)"),
    d(55, "Golduck", ["Pt"], "Routes 203, 210 (Surfing), evolve Psyduck"),

    // #043-044 — Burmy line
    d(412, "Burmy", ["Pt"], "Honey Trees"),
    d(413, "Wormadam", ["Pt"], "Evolve female Burmy (Lv 20)"),
    d(414, "Mothim", ["Pt"], "Evolve male Burmy (Lv 20)"),

    // #046-047 — Wurmple line
    d(265, "Wurmple", ["Pt"], "Eterna Forest, Route 204"),
    d(266, "Silcoon", ["Pt"], "Eterna Forest, evolve Wurmple (random)"),
    d(267, "Beautifly", ["Pt"], "Evolve Silcoon (Lv 10)"),
    d(268, "Cascoon", ["Pt"], "Eterna Forest, evolve Wurmple (random)"),
    d(269, "Dustox", ["Pt"], "Evolve Cascoon (Lv 10)"),

    // #051-052 — Combee line
    d(415, "Combee", ["Pt"], "Honey Trees"),
    d(416, "Vespiquen", ["Pt"], "Evolve female Combee (Lv 21)"),

    // #053 — Pachirisu
    d(417, "Pachirisu", ["Pt"], "Routes 205, Valley Windworks"),

    // #054-055 — Buizel line
    d(418, "Buizel", ["Pt"], "Routes 205, 213, Valley Windworks"),
    d(419, "Floatzel", ["Pt"], "Routes 218, 222, evolve Buizel"),

    // #056-057 — Cherubi line
    d(420, "Cherubi", ["Pt"], "Honey Trees"),
    d(421, "Cherrim", ["Pt"], "Evolve Cherubi (Lv 25)"),

    // #058-059 — Shellos line
    d(422, "Shellos", ["Pt"], "Routes 205 (West Sea), 213 (East Sea)"),
    d(423, "Gastrodon", ["Pt"], "Route 218, evolve Shellos"),

    // #060 — Heracross
    d(214, "Heracross", ["Pt"], "Honey Trees"),

    // #061 — Aipom / Ambipom
    d(190, "Aipom", ["Pt"], "Honey Trees"),
    d(424, "Ambipom", ["Pt"], "Evolve Aipom (level up knowing Double Hit)"),

    // #063-064 — Drifloon line
    d(425, "Drifloon", ["Pt"], "Valley Windworks (Fridays only)"),
    d(426, "Drifblim", ["Pt"], "Evolve Drifloon (Lv 28)"),

    // #065-066 — Buneary line
    d(427, "Buneary", ["Pt"], "Eterna Forest"),
    d(428, "Lopunny", ["Pt"], "Evolve Buneary (friendship)"),

    // #067 — Gastly line
    d(92, "Gastly", ["Pt"], "Eterna Forest, Old Chateau, Lost Tower"),
    d(93, "Haunter", ["Pt"], "Old Chateau, Lost Tower, evolve Gastly"),
    d(94, "Gengar", ["Pt"], "Trade evolve Haunter"),

    // #070 — Misdreavus / Mismagius
    d(200, "Misdreavus", ["Pt"], "Eterna Forest (night), Lost Tower"),
    d(429, "Mismagius", ["Pt"], "Evolve Misdreavus (Dusk Stone)"),

    // #072 — Murkrow / Honchkrow
    d(198, "Murkrow", ["Pt"], "Eterna Forest (night), Lost Tower"),
    d(430, "Honchkrow", ["Pt"], "Evolve Murkrow (Dusk Stone)"),

    // #074 — Glameow / Purugly
    d(431, "Glameow", ["Pt"], "Routes 218, 222"),
    d(432, "Purugly", ["Pt"], "Evolve Glameow (Lv 38)"),

    // #076 — Goldeen line
    d(118, "Goldeen", ["Pt"], "Fishing (various routes, Good Rod)"),
    d(119, "Seaking", ["Pt"], "Fishing, evolve Goldeen"),

    // #078 — Barboach line
    d(339, "Barboach", ["Pt"], "Fishing (various, Good Rod)"),
    d(340, "Whiscash", ["Pt"], "Fishing, evolve Barboach"),

    // #080 — Chingling / Chimecho
    d(433, "Chingling", ["Pt"], "Mt. Coronet, Lake Acuity (night)"),
    d(358, "Chimecho", ["Pt"], "Evolve Chingling (friendship, night)"),

    // #082 — Stunky / Skuntank
    d(434, "Stunky", ["Pt"], "Routes 206, 214"),
    d(435, "Skuntank", ["Pt"], "Evolve Stunky (Lv 34)"),

    // #084 — Meditite / Medicham
    d(307, "Meditite", ["Pt"], "Route 210, 211, Mt. Coronet"),
    d(308, "Medicham", ["Pt"], "Routes 216, 217, evolve Meditite"),

    // #086 — Bronzor / Bronzong
    d(436, "Bronzor", ["Pt"], "Mt. Coronet, Wayward Cave"),
    d(437, "Bronzong", ["Pt"], "Mt. Coronet, Turnback Cave, evolve Bronzor"),

    // #088 — Ponyta / Rapidash
    d(77, "Ponyta", ["Pt"], "Routes 206, 207, 210, 211, 214, 215"),
    d(78, "Rapidash", ["Pt"], "Routes 214, 227, evolve Ponyta"),

    // #090 — Bonsly / Sudowoodo
    d(438, "Bonsly", ["Pt"], "Trophy Garden, breed Sudowoodo"),
    d(185, "Sudowoodo", ["Pt"], "Route 209 (Sudowoodo blocks path, use Sprayduck)"),

    // #092 — Mime Jr. / Mr. Mime
    d(439, "Mime Jr.", ["Pt"], "Route 209, 210, Trophy Garden"),
    d(122, "Mr. Mime", ["Pt"], "Route 218, 222, evolve Mime Jr."),

    // #094 — Happiny / Chansey / Blissey
    d(440, "Happiny", ["Pt"], "Trophy Garden, hatch from Egg (Hearthome hiker)"),
    d(113, "Chansey", ["Pt"], "Route 209, 210, Trophy Garden (rare)"),
    d(242, "Blissey", ["Pt"], "Evolve Chansey (friendship)"),

    // #097 — Cleffa / Clefairy / Clefable
    d(173, "Cleffa", ["Pt"], "Mt. Coronet, Trophy Garden"),
    d(35, "Clefairy", ["Pt"], "Mt. Coronet"),
    d(36, "Clefable", ["Pt"], "Evolve Clefairy (Moon Stone)"),

    // #100 — Chatot
    d(441, "Chatot", ["Pt"], "Routes 213, 218, 222"),

    // #101 — Pichu / Pikachu / Raichu
    d(172, "Pichu", ["Pt"], "Trophy Garden, breed Pikachu"),
    d(25, "Pikachu", ["Pt"], "Trophy Garden"),
    d(26, "Raichu", ["Pt"], "Evolve Pikachu (Thunder Stone)"),

    // #104 — Hoothoot / Noctowl
    d(163, "Hoothoot", ["Pt"], "Eterna Forest, Great Marsh (night)"),
    d(164, "Noctowl", ["Pt"], "Routes 216, 217, evolve Hoothoot"),

    // #106 — Spiritomb
    d(442, "Spiritomb", ["Pt"], "Hallowed Tower on Route 209 (talk to 32 people underground)"),

    // #107 — Gible line
    d(443, "Gible", ["Pt"], "Wayward Cave (hidden entrance under Cycling Road)"),
    d(444, "Gabite", ["Pt"], "Victory Road, evolve Gible"),
    d(445, "Garchomp", ["Pt"], "Evolve Gabite (Lv 48)"),

    // #110 — Munchlax / Snorlax
    d(446, "Munchlax", ["Pt"], "Honey Trees (rare)"),
    d(143, "Snorlax", ["Pt"], "Evolve Munchlax (friendship)"),

    // #112 — Unown
    d(201, "Unown", ["Pt"], "Solaceon Ruins"),

    // #113 — Riolu / Lucario
    d(447, "Riolu", ["Pt"], "Egg from Riley at Iron Island"),
    d(448, "Lucario", ["Pt"], "Evolve Riolu (friendship, daytime)"),

    // #115 — Wooper / Quagsire
    d(194, "Wooper", ["Pt"], "Great Marsh, Route 212 (Surfing)"),
    d(195, "Quagsire", ["Pt"], "Great Marsh, Route 212, evolve Wooper"),

    // #117 — Wingull / Pelipper
    d(278, "Wingull", ["Pt"], "Routes 213, 218, 219, 220, 221"),
    d(279, "Pelipper", ["Pt"], "Routes 213, 226, 229, evolve Wingull"),

    // #119 — Remoraid / Octillery
    d(223, "Remoraid", ["Pt"], "Fishing (Route 213, Route 222, Super Rod)"),
    d(224, "Octillery", ["Pt"], "Fishing, evolve Remoraid"),

    // #121 — Tentacool / Tentacruel
    d(72, "Tentacool", ["Pt"], "Surfing (various ocean routes)"),
    d(73, "Tentacruel", ["Pt"], "Surfing, evolve Tentacool"),

    // #123 — Feebas / Milotic
    d(349, "Feebas", ["Pt"], "Mt. Coronet B1F (specific tiles, Fishing)"),
    d(350, "Milotic", ["Pt"], "Evolve Feebas (max Beauty condition, then level)"),

    // #125 — Mantyke / Mantine
    d(458, "Mantyke", ["Pt"], "Surfing (Route 223)"),
    d(226, "Mantine", ["Pt"], "Evolve Mantyke (level up with Remoraid in party)"),

    // #127 — Snover / Abomasnow
    d(459, "Snover", ["Pt"], "Routes 216, 217"),
    d(460, "Abomasnow", ["Pt"], "Evolve Snover (Lv 40)"),

    // #129 — Sneasel / Weavile
    d(215, "Sneasel", ["Pt"], "Routes 216, 217, Snowpoint Temple"),
    d(461, "Weavile", ["Pt"], "Evolve Sneasel (level up at night holding Razor Claw)"),

    // #131 — Uxie
    d(480, "Uxie", ["Pt"], "Lake Acuity cavern (post-game, Lv 50)"),

    // #132 — Mesprit
    d(481, "Mesprit", ["Pt"], "Lake Verity (post-game, roaming Lv 50)"),

    // #133 — Azelf
    d(482, "Azelf", ["Pt"], "Lake Valor cavern (post-game, Lv 50)"),

    // #134 — Dialga
    d(483, "Dialga", ["Pt"], "Spear Pillar (post-game, Lv 70)"),

    // #135 — Palkia
    d(484, "Palkia", ["Pt"], "Spear Pillar (post-game, Lv 70)"),

    // #136-137 — Manaphy / Phione (event only, included for completeness)
    d(490, "Manaphy", ["Pt"], "Pokemon Ranger event transfer"),
    d(489, "Phione", ["Pt"], "Breed Manaphy with Ditto"),

    // #138 — Rotom
    d(479, "Rotom", ["Pt"], "Old Chateau TV (night, post-National Dex)"),

    // #139 — Gligar / Gliscor
    d(207, "Gligar", ["Pt"], "Route 206 (Wayward Cave area)"),
    d(472, "Gliscor", ["Pt"], "Evolve Gligar (level up at night holding Razor Fang)"),

    // #141 — Nosepass / Probopass
    d(299, "Nosepass", ["Pt"], "Mt. Coronet"),
    d(476, "Probopass", ["Pt"], "Evolve Nosepass (level up in Mt. Coronet)"),

    // #143 — Ralts line
    d(280, "Ralts", ["Pt"], "Routes 209, 212"),
    d(281, "Kirlia", ["Pt"], "Route 212, evolve Ralts"),
    d(282, "Gardevoir", ["Pt"], "Evolve Kirlia (Lv 30)"),
    d(475, "Gallade", ["Pt"], "Evolve male Kirlia (Dawn Stone)"),

    // #147 — Lickitung / Lickilicky
    d(108, "Lickitung", ["Pt"], "Route 215 (Poke Radar)"),
    d(463, "Lickilicky", ["Pt"], "Evolve Lickitung (level up knowing Rollout)"),

    // #149 — Togepi line
    d(175, "Togepi", ["Pt"], "Egg from Cynthia in Hearthome City"),
    d(176, "Togetic", ["Pt"], "Evolve Togepi (friendship)"),
    d(468, "Togekiss", ["Pt"], "Evolve Togetic (Shiny Stone)"),

    // #152 — Eevee and evolutions
    d(133, "Eevee", ["Pt"], "Gift from Bebe in Eterna City, Trophy Garden"),
    d(134, "Vaporeon", ["Pt"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["Pt"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["Pt"], "Evolve Eevee (Fire Stone)"),
    d(196, "Espeon", ["Pt"], "Evolve Eevee (friendship, daytime)"),
    d(197, "Umbreon", ["Pt"], "Evolve Eevee (friendship, nighttime)"),
    d(470, "Leafeon", ["Pt"], "Evolve Eevee (level up near Moss Rock, Eterna Forest)"),
    d(471, "Glaceon", ["Pt"], "Evolve Eevee (level up near Ice Rock, Route 217)"),

    // #160 — Porygon line
    d(137, "Porygon", ["Pt"], "Gift in Veilstone City behind Pokemon Center"),
    d(233, "Porygon2", ["Pt"], "Trade Porygon holding Up-Grade"),
    d(474, "Porygon-Z", ["Pt"], "Trade Porygon2 holding Dubious Disc"),

    // #163 — Skorupi / Drapion
    d(451, "Skorupi", ["Pt"], "Great Marsh, Route 214"),
    d(452, "Drapion", ["Pt"], "Evolve Skorupi (Lv 40)"),

    // #165 — Croagunk / Toxicroak
    d(453, "Croagunk", ["Pt"], "Great Marsh, Route 212"),
    d(454, "Toxicroak", ["Pt"], "Evolve Croagunk (Lv 37)"),

    // #167 — Carnivine
    d(455, "Carnivine", ["Pt"], "Great Marsh"),

    // #168 — Ralt-alternate, Snorunt / Froslass / Glalie
    d(361, "Snorunt", ["Pt"], "Route 216, 217, Snowpoint Temple"),
    d(362, "Glalie", ["Pt"], "Evolve Snorunt (Lv 42)"),
    d(478, "Froslass", ["Pt"], "Evolve female Snorunt (Dawn Stone)"),

    // #171 — Absol
    d(359, "Absol", ["Pt"], "Route 213 (Poke Radar)"),

    // #172 — Duskull line
    d(355, "Duskull", ["Pt"], "Route 209, Lost Tower (night)"),
    d(356, "Dusclops", ["Pt"], "Turnback Cave, evolve Duskull"),
    d(477, "Dusknoir", ["Pt"], "Trade Dusclops holding Reaper Cloth"),

    // #175 — Tangela / Tangrowth
    d(114, "Tangela", ["Pt"], "Great Marsh, Route 214"),
    d(465, "Tangrowth", ["Pt"], "Evolve Tangela (level up knowing AncientPower)"),

    // #177 — Electabuzz line
    d(239, "Elekid", ["Pt"], "Route 204 (Poke Radar), breed Electabuzz"),
    d(125, "Electabuzz", ["Pt"], "Route 222"),
    d(466, "Electivire", ["Pt"], "Trade Electabuzz holding Electirizer"),

    // #180 — Magmar line
    d(240, "Magby", ["Pt"], "Route 227, Stark Mountain, breed Magmar"),
    d(126, "Magmar", ["Pt"], "Route 227, Stark Mountain"),
    d(467, "Magmortar", ["Pt"], "Trade Magmar holding Magmarizer"),

    // #183 — Swinub line
    d(220, "Swinub", ["Pt"], "Route 217, Acuity Lakefront"),
    d(221, "Piloswine", ["Pt"], "Evolve Swinub (Lv 33)"),
    d(473, "Mamoswine", ["Pt"], "Evolve Piloswine (level up knowing AncientPower)"),

    // #186 — Marill / Azumarill
    d(183, "Marill", ["Pt"], "Routes 212, 215, Great Marsh"),
    d(184, "Azumarill", ["Pt"], "Evolve Marill (Lv 18)"),

    // #188 — Houndour / Houndoom
    d(228, "Houndour", ["Pt"], "Route 214, Route 215"),
    d(229, "Houndoom", ["Pt"], "Evolve Houndour (Lv 24)"),

    // #190 — Magnemite line
    d(81, "Magnemite", ["Pt"], "Fuego Ironworks"),
    d(82, "Magneton", ["Pt"], "Fuego Ironworks, evolve Magnemite"),
    d(462, "Magnezone", ["Pt"], "Evolve Magneton (level up in Mt. Coronet)"),

    // #193 — Rhyhorn line
    d(111, "Rhyhorn", ["Pt"], "Routes 214, 227, Victory Road"),
    d(112, "Rhydon", ["Pt"], "Route 227, evolve Rhyhorn"),
    d(464, "Rhyperior", ["Pt"], "Trade Rhydon holding Protector"),

    // #196 — Yanma / Yanmega
    d(193, "Yanma", ["Pt"], "Great Marsh, Route 214 (Poke Radar)"),
    d(469, "Yanmega", ["Pt"], "Evolve Yanma (level up knowing AncientPower)"),

    // #198 — Tropius
    d(357, "Tropius", ["Pt"], "Great Marsh, Route 214"),

    // #199 — Hippopotas / Hippowdon
    d(449, "Hippopotas", ["Pt"], "Ruin Maniac Cave (Route 214)"),
    d(450, "Hippowdon", ["Pt"], "Evolve Hippopotas (Lv 34)"),

    // #201 — Girafarig
    d(203, "Girafarig", ["Pt"], "Route 214"),

    // #202 — Finneon / Lumineon
    d(456, "Finneon", ["Pt"], "Fishing (Routes 218, 219, 220, Good Rod)"),
    d(457, "Lumineon", ["Pt"], "Fishing, evolve Finneon"),

    // #204 — Skorupi/Drapion already listed above

    // #204 — Scyther / Scizor
    d(123, "Scyther", ["Pt"], "Route 210 (Poke Radar)"),
    d(212, "Scizor", ["Pt"], "Trade Scyther holding Metal Coat"),

    // #206 — Chansey line already listed above

    // Giratina
    d(487, "Giratina", ["Pt"], "Distortion World (Lv 47) / Turnback Cave"),

    // #208 — Heatran
    d(485, "Heatran", ["Pt"], "Stark Mountain (post-game, Lv 50)"),

    // #209 — Regigigas
    d(486, "Regigigas", ["Pt"], "Snowpoint Temple (post-game, Lv 1, need 3 Regis)"),

    // #210 — Cresselia
    d(488, "Cresselia", ["Pt"], "Fullmoon Island (post-game, roaming Lv 50)"),

    // Regi trio (Platinum exclusive access)
    d(377, "Regirock", ["Pt"], "Route 228 cave (post-game, Lv 30)"),
    d(378, "Regice", ["Pt"], "Mt. Coronet cave (post-game, Lv 30)"),
    d(379, "Registeel", ["Pt"], "Iron Island cave (post-game, Lv 30)"),

    // Additional Pokemon in the expanded Platinum Sinnoh Dex
    d(190, "Aipom", ["Pt"], "Honey Trees"),

    // Ditto (for breeding)
    d(132, "Ditto", ["Pt"], "Route 218 (Poke Radar)"),

    // Swablu / Altaria
    d(333, "Swablu", ["Pt"], "Route 211"),
    d(334, "Altaria", ["Pt"], "Evolve Swablu (Lv 35)"),

    // Skarmory
    d(227, "Skarmory", ["Pt"], "Route 227"),

    // Farfetch'd
    d(83, "Farfetch'd", ["Pt"], "Route 221 (Poke Radar)"),

    // Hoppip line
    d(187, "Hoppip", ["Pt"], "Route 205 (Poke Radar)"),
    d(188, "Skiploom", ["Pt"], "Evolve Hoppip (Lv 18)"),
    d(189, "Jumpluff", ["Pt"], "Evolve Skiploom (Lv 27)"),

    // Natu / Xatu
    d(177, "Natu", ["Pt"], "Route 224 (Poke Radar)"),
    d(178, "Xatu", ["Pt"], "Evolve Natu (Lv 25)"),

    // Beldum line
    d(374, "Beldum", ["Pt"], "Route 228 (Swarm)"),
    d(375, "Metang", ["Pt"], "Evolve Beldum (Lv 20)"),
    d(376, "Metagross", ["Pt"], "Evolve Metang (Lv 45)"),

    // Camerupt line (Stark Mountain)
    d(322, "Numel", ["Pt"], "Route 227, Stark Mountain"),
    d(323, "Camerupt", ["Pt"], "Stark Mountain, evolve Numel"),

    // Torkoal
    d(324, "Torkoal", ["Pt"], "Stark Mountain, Route 227"),

    // Magcargo line
    d(218, "Slugma", ["Pt"], "Stark Mountain, Route 227"),
    d(219, "Magcargo", ["Pt"], "Stark Mountain, evolve Slugma"),

    // Banette / Shuppet
    d(353, "Shuppet", ["Pt"], "Route 225 (night)"),
    d(354, "Banette", ["Pt"], "Route 225, 226, evolve Shuppet"),

    // Bibarel already listed above

    // Arcanine / Growlithe
    d(58, "Growlithe", ["Pt"], "Routes 201, 202 (Poke Radar)"),
    d(59, "Arcanine", ["Pt"], "Evolve Growlithe (Fire Stone)"),

    // Fearow / Spearow
    d(21, "Spearow", ["Pt"], "Route 225"),
    d(22, "Fearow", ["Pt"], "Routes 225, 226, 227, evolve Spearow"),

    // Raticate / Rattata
    d(19, "Rattata", ["Pt"], "Routes 225, 226"),
    d(20, "Raticate", ["Pt"], "Routes 225, 226, evolve Rattata"),

    // Vulpix / Ninetales
    d(37, "Vulpix", ["Pt"], "Route 209 (Poke Radar)"),
    d(38, "Ninetales", ["Pt"], "Evolve Vulpix (Fire Stone)"),

    // Electrike / Manectric
    d(309, "Electrike", ["Pt"], "Route 222 (Poke Radar)"),
    d(310, "Manectric", ["Pt"], "Evolve Electrike (Lv 26)"),

    // Dunsparce
    d(206, "Dunsparce", ["Pt"], "Route 208 (Poke Radar)"),

    // Smoochum / Jynx
    d(238, "Smoochum", ["Pt"], "Route 217 (Swarm), breed Jynx"),
    d(124, "Jynx", ["Pt"], "Snowpoint Temple, evolve Smoochum"),
  ],
};
