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

export const ORAS_WALKTHROUGH: GameWalkthrough = {
  slug: "omega-ruby-alpha-sapphire",
  gameLabel: "Omega Ruby & Alpha Sapphire",
  versionTags: ["OR", "AS"],
  parts: [
    /* ===================================================================
     *  PART 1 -- Littleroot Town: A New Adventure Begins
     * =================================================================== */
    {
      part: 1,
      title: "Littleroot Town & Route 101",
      summary:
        "Arrive in Littleroot Town, rescue Professor Birch, and choose your starter Pokemon.",
      locations: [
        {
          name: "Littleroot Town",
          description:
            "You arrive in Littleroot Town after moving from Johto. Head to the house next door to meet your rival (May if you chose the boy, Brendan if the girl). Go north to Route 101 and hear Professor Birch being chased by a Poochyena. Open his bag and pick your starter: Treecko (Grass), Torchic (Fire), or Mudkip (Water). Return to Birch's lab to receive your Pokedex and Poke Balls. Your rival will challenge you to a quick battle outside.",
          trainers: [
            trn("Pokemon Trainer", "May/Brendan", [
              pk("Treecko", 5, 252),
            ], "Rival picks the starter strong against yours"),
          ],
          items: [
            item("Potion", "Your PC at home"),
            item("Starter Pokemon", "Professor Birch's bag on Route 101"),
            item("Pokedex", "From Professor Birch in his lab"),
            item("Poke Balls x5", "From Professor Birch"),
          ],
        },
        {
          name: "Route 101",
          description:
            "A short route between Littleroot and Oldale Town. This is where you save Professor Birch from a wild Poochyena. After getting your starter, come back to catch some early Pokemon. The DexNav feature on the bottom screen lets you track and find Pokemon with hidden abilities or egg moves -- tap silhouettes to hunt for specific encounters.",
          encounters: [
            enc("Poochyena", 261, ["OR", "AS"], "Grass", "2-3", "45%"),
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "2-3", "40%"),
            enc("Wurmple", 265, ["OR", "AS"], "Grass", "2-3", "15%"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 2 -- Oldale Town, Route 102-103, Petalburg City
     * =================================================================== */
    {
      part: 2,
      title: "Oldale Town, Routes 102-103 & Petalburg City",
      summary:
        "Explore the early routes, catch new Pokemon, and visit your father Norman in Petalburg City.",
      locations: [
        {
          name: "Oldale Town",
          description:
            "A small quiet town with a Pokemon Center and Poke Mart. Heal your team and stock up on Poke Balls. Head west to Route 102.",
        },
        {
          name: "Route 102",
          description:
            "Your first proper route with trainers and tall grass. Several youngsters and lasses line the path. Catch a Ralts here if you can find one -- it is rare but becomes a very powerful Gardevoir (or Gallade with a Dawn Stone on a male). Lotad is exclusive to Alpha Sapphire while Seedot is exclusive to Omega Ruby.",
          encounters: [
            enc("Poochyena", 261, ["OR", "AS"], "Grass", "3-4", "30%"),
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "3-4", "30%"),
            enc("Wurmple", 265, ["OR", "AS"], "Grass", "3-4", "15%"),
            enc("Lotad", 270, ["AS"], "Grass", "3-4", "15%"),
            enc("Seedot", 273, ["OR"], "Grass", "3-4", "15%"),
            enc("Ralts", 280, ["OR", "AS"], "Grass", "3-4", "5%"),
            enc("Surskit", 283, ["OR", "AS"], "Grass", "3-4", "5%"),
          ],
          trainers: [
            trn("Youngster", "Calvin", [pk("Poochyena", 5, 261)], "P80"),
            trn("Bug Catcher", "Rick", [pk("Wurmple", 4, 265)], "P64"),
            trn("Youngster", "Allen", [pk("Zigzagoon", 4, 263)], "P64"),
            trn("Lass", "Tiana", [pk("Zigzagoon", 4, 263)], "P64"),
          ],
          items: [
            item("Potion", "Hidden in the grass patches"),
          ],
        },
        {
          name: "Petalburg City",
          description:
            "Your dad Norman is the Gym Leader here but you cannot challenge him yet -- he uses Normal types and will only battle you after you earn four badges. Inside the gym you meet Wally, a shy boy whom Norman asks you to help catch his first Pokemon. You lend him a Zigzagoon and a Poke Ball and he catches a Ralts. Head west to Route 104.",
          items: [
            item("PlayNav (BuzzNav, DexNav, AreaNav)", "Registered automatically"),
          ],
        },
        {
          name: "Route 103",
          description:
            "A route north of Oldale Town across the water. You can come here for a rival battle early on. Later with Surf you can access the eastern half to find more Pokemon and items.",
          encounters: [
            enc("Poochyena", 261, ["OR", "AS"], "Grass", "3-4", "30%"),
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "3-4", "30%"),
            enc("Wingull", 278, ["OR", "AS"], "Grass", "3-4", "30%"),
            enc("Ralts", 280, ["OR", "AS"], "Grass", "3-4", "10%"),
          ],
          trainers: [
            trn("Pokemon Trainer", "May/Brendan", [
              pk("Treecko", 5, 252),
            ], "Rival battle"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 3 -- Petalburg Woods, Rustboro City & Rustboro Gym
     * =================================================================== */
    {
      part: 3,
      title: "Petalburg Woods, Rustboro City & Rustboro Gym",
      summary:
        "Navigate Petalburg Woods, arrive at Rustboro City, and earn the Stone Badge from Roxanne.",
      locations: [
        {
          name: "Route 104 (South)",
          description:
            "Head south from Petalburg to the lower section of Route 104. The Pretty Petal Flower Shop is here where you can later get the Wailmer Pail for growing berries. Cross into Petalburg Woods.",
          encounters: [
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "4-5", "30%"),
            enc("Wurmple", 265, ["OR", "AS"], "Grass", "4-5", "25%"),
            enc("Taillow", 276, ["OR", "AS"], "Grass", "4-5", "25%"),
            enc("Wingull", 278, ["OR", "AS"], "Grass", "4-5", "20%"),
          ],
          items: [
            item("Poke Ball", "Near the flower shop"),
            item("X Defense", "Hidden in flowers"),
          ],
        },
        {
          name: "Petalburg Woods",
          description:
            "A shadowy forest with Bug and Grass Pokemon. A Devon Corporation researcher is being harassed by a Team Aqua/Magma Grunt -- defeat the grunt to earn a Great Ball. The researcher will ask you to deliver Devon Goods in Rustboro. Shroomish is found here and learns Spore at level 40 (or as Breloom). Slakoth is rare but worthwhile if you want to use the Slaking line.",
          encounters: [
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "5-6", "20%"),
            enc("Wurmple", 265, ["OR", "AS"], "Grass", "5-6", "25%"),
            enc("Silcoon", 266, ["OR", "AS"], "Grass", "5-6", "10%"),
            enc("Cascoon", 268, ["OR", "AS"], "Grass", "5-6", "10%"),
            enc("Shroomish", 285, ["OR", "AS"], "Grass", "5-6", "20%"),
            enc("Slakoth", 287, ["OR", "AS"], "Grass", "5-6", "10%"),
            enc("Taillow", 276, ["OR", "AS"], "Grass", "5-6", "5%"),
          ],
          trainers: [
            trn("Team Aqua/Magma Grunt", "Grunt", [pk("Poochyena", 9, 261)], "P360"),
            trn("Bug Catcher", "Lyle", [pk("Wurmple", 6, 265), pk("Wurmple", 6, 265)], "P96"),
            trn("Bug Catcher", "James", [pk("Nincada", 6, 290), pk("Nincada", 6, 290)], "P96"),
          ],
          items: [
            item("Great Ball", "From Devon researcher after defeating Grunt"),
            item("Ether", "Southwest corner"),
            item("Paralyze Heal", "Hidden near the east path"),
            item("X Attack", "Northwest section"),
          ],
        },
        {
          name: "Rustboro City",
          description:
            "A stone city with the Devon Corporation headquarters. Visit the Pokemon Trainers School to pick up a Quick Claw. Talk to the residents to learn about Mega Evolution -- this is a core ORAS feature. Prepare for Roxanne's Rock-type gym. If you picked Mudkip or Treecko, you have a type advantage. Torchic trainers should catch a Shroomish or Lotad/Seedot in the woods.",
          items: [
            item("Quick Claw", "Pokemon Trainers School"),
            item("HM01 Cut", "From the Cutter's house"),
            item("Letter", "From Devon President (deliver to Steven in Dewford)"),
          ],
        },
        {
          name: "Rustboro Gym -- Leader Roxanne",
          description:
            "Roxanne specializes in Rock-type Pokemon. Water, Grass, Ground, and Fighting moves are super effective. Her Nosepass has Sturdy so it will survive one hit at full HP -- use a two-hit strategy or chip damage first. Winning earns you the Stone Badge, which increases Attack, and TM39 Rock Tomb.",
          trainers: [
            trn("Youngster", "Tommy", [pk("Geodude", 10, 74)], "P160"),
            trn("Youngster", "Marc", [pk("Geodude", 10, 74)], "P160"),
            trn("Gym Leader", "Roxanne", [
              pk("Geodude", 12, 74),
              pk("Nosepass", 14, 299),
            ], "P1,680 + TM39 (Rock Tomb)"),
          ],
          items: [
            item("Stone Badge", "Defeat Roxanne"),
            item("TM39 Rock Tomb", "Defeat Roxanne"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 4 -- Route 116, Rusturf Tunnel, Dewford Town & Dewford Gym
     * =================================================================== */
    {
      part: 4,
      title: "Route 116, Rusturf Tunnel, Dewford Town & Dewford Gym",
      summary:
        "Chase Team Aqua/Magma through Rusturf Tunnel, sail to Dewford Island, and earn the Knuckle Badge from Brawly.",
      locations: [
        {
          name: "Route 116",
          description:
            "East of Rustboro City. After earning the Stone Badge, a Team Aqua/Magma Grunt steals the Devon Goods. Chase them east to the Rusturf Tunnel entrance. Nincada is found here and evolves into Ninjask at level 20 (with a bonus Shedinja if you have an empty party slot and a spare Poke Ball).",
          encounters: [
            enc("Poochyena", 261, ["OR", "AS"], "Grass", "6-8", "28%"),
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "6-8", "20%"),
            enc("Taillow", 276, ["OR", "AS"], "Grass", "6-8", "20%"),
            enc("Whismur", 293, ["OR", "AS"], "Grass", "6-8", "20%"),
            enc("Nincada", 290, ["OR", "AS"], "Grass", "6-8", "10%"),
            enc("Skitty", 300, ["OR", "AS"], "Grass", "6-8", "2%"),
          ],
          trainers: [
            trn("Youngster", "Joey", [pk("Zigzagoon", 9, 263)], "P144"),
            trn("Bug Catcher", "Jose", [pk("Wurmple", 8, 265), pk("Nincada", 8, 290)], "P128"),
            trn("Hiker", "Clark", [pk("Geodude", 8, 74)], "P320"),
            trn("School Kid", "Karen", [pk("Shroomish", 9, 285)], "P180"),
          ],
          items: [
            item("Repel", "Near the tunnel entrance"),
            item("Ether", "East end of route"),
            item("HP Up", "Hidden near the flowers"),
          ],
        },
        {
          name: "Rusturf Tunnel",
          description:
            "A short tunnel connecting Routes 116 and Verdanturf. The grunt stole Peeko the Wingull from Mr. Briney -- defeat the grunt to rescue Peeko and recover the Devon Goods. Return the goods to the Devon President in Rustboro. He gives you the Devon Parts to deliver and asks you to find Steven Stone in Dewford Cave. Mr. Briney on Route 104 will now sail you to Dewford Town.",
          encounters: [
            enc("Whismur", 293, ["OR", "AS"], "Cave", "6-9", "100%"),
          ],
          trainers: [
            trn("Team Aqua/Magma Grunt", "Grunt", [pk("Poochyena", 11, 261)], "P440"),
          ],
          items: [
            item("Devon Goods", "Recovered from Grunt"),
            item("Poke Ball", "Inside the tunnel"),
          ],
        },
        {
          name: "Dewford Town",
          description:
            "A small island town accessible by Mr. Briney's boat. The gym is here and Granite Cave is to the north. Talk to the fisherman near the Gym to receive an Old Rod. Dewford is known for trendy phrases -- talk to the boy in the house to start a trend.",
          items: [
            item("Old Rod", "From the fisherman near the gym"),
            item("Silk Scarf", "From a man in one of the houses"),
          ],
        },
        {
          name: "Granite Cave",
          description:
            "Explore the cave to find Steven Stone and deliver the Letter from the Devon President. Steven gives you TM51 Steel Wing. The cave has multiple floors with Rock Smash boulders. Aron (Steel/Rock) and Makuhita (Fighting) are great catches here. You will also receive HM05 Flash from a hiker near the entrance to light up the dark lower floors.",
          encounters: [
            enc("Zubat", 41, ["OR", "AS"], "Cave", "7-10", "30%"),
            enc("Makuhita", 296, ["OR", "AS"], "Cave", "7-10", "30%"),
            enc("Geodude", 74, ["OR", "AS"], "Cave", "7-10", "20%"),
            enc("Aron", 304, ["OR", "AS"], "Cave", "7-10", "10%"),
            enc("Abra", 63, ["OR", "AS"], "Cave", "7-10", "10%"),
          ],
          trainers: [],
          items: [
            item("TM51 Steel Wing", "From Steven Stone"),
            item("Escape Rope", "B1F"),
            item("Repel", "B2F"),
            item("Everstone", "B1F"),
          ],
        },
        {
          name: "Dewford Gym -- Leader Brawly",
          description:
            "Brawly specializes in Fighting-type Pokemon. Flying, Psychic, and Fairy moves are super effective. The gym is a dark room that gradually lights up as you defeat trainers. His Makuhita has the Guts ability (boosted Attack when statused) and knows Bulk Up, so don't let him set up. A Taillow with Guts or Wingull with Water Gun/Wing Attack works well here.",
          trainers: [
            trn("Battle Girl", "Laura", [pk("Meditite", 13, 307)], "P312"),
            trn("Black Belt", "Hideki", [pk("Machop", 13, 66)], "P416"),
            trn("Gym Leader", "Brawly", [
              pk("Machop", 14, 66),
              pk("Makuhita", 16, 296),
            ], "P1,920 + TM08 (Bulk Up)"),
          ],
          items: [
            item("Knuckle Badge", "Defeat Brawly"),
            item("TM08 Bulk Up", "Defeat Brawly"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 5 -- Slateport City, Route 110 & Mauville Gym
     * =================================================================== */
    {
      part: 5,
      title: "Slateport City, Route 110 & Mauville Gym",
      summary:
        "Deliver the Devon Parts in Slateport, battle Team Aqua/Magma at the Museum, and earn the Dynamo Badge from Wattson.",
      locations: [
        {
          name: "Route 109 & Slateport Beach",
          description:
            "Sail from Dewford to Slateport with Mr. Briney. Route 109 has beach trainers and the Seashore House where you can battle for free Soda Pops. Land on Slateport Beach.",
          encounters: [
            enc("Tentacool", 72, ["OR", "AS"], "Surfing", "5-10", "65%"),
            enc("Wingull", 278, ["OR", "AS"], "Surfing", "5-10", "30%"),
            enc("Pelipper", 279, ["OR", "AS"], "Surfing", "10-15", "5%"),
            enc("Magikarp", 129, ["OR", "AS"], "Old Rod", "5-10", "65%"),
            enc("Tentacool", 72, ["OR", "AS"], "Old Rod", "5-10", "35%"),
          ],
          trainers: [
            trn("Tuber", "Hailey", [pk("Marill", 13, 183)], "P52"),
            trn("Sailor", "Huey", [pk("Machop", 13, 66), pk("Wingull", 13, 278)], "P416"),
          ],
          items: [
            item("Soft Sand", "From a boy on the beach"),
          ],
        },
        {
          name: "Slateport City",
          description:
            "A bustling port city. Deliver the Devon Parts to Captain Stern at the Oceanic Museum -- but Team Aqua (AS) or Team Magma (OR) will confront you inside. Defeat two grunts and their leader will back off for now. The city has a Pokemon Contest Hall (your first chance to try ORAS Contests with Mega Evolution appeal), the Name Rater, and the Market with rare items. Pick up TM46 Thief from the museum.",
          trainers: [
            trn("Team Aqua/Magma Grunt", "Grunt", [pk("Carvanha", 14, 318)], "P560"),
            trn("Team Aqua/Magma Grunt", "Grunt", [pk("Zubat", 14, 41)], "P560"),
          ],
          items: [
            item("TM46 Thief", "Oceanic Museum (2F)"),
            item("Contest Costume", "Contest Hall from Lisia"),
            item("Pokeblock Kit", "Contest Hall"),
          ],
        },
        {
          name: "Route 110",
          description:
            "North of Slateport heading to Mauville City. Your rival will battle you on this route. There is the Cycling Road (upper path) and the lower path under it. You receive the Acro Bike or Mach Bike from Rydel in Mauville (you can swap between them freely in ORAS by talking to Rydel). Electrike and Gulpin are common catches here. Plusle (OR) and Minun (AS) also appear.",
          encounters: [
            enc("Poochyena", 261, ["OR", "AS"], "Grass", "12-13", "20%"),
            enc("Electrike", 309, ["OR", "AS"], "Grass", "12-13", "25%"),
            enc("Gulpin", 316, ["OR", "AS"], "Grass", "12-13", "25%"),
            enc("Oddish", 43, ["OR", "AS"], "Grass", "12-13", "15%"),
            enc("Plusle", 311, ["OR"], "Grass", "12-13", "5%"),
            enc("Minun", 312, ["AS"], "Grass", "12-13", "5%"),
            enc("Wingull", 278, ["OR", "AS"], "Grass", "12-13", "10%"),
          ],
          trainers: [
            trn("Pokemon Trainer", "May/Brendan", [
              pk("Slugma", 18, 218),
              pk("Shroomish", 18, 285),
              pk("Marshtomp", 20, 259),
            ], "Rival battle (varies by your starter)"),
            trn("Psychic", "Edward", [pk("Abra", 15, 63)], "P480"),
            trn("Triathlete", "Abigail", [pk("Magnemite", 14, 81)], "P560"),
          ],
          items: [
            item("Acro Bike or Mach Bike", "Rydel's Cycles in Mauville City"),
            item("Itemfinder (Dowsing Machine)", "From a man on Route 110"),
            item("Rare Candy", "Hidden on the cycling road"),
          ],
        },
        {
          name: "Mauville City",
          description:
            "Mauville City has been completely redesigned in ORAS as an indoor shopping mall complex. The bike shop, Move Tutor, and various shops are inside. Wattson's Gym is accessible from the city center. The second floor has food courts and specialty shops. Talk to the girl at the Pokemon Center to receive a free Cosplay Pikachu after the Contest.",
          items: [
            item("HM06 Rock Smash", "From a man in Mauville Hills"),
            item("Acro Bike or Mach Bike", "Rydel's Cycles"),
          ],
        },
        {
          name: "Mauville Gym -- Leader Wattson",
          description:
            "Wattson specializes in Electric-type Pokemon. Ground moves are the best counter -- Geodude, Marshtomp, or Nincada work well. The gym is a switch puzzle where you step on switches to open electric barriers. His Magneton has Sturdy and Volt Switch. Wattson's team hits hard so make sure you're at least level 20 or higher.",
          trainers: [
            trn("Guitarist", "Kirk", [pk("Electrike", 14, 309), pk("Electrike", 14, 309)], "P448"),
            trn("Battle Girl", "Vivian", [pk("Meditite", 14, 307)], "P336"),
            trn("Youngster", "Ben", [pk("Zigzagoon", 14, 263), pk("Gulpin", 14, 316)], "P224"),
            trn("Gym Leader", "Wattson", [
              pk("Magnemite", 19, 81),
              pk("Voltorb", 19, 100),
              pk("Magneton", 21, 82),
            ], "P2,520 + TM72 (Volt Switch)"),
          ],
          items: [
            item("Dynamo Badge", "Defeat Wattson"),
            item("TM72 Volt Switch", "Defeat Wattson"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 6 -- Route 111-112, Mt. Chimney & Lavaridge Gym
     * =================================================================== */
    {
      part: 6,
      title: "Routes 111-112, Mt. Chimney & Lavaridge Gym",
      summary:
        "Travel north through the desert and fiery routes, battle Team Aqua/Magma on Mt. Chimney, and earn the Heat Badge from Flannery.",
      locations: [
        {
          name: "Route 111 (South)",
          description:
            "Head north from Mauville. The southern section has trainers and the Winstrate family house (four consecutive battles). The desert area requires Go-Goggles (obtained later from Brendan/May) to enter. You can catch Sandshrew and Trapinch in the desert once you have them.",
          encounters: [
            enc("Sandshrew", 27, ["OR", "AS"], "Grass", "19-21", "30%"),
            enc("Trapinch", 328, ["OR", "AS"], "Grass (Desert)", "19-21", "20%"),
            enc("Baltoy", 343, ["OR", "AS"], "Grass (Desert)", "19-21", "20%"),
            enc("Cacnea", 331, ["OR", "AS"], "Grass (Desert)", "19-21", "30%"),
          ],
          trainers: [
            trn("Winstrate Family", "Victor", [pk("Taillow", 15, 276)], "P600"),
            trn("Winstrate Family", "Victoria", [pk("Roselia", 15, 315)], "P600"),
            trn("Winstrate Family", "Vivi", [pk("Marill", 15, 183)], "P240"),
            trn("Winstrate Family", "Vicky", [pk("Meditite", 17, 307)], "P408"),
          ],
          items: [
            item("Macho Brace", "From the Winstrate Family after winning all 4 battles"),
          ],
        },
        {
          name: "Route 112 & Mt. Chimney",
          description:
            "Route 112 leads to the Fiery Path and the Mt. Chimney Cable Car. Take the cable car up to the summit where Team Aqua (AS) or Team Magma (OR) is trying to use a meteorite to activate the volcano (OR) or dormant it (AS). Battle through grunts and face Admin Tabitha (OR) or Admin Matt (AS), then the leader Maxie (OR) or Archie (AS). After winning, the meteorite is safe. Head down to Jagged Pass.",
          encounters: [
            enc("Numel", 322, ["OR", "AS"], "Grass", "14-16", "40%"),
            enc("Machop", 66, ["OR", "AS"], "Grass", "14-16", "20%"),
            enc("Spoink", 325, ["OR", "AS"], "Grass (Jagged Pass)", "19-21", "20%"),
          ],
          trainers: [
            trn("Team Magma Admin", "Tabitha", [
              pk("Numel", 20, 322),
              pk("Mightyena", 22, 262),
            ], "OR version"),
            trn("Team Aqua Admin", "Matt", [
              pk("Carvanha", 20, 318),
              pk("Mightyena", 22, 262),
            ], "AS version"),
            trn("Team Magma Leader", "Maxie", [
              pk("Mightyena", 24, 262),
              pk("Camerupt", 25, 323),
            ], "OR version"),
            trn("Team Aqua Leader", "Archie", [
              pk("Mightyena", 24, 262),
              pk("Sharpedo", 25, 319),
            ], "AS version"),
          ],
          items: [
            item("Meteorite", "Recovered from Team Magma/Aqua"),
          ],
        },
        {
          name: "Lavaridge Town",
          description:
            "A hot springs town at the base of Mt. Chimney. Head south down Jagged Pass to reach it. The hot springs are famous -- talk to the old woman near them to receive a Pokemon Egg containing Wynaut. Prepare for Flannery's Fire-type gym.",
          items: [
            item("Wynaut Egg", "From old woman near the hot springs"),
            item("Go-Goggles", "From Brendan/May after arriving"),
            item("Charcoal", "From the herb shop"),
          ],
        },
        {
          name: "Lavaridge Gym -- Leader Flannery",
          description:
            "Flannery specializes in Fire-type Pokemon. Water, Ground, and Rock moves are super effective. The gym has steam geysers you ride on to navigate. Her Torkoal has high defense and uses Overheat. Marshtomp and Tentacool are good choices. Her Torkoal knows Attract so bring mixed-gender teams.",
          trainers: [
            trn("Kindler", "Jeff", [pk("Slugma", 23, 218)], "P736"),
            trn("Kindler", "Jace", [pk("Slugma", 23, 218)], "P736"),
            trn("Battle Girl", "Sadie", [pk("Meditite", 23, 307)], "P552"),
            trn("Gym Leader", "Flannery", [
              pk("Slugma", 26, 218),
              pk("Numel", 26, 322),
              pk("Torkoal", 28, 324),
            ], "P3,360 + TM50 (Overheat)"),
          ],
          items: [
            item("Heat Badge", "Defeat Flannery"),
            item("TM50 Overheat", "Defeat Flannery"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 7 -- Petalburg Gym (Norman)
     * =================================================================== */
    {
      part: 7,
      title: "Petalburg Gym & Route 118",
      summary:
        "Return to Petalburg City and challenge your father Norman for the Balance Badge, then head east.",
      locations: [
        {
          name: "Petalburg City (Revisit)",
          description:
            "With four badges now earned, return to Petalburg City to challenge your father Norman. His gym uses Normal-type Pokemon with room-based challenges. Each room has a different theme (Speed, Accuracy, Defense, etc.) Pick your path through the rooms to reach Norman at the back.",
        },
        {
          name: "Petalburg Gym -- Leader Norman",
          description:
            "Norman specializes in Normal-type Pokemon. Fighting moves are the only super-effective type. His Slaking is extremely powerful but has the Truant ability (can only attack every other turn). Use Protect on Slaking's attack turns, then strike when it loafs. His Vigoroth does not have Truant so it attacks every turn. Makuhita/Hariyama and Machop/Machoke work well. Breloom with Mach Punch is excellent.",
          trainers: [
            trn("Cooltrainer", "Randall", [pk("Delcatty", 26, 301)], "P1,040"),
            trn("Cooltrainer", "Mary", [pk("Delcatty", 26, 301)], "P1,040"),
            trn("Cooltrainer", "Parker", [pk("Linoone", 26, 264)], "P1,040"),
            trn("Gym Leader", "Norman", [
              pk("Slaking", 28, 289),
              pk("Vigoroth", 28, 288),
              pk("Slaking", 30, 289),
            ], "P3,600 + TM67 (Retaliate)"),
          ],
          items: [
            item("Balance Badge", "Defeat Norman"),
            item("TM67 Retaliate", "Defeat Norman"),
            item("HM03 Surf", "From Wally's father after defeating Norman"),
          ],
        },
        {
          name: "Route 118",
          description:
            "East of Mauville, now accessible with Surf. Cross the water to meet Steven Stone who gives you the Latias (AS) or Latios (OR) -- you can now Soar on its back to fly anywhere on the map and discover Mirage Spots. This is one of ORAS's signature features. The Eon Flute lets you Soar at any time.",
          encounters: [
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "24-26", "20%"),
            enc("Linoone", 264, ["OR", "AS"], "Grass", "24-26", "10%"),
            enc("Electrike", 309, ["OR", "AS"], "Grass", "24-26", "30%"),
            enc("Kecleon", 352, ["OR", "AS"], "Grass", "24-26", "20%"),
            enc("Wingull", 278, ["OR", "AS"], "Grass", "24-26", "20%"),
          ],
          items: [
            item("Latias + Mega Stone", "From Steven (Alpha Sapphire)"),
            item("Latios + Mega Stone", "From Steven (Omega Ruby)"),
            item("Eon Flute", "From Steven (enables Soaring)"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 8 -- Weather Institute, Route 119-120 & Fortree Gym
     * =================================================================== */
    {
      part: 8,
      title: "Weather Institute, Routes 119-120 & Fortree Gym",
      summary:
        "Rescue the Weather Institute from Team Aqua/Magma, receive Castform, and earn the Feather Badge from Winona.",
      locations: [
        {
          name: "Route 119",
          description:
            "A long rain-soaked route leading north from Route 118. The tall grass is very thick and the rain is constant. The Weather Institute is at the north end, overrun by Team Aqua (AS) or Team Magma (OR). Battle through the grunts inside and defeat the admin to free the scientists. You receive a Castform as thanks -- it changes form with weather. Your rival battles you just outside after you leave. They give you HM02 Fly.",
          encounters: [
            enc("Zigzagoon", 263, ["OR", "AS"], "Grass", "24-26", "20%"),
            enc("Linoone", 264, ["OR", "AS"], "Grass", "26", "10%"),
            enc("Oddish", 43, ["OR", "AS"], "Grass", "24-26", "20%"),
            enc("Tropius", 357, ["OR", "AS"], "Grass", "25-27", "10%"),
            enc("Kecleon", 352, ["OR", "AS"], "Grass", "25-27", "20%"),
            enc("Feebas", 349, ["OR", "AS"], "Fishing (special tiles)", "15", "5%"),
          ],
          trainers: [
            trn("Team Aqua/Magma Admin", "Shelly/Courtney", [
              pk("Carvanha", 28, 318),
              pk("Mightyena", 28, 262),
            ], "Version dependent"),
            trn("Pokemon Trainer", "May/Brendan", [
              pk("Slugma", 29, 218),
              pk("Shroomish", 29, 285),
              pk("Marshtomp", 31, 259),
            ], "Rival battle (varies by starter)"),
          ],
          items: [
            item("Castform", "Gift from Weather Institute scientist"),
            item("HM02 Fly", "From your rival after battle"),
            item("Elixir", "Hidden on the route"),
            item("Leaf Stone", "Hidden near the tall grass patches"),
          ],
        },
        {
          name: "Route 120",
          description:
            "An ancient route with tall grass, hidden Kecleon encounters, and the Ancient Tomb entrance. Steven Stone appears and gives you the Devon Scope to reveal invisible Kecleon blocking the bridge. Absol can be found in the tall grass -- it is powerful and has a Mega Evolution. This route also has the entrance to the Scorched Slab.",
          encounters: [
            enc("Oddish", 43, ["OR", "AS"], "Grass", "25-27", "20%"),
            enc("Marill", 183, ["OR", "AS"], "Grass", "25-27", "20%"),
            enc("Absol", 359, ["OR", "AS"], "Grass", "25-27", "8%"),
            enc("Kecleon", 352, ["OR", "AS"], "Grass", "25-27", "20%"),
            enc("Mightyena", 262, ["OR", "AS"], "Grass", "25-27", "20%"),
            enc("Seedot", 273, ["OR"], "Grass", "25-27", "10%"),
            enc("Lotad", 270, ["AS"], "Grass", "25-27", "10%"),
          ],
          items: [
            item("Devon Scope", "From Steven Stone on the bridge"),
            item("Nugget", "Hidden on the route"),
          ],
        },
        {
          name: "Fortree City",
          description:
            "A city of tree houses connected by bridges. The gym entrance is blocked by an invisible Kecleon -- use the Devon Scope to reveal and move it. Prepare for Winona's Flying-type gym.",
          items: [
            item("TM10 Hidden Power", "From a man in the Pokemon Center"),
          ],
        },
        {
          name: "Fortree Gym -- Leader Winona",
          description:
            "Winona specializes in Flying-type Pokemon. Electric, Ice, and Rock moves are super effective. The gym has rotating turnstile gates you navigate. Her Altaria knows Cotton Guard and Dragon Dance, making it very bulky and dangerous if it sets up. An Electric-type like Manectric (Mega Manectric is available in ORAS) or an Ice move user will sweep her team. Skarmory has high Defense so use special moves against it.",
          trainers: [
            trn("Bird Keeper", "Jared", [pk("Doduo", 32, 84)], "P1,024"),
            trn("Picnicker", "Kylee", [pk("Swablu", 32, 333)], "P512"),
            trn("Camper", "Terrell", [pk("Taillow", 32, 276), pk("Swellow", 32, 277)], "P512"),
            trn("Gym Leader", "Winona", [
              pk("Swellow", 33, 277),
              pk("Pelipper", 33, 279),
              pk("Skarmory", 33, 227),
              pk("Altaria", 35, 334),
            ], "P4,200 + TM19 (Roost)"),
          ],
          items: [
            item("Feather Badge", "Defeat Winona"),
            item("TM19 Roost", "Defeat Winona"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 9 -- Lilycove, Mt. Pyre & Team Hideout
     * =================================================================== */
    {
      part: 9,
      title: "Lilycove City, Mt. Pyre & Team Aqua/Magma Hideout",
      summary:
        "Explore Lilycove City, ascend Mt. Pyre to protect the orbs, and infiltrate the enemy team's hideout.",
      locations: [
        {
          name: "Route 121 & Lilycove City",
          description:
            "Head east from Fortree through Route 121. Lilycove City has the Department Store (the biggest shop in Hoenn), the Contest Hall, and the Lilycove Museum. Team Aqua (AS) or Team Magma (OR) has blocked the entrance to their hideout east of the city. First head south to Mt. Pyre.",
          encounters: [
            enc("Mightyena", 262, ["OR", "AS"], "Grass", "27-29", "30%"),
            enc("Shuppet", 353, ["OR"], "Grass", "27-29", "20%"),
            enc("Duskull", 355, ["AS"], "Grass", "27-29", "20%"),
            enc("Oddish", 43, ["OR", "AS"], "Grass", "27-29", "20%"),
            enc("Gloom", 44, ["OR", "AS"], "Grass", "27-29", "10%"),
            enc("Kecleon", 352, ["OR", "AS"], "Grass", "27-29", "10%"),
            enc("Wingull", 278, ["OR", "AS"], "Grass", "27-29", "10%"),
          ],
          items: [
            item("PP Max", "Hidden on Route 121"),
          ],
        },
        {
          name: "Mt. Pyre",
          description:
            "A mountain cemetery for Pokemon. Climb the interior floors fighting trainers and catching Ghost Pokemon. At the summit, Team Aqua (AS) or Team Magma (OR) is stealing the Red Orb (OR) or Blue Orb (AS). The old couple at the top give you the opposite orb -- the Magma Suit/Aqua Suit power. Defeat the grunts to chase them back to their hideout. Shuppet (OR) and Duskull (AS) are version-exclusive Ghost types found here.",
          encounters: [
            enc("Shuppet", 353, ["OR", "AS"], "Building", "25-30", "30%"),
            enc("Duskull", 355, ["OR", "AS"], "Building", "25-30", "30%"),
            enc("Meditite", 307, ["OR", "AS"], "Grass (exterior)", "25-28", "20%"),
            enc("Vulpix", 37, ["OR", "AS"], "Grass (exterior)", "25-28", "20%"),
            enc("Chimecho", 358, ["OR", "AS"], "Grass (summit)", "27-30", "2%"),
          ],
          trainers: [
            trn("Hex Maniac", "Valerie", [pk("Sableye", 32, 302)], "P1,024"),
            trn("Black Belt", "Atsushi", [pk("Hariyama", 32, 297)], "P1,024"),
          ],
          items: [
            item("Blue Orb", "From the elderly couple (Omega Ruby)"),
            item("Red Orb", "From the elderly couple (Alpha Sapphire)"),
            item("Cleanse Tag", "Interior"),
            item("Sea Incense", "Mt. Pyre summit"),
          ],
        },
        {
          name: "Team Aqua Hideout / Team Magma Hideout",
          description:
            "Located in a cove east of Lilycove City (Aqua in AS) or inside Mt. Chimney / Jagged Pass (Magma in OR). Navigate the hideout solving warp pad puzzles and battling grunts and admins. You discover the team's plan to awaken Primal Kyogre (AS) or Primal Groudon (OR) using the orbs. Collect the Master Ball in the hideout! After clearing it, the team leaves for the Seafloor Cavern -- you need to get the final two badges first.",
          trainers: [
            trn("Team Aqua Admin", "Matt", [
              pk("Sharpedo", 34, 319),
              pk("Mightyena", 34, 262),
            ], "AS version"),
            trn("Team Magma Admin", "Courtney", [
              pk("Camerupt", 34, 323),
              pk("Mightyena", 34, 262),
            ], "OR version"),
          ],
          items: [
            item("Master Ball", "Found in the hideout"),
            item("Nugget", "Hidden in the base"),
            item("Max Elixir", "Near the admin room"),
            item("Electrode", "Impersonating items (battle or catch)"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 10 -- Mossdeep Gym (Tate & Liza)
     * =================================================================== */
    {
      part: 10,
      title: "Route 124-125 & Mossdeep Gym",
      summary:
        "Surf east across the ocean routes and earn the Mind Badge from the twin gym leaders Tate and Liza.",
      locations: [
        {
          name: "Routes 124-125",
          description:
            "Surf east from Lilycove through the open ocean. Route 124 has a Treasure Hunter's house where you can trade shards for evolutionary stones. Dive spots are here once you have HM Dive. Plenty of water Pokemon to catch. Route 125 leads to Shoal Cave, a tidal cave where you can collect Shoal Salt and Shoal Shells (bring 4 of each to the old man inside for a Shell Bell).",
          encounters: [
            enc("Tentacool", 72, ["OR", "AS"], "Surfing", "20-30", "65%"),
            enc("Wingull", 278, ["OR", "AS"], "Surfing", "15-25", "30%"),
            enc("Pelipper", 279, ["OR", "AS"], "Surfing", "25-30", "5%"),
            enc("Wailmer", 320, ["OR", "AS"], "Surfing", "25-35", "40%"),
          ],
          items: [
            item("Shell Bell", "Shoal Cave (trade 4 Salt + 4 Shells)"),
            item("Focus Band", "Shoal Cave ice floor"),
          ],
        },
        {
          name: "Mossdeep City",
          description:
            "Home to the Space Center (where you learn about the Delta Episode foreshadowing) and the seventh gym. Steven Stone's house is here -- visit to find a Beldum with a Metagrossite on the table (a gift from Steven for beating the game, but check after the credits). The Super Rod is available from a fisherman in the city.",
          items: [
            item("Super Rod", "From the fisherman on the east side"),
            item("King's Rock", "From a man inside a house"),
            item("HM07 Dive", "From Steven after the Space Center events"),
          ],
        },
        {
          name: "Mossdeep Gym -- Leaders Tate & Liza",
          description:
            "A Double Battle gym! Tate and Liza use Psychic-type Pokemon. The gym has teleporter puzzles. Dark, Ghost, and Bug moves are super effective. Since it's a double battle, bring Pokemon with Surf or Earthquake to hit both targets (but be careful of hitting your partner). Their Lunatone and Solrock complement each other with Psychic and Rock moves. A Dark-type like Absol or Mightyena is great here. Sharpedo also works well with Crunch.",
          trainers: [
            trn("Psychic", "Preston", [pk("Kadabra", 37, 64)], "P1,184"),
            trn("Psychic", "Maura", [pk("Kadabra", 37, 64)], "P1,184"),
            trn("Hex Maniac", "Kathleen", [pk("Kadabra", 37, 64), pk("Xatu", 37, 178)], "P1,184"),
            trn("Gym Leaders", "Tate & Liza", [
              pk("Solrock", 45, 338),
              pk("Lunatone", 45, 337),
            ], "P5,400 + TM04 (Calm Mind)"),
          ],
          items: [
            item("Mind Badge", "Defeat Tate & Liza"),
            item("TM04 Calm Mind", "Defeat Tate & Liza"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 11 -- Seafloor Cavern, Primal Reversion & Sootopolis Gym
     * =================================================================== */
    {
      part: 11,
      title: "Seafloor Cavern, Primal Groudon/Kyogre & Sootopolis Gym",
      summary:
        "Dive to the Seafloor Cavern, witness Primal Reversion, and earn the Rain Badge from Wallace.",
      locations: [
        {
          name: "Route 127-128 & Seafloor Cavern",
          description:
            "Surf and Dive south from Mossdeep. Team Aqua (AS) or Team Magma (OR) has awakened the ancient Pokemon. Use Dive at the deep water spot on Route 128 to access the Seafloor Cavern. Navigate the cave using Strength, Rock Smash, and Surf. At the deepest point, the team leader uses the orb to trigger Primal Reversion in Kyogre (AS) or Groudon (OR). The awakened Pokemon flees to the Cave of Origin in Sootopolis.",
          encounters: [
            enc("Zubat", 41, ["OR", "AS"], "Cave", "30-34", "40%"),
            enc("Golbat", 42, ["OR", "AS"], "Cave", "30-36", "30%"),
            enc("Wailmer", 320, ["OR", "AS"], "Surfing", "25-35", "65%"),
            enc("Tentacool", 72, ["OR", "AS"], "Surfing", "20-30", "35%"),
          ],
          trainers: [
            trn("Team Aqua Leader", "Archie", [
              pk("Mightyena", 41, 262),
              pk("Crobat", 41, 169),
              pk("Sharpedo", 43, 319),
            ], "AS version"),
            trn("Team Magma Leader", "Maxie", [
              pk("Mightyena", 41, 262),
              pk("Crobat", 41, 169),
              pk("Camerupt", 43, 323),
            ], "OR version"),
          ],
          items: [
            item("TM26 Earthquake", "Deep in the Seafloor Cavern"),
          ],
        },
        {
          name: "Sootopolis City & Cave of Origin",
          description:
            "Sootopolis is a city inside a volcanic crater, accessible only by Diving or Soaring. The weather has gone haywire -- intense sun (OR) or torrential rain (AS). Steven and Wallace lead you to the Cave of Origin. Inside, you receive the special suit (Magma Suit in OR / Aqua Suit in AS). Descend through the cave to encounter Primal Groudon (OR Lv45) or Primal Kyogre (AS Lv45). You must battle and catch or defeat it to restore the weather. Save before this encounter! This is a key story battle and you get another chance if you knock it out (it returns after beating the League).",
          trainers: [
            trn("Primal Legendary", "Primal Groudon", [
              pk("Primal Groudon", 45, 383),
            ], "Omega Ruby -- catch or defeat"),
            trn("Primal Legendary", "Primal Kyogre", [
              pk("Primal Kyogre", 45, 382),
            ], "Alpha Sapphire -- catch or defeat"),
          ],
          items: [
            item("Red Orb (Omega Ruby) / Blue Orb (Alpha Sapphire)", "Used for Primal Reversion"),
            item("HM07 Waterfall", "From Wallace after calming the weather"),
          ],
        },
        {
          name: "Sootopolis Gym -- Leader Wallace",
          description:
            "Wallace specializes in Water-type Pokemon. Grass and Electric moves are super effective. The gym has an ice-tile sliding puzzle where you must step on every tile to reach Wallace. His Milotic is his ace with Recover and Ice Beam. A strong Grass type or Electric type with high Special Attack will handle his team. Breloom, Sceptile (Mega), Manectric (Mega), or even Magneton work well here.",
          trainers: [
            trn("Beauty", "Connie", [pk("Goldeen", 40, 118)], "P2,560"),
            trn("Beauty", "Bridget", [pk("Azumarill", 40, 184)], "P2,560"),
            trn("Lass", "Crissy", [pk("Wailmer", 40, 320)], "P640"),
            trn("Gym Leader", "Wallace", [
              pk("Luvdisc", 44, 370),
              pk("Whiscash", 44, 340),
              pk("Sealeo", 44, 364),
              pk("Seaking", 44, 119),
              pk("Milotic", 46, 350),
            ], "P5,520 + TM03 (Water Pulse)"),
          ],
          items: [
            item("Rain Badge", "Defeat Wallace"),
            item("TM03 Water Pulse", "Defeat Wallace"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 12 -- Victory Road & Pokemon League
     * =================================================================== */
    {
      part: 12,
      title: "Victory Road & the Pokemon League",
      summary:
        "Navigate Victory Road, challenge the Elite Four, and battle Champion Steven to become the Hoenn Champion.",
      locations: [
        {
          name: "Route 128-Ever Grande City",
          description:
            "Surf east and use Waterfall to climb up to Ever Grande City. Heal at the Pokemon Center and stock up on Full Restores, Revives, and Max Potions. Wally challenges you at the entrance to Victory Road -- he has Mega Gallade. His team is well-rounded so prepare accordingly.",
          trainers: [
            trn("Pokemon Trainer", "Wally", [
              pk("Altaria", 46, 334),
              pk("Delcatty", 46, 301),
              pk("Roselia", 46, 315),
              pk("Magneton", 46, 82),
              pk("Gallade", 48, 475),
            ], "Wally uses Mega Gallade"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "A long and challenging cave with many powerful trainers and wild Pokemon. Use Surf, Strength, Rock Smash, and Waterfall to navigate. Multiple floors with tough wild encounters including Lairon, Golbat, and Hariyama. Bring plenty of Repels if you want to avoid constant encounters. Make sure your team is at least level 50 or higher before proceeding to the Elite Four.",
          encounters: [
            enc("Golbat", 42, ["OR", "AS"], "Cave", "36-40", "30%"),
            enc("Lairon", 305, ["OR", "AS"], "Cave", "36-40", "15%"),
            enc("Hariyama", 297, ["OR", "AS"], "Cave", "36-40", "15%"),
            enc("Loudred", 294, ["OR", "AS"], "Cave", "36-40", "20%"),
            enc("Mawile", 303, ["OR"], "Cave", "36-40", "10%"),
            enc("Sableye", 302, ["AS"], "Cave", "36-40", "10%"),
            enc("Medicham", 308, ["OR", "AS"], "Cave", "38-40", "10%"),
          ],
          items: [
            item("TM29 Psychic", "1F"),
            item("Full Restore", "B1F"),
            item("Max Revive", "B2F"),
            item("PP Up", "Hidden near the waterfall"),
          ],
        },
        {
          name: "Pokemon League",
          description:
            "The final challenge. You face four Elite Four members followed by Champion Steven Stone in sequence without returning to a Pokemon Center. Recommended level: 55-60+. Each specialist has a distinct type focus. Steven uses Steel types and has a Mega Metagross as his ace.",
          trainers: [
            trn("Elite Four", "Sidney", [
              pk("Mightyena", 50, 262),
              pk("Shiftry", 50, 275),
              pk("Cacturne", 50, 332),
              pk("Sharpedo", 50, 319),
              pk("Absol", 52, 359),
            ], "Dark specialist -- use Fighting, Bug, Fairy"),
            trn("Elite Four", "Phoebe", [
              pk("Dusclops", 50, 356),
              pk("Banette", 50, 354),
              pk("Sableye", 50, 302),
              pk("Banette", 50, 354),
              pk("Dusknoir", 52, 477),
            ], "Ghost specialist -- use Dark, Ghost"),
            trn("Elite Four", "Glacia", [
              pk("Glalie", 50, 362),
              pk("Froslass", 50, 478),
              pk("Glalie", 50, 362),
              pk("Walrein", 52, 365),
            ], "Ice specialist -- use Fighting, Fire, Rock, Steel"),
            trn("Elite Four", "Drake", [
              pk("Altaria", 50, 334),
              pk("Flygon", 50, 330),
              pk("Salamence", 50, 373),
              pk("Dragalge", 50, 691),
              pk("Kingdra", 52, 230),
            ], "Dragon specialist -- use Ice, Dragon, Fairy"),
            trn("Champion", "Steven", [
              pk("Skarmory", 57, 227),
              pk("Claydol", 57, 344),
              pk("Aggron", 57, 306),
              pk("Cradily", 57, 346),
              pk("Armaldo", 57, 348),
              pk("Metagross", 59, 376),
            ], "Steel specialist -- Mega Metagross is his ace"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 13 -- Delta Episode (Post-Game)
     * =================================================================== */
    {
      part: 13,
      title: "The Delta Episode",
      summary:
        "A meteor threatens the planet. Meet Zinnia, ascend Sky Pillar, and ride Mega Rayquaza into space to battle Deoxys.",
      isPostGame: true,
      locations: [
        {
          name: "Delta Episode Overview",
          description:
            "After becoming Champion, a new story begins. A massive asteroid is on a collision course with the planet. Zinnia, a Draconid lore keeper, seeks to summon Rayquaza to destroy it. You travel between multiple towns (Littleroot, Petalburg, Slateport, Rustboro, Mossdeep Space Center, Meteor Falls, and others) following Zinnia's trail and collecting Key Stones. The Devon Corporation and Team Aqua/Magma are involved in the conflict. This episode introduces major lore about Mega Evolution and the multiverse.",
        },
        {
          name: "Meteor Falls & Sky Pillar",
          description:
            "After collecting the meteorite shards and confronting Zinnia across Hoenn, you reach Sky Pillar. Zinnia summons Rayquaza (Lv70) -- you must catch it (or defeat it, then return). Rayquaza holds the Dragon Ascent move and can Mega Evolve without a Mega Stone (unique to Rayquaza with Dragon Ascent). After catching Rayquaza, ride Mega Rayquaza into space and battle Deoxys (Lv80) in an incredible cinematic scene. Save before both encounters!",
          trainers: [
            trn("Lore Keeper", "Zinnia", [
              pk("Goodra", 55, 706),
              pk("Altaria", 55, 334),
              pk("Tyrantrum", 55, 697),
              pk("Salamence", 57, 373),
            ], "Battle at Sky Pillar summit"),
          ],
          items: [
            item("Rayquaza", "Sky Pillar summit (Lv70 -- must catch to proceed)"),
            item("Deoxys", "Space battle (Lv80 -- save before!)"),
            item("Dragon Ascent", "Rayquaza's signature move (enables Mega Evolution)"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 14 -- Post-Game: Legendary Mirage Spots & Battle Resort
     * =================================================================== */
    {
      part: 14,
      title: "Legendary Mirage Spots & Battle Resort",
      summary:
        "Discover Mirage Spots by Soaring to find rare Pokemon, and explore the Battle Resort for competitive battling.",
      isPostGame: true,
      locations: [
        {
          name: "Mirage Spots (Soaring)",
          description:
            "Use the Eon Flute to Soar on Latias/Latios. Mirage Spots appear as clouds or islands on the map and change daily. They contain rare non-Hoenn Pokemon, hidden items, and some legendary Pokemon. Mirage Islands, Mirage Mountains, Mirage Caves, and Mirage Forests each host different rare encounters including starters and pseudolegendaries from other regions.",
          encounters: [
            enc("Cresselia", 488, ["OR", "AS"], "Mirage Island (Crescent Isle)", "50", "Special"),
            enc("Heatran", 485, ["OR", "AS"], "Mirage Mountain (Scorched Slab)", "50", "Special"),
            enc("Terrakion", 639, ["OR", "AS"], "Mirage Island (Pathless Plain)", "50", "Special"),
            enc("Virizion", 640, ["OR", "AS"], "Mirage Island (Pathless Plain)", "50", "Special"),
            enc("Cobalion", 638, ["OR", "AS"], "Mirage Island (Pathless Plain)", "50", "Special"),
          ],
          items: [
            item("Various TMs", "Found on Mirage Spots"),
            item("Rare Berries", "Found on Mirage Islands"),
          ],
        },
        {
          name: "Battle Resort",
          description:
            "An island south of the main Hoenn map accessible after the Delta Episode. This is the competitive hub with the Battle Maison (ORAS equivalent of the Battle Tower), the IV Judge, Move Tutors (including Draco Meteor, Blast Burn, Hydro Cannon, and Frenzy Plant), and the Day Care for breeding. The Battle Maison awards BP for purchasing competitive items like Choice items, Life Orb, and Ability Capsule.",
          items: [
            item("IV Judge", "In the Pokemon Center"),
            item("Move Tutors", "Throughout the island (cost BP)"),
            item("Destiny Knot", "From a lady in the resort"),
          ],
        },
        {
          name: "Sealed Chamber & Regi Trio",
          description:
            "Use Dive on Route 134 to access the Sealed Chamber. Follow the Braille instructions (use Relicanth at the front and Wailord at the back of your party) to unlock three caves across Hoenn. Regice is in Island Cave (Route 105), Registeel is in Ancient Tomb (Route 120), and Regirock is in Desert Ruins (Route 111). Catch all three to unlock Regigigas in Island Cave (requires all three Regis, a nicknamed Regice holding a cold item, during daytime).",
          encounters: [
            enc("Regirock", 377, ["OR", "AS"], "Desert Ruins", "40", "Special"),
            enc("Regice", 378, ["OR", "AS"], "Island Cave", "40", "Special"),
            enc("Registeel", 379, ["OR", "AS"], "Ancient Tomb", "40", "Special"),
            enc("Regigigas", 486, ["OR", "AS"], "Island Cave (with all 3 Regis)", "50", "Special"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 15 -- Post-Game: Legendary Portals & Additional Legendaries
     * =================================================================== */
    {
      part: 15,
      title: "Legendary Portals & Additional Legendaries",
      summary:
        "Soar to dimensional rifts in the sky to encounter legendary Pokemon from every previous generation.",
      isPostGame: true,
      locations: [
        {
          name: "Legendary Portals (Soaring Rifts)",
          description:
            "While Soaring, glowing red or blue portals appear in the sky. Flying into them takes you to pocket dimensions where you can encounter legendary Pokemon from other regions. Some require specific conditions: certain Pokemon in your party, time of day, or version exclusivity. These portals are the primary way to catch non-Hoenn legendaries in ORAS.",
          encounters: [
            enc("Ho-Oh", 250, ["OR"], "Soaring (Sea Mauville area)", "50", "Special"),
            enc("Lugia", 249, ["AS"], "Soaring (Sea Mauville area)", "50", "Special"),
            enc("Dialga", 483, ["OR"], "Soaring (near Dewford)", "50", "Special"),
            enc("Palkia", 484, ["AS"], "Soaring (near Dewford)", "50", "Special"),
            enc("Reshiram", 643, ["OR"], "Soaring (Fabled Cave)", "50", "Special"),
            enc("Zekrom", 644, ["AS"], "Soaring (Fabled Cave)", "50", "Special"),
            enc("Raikou", 243, ["OR", "AS"], "Soaring (Trackless Forest)", "50", "Special"),
            enc("Entei", 244, ["OR", "AS"], "Soaring (Trackless Forest)", "50", "Special"),
            enc("Suicune", 245, ["OR", "AS"], "Soaring (Trackless Forest)", "50", "Special"),
            enc("Uxie", 480, ["OR", "AS"], "Soaring (Nameless Cavern)", "50", "Special"),
            enc("Mesprit", 481, ["OR", "AS"], "Soaring (Nameless Cavern)", "50", "Special"),
            enc("Azelf", 482, ["OR", "AS"], "Soaring (Nameless Cavern)", "50", "Special"),
            enc("Giratina", 487, ["OR", "AS"], "Soaring (requires Dialga + Palkia)", "50", "Special"),
            enc("Tornadus", 641, ["OR"], "Soaring (storm cloud)", "50", "Special"),
            enc("Thundurus", 642, ["AS"], "Soaring (storm cloud)", "50", "Special"),
            enc("Landorus", 645, ["OR", "AS"], "Soaring (requires Tornadus + Thundurus)", "50", "Special"),
            enc("Kyurem", 646, ["OR", "AS"], "Soaring (Gnarled Den, requires Reshiram + Zekrom)", "50", "Special"),
          ],
          items: [
            item("Various Mega Stones", "Found throughout post-game locations"),
          ],
        },
        {
          name: "Additional Encounters",
          description:
            "Several other legendaries and rare Pokemon can be found in specific locations. Spiritomb is encountered on Route 120 after talking to 32 Secret Base owners via StreetPass/BuzzNav. The Lake Guardians appear in Nameless Cavern near Sootopolis. After the Delta Episode, check back at the Space Center in Mossdeep for additional story content.",
          encounters: [
            enc("Latias", 380, ["AS"], "Southern Island (Eon Ticket event)", "30", "Special"),
            enc("Latios", 381, ["OR"], "Southern Island (Eon Ticket event)", "30", "Special"),
            enc("Spiritomb", 442, ["OR", "AS"], "Route 120 (32 Secret Base owners)", "50", "Special"),
          ],
          items: [
            item("Eon Ticket", "StreetPass / special distribution"),
            item("Mega Stones", "Various locations and from contests/NPCs post-game"),
          ],
        },
      ],
    },
  ],
};
