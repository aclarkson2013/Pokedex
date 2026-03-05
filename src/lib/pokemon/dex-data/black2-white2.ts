import type { GameDexEntry, GameDex } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Black 2 & White 2 — New Unova Pokédex (~300 Pokémon)
 *  Expanded regional dex includes older-gen Pokémon
 *  from the start, unlike the original Black & White.
 * ══════════════════════════════════════════════════ */
export const BLACK2_WHITE2_DEX: GameDex = {
  slug: "black2-white2",
  versionTags: ["B2", "W2"],
  pokemon: [
    // ── Starters & evolutions ───────────────────────
    d(495, "Snivy", ["B2", "W2"], "Starter from Bianca"),
    d(496, "Servine", ["B2", "W2"], "Evolve Snivy"),
    d(497, "Serperior", ["B2", "W2"], "Evolve Servine"),
    d(498, "Tepig", ["B2", "W2"], "Starter from Bianca"),
    d(499, "Pignite", ["B2", "W2"], "Evolve Tepig"),
    d(500, "Emboar", ["B2", "W2"], "Evolve Pignite"),
    d(501, "Oshawott", ["B2", "W2"], "Starter from Bianca"),
    d(502, "Dewott", ["B2", "W2"], "Evolve Oshawott"),
    d(503, "Samurott", ["B2", "W2"], "Evolve Dewott"),

    // ── Route 19–20, Floccesy Ranch ─────────────────
    d(504, "Patrat", ["B2", "W2"], "Routes 19, 20"),
    d(505, "Watchog", ["B2", "W2"], "Routes 1, 7, 18, evolve Patrat"),
    d(506, "Lillipup", ["B2", "W2"], "Floccesy Ranch, Route 20"),
    d(507, "Herdier", ["B2", "W2"], "Routes 1, 12, evolve Lillipup"),
    d(508, "Stoutland", ["B2", "W2"], "Evolve Herdier"),
    d(509, "Purrloin", ["B2", "W2"], "Routes 19, 20"),
    d(510, "Liepard", ["B2", "W2"], "Route 5, 9, evolve Purrloin"),
    d(519, "Pidove", ["B2", "W2"], "Routes 19, 20, Floccesy Ranch"),
    d(520, "Tranquill", ["B2", "W2"], "Routes 6, 7, 12, evolve Pidove"),
    d(521, "Unfezant", ["B2", "W2"], "Route 23, evolve Tranquill"),
    d(540, "Sewaddle", ["B2", "W2"], "Route 20, Lostlorn Forest"),
    d(541, "Swadloon", ["B2", "W2"], "Lostlorn Forest, evolve Sewaddle"),
    d(542, "Leavanny", ["B2", "W2"], "Evolve Swadloon (high friendship)"),
    d(191, "Sunkern", ["B2", "W2"], "Route 20"),
    d(192, "Sunflora", ["B2", "W2"], "Evolve Sunkern (Sun Stone)"),

    // ── Floccesy Ranch extras ────────────────────────
    d(179, "Mareep", ["B2", "W2"], "Floccesy Ranch"),
    d(180, "Flaaffy", ["B2", "W2"], "Evolve Mareep"),
    d(181, "Ampharos", ["B2", "W2"], "Evolve Flaaffy"),
    d(54, "Psyduck", ["B2", "W2"], "Floccesy Ranch, Route 11"),
    d(55, "Golduck", ["B2", "W2"], "Route 11, evolve Psyduck"),
    d(298, "Azurill", ["B2", "W2"], "Floccesy Ranch, Route 20"),
    d(183, "Marill", ["B2", "W2"], "Route 6, 20, evolve Azurill"),
    d(184, "Azumarill", ["B2", "W2"], "Evolve Marill"),
    d(447, "Riolu", ["B2", "W2"], "Floccesy Ranch"),
    d(448, "Lucario", ["B2", "W2"], "Evolve Riolu (high friendship, daytime)"),

    // ── Virbank Complex ──────────────────────────────
    d(81, "Magnemite", ["B2", "W2"], "Virbank Complex"),
    d(82, "Magneton", ["B2", "W2"], "P2 Laboratory, evolve Magnemite"),
    d(462, "Magnezone", ["B2", "W2"], "Evolve Magneton (Chargestone Cave)"),
    d(58, "Growlithe", ["B2", "W2"], "Virbank Complex"),
    d(59, "Arcanine", ["B2", "W2"], "Evolve Growlithe (Fire Stone)"),
    d(109, "Koffing", ["B2", "W2"], "Virbank Complex"),
    d(110, "Weezing", ["B2", "W2"], "Evolve Koffing"),
    d(240, "Magby", ["B2"], "Virbank Complex"),
    d(126, "Magmar", ["B2"], "Evolve Magby"),
    d(467, "Magmortar", ["B2"], "Evolve Magmar (trade with Magmarizer)"),
    d(239, "Elekid", ["W2"], "Virbank Complex"),
    d(125, "Electabuzz", ["W2"], "Evolve Elekid"),
    d(466, "Electivire", ["W2"], "Evolve Electabuzz (trade with Electirizer)"),

    // ── Castelia City / Sewers ───────────────────────
    d(19, "Rattata", ["B2", "W2"], "Castelia Sewers"),
    d(20, "Raticate", ["B2", "W2"], "Evolve Rattata"),
    d(41, "Zubat", ["B2", "W2"], "Castelia Sewers"),
    d(42, "Golbat", ["B2", "W2"], "Evolve Zubat"),
    d(169, "Crobat", ["B2", "W2"], "Evolve Golbat (high friendship)"),
    d(88, "Grimer", ["B2", "W2"], "Castelia Sewers"),
    d(89, "Muk", ["B2", "W2"], "Evolve Grimer"),
    d(543, "Venipede", ["B2", "W2"], "Castelia Sewers, Route 20"),
    d(544, "Whirlipede", ["B2", "W2"], "Evolve Venipede"),
    d(545, "Scolipede", ["B2", "W2"], "Evolve Whirlipede"),
    d(546, "Cottonee", ["B2"], "Castelia City, Route 4"),
    d(547, "Whimsicott", ["B2"], "Evolve Cottonee (Sun Stone)"),
    d(548, "Petilil", ["W2"], "Castelia City, Route 4"),
    d(549, "Lilligant", ["W2"], "Evolve Petilil (Sun Stone)"),
    d(569, "Garbodor", ["B2", "W2"], "Route 9, evolve Trubbish"),
    d(568, "Trubbish", ["B2", "W2"], "Route 4, 5, 16"),
    d(587, "Emolga", ["B2", "W2"], "Routes 5, 6, 7, Lostlorn Forest"),

    // ── Eevee line ───────────────────────────────────
    d(133, "Eevee", ["B2", "W2"], "Castelia City (gift from Amanita)"),
    d(134, "Vaporeon", ["B2", "W2"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["B2", "W2"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["B2", "W2"], "Evolve Eevee (Fire Stone)"),
    d(196, "Espeon", ["B2", "W2"], "Evolve Eevee (high friendship, daytime)"),
    d(197, "Umbreon", ["B2", "W2"], "Evolve Eevee (high friendship, nighttime)"),
    d(470, "Leafeon", ["B2", "W2"], "Evolve Eevee (Pinwheel Forest moss rock)"),
    d(471, "Glaceon", ["B2", "W2"], "Evolve Eevee (Twist Mountain ice rock)"),

    // ── Route 4 / Desert Resort ──────────────────────
    d(551, "Sandile", ["B2", "W2"], "Route 4, Desert Resort"),
    d(552, "Krokorok", ["B2", "W2"], "Relic Castle, evolve Sandile"),
    d(553, "Krookodile", ["B2", "W2"], "Evolve Krokorok"),
    d(554, "Darumaka", ["B2", "W2"], "Route 4, Desert Resort"),
    d(555, "Darmanitan", ["B2", "W2"], "Evolve Darumaka"),
    d(559, "Scraggy", ["B2", "W2"], "Route 4, Desert Resort"),
    d(560, "Scrafty", ["B2", "W2"], "Evolve Scraggy"),
    d(27, "Sandshrew", ["B2", "W2"], "Desert Resort, Relic Castle"),
    d(28, "Sandslash", ["B2", "W2"], "Relic Castle, evolve Sandshrew"),
    d(561, "Sigilyph", ["B2", "W2"], "Desert Resort"),
    d(556, "Maractus", ["B2", "W2"], "Desert Resort"),
    d(557, "Dwebble", ["B2", "W2"], "Desert Resort, Route 18"),
    d(558, "Crustle", ["B2", "W2"], "Evolve Dwebble"),
    d(328, "Trapinch", ["B2", "W2"], "Desert Resort (rare)"),
    d(329, "Vibrava", ["B2", "W2"], "Evolve Trapinch"),
    d(330, "Flygon", ["B2", "W2"], "Evolve Vibrava"),
    d(562, "Yamask", ["B2", "W2"], "Relic Castle"),
    d(563, "Cofagrigus", ["B2", "W2"], "Evolve Yamask"),

    // ── Nimbasa City area ────────────────────────────
    d(522, "Blitzle", ["B2", "W2"], "Route 3"),
    d(523, "Zebstrika", ["B2", "W2"], "Route 7, evolve Blitzle"),
    d(572, "Minccino", ["B2", "W2"], "Route 4, 5, 9, 16"),
    d(573, "Cinccino", ["B2", "W2"], "Evolve Minccino (Shiny Stone)"),

    // ── Route 5 / version exclusives ─────────────────
    d(574, "Gothita", ["B2"], "Route 5, 16"),
    d(575, "Gothorita", ["B2"], "Evolve Gothita"),
    d(576, "Gothitelle", ["B2"], "Evolve Gothorita"),
    d(577, "Solosis", ["W2"], "Route 5, 16"),
    d(578, "Duosion", ["W2"], "Evolve Solosis"),
    d(579, "Reuniclus", ["W2"], "Evolve Duosion"),

    // ── Driftveil / Route 6 area ─────────────────────
    d(529, "Drilbur", ["B2", "W2"], "Chargestone Cave, Mistralton Cave"),
    d(530, "Excadrill", ["B2", "W2"], "Victory Road, Giant Chasm, evolve Drilbur"),
    d(343, "Baltoy", ["B2", "W2"], "Relic Castle, Route 4"),
    d(344, "Claydol", ["B2", "W2"], "Evolve Baltoy"),
    d(95, "Onix", ["B2", "W2"], "Relic Castle, Victory Road"),
    d(208, "Steelix", ["B2", "W2"], "Evolve Onix (trade with Metal Coat)"),

    // ── Zorua gift ───────────────────────────────────
    d(570, "Zorua", ["B2", "W2"], "Gift from former Team Plasma member in Driftveil"),
    d(571, "Zoroark", ["B2", "W2"], "Evolve Zorua"),

    // ── Route 6 / Mistralton area ────────────────────
    d(585, "Deerling", ["B2", "W2"], "Route 6, 7, 12"),
    d(586, "Sawsbuck", ["B2", "W2"], "Evolve Deerling"),
    d(588, "Karrablast", ["B2", "W2"], "Route 6, 11"),
    d(589, "Escavalier", ["B2", "W2"], "Evolve Karrablast (trade with Shelmet)"),
    d(616, "Shelmet", ["B2", "W2"], "Route 6, 11"),
    d(617, "Accelgor", ["B2", "W2"], "Evolve Shelmet (trade with Karrablast)"),
    d(590, "Foongus", ["B2", "W2"], "Route 6, 7, 22"),
    d(591, "Amoonguss", ["B2", "W2"], "Evolve Foongus"),

    // ── Chargestone Cave ─────────────────────────────
    d(595, "Joltik", ["B2", "W2"], "Chargestone Cave"),
    d(596, "Galvantula", ["B2", "W2"], "Evolve Joltik"),
    d(597, "Ferroseed", ["B2", "W2"], "Chargestone Cave"),
    d(598, "Ferrothorn", ["B2", "W2"], "Evolve Ferroseed"),
    d(525, "Boldore", ["B2", "W2"], "Chargestone Cave, Victory Road"),
    d(526, "Gigalith", ["B2", "W2"], "Evolve Boldore (trade)"),
    d(524, "Roggenrola", ["B2", "W2"], "Relic Passage"),
    d(599, "Klink", ["B2", "W2"], "Chargestone Cave"),
    d(600, "Klang", ["B2", "W2"], "Evolve Klink"),
    d(601, "Klinklang", ["B2", "W2"], "Evolve Klang"),
    d(299, "Nosepass", ["B2", "W2"], "Chargestone Cave"),
    d(476, "Probopass", ["B2", "W2"], "Evolve Nosepass (Chargestone Cave)"),
    d(602, "Tynamo", ["B2", "W2"], "Chargestone Cave (rare)"),
    d(603, "Eelektrik", ["B2", "W2"], "Evolve Tynamo"),
    d(604, "Eelektross", ["B2", "W2"], "Evolve Eelektrik (Thunder Stone)"),

    // ── Celestial Tower ──────────────────────────────
    d(607, "Litwick", ["B2", "W2"], "Celestial Tower"),
    d(608, "Lampent", ["B2", "W2"], "Evolve Litwick"),
    d(609, "Chandelure", ["B2", "W2"], "Evolve Lampent (Dusk Stone)"),
    d(605, "Elgyem", ["B2", "W2"], "Celestial Tower"),
    d(606, "Beheeyem", ["B2", "W2"], "Evolve Elgyem"),

    // ── Mistralton area extras ───────────────────────
    d(527, "Woobat", ["B2", "W2"], "Reversal Mountain, caves"),
    d(528, "Swoobat", ["B2", "W2"], "Evolve Woobat (high friendship)"),

    // ── Reversal Mountain ────────────────────────────
    d(227, "Skarmory", ["B2", "W2"], "Reversal Mountain"),
    d(451, "Skorupi", ["B2", "W2"], "Reversal Mountain"),
    d(452, "Drapion", ["B2", "W2"], "Evolve Skorupi"),
    d(322, "Numel", ["B2", "W2"], "Reversal Mountain"),
    d(323, "Camerupt", ["B2", "W2"], "Evolve Numel"),
    d(325, "Spoink", ["B2", "W2"], "Reversal Mountain"),
    d(326, "Grumpig", ["B2", "W2"], "Evolve Spoink"),
    d(426, "Drifblim", ["B2", "W2"], "Reversal Mountain, evolve Drifloon"),
    d(425, "Drifloon", ["B2", "W2"], "Route 13"),

    // ── Surfing / Water routes ───────────────────────
    d(592, "Frillish", ["B2", "W2"], "Routes 4, 17, 18, Undella Bay, Surfing"),
    d(593, "Jellicent", ["B2", "W2"], "Undella Bay, evolve Frillish"),
    d(223, "Remoraid", ["B2", "W2"], "Undella Bay, Surfing"),
    d(224, "Octillery", ["B2", "W2"], "Evolve Remoraid"),
    d(458, "Mantyke", ["B2", "W2"], "Undella Bay, Surfing"),
    d(226, "Mantine", ["B2", "W2"], "Undella Bay, evolve Mantyke"),
    d(550, "Basculin", ["B2", "W2"], "Surfing (various routes)"),
    d(594, "Alomomola", ["B2", "W2"], "Route 4, 17, 18, Surfing"),
    d(320, "Wailmer", ["B2", "W2"], "Undella Bay, Surfing"),
    d(321, "Wailord", ["B2", "W2"], "Evolve Wailmer"),
    d(131, "Lapras", ["B2", "W2"], "Village Bridge, Surfing (rare)"),

    // ── Fishing ──────────────────────────────────────
    d(118, "Goldeen", ["B2", "W2"], "Fishing (various routes)"),
    d(119, "Seaking", ["B2", "W2"], "Evolve Goldeen"),
    d(129, "Magikarp", ["B2", "W2"], "Fishing (various routes)"),
    d(130, "Gyarados", ["B2", "W2"], "Evolve Magikarp"),
    d(341, "Corphish", ["B2", "W2"], "Fishing (Striaton City)"),
    d(342, "Crawdaunt", ["B2", "W2"], "Evolve Corphish"),
    d(170, "Chinchou", ["B2", "W2"], "Undella Bay, Fishing"),
    d(171, "Lanturn", ["B2", "W2"], "Evolve Chinchou"),
    d(211, "Qwilfish", ["B2", "W2"], "Route 17, 18, Fishing"),
    d(318, "Carvanha", ["B2", "W2"], "Village Bridge, Fishing"),
    d(319, "Sharpedo", ["B2", "W2"], "Village Bridge, Fishing, evolve Carvanha"),
    d(339, "Barboach", ["B2", "W2"], "Route 8, Icirrus City, Fishing"),
    d(340, "Whiscash", ["B2", "W2"], "Evolve Barboach"),

    // ── Route 12–13 area ─────────────────────────────
    d(315, "Roselia", ["B2", "W2"], "Route 12"),
    d(407, "Roserade", ["B2", "W2"], "Evolve Roselia (Shiny Stone)"),
    d(406, "Budew", ["B2", "W2"], "Route 12"),
    d(415, "Combee", ["B2", "W2"], "Route 12"),
    d(416, "Vespiquen", ["B2", "W2"], "Evolve Combee (female only)"),
    d(214, "Heracross", ["B2", "W2"], "Route 12"),
    d(127, "Pinsir", ["B2", "W2"], "Route 12"),
    d(359, "Absol", ["B2", "W2"], "Route 13"),
    d(114, "Tangela", ["B2", "W2"], "Route 13"),
    d(465, "Tangrowth", ["B2", "W2"], "Evolve Tangela (learn Ancient Power)"),
    d(337, "Lunatone", ["B2", "W2"], "Route 13, Giant Chasm"),
    d(338, "Solrock", ["B2", "W2"], "Route 13, Giant Chasm"),

    // ── Opelucid area ────────────────────────────────
    d(610, "Axew", ["B2", "W2"], "Mistralton Cave"),
    d(611, "Fraxure", ["B2", "W2"], "Nature Preserve, evolve Axew"),
    d(612, "Haxorus", ["B2", "W2"], "Nature Preserve (Shiny), evolve Fraxure"),
    d(621, "Druddigon", ["B2", "W2"], "Dragonspiral Tower"),
    d(334, "Altaria", ["B2", "W2"], "Nature Preserve, evolve Swablu"),
    d(333, "Swablu", ["B2", "W2"], "Route 14"),

    // ── Version exclusives: Vullaby / Rufflet ────────
    d(629, "Vullaby", ["B2"], "Route 23"),
    d(630, "Mandibuzz", ["B2"], "Route 4 (Thursday), evolve Vullaby"),
    d(627, "Rufflet", ["W2"], "Route 23"),
    d(628, "Braviary", ["W2"], "Route 4 (Monday), evolve Rufflet"),

    // ── Version exclusives: Buneary / Skitty ─────────
    d(427, "Buneary", ["B2"], "Castelia City (grass)"),
    d(428, "Lopunny", ["B2"], "Evolve Buneary (high friendship)"),
    d(300, "Skitty", ["W2"], "Castelia City (grass)"),
    d(301, "Delcatty", ["W2"], "Evolve Skitty (Moon Stone)"),

    // ── Route 7 / Twist Mountain area ────────────────
    d(613, "Cubchoo", ["B2", "W2"], "Route 7, Twist Mountain"),
    d(614, "Beartic", ["B2", "W2"], "Dragonspiral Tower, evolve Cubchoo"),
    d(615, "Cryogonal", ["B2", "W2"], "Twist Mountain"),
    d(220, "Swinub", ["B2", "W2"], "Route 7, Twist Mountain"),
    d(221, "Piloswine", ["B2", "W2"], "Giant Chasm, evolve Swinub"),
    d(473, "Mamoswine", ["B2", "W2"], "Evolve Piloswine (learn Ancient Power)"),

    // ── Lostlorn Forest ──────────────────────────────
    d(285, "Shroomish", ["B2", "W2"], "Pinwheel Forest (hidden grotto)"),
    d(286, "Breloom", ["B2", "W2"], "Evolve Shroomish"),
    d(531, "Audino", ["B2", "W2"], "Shaking grass (any route)"),
    d(511, "Pansage", ["B2", "W2"], "Lostlorn Forest, Pinwheel Forest"),
    d(512, "Simisage", ["B2", "W2"], "Evolve Pansage (Leaf Stone)"),
    d(513, "Pansear", ["B2", "W2"], "Lostlorn Forest, Pinwheel Forest"),
    d(514, "Simisear", ["B2", "W2"], "Evolve Pansear (Fire Stone)"),
    d(515, "Panpour", ["B2", "W2"], "Lostlorn Forest, Pinwheel Forest"),
    d(516, "Simipour", ["B2", "W2"], "Evolve Panpour (Water Stone)"),

    // ── Giant Chasm ──────────────────────────────────
    d(35, "Clefairy", ["B2", "W2"], "Giant Chasm"),
    d(36, "Clefable", ["B2", "W2"], "Evolve Clefairy (Moon Stone)"),
    d(215, "Sneasel", ["B2", "W2"], "Giant Chasm"),
    d(461, "Weavile", ["B2", "W2"], "Evolve Sneasel (Razor Claw, nighttime)"),
    d(225, "Delibird", ["B2", "W2"], "Giant Chasm"),
    d(583, "Vanillish", ["B2", "W2"], "Giant Chasm, evolve Vanillite"),
    d(582, "Vanillite", ["B2", "W2"], "Cold Storage"),
    d(584, "Vanilluxe", ["B2", "W2"], "Evolve Vanillish"),
    d(375, "Metang", ["B2", "W2"], "Giant Chasm"),
    d(374, "Beldum", ["B2", "W2"], "Giant Chasm (hidden grotto)"),
    d(376, "Metagross", ["B2", "W2"], "Evolve Metang"),

    // ── Victory Road / Route 23 ──────────────────────
    d(626, "Bouffalant", ["B2", "W2"], "Route 23"),
    d(538, "Throh", ["B2", "W2"], "Route 23, Pinwheel Forest"),
    d(539, "Sawk", ["B2", "W2"], "Route 23, Pinwheel Forest"),
    d(619, "Mienfoo", ["B2", "W2"], "Route 23, Victory Road"),
    d(620, "Mienshao", ["B2", "W2"], "Evolve Mienfoo"),
    d(632, "Durant", ["B2", "W2"], "Victory Road, Clay Tunnel"),
    d(631, "Heatmor", ["B2", "W2"], "Twist Mountain"),
    d(633, "Deino", ["B2", "W2"], "Victory Road (rare)"),
    d(634, "Zweilous", ["B2", "W2"], "Evolve Deino"),
    d(635, "Hydreigon", ["B2", "W2"], "Evolve Zweilous"),

    // ── Pinwheel Forest / Route 3 ────────────────────
    d(517, "Munna", ["B2", "W2"], "Dreamyard"),
    d(518, "Musharna", ["B2", "W2"], "Dreamyard (Shaking Grass), evolve Munna"),
    d(532, "Timburr", ["B2", "W2"], "Pinwheel Forest"),
    d(533, "Gurdurr", ["B2", "W2"], "Evolve Timburr"),
    d(534, "Conkeldurr", ["B2", "W2"], "Evolve Gurdurr (trade)"),
    d(535, "Tympole", ["B2", "W2"], "Pinwheel Forest, Route 8"),
    d(536, "Palpitoad", ["B2", "W2"], "Evolve Tympole"),
    d(537, "Seismitoad", ["B2", "W2"], "Evolve Palpitoad"),

    // ── Route 1–3 / Striaton area ────────────────────
    d(564, "Tirtouga", ["B2", "W2"], "Revive Cover Fossil (Relic Castle)"),
    d(565, "Carracosta", ["B2", "W2"], "Evolve Tirtouga"),
    d(566, "Archen", ["B2", "W2"], "Revive Plume Fossil (Relic Castle)"),
    d(567, "Archeops", ["B2", "W2"], "Evolve Archen"),
    d(25, "Pikachu", ["B2", "W2"], "Route 1, Lostlorn Forest"),
    d(26, "Raichu", ["B2", "W2"], "Evolve Pikachu (Thunder Stone)"),

    // ── Route 9 area ─────────────────────────────────
    d(624, "Pawniard", ["B2", "W2"], "Route 9"),
    d(625, "Bisharp", ["B2", "W2"], "Evolve Pawniard"),
    d(552, "Krokorok", ["B2", "W2"], "Relic Castle, evolve Sandile"),
    d(336, "Seviper", ["B2", "W2"], "Route 9"),
    d(335, "Zangoose", ["B2", "W2"], "Route 9"),

    // ── Undella Town / Route 14 area ─────────────────
    d(564, "Tirtouga", ["B2", "W2"]),
    d(116, "Horsea", ["B2", "W2"], "Undella Bay, Fishing"),
    d(117, "Seadra", ["B2", "W2"], "Evolve Horsea"),
    d(230, "Kingdra", ["B2", "W2"], "Evolve Seadra (trade with Dragon Scale)"),
    d(363, "Spheal", ["B2", "W2"], "Undella Bay, Surfing"),
    d(364, "Sealeo", ["B2", "W2"], "Evolve Spheal"),
    d(365, "Walrein", ["B2", "W2"], "Evolve Sealeo"),

    // ── Abundant Shrine / Route 14 ───────────────────
    d(187, "Hoppip", ["B2", "W2"], "Route 14"),
    d(188, "Skiploom", ["B2", "W2"], "Evolve Hoppip"),
    d(189, "Jumpluff", ["B2", "W2"], "Evolve Skiploom"),
    d(200, "Misdreavus", ["B2", "W2"], "Abundant Shrine"),
    d(429, "Mismagius", ["B2", "W2"], "Evolve Misdreavus (Dusk Stone)"),
    d(37, "Vulpix", ["B2", "W2"], "Abundant Shrine"),
    d(38, "Ninetales", ["B2", "W2"], "Evolve Vulpix (Fire Stone)"),
    d(234, "Stantler", ["B2", "W2"], "Abundant Shrine"),
    d(235, "Smeargle", ["B2", "W2"], "Route 5 (hidden grotto)"),

    // ── Route 8 / Moor of Icirrus ────────────────────
    d(580, "Ducklett", ["B2", "W2"], "Driftveil Drawbridge"),
    d(581, "Swanna", ["B2", "W2"], "Evolve Ducklett"),
    d(618, "Stunfisk", ["B2", "W2"], "Route 8, Icirrus City"),
    d(561, "Sigilyph", ["B2", "W2"]),
    d(622, "Golett", ["B2", "W2"], "Dragonspiral Tower"),
    d(623, "Golurk", ["B2", "W2"], "Evolve Golett"),

    // ── Dragonspiral Tower / Icirrus ─────────────────
    d(610, "Axew", ["B2", "W2"]),
    d(621, "Druddigon", ["B2", "W2"]),
    d(147, "Dratini", ["B2", "W2"], "Dragonspiral Tower, Fishing"),
    d(148, "Dragonair", ["B2", "W2"], "Dragonspiral Tower (Surfing), evolve Dratini"),
    d(149, "Dragonite", ["B2", "W2"], "Evolve Dragonair"),

    // ── Humilau / Route 21–22 ────────────────────────
    d(366, "Clamperl", ["B2", "W2"], "Route 4, Fishing"),
    d(367, "Huntail", ["B2", "W2"], "Evolve Clamperl (trade with Deep Sea Tooth)"),
    d(368, "Gorebyss", ["B2", "W2"], "Evolve Clamperl (trade with Deep Sea Scale)"),
    d(370, "Luvdisc", ["B2", "W2"], "Route 4, Fishing"),
    d(592, "Frillish", ["B2", "W2"]),
    d(419, "Floatzel", ["B2", "W2"], "Route 23, Surfing"),
    d(418, "Buizel", ["B2", "W2"], "Route 23, Surfing"),

    // ── Seaside Cave ─────────────────────────────────
    d(564, "Tirtouga", ["B2", "W2"]),
    d(566, "Archen", ["B2", "W2"]),

    // ── Route 16, 18 area ────────────────────────────
    d(569, "Garbodor", ["B2", "W2"]),
    d(274, "Nuzleaf", ["B2", "W2"], "Nature Preserve"),
    d(275, "Shiftry", ["B2", "W2"], "Evolve Nuzleaf (Leaf Stone)"),
    d(273, "Seedot", ["B2", "W2"], "Route 18 (hidden grotto)"),

    // ── Undella area extras ──────────────────────────
    d(72, "Tentacool", ["B2", "W2"], "Surfing (various routes)"),
    d(73, "Tentacruel", ["B2", "W2"], "Evolve Tentacool"),
    d(90, "Shellder", ["B2", "W2"], "Undella Bay, Fishing"),
    d(91, "Cloyster", ["B2", "W2"], "Evolve Shellder (Water Stone)"),
    d(120, "Staryu", ["B2", "W2"], "Undella Bay, Surfing"),
    d(121, "Starmie", ["B2", "W2"], "Evolve Staryu (Water Stone)"),

    // ── Twist Mountain ───────────────────────────────
    d(74, "Geodude", ["B2", "W2"], "Relic Passage"),
    d(75, "Graveler", ["B2", "W2"], "Evolve Geodude"),
    d(76, "Golem", ["B2", "W2"], "Evolve Graveler (trade)"),
    d(306, "Aggron", ["B2", "W2"], "Evolve Lairon"),
    d(305, "Lairon", ["B2", "W2"], "Evolve Aron"),
    d(304, "Aron", ["B2", "W2"], "Mistralton Cave"),

    // ── P2 Laboratory ────────────────────────────────
    d(599, "Klink", ["B2", "W2"]),
    d(462, "Magnezone", ["B2", "W2"]),

    // ── Additional Pokemon from various routes ───────
    d(132, "Ditto", ["B2", "W2"], "Giant Chasm (hidden grotto)"),
    d(353, "Shuppet", ["B2", "W2"], "Route 13 (hidden grotto)"),
    d(354, "Banette", ["B2", "W2"], "Evolve Shuppet"),
    d(198, "Murkrow", ["B2", "W2"], "Abundant Shrine"),
    d(430, "Honchkrow", ["B2", "W2"], "Evolve Murkrow (Dusk Stone)"),
    d(174, "Igglybuff", ["B2", "W2"], "Route 1 (hidden grotto)"),
    d(39, "Jigglypuff", ["B2", "W2"], "Route 1, 2"),
    d(40, "Wigglytuff", ["B2", "W2"], "Evolve Jigglypuff (Moon Stone)"),
    d(442, "Spiritomb", ["B2", "W2"], "Route 14 (hidden grotto, rare)"),
    d(137, "Porygon", ["B2", "W2"], "Hidden Grotto (Route 18)"),
    d(233, "Porygon2", ["B2", "W2"], "Evolve Porygon (trade with Up-Grade)"),
    d(474, "Porygon-Z", ["B2", "W2"], "Evolve Porygon2 (trade with Dubious Disc)"),

    // ── Humilau / Route 17–18 Surf extras ────────────
    d(592, "Frillish", ["B2", "W2"]),
    d(222, "Corsola", ["B2", "W2"], "Route 18, Surfing"),
    d(369, "Relicanth", ["B2", "W2"], "Route 4, Fishing (rare)"),

    // ── Dreamyard ────────────────────────────────────
    d(517, "Munna", ["B2", "W2"]),
    d(63, "Abra", ["B2", "W2"], "Dreamyard (hidden grotto)"),
    d(64, "Kadabra", ["B2", "W2"], "Evolve Abra"),
    d(65, "Alakazam", ["B2", "W2"], "Evolve Kadabra (trade)"),

    // ── Undella Bay / Hidden Grottoes extras ──────────
    d(185, "Sudowoodo", ["B2", "W2"], "Route 20 (Surf)"),
    d(438, "Bonsly", ["B2", "W2"], "Route 20"),
    d(202, "Wobbuffet", ["B2", "W2"], "Route 20 (hidden grotto)"),
    d(360, "Wynaut", ["B2", "W2"], "Route 20 (hidden grotto)"),
    d(371, "Bagon", ["B2", "W2"], "Route 14 (hidden grotto)"),
    d(372, "Shelgon", ["B2", "W2"], "Evolve Bagon"),
    d(373, "Salamence", ["B2", "W2"], "Evolve Shelgon"),

    // ── Clay Tunnel / Underground ────────────────────
    d(449, "Hippopotas", ["B2", "W2"], "Desert Resort (hidden grotto)"),
    d(450, "Hippowdon", ["B2", "W2"], "Evolve Hippopotas"),
    d(66, "Machop", ["B2", "W2"], "Pinwheel Forest"),
    d(67, "Machoke", ["B2", "W2"], "Evolve Machop"),
    d(68, "Machamp", ["B2", "W2"], "Evolve Machoke (trade)"),

    // ── Route 1–3 extras ─────────────────────────────
    d(504, "Patrat", ["B2", "W2"]),
    d(506, "Lillipup", ["B2", "W2"]),
    d(16, "Pidgey", ["B2", "W2"], "Dreamyard (hidden grotto, rare)"),

    // ── Legendary Pokemon ────────────────────────────
    d(643, "Reshiram", ["W2"], "Dragonspiral Tower (post-game)"),
    d(644, "Zekrom", ["B2"], "Dragonspiral Tower (post-game)"),
    d(646, "Kyurem", ["B2", "W2"], "Giant Chasm (post-game)"),
    d(638, "Cobalion", ["B2", "W2"], "Route 13 (post-game)"),
    d(639, "Terrakion", ["B2", "W2"], "Route 22 (post-game)"),
    d(640, "Virizion", ["B2", "W2"], "Route 11 (post-game)"),
    d(485, "Heatran", ["B2", "W2"], "Reversal Mountain (post-game)"),
    d(488, "Cresselia", ["B2", "W2"], "Marvelous Bridge (post-game)"),
    d(380, "Latias", ["B2"], "Dreamyard (post-game)"),
    d(381, "Latios", ["W2"], "Dreamyard (post-game)"),
    d(377, "Regirock", ["B2", "W2"], "Rock Peak Chamber (post-game, key)"),
    d(378, "Regice", ["B2", "W2"], "Iceberg Chamber (post-game, key)"),
    d(379, "Registeel", ["B2", "W2"], "Iron Chamber (post-game, key)"),
    d(486, "Regigigas", ["B2", "W2"], "Twist Mountain (post-game, all 3 Regis needed)"),
    d(480, "Uxie", ["B2", "W2"], "Nacrene City (post-game)"),
    d(481, "Mesprit", ["B2", "W2"], "Celestial Tower (post-game)"),
    d(482, "Azelf", ["B2", "W2"], "Route 23 (post-game)"),

    // ── Additional wild Pokemon ──────────────────────
    d(396, "Starly", ["B2", "W2"], "Route 6 (hidden grotto)"),
    d(397, "Staravia", ["B2", "W2"], "Evolve Starly"),
    d(398, "Staraptor", ["B2", "W2"], "Evolve Staravia"),
    d(309, "Electrike", ["B2", "W2"], "Route 3"),
    d(310, "Manectric", ["B2", "W2"], "Evolve Electrike"),
    d(209, "Snubbull", ["B2", "W2"], "Route 2"),
    d(210, "Granbull", ["B2", "W2"], "Evolve Snubbull"),
    d(313, "Volbeat", ["B2", "W2"], "Route 3"),
    d(314, "Illumise", ["B2", "W2"], "Route 3"),
    d(248, "Tyranitar", ["B2", "W2"], "Evolve Pupitar"),
    d(247, "Pupitar", ["B2", "W2"], "Evolve Larvitar"),
    d(246, "Larvitar", ["B2", "W2"], "Route 15 (hidden grotto)"),
    d(357, "Tropius", ["B2", "W2"], "Route 18"),
    d(128, "Tauros", ["B2", "W2"], "Route 12"),

    // ── Wellspring Cave / Relic Passage ──────────────
    d(527, "Woobat", ["B2", "W2"]),
    d(524, "Roggenrola", ["B2", "W2"]),

    // ── Volcarona (special) ──────────────────────────
    d(636, "Larvesta", ["B2", "W2"], "Route 18"),
    d(637, "Volcarona", ["B2", "W2"], "Relic Castle deepest room (Lv 35), evolve Larvesta"),

    // ── Pokemon you encounter but are not catchable in wild ──
    d(571, "Zoroark", ["B2", "W2"]),
    d(547, "Whimsicott", ["B2"]),
    d(549, "Lilligant", ["W2"]),

    // ── Gift / Special Pokemon ───────────────────────
    d(147, "Dratini", ["B2", "W2"]),
    d(443, "Gible", ["B2"], "Black Tower reward (Shiny, post-game)"),
    d(444, "Gabite", ["B2"], "Evolve Gible"),
    d(445, "Garchomp", ["B2"], "Evolve Gabite"),
    d(147, "Dratini", ["W2"], "White Treehollow reward (Shiny, post-game)"),
    d(148, "Dragonair", ["W2"]),
    d(149, "Dragonite", ["W2"]),

    // ── N's Pokemon (special gift) ───────────────────
    d(570, "Zorua", ["B2", "W2"]),
  ],
};
