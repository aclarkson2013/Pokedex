import type { GameDex, GameDexEntry } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ==============================================================
 *  Omega Ruby & Alpha Sapphire -- Hoenn Pokedex (~211 Pokemon)
 * ============================================================== */
export const ORAS_DEX: GameDex = {
  slug: "omega-ruby-alpha-sapphire",
  versionTags: ["OR", "AS"],
  pokemon: [
    // #001-003  Treecko line
    d(252, "Treecko", ["OR", "AS"], "Starter from Prof. Birch"),
    d(253, "Grovyle", ["OR", "AS"], "Evolve Treecko"),
    d(254, "Sceptile", ["OR", "AS"], "Evolve Grovyle (Mega: Sceptilite)"),

    // #004-006  Torchic line
    d(255, "Torchic", ["OR", "AS"], "Starter from Prof. Birch"),
    d(256, "Combusken", ["OR", "AS"], "Evolve Torchic"),
    d(257, "Blaziken", ["OR", "AS"], "Evolve Combusken (Mega: Blazikenite)"),

    // #007-009  Mudkip line
    d(258, "Mudkip", ["OR", "AS"], "Starter from Prof. Birch"),
    d(259, "Marshtomp", ["OR", "AS"], "Evolve Mudkip"),
    d(260, "Swampert", ["OR", "AS"], "Evolve Marshtomp (Mega: Swampertite)"),

    // #010-012  Poochyena line
    d(261, "Poochyena", ["OR", "AS"], "Routes 101, 102, 103, 104"),
    d(262, "Mightyena", ["OR", "AS"], "Routes 120, 121, evolve Poochyena"),

    // #013-015  Zigzagoon line
    d(263, "Zigzagoon", ["OR", "AS"], "Routes 101, 102, 103, 104, 110, 116, 118, 119"),
    d(264, "Linoone", ["OR", "AS"], "Routes 118, 119, 120, 121, evolve Zigzagoon"),

    // #016-018  Wurmple line
    d(265, "Wurmple", ["OR", "AS"], "Routes 101, 102, 104, Petalburg Woods"),
    d(266, "Silcoon", ["OR", "AS"], "Petalburg Woods, evolve Wurmple (random)"),
    d(267, "Beautifly", ["OR", "AS"], "Evolve Silcoon"),
    d(268, "Cascoon", ["OR", "AS"], "Petalburg Woods, evolve Wurmple (random)"),
    d(269, "Dustox", ["OR", "AS"], "Evolve Cascoon"),

    // #019-021  Lotad line (AS exclusive)
    d(270, "Lotad", ["AS"], "Routes 102, 114, 120"),
    d(271, "Lombre", ["AS"], "Evolve Lotad"),
    d(272, "Ludicolo", ["AS"], "Evolve Lombre (Water Stone)"),

    // #022-024  Seedot line (OR exclusive)
    d(273, "Seedot", ["OR"], "Routes 102, 114, 120"),
    d(274, "Nuzleaf", ["OR"], "Evolve Seedot"),
    d(275, "Shiftry", ["OR"], "Evolve Nuzleaf (Leaf Stone)"),

    // #025-027  Taillow line
    d(276, "Taillow", ["OR", "AS"], "Routes 104, 115, 116, Petalburg Woods"),
    d(277, "Swellow", ["OR", "AS"], "Routes 115, evolve Taillow"),

    // #028-029  Wingull line
    d(278, "Wingull", ["OR", "AS"], "Routes 103, 104, 109, 110, 115, 118, 119, 121, 122, 124-134"),
    d(279, "Pelipper", ["OR", "AS"], "Routes 119, 124-134, evolve Wingull"),

    // #030-031  Ralts line
    d(280, "Ralts", ["OR", "AS"], "Route 102 (rare)"),
    d(281, "Kirlia", ["OR", "AS"], "Evolve Ralts"),
    d(282, "Gardevoir", ["OR", "AS"], "Evolve Kirlia (Mega: Gardevoirite)"),
    d(475, "Gallade", ["OR", "AS"], "Evolve male Kirlia (Dawn Stone) (Mega: Galladite)"),

    // #034-035  Surskit line
    d(283, "Surskit", ["OR", "AS"], "Route 102, Petalburg City (Surfing)"),
    d(284, "Masquerain", ["OR", "AS"], "Evolve Surskit"),

    // #036-037  Shroomish line
    d(285, "Shroomish", ["OR", "AS"], "Petalburg Woods"),
    d(286, "Breloom", ["OR", "AS"], "Evolve Shroomish"),

    // #038-040  Slakoth line
    d(287, "Slakoth", ["OR", "AS"], "Petalburg Woods (rare)"),
    d(288, "Vigoroth", ["OR", "AS"], "Evolve Slakoth"),
    d(289, "Slaking", ["OR", "AS"], "Evolve Vigoroth"),

    // #041-042  Nincada line
    d(290, "Nincada", ["OR", "AS"], "Route 116"),
    d(291, "Ninjask", ["OR", "AS"], "Evolve Nincada (Lv20)"),
    d(292, "Shedinja", ["OR", "AS"], "Evolve Nincada (empty party slot + spare Poke Ball)"),

    // #043-044  Whismur line
    d(293, "Whismur", ["OR", "AS"], "Rusturf Tunnel, Route 116"),
    d(294, "Loudred", ["OR", "AS"], "Victory Road, evolve Whismur"),
    d(295, "Exploud", ["OR", "AS"], "Evolve Loudred"),

    // #045-046  Makuhita line
    d(296, "Makuhita", ["OR", "AS"], "Granite Cave"),
    d(297, "Hariyama", ["OR", "AS"], "Victory Road, evolve Makuhita"),

    // #047  Azurill, #183 Marill, #184 Azumarill
    d(298, "Azurill", ["OR", "AS"], "Breed Marill with Sea Incense"),
    d(183, "Marill", ["OR", "AS"], "Routes 102, 111, 114, 117, 120"),
    d(184, "Azumarill", ["OR", "AS"], "Evolve Marill"),

    // #050-051  Nosepass / Probopass
    d(299, "Nosepass", ["OR", "AS"], "Granite Cave (Rock Smash)"),
    d(476, "Probopass", ["OR", "AS"], "Evolve Nosepass (level up in New Mauville)"),

    // #052  Skitty / Delcatty
    d(300, "Skitty", ["OR", "AS"], "Route 116 (rare)"),
    d(301, "Delcatty", ["OR", "AS"], "Evolve Skitty (Moon Stone)"),

    // Version exclusives: Sableye (AS) / Mawile (OR)
    d(302, "Sableye", ["AS"], "Granite Cave, Cave of Origin, Victory Road (Mega: Sablenite)"),
    d(303, "Mawile", ["OR"], "Granite Cave, Cave of Origin, Victory Road (Mega: Mawilite)"),

    // #056-058  Aron line
    d(304, "Aron", ["OR", "AS"], "Granite Cave"),
    d(305, "Lairon", ["OR", "AS"], "Victory Road, evolve Aron"),
    d(306, "Aggron", ["OR", "AS"], "Evolve Lairon (Mega: Aggronite)"),

    // #059-060  Meditite line
    d(307, "Meditite", ["OR", "AS"], "Mt. Pyre, Victory Road"),
    d(308, "Medicham", ["OR", "AS"], "Victory Road, evolve Meditite (Mega: Medichamite)"),

    // #061-062  Electrike line
    d(309, "Electrike", ["OR", "AS"], "Routes 110, 118"),
    d(310, "Manectric", ["OR", "AS"], "Evolve Electrike (Mega: Manectite)"),

    // #063-064  Plusle / Minun
    d(311, "Plusle", ["OR", "AS"], "Route 110"),
    d(312, "Minun", ["OR", "AS"], "Route 110"),

    // #065-066  Volbeat / Illumise
    d(313, "Volbeat", ["OR", "AS"], "Route 117"),
    d(314, "Illumise", ["OR", "AS"], "Route 117"),

    // #067-068  Roselia / Roserade
    d(315, "Roselia", ["OR", "AS"], "Route 117"),
    d(407, "Roserade", ["OR", "AS"], "Evolve Roselia (Shiny Stone)"),

    // #069-070  Gulpin line
    d(316, "Gulpin", ["OR", "AS"], "Route 110"),
    d(317, "Swalot", ["OR", "AS"], "Evolve Gulpin"),

    // #071-072  Carvanha line
    d(318, "Carvanha", ["OR", "AS"], "Routes 118, 119 (Fishing)"),
    d(319, "Sharpedo", ["OR", "AS"], "Routes 118, 119 (Fishing), evolve Carvanha (Mega: Sharpedonite)"),

    // #073-074  Wailmer line
    d(320, "Wailmer", ["OR", "AS"], "Routes 122, 124-134 (Surfing)"),
    d(321, "Wailord", ["OR", "AS"], "Evolve Wailmer"),

    // #075-076  Numel line
    d(322, "Numel", ["OR", "AS"], "Route 112, Jagged Pass, Fiery Path"),
    d(323, "Camerupt", ["OR", "AS"], "Evolve Numel (Mega: Cameruptite)"),

    // #077  Torkoal
    d(324, "Torkoal", ["OR", "AS"], "Fiery Path"),

    // #078-079  Spoink line
    d(325, "Spoink", ["OR", "AS"], "Jagged Pass"),
    d(326, "Grumpig", ["OR", "AS"], "Evolve Spoink"),

    // #080  Spinda
    d(327, "Spinda", ["OR", "AS"], "Route 113"),

    // #081-082  Trapinch line
    d(328, "Trapinch", ["OR", "AS"], "Route 111 (Desert)"),
    d(329, "Vibrava", ["OR", "AS"], "Evolve Trapinch"),
    d(330, "Flygon", ["OR", "AS"], "Evolve Vibrava"),

    // #084-085  Cacnea line
    d(331, "Cacnea", ["OR", "AS"], "Route 111 (Desert)"),
    d(332, "Cacturne", ["OR", "AS"], "Evolve Cacnea"),

    // #086-087  Swablu line
    d(333, "Swablu", ["OR", "AS"], "Route 114, 115"),
    d(334, "Altaria", ["OR", "AS"], "Evolve Swablu (Mega: Altarianite)"),

    // Version exclusives: Zangoose (OR) / Seviper (AS)
    d(335, "Zangoose", ["OR"], "Route 114"),
    d(336, "Seviper", ["AS"], "Route 114"),

    // #090-091  Lunatone / Solrock
    d(337, "Lunatone", ["AS"], "Meteor Falls"),
    d(338, "Solrock", ["OR"], "Meteor Falls"),

    // #092-093  Barboach line
    d(339, "Barboach", ["OR", "AS"], "Routes 111, 114 (Fishing)"),
    d(340, "Whiscash", ["OR", "AS"], "Meteor Falls (Fishing), evolve Barboach"),

    // #094-095  Corphish line
    d(341, "Corphish", ["OR", "AS"], "Routes 102, 117 (Fishing)"),
    d(342, "Crawdaunt", ["OR", "AS"], "Evolve Corphish"),

    // #096-097  Baltoy line
    d(343, "Baltoy", ["OR", "AS"], "Route 111 (Desert)"),
    d(344, "Claydol", ["OR", "AS"], "Sky Pillar, evolve Baltoy"),

    // #098-099  Lileep line
    d(345, "Lileep", ["OR", "AS"], "Revive Root Fossil (Route 111 desert)"),
    d(346, "Cradily", ["OR", "AS"], "Evolve Lileep"),

    // #100-101  Anorith line
    d(347, "Anorith", ["OR", "AS"], "Revive Claw Fossil (Route 111 desert)"),
    d(348, "Armaldo", ["OR", "AS"], "Evolve Anorith"),

    // #102  Feebas / Milotic
    d(349, "Feebas", ["OR", "AS"], "Route 119 (Fishing, special tiles under bridge)"),
    d(350, "Milotic", ["OR", "AS"], "Evolve Feebas (max Beauty / trade with Prism Scale)"),

    // #104  Castform
    d(351, "Castform", ["OR", "AS"], "Gift from Weather Institute"),

    // #105  Kecleon
    d(352, "Kecleon", ["OR", "AS"], "Routes 118, 119, 120, 121 (some invisible via Devon Scope)"),

    // #106-107  Shuppet line
    d(353, "Shuppet", ["OR", "AS"], "Mt. Pyre, Route 121"),
    d(354, "Banette", ["OR", "AS"], "Evolve Shuppet (Mega: Banettite)"),

    // #108-109  Duskull line
    d(355, "Duskull", ["OR", "AS"], "Mt. Pyre, Route 121"),
    d(356, "Dusclops", ["OR", "AS"], "Evolve Duskull"),
    d(477, "Dusknoir", ["OR", "AS"], "Trade evolve Dusclops (Reaper Cloth)"),

    // #111  Tropius
    d(357, "Tropius", ["OR", "AS"], "Route 119"),

    // #112  Chimecho / Chingling
    d(358, "Chimecho", ["OR", "AS"], "Mt. Pyre summit (rare)"),
    d(433, "Chingling", ["OR", "AS"], "Breed Chimecho"),

    // #113  Absol
    d(359, "Absol", ["OR", "AS"], "Route 120 (Mega: Absolite)"),

    // #114  Wynaut / Wobbuffet
    d(360, "Wynaut", ["OR", "AS"], "Egg from Lavaridge Town"),
    d(202, "Wobbuffet", ["OR", "AS"], "Safari Zone, evolve Wynaut"),

    // #116  Snorunt line
    d(361, "Snorunt", ["OR", "AS"], "Shoal Cave (ice room)"),
    d(362, "Glalie", ["OR", "AS"], "Evolve Snorunt (Mega: Glalitite)"),
    d(478, "Froslass", ["OR", "AS"], "Evolve female Snorunt (Dawn Stone)"),

    // #119-120  Spheal line
    d(363, "Spheal", ["OR", "AS"], "Shoal Cave"),
    d(364, "Sealeo", ["OR", "AS"], "Evolve Spheal"),
    d(365, "Walrein", ["OR", "AS"], "Evolve Sealeo"),

    // #122  Clamperl line
    d(366, "Clamperl", ["OR", "AS"], "Underwater (Route 124, Diving)"),
    d(367, "Huntail", ["OR", "AS"], "Trade evolve Clamperl (DeepSeaTooth)"),
    d(368, "Gorebyss", ["OR", "AS"], "Trade evolve Clamperl (DeepSeaScale)"),

    // #125-126  Relicanth
    d(369, "Relicanth", ["OR", "AS"], "Underwater (Routes 124, 126, Diving)"),

    // #127  Luvdisc
    d(370, "Luvdisc", ["OR", "AS"], "Route 128, Ever Grande City (Fishing)"),

    // #128-130  Bagon line
    d(371, "Bagon", ["OR", "AS"], "Meteor Falls (back room)"),
    d(372, "Shelgon", ["OR", "AS"], "Evolve Bagon"),
    d(373, "Salamence", ["OR", "AS"], "Evolve Shelgon (Mega: Salamencite)"),

    // #131-133  Beldum line
    d(374, "Beldum", ["OR", "AS"], "Gift from Steven's house (post-game)"),
    d(375, "Metang", ["OR", "AS"], "Evolve Beldum"),
    d(376, "Metagross", ["OR", "AS"], "Evolve Metang (Mega: Metagrossite)"),

    // #134-136  Regirock / Regice / Registeel
    d(377, "Regirock", ["OR", "AS"], "Desert Ruins (Route 111, Sealed Chamber puzzle)"),
    d(378, "Regice", ["OR", "AS"], "Island Cave (Route 105, Sealed Chamber puzzle)"),
    d(379, "Registeel", ["OR", "AS"], "Ancient Tomb (Route 120, Sealed Chamber puzzle)"),

    // #137-138  Latias / Latios (version exclusives)
    d(380, "Latias", ["AS"], "Gift from Steven on Route 118 (Mega: Latiasite)"),
    d(381, "Latios", ["OR"], "Gift from Steven on Route 118 (Mega: Latiosite)"),

    // #139-140  Kyogre / Groudon (version exclusives, Primal Reversion)
    d(382, "Kyogre", ["AS"], "Cave of Origin (Primal Reversion with Blue Orb)"),
    d(383, "Groudon", ["OR"], "Cave of Origin (Primal Reversion with Red Orb)"),

    // #141  Rayquaza
    d(384, "Rayquaza", ["OR", "AS"], "Sky Pillar (Delta Episode, Lv70, Mega via Dragon Ascent)"),

    // #142-143  Jirachi / Deoxys
    d(385, "Jirachi", ["OR", "AS"], "Event distribution"),
    d(386, "Deoxys", ["OR", "AS"], "Space battle (Delta Episode, Lv80)"),

    // -- Non-Hoenn Pokemon obtainable in-game --

    // Surfing / Fishing Pokemon
    d(72, "Tentacool", ["OR", "AS"], "Surfing (many ocean routes)"),
    d(73, "Tentacruel", ["OR", "AS"], "Surfing, evolve Tentacool"),
    d(129, "Magikarp", ["OR", "AS"], "Fishing (Old Rod, nearly everywhere)"),
    d(130, "Gyarados", ["OR", "AS"], "Evolve Magikarp (Lv20)"),

    // Cave / Rock Smash Pokemon
    d(41, "Zubat", ["OR", "AS"], "Granite Cave, Meteor Falls, Victory Road"),
    d(42, "Golbat", ["OR", "AS"], "Victory Road, Cave of Origin, evolve Zubat"),
    d(169, "Crobat", ["OR", "AS"], "Evolve Golbat (friendship)"),
    d(74, "Geodude", ["OR", "AS"], "Granite Cave, Route 111"),
    d(75, "Graveler", ["OR", "AS"], "Victory Road, evolve Geodude"),
    d(76, "Golem", ["OR", "AS"], "Trade evolve Graveler"),

    // Other obtainable in Hoenn region
    d(63, "Abra", ["OR", "AS"], "Granite Cave, Route 116"),
    d(64, "Kadabra", ["OR", "AS"], "Evolve Abra"),
    d(65, "Alakazam", ["OR", "AS"], "Trade evolve Kadabra"),
    d(66, "Machop", ["OR", "AS"], "Route 112, Fiery Path, Jagged Pass"),
    d(67, "Machoke", ["OR", "AS"], "Evolve Machop"),
    d(68, "Machamp", ["OR", "AS"], "Trade evolve Machoke"),

    d(27, "Sandshrew", ["OR", "AS"], "Route 111 (Desert)"),
    d(28, "Sandslash", ["OR", "AS"], "Evolve Sandshrew"),

    d(43, "Oddish", ["OR", "AS"], "Routes 110, 117, 119, 120, 121"),
    d(44, "Gloom", ["OR", "AS"], "Routes 121, 123, evolve Oddish"),
    d(45, "Vileplume", ["OR", "AS"], "Evolve Gloom (Leaf Stone)"),
    d(182, "Bellossom", ["OR", "AS"], "Evolve Gloom (Sun Stone)"),

    d(37, "Vulpix", ["OR", "AS"], "Mt. Pyre"),
    d(38, "Ninetales", ["OR", "AS"], "Evolve Vulpix (Fire Stone)"),

    d(100, "Voltorb", ["OR", "AS"], "New Mauville"),
    d(101, "Electrode", ["OR", "AS"], "New Mauville, evolve Voltorb"),

    d(81, "Magnemite", ["OR", "AS"], "New Mauville"),
    d(82, "Magneton", ["OR", "AS"], "New Mauville, evolve Magnemite"),
    d(462, "Magnezone", ["OR", "AS"], "Evolve Magneton (level up in New Mauville)"),

    d(111, "Rhyhorn", ["OR", "AS"], "Safari Zone"),
    d(112, "Rhydon", ["OR", "AS"], "Evolve Rhyhorn"),
    d(464, "Rhyperior", ["OR", "AS"], "Trade evolve Rhydon (Protector)"),

    d(118, "Goldeen", ["OR", "AS"], "Fishing (various routes)"),
    d(119, "Seaking", ["OR", "AS"], "Evolve Goldeen"),

    d(84, "Doduo", ["OR", "AS"], "Safari Zone"),
    d(85, "Dodrio", ["OR", "AS"], "Safari Zone, evolve Doduo"),

    d(54, "Psyduck", ["OR", "AS"], "Safari Zone (Surfing)"),
    d(55, "Golduck", ["OR", "AS"], "Safari Zone, evolve Psyduck"),

    d(79, "Slowpoke", ["OR", "AS"], "Safari Zone (Fishing)"),
    d(80, "Slowbro", ["OR", "AS"], "Evolve Slowpoke (Mega: Slowbronite)"),
    d(199, "Slowking", ["OR", "AS"], "Trade evolve Slowpoke (King's Rock)"),

    d(127, "Pinsir", ["OR", "AS"], "Safari Zone"),
    d(214, "Heracross", ["OR", "AS"], "Safari Zone"),

    d(25, "Pikachu", ["OR", "AS"], "Safari Zone"),
    d(26, "Raichu", ["OR", "AS"], "Evolve Pikachu (Thunder Stone)"),
    d(172, "Pichu", ["OR", "AS"], "Breed Pikachu"),

    d(174, "Igglybuff", ["OR", "AS"], "Breed Jigglypuff"),
    d(39, "Jigglypuff", ["OR", "AS"], "Route 115"),
    d(40, "Wigglytuff", ["OR", "AS"], "Evolve Jigglypuff (Moon Stone)"),

    d(227, "Skarmory", ["OR", "AS"], "Route 113"),

    d(178, "Xatu", ["OR", "AS"], "Safari Zone"),
    d(177, "Natu", ["OR", "AS"], "Safari Zone"),

    d(132, "Ditto", ["OR", "AS"], "Mirage Spots"),

    // Legendary Pokemon from portals / soaring
    d(249, "Lugia", ["AS"], "Soaring (Sea Mauville area)"),
    d(250, "Ho-Oh", ["OR"], "Soaring (Sea Mauville area)"),

    d(243, "Raikou", ["OR", "AS"], "Soaring (Trackless Forest)"),
    d(244, "Entei", ["OR", "AS"], "Soaring (Trackless Forest)"),
    d(245, "Suicune", ["OR", "AS"], "Soaring (Trackless Forest)"),

    d(480, "Uxie", ["OR", "AS"], "Soaring (Nameless Cavern)"),
    d(481, "Mesprit", ["OR", "AS"], "Soaring (Nameless Cavern)"),
    d(482, "Azelf", ["OR", "AS"], "Soaring (Nameless Cavern)"),

    d(483, "Dialga", ["OR"], "Soaring (near Dewford)"),
    d(484, "Palkia", ["AS"], "Soaring (near Dewford)"),
    d(487, "Giratina", ["OR", "AS"], "Soaring (requires Dialga + Palkia in party)"),

    d(485, "Heatran", ["OR", "AS"], "Scorched Slab (post-game)"),
    d(486, "Regigigas", ["OR", "AS"], "Island Cave (requires all 3 Regis + conditions)"),
    d(488, "Cresselia", ["OR", "AS"], "Crescent Isle (Mirage Spot)"),

    d(638, "Cobalion", ["OR", "AS"], "Pathless Plain (Mirage Spot)"),
    d(639, "Terrakion", ["OR", "AS"], "Pathless Plain (Mirage Spot)"),
    d(640, "Virizion", ["OR", "AS"], "Pathless Plain (Mirage Spot)"),

    d(641, "Tornadus", ["OR"], "Soaring (storm cloud)"),
    d(642, "Thundurus", ["AS"], "Soaring (storm cloud)"),
    d(645, "Landorus", ["OR", "AS"], "Soaring (requires Tornadus + Thundurus)"),

    d(643, "Reshiram", ["OR"], "Fabled Cave (Soaring)"),
    d(644, "Zekrom", ["AS"], "Fabled Cave (Soaring)"),
    d(646, "Kyurem", ["OR", "AS"], "Gnarled Den (requires Reshiram + Zekrom)"),

    d(442, "Spiritomb", ["OR", "AS"], "Route 120 (meet 32 Secret Base owners)"),

    // Additional Hoenn-obtainable Pokemon
    d(120, "Staryu", ["OR", "AS"], "Lilycove City (Fishing, Super Rod)"),
    d(121, "Starmie", ["OR", "AS"], "Evolve Staryu (Water Stone)"),

    d(222, "Corsola", ["OR", "AS"], "Route 128 (Fishing)"),
    d(116, "Horsea", ["OR", "AS"], "Route 132-134 (Fishing)"),
    d(117, "Seadra", ["OR", "AS"], "Evolve Horsea"),
    d(230, "Kingdra", ["OR", "AS"], "Trade evolve Seadra (Dragon Scale)"),

    d(170, "Chinchou", ["OR", "AS"], "Route 124 (Fishing, underwater)"),
    d(171, "Lanturn", ["OR", "AS"], "Evolve Chinchou"),

    d(194, "Wooper", ["OR", "AS"], "Safari Zone"),
    d(195, "Quagsire", ["OR", "AS"], "Safari Zone, evolve Wooper"),

    d(218, "Slugma", ["OR", "AS"], "Fiery Path"),
    d(219, "Magcargo", ["OR", "AS"], "Evolve Slugma"),
  ],
};
