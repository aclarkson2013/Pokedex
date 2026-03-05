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

export const SCARLET_VIOLET_WALKTHROUGH: GameWalkthrough = {
  slug: "scarlet-violet",
  gameLabel: "Scarlet & Violet",
  versionTags: ["Sc", "Vi"],
  parts: [
    /* ===============================================================
     *  PART 1 -- Cabo Poco & Mesagoza: A New Beginning
     * =============================================================== */
    {
      part: 1,
      title: "Cabo Poco & Mesagoza -- Choose Your Starter",
      summary:
        "Begin your adventure in Paldea. Choose your starter, meet Nemona, Arven, and Penny, receive Koraidon/Miraidon, and enroll at the academy in Mesagoza.",
      locations: [
        {
          name: "Cabo Poco",
          description:
            "Your adventure begins at your home in Cabo Poco. Head outside to meet your neighbor Nemona, the student council president and Champion-rank Trainer. She lets you choose your starter Pokemon -- Sprigatito (Grass), Fuecoco (Fire), or Quaxly (Water). After choosing, she challenges you to your first battle with the type-disadvantaged starter. Follow the path toward Mesagoza and encounter a mysterious injured Pokemon on the beach -- Koraidon (Scarlet) or Miraidon (Violet). After sharing a sandwich, it becomes your ride Pokemon for traversing Paldea.",
          items: [
            item("Starter Pokemon", "Choose Sprigatito, Fuecoco, or Quaxly from Nemona"),
            item("Poke Balls x5", "Gift from Nemona after tutorial catch"),
            item("Koraidon / Miraidon", "Found injured on the beach (becomes ride Pokemon)"),
          ],
          encounters: [
            enc("Lechonk", 915, ["Sc", "Vi"], "Grass", "2-4", "30%"),
            enc("Tarountula", 917, ["Sc", "Vi"], "Grass", "2-4", "20%"),
            enc("Fletchling", 661, ["Sc", "Vi"], "Grass", "2-5", "20%"),
            enc("Hoppip", 187, ["Sc", "Vi"], "Grass", "2-4", "15%"),
            enc("Pawmi", 921, ["Sc", "Vi"], "Grass", "2-5", "15%"),
          ],
        },
        {
          name: "Mesagoza & Naranja/Uva Academy",
          description:
            "Arrive at the grand city of Mesagoza -- the largest settlement in Paldea. Explore the shops, including Delibird Presents for supplies. Enroll at the academy (Naranja Academy in Scarlet, Uva Academy in Violet) and meet Director Clavell, your homeroom teacher Mr. Jacq, and fellow students Arven and Penny. Attend the school assembly where the Treasure Hunt is announced -- all students must embark on an independent study journey across Paldea. You have three storylines to pursue in any order: Victory Road (8 Gym Badges), Path of Legends (Titan Pokemon with Arven), and Starfall Street (Team Star bases with Penny). Nemona gives you the map app for your Rotom Phone.",
          items: [
            item("Rotom Phone", "From the academy upon enrollment"),
            item("TM032 Swift", "From Mr. Jacq after catching Pokemon for the Pokedex"),
            item("Map App", "From Nemona after the Treasure Hunt assembly"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 -- Stony Cliff Titan & Cortondo Gym
     * =============================================================== */
    {
      part: 2,
      title: "Stony Cliff Titan & Cortondo Gym (Bug)",
      summary:
        "Defeat the Stony Cliff Titan Klawf on the Path of Legends, then earn the Bug Badge from Gym Leader Katy in Cortondo.",
      locations: [
        {
          name: "South Province (Area Three) -- Stony Cliff Titan",
          description:
            "Head east from Mesagoza toward the rocky cliffs. Arven contacts you about a massive Titan Pokemon he needs help defeating. The Stony Cliff Titan is a giant Klawf clinging to the cliff face. Battle it once, then chase it and battle it again -- Arven will join with his Shellos in the second phase. After defeating it, you and Arven find Herba Mystica in the cave. Koraidon/Miraidon eats it and gains the dash ability, letting you sprint while riding. Arven reveals he is searching for all five Herba Mystica to heal his partner Pokemon.",
          encounters: [
            enc("Rockruff", 744, ["Sc", "Vi"], "Grass", "14-17", "20%"),
            enc("Klawf", 950, ["Sc", "Vi"], "Grass", "15-17", "10%"),
            enc("Shinx", 403, ["Sc", "Vi"], "Grass", "14-16", "15%"),
            enc("Makuhita", 296, ["Sc", "Vi"], "Grass", "14-16", "15%"),
          ],
          trainers: [
            trn("Titan Pokemon", "Stony Cliff Titan", [pk("Klawf", 16, 950)]),
          ],
          items: [
            item("Herba Mystica", "Cave behind the Titan (unlocks Koraidon/Miraidon dash)"),
          ],
        },
        {
          name: "Cortondo Gym -- Leader Katy (Bug)",
          description:
            "Head west from Mesagoza to the small town of Cortondo. The Gym Test here is the Olive Roll -- push a giant olive through an obstacle course to the goal. Complete it to unlock the Gym battle. Katy specializes in Bug-type Pokemon but her ace is a Teddiursa with the Bug Tera Type, making it a pure Bug-type for the battle. Fire, Flying, and Rock moves are all super effective. Her Nymble is fast but frail. Win to earn the Bug Badge, which makes Pokemon up to Lv. 25 obey you.",
          trainers: [
            trn("Gym Leader", "Katy", [
              pk("Nymble", 14, 919),
              pk("Tarountula", 14, 917),
              pk("Teddiursa", 15, 216),
            ], "Bug Badge + TM021 Pounce"),
          ],
          items: [
            item("Bug Badge", "Defeat Gym Leader Katy"),
            item("TM021 Pounce", "Reward from Katy"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 -- Team Star Dark Crew & Artazon Gym
     * =============================================================== */
    {
      part: 3,
      title: "Team Star Dark Crew & Artazon Gym (Grass)",
      summary:
        "Take on Giacomo and Team Star's Dark Crew base, then earn the Grass Badge from Gym Leader Brassius in Artazon.",
      locations: [
        {
          name: "West Province (Area One) -- Team Star Dark Crew Base",
          description:
            "Head to the Dark Crew's base in western Paldea. Team Star is a group of delinquent students who have stopped attending the academy. To assault the base, you must defeat 30 of their Pokemon within 10 minutes using the Let's Go auto-battle feature with your first three party Pokemon. After clearing the grunts, Giacomo the Dark Crew boss challenges you from atop his Starmobile -- a modified vehicle that functions as his ace Pokemon. Giacomo is a music-loving producer. Defeating him earns you the Dark Crew's Star Badge and LP. Penny contacts you afterward, revealing she is tied to Team Star's origins.",
          trainers: [
            trn("Team Star Boss", "Giacomo", [
              pk("Pawniard", 21, 624),
              pk("Revavroom", 20, 966),
            ], "Star Badge (Dark) + TM062 Foul Play"),
          ],
          items: [
            item("Star Badge (Dark)", "Defeat Giacomo"),
            item("TM062 Foul Play", "Reward from Giacomo"),
          ],
        },
        {
          name: "Artazon Gym -- Leader Brassius (Grass)",
          description:
            "Travel east to the art-themed town of Artazon, decorated with beautiful flower arrangements and sculptures. The Gym Test is Sunflora Hide and Seek -- find 10 hidden Sunflora scattered around town. After the test, challenge Brassius. He is a passionate artist who uses Grass-type Pokemon. His ace is Sudowoodo with the Grass Tera Type -- despite normally being a Rock type, it becomes pure Grass when Terastallized. Fire, Ice, Poison, and Flying moves work well. Win to earn the Grass Badge, making Pokemon up to Lv. 30 obey you.",
          trainers: [
            trn("Gym Leader", "Brassius", [
              pk("Petilil", 16, 548),
              pk("Smoliv", 16, 928),
              pk("Sudowoodo", 17, 185),
            ], "Grass Badge + TM020 Trailblaze"),
          ],
          items: [
            item("Grass Badge", "Defeat Gym Leader Brassius"),
            item("TM020 Trailblaze", "Reward from Brassius"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 -- Open Sky Titan & Levincia Gym
     * =============================================================== */
    {
      part: 4,
      title: "Open Sky Titan & Levincia Gym (Electric)",
      summary:
        "Battle the Open Sky Titan Bombirdier, then earn the Electric Badge from Gym Leader Iono in Levincia.",
      locations: [
        {
          name: "West Province (Area Two) -- Open Sky Titan",
          description:
            "Travel to the mountainous area in western Paldea where a massive Bombirdier -- the Open Sky Titan -- patrols the skies. This bird-like Pokemon drops boulders from above. Chase it up the mountain and battle it. In the second phase, Arven joins again. After defeating it, Koraidon/Miraidon eats the Herba Mystica and gains the ability to swim across water, opening up new areas of the map.",
          trainers: [
            trn("Titan Pokemon", "Open Sky Titan", [pk("Bombirdier", 20, 962)]),
          ],
          encounters: [
            enc("Fletchinder", 662, ["Sc", "Vi"], "Grass", "18-22", "15%"),
            enc("Oricorio", 741, ["Sc", "Vi"], "Grass", "18-22", "10%"),
            enc("Murkrow", 198, ["Sc", "Vi"], "Grass", "18-22", "15%"),
          ],
          items: [
            item("Herba Mystica", "Cave behind the Titan (unlocks Koraidon/Miraidon swim)"),
          ],
        },
        {
          name: "Levincia Gym -- Leader Iono (Electric)",
          description:
            "Head to the neon-lit coastal city of Levincia, Paldea's entertainment hub. Iono is a popular livestreamer and the Electric-type Gym Leader. Her Gym Test is 'Where in Levincia?' -- a live-streamed game show where you must identify a person based on clues by battling trainers around town. Iono's team hits hard with Electric moves. Her ace Mismagius gets the Electric Tera Type, making it a tricky matchup. Ground-type moves are your best friend here -- they hit most of her team super effectively and are immune to Electric attacks. Win to earn the Electric Badge.",
          trainers: [
            trn("Gym Leader", "Iono", [
              pk("Wattrel", 23, 940),
              pk("Bellibolt", 23, 939),
              pk("Luxio", 23, 404),
              pk("Mismagius", 24, 429),
            ], "Electric Badge + TM048 Volt Switch"),
          ],
          items: [
            item("Electric Badge", "Defeat Gym Leader Iono"),
            item("TM048 Volt Switch", "Reward from Iono"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 -- Team Star Fire Crew & Cascarrafa Gym
     * =============================================================== */
    {
      part: 5,
      title: "Team Star Fire Crew & Cascarrafa Gym (Water)",
      summary:
        "Storm Team Star's Fire Crew base led by Mela, then earn the Water Badge from Gym Leader Kofu in Cascarrafa.",
      locations: [
        {
          name: "East Province (Area One) -- Team Star Fire Crew Base",
          description:
            "Head to the Fire Crew's base in eastern Paldea. Mela is the hot-headed Fire Crew boss. The Star Barrage challenge is the same format -- defeat 30 Pokemon in 10 minutes using auto-battle. Mela's Starmobile is a Fire-type Revavroom that uses Blazing Torque. Water, Ground, and Rock moves are effective. Defeating Mela earns another Star Badge. You learn more about why Team Star was formed -- the original members were bullied students who banded together.",
          trainers: [
            trn("Team Star Boss", "Mela", [
              pk("Torkoal", 27, 324),
              pk("Revavroom", 26, 966),
            ], "Star Badge (Fire) + TM038 Flame Charge"),
          ],
          items: [
            item("Star Badge (Fire)", "Defeat Mela"),
            item("TM038 Flame Charge", "Reward from Mela"),
          ],
        },
        {
          name: "Cascarrafa Gym -- Leader Kofu (Water)",
          description:
            "Travel to the waterfall city of Cascarrafa, built around cascading water features. Kofu is an enthusiastic chef-themed Water-type Gym Leader. His Gym Test involves buying groceries at the Porto Marinada auction -- you must win a specific item at auction and deliver it to him. Kofu's ace Crabominable gets the Water Tera Type. Grass and Electric moves are very effective. Be careful of Crabominable's Fighting and Ice coverage moves. Win to earn the Water Badge.",
          trainers: [
            trn("Gym Leader", "Kofu", [
              pk("Veluza", 29, 976),
              pk("Wugtrio", 29, 961),
              pk("Crabominable", 30, 740),
            ], "Water Badge + TM022 Chilling Water"),
          ],
          items: [
            item("Water Badge", "Defeat Gym Leader Kofu"),
            item("TM022 Chilling Water", "Reward from Kofu"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 -- Lurking Steel Titan & Medali Gym
     * =============================================================== */
    {
      part: 6,
      title: "Lurking Steel Titan & Medali Gym (Normal)",
      summary:
        "Face the Lurking Steel Titan Orthworm in a tunnel battle, then earn the Normal Badge from Gym Leader Larry in Medali.",
      locations: [
        {
          name: "East Province (Area Three) -- Lurking Steel Titan",
          description:
            "Navigate to the tunnel system in eastern Paldea where the massive Orthworm -- the Lurking Steel Titan -- burrows through the earth. This giant worm Pokemon tunnels underground and emerges to attack. Battle it, chase it through the tunnel, and defeat it again with Arven's help. Koraidon/Miraidon eats the Herba Mystica and gains the high jump ability, allowing you to leap to greater heights while riding.",
          trainers: [
            trn("Titan Pokemon", "Lurking Steel Titan", [pk("Orthworm", 29, 968)]),
          ],
          items: [
            item("Herba Mystica", "Cave behind the Titan (unlocks Koraidon/Miraidon high jump)"),
          ],
        },
        {
          name: "Medali Gym -- Leader Larry (Normal)",
          description:
            "Travel to the restaurant town of Medali. Larry is a tired, overworked salaryman who happens to be both a Gym Leader and an Elite Four member. His Gym Test is the Secret Menu Item challenge -- gather clues from NPCs around town to figure out what to order at the restaurant. Larry's team uses Normal types, with his ace Staraptor gaining the Normal Tera Type for boosted STAB. Fighting-type moves are super effective against his entire team. Larry's deadpan personality contrasts with his genuinely strong battling skills. Win to earn the Normal Badge.",
          trainers: [
            trn("Gym Leader", "Larry", [
              pk("Komala", 35, 775),
              pk("Dudunsparce", 35, 982),
              pk("Staraptor", 36, 398),
            ], "Normal Badge + TM025 Facade"),
          ],
          items: [
            item("Normal Badge", "Defeat Gym Leader Larry"),
            item("TM025 Facade", "Reward from Larry"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 -- Team Star Poison Crew & Quaking Earth Titan
     * =============================================================== */
    {
      part: 7,
      title: "Team Star Poison Crew & Quaking Earth Titan",
      summary:
        "Defeat Atticus and Team Star's Poison Crew, then face the powerful Quaking Earth Titan -- Great Tusk (Scarlet) or Iron Treads (Violet).",
      locations: [
        {
          name: "Tagtree Thicket -- Team Star Poison Crew Base",
          description:
            "Head to the forested Tagtree Thicket to find the Poison Crew's base. Atticus is the ninja-themed Poison Crew boss who speaks in old-fashioned language. Complete the Star Barrage, then face Atticus. His Starmobile is a Poison-type Revavroom that uses Noxious Torque, which can poison your Pokemon. Ground and Psychic moves work well. After winning, you learn more about the original Team Star leaders and the Big Boss who united them.",
          trainers: [
            trn("Team Star Boss", "Atticus", [
              pk("Skuntank", 32, 435),
              pk("Muk", 32, 89),
              pk("Revavroom", 33, 966),
            ], "Star Badge (Poison) + TM102 Gunk Shot"),
          ],
          items: [
            item("Star Badge (Poison)", "Defeat Atticus"),
            item("TM102 Gunk Shot", "Reward from Atticus"),
          ],
        },
        {
          name: "Asado Desert -- Quaking Earth Titan",
          description:
            "Venture into the vast Asado Desert to confront the Quaking Earth Titan. In Scarlet this is Great Tusk, a Paradox Pokemon resembling an ancient Donphan. In Violet it is Iron Treads, a futuristic robotic Donphan. This is one of the strongest Titans at Lv. 45. Both are Ground/Steel-type-adjacent, so Water, Fire, Fighting, and Ground moves are effective. After the battle, Koraidon/Miraidon gains the glide ability, letting you soar from high places. Arven's partner Pokemon Mabosstiff is revealed to be gravely ill, motivating his search.",
          trainers: [
            trn("Titan Pokemon", "Quaking Earth Titan (Scarlet)", [pk("Great Tusk", 45, 984)]),
            trn("Titan Pokemon", "Quaking Earth Titan (Violet)", [pk("Iron Treads", 45, 990)]),
          ],
          encounters: [
            enc("Cacnea", 331, ["Sc", "Vi"], "Grass", "25-30", "20%"),
            enc("Hippopotas", 449, ["Sc", "Vi"], "Grass", "25-30", "15%"),
            enc("Silicobra", 843, ["Sc", "Vi"], "Grass", "25-30", "15%"),
            enc("Dugtrio", 51, ["Sc", "Vi"], "Grass", "28-32", "10%"),
          ],
          items: [
            item("Herba Mystica", "Cave behind the Titan (unlocks Koraidon/Miraidon glide)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 -- Montenevera Gym
     * =============================================================== */
    {
      part: 8,
      title: "Montenevera Gym (Ghost)",
      summary:
        "Travel to the snowy mountain town of Montenevera and earn the Ghost Badge from Gym Leader Ryme.",
      locations: [
        {
          name: "Glaseado Mountain -- Route to Montenevera",
          description:
            "Head north to the snowy Glaseado Mountain region. The terrain is icy and home to many Ice and Ghost-type Pokemon. Wild encounters become stronger here, so make sure your team is well-leveled.",
          encounters: [
            enc("Snover", 459, ["Sc", "Vi"], "Grass", "34-38", "20%"),
            enc("Snorunt", 361, ["Sc", "Vi"], "Grass", "34-38", "15%"),
            enc("Beartic", 614, ["Sc", "Vi"], "Grass", "38-42", "10%"),
            enc("Cetoddle", 974, ["Sc", "Vi"], "Grass", "35-40", "15%"),
            enc("Greavard", 971, ["Sc", "Vi"], "Grass", "35-40", "15%"),
          ],
        },
        {
          name: "Montenevera Gym -- Leader Ryme (Ghost)",
          description:
            "Montenevera is a snowy mountain town known for its hip-hop culture. Ryme is a famous rapper and Ghost-type Gym Leader, also the grandmother of Elite Four member Hassel... no, actually she is unrelated. Her Gym Test is a Double Battle rap tournament where you battle trainers on stage. Ryme's team is all Ghost types, with her ace Toxtricity gaining the Ghost Tera Type. Dark and Ghost moves are super effective, but be careful -- Ghost moves also hit your team if you use Ghost types. Normal types are immune to Ghost, which can be helpful defensively. Win to earn the Ghost Badge.",
          trainers: [
            trn("Gym Leader", "Ryme", [
              pk("Banette", 41, 354),
              pk("Mimikyu", 41, 778),
              pk("Houndstone", 41, 972),
              pk("Toxtricity", 42, 849),
            ], "Ghost Badge + TM029 Hex"),
          ],
          items: [
            item("Ghost Badge", "Defeat Gym Leader Ryme"),
            item("TM029 Hex", "Reward from Ryme"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 -- Team Star Fairy Crew & Alfornada Gym
     * =============================================================== */
    {
      part: 9,
      title: "Team Star Fairy Crew & Alfornada Gym (Psychic)",
      summary:
        "Storm Team Star's Fairy Crew base led by Ortega, then earn the Psychic Badge from Gym Leader Tulip in Alfornada.",
      locations: [
        {
          name: "North Province (Area One) -- Team Star Fairy Crew Base",
          description:
            "Head to the Fairy Crew's base in northern Paldea. Ortega is the wealthy, bratty Fairy Crew boss who comes from a privileged family. Complete the Star Barrage with 30 defeats, then face Ortega. His Starmobile is a Fairy-type Revavroom that uses Magical Torque, which can cause confusion. Poison and Steel moves are super effective against his team. After winning, the full backstory of Team Star unfolds -- they were formed to protect bullied students, but the original leaders graduated and the current bosses don't know the full story.",
          trainers: [
            trn("Team Star Boss", "Ortega", [
              pk("Azumarill", 50, 184),
              pk("Wigglytuff", 50, 40),
              pk("Dachsbun", 50, 927),
              pk("Revavroom", 50, 966),
            ], "Star Badge (Fairy) + TM079 Dazzling Gleam"),
          ],
          items: [
            item("Star Badge (Fairy)", "Defeat Ortega"),
            item("TM079 Dazzling Gleam", "Reward from Ortega"),
          ],
        },
        {
          name: "Alfornada Gym -- Leader Tulip (Psychic)",
          description:
            "Travel to the secluded town of Alfornada, accessible through a cave system. Tulip is a famous model and makeup artist who specializes in Psychic-type Pokemon. Her Gym Test is Emotional Spectrum Practice -- a themed battle challenge in her beauty salon. Tulip's ace Florges gains the Psychic Tera Type. Bug, Ghost, and Dark moves are effective against Psychic types. Farigiraf has Normal/Psychic typing making it immune to Ghost, so plan accordingly. Win to earn the Psychic Badge.",
          trainers: [
            trn("Gym Leader", "Tulip", [
              pk("Farigiraf", 44, 981),
              pk("Gardevoir", 44, 282),
              pk("Espathra", 44, 956),
              pk("Florges", 45, 671),
            ], "Psychic Badge + TM120 Psychic"),
          ],
          items: [
            item("Psychic Badge", "Defeat Gym Leader Tulip"),
            item("TM120 Psychic", "Reward from Tulip"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 -- False Dragon Titan & Team Star Fighting Crew
     * =============================================================== */
    {
      part: 10,
      title: "False Dragon Titan & Team Star Fighting Crew",
      summary:
        "Battle the tricky False Dragon Titan duo of Dondozo and Tatsugiri, then take on Eri and Team Star's Fighting Crew.",
      locations: [
        {
          name: "Casseroya Lake -- False Dragon Titan",
          description:
            "Travel to the large Casseroya Lake in northwest Paldea. The False Dragon Titan is actually two Pokemon working together -- the enormous Dondozo is being controlled by the tiny Tatsugiri riding on its head. First you battle Dondozo, then the real Titan Tatsugiri reveals itself. This is the final Titan at Lv. 56, making it the strongest Path of Legends encounter. After winning, Koraidon/Miraidon gains the climb ability, allowing you to scale vertical cliff faces. With all five Herba Mystica found, Arven uses them to fully heal Mabosstiff, completing his storyline for now.",
          trainers: [
            trn("Titan Pokemon", "False Dragon Titan", [
              pk("Dondozo", 56, 977),
              pk("Tatsugiri", 56, 978),
            ]),
          ],
          encounters: [
            enc("Dondozo", 977, ["Sc", "Vi"], "Surfing", "40-50", "10%"),
            enc("Magikarp", 129, ["Sc", "Vi"], "Surfing", "20-40", "30%"),
            enc("Gyarados", 130, ["Sc", "Vi"], "Surfing", "40-50", "5%"),
          ],
          items: [
            item("Herba Mystica", "Cave behind the Titan (unlocks Koraidon/Miraidon climb)"),
          ],
        },
        {
          name: "North Province (Area Two) -- Team Star Fighting Crew Base",
          description:
            "Head to the Fighting Crew's base, the last Team Star stronghold. Eri is the compassionate Fighting Crew boss who genuinely cares about her team members. She is the strongest Team Star boss. Complete the Star Barrage, then face Eri. Her Starmobile is a Fighting-type Revavroom that uses Combat Torque. Flying, Psychic, and Fairy moves are effective. After defeating all five Team Star bosses, Penny reveals herself as the Big Boss -- Cassiopeia -- who founded Team Star to protect bullied students. Director Clavell confronts the group, and the truth about Team Star's noble origins comes to light.",
          trainers: [
            trn("Team Star Boss", "Eri", [
              pk("Toxicroak", 55, 454),
              pk("Passimian", 55, 766),
              pk("Lucario", 55, 448),
              pk("Annihilape", 56, 979),
              pk("Revavroom", 56, 966),
            ], "Star Badge (Fighting) + TM167 Close Combat"),
          ],
          items: [
            item("Star Badge (Fighting)", "Defeat Eri"),
            item("TM167 Close Combat", "Reward from Eri"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 -- Glaseado Gym (Ice)
     * =============================================================== */
    {
      part: 11,
      title: "Glaseado Gym (Ice)",
      summary:
        "Challenge the final Gym Leader Grusha in the snowy Glaseado Mountain to earn the Ice Badge and complete Victory Road.",
      locations: [
        {
          name: "Glaseado Gym -- Leader Grusha (Ice)",
          description:
            "Return to the Glaseado Mountain area for the final Gym challenge. Grusha is a former professional snowboarder who retired after an injury and became the Ice-type Gym Leader. His Gym Test is a timed snowboard slope run -- race down the mountain while battling trainers along the way. Grusha's team features strong Ice types, with his ace Altaria gaining the Ice Tera Type. Altaria normally resists Fire but with Ice Tera Type, it becomes weak to Fire, Fighting, Rock, and Steel. Use these to your advantage. Winning earns the Ice Badge -- the eighth and final badge, meaning all Pokemon regardless of level will obey you. With all 8 badges, you can now challenge the Pokemon League.",
          trainers: [
            trn("Gym Leader", "Grusha", [
              pk("Frosmoth", 47, 873),
              pk("Beartic", 47, 614),
              pk("Cetitan", 47, 975),
              pk("Altaria", 48, 334),
            ], "Ice Badge + TM124 Ice Spinner"),
          ],
          items: [
            item("Ice Badge", "Defeat Gym Leader Grusha"),
            item("TM124 Ice Spinner", "Reward from Grusha"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 -- Pokemon League: Elite Four & Champion
     * =============================================================== */
    {
      part: 12,
      title: "Pokemon League -- Elite Four & Top Champion",
      summary:
        "Challenge the Elite Four and Top Champion Geeta at the Pokemon League to become Champion-rank.",
      locations: [
        {
          name: "Pokemon League -- Assessment & Elite Four",
          description:
            "Fly to the Pokemon League building in northern Paldea. Before battling, you must pass an interview assessment with Rika (who is also the first Elite Four member). She asks general knowledge questions about your journey. After passing, you face the Elite Four in sequence. Unlike older games, you can't leave between battles -- make sure your team is fully healed and you have plenty of healing items. Recommended level is 58-65.",
          trainers: [
            trn("Elite Four", "Rika (Ground)", [
              pk("Nidoqueen", 57, 31),
              pk("Dugtrio", 57, 51),
              pk("Donphan", 57, 232),
              pk("Camerupt", 57, 323),
              pk("Clodsire", 58, 980),
            ], "Ground specialist -- use Water, Grass, Ice"),
            trn("Elite Four", "Poppy (Steel)", [
              pk("Copperajah", 58, 879),
              pk("Magnezone", 58, 462),
              pk("Bronzong", 58, 437),
              pk("Corviknight", 58, 823),
              pk("Tinkaton", 59, 959),
            ], "Steel specialist -- use Fire, Fighting, Ground"),
            trn("Elite Four", "Larry (Flying)", [
              pk("Tropius", 59, 357),
              pk("Staraptor", 59, 398),
              pk("Oricorio", 59, 741),
              pk("Altaria", 59, 334),
              pk("Flamigo", 60, 973),
            ], "Flying specialist -- use Electric, Ice, Rock"),
            trn("Elite Four", "Hassel (Dragon)", [
              pk("Noivern", 60, 715),
              pk("Haxorus", 60, 612),
              pk("Dragalge", 60, 691),
              pk("Flapple", 60, 841),
              pk("Baxcalibur", 61, 998),
            ], "Dragon specialist -- use Ice, Dragon, Fairy"),
          ],
        },
        {
          name: "Pokemon League -- Top Champion Geeta",
          description:
            "After defeating all four Elite Four members, you face Top Champion Geeta. She is the chairwoman of the Pokemon League and uses a mixed team with no single type specialty. Her ace Glimmora Terastallizes into Rock type. Geeta's team covers many types so bring a diverse team. Her Kingambit is particularly dangerous with high Attack. After winning, you earn Champion rank but are not the Top Champion -- Geeta explains that in Paldea, Champion is a rank, not a singular title. Nemona is ecstatic and immediately challenges you to a Champion-rank battle outside.",
          trainers: [
            trn("Top Champion", "Geeta", [
              pk("Espathra", 61, 956),
              pk("Gogoat", 61, 673),
              pk("Veluza", 61, 976),
              pk("Avalugg", 61, 713),
              pk("Kingambit", 62, 983),
              pk("Glimmora", 62, 970),
            ], "Champion rank"),
            trn("Rival", "Nemona", [
              pk("Lycanroc", 65, 745),
              pk("Pawmot", 65, 923),
              pk("Goodra", 65, 706),
              pk("Dudunsparce", 65, 982),
              pk("Orthworm", 65, 968),
              pk("Meowscarada", 66, 908),
            ], "Nemona's team varies by your starter choice"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 -- The Way Home: Area Zero
     * =============================================================== */
    {
      part: 13,
      title: "The Way Home -- Area Zero & The Great Crater",
      summary:
        "With all three storylines complete, descend into the Great Crater of Paldea with your friends to uncover Area Zero's secrets and the truth about Koraidon/Miraidon and the AI Professor.",
      locations: [
        {
          name: "The Great Crater of Paldea -- Area Zero",
          description:
            "After completing Victory Road, Path of Legends, and Starfall Street, Director Clavell reveals that the center of Paldea -- the Great Crater -- contains Area Zero, a mysterious ecosystem sealed off from the rest of the region. Arven, Nemona, Penny, and you form a group to descend into the crater. Arven reveals that his parent (Professor Sada in Scarlet / Professor Turo in Violet) has been working in Area Zero and has become unreachable. As you descend through four Research Stations, you encounter Paradox Pokemon -- ancient (Scarlet) or futuristic (Violet) versions of existing Pokemon. These are extremely powerful and unique to each version.",
          encounters: [
            enc("Great Tusk", 984, ["Sc"], "Grass", "52-56", "15%"),
            enc("Scream Tail", 985, ["Sc"], "Grass", "52-56", "10%"),
            enc("Brute Bonnet", 986, ["Sc"], "Grass", "52-56", "10%"),
            enc("Flutter Mane", 987, ["Sc"], "Grass", "52-56", "10%"),
            enc("Slither Wing", 988, ["Sc"], "Grass", "52-56", "10%"),
            enc("Sandy Shocks", 989, ["Sc"], "Grass", "52-56", "10%"),
            enc("Iron Treads", 990, ["Vi"], "Grass", "52-56", "15%"),
            enc("Iron Bundle", 991, ["Vi"], "Grass", "52-56", "10%"),
            enc("Iron Hands", 992, ["Vi"], "Grass", "52-56", "10%"),
            enc("Iron Jugulis", 993, ["Vi"], "Grass", "52-56", "10%"),
            enc("Iron Moth", 994, ["Vi"], "Grass", "52-56", "10%"),
            enc("Iron Thorns", 995, ["Vi"], "Grass", "52-56", "10%"),
          ],
        },
        {
          name: "Zero Lab -- The AI Professor",
          description:
            "At the bottom of the Great Crater lies the Zero Lab. Here you discover the shocking truth -- the Professor you've been communicating with is actually an AI. The real Professor Sada/Turo passed away some time ago while researching Paradox Pokemon and the time machine they built. The AI was programmed to continue their research and activate the time machine, which would flood Paldea with Paradox Pokemon. You must battle the AI Professor to shut down the time machine. Your Koraidon/Miraidon plays a crucial role in the final confrontation. After the emotional conclusion, the AI sacrifices itself to seal the time machine and protect Paldea. You ride Koraidon/Miraidon back to the surface with your friends.",
          trainers: [
            trn("AI Professor", "Sada / Turo", [
              pk("Slither Wing", 66, 988),
              pk("Scream Tail", 66, 985),
              pk("Brute Bonnet", 66, 986),
              pk("Flutter Mane", 66, 987),
              pk("Sandy Shocks", 66, 989),
              pk("Roaring Moon", 67, 1005),
            ], "Scarlet version team"),
          ],
          items: [
            item("Scarlet Book / Violet Book", "Found in the Zero Lab"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 -- Post-Game: Academy Ace Tournament & Tera Raids
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game -- Academy Ace Tournament & Tera Raids",
      summary:
        "Participate in the Academy Ace Tournament and take on challenging 5-star and 6-star Tera Raid Battles.",
      isPostGame: true,
      locations: [
        {
          name: "Academy Ace Tournament",
          description:
            "After completing the main story, return to the academy to participate in the Academy Ace Tournament. This is a four-round elimination tournament where you face randomized opponents from a pool that includes Gym Leaders, Elite Four members, teachers, and other notable trainers. Their teams are significantly stronger than in the main story, with Pokemon in the Lv. 65-70 range. You can repeat the tournament as many times as you like for experience, prize money, and LP. Some opponents only appear after specific post-game conditions are met. This is the primary repeatable endgame content for leveling and earning rewards.",
        },
        {
          name: "Tera Raid Battles -- 5-Star & 6-Star",
          description:
            "With the main story complete, 5-star Tera Raid dens begin appearing across Paldea. These feature Pokemon around Lv. 75 with randomized Tera Types and are significantly harder than earlier raids. After completing enough 5-star raids and finishing the Academy Ace Tournament, 6-star raids unlock -- these feature Lv. 90 Pokemon with perfect IVs and their Hidden Ability. 6-star raids are designed for cooperative multiplayer and reward rare items including Herba Mystica, Ability Patches, and Bottle Caps. Building specialized raid Pokemon with optimized EVs and Natures becomes important. Periodic 7-star event raids feature special Pokemon like Charizard, Cinderace, and others with the Mightiest Mark.",
          items: [
            item("Herba Mystica", "6-star Tera Raid rewards"),
            item("Ability Patch", "6-star Tera Raid rewards (rare)"),
            item("Bottle Cap", "5-star and 6-star Tera Raid rewards"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 15 -- Post-Game: Legendaries & Competitive
     * =============================================================== */
    {
      part: 15,
      title: "Post-Game -- Legendaries & Competitive Battling",
      summary:
        "Encounter the Treasures of Ruin legendaries, catch the other Koraidon/Miraidon, and prepare for competitive battling.",
      isPostGame: true,
      locations: [
        {
          name: "Treasures of Ruin -- Legendary Quartet",
          description:
            "Four ancient Legendary Pokemon are sealed across Paldea -- the Treasures of Ruin. Each is locked behind a shrine, and you must find and pull 8 colored stakes hidden throughout the overworld to unseal each one. Ting-Lu (Dark/Ground) requires green stakes, Chien-Pao (Dark/Ice) requires blue stakes, Wo-Chien (Dark/Grass) requires purple stakes, and Chi-Yu (Dark/Fire) requires yellow stakes. Each is at Lv. 60 and has a signature ability that lowers the opposing team's stats. These are powerful competitive Pokemon. Save before each encounter.",
          encounters: [
            enc("Ting-Lu", 1003, ["Sc", "Vi"], "Overworld", "60", "---"),
            enc("Chien-Pao", 1002, ["Sc", "Vi"], "Overworld", "60", "---"),
            enc("Wo-Chien", 1001, ["Sc", "Vi"], "Overworld", "60", "---"),
            enc("Chi-Yu", 1004, ["Sc", "Vi"], "Overworld", "60", "---"),
          ],
          items: [
            item("Green Stakes x8", "Scattered across Paldea (unseal Ting-Lu)"),
            item("Blue Stakes x8", "Scattered across Paldea (unseal Chien-Pao)"),
            item("Purple Stakes x8", "Scattered across Paldea (unseal Wo-Chien)"),
            item("Yellow Stakes x8", "Scattered across Paldea (unseal Chi-Yu)"),
          ],
        },
        {
          name: "Area Zero Revisit & Competitive Preparation",
          description:
            "After completing the post-game storyline, you can return to Area Zero to catch Paradox Pokemon freely. A second Koraidon (Scarlet) or Miraidon (Violet) can be found and caught at Lv. 72 in Area Zero -- this one can be used in battles unlike your ride Pokemon. For competitive battling, visit the Battle Stadium in the Poke Portal to participate in Ranked Battles, Rental Teams, and Online Competitions. Use the Judge function (unlocked from the Academy) to check IVs, breed Pokemon with optimal stats using the picnic system and Ditto, train EVs using vitamins or Let's Go battles, and use Hyper Training with Bottle Caps to max out IVs at Lv. 50+.",
          encounters: [
            enc("Koraidon", 1007, ["Sc"], "Overworld", "72", "---"),
            enc("Miraidon", 1008, ["Vi"], "Overworld", "72", "---"),
            enc("Roaring Moon", 1005, ["Sc"], "Grass", "52-56", "5%"),
            enc("Iron Valiant", 1006, ["Vi"], "Grass", "52-56", "5%"),
          ],
          items: [
            item("Koraidon / Miraidon", "Area Zero (Lv. 72 -- battle-usable version)"),
          ],
        },
      ],
    },
  ],
};
