import type { GameDex, GameDexEntry } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ==============================================================
 *  Pokemon Legends: Arceus -- Hisui Pokedex (242 entries)
 *  Single version: all entries use ["LA"]
 *  Hisui is ancient Sinnoh with unique regional forms, new
 *  evolutions, and an open-world action RPG catching system.
 *  All Pokemon are caught in real-time overworld encounters.
 * ============================================================== */
export const LEGENDS_ARCEUS_DEX: GameDex = {
  slug: "legends-arceus",
  versionTags: ["LA"],
  pokemon: [
    // #001-003: Rowlet line (Starter)
    d(722, "Rowlet", ["LA"], "Starter choice at Prelude Beach"),
    d(723, "Dartrix", ["LA"], "Evolve Rowlet"),
    d(724, "Hisuian Decidueye", ["LA"], "Evolve Dartrix"),

    // #004-006: Cyndaquil line (Starter)
    d(155, "Cyndaquil", ["LA"], "Starter choice at Prelude Beach"),
    d(156, "Quilava", ["LA"], "Evolve Cyndaquil"),
    d(157, "Hisuian Typhlosion", ["LA"], "Evolve Quilava"),

    // #007-009: Oshawott line (Starter)
    d(501, "Oshawott", ["LA"], "Starter choice at Prelude Beach"),
    d(502, "Dewott", ["LA"], "Evolve Oshawott"),
    d(503, "Hisuian Samurott", ["LA"], "Evolve Dewott"),

    // #010-011: Bidoof line
    d(399, "Bidoof", ["LA"], "Obsidian Fieldlands, common everywhere"),
    d(400, "Bibarel", ["LA"], "Obsidian Fieldlands, evolve Bidoof"),

    // #012-014: Starly line
    d(396, "Starly", ["LA"], "Obsidian Fieldlands, common"),
    d(397, "Staravia", ["LA"], "Obsidian Fieldlands, Crimson Mirelands, evolve Starly"),
    d(398, "Staraptor", ["LA"], "Coronet Highlands, evolve Staravia"),

    // #015-017: Shinx line
    d(403, "Shinx", ["LA"], "Obsidian Fieldlands"),
    d(404, "Luxio", ["LA"], "Coronet Highlands, evolve Shinx"),
    d(405, "Luxray", ["LA"], "Coronet Highlands, evolve Luxio"),

    // #018-022: Wurmple line
    d(265, "Wurmple", ["LA"], "Obsidian Fieldlands"),
    d(266, "Silcoon", ["LA"], "Obsidian Fieldlands, evolve Wurmple (random)"),
    d(267, "Beautifly", ["LA"], "Obsidian Fieldlands, evolve Silcoon"),
    d(268, "Cascoon", ["LA"], "Obsidian Fieldlands, evolve Wurmple (random)"),
    d(269, "Dustox", ["LA"], "Obsidian Fieldlands, evolve Cascoon"),

    // #023-024: Ponyta line
    d(77, "Ponyta", ["LA"], "Obsidian Fieldlands, Horseshoe Plains"),
    d(78, "Rapidash", ["LA"], "Obsidian Fieldlands, evolve Ponyta"),

    // #025-033: Eevee & Eeveelutions
    d(133, "Eevee", ["LA"], "Obsidian Fieldlands, Horseshoe Plains (rare)"),
    d(134, "Vaporeon", ["LA"], "Evolve Eevee (Water Stone)"),
    d(135, "Jolteon", ["LA"], "Evolve Eevee (Thunder Stone)"),
    d(136, "Flareon", ["LA"], "Evolve Eevee (Fire Stone)"),
    d(196, "Espeon", ["LA"], "Evolve Eevee (high friendship, daytime)"),
    d(197, "Umbreon", ["LA"], "Evolve Eevee (high friendship, nighttime)"),
    d(470, "Leafeon", ["LA"], "Evolve Eevee (Leaf Stone)"),
    d(471, "Glaceon", ["LA"], "Evolve Eevee (Ice Stone)"),
    d(700, "Sylveon", ["LA"], "Evolve Eevee (high friendship, knows Fairy move)"),

    // #034-036: Zubat line
    d(41, "Zubat", ["LA"], "Caves across all regions"),
    d(42, "Golbat", ["LA"], "Caves, evolve Zubat"),
    d(169, "Crobat", ["LA"], "Evolve Golbat (high friendship)"),

    // #037-038: Drifloon line
    d(425, "Drifloon", ["LA"], "Obsidian Fieldlands (night), Cobalt Coastlands"),
    d(426, "Drifblim", ["LA"], "Cobalt Coastlands, evolve Drifloon"),

    // #039-040: Kricketot line
    d(401, "Kricketot", ["LA"], "Obsidian Fieldlands"),
    d(402, "Kricketune", ["LA"], "Obsidian Fieldlands, evolve Kricketot"),

    // #041-042: Buizel line
    d(418, "Buizel", ["LA"], "Obsidian Fieldlands, waterways"),
    d(419, "Floatzel", ["LA"], "Cobalt Coastlands, evolve Buizel"),

    // #043-045: Burmy line
    d(412, "Burmy", ["LA"], "Shaking trees across all regions"),
    d(413, "Wormadam", ["LA"], "Evolve female Burmy"),
    d(414, "Mothim", ["LA"], "Evolve male Burmy"),

    // #046-048: Geodude line
    d(74, "Geodude", ["LA"], "Obsidian Fieldlands, ore deposits"),
    d(75, "Graveler", ["LA"], "Coronet Highlands, evolve Geodude"),
    d(76, "Golem", ["LA"], "Evolve Graveler (Link Cord)"),

    // #049-050: Stantler / Wyrdeer
    d(234, "Stantler", ["LA"], "Obsidian Fieldlands, Deertrack Heights"),
    d(899, "Wyrdeer", ["LA"], "Evolve Stantler (use Psyshield Bash in Agile Style 20 times)"),

    // #051-052: Munchlax / Snorlax
    d(446, "Munchlax", ["LA"], "Obsidian Fieldlands, Deertrack Heights (rare)"),
    d(143, "Snorlax", ["LA"], "Obsidian Fieldlands (Alpha), evolve Munchlax (high friendship)"),

    // #053-054: Paras line
    d(46, "Paras", ["LA"], "Obsidian Fieldlands, Nature's Pantry"),
    d(47, "Parasect", ["LA"], "Obsidian Fieldlands, evolve Paras"),

    // #055-057: Pichu line
    d(172, "Pichu", ["LA"], "Obsidian Fieldlands, Deertrack Heights"),
    d(25, "Pikachu", ["LA"], "Obsidian Fieldlands, evolve Pichu (high friendship)"),
    d(26, "Raichu", ["LA"], "Evolve Pikachu (Thunder Stone)"),

    // #058-060: Abra line
    d(63, "Abra", ["LA"], "Obsidian Fieldlands (teleports when spotted)"),
    d(64, "Kadabra", ["LA"], "Evolve Abra"),
    d(65, "Alakazam", ["LA"], "Evolve Kadabra (Link Cord)"),

    // #061-063: Chimchar line
    d(390, "Chimchar", ["LA"], "Obsidian Fieldlands, cliff areas"),
    d(391, "Monferno", ["LA"], "Coronet Highlands, evolve Chimchar"),
    d(392, "Infernape", ["LA"], "Evolve Monferno"),

    // #064-065: Buneary line
    d(427, "Buneary", ["LA"], "Obsidian Fieldlands"),
    d(428, "Lopunny", ["LA"], "Evolve Buneary (high friendship)"),

    // #066-067: Cherubi line
    d(420, "Cherubi", ["LA"], "Obsidian Fieldlands, shaking trees (rare)"),
    d(421, "Cherrim", ["LA"], "Obsidian Fieldlands (rare), evolve Cherubi"),

    // #068-069: Psyduck line
    d(54, "Psyduck", ["LA"], "Obsidian Fieldlands, waterways"),
    d(55, "Golduck", ["LA"], "Cobalt Coastlands, evolve Psyduck"),

    // #070-071: Combee line
    d(415, "Combee", ["LA"], "Obsidian Fieldlands, shaking trees"),
    d(416, "Vespiquen", ["LA"], "Evolve female Combee"),

    // #072-074: Scyther / Kleavor / Scizor
    d(123, "Scyther", ["LA"], "Obsidian Fieldlands, Grandtree Arena area"),
    d(900, "Kleavor", ["LA"], "Evolve Scyther (Black Augurite)"),
    d(212, "Scizor", ["LA"], "Evolve Scyther (Metal Coat)"),

    // #075: Heracross
    d(214, "Heracross", ["LA"], "Obsidian Fieldlands, Grueling Grove (shaking trees)"),

    // #076-077: Mime Jr. / Mr. Mime
    d(439, "Mime Jr.", ["LA"], "Obsidian Fieldlands, Sandgem Flats"),
    d(122, "Mr. Mime", ["LA"], "Alabaster Icelands, evolve Mime Jr. (knows Mimic)"),

    // #078-079: Aipom line
    d(190, "Aipom", ["LA"], "Cobalt Coastlands, Aipom Hill (shaking trees)"),
    d(424, "Ambipom", ["LA"], "Evolve Aipom (knows Double Hit)"),

    // #080-081: Magikarp line
    d(129, "Magikarp", ["LA"], "Water areas across all regions"),
    d(130, "Gyarados", ["LA"], "Obsidian Fieldlands (Alpha), evolve Magikarp"),

    // #082-083: Shellos line
    d(422, "Shellos", ["LA"], "Obsidian Fieldlands, waterways"),
    d(423, "Gastrodon", ["LA"], "Cobalt Coastlands, evolve Shellos"),

    // #084-085: Hisuian Qwilfish / Overqwil
    d(211, "Hisuian Qwilfish", ["LA"], "Cobalt Coastlands, tidal waters"),
    d(904, "Overqwil", ["LA"], "Evolve Hisuian Qwilfish (use Barb Barrage in Strong Style 20 times)"),

    // #086-088: Happiny line
    d(440, "Happiny", ["LA"], "Obsidian Fieldlands, Cobalt Coastlands"),
    d(113, "Chansey", ["LA"], "Obsidian Fieldlands, evolve Happiny (Oval Stone, daytime)"),
    d(242, "Blissey", ["LA"], "Evolve Chansey (high friendship)"),

    // #089-091: Budew line
    d(406, "Budew", ["LA"], "Obsidian Fieldlands, Crimson Mirelands"),
    d(315, "Roselia", ["LA"], "Crimson Mirelands, evolve Budew (high friendship, daytime)"),
    d(407, "Roserade", ["LA"], "Evolve Roselia (Shiny Stone)"),

    // #092: Carnivine
    d(455, "Carnivine", ["LA"], "Crimson Mirelands, swampy areas"),

    // #093-094: Petilil / Hisuian Lilligant
    d(548, "Petilil", ["LA"], "Crimson Mirelands"),
    d(549, "Hisuian Lilligant", ["LA"], "Evolve Petilil (Sun Stone)"),

    // #095-096: Tangela line
    d(114, "Tangela", ["LA"], "Crimson Mirelands, Cobalt Coastlands"),
    d(465, "Tangrowth", ["LA"], "Evolve Tangela (knows Ancient Power)"),

    // #097-098: Barboach line
    d(339, "Barboach", ["LA"], "Crimson Mirelands, muddy water"),
    d(340, "Whiscash", ["LA"], "Crimson Mirelands, evolve Barboach"),

    // #099-100: Croagunk line
    d(453, "Croagunk", ["LA"], "Crimson Mirelands, bogs"),
    d(454, "Toxicroak", ["LA"], "Crimson Mirelands, evolve Croagunk"),

    // #101-104: Ralts line
    d(280, "Ralts", ["LA"], "Crimson Mirelands (rare)"),
    d(281, "Kirlia", ["LA"], "Crimson Mirelands, evolve Ralts"),
    d(282, "Gardevoir", ["LA"], "Evolve Kirlia (female or male)"),
    d(475, "Gallade", ["LA"], "Evolve male Kirlia (Dawn Stone)"),

    // #105-106: Yanma line
    d(193, "Yanma", ["LA"], "Crimson Mirelands"),
    d(469, "Yanmega", ["LA"], "Evolve Yanma (knows Ancient Power)"),

    // #107-108: Hippopotas line
    d(449, "Hippopotas", ["LA"], "Crimson Mirelands, sandy areas"),
    d(450, "Hippowdon", ["LA"], "Crimson Mirelands, evolve Hippopotas"),

    // #109: Pachirisu
    d(417, "Pachirisu", ["LA"], "Obsidian Fieldlands, Crimson Mirelands"),

    // #110-111: Stunky line
    d(434, "Stunky", ["LA"], "Crimson Mirelands"),
    d(435, "Skuntank", ["LA"], "Crimson Mirelands, evolve Stunky"),

    // #112-114: Teddiursa / Ursaring / Ursaluna
    d(216, "Teddiursa", ["LA"], "Crimson Mirelands, Coronet Highlands"),
    d(217, "Ursaring", ["LA"], "Crimson Mirelands, evolve Teddiursa"),
    d(901, "Ursaluna", ["LA"], "Evolve Ursaring (Peat Block during full moon)"),

    // #115-117: Goomy line (Hisuian Goodra)
    d(704, "Goomy", ["LA"], "Crimson Mirelands (rain), Coronet Highlands"),
    d(705, "Sliggoo", ["LA"], "Coronet Highlands (rain), evolve Goomy"),
    d(706, "Hisuian Goodra", ["LA"], "Evolve Hisuian Sliggoo (rain)"),

    // #118-119: Onix line
    d(95, "Onix", ["LA"], "Crimson Mirelands, Coronet Highlands"),
    d(208, "Steelix", ["LA"], "Coronet Highlands, evolve Onix (Metal Coat)"),

    // #120-122: Rhyhorn line
    d(111, "Rhyhorn", ["LA"], "Crimson Mirelands, Coronet Highlands"),
    d(112, "Rhydon", ["LA"], "Coronet Highlands, evolve Rhyhorn"),
    d(464, "Rhyperior", ["LA"], "Evolve Rhydon (Protector)"),

    // #123-124: Bonsly / Sudowoodo
    d(438, "Bonsly", ["LA"], "Crimson Mirelands"),
    d(185, "Sudowoodo", ["LA"], "Crimson Mirelands, evolve Bonsly (knows Mimic)"),

    // #125-126: Murkrow / Honchkrow
    d(198, "Murkrow", ["LA"], "Crimson Mirelands, Coronet Highlands (night)"),
    d(430, "Honchkrow", ["LA"], "Evolve Murkrow (Dusk Stone)"),

    // #127-128: Misdreavus / Mismagius
    d(200, "Misdreavus", ["LA"], "Crimson Mirelands, Coronet Highlands (night)"),
    d(429, "Mismagius", ["LA"], "Evolve Misdreavus (Dusk Stone)"),

    // #129-131: Gastly line
    d(92, "Gastly", ["LA"], "Obsidian Fieldlands, Coronet Highlands (night)"),
    d(93, "Haunter", ["LA"], "Coronet Highlands (night), evolve Gastly"),
    d(94, "Gengar", ["LA"], "Evolve Haunter (Link Cord)"),

    // #132: Spiritomb
    d(442, "Spiritomb", ["LA"], "Crimson Mirelands (find 107 Wisps, then Shrouded Ruins)"),

    // #133: Unown
    d(201, "Unown", ["LA"], "Solaceon Ruins, Crimson Mirelands (28 forms across Hisui)"),

    // #134-136: Swinub line
    d(220, "Swinub", ["LA"], "Alabaster Icelands"),
    d(221, "Piloswine", ["LA"], "Alabaster Icelands, evolve Swinub"),
    d(473, "Mamoswine", ["LA"], "Evolve Piloswine (knows Ancient Power)"),

    // #137-138: Bergmite / Hisuian Avalugg
    d(712, "Bergmite", ["LA"], "Alabaster Icelands"),
    d(713, "Hisuian Avalugg", ["LA"], "Alabaster Icelands, evolve Bergmite"),

    // #139-141: Snorunt line
    d(361, "Snorunt", ["LA"], "Alabaster Icelands"),
    d(362, "Glalie", ["LA"], "Alabaster Icelands, evolve Snorunt"),
    d(478, "Froslass", ["LA"], "Evolve female Snorunt (Dawn Stone)"),

    // #142-143: Hisuian Zorua / Zoroark
    d(570, "Hisuian Zorua", ["LA"], "Alabaster Icelands, Bonechill Wastes caves (rare)"),
    d(571, "Hisuian Zoroark", ["LA"], "Alabaster Icelands, evolve Hisuian Zorua"),

    // #144-145: Rufflet / Hisuian Braviary
    d(627, "Rufflet", ["LA"], "Alabaster Icelands, Cobalt Coastlands"),
    d(628, "Hisuian Braviary", ["LA"], "Evolve Rufflet"),

    // #146-147: Riolu / Lucario
    d(447, "Riolu", ["LA"], "Alabaster Icelands (rare)"),
    d(448, "Lucario", ["LA"], "Alabaster Icelands, evolve Riolu (high friendship, daytime)"),

    // #148-150: Hisuian Sneasel / Sneasler / Weavile
    d(215, "Hisuian Sneasel", ["LA"], "Coronet Highlands, Alabaster Icelands"),
    d(903, "Sneasler", ["LA"], "Evolve Hisuian Sneasel (Razor Claw, daytime)"),
    d(461, "Weavile", ["LA"], "Evolve Hisuian Sneasel (Razor Claw, nighttime)"),

    // #151-152: Hisuian Growlithe / Arcanine
    d(58, "Hisuian Growlithe", ["LA"], "Cobalt Coastlands, Crimson Mirelands"),
    d(59, "Hisuian Arcanine", ["LA"], "Evolve Hisuian Growlithe (Fire Stone)"),

    // #153-154: Hisuian Voltorb / Electrode
    d(100, "Hisuian Voltorb", ["LA"], "Coronet Highlands, Sacred Plaza"),
    d(101, "Hisuian Electrode", ["LA"], "Evolve Hisuian Voltorb (Leaf Stone)"),

    // #155: Rotom
    d(479, "Rotom", ["LA"], "Coronet Highlands (rare), space-time distortions"),

    // #156-158: Gible line
    d(443, "Gible", ["LA"], "Coronet Highlands, Wayward Cave"),
    d(444, "Gabite", ["LA"], "Coronet Highlands, evolve Gible"),
    d(445, "Garchomp", ["LA"], "Coronet Highlands (Alpha), evolve Gabite"),

    // #159-160: Nosepass / Probopass
    d(299, "Nosepass", ["LA"], "Coronet Highlands"),
    d(476, "Probopass", ["LA"], "Evolve Nosepass (in Coronet Highlands magnetic field area)"),

    // #161-162: Bronzor line
    d(436, "Bronzor", ["LA"], "Coronet Highlands, ruins"),
    d(437, "Bronzong", ["LA"], "Coronet Highlands, evolve Bronzor"),

    // #163-165: Machop line
    d(66, "Machop", ["LA"], "Obsidian Fieldlands, Coronet Highlands"),
    d(67, "Machoke", ["LA"], "Coronet Highlands, evolve Machop"),
    d(68, "Machamp", ["LA"], "Evolve Machoke (Link Cord)"),

    // #166-168: Cleffa line
    d(173, "Cleffa", ["LA"], "Coronet Highlands (night)"),
    d(35, "Clefairy", ["LA"], "Coronet Highlands (night), evolve Cleffa (high friendship)"),
    d(36, "Clefable", ["LA"], "Evolve Clefairy (Moon Stone)"),

    // #169-170: Chingling / Chimecho
    d(433, "Chingling", ["LA"], "Coronet Highlands"),
    d(358, "Chimecho", ["LA"], "Coronet Highlands, evolve Chingling (high friendship, nighttime)"),

    // #171-173: Elekid line
    d(239, "Elekid", ["LA"], "Coronet Highlands, Alabaster Icelands"),
    d(125, "Electabuzz", ["LA"], "Coronet Highlands, evolve Elekid"),
    d(466, "Electivire", ["LA"], "Evolve Electabuzz (Electirizer)"),

    // #174-176: Magby line
    d(240, "Magby", ["LA"], "Cobalt Coastlands, Firespit Island"),
    d(126, "Magmar", ["LA"], "Cobalt Coastlands, evolve Magby"),
    d(467, "Magmortar", ["LA"], "Evolve Magmar (Magmarizer)"),

    // #177-178: Basculin / Basculegion
    d(550, "Basculin", ["LA"], "Cobalt Coastlands, rivers and seas (White-Striped form)"),
    d(902, "Basculegion", ["LA"], "Evolve White-Striped Basculin (take 294+ recoil damage)"),

    // #179-180: Tentacool line
    d(72, "Tentacool", ["LA"], "Cobalt Coastlands, ocean"),
    d(73, "Tentacruel", ["LA"], "Cobalt Coastlands, evolve Tentacool"),

    // #181-182: Finneon line
    d(456, "Finneon", ["LA"], "Cobalt Coastlands, ocean"),
    d(457, "Lumineon", ["LA"], "Cobalt Coastlands, evolve Finneon"),

    // #183-184: Mantyke / Mantine
    d(458, "Mantyke", ["LA"], "Cobalt Coastlands, ocean"),
    d(226, "Mantine", ["LA"], "Cobalt Coastlands, evolve Mantyke (Remoraid in party)"),

    // #185-186: Remoraid / Octillery
    d(223, "Remoraid", ["LA"], "Cobalt Coastlands, ocean"),
    d(224, "Octillery", ["LA"], "Cobalt Coastlands, evolve Remoraid"),

    // #187-188: Skorupi / Drapion
    d(451, "Skorupi", ["LA"], "Crimson Mirelands, Coronet Highlands"),
    d(452, "Drapion", ["LA"], "Crimson Mirelands, evolve Skorupi"),

    // #189: Chatot
    d(441, "Chatot", ["LA"], "Cobalt Coastlands"),

    // #190-192: Duskull line
    d(355, "Duskull", ["LA"], "Cobalt Coastlands (night)"),
    d(356, "Dusclops", ["LA"], "Cobalt Coastlands, evolve Duskull"),
    d(477, "Dusknoir", ["LA"], "Evolve Dusclops (Reaper Cloth)"),

    // #193-194: Lickitung line
    d(108, "Lickitung", ["LA"], "Obsidian Fieldlands, Crimson Mirelands"),
    d(463, "Lickilicky", ["LA"], "Evolve Lickitung (knows Rollout)"),

    // #195-197: Togepi line
    d(175, "Togepi", ["LA"], "Crimson Mirelands (rare), Cobalt Coastlands"),
    d(176, "Togetic", ["LA"], "Evolve Togepi (high friendship)"),
    d(468, "Togekiss", ["LA"], "Evolve Togetic (Shiny Stone)"),

    // #198-199: Gligar / Gliscor
    d(207, "Gligar", ["LA"], "Coronet Highlands, Crimson Mirelands"),
    d(472, "Gliscor", ["LA"], "Evolve Gligar (Razor Fang, nighttime)"),

    // #200-201: Staryu / Starmie
    d(120, "Staryu", ["LA"], "Cobalt Coastlands, tidal areas"),
    d(121, "Starmie", ["LA"], "Evolve Staryu (Water Stone)"),

    // #202-204: Porygon line
    d(137, "Porygon", ["LA"], "Space-time distortions (rare)"),
    d(233, "Porygon2", ["LA"], "Evolve Porygon (Upgrade)"),
    d(474, "Porygon-Z", ["LA"], "Evolve Porygon2 (Dubious Disc)"),

    // #205-206: Vulpix / Ninetales
    d(37, "Vulpix", ["LA"], "Cobalt Coastlands, near volcanic areas"),
    d(38, "Ninetales", ["LA"], "Evolve Vulpix (Fire Stone)"),

    // #207-208: Goldeen / Seaking
    d(118, "Goldeen", ["LA"], "Obsidian Fieldlands, rivers"),
    d(119, "Seaking", ["LA"], "Obsidian Fieldlands, evolve Goldeen"),

    // #209-211: Spheal line
    d(363, "Spheal", ["LA"], "Cobalt Coastlands, Alabaster Icelands"),
    d(364, "Sealeo", ["LA"], "Alabaster Icelands, evolve Spheal"),
    d(365, "Walrein", ["LA"], "Alabaster Icelands (Alpha), evolve Sealeo"),

    // #212: Tauros
    d(128, "Tauros", ["LA"], "Obsidian Fieldlands, Cobalt Coastlands"),

    // #213-214: Natu / Xatu
    d(177, "Natu", ["LA"], "Coronet Highlands"),
    d(178, "Xatu", ["LA"], "Coronet Highlands, evolve Natu"),

    // #215-216: Snover / Abomasnow
    d(459, "Snover", ["LA"], "Alabaster Icelands"),
    d(460, "Abomasnow", ["LA"], "Alabaster Icelands, evolve Snover"),

    // #217-219: Magnemite line
    d(81, "Magnemite", ["LA"], "Cobalt Coastlands, space-time distortions"),
    d(82, "Magneton", ["LA"], "Evolve Magnemite"),
    d(462, "Magnezone", ["LA"], "Evolve Magneton (Thunder Stone)"),

    // #220: Ditto
    d(132, "Ditto", ["LA"], "Obsidian Fieldlands, disguised as other Pokemon (rare)"),

    // #221: Girafarig
    d(203, "Girafarig", ["LA"], "Crimson Mirelands, Scarlet Bog"),

    // #222-223: Glameow line
    d(431, "Glameow", ["LA"], "Crimson Mirelands, Cobalt Coastlands"),
    d(432, "Purugly", ["LA"], "Crimson Mirelands, evolve Glameow"),

    // #224-226: Turtwig line (space-time distortions)
    d(387, "Turtwig", ["LA"], "Space-time distortions, Crimson Mirelands"),
    d(388, "Grotle", ["LA"], "Space-time distortions, evolve Turtwig"),
    d(389, "Torterra", ["LA"], "Crimson Mirelands (Alpha), evolve Grotle"),

    // #227-229: Piplup line (space-time distortions)
    d(393, "Piplup", ["LA"], "Space-time distortions, Cobalt Coastlands"),
    d(394, "Prinplup", ["LA"], "Space-time distortions, evolve Piplup"),
    d(395, "Empoleon", ["LA"], "Cobalt Coastlands (Alpha), evolve Prinplup"),

    // #230-231: Cranidos / Rampardos (space-time distortions)
    d(408, "Cranidos", ["LA"], "Space-time distortions, Coronet Highlands"),
    d(409, "Rampardos", ["LA"], "Evolve Cranidos"),

    // #232-233: Shieldon / Bastiodon (space-time distortions)
    d(410, "Shieldon", ["LA"], "Space-time distortions, Coronet Highlands"),
    d(411, "Bastiodon", ["LA"], "Evolve Shieldon"),

    // #234-236: Legendaries -- Lake Guardians
    d(480, "Uxie", ["LA"], "Lake Acuity, Alabaster Icelands (post-game)"),
    d(481, "Mesprit", ["LA"], "Lake Verity, Obsidian Fieldlands (post-game)"),
    d(482, "Azelf", ["LA"], "Lake Valor, Crimson Mirelands (post-game)"),

    // #237-238: Dialga / Palkia
    d(483, "Dialga", ["LA"], "Temple of Sinnoh (story)"),
    d(484, "Palkia", ["LA"], "Temple of Sinnoh (story)"),

    // #239: Heatran
    d(485, "Heatran", ["LA"], "Cobalt Coastlands, Lava Dome Sanctum (post-game)"),

    // #240: Regigigas
    d(486, "Regigigas", ["LA"], "Snowpoint Temple, Alabaster Icelands (post-game)"),

    // #241: Giratina
    d(487, "Giratina", ["LA"], "Turnback Cave, Cobalt Coastlands (post-game)"),

    // #242: Cresselia
    d(488, "Cresselia", ["LA"], "Moonview Arena, Coronet Highlands (post-game)"),

    // Bonus legendaries and mythicals (obtainable but not numbered in Hisui dex)
    d(491, "Darkrai", ["LA"], "Request (requires BDSP save data)"),
    d(492, "Shaymin", ["LA"], "Request (requires Sword/Shield save data)"),
    d(490, "Manaphy", ["LA"], "Request: The Sea's Legend"),
    d(489, "Phione", ["LA"], "Request: The Sea's Legend"),
    d(493, "Arceus", ["LA"], "Temple of Sinnoh (complete Hisui Pokedex)"),

    // Forces of Nature
    d(641, "Tornadus", ["LA"], "Alabaster Icelands, blizzard weather (post-game)"),
    d(642, "Thundurus", ["LA"], "Cobalt Coastlands, thunderstorm weather (post-game)"),
    d(645, "Landorus", ["LA"], "Obsidian Fieldlands (post-game)"),
    d(905, "Enamorus", ["LA"], "Crimson Mirelands (post-game, after catching other 3)"),

    // Regis
    d(377, "Regirock", ["LA"], "Request, Hisui region (post-game)"),
    d(378, "Regice", ["LA"], "Request, Hisui region (post-game)"),
    d(379, "Registeel", ["LA"], "Request, Hisui region (post-game)"),
  ],
};
