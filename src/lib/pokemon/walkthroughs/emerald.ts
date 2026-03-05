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

export const EMERALD_WALKTHROUGH: GameWalkthrough = {
  slug: "emerald",
  gameLabel: "Emerald",
  versionTags: ["E"],
  parts: [
    /* ===================================================================
     *  PART 1 — Littleroot Town — Choose Your Starter
     * =================================================================== */
    {
      part: 1,
      title: "Littleroot Town — Choose Your Starter",
      summary:
        "Arrive in Littleroot Town, rescue Professor Birch, and choose your first partner Pokémon.",
      locations: [
        {
          name: "Littleroot Town",
          description:
            "You arrive in Littleroot Town by moving truck. Head to your new home and set your clock upstairs. Visit the house next door to meet your rival (May or Brendan). Head north to Route 101 where Professor Birch is being chased by a wild Zigzagoon. Grab a Poké Ball from his bag to save him — choose Treecko (Grass), Torchic (Fire), or Mudkip (Water). Your rival will pick the type strong against yours and challenge you immediately. Return to Birch's lab to receive your Pokédex and Poké Balls.",
          items: [
            item("Potion", "On your PC at the start of the game"),
            item("Pokédex", "From Professor Birch after saving him"),
            item("Poké Balls x5", "From Professor Birch after getting the Pokédex"),
            item("Running Shoes", "From your Mom after getting the Pokédex"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 2 — Routes 101-103, Oldale Town, Petalburg City
     * =================================================================== */
    {
      part: 2,
      title: "Routes 101-103, Oldale Town & Petalburg City",
      summary:
        "Explore early routes, reach Petalburg City, and meet your father Norman at his Gym.",
      locations: [
        {
          name: "Route 101",
          description:
            "The first route north of Littleroot Town. Low-level wild Pokémon are perfect for training your starter. Continue north to Oldale Town.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "2-3", "45%"),
            enc("Wurmple", 265, ["E"], "Grass", "2-3", "45%"),
            enc("Poochyena", 261, ["E"], "Grass", "2-3", "10%"),
          ],
        },
        {
          name: "Oldale Town",
          description:
            "A small town with a Pokémon Center and Poké Mart. Heal up and stock on Potions. Route 103 is to the north — your rival is there for a battle. Head east on Route 102 afterward to continue.",
          items: [
            item("Potion", "From the Poké Mart clerk (sample)"),
          ],
        },
        {
          name: "Route 103",
          description:
            "Your rival is waiting here for your first scripted battle. You can also catch wild Pokémon in the grass.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "2-4", "30%"),
            enc("Poochyena", 261, ["E"], "Grass", "2-4", "30%"),
            enc("Wingull", 278, ["E"], "Grass", "2-4", "40%"),
          ],
        },
        {
          name: "Route 102",
          description:
            "Head west from Oldale Town. Several trainers line this route. Seedot and Lotad can be found here — both are useful early-game Pokémon.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "3-4", "30%"),
            enc("Wurmple", 265, ["E"], "Grass", "3-4", "20%"),
            enc("Lotad", 270, ["E"], "Grass", "3-4", "20%"),
            enc("Seedot", 273, ["E"], "Grass", "3-4", "20%"),
            enc("Ralts", 280, ["E"], "Grass", "4", "4%"),
            enc("Surskit", 283, ["E"], "Grass", "3-4", "1%"),
          ],
          items: [
            item("Potion", "Hidden in the trees near the first trainer"),
          ],
        },
        {
          name: "Petalburg City",
          description:
            "Your father Norman is the Gym Leader here, but you need four badges before challenging him. He introduces you to Wally, a shy boy who catches a Ralts with your help. Continue west to Route 104 and Petalburg Woods.",
          items: [
            item("Great Ball", "From a fisherman at the pond (later)"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 3 — Petalburg Woods, Rustboro City & Roxanne
     * =================================================================== */
    {
      part: 3,
      title: "Petalburg Woods & Rustboro Gym",
      summary:
        "Navigate Petalburg Woods, encounter Team Aqua, and earn the Stone Badge from Roxanne.",
      locations: [
        {
          name: "Route 104 (South)",
          description:
            "A short route connecting Petalburg City to Petalburg Woods. There is a flower shop where you can get the Wailmer Pail later. Trainers and wild Pokémon are available for grinding.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "4-5", "30%"),
            enc("Wurmple", 265, ["E"], "Grass", "4-5", "20%"),
            enc("Taillow", 276, ["E"], "Grass", "4-5", "20%"),
            enc("Wingull", 278, ["E"], "Grass", "4-5", "30%"),
          ],
        },
        {
          name: "Petalburg Woods",
          description:
            "A dense forest with Bug-type Pokémon. A Devon researcher is being harassed by a Team Aqua Grunt who is after the Devon Goods — defeat the Grunt. Shroomish can be found here and is an excellent Grass-type for your team. Slakoth is rare but evolves into the powerful Slaking line.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "5-6", "30%"),
            enc("Wurmple", 265, ["E"], "Grass", "5-6", "25%"),
            enc("Shroomish", 285, ["E"], "Grass", "5-6", "15%"),
            enc("Silcoon", 266, ["E"], "Grass", "5-6", "10%"),
            enc("Cascoon", 268, ["E"], "Grass", "5-6", "10%"),
            enc("Taillow", 276, ["E"], "Grass", "5-6", "5%"),
            enc("Slakoth", 287, ["E"], "Grass", "5-6", "5%"),
          ],
          trainers: [
            trn("Team Aqua Grunt", "Grunt", [pk("Poochyena", 9, 261)], "₽180"),
            trn("Bug Catcher", "Lyle", [pk("Wurmple", 3, 265), pk("Wurmple", 3, 265), pk("Wurmple", 3, 265), pk("Wurmple", 3, 265)], "₽48"),
            trn("Bug Catcher", "James", [pk("Nincada", 6, 290), pk("Nincada", 6, 290)], "₽96"),
          ],
          items: [
            item("Great Ball", "Northwest section"),
            item("X Attack", "Near the Team Aqua Grunt"),
            item("Ether", "Hidden in the bushes"),
            item("Paralyze Heal", "Central path"),
          ],
        },
        {
          name: "Route 104 (North)",
          description:
            "Continue north through a few trainers to reach Rustboro City. The Pretty Petal Flower Shop is here.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "4-5", "30%"),
            enc("Taillow", 276, ["E"], "Grass", "4-5", "30%"),
            enc("Wingull", 278, ["E"], "Grass", "4-5", "30%"),
            enc("Marill", 183, ["E"], "Grass", "4-5", "10%"),
          ],
        },
        {
          name: "Rustboro City",
          description:
            "A large city home to the Devon Corporation and the first Gym. Heal up and prepare for Roxanne. The Pokémon School in town offers useful tips. After beating the gym, a Team Aqua Grunt steals the Devon Goods — chase him east.",
          items: [
            item("HM01 Cut", "From the Cutter's house west of the Pokémon Center"),
            item("Quick Claw", "From the Pokémon School teacher"),
          ],
        },
        {
          name: "Rustboro Gym — Leader Roxanne",
          description:
            "Roxanne specializes in Rock-type Pokémon. Water, Grass, and Fighting moves are super effective. Mudkip and Shroomish users will have an easy time. Her Nosepass has Sturdy, so it survives one-hit KOs. Use special attacks if possible since Rock types have high physical defense.",
          trainers: [
            trn("Youngster", "Josh", [pk("Geodude", 10, 74)], "₽160"),
            trn("Youngster", "Tommy", [pk("Geodude", 8, 74), pk("Geodude", 8, 74)], "₽128"),
            trn("Gym Leader", "Roxanne", [
              pk("Geodude", 12, 74),
              pk("Geodude", 12, 74),
              pk("Nosepass", 15, 299),
            ], "₽1,500 + TM39 (Rock Tomb)"),
          ],
          items: [
            item("Stone Badge", "Defeat Roxanne"),
            item("TM39 Rock Tomb", "Defeat Roxanne"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 4 — Dewford Town & Brawly
     * =================================================================== */
    {
      part: 4,
      title: "Dewford Town & Dewford Gym",
      summary:
        "Sail to Dewford Town, explore Granite Cave, and earn the Knuckle Badge from Brawly.",
      locations: [
        {
          name: "Route 116 & Rusturf Tunnel",
          description:
            "Head east from Rustboro to chase the Team Aqua Grunt who stole the Devon Goods. You will find him in Rusturf Tunnel. Defeat him to recover the goods and free Mr. Briney's Wingull, Peeko. Return to the Devon Corporation president to receive the PokéNav. Then head south to Route 104 and Mr. Briney's cottage — he will sail you to Dewford.",
          encounters: [
            enc("Nincada", 290, ["E"], "Grass", "6-8", "30%"),
            enc("Taillow", 276, ["E"], "Grass", "6-8", "20%"),
            enc("Whismur", 293, ["E"], "Grass", "6-8", "20%"),
            enc("Zigzagoon", 263, ["E"], "Grass", "6-8", "15%"),
            enc("Skitty", 300, ["E"], "Grass", "6-8", "5%"),
            enc("Abra", 63, ["E"], "Grass", "7-8", "10%"),
          ],
          items: [
            item("Devon Goods", "Recovered from Aqua Grunt"),
            item("PokéNav", "From the Devon President"),
            item("Repeat Ball", "From the Devon President"),
          ],
        },
        {
          name: "Dewford Town",
          description:
            "A small island town reached by sailing with Mr. Briney. Deliver the letter from the Devon President to Steven in Granite Cave. The local gym specializes in Fighting types.",
          items: [
            item("Old Rod", "From the fisherman on the dock"),
            item("Silk Scarf", "From a man in one of the houses"),
          ],
        },
        {
          name: "Granite Cave",
          description:
            "Explore the cave to find Steven Stone in the deepest chamber. He gives you TM47 Steel Wing. Use Flash to navigate the darker floors. Makuhita and Aron can be caught here — both are excellent team members.",
          encounters: [
            enc("Zubat", 41, ["E"], "Cave", "7-10", "40%"),
            enc("Makuhita", 296, ["E"], "Cave", "7-10", "30%"),
            enc("Geodude", 74, ["E"], "Cave", "7-10", "15%"),
            enc("Aron", 304, ["E"], "Cave", "7-10", "10%"),
            enc("Abra", 63, ["E"], "Cave", "8-10", "5%"),
          ],
          items: [
            item("Escape Rope", "1F near entrance"),
            item("TM47 Steel Wing", "From Steven in the deepest room"),
            item("Everstone", "B1F"),
            item("HM05 Flash", "From the hiker near the entrance"),
          ],
        },
        {
          name: "Dewford Gym — Leader Brawly",
          description:
            "Brawly uses Fighting-type Pokémon. Flying and Psychic moves are super effective. The gym is dark — you must defeat trainers to light the path to Brawly. His Makuhita has Bulk Up and can become dangerous if you let it set up. Hit fast and hard with super-effective moves. Taillow's Peck works well here.",
          trainers: [
            trn("Battle Girl", "Laura", [pk("Meditite", 13, 307)], "₽312"),
            trn("Black Belt", "Hideki", [pk("Machop", 13, 66)], "₽416"),
            trn("Gym Leader", "Brawly", [
              pk("Machop", 17, 66),
              pk("Meditite", 18, 307),
              pk("Makuhita", 19, 296),
            ], "₽1,900 + TM08 (Bulk Up)"),
          ],
          items: [
            item("Knuckle Badge", "Defeat Brawly"),
            item("TM08 Bulk Up", "Defeat Brawly"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 5 — Slateport, Route 110 & Mauville Gym
     * =================================================================== */
    {
      part: 5,
      title: "Slateport City, Route 110 & Mauville Gym",
      summary:
        "Deliver the Devon Goods, explore Slateport, and earn the Dynamo Badge from Wattson.",
      locations: [
        {
          name: "Route 109 & Slateport Beach",
          description:
            "Sail from Dewford to Slateport City with Mr. Briney. Route 109 has beach trainers and the Seashore House. Battle trainers on the sand for good experience.",
          encounters: [
            enc("Tentacool", 72, ["E"], "Surfing", "5-35", "60%"),
            enc("Wingull", 278, ["E"], "Surfing", "10-30", "35%"),
            enc("Pelipper", 279, ["E"], "Surfing", "25-30", "5%"),
            enc("Magikarp", 129, ["E"], "Old Rod", "5-10", "70%"),
            enc("Tentacool", 72, ["E"], "Old Rod", "5-10", "30%"),
          ],
        },
        {
          name: "Slateport City",
          description:
            "A bustling port city. Deliver the Devon Goods to Captain Stern at the Oceanic Museum. Team Aqua Grunts are blocking the museum — defeat them inside. Visit the open market for useful battle items and the Name Rater. After clearing the museum, head north on Route 110.",
          items: [
            item("TM46 Thief", "From the guy at the harbor"),
            item("Powder Jar", "From the girl in the Contest Hall"),
          ],
        },
        {
          name: "Route 110",
          description:
            "Head north toward Mauville City. Your rival will challenge you on the Cycling Road bridge. Voltorb and Electrike can be found in the grass below the bridge — Electrike is a solid Electric type for your team. The Trick House is on this route with fun puzzles and prizes.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "12-13", "20%"),
            enc("Electrike", 309, ["E"], "Grass", "12-13", "25%"),
            enc("Poochyena", 261, ["E"], "Grass", "12-13", "15%"),
            enc("Gulpin", 316, ["E"], "Grass", "12-13", "15%"),
            enc("Minun", 312, ["E"], "Grass", "12-13", "8%"),
            enc("Plusle", 311, ["E"], "Grass", "12-13", "8%"),
            enc("Oddish", 43, ["E"], "Grass", "12-13", "4%"),
            enc("Wingull", 278, ["E"], "Grass", "12-13", "5%"),
          ],
          trainers: [
            trn("Rival", "May/Brendan", [
              pk("Slugma", 18, 218),
              pk("Wingull", 18, 278),
              pk("Grovyle", 20, 253),
            ], "₽1,200"),
          ],
        },
        {
          name: "Mauville City",
          description:
            "Home to the third Gym and the Mauville Game Corner. Wally challenges you outside the Gym but is not much of a threat yet. Get the Mach Bike or Acro Bike from Rydel's Cycles — both are needed at different times for different areas. The Rock Smash TM is available here from a house nearby.",
          items: [
            item("Mach Bike or Acro Bike", "Rydel's Cycles"),
            item("HM06 Rock Smash", "From the man in a house east of the Poké Mart"),
            item("Coin Case", "From the girl in the house next to the Game Corner"),
          ],
        },
        {
          name: "Mauville Gym — Leader Wattson",
          description:
            "Wattson uses Electric-type Pokémon. Ground types are immune to Electric moves and deal super-effective damage. Geodude or Marshtomp are ideal counters. His Magneton knows Sonic Boom (fixed 20 damage) and his Manectric has Shock Wave which never misses. The gym has electric barriers you must deactivate by pressing switches.",
          trainers: [
            trn("Guitarist", "Kirk", [pk("Electrike", 17, 309), pk("Voltorb", 17, 100)], "₽544"),
            trn("Battle Girl", "Vivian", [pk("Meditite", 17, 307), pk("Meditite", 17, 307)], "₽408"),
            trn("Gym Leader", "Wattson", [
              pk("Voltorb", 20, 100),
              pk("Electrike", 20, 309),
              pk("Magneton", 22, 82),
              pk("Manectric", 24, 310),
            ], "₽2,400 + TM34 (Shock Wave)"),
          ],
          items: [
            item("Dynamo Badge", "Defeat Wattson"),
            item("TM34 Shock Wave", "Defeat Wattson"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 6 — Routes 111-112, Mt. Chimney & Lavaridge Gym
     * =================================================================== */
    {
      part: 6,
      title: "Routes 111-112, Mt. Chimney & Lavaridge Gym",
      summary:
        "Travel through the desert, ascend Mt. Chimney to battle Team Magma, and earn the Heat Badge from Flannery.",
      locations: [
        {
          name: "Route 111 (South)",
          description:
            "Head north from Mauville. The Winstrate family offers a 4-in-a-row battle challenge in their house. The desert area in the middle requires Go-Goggles (obtained later). For now, head west through Route 112.",
          encounters: [
            enc("Sandshrew", 27, ["E"], "Grass", "19-21", "30%"),
            enc("Trapinch", 328, ["E"], "Grass", "19-21", "20%"),
            enc("Baltoy", 343, ["E"], "Grass", "19-22", "20%"),
            enc("Cacnea", 331, ["E"], "Grass", "20-22", "20%"),
          ],
        },
        {
          name: "Route 112 & Fiery Path",
          description:
            "Route 112 leads to the cable car up Mt. Chimney. The Fiery Path is a short cave with Fire types. Numel can be caught here — a decent Fire/Ground option.",
          encounters: [
            enc("Numel", 322, ["E"], "Grass", "15-16", "35%"),
            enc("Marill", 183, ["E"], "Grass", "15-16", "30%"),
            enc("Oddish", 43, ["E"], "Grass", "14-16", "25%"),
            enc("Machop", 66, ["E"], "Cave", "14-16", "20%"),
            enc("Torkoal", 324, ["E"], "Cave", "14-16", "5%"),
          ],
          items: [
            item("TM06 Toxic", "Fiery Path"),
          ],
        },
        {
          name: "Mt. Chimney",
          description:
            "Take the cable car to the summit. Team Magma and Team Aqua are battling! In Emerald, both villainous teams are enemies. Fight through Team Magma grunts and defeat Magma Leader Maxie at the summit. He is trying to use the meteorite to awaken Groudon. After defeating him, grab the Meteorite. Head down the jagged pass to Lavaridge Town.",
          trainers: [
            trn("Team Magma Grunt", "Grunt", [pk("Numel", 20, 322)], "₽400"),
            trn("Team Magma Grunt", "Grunt", [pk("Zubat", 20, 41), pk("Poochyena", 20, 261)], "₽400"),
            trn("Magma Leader", "Maxie", [
              pk("Mightyena", 24, 262),
              pk("Zubat", 24, 41),
              pk("Camerupt", 25, 323),
            ], "₽1,000"),
          ],
          items: [
            item("Meteorite", "From the machine after defeating Maxie"),
          ],
        },
        {
          name: "Lavaridge Town",
          description:
            "A town famous for its hot springs. The Herb Shop sells bitter medicines. The Pokémon Egg from the old woman in the hot springs area contains a Wynaut. Flannery is the Gym Leader here.",
          items: [
            item("Wynaut Egg", "From the old woman at the hot springs"),
            item("Go-Goggles", "From your rival after defeating Flannery"),
          ],
        },
        {
          name: "Lavaridge Gym — Leader Flannery",
          description:
            "Flannery uses Fire-type Pokémon. Water and Ground moves are your best choices. The gym has steam vents that launch you between floors — step on them to navigate to Flannery. Her Torkoal is her ace and knows Overheat — a devastating move on the first use, but its power drops with each use. Marshtomp or any Water type makes this fight manageable.",
          trainers: [
            trn("Kindler", "Jeff", [pk("Slugma", 22, 218), pk("Slugma", 22, 218)], "₽704"),
            trn("Cooltrainer", "Gerald", [pk("Kecleon", 23, 352)], "₽1,104"),
            trn("Gym Leader", "Flannery", [
              pk("Numel", 24, 322),
              pk("Slugma", 24, 218),
              pk("Camerupt", 26, 323),
              pk("Torkoal", 29, 324),
            ], "₽2,900 + TM50 (Overheat)"),
          ],
          items: [
            item("Heat Badge", "Defeat Flannery"),
            item("TM50 Overheat", "Defeat Flannery"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 7 — Petalburg Gym (Norman)
     * =================================================================== */
    {
      part: 7,
      title: "Petalburg Gym — Norman",
      summary:
        "Return to Petalburg City with four badges and challenge your father Norman for the Balance Badge.",
      locations: [
        {
          name: "Return to Petalburg City",
          description:
            "Now that you have four badges, head back to Petalburg City to challenge your father Norman. Stock up on healing items — this is one of the toughest gym battles in the game. His Slaking has enormous stats but its Truant ability means it only attacks every other turn. Use those free turns wisely to set up or heal.",
        },
        {
          name: "Petalburg Gym — Leader Norman",
          description:
            "Norman specializes in Normal-type Pokémon. Fighting types are super effective. The gym has a room-based system — each room has a trainer and a door leading to different battle styles. Norman's team is very strong, especially Slaking with its sky-high Attack stat. Exploit its Truant ability — protect or set up during the turns it loafs around. Fighting moves from Makuhita/Hariyama or Machop are extremely effective here.",
          trainers: [
            trn("Cooltrainer", "Randall", [pk("Delcatty", 26, 301)], "₽1,248"),
            trn("Cooltrainer", "Mary", [pk("Delcatty", 26, 301)], "₽1,248"),
            trn("Cooltrainer", "Parker", [pk("Linoone", 26, 264)], "₽1,248"),
            trn("Gym Leader", "Norman", [
              pk("Spinda", 27, 327),
              pk("Vigoroth", 27, 288),
              pk("Linoone", 29, 264),
              pk("Slaking", 31, 289),
            ], "₽3,100 + TM42 (Facade)"),
          ],
          items: [
            item("Balance Badge", "Defeat Norman"),
            item("TM42 Facade", "Defeat Norman"),
            item("HM03 Surf", "From Wally's father after defeating Norman"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 8 — Weather Institute & Fortree Gym
     * =================================================================== */
    {
      part: 8,
      title: "Weather Institute, Route 119 & Fortree Gym",
      summary:
        "Save the Weather Institute from Team Aqua, receive Castform, and earn the Feather Badge from Winona.",
      locations: [
        {
          name: "Route 118",
          description:
            "Surf east from Mauville City across the water. Route 118 has some good Pokémon and trainers. Continue east to Route 119.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "24-26", "20%"),
            enc("Linoone", 264, ["E"], "Grass", "25-26", "10%"),
            enc("Electrike", 309, ["E"], "Grass", "24-26", "30%"),
            enc("Kecleon", 352, ["E"], "Grass", "24-26", "10%"),
            enc("Wingull", 278, ["E"], "Grass", "24-26", "15%"),
          ],
        },
        {
          name: "Route 119 & Weather Institute",
          description:
            "A long, rainy route with tall grass and rivers. The Weather Institute is being occupied by Team Aqua — clear them out and receive Castform as a reward. Castform changes form with weather, which is thematic for Emerald. Your rival battles you on the bridge after the Weather Institute. Tropius can be found in the tall grass here and is a useful Fly user.",
          encounters: [
            enc("Zigzagoon", 263, ["E"], "Grass", "25-27", "20%"),
            enc("Linoone", 264, ["E"], "Grass", "25-27", "10%"),
            enc("Oddish", 43, ["E"], "Grass", "25-27", "25%"),
            enc("Tropius", 357, ["E"], "Grass", "25-27", "10%"),
            enc("Kecleon", 352, ["E"], "Grass", "25-27", "5%"),
          ],
          trainers: [
            trn("Team Aqua Grunt", "Grunt", [pk("Carvanha", 28, 318), pk("Mightyena", 28, 262)], "₽560"),
            trn("Team Aqua Admin", "Shelly", [pk("Carvanha", 28, 318), pk("Mightyena", 28, 262)], "₽560"),
            trn("Rival", "May/Brendan", [
              pk("Slugma", 29, 218),
              pk("Pelipper", 29, 279),
              pk("Grovyle", 31, 253),
            ], "₽1,860"),
          ],
          items: [
            item("Castform", "Gift from the Weather Institute researcher"),
            item("HM02 Fly", "From your rival after the battle on Route 119"),
          ],
        },
        {
          name: "Fortree City",
          description:
            "A city built in the treetops. The gym is blocked by an invisible Kecleon — use the Devon Scope (obtained from Steven on Route 120) to reveal and move it. Explore Route 120 east of Fortree to meet Steven and receive the Devon Scope before challenging the gym.",
          items: [
            item("Devon Scope", "From Steven on Route 120"),
          ],
        },
        {
          name: "Fortree Gym — Leader Winona",
          description:
            "Winona specializes in Flying-type Pokémon. Electric, Ice, and Rock moves are super effective. The gym has rotating doors you must navigate. Her Altaria knows Earthquake and Dragon Dance — do not let it set up Dragon Dance or it will sweep your team. Ice Beam from a Water type or Thunderbolt from an Electric type are your best tools.",
          trainers: [
            trn("Bird Keeper", "Jared", [pk("Doduo", 84, 30), pk("Skarmory", 227, 30)], "₽960"),
            trn("Picnicker", "Kylee", [pk("Swablu", 30, 333), pk("Swablu", 30, 333)], "₽480"),
            trn("Gym Leader", "Winona", [
              pk("Swablu", 29, 333),
              pk("Tropius", 29, 357),
              pk("Pelipper", 30, 279),
              pk("Skarmory", 31, 227),
              pk("Altaria", 33, 334),
            ], "₽3,300 + TM40 (Aerial Ace)"),
          ],
          items: [
            item("Feather Badge", "Defeat Winona"),
            item("TM40 Aerial Ace", "Defeat Winona"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 9 — Lilycove, Mt. Pyre, Magma/Aqua Hideouts
     * =================================================================== */
    {
      part: 9,
      title: "Lilycove City, Mt. Pyre & Team Hideouts",
      summary:
        "Explore Lilycove City, ascend Mt. Pyre, and infiltrate both Team Magma's and Team Aqua's hideouts.",
      locations: [
        {
          name: "Routes 120-121",
          description:
            "Continue east through Routes 120 and 121 toward Lilycove. Route 120 has the scorched slab area and tall grass. Route 121 connects to the Safari Zone entrance and leads to Lilycove City.",
          encounters: [
            enc("Oddish", 43, ["E"], "Grass", "25-27", "25%"),
            enc("Gloom", 44, ["E"], "Grass", "26-28", "5%"),
            enc("Zigzagoon", 263, ["E"], "Grass", "25-27", "15%"),
            enc("Linoone", 264, ["E"], "Grass", "25-27", "15%"),
            enc("Kecleon", 352, ["E"], "Grass", "25-27", "5%"),
            enc("Absol", 359, ["E"], "Grass", "25-27", "8%"),
          ],
        },
        {
          name: "Lilycove City",
          description:
            "A major coastal city with the Department Store (like a Poké Mart on steroids), the Contest Hall, and the Lilycove Museum. Team Aqua's hideout is in a cave northeast of the city. You cannot Surf east past Lilycove until you clear both team hideouts. Stock up on Ultra Balls, Full Heals, and Revives at the Department Store.",
          items: [
            item("Max Repel", "Lilycove Department Store"),
            item("Poké Block Case", "Contest Hall lobby"),
          ],
        },
        {
          name: "Mt. Pyre",
          description:
            "A mountain graveyard for Pokémon, south of Route 122. Both Team Magma and Team Aqua are causing trouble here. Team Aqua steals the Blue Orb and Team Magma steals the Red Orb from the elderly couple at the summit. The old woman gives you the Magma Emblem to access Team Magma's hideout. Shuppet, Duskull, and Vulpix/Chimecho can be found here.",
          encounters: [
            enc("Shuppet", 353, ["E"], "Grass", "25-28", "45%"),
            enc("Duskull", 355, ["E"], "Grass", "25-28", "45%"),
            enc("Vulpix", 37, ["E"], "Grass", "25-27", "5%"),
            enc("Chimecho", 358, ["E"], "Grass", "27-28", "2%"),
            enc("Meditite", 307, ["E"], "Grass", "25-27", "3%"),
          ],
          items: [
            item("Magma Emblem", "From the old woman at the summit"),
            item("Cleanse Tag", "From the old woman at the summit"),
            item("Sea Incense", "Top of the interior"),
            item("Lax Incense", "Top of the interior"),
          ],
        },
        {
          name: "Team Magma Hideout (Jagged Pass)",
          description:
            "Use the Magma Emblem to open the entrance in Jagged Pass. Navigate through the lava-filled base, defeat grunts, and stop Team Magma. You will battle Magma Admin Tabitha and Leader Maxie. After this, Team Magma heads to the Seafloor Cavern with the Red Orb.",
          trainers: [
            trn("Magma Admin", "Tabitha", [
              pk("Numel", 26, 322),
              pk("Mightyena", 28, 262),
              pk("Zubat", 28, 41),
              pk("Camerupt", 30, 323),
            ], "₽600"),
            trn("Magma Leader", "Maxie", [
              pk("Mightyena", 37, 262),
              pk("Crobat", 38, 169),
              pk("Camerupt", 39, 323),
            ], "₽1,560"),
          ],
          items: [
            item("Max Elixir", "B1F"),
            item("Nugget", "B2F"),
          ],
        },
        {
          name: "Team Aqua Hideout (Lilycove)",
          description:
            "Enter the cave northeast of Lilycove City. Navigate through the hideout using warp pads, defeat Aqua grunts, and battle Aqua Admin Matt. Team Aqua has already left with the submarine to the Seafloor Cavern. After clearing both hideouts, you can now Surf east from Lilycove.",
          trainers: [
            trn("Aqua Admin", "Matt", [
              pk("Carvanha", 29, 318),
              pk("Mightyena", 29, 262),
              pk("Sharpedo", 31, 319),
            ], "₽620"),
          ],
          items: [
            item("Master Ball", "B1F in one of the rooms"),
            item("Nugget", "Hidden in the hideout"),
            item("Electrode", "Pokémon disguised as items (Lv. 30)"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 10 — Mossdeep Gym & Space Center
     * =================================================================== */
    {
      part: 10,
      title: "Mossdeep City, Mossdeep Gym & Space Center",
      summary:
        "Travel to Mossdeep City, defeat the double-battle Gym Leaders Tate & Liza, and defend the Space Center.",
      locations: [
        {
          name: "Routes 124-125",
          description:
            "Surf east from Lilycove through the ocean routes. These watery routes have dive spots and Shoal Cave along the way. Mossdeep City is on an island to the east.",
          encounters: [
            enc("Tentacool", 72, ["E"], "Surfing", "5-35", "60%"),
            enc("Wingull", 278, ["E"], "Surfing", "10-30", "35%"),
            enc("Pelipper", 279, ["E"], "Surfing", "25-30", "5%"),
          ],
        },
        {
          name: "Mossdeep City",
          description:
            "An island city home to the Space Center and the seventh Gym. Steven Stone lives here. Visit the Space Center where Team Magma is attempting to steal rocket fuel. Defend the Space Center by defeating Magma Admin Tabitha alongside Steven (a double battle). The gym here features Psychic-type specialists Tate & Liza — the only double-battle gym in Hoenn.",
          items: [
            item("HM08 Dive", "From Steven after defending the Space Center"),
            item("Super Rod", "From the fisherman in the house on the east side"),
            item("King's Rock", "From a boy in a house"),
          ],
        },
        {
          name: "Mossdeep Gym — Leaders Tate & Liza",
          description:
            "Tate & Liza use Psychic types in a double battle. This is the only double-battle gym in the game. Dark, Ghost, and Bug moves are super effective. Their Lunatone and Solrock use Calm Mind and Psychic — they can quickly become unstoppable if you let them set up. Bring a strong Dark type like Mightyena or a Pokémon with Shadow Ball. Surf is risky since it hits both allies and enemies in a double battle.",
          trainers: [
            trn("Psychic", "Preston", [pk("Kirlia", 36, 281)], "₽864"),
            trn("Psychic", "Maura", [pk("Kadabra", 36, 64)], "₽864"),
            trn("Gym Leaders", "Tate & Liza", [
              pk("Claydol", 41, 344),
              pk("Xatu", 41, 178),
              pk("Lunatone", 42, 337),
              pk("Solrock", 42, 338),
            ], "₽4,200 + TM04 (Calm Mind)"),
          ],
          items: [
            item("Mind Badge", "Defeat Tate & Liza"),
            item("TM04 Calm Mind", "Defeat Tate & Liza"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 11 — Seafloor Cavern, Groudon & Kyogre, Sootopolis Gym
     * =================================================================== */
    {
      part: 11,
      title: "Seafloor Cavern, Sootopolis Crisis & Wallace's Gym",
      summary:
        "Dive to the Seafloor Cavern, witness the clash of Groudon and Kyogre, summon Rayquaza, and earn the Rain Badge from Wallace.",
      locations: [
        {
          name: "Routes 126-128 & Seafloor Cavern",
          description:
            "Use Dive on Route 128 to reach the underwater entrance to the Seafloor Cavern. Navigate through the cave using Strength and Rock Smash. Team Magma and Team Aqua leaders are both here. Archie uses the Blue Orb to awaken Kyogre while Maxie awakens Groudon with the Red Orb. Both ancient Pokémon emerge and the weather goes haywire — drought and downpour alternate across Hoenn.",
          trainers: [
            trn("Aqua Leader", "Archie", [
              pk("Mightyena", 41, 262),
              pk("Crobat", 41, 169),
              pk("Sharpedo", 43, 319),
            ], "₽1,720"),
          ],
          items: [
            item("TM26 Earthquake", "Seafloor Cavern deep room"),
            item("HM07 Waterfall", "Seafloor Cavern"),
          ],
        },
        {
          name: "Sootopolis City — The Legendary Clash",
          description:
            "Groudon and Kyogre clash in Sootopolis City, causing catastrophic weather. Steven meets you and suggests awakening Rayquaza at the Sky Pillar. Fly to Pacifidlog Town and Surf east to the Sky Pillar on Route 131. Ascend the tower (use the Mach Bike to cross cracked floors) and awaken Rayquaza. It flies to Sootopolis and calms the two legendaries with its presence. After the crisis is resolved, you can challenge the Sootopolis Gym.",
          items: [
            item("HM07 Waterfall", "If not obtained in Seafloor Cavern"),
          ],
        },
        {
          name: "Sootopolis Gym — Leader Wallace",
          description:
            "In Emerald, Wallace is the Sootopolis Gym Leader (instead of Juan). He uses Water-type Pokémon. Electric and Grass moves are super effective. The gym has a stepping-stone ice puzzle — step on each ice tile once to reach Wallace. His Milotic is extremely bulky with Recover and can be difficult to take down. Bring strong Electric or Grass moves and consider Toxic to wear it down.",
          trainers: [
            trn("Beauty", "Olivia", [pk("Clamperl", 40, 366), pk("Lombre", 40, 271)], "₽2,560"),
            trn("Lass", "Crissy", [pk("Goldeen", 38, 118), pk("Wailmer", 38, 320)], "₽608"),
            trn("Gym Leader", "Wallace", [
              pk("Luvdisc", 40, 370),
              pk("Whiscash", 42, 340),
              pk("Sealeo", 40, 364),
              pk("Seaking", 42, 119),
              pk("Milotic", 43, 350),
            ], "₽4,300 + TM03 (Water Pulse)"),
          ],
          items: [
            item("Rain Badge", "Defeat Wallace"),
            item("TM03 Water Pulse", "Defeat Wallace"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 12 — Victory Road
     * =================================================================== */
    {
      part: 12,
      title: "Victory Road",
      summary:
        "Travel through Victory Road and prepare for the Pokémon League.",
      locations: [
        {
          name: "Route 128 & Ever Grande City",
          description:
            "Surf east and use Waterfall to reach Ever Grande City. Heal up and stock up on Full Restores, Revives, and Max Potions. Victory Road is next — a lengthy cave full of strong trainers and wild Pokémon.",
          encounters: [
            enc("Tentacool", 72, ["E"], "Surfing", "5-35", "60%"),
            enc("Wingull", 278, ["E"], "Surfing", "10-30", "35%"),
            enc("Pelipper", 279, ["E"], "Surfing", "25-30", "5%"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "A large multi-floor cave requiring Strength, Rock Smash, Surf, and Flash to navigate. Wally challenges you near the end with a much stronger team than before — his Gardevoir hits hard. Strong wild Pokémon here provide great last-minute training opportunities. Recommended level for the Elite Four: 55+.",
          encounters: [
            enc("Golbat", 42, ["E"], "Cave", "36-40", "35%"),
            enc("Hariyama", 297, ["E"], "Cave", "36-40", "10%"),
            enc("Lairon", 305, ["E"], "Cave", "36-40", "15%"),
            enc("Loudred", 294, ["E"], "Cave", "36-40", "15%"),
            enc("Makuhita", 296, ["E"], "Cave", "36-38", "10%"),
            enc("Medicham", 308, ["E"], "Cave", "36-40", "10%"),
            enc("Mawile", 303, ["E"], "Cave", "36-38", "5%"),
          ],
          trainers: [
            trn("Cooltrainer", "Hope", [pk("Roselia", 45, 315)], "₽2,160"),
            trn("Cooltrainer", "Edgar", [pk("Cacturne", 45, 332)], "₽2,160"),
            trn("Pokémon Trainer", "Wally", [
              pk("Altaria", 44, 334),
              pk("Delcatty", 43, 301),
              pk("Roselia", 44, 315),
              pk("Magneton", 41, 82),
              pk("Gardevoir", 45, 282),
            ], "₽2,700"),
          ],
          items: [
            item("Full Restore", "1F"),
            item("PP Up", "B1F"),
            item("TM29 Psychic", "B2F"),
            item("Max Elixir", "2F"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 13 — Pokémon League (Elite Four + Champion)
     * =================================================================== */
    {
      part: 13,
      title: "Pokémon League — Elite Four & Champion Steven",
      summary:
        "Challenge the Elite Four and Champion Steven to become the Hoenn League Champion!",
      locations: [
        {
          name: "Ever Grande City — Pokémon League",
          description:
            "The final challenge awaits. You must defeat all four Elite Four members and Champion Steven Stone in succession without healing at a Pokémon Center. Save before entering! Stock up: 20+ Full Restores, 10+ Revives, 10+ Max Potions. Recommended level: 55-62. In Emerald, Steven Stone is the Champion, not Wallace.",
          trainers: [
            trn("Elite Four", "Sidney", [
              pk("Mightyena", 46, 262),
              pk("Shiftry", 48, 275),
              pk("Cacturne", 46, 332),
              pk("Crawdaunt", 48, 342),
              pk("Absol", 49, 359),
            ], "Dark specialist — use Fighting, Bug, Fairy"),
            trn("Elite Four", "Phoebe", [
              pk("Dusclops", 48, 356),
              pk("Banette", 49, 354),
              pk("Sableye", 50, 302),
              pk("Banette", 49, 354),
              pk("Dusclops", 51, 356),
            ], "Ghost specialist — use Dark, Ghost"),
            trn("Elite Four", "Glacia", [
              pk("Sealeo", 50, 364),
              pk("Glalie", 50, 362),
              pk("Sealeo", 52, 364),
              pk("Glalie", 52, 362),
              pk("Walrein", 53, 365),
            ], "Ice specialist — use Fighting, Fire, Rock, Steel"),
            trn("Elite Four", "Drake", [
              pk("Shelgon", 52, 372),
              pk("Altaria", 54, 334),
              pk("Flygon", 53, 330),
              pk("Flygon", 53, 330),
              pk("Salamence", 55, 373),
            ], "Dragon specialist — use Ice, Dragon"),
            trn("Champion", "Steven", [
              pk("Skarmory", 57, 227),
              pk("Claydol", 55, 344),
              pk("Aggron", 56, 306),
              pk("Cradily", 56, 346),
              pk("Armaldo", 56, 348),
              pk("Metagross", 58, 376),
            ], "Steel specialist — use Fire, Ground, Fighting, Water"),
          ],
          items: [
            item("Hall of Fame", "Registered upon defeating Steven"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 14 — Post-Game: Battle Frontier
     * =================================================================== */
    {
      part: 14,
      title: "Post-Game: Battle Frontier & Sky Pillar",
      summary:
        "Unlock the Battle Frontier and explore post-game challenges.",
      isPostGame: true,
      locations: [
        {
          name: "Battle Frontier",
          description:
            "Emerald's signature post-game feature! The Battle Frontier is located on an island east of Pacifidlog Town. It contains seven battle facilities, each with unique rules and a Frontier Brain leader: Battle Tower, Battle Palace, Battle Factory, Battle Arena, Battle Dome, Battle Pike, and Battle Pyramid. Earn symbols by defeating the Frontier Brains. This is the ultimate test of your battling skills — build competitive teams with perfect movesets, items, and strategies.",
          items: [
            item("Battle Points (BP)", "Earned from winning streaks at each facility"),
            item("Gold Symbols", "Defeat each Frontier Brain twice"),
          ],
        },
        {
          name: "Sky Pillar (Return)",
          description:
            "Return to the Sky Pillar after the post-game events. The cracked floors are now gone, making navigation easier. At the top, Rayquaza awaits at Level 70. This is your chance to catch it! Save before the encounter. Rayquaza is Dragon/Flying with excellent offensive stats — one of the best legendary Pokémon. Ultra Balls and Timer Balls are recommended.",
          encounters: [
            enc("Golbat", 42, ["E"], "Cave", "34-40", "40%"),
            enc("Sableye", 302, ["E"], "Cave", "34-38", "25%"),
            enc("Claydol", 344, ["E"], "Cave", "37-40", "20%"),
            enc("Banette", 354, ["E"], "Cave", "34-38", "15%"),
          ],
          items: [
            item("Rayquaza", "Top of Sky Pillar (Lv. 70 — save first!)"),
          ],
        },
        {
          name: "S.S. Tidal",
          description:
            "After entering the Hall of Fame, you gain access to the S.S. Tidal, which allows you to travel between Slateport, Lilycove, and the Battle Frontier. Use it regularly to access the Battle Frontier and other post-game areas.",
        },
      ],
    },

    /* ===================================================================
     *  PART 15 — Post-Game: Legendary Pokémon Hunt
     * =================================================================== */
    {
      part: 15,
      title: "Post-Game: Legendary Pokémon Hunt",
      summary:
        "Track down and capture the remaining legendary Pokémon — the Regis, Latias, Latios, Groudon, and Kyogre.",
      isPostGame: true,
      locations: [
        {
          name: "Sealed Chamber & the Regis",
          description:
            "The three Regi golems require solving a Braille puzzle. Dive on Route 134 and find the Sealed Chamber underwater. Solve the Braille puzzles (you need a Pokémon with Dig, and specific Pokémon in your party). This unlocks three hidden chambers across Hoenn: Regirock in the Desert Ruins (Route 111), Regice in the Island Cave (Route 105), and Registeel in the Ancient Tomb (Route 120). Each is at Level 40. They have very low catch rates — bring Timer Balls, many Ultra Balls, and a Pokémon that can inflict sleep or paralysis.",
          items: [
            item("Regirock", "Desert Ruins, Route 111 (Lv. 40)"),
            item("Regice", "Island Cave, Route 105 (Lv. 40)"),
            item("Registeel", "Ancient Tomb, Route 120 (Lv. 40)"),
          ],
        },
        {
          name: "Latias & Latios — Roaming",
          description:
            "After entering the Hall of Fame, watch the TV downstairs at home. Your mother asks about the color of the Pokémon on the news — your answer determines which Eon Pokémon roams Hoenn. Say Red and Latias roams; say Blue and Latios roams. The other one is obtainable through a special event with the Eon Ticket. The roaming one is at Level 40 and flees immediately — use Mean Look, Shadow Tag, or a fast Pokémon with a trapping move. Check your PokéNav for its location.",
          items: [
            item("Latias", "Roaming Hoenn (Lv. 40) — choose Red on TV"),
            item("Latios", "Roaming Hoenn (Lv. 40) — choose Blue on TV"),
          ],
        },
        {
          name: "Terra Cave & Marine Cave — Groudon & Kyogre",
          description:
            "After entering the Hall of Fame, a special weather event may appear — the TV or a route info sign will mention unusual weather. Intense sunlight appears on a random route leading to Terra Cave where Groudon awaits at Level 70. Heavy rain appears on a random water route leading to Marine Cave where Kyogre awaits at Level 70. These locations shift, so check frequently. Both have extremely low catch rates — bring Timer Balls and status-inducing moves. This is your chance to catch the box legendaries!",
          items: [
            item("Groudon", "Terra Cave (Lv. 70 — appears with drought weather)"),
            item("Kyogre", "Marine Cave (Lv. 70 — appears with rain weather)"),
          ],
        },
      ],
    },
  ],
};
