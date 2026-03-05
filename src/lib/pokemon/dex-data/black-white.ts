import type { GameDex, GameDexEntry } from "../game-dex";

/* ── Helper ─────────────────────────────────────── */
const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Black & White — Unova Pokédex (#494-#649)
 *  All 156 new Pokémon introduced in Generation V
 * ══════════════════════════════════════════════════ */
export const BLACK_WHITE_DEX: GameDex = {
  slug: "black-white",
  versionTags: ["B", "W"],
  pokemon: [
    // ── Starters & Evolutions ──────────────────────
    d(495, "Snivy", ["B", "W"], "Starter from Prof. Juniper"),
    d(496, "Servine", ["B", "W"], "Evolve Snivy"),
    d(497, "Serperior", ["B", "W"], "Evolve Servine"),
    d(498, "Tepig", ["B", "W"], "Starter from Prof. Juniper"),
    d(499, "Pignite", ["B", "W"], "Evolve Tepig"),
    d(500, "Emboar", ["B", "W"], "Evolve Pignite"),
    d(501, "Oshawott", ["B", "W"], "Starter from Prof. Juniper"),
    d(502, "Dewott", ["B", "W"], "Evolve Oshawott"),
    d(503, "Samurott", ["B", "W"], "Evolve Dewott"),

    // ── Route 1-3 Pokémon ──────────────────────────
    d(504, "Patrat", ["B", "W"], "Routes 1, 2, 3"),
    d(505, "Watchog", ["B", "W"], "Routes 7, 15, 18, evolve Patrat"),
    d(506, "Lillipup", ["B", "W"], "Routes 1, 2, 3"),
    d(507, "Herdier", ["B", "W"], "Routes 10, evolve Lillipup"),
    d(508, "Stoutland", ["B", "W"], "Evolve Herdier"),
    d(509, "Purrloin", ["B", "W"], "Routes 2, 3"),
    d(510, "Liepard", ["B", "W"], "Route 5, 9, 16, evolve Purrloin"),

    // ── Elemental Monkeys ──────────────────────────
    d(511, "Pansage", ["B", "W"], "Gift in Dreamyard (chose Tepig)"),
    d(512, "Simisage", ["B", "W"], "Evolve Pansage (Leaf Stone)"),
    d(513, "Pansear", ["B", "W"], "Gift in Dreamyard (chose Oshawott)"),
    d(514, "Simisear", ["B", "W"], "Evolve Pansear (Fire Stone)"),
    d(515, "Panpour", ["B", "W"], "Gift in Dreamyard (chose Snivy)"),
    d(516, "Simipour", ["B", "W"], "Evolve Panpour (Water Stone)"),

    // ── Dreamyard & Early Areas ────────────────────
    d(517, "Munna", ["B", "W"], "Dreamyard"),
    d(518, "Musharna", ["B", "W"], "Evolve Munna (Moon Stone)"),

    // ── Early Birds & Route 3+ ─────────────────────
    d(519, "Pidove", ["B", "W"], "Routes 3, 12, Pinwheel Forest"),
    d(520, "Tranquill", ["B", "W"], "Routes 6, 7, 12, evolve Pidove"),
    d(521, "Unfezant", ["B", "W"], "Route 12, evolve Tranquill"),
    d(522, "Blitzle", ["B", "W"], "Route 3"),
    d(523, "Zebstrika", ["B", "W"], "Route 7, evolve Blitzle"),

    // ── Wellspring & Pinwheel Forest Area ──────────
    d(524, "Roggenrola", ["B", "W"], "Wellspring Cave"),
    d(525, "Boldore", ["B", "W"], "Chargestone Cave, Twist Mountain, evolve Roggenrola"),
    d(526, "Gigalith", ["B", "W"], "Trade evolve Boldore"),
    d(527, "Woobat", ["B", "W"], "Wellspring Cave, caves"),
    d(528, "Swoobat", ["B", "W"], "Evolve Woobat (happiness)"),
    d(529, "Drilbur", ["B", "W"], "Wellspring Cave, Chargestone Cave (dust clouds)"),
    d(530, "Excadrill", ["B", "W"], "Challenger's Cave, evolve Drilbur"),

    // ── Pinwheel Forest & Nacrene Area ─────────────
    d(531, "Audino", ["B", "W"], "Shaking grass (all routes)"),
    d(532, "Timburr", ["B", "W"], "Pinwheel Forest"),
    d(533, "Gurdurr", ["B", "W"], "Twist Mountain, evolve Timburr"),
    d(534, "Conkeldurr", ["B", "W"], "Trade evolve Gurdurr"),
    d(535, "Tympole", ["B", "W"], "Pinwheel Forest, Route 8 (Surfing)"),
    d(536, "Palpitoad", ["B", "W"], "Route 8, Icirrus City, evolve Tympole"),
    d(537, "Seismitoad", ["B", "W"], "Evolve Palpitoad"),
    d(538, "Throh", ["B", "W"], "Routes 10, 15, 18, Pinwheel Forest"),
    d(539, "Sawk", ["B", "W"], "Routes 10, 15, 18, Pinwheel Forest"),
    d(540, "Sewaddle", ["B", "W"], "Pinwheel Forest, Route 6"),
    d(541, "Swadloon", ["B", "W"], "Pinwheel Forest, Route 6, evolve Sewaddle"),
    d(542, "Leavanny", ["B", "W"], "Evolve Swadloon (happiness)"),
    d(543, "Venipede", ["B", "W"], "Pinwheel Forest, Route 6"),
    d(544, "Whirlipede", ["B", "W"], "Evolve Venipede"),
    d(545, "Scolipede", ["B", "W"], "Evolve Whirlipede"),

    // ── Version Exclusives: Grass ──────────────────
    d(546, "Cottonee", ["B"], "Pinwheel Forest, Route 6 (Black only)"),
    d(547, "Whimsicott", ["B"], "Evolve Cottonee (Sun Stone, Black only)"),
    d(548, "Petilil", ["W"], "Pinwheel Forest, Route 6 (White only)"),
    d(549, "Lilligant", ["W"], "Evolve Petilil (Sun Stone, White only)"),

    // ── Castelia & Route 4 Area ────────────────────
    d(550, "Basculin", ["B", "W"], "Surfing (many routes, form varies by version)"),
    d(551, "Sandile", ["B", "W"], "Route 4, Desert Resort"),
    d(552, "Krokorok", ["B", "W"], "Relic Castle, evolve Sandile"),
    d(553, "Krookodile", ["B", "W"], "Evolve Krokorok"),
    d(554, "Darumaka", ["B", "W"], "Route 4, Desert Resort"),
    d(555, "Darmanitan", ["B", "W"], "Desert Resort (special), evolve Darumaka"),
    d(556, "Maractus", ["B", "W"], "Desert Resort"),
    d(557, "Dwebble", ["B", "W"], "Desert Resort"),
    d(558, "Crustle", ["B", "W"], "Evolve Dwebble"),
    d(559, "Scraggy", ["B", "W"], "Route 4, Desert Resort"),
    d(560, "Scrafty", ["B", "W"], "Routes 15, 18, evolve Scraggy"),
    d(561, "Sigilyph", ["B", "W"], "Desert Resort"),
    d(562, "Yamask", ["B", "W"], "Relic Castle"),
    d(563, "Cofagrigus", ["B", "W"], "Evolve Yamask"),

    // ── Relic Castle Fossils ───────────────────────
    d(564, "Tirtouga", ["B", "W"], "Revive Cover Fossil (Relic Castle)"),
    d(565, "Carracosta", ["B", "W"], "Evolve Tirtouga"),
    d(566, "Archen", ["B", "W"], "Revive Plume Fossil (Relic Castle)"),
    d(567, "Archeops", ["B", "W"], "Evolve Archen"),

    // ── Castelia City & Surroundings ────────────────
    d(568, "Trubbish", ["B", "W"], "Route 5, 16"),
    d(569, "Garbodor", ["B", "W"], "Route 9, evolve Trubbish"),
    d(570, "Zorua", ["B", "W"], "Gift in Castelia City (event)"),
    d(571, "Zoroark", ["B", "W"], "Evolve Zorua"),
    d(572, "Minccino", ["B", "W"], "Route 5, 9, 16"),
    d(573, "Cinccino", ["B", "W"], "Evolve Minccino (Shiny Stone)"),

    // ── Version Exclusives: Psychic ────────────────
    d(574, "Gothita", ["B"], "Route 5, 16 (Black only)"),
    d(575, "Gothorita", ["B"], "Route 9, evolve Gothita (Black only)"),
    d(576, "Gothitelle", ["B"], "Evolve Gothorita (Black only)"),
    d(577, "Solosis", ["W"], "Route 5, 16 (White only)"),
    d(578, "Duosion", ["W"], "Route 9, evolve Solosis (White only)"),
    d(579, "Reuniclus", ["W"], "Evolve Duosion (White only)"),

    // ── Driftveil & Bridges ────────────────────────
    d(580, "Ducklett", ["B", "W"], "Driftveil Drawbridge (shadow)"),
    d(581, "Swanna", ["B", "W"], "Route 13, evolve Ducklett"),
    d(582, "Vanillite", ["B", "W"], "Cold Storage"),
    d(583, "Vanillish", ["B", "W"], "Dragonspiral Tower, evolve Vanillite"),
    d(584, "Vanilluxe", ["B", "W"], "Evolve Vanillish"),
    d(585, "Deerling", ["B", "W"], "Route 6, 7 (form changes by season)"),
    d(586, "Sawsbuck", ["B", "W"], "Dragonspiral Tower, evolve Deerling"),
    d(587, "Emolga", ["B", "W"], "Routes 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16 (shaking grass)"),

    // ── Chargestone Cave & Route 6 ─────────────────
    d(588, "Karrablast", ["B", "W"], "Routes 6, 11"),
    d(589, "Escavalier", ["B", "W"], "Trade Karrablast for Shelmet"),
    d(590, "Foongus", ["B", "W"], "Routes 6, 7, 10"),
    d(591, "Amoonguss", ["B", "W"], "Routes 10, 11, evolve Foongus"),
    d(592, "Frillish", ["B", "W"], "Routes 4, 17, 18 (Surfing)"),
    d(593, "Jellicent", ["B", "W"], "Route 17, 18, evolve Frillish"),
    d(594, "Alomomola", ["B", "W"], "Routes 4, 17, 18 (Surfing, rippling water)"),

    // ── Electric Cave Pokémon ──────────────────────
    d(595, "Joltik", ["B", "W"], "Chargestone Cave"),
    d(596, "Galvantula", ["B", "W"], "Evolve Joltik"),
    d(597, "Ferroseed", ["B", "W"], "Chargestone Cave"),
    d(598, "Ferrothorn", ["B", "W"], "Evolve Ferroseed"),
    d(599, "Klink", ["B", "W"], "Chargestone Cave"),
    d(600, "Klang", ["B", "W"], "Evolve Klink"),
    d(601, "Klinklang", ["B", "W"], "Evolve Klang"),
    d(602, "Tynamo", ["B", "W"], "Chargestone Cave"),
    d(603, "Eelektrik", ["B", "W"], "Evolve Tynamo"),
    d(604, "Eelektross", ["B", "W"], "Evolve Eelektrik (Thunderstone)"),

    // ── Celestial Tower & Route 7 ──────────────────
    d(605, "Elgyem", ["B", "W"], "Celestial Tower"),
    d(606, "Beheeyem", ["B", "W"], "Route 14, evolve Elgyem"),
    d(607, "Litwick", ["B", "W"], "Celestial Tower"),
    d(608, "Lampent", ["B", "W"], "Celestial Tower, evolve Litwick"),
    d(609, "Chandelure", ["B", "W"], "Evolve Lampent (Dusk Stone)"),

    // ── Dragon Pokémon (Opelucid area) ─────────────
    d(610, "Axew", ["B", "W"], "Mistralton Cave"),
    d(611, "Fraxure", ["B", "W"], "Evolve Axew"),
    d(612, "Haxorus", ["B", "W"], "Evolve Fraxure"),

    // ── Twist Mountain & Icirrus Area ──────────────
    d(613, "Cubchoo", ["B", "W"], "Twist Mountain, Route 7 (winter)"),
    d(614, "Beartic", ["B", "W"], "Dragonspiral Tower, evolve Cubchoo"),
    d(615, "Cryogonal", ["B", "W"], "Twist Mountain, Dragonspiral Tower"),
    d(616, "Shelmet", ["B", "W"], "Routes 6, 8, Icirrus City"),
    d(617, "Accelgor", ["B", "W"], "Trade Shelmet for Karrablast"),
    d(618, "Stunfisk", ["B", "W"], "Routes 8, Icirrus City, Moor of Icirrus"),

    // ── Route 8-9 & Opelucid Area ──────────────────
    d(619, "Mienfoo", ["B", "W"], "Routes 14, 15, Victory Road"),
    d(620, "Mienshao", ["B", "W"], "Evolve Mienfoo"),
    d(621, "Druddigon", ["B", "W"], "Dragonspiral Tower"),
    d(622, "Golett", ["B", "W"], "Dragonspiral Tower"),
    d(623, "Golurk", ["B", "W"], "Evolve Golett"),
    d(624, "Pawniard", ["B", "W"], "Route 9"),
    d(625, "Bisharp", ["B", "W"], "Route 11, evolve Pawniard"),
    d(626, "Bouffalant", ["B", "W"], "Route 10"),

    // ── Version Exclusives: Birds ──────────────────
    d(627, "Rufflet", ["W"], "Route 10, 11 (White only)"),
    d(628, "Braviary", ["W"], "Route 11, evolve Rufflet (White only)"),
    d(629, "Vullaby", ["B"], "Route 10, 11 (Black only)"),
    d(630, "Mandibuzz", ["B"], "Route 11, evolve Vullaby (Black only)"),

    // ── Route 10+ Late Game ────────────────────────
    d(631, "Heatmor", ["B", "W"], "Victory Road, Twist Mountain"),
    d(632, "Durant", ["B", "W"], "Victory Road, Twist Mountain"),

    // ── Pseudo-Legendary ───────────────────────────
    d(633, "Deino", ["B", "W"], "Victory Road (rare)"),
    d(634, "Zweilous", ["B", "W"], "Victory Road, evolve Deino"),
    d(635, "Hydreigon", ["B", "W"], "Evolve Zweilous"),

    // ── Larvesta & Volcarona ───────────────────────
    d(636, "Larvesta", ["B", "W"], "Route 18 (very rare), Egg from man on Route 18"),
    d(637, "Volcarona", ["B", "W"], "Relic Castle deepest room (Lv. 70), evolve Larvesta"),

    // ── Legendary: Swords of Justice ───────────────
    d(638, "Cobalion", ["B", "W"], "Mistralton Cave (post-game, Lv. 42)"),
    d(639, "Terrakion", ["B", "W"], "Victory Road post-game area (Lv. 42)"),
    d(640, "Virizion", ["B", "W"], "Pinwheel Forest inner area (Lv. 42)"),

    // ── Legendary: Forces of Nature ────────────────
    d(641, "Tornadus", ["B"], "Roaming Unova (Black only, Lv. 40)"),
    d(642, "Thundurus", ["W"], "Roaming Unova (White only, Lv. 40)"),
    d(645, "Landorus", ["B", "W"], "Abundant Shrine (requires Tornadus + Thundurus, Lv. 70)"),

    // ── Legendary: Tao Trio ────────────────────────
    d(643, "Reshiram", ["B"], "N's Castle (Black, Lv. 50)"),
    d(644, "Zekrom", ["W"], "N's Castle (White, Lv. 50)"),
    d(646, "Kyurem", ["B", "W"], "Giant Chasm (post-game, Lv. 75)"),

    // ── Mythical ───────────────────────────────────
    d(647, "Keldeo", ["B", "W"], "Event distribution only"),
    d(648, "Meloetta", ["B", "W"], "Event distribution only"),
    d(649, "Genesect", ["B", "W"], "Event distribution only"),
  ],
};
