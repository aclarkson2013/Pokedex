import type { GameDexEntry, GameDex } from "../game-dex";

const d = (
  pokemonId: number,
  name: string,
  versions: string[],
  method?: string
): GameDexEntry => ({ pokemonId, name, versions, method });

/* ══════════════════════════════════════════════════
 *  Ruby & Sapphire — Hoenn Pokédex (~200 obtainable)
 * ══════════════════════════════════════════════════ */
export const RUBY_SAPPHIRE_DEX: GameDex = {
  slug: "ruby-sapphire",
  versionTags: ["R", "S"],
  pokemon: [
    // ── Starters & evolutions ───────────────────────
    d(252, "Treecko", ["R", "S"], "Starter from Prof. Birch"),
    d(253, "Grovyle", ["R", "S"], "Evolve Treecko"),
    d(254, "Sceptile", ["R", "S"], "Evolve Grovyle"),
    d(255, "Torchic", ["R", "S"], "Starter from Prof. Birch"),
    d(256, "Combusken", ["R", "S"], "Evolve Torchic"),
    d(257, "Blaziken", ["R", "S"], "Evolve Combusken"),
    d(258, "Mudkip", ["R", "S"], "Starter from Prof. Birch"),
    d(259, "Marshtomp", ["R", "S"], "Evolve Mudkip"),
    d(260, "Swampert", ["R", "S"], "Evolve Marshtomp"),

    // ── Early routes ────────────────────────────────
    d(261, "Poochyena", ["R", "S"], "Routes 101, 102, 103, 110"),
    d(262, "Mightyena", ["R", "S"], "Routes 120, 121, evolve Poochyena"),
    d(263, "Zigzagoon", ["R", "S"], "Routes 101, 102, 103, 104, 110, 116, 118"),
    d(264, "Linoone", ["R", "S"], "Routes 118-121, evolve Zigzagoon"),
    d(265, "Wurmple", ["R", "S"], "Routes 101, 102, 104, Petalburg Woods"),
    d(266, "Silcoon", ["R", "S"], "Petalburg Woods, evolve Wurmple (random)"),
    d(267, "Beautifly", ["R", "S"], "Evolve Silcoon"),
    d(268, "Cascoon", ["R", "S"], "Petalburg Woods, evolve Wurmple (random)"),
    d(269, "Dustox", ["R", "S"], "Evolve Cascoon"),

    // ── Version exclusives: Lotad / Seedot lines ────
    d(270, "Lotad", ["S"], "Routes 102, 114"),
    d(271, "Lombre", ["S"], "Evolve Lotad"),
    d(272, "Ludicolo", ["S"], "Evolve Lombre (Water Stone)"),
    d(273, "Seedot", ["R"], "Routes 102, 114"),
    d(274, "Nuzleaf", ["R"], "Evolve Seedot"),
    d(275, "Shiftry", ["R"], "Evolve Nuzleaf (Leaf Stone)"),

    // ── Common flying types ─────────────────────────
    d(276, "Taillow", ["R", "S"], "Routes 104, 115, 116, Petalburg Woods"),
    d(277, "Swellow", ["R", "S"], "Evolve Taillow"),
    d(278, "Wingull", ["R", "S"], "Routes 103, 104, 110, 115, many water routes"),
    d(279, "Pelipper", ["R", "S"], "Routes 119, 121, evolve Wingull"),

    // ── Ralts line ──────────────────────────────────
    d(280, "Ralts", ["R", "S"], "Route 102 (rare)"),
    d(281, "Kirlia", ["R", "S"], "Evolve Ralts"),
    d(282, "Gardevoir", ["R", "S"], "Evolve Kirlia"),

    // ── Surskit line ────────────────────────────────
    d(283, "Surskit", ["R", "S"], "Routes 102, 114, 117, 120 (rare)"),
    d(284, "Masquerain", ["R", "S"], "Evolve Surskit"),

    // ── Shroomish line ──────────────────────────────
    d(285, "Shroomish", ["R", "S"], "Petalburg Woods, Route 104"),
    d(286, "Breloom", ["R", "S"], "Evolve Shroomish"),

    // ── Slakoth line ────────────────────────────────
    d(287, "Slakoth", ["R", "S"], "Petalburg Woods (rare)"),
    d(288, "Vigoroth", ["R", "S"], "Evolve Slakoth"),
    d(289, "Slaking", ["R", "S"], "Evolve Vigoroth"),

    // ── Nincada line ────────────────────────────────
    d(290, "Nincada", ["R", "S"], "Route 116"),
    d(291, "Ninjask", ["R", "S"], "Evolve Nincada"),
    d(292, "Shedinja", ["R", "S"], "Evolve Nincada (empty party slot + Poke Ball)"),

    // ── Whismur line ────────────────────────────────
    d(293, "Whismur", ["R", "S"], "Rusturf Tunnel, Route 116"),
    d(294, "Loudred", ["R", "S"], "Victory Road, evolve Whismur"),
    d(295, "Exploud", ["R", "S"], "Evolve Loudred"),

    // ── Makuhita line ───────────────────────────────
    d(296, "Makuhita", ["R", "S"], "Granite Cave, Victory Road"),
    d(297, "Hariyama", ["R", "S"], "Victory Road, evolve Makuhita"),

    // ── Azurill ─────────────────────────────────────
    d(298, "Azurill", ["R", "S"], "Breed Marill (Sea Incense)"),

    // ── Nosepass ────────────────────────────────────
    d(299, "Nosepass", ["R", "S"], "Granite Cave (Rock Smash)"),

    // ── Skitty line ─────────────────────────────────
    d(300, "Skitty", ["R", "S"], "Route 116 (rare)"),
    d(301, "Delcatty", ["R", "S"], "Evolve Skitty (Moon Stone)"),

    // ── Version exclusives: Sableye / Mawile ────────
    d(302, "Sableye", ["S"], "Granite Cave, Sky Pillar, Victory Road"),
    d(303, "Mawile", ["R"], "Granite Cave, Sky Pillar, Victory Road"),

    // ── Aron line ───────────────────────────────────
    d(304, "Aron", ["R", "S"], "Granite Cave, Victory Road"),
    d(305, "Lairon", ["R", "S"], "Victory Road, evolve Aron"),
    d(306, "Aggron", ["R", "S"], "Evolve Lairon"),

    // ── Meditite line ───────────────────────────────
    d(307, "Meditite", ["R", "S"], "Mt. Pyre, Victory Road"),
    d(308, "Medicham", ["R", "S"], "Victory Road, evolve Meditite"),

    // ── Electrike line ──────────────────────────────
    d(309, "Electrike", ["R", "S"], "Routes 110, 118"),
    d(310, "Manectric", ["R", "S"], "Route 118, evolve Electrike"),

    // ── Plusle & Minun ──────────────────────────────
    d(311, "Plusle", ["R", "S"], "Route 110"),
    d(312, "Minun", ["R", "S"], "Route 110"),

    // ── Volbeat & Illumise ──────────────────────────
    d(313, "Volbeat", ["R", "S"], "Route 117"),
    d(314, "Illumise", ["R", "S"], "Route 117"),

    // ── Roselia ─────────────────────────────────────
    d(315, "Roselia", ["R", "S"], "Route 117"),

    // ── Gulpin line ─────────────────────────────────
    d(316, "Gulpin", ["R", "S"], "Route 110"),
    d(317, "Swalot", ["R", "S"], "Evolve Gulpin"),

    // ── Carvanha line ───────────────────────────────
    d(318, "Carvanha", ["R", "S"], "Routes 118, 119 (Fishing)"),
    d(319, "Sharpedo", ["R", "S"], "Routes 124-128 (Super Rod), evolve Carvanha"),

    // ── Wailmer line ────────────────────────────────
    d(320, "Wailmer", ["R", "S"], "Routes 103, 105-110, 122, 124-128 (Surfing/Fishing)"),
    d(321, "Wailord", ["R", "S"], "Route 129 (rare), evolve Wailmer"),

    // ── Numel line ──────────────────────────────────
    d(322, "Numel", ["R", "S"], "Route 112, Fiery Path, Jagged Pass"),
    d(323, "Camerupt", ["R", "S"], "Evolve Numel"),

    // ── Torkoal ─────────────────────────────────────
    d(324, "Torkoal", ["R", "S"], "Fiery Path"),

    // ── Spoink line ─────────────────────────────────
    d(325, "Spoink", ["R", "S"], "Jagged Pass"),
    d(326, "Grumpig", ["R", "S"], "Evolve Spoink"),

    // ── Spinda ──────────────────────────────────────
    d(327, "Spinda", ["R", "S"], "Route 113"),

    // ── Trapinch line ───────────────────────────────
    d(328, "Trapinch", ["R", "S"], "Route 111 (Desert)"),
    d(329, "Vibrava", ["R", "S"], "Evolve Trapinch"),
    d(330, "Flygon", ["R", "S"], "Evolve Vibrava"),

    // ── Cacnea line ─────────────────────────────────
    d(331, "Cacnea", ["R", "S"], "Route 111 (Desert)"),
    d(332, "Cacturne", ["R", "S"], "Evolve Cacnea"),

    // ── Swablu line ─────────────────────────────────
    d(333, "Swablu", ["R", "S"], "Routes 114, 115"),
    d(334, "Altaria", ["R", "S"], "Sky Pillar, evolve Swablu"),

    // ── Version exclusives: Zangoose / Seviper ──────
    d(335, "Zangoose", ["R"], "Route 114"),
    d(336, "Seviper", ["S"], "Route 114"),

    // ── Version exclusives: Lunatone / Solrock ──────
    d(337, "Lunatone", ["S"], "Meteor Falls"),
    d(338, "Solrock", ["R"], "Meteor Falls"),

    // ── Barboach line ───────────────────────────────
    d(339, "Barboach", ["R", "S"], "Routes 111, 114, Meteor Falls (Fishing)"),
    d(340, "Whiscash", ["R", "S"], "Meteor Falls (Fishing), evolve Barboach"),

    // ── Corphish line ───────────────────────────────
    d(341, "Corphish", ["R", "S"], "Routes 102, 117 (Good Rod)"),
    d(342, "Crawdaunt", ["R", "S"], "Evolve Corphish"),

    // ── Baltoy line ─────────────────────────────────
    d(343, "Baltoy", ["R", "S"], "Route 111 (Desert)"),
    d(344, "Claydol", ["R", "S"], "Sky Pillar, evolve Baltoy"),

    // ── Fossil Pokemon ──────────────────────────────
    d(345, "Lileep", ["R", "S"], "Revive Root Fossil (Devon Corp)"),
    d(346, "Cradily", ["R", "S"], "Evolve Lileep"),
    d(347, "Anorith", ["R", "S"], "Revive Claw Fossil (Devon Corp)"),
    d(348, "Armaldo", ["R", "S"], "Evolve Anorith"),

    // ── Feebas line ─────────────────────────────────
    d(349, "Feebas", ["R", "S"], "Route 119 (Fishing, 6 specific tiles)"),
    d(350, "Milotic", ["R", "S"], "Evolve Feebas (max Beauty condition)"),

    // ── Castform ────────────────────────────────────
    d(351, "Castform", ["R", "S"], "Gift from Weather Institute"),

    // ── Kecleon ─────────────────────────────────────
    d(352, "Kecleon", ["R", "S"], "Routes 118, 119, 120, 121 (Devon Scope)"),

    // ── Shuppet line ────────────────────────────────
    d(353, "Shuppet", ["R", "S"], "Routes 121, 123, Mt. Pyre"),
    d(354, "Banette", ["R", "S"], "Sky Pillar, evolve Shuppet"),

    // ── Duskull line ────────────────────────────────
    d(355, "Duskull", ["R", "S"], "Routes 121, 123, Mt. Pyre"),
    d(356, "Dusclops", ["R", "S"], "Sky Pillar, evolve Duskull"),

    // ── Tropius ─────────────────────────────────────
    d(357, "Tropius", ["R", "S"], "Route 119"),

    // ── Chimecho ────────────────────────────────────
    d(358, "Chimecho", ["R", "S"], "Mt. Pyre summit (very rare)"),

    // ── Absol ───────────────────────────────────────
    d(359, "Absol", ["R", "S"], "Route 120"),

    // ── Wynaut & Wobbuffet ──────────────────────────
    d(360, "Wynaut", ["R", "S"], "Egg from Lavaridge Town old lady"),
    d(202, "Wobbuffet", ["R", "S"], "Safari Zone, evolve Wynaut"),

    // ── Snorunt line ────────────────────────────────
    d(361, "Snorunt", ["R", "S"], "Shoal Cave (low tide, ice room)"),
    d(362, "Glalie", ["R", "S"], "Evolve Snorunt"),

    // ── Spheal line ─────────────────────────────────
    d(363, "Spheal", ["R", "S"], "Shoal Cave"),
    d(364, "Sealeo", ["R", "S"], "Shoal Cave, evolve Spheal"),
    d(365, "Walrein", ["R", "S"], "Evolve Sealeo"),

    // ── Clamperl line ───────────────────────────────
    d(366, "Clamperl", ["R", "S"], "Underwater (Routes 124, 126)"),
    d(367, "Huntail", ["R", "S"], "Trade evolve Clamperl (Deep Sea Tooth)"),
    d(368, "Gorebyss", ["R", "S"], "Trade evolve Clamperl (Deep Sea Scale)"),

    // ── Relicanth ───────────────────────────────────
    d(369, "Relicanth", ["R", "S"], "Underwater (Routes 124, 126, rare)"),

    // ── Luvdisc ─────────────────────────────────────
    d(370, "Luvdisc", ["R", "S"], "Ever Grande City (Fishing)"),

    // ── Bagon line ──────────────────────────────────
    d(371, "Bagon", ["R", "S"], "Meteor Falls (back room, Waterfall required)"),
    d(372, "Shelgon", ["R", "S"], "Evolve Bagon"),
    d(373, "Salamence", ["R", "S"], "Evolve Shelgon"),

    // ── Beldum line ─────────────────────────────────
    d(374, "Beldum", ["R", "S"], "Gift from Steven's house (post-game)"),
    d(375, "Metang", ["R", "S"], "Evolve Beldum"),
    d(376, "Metagross", ["R", "S"], "Evolve Metang"),

    // ── Legendary Golems ────────────────────────────
    d(377, "Regirock", ["R", "S"], "Desert Ruins, Route 111 (post-game puzzle)"),
    d(378, "Regice", ["R", "S"], "Island Cave, Route 105 (post-game puzzle)"),
    d(379, "Registeel", ["R", "S"], "Ancient Tomb, Route 120 (post-game puzzle)"),

    // ── Eon duo ─────────────────────────────────────
    d(380, "Latias", ["S"], "Roaming Hoenn (post-game)"),
    d(381, "Latios", ["R"], "Roaming Hoenn (post-game)"),

    // ── Weather trio ────────────────────────────────
    d(382, "Kyogre", ["S"], "Cave of Origin, Sootopolis City"),
    d(383, "Groudon", ["R"], "Cave of Origin, Sootopolis City"),
    d(384, "Rayquaza", ["R", "S"], "Sky Pillar (post-game)"),

    // ── Returning Gen 1-2 Pokemon (Hoenn Dex) ───────

    // Pikachu line
    d(25, "Pikachu", ["R", "S"], "Safari Zone"),
    d(26, "Raichu", ["R", "S"], "Evolve Pikachu (Thunder Stone)"),
    d(172, "Pichu", ["R", "S"], "Breed Pikachu"),

    // Sandshrew line
    d(27, "Sandshrew", ["R", "S"], "Route 111 (Desert)"),
    d(28, "Sandslash", ["R", "S"], "Evolve Sandshrew"),

    // Vulpix line
    d(37, "Vulpix", ["R", "S"], "Mt. Pyre"),
    d(38, "Ninetales", ["R", "S"], "Evolve Vulpix (Fire Stone)"),

    // Jigglypuff line
    d(39, "Jigglypuff", ["R", "S"], "Route 115"),
    d(40, "Wigglytuff", ["R", "S"], "Evolve Jigglypuff (Moon Stone)"),
    d(174, "Igglybuff", ["R", "S"], "Breed Jigglypuff"),

    // Zubat line
    d(41, "Zubat", ["R", "S"], "Granite Cave, Meteor Falls, Victory Road, most caves"),
    d(42, "Golbat", ["R", "S"], "Victory Road, Sky Pillar, evolve Zubat"),
    d(169, "Crobat", ["R", "S"], "Evolve Golbat (friendship)"),

    // Oddish line
    d(43, "Oddish", ["R", "S"], "Routes 110, 117, 119, 120, 121, 123, Safari Zone"),
    d(44, "Gloom", ["R", "S"], "Routes 121, 123, Safari Zone, evolve Oddish"),
    d(45, "Vileplume", ["R", "S"], "Evolve Gloom (Leaf Stone)"),
    d(182, "Bellossom", ["R", "S"], "Evolve Gloom (Sun Stone)"),

    // Psyduck line
    d(54, "Psyduck", ["R", "S"], "Safari Zone (Surfing)"),
    d(55, "Golduck", ["R", "S"], "Safari Zone (Surfing), evolve Psyduck"),

    // Abra line
    d(63, "Abra", ["R", "S"], "Granite Cave (B1F)"),
    d(64, "Kadabra", ["R", "S"], "Evolve Abra"),
    d(65, "Alakazam", ["R", "S"], "Trade evolve Kadabra"),

    // Machop line
    d(66, "Machop", ["R", "S"], "Fiery Path, Jagged Pass, Route 112"),
    d(67, "Machoke", ["R", "S"], "Evolve Machop"),
    d(68, "Machamp", ["R", "S"], "Trade evolve Machoke"),

    // Tentacool line
    d(72, "Tentacool", ["R", "S"], "Surfing (most water routes)"),
    d(73, "Tentacruel", ["R", "S"], "Surfing (deep water routes), evolve Tentacool"),

    // Geodude line
    d(74, "Geodude", ["R", "S"], "Granite Cave, Route 111"),
    d(75, "Graveler", ["R", "S"], "Evolve Geodude"),
    d(76, "Golem", ["R", "S"], "Trade evolve Graveler"),

    // Magnemite line
    d(81, "Magnemite", ["R", "S"], "New Mauville"),
    d(82, "Magneton", ["R", "S"], "New Mauville, evolve Magnemite"),

    // Doduo line
    d(84, "Doduo", ["R", "S"], "Safari Zone"),
    d(85, "Dodrio", ["R", "S"], "Safari Zone, evolve Doduo"),

    // Voltorb line
    d(100, "Voltorb", ["R", "S"], "New Mauville, Team hideouts"),
    d(101, "Electrode", ["R", "S"], "New Mauville, evolve Voltorb"),

    // Rhyhorn line
    d(111, "Rhyhorn", ["R", "S"], "Safari Zone"),
    d(112, "Rhydon", ["R", "S"], "Evolve Rhyhorn"),

    // Horsea line
    d(116, "Horsea", ["R", "S"], "Routes 132-134 (Fishing)"),
    d(117, "Seadra", ["R", "S"], "Evolve Horsea"),
    d(230, "Kingdra", ["R", "S"], "Trade evolve Seadra (Dragon Scale)"),

    // Goldeen line
    d(118, "Goldeen", ["R", "S"], "Fishing (Routes 102, 111, 114, Safari Zone)"),
    d(119, "Seaking", ["R", "S"], "Evolve Goldeen"),

    // Staryu line
    d(120, "Staryu", ["R", "S"], "Lilycove City (Super Rod)"),
    d(121, "Starmie", ["R", "S"], "Evolve Staryu (Water Stone)"),

    // Pinsir
    d(127, "Pinsir", ["R", "S"], "Safari Zone"),

    // Magikarp line
    d(129, "Magikarp", ["R", "S"], "Fishing (everywhere, Old Rod)"),
    d(130, "Gyarados", ["R", "S"], "Evolve Magikarp"),

    // Chinchou line
    d(170, "Chinchou", ["R", "S"], "Underwater (Routes 124, 126)"),
    d(171, "Lanturn", ["R", "S"], "Evolve Chinchou"),

    // Natu line
    d(177, "Natu", ["R", "S"], "Safari Zone"),
    d(178, "Xatu", ["R", "S"], "Safari Zone, evolve Natu"),

    // Marill line
    d(183, "Marill", ["R", "S"], "Routes 102, 111, 112, 114, 117 (Surfing/Grass)"),
    d(184, "Azumarill", ["R", "S"], "Evolve Marill"),

    // Girafarig
    d(203, "Girafarig", ["R", "S"], "Safari Zone"),

    // Heracross
    d(214, "Heracross", ["R", "S"], "Safari Zone"),

    // Slugma line
    d(218, "Slugma", ["R", "S"], "Fiery Path"),
    d(219, "Magcargo", ["R", "S"], "Evolve Slugma"),

    // Corsola
    d(222, "Corsola", ["R", "S"], "Ever Grande City (Fishing)"),

    // Skarmory
    d(227, "Skarmory", ["R", "S"], "Route 113"),

    // Phanpy line
    d(231, "Phanpy", ["R", "S"], "Safari Zone"),
    d(232, "Donphan", ["R", "S"], "Evolve Phanpy"),
  ],
};
