import type { GameDex, GameDexEntry } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ======================================================================
 *  Pokémon Emerald — Hoenn Regional Dex (all obtainable Pokémon)
 * ====================================================================== */
export const EMERALD_DEX: GameDex = {
  slug: "emerald",
  versionTags: ["E"],
  pokemon: [
    // ── Starters & evolutions ──────────────────────────
    d(252, "Treecko", ["E"], "Starter from Prof. Birch"),
    d(253, "Grovyle", ["E"], "Evolve Treecko"),
    d(254, "Sceptile", ["E"], "Evolve Grovyle"),
    d(255, "Torchic", ["E"], "Starter from Prof. Birch"),
    d(256, "Combusken", ["E"], "Evolve Torchic"),
    d(257, "Blaziken", ["E"], "Evolve Combusken"),
    d(258, "Mudkip", ["E"], "Starter from Prof. Birch"),
    d(259, "Marshtomp", ["E"], "Evolve Mudkip"),
    d(260, "Swampert", ["E"], "Evolve Marshtomp"),

    // ── Early routes ───────────────────────────────────
    d(261, "Poochyena", ["E"], "Routes 101, 102, 103, 110"),
    d(262, "Mightyena", ["E"], "Routes 120, 121, evolve Poochyena"),
    d(263, "Zigzagoon", ["E"], "Routes 101, 102, 103, 104, 110, 116, 118, 119"),
    d(264, "Linoone", ["E"], "Routes 118-121, evolve Zigzagoon"),
    d(265, "Wurmple", ["E"], "Routes 101, 102, 104, Petalburg Woods"),
    d(266, "Silcoon", ["E"], "Evolve Wurmple (random)"),
    d(267, "Beautifly", ["E"], "Evolve Silcoon"),
    d(268, "Cascoon", ["E"], "Evolve Wurmple (random)"),
    d(269, "Dustox", ["E"], "Evolve Cascoon"),
    d(270, "Lotad", ["E"], "Routes 102, 114"),
    d(271, "Lombre", ["E"], "Evolve Lotad"),
    d(272, "Ludicolo", ["E"], "Evolve Lombre (Water Stone)"),
    d(273, "Seedot", ["E"], "Routes 102, 114"),
    d(274, "Nuzleaf", ["E"], "Evolve Seedot"),
    d(275, "Shiftry", ["E"], "Evolve Nuzleaf (Leaf Stone)"),
    d(276, "Taillow", ["E"], "Routes 104, 116, Petalburg Woods"),
    d(277, "Swellow", ["E"], "Evolve Taillow"),
    d(278, "Wingull", ["E"], "Routes 103, 104, 110, 115, 118, 119"),
    d(279, "Pelipper", ["E"], "Routes 119, 121, evolve Wingull"),

    // ── Route 102-116 ──────────────────────────────────
    d(280, "Ralts", ["E"], "Route 102 (rare)"),
    d(281, "Kirlia", ["E"], "Evolve Ralts"),
    d(282, "Gardevoir", ["E"], "Evolve Kirlia"),
    d(283, "Surskit", ["E"], "Route 102 (very rare), Routes 114, 117, 120"),
    d(284, "Masquerain", ["E"], "Evolve Surskit"),
    d(285, "Shroomish", ["E"], "Petalburg Woods"),
    d(286, "Breloom", ["E"], "Evolve Shroomish"),
    d(287, "Slakoth", ["E"], "Petalburg Woods (rare)"),
    d(288, "Vigoroth", ["E"], "Evolve Slakoth"),
    d(289, "Slaking", ["E"], "Evolve Vigoroth"),
    d(290, "Nincada", ["E"], "Route 116"),
    d(291, "Ninjask", ["E"], "Evolve Nincada"),
    d(292, "Shedinja", ["E"], "Evolve Nincada (empty party slot + Poké Ball)"),
    d(293, "Whismur", ["E"], "Route 116, Rusturf Tunnel"),
    d(294, "Loudred", ["E"], "Victory Road, evolve Whismur"),
    d(295, "Exploud", ["E"], "Evolve Loudred"),

    // ── Granite Cave & Fighting ────────────────────────
    d(296, "Makuhita", ["E"], "Granite Cave"),
    d(297, "Hariyama", ["E"], "Victory Road, evolve Makuhita"),
    d(63, "Abra", ["E"], "Granite Cave, Route 116"),
    d(64, "Kadabra", ["E"], "Evolve Abra"),
    d(65, "Alakazam", ["E"], "Trade evolve Kadabra"),
    d(74, "Geodude", ["E"], "Granite Cave, Route 111"),
    d(75, "Graveler", ["E"], "Evolve Geodude"),
    d(76, "Golem", ["E"], "Trade evolve Graveler"),
    d(41, "Zubat", ["E"], "Granite Cave, Meteor Falls, Victory Road"),
    d(42, "Golbat", ["E"], "Victory Road, Sky Pillar, evolve Zubat"),
    d(169, "Crobat", ["E"], "Evolve Golbat (friendship)"),
    d(66, "Machop", ["E"], "Fiery Path, Jagged Pass"),
    d(67, "Machoke", ["E"], "Evolve Machop"),
    d(68, "Machamp", ["E"], "Trade evolve Machoke"),

    // ── Aron line ──────────────────────────────────────
    d(304, "Aron", ["E"], "Granite Cave"),
    d(305, "Lairon", ["E"], "Victory Road, evolve Aron"),
    d(306, "Aggron", ["E"], "Evolve Lairon"),

    // ── Water Pokémon ──────────────────────────────────
    d(72, "Tentacool", ["E"], "Surfing (most water routes)"),
    d(73, "Tentacruel", ["E"], "Surfing, evolve Tentacool"),
    d(129, "Magikarp", ["E"], "Fishing (everywhere)"),
    d(130, "Gyarados", ["E"], "Fishing (rare), evolve Magikarp"),
    d(118, "Goldeen", ["E"], "Fishing (various routes)"),
    d(119, "Seaking", ["E"], "Fishing, evolve Goldeen"),
    d(183, "Marill", ["E"], "Routes 104, 111, 112, 117, 120"),
    d(184, "Azumarill", ["E"], "Evolve Marill"),
    d(298, "Azurill", ["E"], "Breed Marill/Azumarill with Sea Incense"),
    d(320, "Wailmer", ["E"], "Surfing, Fishing (Routes 103, 110, 115, 122)"),
    d(321, "Wailord", ["E"], "Route 129 (rare), evolve Wailmer"),
    d(318, "Carvanha", ["E"], "Fishing (Routes 118, 119)"),
    d(319, "Sharpedo", ["E"], "Fishing (rare), evolve Carvanha"),
    d(370, "Luvdisc", ["E"], "Fishing (Ever Grande City)"),
    d(349, "Feebas", ["E"], "Route 119 (6 random tiles — very rare)"),
    d(350, "Milotic", ["E"], "Evolve Feebas (max Beauty condition)"),
    d(340, "Whiscash", ["E"], "Meteor Falls Fishing, evolve Barboach"),
    d(339, "Barboach", ["E"], "Fishing (Routes 111, 114, Meteor Falls)"),
    d(366, "Clamperl", ["E"], "Underwater (Routes 124, 126)"),
    d(367, "Huntail", ["E"], "Trade evolve Clamperl (Deep Sea Tooth)"),
    d(368, "Gorebyss", ["E"], "Trade evolve Clamperl (Deep Sea Scale)"),
    d(369, "Relicanth", ["E"], "Underwater (Routes 124, 126 — rare)"),
    d(120, "Staryu", ["E"], "Fishing (Lilycove City)"),
    d(121, "Starmie", ["E"], "Evolve Staryu (Water Stone)"),
    d(116, "Horsea", ["E"], "Fishing (Pacifidlog Town)"),
    d(117, "Seadra", ["E"], "Evolve Horsea"),
    d(230, "Kingdra", ["E"], "Trade evolve Seadra (Dragon Scale)"),
    d(222, "Corsola", ["E"], "Fishing (Ever Grande City)"),

    // ── Electric ───────────────────────────────────────
    d(309, "Electrike", ["E"], "Routes 110, 118"),
    d(310, "Manectric", ["E"], "Evolve Electrike"),
    d(100, "Voltorb", ["E"], "New Mauville"),
    d(101, "Electrode", ["E"], "New Mauville, evolve Voltorb"),
    d(81, "Magnemite", ["E"], "New Mauville"),
    d(82, "Magneton", ["E"], "New Mauville, evolve Magnemite"),
    d(311, "Plusle", ["E"], "Route 110"),
    d(312, "Minun", ["E"], "Route 110"),

    // ── Grass ──────────────────────────────────────────
    d(43, "Oddish", ["E"], "Routes 110, 117, 119, 120, 121, 123"),
    d(44, "Gloom", ["E"], "Routes 121, 123, evolve Oddish"),
    d(45, "Vileplume", ["E"], "Evolve Gloom (Leaf Stone)"),
    d(182, "Bellossom", ["E"], "Evolve Gloom (Sun Stone)"),
    d(315, "Roselia", ["E"], "Route 117"),
    d(357, "Tropius", ["E"], "Route 119"),

    // ── Normal & misc ──────────────────────────────────
    d(300, "Skitty", ["E"], "Route 116 (rare)"),
    d(301, "Delcatty", ["E"], "Evolve Skitty (Moon Stone)"),
    d(327, "Spinda", ["E"], "Route 113"),
    d(352, "Kecleon", ["E"], "Routes 118-121 (hidden, use Devon Scope)"),
    d(316, "Gulpin", ["E"], "Route 110"),
    d(317, "Swalot", ["E"], "Evolve Gulpin"),
    d(335, "Zangoose", ["E"], "Route 114"),
    d(336, "Seviper", ["E"], "Route 114"),
    d(359, "Absol", ["E"], "Route 120"),

    // ── Fire ───────────────────────────────────────────
    d(322, "Numel", ["E"], "Route 112, Fiery Path, Jagged Pass"),
    d(323, "Camerupt", ["E"], "Jagged Pass, evolve Numel"),
    d(324, "Torkoal", ["E"], "Fiery Path"),
    d(37, "Vulpix", ["E"], "Mt. Pyre"),
    d(38, "Ninetales", ["E"], "Evolve Vulpix (Fire Stone)"),
    d(218, "Slugma", ["E"], "Fiery Path"),
    d(219, "Magcargo", ["E"], "Evolve Slugma"),

    // ── Desert (Route 111) ─────────────────────────────
    d(27, "Sandshrew", ["E"], "Route 111 desert"),
    d(28, "Sandslash", ["E"], "Evolve Sandshrew"),
    d(328, "Trapinch", ["E"], "Route 111 desert"),
    d(329, "Vibrava", ["E"], "Evolve Trapinch"),
    d(330, "Flygon", ["E"], "Evolve Vibrava"),
    d(331, "Cacnea", ["E"], "Route 111 desert"),
    d(332, "Cacturne", ["E"], "Evolve Cacnea"),
    d(343, "Baltoy", ["E"], "Route 111 desert"),
    d(344, "Claydol", ["E"], "Sky Pillar, evolve Baltoy"),

    // ── Route 113 (volcanic ash) ───────────────────────
    d(325, "Spoink", ["E"], "Route 113, Jagged Pass"),
    d(326, "Grumpig", ["E"], "Evolve Spoink"),

    // ── Route 114 & Meteor Falls ───────────────────────
    d(333, "Swablu", ["E"], "Route 114, 115"),
    d(334, "Altaria", ["E"], "Sky Pillar, evolve Swablu"),
    d(337, "Lunatone", ["E"], "Meteor Falls"),
    d(338, "Solrock", ["E"], "Meteor Falls"),

    // ── Steel ──────────────────────────────────────────
    d(303, "Mawile", ["E"], "Victory Road, Cave of Origin"),
    d(227, "Skarmory", ["E"], "Route 113"),

    // ── Ice ────────────────────────────────────────────
    d(361, "Snorunt", ["E"], "Shoal Cave (ice room)"),
    d(362, "Glalie", ["E"], "Evolve Snorunt"),
    d(363, "Spheal", ["E"], "Shoal Cave"),
    d(364, "Sealeo", ["E"], "Evolve Spheal"),
    d(365, "Walrein", ["E"], "Evolve Sealeo"),

    // ── Ghost ──────────────────────────────────────────
    d(353, "Shuppet", ["E"], "Mt. Pyre, Route 121"),
    d(354, "Banette", ["E"], "Sky Pillar, evolve Shuppet"),
    d(355, "Duskull", ["E"], "Mt. Pyre, Route 121"),
    d(356, "Dusclops", ["E"], "Evolve Duskull"),

    // ── Psychic ────────────────────────────────────────
    d(307, "Meditite", ["E"], "Mt. Pyre, Victory Road"),
    d(308, "Medicham", ["E"], "Victory Road, evolve Meditite"),
    d(358, "Chimecho", ["E"], "Mt. Pyre summit (very rare)"),
    d(178, "Xatu", ["E"], "Safari Zone"),
    d(177, "Natu", ["E"], "Safari Zone"),

    // ── Bug ────────────────────────────────────────────
    d(313, "Volbeat", ["E"], "Route 117 (male only)"),
    d(314, "Illumise", ["E"], "Route 117 (female only)"),

    // ── Fossil Pokémon ─────────────────────────────────
    d(345, "Lileep", ["E"], "Revive Root Fossil (Mirage Tower or desert)"),
    d(346, "Cradily", ["E"], "Evolve Lileep"),
    d(347, "Anorith", ["E"], "Revive Claw Fossil (Mirage Tower or desert)"),
    d(348, "Armaldo", ["E"], "Evolve Anorith"),

    // ── Dragon ─────────────────────────────────────────
    d(371, "Bagon", ["E"], "Meteor Falls (small room, rare)"),
    d(372, "Shelgon", ["E"], "Evolve Bagon"),
    d(373, "Salamence", ["E"], "Evolve Shelgon"),

    // ── Pseudo-legendary ───────────────────────────────
    d(374, "Beldum", ["E"], "Gift from Steven's house after becoming Champion"),
    d(375, "Metang", ["E"], "Evolve Beldum"),
    d(376, "Metagross", ["E"], "Evolve Metang"),

    // ── Dark ───────────────────────────────────────────
    d(302, "Sableye", ["E"], "Granite Cave, Sky Pillar"),

    // ── Safari Zone ────────────────────────────────────
    d(84, "Doduo", ["E"], "Safari Zone"),
    d(85, "Dodrio", ["E"], "Safari Zone, evolve Doduo"),
    d(111, "Rhyhorn", ["E"], "Safari Zone"),
    d(112, "Rhydon", ["E"], "Evolve Rhyhorn"),
    d(127, "Pinsir", ["E"], "Safari Zone"),
    d(214, "Heracross", ["E"], "Safari Zone"),
    d(25, "Pikachu", ["E"], "Safari Zone"),
    d(26, "Raichu", ["E"], "Evolve Pikachu (Thunder Stone)"),
    d(54, "Psyduck", ["E"], "Safari Zone"),
    d(55, "Golduck", ["E"], "Safari Zone, evolve Psyduck"),
    d(202, "Wobbuffet", ["E"], "Safari Zone"),
    d(203, "Girafarig", ["E"], "Safari Zone"),
    d(228, "Houndour", ["E"], "Safari Zone"),
    d(229, "Houndoom", ["E"], "Evolve Houndour"),
    d(241, "Miltank", ["E"], "Safari Zone"),
    d(234, "Stantler", ["E"], "Safari Zone"),

    // ── Route 117 & Verdanturf ─────────────────────────
    d(299, "Nosepass", ["E"], "Granite Cave (Rock Smash)"),

    // ── Surfing & Diving extras ────────────────────────
    d(170, "Chinchou", ["E"], "Underwater (Routes 124, 126)"),
    d(171, "Lanturn", ["E"], "Evolve Chinchou"),

    // ── Wynaut ─────────────────────────────────────────
    d(360, "Wynaut", ["E"], "Egg from old woman in Lavaridge Town"),

    // ── Castform ───────────────────────────────────────
    d(351, "Castform", ["E"], "Gift from Weather Institute"),

    // ── Ditto ──────────────────────────────────────────
    d(132, "Ditto", ["E"], "Desert Underpass (post-game)"),

    // ── Pichu & baby Pokémon (breed) ───────────────────
    d(172, "Pichu", ["E"], "Breed Pikachu/Raichu"),

    // ── Misc obtainable via breeding/evolution ─────────
    d(174, "Igglybuff", ["E"], "Breed Jigglypuff/Wigglytuff"),
    d(39, "Jigglypuff", ["E"], "Route 115"),
    d(40, "Wigglytuff", ["E"], "Evolve Jigglypuff (Moon Stone)"),

    // ── Route 115 ──────────────────────────────────────
    d(341, "Corphish", ["E"], "Fishing (Routes 102, 117, Petalburg City)"),
    d(342, "Crawdaunt", ["E"], "Evolve Corphish"),

    // ── Additional routes ──────────────────────────────
    d(79, "Slowpoke", ["E"], "Fishing (Safari Zone extension)"),
    d(80, "Slowbro", ["E"], "Evolve Slowpoke"),

    // ── Grass/Poison Safari ────────────────────────────
    d(46, "Paras", ["E"], "Safari Zone"),
    d(47, "Parasect", ["E"], "Evolve Paras"),

    // ── Legendary Pokémon ──────────────────────────────
    d(382, "Kyogre", ["E"], "Marine Cave (post-game, Lv. 70)"),
    d(383, "Groudon", ["E"], "Terra Cave (post-game, Lv. 70)"),
    d(384, "Rayquaza", ["E"], "Sky Pillar (post-game, Lv. 70)"),
    d(377, "Regirock", ["E"], "Desert Ruins, Route 111 (Lv. 40)"),
    d(378, "Regice", ["E"], "Island Cave, Route 105 (Lv. 40)"),
    d(379, "Registeel", ["E"], "Ancient Tomb, Route 120 (Lv. 40)"),
    d(380, "Latias", ["E"], "Roaming Hoenn (Lv. 40, choose Red on TV)"),
    d(381, "Latios", ["E"], "Roaming Hoenn (Lv. 40, choose Blue on TV)"),
  ],
};
