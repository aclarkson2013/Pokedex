import type { GameWalkthrough } from "./types";

/* helpers for concise data */
const enc = (
  pokemon: string,
  pokemonId: number,
  games: string[],
  method: string,
  levels: string,
  rate: string
) => ({ pokemon, pokemonId, games, method, levels, rate });

const trn = (
  cls: string,
  name: string,
  pokemon: { name: string; level: number; pokemonId: number }[],
  reward?: string
) => ({ class: cls, name, pokemon, reward });

const pk = (name: string, level: number, pokemonId: number) => ({
  name,
  level,
  pokemonId,
});

const item = (name: string, location: string) => ({ name, location });

export const LEGENDS_ARCEUS_WALKTHROUGH: GameWalkthrough = {
  slug: "legends-arceus",
  gameLabel: "Legends: Arceus",
  versionTags: ["LA"],
  parts: [
    /* ===============================================================
     *  PART 1 -- Prelude Beach & Jubilife Village
     * =============================================================== */
    {
      part: 1,
      title: "Prelude Beach & Jubilife Village",
      summary:
        "Arrive in ancient Hisui, choose your starter, and join the Galaxy Expedition Team.",
      locations: [
        {
          name: "Prelude Beach",
          description:
            "You awaken on a mysterious beach in ancient Hisui after falling through a space-time rift. Professor Laventon is nearby struggling with three escaped starter Pokemon. Help him by catching them in a real-time overworld encounter -- simply aim and throw Poke Balls at them. Choose your partner: Rowlet (Grass/Flying), Cyndaquil (Fire), or Oshawott (Water). All three are strong choices. After choosing, follow Laventon to Jubilife Village.",
          encounters: [
            enc("Rowlet", 722, ["LA"], "Gift", "5", "-- (Starter choice)"),
            enc("Cyndaquil", 155, ["LA"], "Gift", "5", "-- (Starter choice)"),
            enc("Oshawott", 501, ["LA"], "Gift", "5", "-- (Starter choice)"),
          ],
          items: [
            item("Starter Pokemon", "Choose one of three: Rowlet, Cyndaquil, or Oshawott"),
          ],
        },
        {
          name: "Jubilife Village",
          description:
            "The central hub of the Galaxy Expedition Team in Hisui. You will be given a trial to join the Survey Corps by catching Pokemon in the nearby Aspiration Hill area. Visit the clothier, craftworks, and general store. Speak with Commander Kamado at Galaxy Hall to formally join. Learn about crafting -- gather Apricorns and Tumblestone to craft Poke Balls at the workbench. This village is your base throughout the game; you will return here between expeditions to report findings, buy supplies, and raise your Star Rank by completing Pokedex research tasks.",
          items: [
            item("Crafting Kit", "From Akari/Rei during the crafting tutorial"),
            item("Survey Corps Uniform", "From Commander Kamado upon joining"),
            item("Arc Phone", "Mysterious device found at the start of your journey"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 -- Obsidian Fieldlands: First Missions
     * =============================================================== */
    {
      part: 2,
      title: "Obsidian Fieldlands: First Missions",
      summary:
        "Explore the Obsidian Fieldlands, learn catching mechanics, encounter Alpha Pokemon, and raise your Star Rank.",
      locations: [
        {
          name: "Aspiration Hill & Horseshoe Plains",
          description:
            "Your first real exploration area. Learn to sneak through tall grass and catch Pokemon from behind for a higher catch rate. Practice using different Poke Ball types and berries to lure Pokemon. You will encounter Bidoof, Starly, and Shinx commonly. Alpha Pokemon are larger, red-eyed, and much stronger -- avoid them early on unless you are well-prepared. Complete Pokedex research tasks by catching multiples, observing moves, and defeating Pokemon to fill research levels.",
          encounters: [
            enc("Bidoof", 399, ["LA"], "Overworld", "2-5", "Common"),
            enc("Starly", 396, ["LA"], "Overworld", "2-5", "Common"),
            enc("Shinx", 403, ["LA"], "Overworld", "3-6", "Common"),
            enc("Wurmple", 265, ["LA"], "Overworld", "2-4", "Common"),
            enc("Ponyta", 77, ["LA"], "Overworld", "5-8", "Uncommon"),
            enc("Buizel", 418, ["LA"], "Overworld", "6-10", "Uncommon"),
            enc("Eevee", 133, ["LA"], "Overworld", "7-9", "Rare"),
          ],
          items: [
            item("Poke Balls (x20)", "From Professor Laventon for field tutorial"),
            item("Revive", "Aspiration Hill, hidden near trees"),
          ],
        },
        {
          name: "Deertrack Path & Deertrack Heights",
          description:
            "Continue exploring northward. You will find Paras, Pichu, and Buizel here. Gather crafting materials from ore deposits and shaking trees. Complete requests from villagers to earn rewards and raise your Star Rank. Alpha Rapidash roams Horseshoe Plains -- it is very powerful but catchable if you weaken it first.",
          encounters: [
            enc("Paras", 46, ["LA"], "Overworld", "5-10", "Common"),
            enc("Pichu", 172, ["LA"], "Overworld", "5-8", "Uncommon"),
            enc("Pikachu", 25, ["LA"], "Overworld", "8-14", "Uncommon"),
            enc("Abra", 63, ["LA"], "Overworld", "7-12", "Rare"),
            enc("Drifloon", 425, ["LA"], "Overworld", "10-15", "Night only"),
            enc("Budew", 406, ["LA"], "Overworld", "5-8", "Common"),
          ],
          items: [
            item("Apricorn", "Shaking trees throughout the area"),
            item("Tumblestone", "Ore deposits along Deertrack Path"),
          ],
        },
        {
          name: "Nature's Pantry & Tidewater Dam",
          description:
            "The southern areas near the river host Water-type Pokemon. Shellos and Psyduck are common along the waterfront. Combee can be found in the trees. You will also encounter Beautifly and Dustox depending on Wurmple's evolution. Alpha Parasect lurks in the mushroom grove at Nature's Pantry.",
          encounters: [
            enc("Shellos", 422, ["LA"], "Overworld", "8-14", "Common"),
            enc("Psyduck", 54, ["LA"], "Overworld", "10-16", "Common"),
            enc("Combee", 415, ["LA"], "Overworld", "10-15", "Uncommon"),
            enc("Beautifly", 267, ["LA"], "Overworld", "8-14", "Uncommon"),
            enc("Dustox", 269, ["LA"], "Overworld", "8-14", "Uncommon"),
            enc("Geodude", 74, ["LA"], "Overworld", "12-18", "Common"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 -- Obsidian Fieldlands: Noble Kleavor
     * =============================================================== */
    {
      part: 3,
      title: "Obsidian Fieldlands: Noble Kleavor",
      summary:
        "Face the frenzied Noble Kleavor in the Grandtree Arena and unlock Wyrdeer as a rideable Pokemon.",
      locations: [
        {
          name: "Grandtree Arena",
          description:
            "After reaching a high enough Star Rank, Warden Lian asks you to quell the frenzied Noble Kleavor. Noble battles are action-RPG fights -- you dodge Kleavor's attacks in real time and throw balms made from its favorite food to calm it. When it staggers, you can send out your Pokemon to battle it and create openings for more balms. Kleavor uses Rock and Bug type moves and charges with devastating axe swings. Dodge sideways and throw balms during its recovery frames. Victory quells the frenzy.",
          trainers: [
            trn("Noble Pokemon", "Kleavor", [pk("Kleavor", 18, 900)], "Quell the frenzy"),
          ],
          items: [
            item("Insect Plate", "Reward for quelling Noble Kleavor"),
          ],
        },
        {
          name: "Wyrdeer Ride Unlock",
          description:
            "After quelling Kleavor, you gain the Celestica Flute and can summon Wyrdeer as a rideable Pokemon. Wyrdeer allows you to dash across the overworld at high speed, making exploration much faster. You can also jump while riding Wyrdeer to reach elevated terrain.",
          items: [
            item("Celestica Flute", "From Warden Mai after quelling Kleavor"),
          ],
        },
        {
          name: "Heights Camp & Obsidian Falls",
          description:
            "With Wyrdeer unlocked, explore the harder-to-reach areas of the Obsidian Fieldlands. Heights Camp serves as a fast travel point. The waterfall area has Gastly at night and Chimchar in the cliffs. Alpha Snorlax can be found sleeping near Tidewater Dam.",
          encounters: [
            enc("Chimchar", 390, ["LA"], "Overworld", "15-20", "Uncommon"),
            enc("Gastly", 92, ["LA"], "Overworld", "15-22", "Night only"),
            enc("Zubat", 41, ["LA"], "Cave", "14-20", "Common"),
            enc("Machop", 66, ["LA"], "Overworld", "14-20", "Common"),
            enc("Cherubi", 420, ["LA"], "Shaking trees", "12-18", "Rare"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 -- Crimson Mirelands: Exploration
     * =============================================================== */
    {
      part: 4,
      title: "Crimson Mirelands: Exploration",
      summary:
        "Journey to the marshy Crimson Mirelands and discover new Pokemon species.",
      locations: [
        {
          name: "Gapejaw Bog & Holm of Trials",
          description:
            "The Crimson Mirelands are a vast marshy region south of Jubilife Village. The terrain is muddy and slows movement on foot -- Wyrdeer helps greatly here. Toxic Croagunk and Stunky inhabit the bogs. Hippopotas burrows in the sandy areas. You will meet Warden Calaba who guards the wall fragment and Warden Mai. Explore the Holm of Trials for the Solaceon Ruins side area.",
          encounters: [
            enc("Croagunk", 453, ["LA"], "Overworld", "15-22", "Common"),
            enc("Stunky", 434, ["LA"], "Overworld", "14-20", "Common"),
            enc("Hippopotas", 449, ["LA"], "Overworld", "16-22", "Common"),
            enc("Barboach", 339, ["LA"], "Overworld (water)", "14-20", "Common"),
            enc("Ralts", 280, ["LA"], "Overworld", "14-20", "Rare"),
            enc("Yanma", 193, ["LA"], "Overworld", "18-24", "Uncommon"),
          ],
          items: [
            item("Mud Ball recipe", "From craftworks after reaching this area"),
          ],
        },
        {
          name: "Scarlet Bog & Cloudpool Ridge",
          description:
            "Deeper into the mirelands you find more dangerous Pokemon. Hisuian Growlithe can be found in Cloudpool Ridge and is an excellent addition to your team. Tangela, Murkrow, and Misdreavus also roam this area. Alpha Honchkrow perches on the high ridges. Teddiursa can be found near honey trees.",
          encounters: [
            enc("Hisuian Growlithe", 58, ["LA"], "Overworld", "18-26", "Uncommon"),
            enc("Murkrow", 198, ["LA"], "Overworld", "18-26", "Common"),
            enc("Misdreavus", 200, ["LA"], "Overworld", "18-26", "Night only"),
            enc("Teddiursa", 216, ["LA"], "Overworld", "18-24", "Uncommon"),
            enc("Tangela", 114, ["LA"], "Overworld", "20-26", "Uncommon"),
          ],
        },
        {
          name: "Solaceon Ruins",
          description:
            "An ancient ruin in the mirelands filled with Unown. There are 28 forms of Unown to collect throughout Hisui -- many are hidden as symbols on walls, cliffs, and structures across every region. Finding all Unown forms is an extensive side quest.",
          encounters: [
            enc("Unown", 201, ["LA"], "Overworld", "25", "Common (within ruins)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 -- Crimson Mirelands: Noble Lilligant
     * =============================================================== */
    {
      part: 5,
      title: "Crimson Mirelands: Noble Hisuian Lilligant",
      summary:
        "Battle the frenzied Noble Hisuian Lilligant and unlock Ursaluna as a rideable Pokemon.",
      locations: [
        {
          name: "Brava Arena",
          description:
            "Noble Hisuian Lilligant is a Grass/Fighting type and fights with graceful but powerful kicks and leaf-blade attacks. She leaps high into the air and slams down with shockwave attacks. Dodge her aerial slams and rapid kick combos, then throw balms when she pauses. When staggered, battle her with Flying, Fire, Ice, or Poison type Pokemon. Her speed makes her tricky -- be patient and dodge first, throw second.",
          trainers: [
            trn("Noble Pokemon", "Hisuian Lilligant", [pk("Hisuian Lilligant", 30, 549)], "Quell the frenzy"),
          ],
          items: [
            item("Meadow Plate", "Reward for quelling Noble Hisuian Lilligant"),
          ],
        },
        {
          name: "Ursaluna Ride Unlock",
          description:
            "After quelling Lilligant, Warden Calaba entrusts you with the ability to summon Ursaluna. Ursaluna is a Ground/Normal type rideable Pokemon that can sniff out buried treasures and items hidden underground. While riding Ursaluna, a detector will pulse when you are near a buried item. This is essential for finding rare crafting materials, Star Pieces, and hidden evolution items throughout all regions.",
          items: [
            item("Ursaluna Ride", "From Warden Calaba after quelling Noble Lilligant"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 -- Cobalt Coastlands: Exploration
     * =============================================================== */
    {
      part: 6,
      title: "Cobalt Coastlands: Exploration",
      summary:
        "Explore the coastal shores and volcanic islands of the Cobalt Coastlands.",
      locations: [
        {
          name: "Ginkgo Landing & Aipom Hill",
          description:
            "The Cobalt Coastlands are a sprawling coastal region with beaches, rocky shores, and volcanic islands. Water Pokemon are abundant here. Tentacool, Mantyke, and Gastrodon swim near the shore. Hisuian Qwilfish can be found in the tidal areas. On land, Duskull and Drifloon appear at night. Chatot can be found in the trees near Aipom Hill.",
          encounters: [
            enc("Tentacool", 72, ["LA"], "Overworld (water)", "20-28", "Common"),
            enc("Mantyke", 458, ["LA"], "Overworld (water)", "22-28", "Uncommon"),
            enc("Gastrodon", 423, ["LA"], "Overworld", "25-32", "Uncommon"),
            enc("Hisuian Qwilfish", 211, ["LA"], "Overworld (water)", "22-30", "Uncommon"),
            enc("Duskull", 355, ["LA"], "Overworld", "22-28", "Night only"),
            enc("Chatot", 441, ["LA"], "Overworld", "22-28", "Uncommon"),
          ],
        },
        {
          name: "Tombolo Walk & Castaway Shore",
          description:
            "The tidepools and beaches host Staryu, Remoraid, and Octillery. Machoke trains on the rocky shores. Vulpix (Alolan form is not here -- regular Vulpix) and Ninetales can be found near the volcanic hot springs on Firespit Island. Alpha Walrein lounges on the ice floes to the northeast.",
          encounters: [
            enc("Staryu", 120, ["LA"], "Overworld (water)", "24-32", "Uncommon"),
            enc("Remoraid", 223, ["LA"], "Overworld (water)", "22-28", "Common"),
            enc("Octillery", 224, ["LA"], "Overworld (water)", "28-36", "Uncommon"),
            enc("Machoke", 67, ["LA"], "Overworld", "28-34", "Uncommon"),
            enc("Ponyta", 77, ["LA"], "Overworld", "24-30", "Common"),
          ],
        },
        {
          name: "Firespit Island",
          description:
            "A volcanic island accessible later in the Coastlands. Magby and Magmar inhabit the volcanic caves. This is also where you can find rare Fire-type items and crafting materials. Alpha Ninetales resides at the peak of the island.",
          encounters: [
            enc("Magby", 240, ["LA"], "Overworld", "28-34", "Uncommon"),
            enc("Magmar", 126, ["LA"], "Overworld", "30-38", "Uncommon"),
            enc("Graveler", 75, ["LA"], "Overworld", "28-36", "Common"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 -- Cobalt Coastlands: Noble Arcanine
     * =============================================================== */
    {
      part: 7,
      title: "Cobalt Coastlands: Noble Hisuian Arcanine",
      summary:
        "Face the frenzied Noble Hisuian Arcanine and unlock Basculegion as a rideable Pokemon.",
      locations: [
        {
          name: "Molten Arena",
          description:
            "Noble Hisuian Arcanine is a Fire/Rock type that fights on a volcanic battlefield. It breathes streams of fire, hurls molten rocks, and charges with blazing rushes. The arena has lava hazards you must avoid while dodging Arcanine's attacks. When it rears up for a fire blast, dodge sideways and throw balms. Water and Ground type Pokemon are ideal when you get the chance to battle it directly. Its Rock typing removes its usual Water weakness partially, but Water moves still deal heavy damage.",
          trainers: [
            trn("Noble Pokemon", "Hisuian Arcanine", [pk("Hisuian Arcanine", 36, 59)], "Quell the frenzy"),
          ],
          items: [
            item("Flame Plate", "Reward for quelling Noble Hisuian Arcanine"),
          ],
        },
        {
          name: "Basculegion Ride Unlock",
          description:
            "After quelling Arcanine, Warden Iscan helps you gain the ability to summon Basculegion. Basculegion allows you to travel across water surfaces. You can now explore lakes, rivers, and ocean areas that were previously inaccessible. Many new Pokemon and items are found on islands and waterways throughout all regions.",
          items: [
            item("Basculegion Ride", "From Warden Iscan after quelling Noble Arcanine"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 -- Coronet Highlands: Exploration
     * =============================================================== */
    {
      part: 8,
      title: "Coronet Highlands: Exploration",
      summary:
        "Ascend the towering Coronet Highlands and encounter powerful mountain-dwelling Pokemon.",
      locations: [
        {
          name: "Heavenward Lookout & Wayward Cave",
          description:
            "The Coronet Highlands are the mountainous heart of Hisui, featuring steep cliffs, caves, and ancient ruins. The terrain is vertical and challenging. Gible can be found in Wayward Cave -- it evolves into the powerful Garchomp and is one of the best Pokemon in the game. Bronzor and Clefairy inhabit the ruins. Nosepass wanders the rocky paths. Alpha Mothim and Alpha Electivire can be found in different parts of the highlands.",
          encounters: [
            enc("Gible", 443, ["LA"], "Cave", "28-36", "Uncommon"),
            enc("Bronzor", 436, ["LA"], "Overworld", "28-34", "Common"),
            enc("Clefairy", 35, ["LA"], "Overworld", "30-38", "Uncommon"),
            enc("Nosepass", 299, ["LA"], "Overworld", "28-34", "Common"),
            enc("Machop", 66, ["LA"], "Overworld", "28-32", "Common"),
            enc("Zubat", 41, ["LA"], "Cave", "28-34", "Common"),
          ],
        },
        {
          name: "Celestica Ruins & Sacred Plaza",
          description:
            "Ancient ruins connected to the Celestica people who once worshipped the creator deity. You will learn more about the Red Chain and the connection between Dialga, Palkia, and Arceus. Goomy can be found in the rainy areas near Celestica Trail -- it eventually evolves into the powerful Goodra (Hisuian form). Misdreavus, Haunter, and Cleffa appear at night.",
          encounters: [
            enc("Goomy", 704, ["LA"], "Overworld", "30-38", "Rare"),
            enc("Cleffa", 173, ["LA"], "Overworld", "30-34", "Uncommon"),
            enc("Misdreavus", 200, ["LA"], "Overworld", "30-38", "Night only"),
            enc("Haunter", 93, ["LA"], "Overworld", "30-38", "Night only"),
            enc("Rhyhorn", 111, ["LA"], "Overworld", "32-40", "Common"),
          ],
        },
        {
          name: "Bolderoll Slope & Cloudcap Pass",
          description:
            "The higher elevations host Hisuian Sneasel, which evolves into the new Pokemon Sneasler. Luxio and Luxray roam the peaks. Hisuian Voltorb can be found rolling around near ancient structures. These areas also contain rare crafting materials and Tumblestone deposits.",
          encounters: [
            enc("Hisuian Sneasel", 215, ["LA"], "Overworld", "32-40", "Uncommon"),
            enc("Luxio", 404, ["LA"], "Overworld", "32-40", "Uncommon"),
            enc("Luxray", 405, ["LA"], "Overworld", "38-44", "Rare"),
            enc("Hisuian Voltorb", 100, ["LA"], "Overworld", "32-38", "Uncommon"),
            enc("Electabuzz", 125, ["LA"], "Overworld", "34-42", "Uncommon"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 -- Coronet Highlands: Noble Electrode
     * =============================================================== */
    {
      part: 9,
      title: "Coronet Highlands: Noble Hisuian Electrode",
      summary:
        "Battle the frenzied Noble Hisuian Electrode and unlock Sneasler as a rideable Pokemon.",
      locations: [
        {
          name: "Moonview Arena",
          description:
            "Noble Hisuian Electrode is an Electric/Grass type that unleashes rapid electrical discharges and shockwave patterns across the arena. It rolls and bounces around unpredictably, releasing concentric rings of electricity. It also uses Leaf Storm-like attacks that create hazardous plant growth on the field. Dodge its rolling charges and electrical rings, then throw balms during its brief recovery. Ground type Pokemon are ideal for the battle phases since they are immune to Electric moves, but watch out for its Grass coverage.",
          trainers: [
            trn("Noble Pokemon", "Hisuian Electrode", [pk("Hisuian Electrode", 46, 101)], "Quell the frenzy"),
          ],
          items: [
            item("Zap Plate", "Reward for quelling Noble Hisuian Electrode"),
          ],
        },
        {
          name: "Sneasler Ride Unlock",
          description:
            "After quelling Electrode, Warden Ingo helps you gain the ability to summon Sneasler. Sneasler allows you to climb sheer cliff faces, opening up massive vertical exploration in all regions. Many previously unreachable ledges, cave entrances, and item locations become accessible. Return to earlier areas to find new secrets using Sneasler's climbing ability.",
          items: [
            item("Sneasler Ride", "From Warden Ingo after quelling Noble Electrode"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 -- Alabaster Icelands: Exploration
     * =============================================================== */
    {
      part: 10,
      title: "Alabaster Icelands: Exploration",
      summary:
        "Brave the frozen Alabaster Icelands and discover Ice-type Pokemon.",
      locations: [
        {
          name: "Snowfields Camp & Whiteout Valley",
          description:
            "The Alabaster Icelands are the frozen northern frontier of Hisui, featuring blizzards, ice caves, and snowy plains. Visibility can be low during snowstorms. Snorunt and Froslass inhabit the snowfields. Bergmite and its evolution Hisuian Avalugg lumber through the frozen landscape. Piloswine and Swinub burrow in the snow. Alpha Glalie patrols the deeper snowfields.",
          encounters: [
            enc("Snorunt", 361, ["LA"], "Overworld", "38-46", "Common"),
            enc("Bergmite", 712, ["LA"], "Overworld", "38-44", "Common"),
            enc("Swinub", 220, ["LA"], "Overworld", "36-42", "Common"),
            enc("Piloswine", 221, ["LA"], "Overworld", "42-48", "Uncommon"),
            enc("Snover", 459, ["LA"], "Overworld", "38-44", "Common"),
            enc("Abomasnow", 460, ["LA"], "Overworld", "44-50", "Uncommon"),
          ],
        },
        {
          name: "Bonechill Wastes & Avalugg's Legacy",
          description:
            "Deeper into the icelands you find the massive ice formations of Avalugg's Legacy. Hisuian Zorua and Hisuian Zoroark can be found in the caves here -- they are Normal/Ghost type, a unique combination. Rufflet soars above the cliffs and evolves into Hisuian Braviary. Lucario can occasionally be found in Snowpoint Temple. Alpha Froslass resides in the deep caverns.",
          encounters: [
            enc("Hisuian Zorua", 570, ["LA"], "Cave/Overworld", "40-48", "Rare"),
            enc("Rufflet", 627, ["LA"], "Overworld", "40-48", "Uncommon"),
            enc("Riolu", 447, ["LA"], "Overworld", "40-46", "Rare"),
            enc("Lucario", 448, ["LA"], "Overworld", "48-54", "Rare"),
            enc("Glalie", 362, ["LA"], "Overworld", "44-50", "Uncommon"),
            enc("Froslass", 478, ["LA"], "Overworld", "44-52", "Rare"),
          ],
        },
        {
          name: "Snowpoint Temple",
          description:
            "An ancient temple in the heart of the icelands. This is where Regigigas slumbers -- but accessing it requires solving puzzles involving the three Regi golems. The temple interior has powerful Ghost and Ice type Pokemon. Exploring thoroughly is key to the post-game.",
          encounters: [
            enc("Bronzong", 437, ["LA"], "Temple", "48-56", "Uncommon"),
            enc("Golbat", 42, ["LA"], "Temple", "44-50", "Common"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 -- Alabaster Icelands: Noble Avalugg
     * =============================================================== */
    {
      part: 11,
      title: "Alabaster Icelands: Noble Hisuian Avalugg",
      summary:
        "Face the frenzied Noble Hisuian Avalugg and unlock Hisuian Braviary as a rideable Pokemon.",
      locations: [
        {
          name: "Icepeak Arena",
          description:
            "Noble Hisuian Avalugg is an Ice/Rock type and the largest of the Noble Pokemon. It creates devastating ice shockwaves by slamming its massive body, launches icicle barrages from its jaw, and creates ice walls that restrict movement. Its attacks cover huge areas. Stay mobile, dodge its body slams and icicle salvos, and throw balms whenever it pauses. Fire and Fighting type Pokemon deal quadruple super-effective damage. Steel, Water, Grass, Ground, and Rock moves are also super effective.",
          trainers: [
            trn("Noble Pokemon", "Hisuian Avalugg", [pk("Hisuian Avalugg", 56, 713)], "Quell the frenzy"),
          ],
          items: [
            item("Icicle Plate", "Reward for quelling Noble Hisuian Avalugg"),
          ],
        },
        {
          name: "Hisuian Braviary Ride Unlock",
          description:
            "After quelling Avalugg, you gain the ability to summon Hisuian Braviary for flight. This is the final and most transformative ride Pokemon -- you can now soar through the skies across all regions. Flying opens up enormous exploration potential. Return to every area to reach previously impossible locations, find hidden items on mountaintops, and access sky-exclusive Pokemon. Press the jump button mid-air to dive for speed.",
          items: [
            item("Braviary Ride", "After quelling Noble Avalugg"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 -- Temple of Sinnoh: Climax
     * =============================================================== */
    {
      part: 12,
      title: "Temple of Sinnoh: Dialga, Palkia & Volo",
      summary:
        "Ascend to the Temple of Sinnoh for the final confrontation with Dialga or Palkia in their Origin Formes, then face the true antagonist Volo.",
      locations: [
        {
          name: "Temple of Sinnoh",
          description:
            "The climax of the main story. You ascend Mount Coronet to the Temple of Sinnoh where the space-time rift is tearing reality apart. Depending on your version of events, you will battle either Origin Forme Dialga or Origin Forme Palkia in a Noble-style boss fight. These are massive, intense encounters -- you dodge their reality-warping attacks while throwing balms and battling with your Pokemon. Origin Forme Dialga attacks with temporal blasts and metallic charges. Origin Forme Palkia uses spatial tears and water-based assaults.",
          trainers: [
            trn("Space-Time Boss", "Origin Dialga", [pk("Dialga", 65, 483)], "Quell the frenzy"),
            trn("Space-Time Boss", "Origin Palkia", [pk("Palkia", 65, 484)], "Quell the frenzy"),
          ],
          items: [
            item("Adamant Crystal or Lustrous Globe", "After quelling Dialga/Palkia"),
            item("Origin Ball", "Special Poke Ball for catching the defeated deity"),
          ],
        },
        {
          name: "Volo Battle",
          description:
            "After the credits roll and you return to Hisui, the true endgame begins. Volo, who has been manipulating events from the shadows, reveals his plan to meet Arceus. He challenges you to the hardest trainer battle in the game atop the Temple of Sinnoh. Volo uses a full team of six powerful Pokemon and after defeating his team, Giratina appears and you must battle it in both its Altered and Origin Formes without healing. This is widely considered one of the most difficult battles in any Pokemon game. Prepare a team around level 68-75 with strong type coverage.",
          trainers: [
            trn("Pokemon Wielder", "Volo", [
              pk("Spiritomb", 68, 442),
              pk("Roserade", 68, 407),
              pk("Togekiss", 68, 468),
              pk("Hisuian Arcanine", 68, 59),
              pk("Lucario", 68, 448),
              pk("Garchomp", 68, 445),
            ], "The hardest trainer battle in the game"),
            trn("Legendary", "Giratina (Altered Forme)", [pk("Giratina", 70, 487)], "Immediately after Volo"),
            trn("Legendary", "Giratina (Origin Forme)", [pk("Giratina", 70, 487)], "Immediately after Altered Forme"),
          ],
          items: [
            item("Spooky Plate", "After defeating Volo and Giratina"),
            item("Griseous Core", "After defeating Giratina Origin Forme"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 -- Post-Game: Arceus Quest (Plate Collection)
     * =============================================================== */
    {
      part: 13,
      title: "Post-Game: The Arceus Quest",
      summary:
        "Collect all the Plates scattered across Hisui, complete Pokedex research, and work toward meeting Arceus.",
      isPostGame: true,
      locations: [
        {
          name: "Plate Collection",
          description:
            "After defeating Volo, you must collect all remaining Plates to summon Arceus. Some Plates are rewards from quelling Nobles (already obtained), while others require defeating powerful legendary and mythical Pokemon in special encounters. Each Plate is tied to a Pokemon type. Tracking them down requires exploring every corner of Hisui and completing specific requests.",
          items: [
            item("Draco Plate", "Defeat a powerful Pokemon at Coronet Highlands"),
            item("Iron Plate", "Defeat a powerful Pokemon at Cobalt Coastlands"),
            item("Splash Plate", "Defeat a powerful Pokemon at Cobalt Coastlands"),
            item("Earth Plate", "Defeat a powerful Pokemon at Crimson Mirelands"),
            item("Stone Plate", "Defeat a powerful Pokemon at Coronet Highlands"),
            item("Blank Plate", "Received during the Arceus questline"),
          ],
        },
        {
          name: "Legendary Pokemon Encounters",
          description:
            "Many legendary Pokemon appear in Hisui during the post-game. The Lake Guardians -- Uxie, Mesprit, and Azelf -- reside at Lakes Acuity, Verity, and Valor respectively. Heatran dwells in the volcanic caves of the Coastlands. Cresselia can be found in the Mirelands. Regigigas awakens in Snowpoint Temple after you have the three Regis. Each legendary has a unique encounter condition or puzzle to solve before you can battle and catch it.",
          encounters: [
            enc("Uxie", 480, ["LA"], "Legendary", "70", "One"),
            enc("Mesprit", 481, ["LA"], "Legendary", "70", "One"),
            enc("Azelf", 482, ["LA"], "Legendary", "70", "One"),
            enc("Heatran", 485, ["LA"], "Legendary", "70", "One"),
            enc("Cresselia", 488, ["LA"], "Legendary", "70", "One"),
            enc("Regigigas", 486, ["LA"], "Legendary", "70", "One"),
          ],
        },
        {
          name: "Forces of Nature",
          description:
            "Tornadus, Thundurus, and Landorus can be found in specific weather conditions across Hisui. The brand-new Enamorus is exclusive to Legends: Arceus and can be found after capturing the other three Forces of Nature. These encounters require specific weather patterns -- you may need to rest at camps to cycle the weather.",
          encounters: [
            enc("Tornadus", 641, ["LA"], "Legendary", "70", "One"),
            enc("Thundurus", 642, ["LA"], "Legendary", "70", "One"),
            enc("Landorus", 645, ["LA"], "Legendary", "70", "One"),
            enc("Enamorus", 905, ["LA"], "Legendary", "70", "One"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 -- Post-Game: Mass Outbreaks, Legendaries & Arceus
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Mass Outbreaks & Arceus",
      summary:
        "Hunt rare Pokemon in Massive Mass Outbreaks, catch remaining legendaries, and encounter the creator deity Arceus.",
      isPostGame: true,
      locations: [
        {
          name: "Massive Mass Outbreaks",
          description:
            "Massive Mass Outbreaks are a post-game feature where multiple Mass Outbreak events occur simultaneously across an entire region. When rain falls over a region on the map, multiple outbreak icons appear. Each outbreak features a different Pokemon species appearing in large numbers, including rare Pokemon and shinies at boosted rates. Some outbreaks have a second wave with evolved or rare forms. This is the best method for shiny hunting in the game. Check the map from Jubilife Village and travel to regions showing rain clouds.",
        },
        {
          name: "Remaining Legendary Encounters",
          description:
            "Several legendary Pokemon appear in special rift encounters or request-based quests. Darkrai requires save data from Pokemon Brilliant Diamond/Shining Pearl. Shaymin requires save data from Pokemon Sword/Shield. The Legendary birds Articuno, Zapdos, and Moltres appear in their Galarian forms in rare trees. Complete all remaining requests to unlock every encounter.",
          encounters: [
            enc("Darkrai", 491, ["LA"], "Request", "70", "One (requires BDSP save)"),
            enc("Shaymin", 492, ["LA"], "Request", "70", "One (requires SwSh save)"),
            enc("Manaphy", 490, ["LA"], "Request", "50", "One"),
            enc("Phione", 489, ["LA"], "Request", "35", "One"),
          ],
        },
        {
          name: "The Azure Flute: Arceus",
          description:
            "After completing the entire Hisui Pokedex (all 242 Pokemon caught with Research Level 10) and collecting all Plates, return to the Temple of Sinnoh. The Azure Flute resonates and Arceus, the creator deity, descends from the heavens. This is the ultimate Noble-style boss fight and the most challenging encounter in the game. Arceus uses attacks of every type, changes its type dynamically, and has devastating area-of-effect moves. Defeating Arceus allows you to catch it with a special Poke Ball. Arceus is level 75 and knows Judgment. Congratulations on completing the ultimate challenge of Pokemon Legends: Arceus!",
          encounters: [
            enc("Arceus", 493, ["LA"], "Story", "75", "One (complete Pokedex)"),
          ],
          trainers: [
            trn("Creator Deity", "Arceus", [pk("Arceus", 75, 493)], "Complete the Hisui Pokedex"),
          ],
          items: [
            item("Legend Plate", "From Arceus after catching it"),
          ],
        },
      ],
    },
  ],
};
