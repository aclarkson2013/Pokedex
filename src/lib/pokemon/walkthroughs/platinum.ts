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

export const PLATINUM_WALKTHROUGH: GameWalkthrough = {
  slug: "platinum",
  gameLabel: "Platinum",
  versionTags: ["Pt"],
  parts: [
    /* ===================================================================
     *  PART 1 — Twinleaf Town & Lake Verity
     * =================================================================== */
    {
      part: 1,
      title: "Twinleaf Town & Lake Verity",
      summary:
        "Begin your journey in Twinleaf Town, visit Lake Verity, and choose your starter.",
      locations: [
        {
          name: "Twinleaf Town",
          description:
            "Your adventure begins at home in Twinleaf Town. After watching a TV report about a red Gyarados at the Lake of Rage, your rival Barry bursts in and drags you toward Lake Verity to find rare Pokemon. Head north on Route 201 toward the lake. Professor Rowan and his assistant Dawn/Lucas are already there researching.",
          items: [
            item("Journal", "Your room at home"),
            item("Running Shoes", "From your mother before leaving town"),
          ],
        },
        {
          name: "Lake Verity",
          description:
            "At the lakefront you encounter wild Starly attacking. Professor Rowan has left his briefcase behind with three starter Pokemon inside. Choose your partner — Turtwig (Grass), Chimchar (Fire), or Piplup (Water). After battling the Starly with your new Pokemon, Rowan lets you keep it and asks you to visit him in Sandgem Town. Barry picks the starter strong against yours.",
          encounters: [
            enc("Starly", 396, ["Pt"], "Grass", "2-4", "50%"),
            enc("Bidoof", 399, ["Pt"], "Grass", "2-3", "50%"),
          ],
          items: [
            item("Starter Pokemon", "Choose Turtwig, Chimchar, or Piplup from Rowan's briefcase"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 2 — Sandgem Town, Jubilife City, Routes 202-203
     * =================================================================== */
    {
      part: 2,
      title: "Sandgem Town, Jubilife City & Routes 202-203",
      summary:
        "Receive your Pokedex from Professor Rowan, learn the basics in Jubilife, and head toward Oreburgh City.",
      locations: [
        {
          name: "Route 201",
          description:
            "The short path between Twinleaf Town and Sandgem Town. Wild Pokemon live in the tall grass. This is your first chance to catch Pokemon once you have Poke Balls.",
          encounters: [
            enc("Starly", 396, ["Pt"], "Grass", "2-3", "50%"),
            enc("Bidoof", 399, ["Pt"], "Grass", "2-3", "50%"),
          ],
        },
        {
          name: "Sandgem Town",
          description:
            "Visit Professor Rowan's lab to receive your Pokedex and Poke Balls. Dawn/Lucas gives you a tour of the town, showing you the Pokemon Center and Poke Mart. Your mother meets you here and gives you the Journal. Head north on Route 202 toward Jubilife City.",
          items: [
            item("Pokedex", "From Professor Rowan at his lab"),
            item("Poke Balls x5", "From Dawn/Lucas"),
          ],
        },
        {
          name: "Route 202",
          description:
            "Your first route with trainer battles. Dawn/Lucas shows you how to catch Pokemon. Several youngsters challenge you along the way. Shinx is a solid early Electric-type pickup here.",
          encounters: [
            enc("Starly", 396, ["Pt"], "Grass", "2-4", "25%"),
            enc("Bidoof", 399, ["Pt"], "Grass", "2-4", "25%"),
            enc("Shinx", 403, ["Pt"], "Grass", "2-4", "25%"),
            enc("Kricketot", 401, ["Pt"], "Grass", "2-4", "25%"),
          ],
          trainers: [
            trn("Youngster", "Tristan", [pk("Starly", 5, 396)], "₽80"),
            trn("Lass", "Natalie", [pk("Bidoof", 5, 399)], "₽80"),
          ],
        },
        {
          name: "Jubilife City",
          description:
            "The largest city in Sinnoh. Receive the Poketch from the Poketch Company president by finding three clowns around the city. Visit the Jubilife TV station for fun side activities. The Trainer's School teaches you about type matchups. Head east on Route 203 toward Oreburgh Gate. Barry challenges you before you leave.",
          trainers: [
            trn("Rival", "Barry", [
              pk("Starly", 7, 396),
              pk("Piplup", 9, 393),
            ], "₽540"),
          ],
          items: [
            item("Poketch", "From the Poketch president after finding 3 clowns"),
            item("Town Map", "From your rival's mother in Jubilife"),
            item("Old Rod", "Fisherman at the west gate"),
          ],
        },
        {
          name: "Route 203",
          description:
            "Head east from Jubilife City toward Oreburgh Gate. Several trainers line this route. Abra can be found here but it will Teleport immediately, so use a quick ball or put it to sleep fast.",
          encounters: [
            enc("Starly", 396, ["Pt"], "Grass", "4-6", "20%"),
            enc("Shinx", 403, ["Pt"], "Grass", "4-6", "20%"),
            enc("Bidoof", 399, ["Pt"], "Grass", "4-6", "15%"),
            enc("Kricketot", 401, ["Pt"], "Grass", "4-6", "15%"),
            enc("Abra", 63, ["Pt"], "Grass", "4-6", "10%"),
            enc("Zubat", 41, ["Pt"], "Grass", "4-6", "20%"),
          ],
          trainers: [
            trn("Youngster", "Michael", [pk("Bidoof", 5, 399), pk("Kricketot", 5, 401)], "₽80"),
            trn("Lass", "Kaitlin", [pk("Bidoof", 5, 399), pk("Starly", 5, 396)], "₽80"),
          ],
        },
        {
          name: "Oreburgh Gate",
          description:
            "A short cave connecting Route 203 to Oreburgh City. A hiker inside teaches you HM06 Rock Smash. Geodude and Zubat are common here. You can pick up Psyduck later with Surf.",
          encounters: [
            enc("Zubat", 41, ["Pt"], "Cave", "5-8", "40%"),
            enc("Geodude", 74, ["Pt"], "Cave", "5-8", "40%"),
            enc("Psyduck", 54, ["Pt"], "Cave", "5-7", "20%"),
          ],
          items: [
            item("HM06 Rock Smash", "From the hiker inside the cave"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 3 — Oreburgh City & Oreburgh Gym
     * =================================================================== */
    {
      part: 3,
      title: "Oreburgh City & Oreburgh Gym",
      summary:
        "Find Roark in Oreburgh Mine, then earn the Coal Badge from the Rock-type Gym.",
      locations: [
        {
          name: "Oreburgh City",
          description:
            "A mining town built around the coal mine. Roark the Gym Leader is working in the mine south of town. Go find him there first — he returns to the Gym once you speak to him. The Oreburgh Mining Museum has fossil restoration services. Heal up before challenging the Gym.",
          items: [
            item("Dusk Ball", "From man in house east of Pokemon Center"),
          ],
        },
        {
          name: "Oreburgh Mine",
          description:
            "Roark is at the back of the mine. Talk to him and he heads back to the Gym. The mine has Geodude and Onix encounters. Workers give you tips about mining for treasures underground.",
          encounters: [
            enc("Geodude", 74, ["Pt"], "Cave", "5-8", "50%"),
            enc("Onix", 95, ["Pt"], "Cave", "5-8", "30%"),
            enc("Zubat", 41, ["Pt"], "Cave", "5-7", "20%"),
          ],
        },
        {
          name: "Oreburgh Gym -- Leader Roark",
          description:
            "Roark specializes in Rock types. Water, Grass, and Fighting moves are all super effective. If you chose Piplup or Turtwig, this fight is very manageable. Chimchar users should catch a Machop or level up to learn Mach Punch. Roark's Cranidos hits hard with Headbutt, so don't let it move first. Win the Coal Badge to use Rock Smash outside of battle.",
          trainers: [
            trn("Youngster", "Jonathon", [pk("Geodude", 10, 74)], "₽160"),
            trn("Youngster", "Darius", [pk("Geodude", 8, 74), pk("Onix", 8, 95)], "₽128"),
            trn("Gym Leader", "Roark", [
              pk("Geodude", 12, 74),
              pk("Onix", 12, 95),
              pk("Cranidos", 14, 408),
            ], "₽1,680 + TM76 (Stealth Rock)"),
          ],
          items: [
            item("Coal Badge", "Defeat Roark"),
            item("TM76 Stealth Rock", "Defeat Roark"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 4 — Valley Windworks, Eterna Forest & Eterna Gym
     * =================================================================== */
    {
      part: 4,
      title: "Valley Windworks, Eterna Forest & Eterna Gym",
      summary:
        "Confront Team Galactic at Valley Windworks, navigate Eterna Forest, and earn the Forest Badge.",
      locations: [
        {
          name: "Route 204 & Ravaged Path",
          description:
            "Head back through Oreburgh Gate to Jubilife, then north on Route 204. Ravaged Path is a small cave midway through that requires Rock Smash. Continue north to Floaroma Town.",
          encounters: [
            enc("Budew", 406, ["Pt"], "Grass", "4-6", "25%"),
            enc("Starly", 396, ["Pt"], "Grass", "4-6", "25%"),
            enc("Bidoof", 399, ["Pt"], "Grass", "4-6", "25%"),
            enc("Shinx", 403, ["Pt"], "Grass", "4-6", "15%"),
            enc("Zubat", 41, ["Pt"], "Grass", "4-6", "10%"),
          ],
        },
        {
          name: "Floaroma Town",
          description:
            "A flower-filled town known for its honey. Team Galactic grunts are blocking the way to the Valley Windworks east of town. Get the Works Key from the grunts at Floaroma Meadow north of town first, then head to the Windworks.",
          items: [
            item("Sprayduck Watering Can", "From woman in Flower Shop"),
            item("Works Key", "Defeat Galactic grunts at Floaroma Meadow"),
          ],
        },
        {
          name: "Valley Windworks",
          description:
            "Use the Works Key to enter. Battle through Team Galactic grunts and defeat Commander Mars. She has a Purugly that hits hard with Fake Out and Scratch. After winning, the windmill workers thank you. On Fridays, Drifloon appears in front of the building.",
          encounters: [
            enc("Drifloon", 425, ["Pt"], "Gift", "15", "Fridays only, outside building"),
          ],
          trainers: [
            trn("Galactic Commander", "Mars", [
              pk("Zubat", 15, 41),
              pk("Purugly", 17, 432),
            ], "₽1,020"),
          ],
        },
        {
          name: "Eterna Forest",
          description:
            "A dense, winding forest east of Floaroma. You are joined by Cheryl, a partner NPC who heals your Pokemon after every battle. Double battles occur with wild Pokemon and trainers. Cheryl has a Chansey that uses Egg Bomb. Buneary and Gastly can be found here — Gastly is a great Ghost type for the upcoming Fantina battle. The Old Chateau is accessible via Cut from this forest, with Rotom inside at night.",
          encounters: [
            enc("Buneary", 427, ["Pt"], "Grass", "10-12", "20%"),
            enc("Wurmple", 265, ["Pt"], "Grass", "10-12", "20%"),
            enc("Budew", 406, ["Pt"], "Grass", "10-12", "20%"),
            enc("Gastly", 92, ["Pt"], "Grass", "10-12", "20%"),
            enc("Hoothoot", 163, ["Pt"], "Grass", "10-12", "10%"),
            enc("Beautifly", 267, ["Pt"], "Grass", "10-12", "5%"),
            enc("Dustox", 269, ["Pt"], "Grass", "10-12", "5%"),
          ],
          trainers: [
            trn("Bug Catcher", "Jack", [pk("Kricketot", 9, 401), pk("Kricketune", 13, 402)], "₽208"),
            trn("Bug Catcher", "Phillip", [pk("Wurmple", 10, 265), pk("Silcoon", 10, 266), pk("Beautifly", 10, 267)], "₽160"),
          ],
          items: [
            item("Antidote", "Northeast corner of forest"),
            item("Honey", "On trees throughout the forest"),
          ],
        },
        {
          name: "Eterna City",
          description:
            "A city steeped in history with a statue of the legendary Dialga/Palkia. The Gym is here, as is the Team Galactic Eterna Building. Visit the Eterna Condominiums to receive an Eevee from Bebe. After beating Gardenia, you can explore the Galactic Building to rescue the Cycle Shop owner's Pokemon, and receive a Bicycle as thanks.",
          items: [
            item("Explorer Kit", "From the Underground Man's house"),
            item("Eevee", "From Bebe in the Eterna Condominiums"),
            item("Bicycle", "From Cycle Shop after saving it from Team Galactic"),
            item("HM01 Cut", "From Cynthia in Eterna City"),
          ],
        },
        {
          name: "Eterna Gym -- Leader Gardenia",
          description:
            "Gardenia uses Grass-type Pokemon. Fire, Ice, Flying, and Poison moves work well. Her Roserade is her ace and can be tricky with Grass Knot and Poison Sting. The Gym has a clock-themed puzzle where you find trainers hiding among trees. Chimchar users have a field day here. If you caught Gastly or Zubat, their Poison typing resists Grass.",
          trainers: [
            trn("Aroma Lady", "Jenna", [pk("Budew", 17, 406), pk("Roselia", 17, 315)], "₽408"),
            trn("Aroma Lady", "Angela", [pk("Cherubi", 17, 420), pk("Turtwig", 17, 387)], "₽408"),
            trn("Gym Leader", "Gardenia", [
              pk("Cherubi", 20, 420),
              pk("Turtwig", 20, 387),
              pk("Roserade", 22, 407),
            ], "₽2,640 + TM86 (Grass Knot)"),
          ],
          items: [
            item("Forest Badge", "Defeat Gardenia"),
            item("TM86 Grass Knot", "Defeat Gardenia"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 5 — Hearthome City & Hearthome Gym (Fantina)
     * =================================================================== */
    {
      part: 5,
      title: "Hearthome City & Hearthome Gym",
      summary:
        "Arrive in Hearthome City, meet Cynthia, and challenge Fantina's Ghost-type Gym as the third badge.",
      locations: [
        {
          name: "Route 205 & Mt. Coronet (South)",
          description:
            "Head east from Eterna City through Route 205 and the southern entrance of Mt. Coronet. You only pass through a small section of the mountain for now. Chingling can be found at night on Route 211 nearby.",
          encounters: [
            enc("Shellos", 422, ["Pt"], "Grass", "12-14", "30%"),
            enc("Buizel", 418, ["Pt"], "Grass", "11-14", "25%"),
            enc("Bidoof", 399, ["Pt"], "Grass", "11-13", "20%"),
            enc("Ponyta", 77, ["Pt"], "Grass", "12-14", "15%"),
            enc("Geodude", 74, ["Pt"], "Cave", "14-17", "30%"),
            enc("Zubat", 41, ["Pt"], "Cave", "14-16", "30%"),
            enc("Chingling", 433, ["Pt"], "Cave", "14-16", "10%"),
          ],
        },
        {
          name: "Hearthome City",
          description:
            "A large city with the Pokemon Contest Hall, the Poffin House, and Amity Square. In Platinum, you can challenge Fantina right away as the third Gym Leader (she was the fifth in Diamond/Pearl). The cathedral-like Gym has a flashlight-maze puzzle. Cynthia gives you a Pokemon Egg containing Togepi when you first enter the city. Visit the church of the Poke Fan Club and Contest Hall if you enjoy side content.",
          items: [
            item("Togepi Egg", "From Cynthia at the Contest Hall entrance"),
            item("Poffin Case", "From Poffin House"),
            item("Tuxedo/Dress", "From Contest reception for entering contests"),
            item("Shell Bell", "From the woman in the house north of the Gym"),
          ],
        },
        {
          name: "Hearthome Gym -- Leader Fantina",
          description:
            "Fantina specializes in Ghost-type Pokemon. In Platinum, she is the third Gym Leader with adjusted teams. Dark-type moves are ideal since they are super effective and immune to Ghost attacks. Normal and Fighting moves won't work on her team. Her Mismagius can be dangerous with Psybeam and Shadow Ball. A Luxio with Bite or a Murkrow/Stunky with Dark-type moves are very helpful here. The Gym puzzle involves following a path of blue lights in a dark room using a flashlight.",
          trainers: [
            trn("Ace Trainer", "Allen", [pk("Gastly", 21, 92), pk("Haunter", 23, 93)], "₽1,380"),
            trn("Ace Trainer", "Catherine", [pk("Misdreavus", 23, 200)], "₽1,380"),
            trn("Gym Leader", "Fantina", [
              pk("Duskull", 24, 355),
              pk("Haunter", 24, 93),
              pk("Mismagius", 26, 429),
            ], "₽3,120 + TM65 (Shadow Claw)"),
          ],
          items: [
            item("Relic Badge", "Defeat Fantina"),
            item("TM65 Shadow Claw", "Defeat Fantina"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 6 — Routes 209-215 & Veilstone Gym
     * =================================================================== */
    {
      part: 6,
      title: "Routes 209-215 & Veilstone Gym",
      summary:
        "Travel east through Solaceon Town and beyond to Veilstone City, then earn the Cobble Badge.",
      locations: [
        {
          name: "Route 209 & Solaceon Town",
          description:
            "Head east from Hearthome City through Route 209 with the Lost Tower (a memorial for deceased Pokemon, like Lavender Tower). Solaceon Town has the Pokemon Day Care and the Solaceon Ruins. The Unown can be caught in the ruins — solving the letter puzzles unlocks bonus rooms. The Day Care is great for breeding and leveling.",
          encounters: [
            enc("Bibarel", 400, ["Pt"], "Grass", "16-18", "20%"),
            enc("Chansey", 113, ["Pt"], "Grass", "16-18", "5%"),
            enc("Staravia", 397, ["Pt"], "Grass", "16-18", "30%"),
            enc("Mime Jr.", 439, ["Pt"], "Grass", "16-18", "20%"),
            enc("Ralts", 280, ["Pt"], "Grass", "16-18", "15%"),
            enc("Roselia", 315, ["Pt"], "Grass", "16-18", "10%"),
          ],
          items: [
            item("Good Rod", "Fisherman on Route 209"),
            item("Seal Case", "From boy in Solaceon Town"),
            item("Poketch App: Pokemon History", "From woman in Solaceon"),
          ],
        },
        {
          name: "Route 210 (South) & Route 215",
          description:
            "Route 210 south is partially blocked by Psyduck with headaches — you can't go north yet. Continue east to Route 215, which leads to Veilstone City. Route 215 is a rainy route filled with Black Belt trainers. Geodude and Kadabra can be found along the way.",
          encounters: [
            enc("Ponyta", 77, ["Pt"], "Grass", "18-20", "25%"),
            enc("Geodude", 74, ["Pt"], "Grass", "18-20", "25%"),
            enc("Kadabra", 64, ["Pt"], "Grass", "19-22", "10%"),
            enc("Kricketune", 402, ["Pt"], "Grass", "18-22", "20%"),
            enc("Marill", 183, ["Pt"], "Grass", "19-22", "20%"),
          ],
          trainers: [
            trn("Black Belt", "Gregory", [pk("Machoke", 27, 67)], "₽648"),
            trn("Black Belt", "Darren", [pk("Croagunk", 25, 453), pk("Machop", 25, 66)], "₽600"),
          ],
        },
        {
          name: "Veilstone City",
          description:
            "A city carved from rock with the largest department store in Sinnoh. The Veilstone Game Corner has slot machines. Team Galactic has a large warehouse here — you'll deal with it after the Gym. Visit the department store for supplies and TMs.",
          items: [
            item("TM63 Embargo", "From woman near Game Corner"),
            item("Coin Case", "From a clown in a house"),
            item("Porygon", "From a man behind the Pokemon Center"),
          ],
        },
        {
          name: "Veilstone Gym -- Leader Maylene",
          description:
            "Maylene specializes in Fighting types. Psychic, Flying, and Fairy moves are super effective. Her Lucario has Inner Focus (no flinching) and uses Metal Claw and Drain Punch. If you have a Staravia with Aerial Ace, it shreds this Gym. A Kadabra with Confusion also works very well. The Gym puzzle involves pushing punching bags to move tire walls out of the way.",
          trainers: [
            trn("Black Belt", "Colby", [pk("Machoke", 27, 67)], "₽648"),
            trn("Black Belt", "Darren", [pk("Meditite", 27, 307)], "₽648"),
            trn("Gym Leader", "Maylene", [
              pk("Meditite", 28, 307),
              pk("Machoke", 29, 67),
              pk("Lucario", 32, 448),
            ], "₽3,840 + TM60 (Drain Punch)"),
          ],
          items: [
            item("Cobble Badge", "Defeat Maylene"),
            item("TM60 Drain Punch", "Defeat Maylene"),
            item("HM02 Fly", "From Dawn/Lucas outside the Galactic Warehouse"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 7 — Pastoria Gym
     * =================================================================== */
    {
      part: 7,
      title: "Pastoria City & Pastoria Gym",
      summary:
        "Travel to the Great Marsh, meet Crasher Wake, and earn the Fen Badge.",
      locations: [
        {
          name: "Route 212 & Route 213",
          description:
            "Head south from Veilstone City through Route 214 and then west on Route 213 along the beach to reach Pastoria City. Route 214 has Houndour on it in Platinum — a great Dark/Fire type. The mansion of Mr. Backlot is on Route 212 south, where you can unlock daily Trophy Garden Pokemon.",
          encounters: [
            enc("Houndour", 228, ["Pt"], "Grass", "20-22", "20%"),
            enc("Ponyta", 77, ["Pt"], "Grass", "20-22", "25%"),
            enc("Geodude", 74, ["Pt"], "Grass", "20-22", "25%"),
            enc("Girafarig", 203, ["Pt"], "Grass", "20-22", "15%"),
            enc("Kricketune", 402, ["Pt"], "Grass", "20-22", "15%"),
          ],
          trainers: [
            trn("Collector", "Douglas", [pk("Roselia", 22, 315), pk("Stunky", 22, 434)], "₽1,320"),
          ],
        },
        {
          name: "Pastoria City & Great Marsh",
          description:
            "Pastoria City is home to Crasher Wake and the Great Marsh (the Sinnoh Safari Zone). In the Great Marsh you can catch Pokemon like Skorupi, Carnivine, and Croagunk using the Safari Game. Binoculars on the second floor let you see which rare Pokemon are available each day. After the Gym, you chase a Galactic grunt who has stolen research from the rival.",
          encounters: [
            enc("Skorupi", 451, ["Pt"], "Grass", "20-26", "20%"),
            enc("Carnivine", 455, ["Pt"], "Grass", "20-26", "20%"),
            enc("Croagunk", 453, ["Pt"], "Grass", "20-26", "20%"),
            enc("Wooper", 194, ["Pt"], "Grass", "20-26", "20%"),
            enc("Tangela", 114, ["Pt"], "Grass", "22-26", "10%"),
            enc("Yanma", 193, ["Pt"], "Grass", "22-26", "10%"),
          ],
          items: [
            item("Safari Balls x30", "Entry fee to the Great Marsh"),
            item("HM05 Defog", "From a trainer inside the Great Marsh"),
          ],
        },
        {
          name: "Pastoria Gym -- Leader Crasher Wake",
          description:
            "Crasher Wake uses Water-type Pokemon. Grass and Electric moves are ideal. His Floatzel is fast and uses Aqua Jet for priority damage, and Brine hits hard when your HP is low. The Gym has a water-level puzzle where you raise and lower water by pressing buttons to create paths. A Luxio/Luxray with Spark or a Roselia with Grass moves makes this fight manageable.",
          trainers: [
            trn("Fisherman", "Walter", [pk("Barboach", 26, 339), pk("Barboach", 26, 339)], "₽936"),
            trn("Sailor", "Damian", [pk("Wingull", 28, 278), pk("Shellos", 28, 422)], "₽896"),
            trn("Gym Leader", "Crasher Wake", [
              pk("Gyarados", 33, 130),
              pk("Quagsire", 34, 195),
              pk("Floatzel", 37, 419),
            ], "₽4,440 + TM55 (Brine)"),
          ],
          items: [
            item("Fen Badge", "Defeat Crasher Wake"),
            item("TM55 Brine", "Defeat Crasher Wake"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 8 — Celestic Town & Canalave Gym
     * =================================================================== */
    {
      part: 8,
      title: "Celestic Town & Canalave Gym",
      summary:
        "Clear the Psyduck roadblock, explore Celestic Town's ruins, and earn the Mine Badge in Canalave City.",
      locations: [
        {
          name: "Route 210 (North) & Celestic Town",
          description:
            "Cynthia gives you the SecretPotion to cure the Psyduck blocking Route 210. Head north through the fog (use Defog) to reach Celestic Town. Team Galactic is trying to destroy the ancient ruins. Defeat the Galactic Grunt to get into the ruins. Cynthia's grandmother tells you about Dialga, Palkia, and the legendary lake trio. Cyrus appears and gives you TM Shadow Ball before leaving. The elder gives you HM03 Surf.",
          encounters: [
            enc("Ponyta", 77, ["Pt"], "Grass", "22-25", "25%"),
            enc("Staravia", 397, ["Pt"], "Grass", "22-25", "20%"),
            enc("Geodude", 74, ["Pt"], "Grass", "22-24", "20%"),
            enc("Machoke", 67, ["Pt"], "Grass", "25-27", "10%"),
            enc("Meditite", 307, ["Pt"], "Grass", "22-25", "15%"),
            enc("Psyduck", 54, ["Pt"], "Grass", "20-22", "10%"),
          ],
          trainers: [
            trn("Galactic Grunt", "Grunt", [pk("Beautifly", 25, 267), pk("Croagunk", 27, 453)], "₽1,080"),
          ],
          items: [
            item("HM03 Surf", "From Cynthia's grandmother in Celestic Town"),
            item("TM30 Shadow Ball", "From Cyrus in the ruins"),
          ],
        },
        {
          name: "Route 218 & Canalave City",
          description:
            "Fly to Jubilife City and Surf west on Route 218 to reach Canalave City. This port town has the Canalave Library (important lore about Sinnoh's creation myths) and Byron's Steel-type Gym. Your rival challenges you at the bridge when you arrive.",
          encounters: [
            enc("Mr. Mime", 122, ["Pt"], "Grass", "28-30", "20%"),
            enc("Floatzel", 419, ["Pt"], "Surfing", "20-30", "30%"),
            enc("Tentacool", 72, ["Pt"], "Surfing", "20-30", "30%"),
            enc("Shellos", 422, ["Pt"], "Grass", "28-30", "20%"),
            enc("Gastrodon", 423, ["Pt"], "Surfing", "20-30", "20%"),
          ],
          trainers: [
            trn("Rival", "Barry", [
              pk("Staraptor", 36, 398),
              pk("Heracross", 37, 214),
              pk("Roserade", 36, 407),
              pk("Empoleon", 38, 395),
            ], "₽2,280"),
          ],
        },
        {
          name: "Canalave Gym -- Leader Byron",
          description:
            "Byron is a Steel-type specialist and Roark's father. Fire, Fighting, and Ground moves are super effective. His Bastiodon has incredible defenses — Earthquake or Fighting moves are the way to break through it. The Gym has moving platform puzzles. Infernape or Machoke make excellent choices here.",
          trainers: [
            trn("Worker", "Gary", [pk("Onix", 34, 95), pk("Steelix", 36, 208)], "₽1,440"),
            trn("Worker", "Brendon", [pk("Bronzor", 33, 436), pk("Bronzor", 33, 436), pk("Bronzong", 35, 437)], "₽1,400"),
            trn("Gym Leader", "Byron", [
              pk("Magneton", 37, 82),
              pk("Steelix", 38, 208),
              pk("Bastiodon", 41, 411),
            ], "₽4,920 + TM91 (Flash Cannon)"),
          ],
          items: [
            item("Mine Badge", "Defeat Byron"),
            item("TM91 Flash Cannon", "Defeat Byron"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 9 — Iron Island, Lake Events & Snowpoint Gym
     * =================================================================== */
    {
      part: 9,
      title: "Iron Island, Lake Trio Events & Snowpoint Gym",
      summary:
        "Explore Iron Island with Riley, witness the lake bombing events, and earn the Icicle Badge.",
      locations: [
        {
          name: "Iron Island",
          description:
            "Take the boat from Canalave City to Iron Island. Navigate the cave with Riley as your partner (he heals your Pokemon after each battle, and double battles occur). At the end, Riley gives you a Riolu Egg. Riolu evolves into Lucario with high friendship during the day — one of the best Pokemon in the game. Team Galactic grunts are here looking for something.",
          encounters: [
            enc("Onix", 95, ["Pt"], "Cave", "29-33", "20%"),
            enc("Steelix", 208, ["Pt"], "Cave", "30-33", "10%"),
            enc("Graveler", 75, ["Pt"], "Cave", "29-33", "30%"),
            enc("Golbat", 42, ["Pt"], "Cave", "29-33", "30%"),
            enc("Zubat", 41, ["Pt"], "Cave", "29-31", "10%"),
          ],
          items: [
            item("Riolu Egg", "Gift from Riley after clearing Iron Island"),
            item("Shiny Stone", "B3F, hidden in corner"),
            item("Iron Plate", "B2F"),
          ],
        },
        {
          name: "Lake Valor, Lake Verity & Lake Acuity",
          description:
            "After Iron Island, a massive explosion rocks Sinnoh — Team Galactic has bombed Lake Valor. Fly to Twinleaf Town and Surf to Lake Valor to confront Saturn, who has captured Azelf. Then head to Lake Verity where Mars has captured Mesprit. Barry arrives at Lake Acuity ahead of you but loses to Jupiter, who captures Uxie. All three lake spirits are taken to the Galactic HQ in Veilstone City.",
          trainers: [
            trn("Galactic Commander", "Saturn", [
              pk("Golbat", 38, 42),
              pk("Bronzor", 38, 436),
              pk("Toxicroak", 40, 454),
            ], "₽2,400"),
            trn("Galactic Commander", "Mars", [
              pk("Golbat", 38, 42),
              pk("Bronzor", 38, 436),
              pk("Purugly", 40, 432),
            ], "₽2,400"),
          ],
        },
        {
          name: "Route 216, Route 217 & Snowpoint City",
          description:
            "After the lake events, head north from Eterna City through Mt. Coronet's northern cave to reach the snowy Routes 216 and 217. The snowstorm slows your movement. Snover is common here and useful for the upcoming Gym. Snowpoint City is the northernmost city with a temple containing Regigigas. The Gym is ice-themed.",
          encounters: [
            enc("Snover", 459, ["Pt"], "Grass", "32-35", "30%"),
            enc("Sneasel", 215, ["Pt"], "Grass", "32-35", "20%"),
            enc("Medicham", 308, ["Pt"], "Grass", "32-35", "15%"),
            enc("Machoke", 67, ["Pt"], "Grass", "32-35", "10%"),
            enc("Meditite", 307, ["Pt"], "Grass", "32-34", "15%"),
            enc("Noctowl", 164, ["Pt"], "Grass", "33-35", "10%"),
          ],
          items: [
            item("HM08 Rock Climb", "Behind the house on Route 217"),
            item("Icicle Plate", "Route 217, buried in snow"),
            item("NeverMeltIce", "Snowpoint City, house"),
          ],
        },
        {
          name: "Snowpoint Gym -- Leader Candice",
          description:
            "Candice is an Ice-type specialist. Fire, Fighting, Rock, and Steel moves are super effective. Her Froslass is a Ghost/Ice type that can't be hit by Fighting or Normal moves — use Fire or Rock instead. The Gym has slippery ice floor puzzles with snowballs to break. Infernape and Lucario are both excellent choices here. Beware Abomasnow's Snow Warning which causes hail damage every turn.",
          trainers: [
            trn("Ace Trainer", "Brenna", [pk("Snover", 38, 459), pk("Sneasel", 38, 215)], "₽2,280"),
            trn("Ace Trainer", "Alicia", [pk("Snorunt", 38, 361), pk("Piloswine", 38, 221)], "₽2,280"),
            trn("Gym Leader", "Candice", [
              pk("Sneasel", 40, 215),
              pk("Piloswine", 40, 221),
              pk("Abomasnow", 42, 460),
              pk("Froslass", 44, 478),
            ], "₽5,280 + TM72 (Avalanche)"),
          ],
          items: [
            item("Icicle Badge", "Defeat Candice"),
            item("TM72 Avalanche", "Defeat Candice"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 10 — Team Galactic HQ, Spear Pillar & Distortion World
     * =================================================================== */
    {
      part: 10,
      title: "Team Galactic HQ, Spear Pillar & Distortion World",
      summary:
        "Infiltrate Team Galactic HQ, ascend Mt. Coronet to Spear Pillar, and enter the Distortion World to confront Giratina.",
      locations: [
        {
          name: "Galactic HQ — Veilstone City",
          description:
            "Use the Storage Key from the Galactic Warehouse to enter the main HQ. Looker from the International Police helps you infiltrate. Fight through grunts, free the lake trio, and take on Cyrus in his office. He uses a Honchkrow and Crobat among others. Obtain the Master Ball from a chest in the HQ. Saturn guards the exit.",
          trainers: [
            trn("Galactic Boss", "Cyrus", [
              pk("Murkrow", 40, 198),
              pk("Golbat", 40, 42),
              pk("Sneasel", 40, 215),
              pk("Crobat", 43, 169),
            ], "₽5,160"),
            trn("Galactic Commander", "Saturn", [
              pk("Golbat", 42, 42),
              pk("Bronzor", 42, 436),
              pk("Toxicroak", 44, 454),
            ], "₽2,640"),
          ],
          items: [
            item("Master Ball", "In a chest inside the HQ"),
            item("Galactic Key", "From Looker/found in HQ"),
            item("Dusk Stone", "B2F of Galactic HQ"),
          ],
        },
        {
          name: "Mt. Coronet — Spear Pillar",
          description:
            "Ascend through the snowy interior of Mt. Coronet to reach Spear Pillar at the summit. Team Galactic Commanders Mars and Jupiter battle you and Barry in a double battle. Then Cyrus summons both Dialga and Palkia using the Red Chain. The lake trio tries to stop him, but a shadow portal opens — Giratina drags Cyrus into the Distortion World. You must follow.",
          trainers: [
            trn("Galactic Boss", "Cyrus (Spear Pillar)", [
              pk("Houndoom", 45, 229),
              pk("Honchkrow", 47, 430),
              pk("Crobat", 46, 169),
              pk("Gyarados", 46, 130),
            ], "₽5,640"),
          ],
          encounters: [
            enc("Golbat", 42, ["Pt"], "Cave", "38-42", "30%"),
            enc("Graveler", 75, ["Pt"], "Cave", "38-40", "20%"),
            enc("Bronzong", 437, ["Pt"], "Cave", "38-42", "15%"),
            enc("Clefairy", 35, ["Pt"], "Cave", "38-40", "15%"),
            enc("Chingling", 433, ["Pt"], "Cave", "38-40", "10%"),
            enc("Machoke", 67, ["Pt"], "Cave", "38-42", "10%"),
          ],
        },
        {
          name: "Distortion World",
          description:
            "A bizarre dimension where gravity is warped and you walk on walls and ceilings. This area is exclusive to Platinum. Navigate the surreal landscape by solving puzzles with the lake trio — Uxie, Mesprit, and Azelf guide you. Cyrus is here, lost and confused. At the heart of the Distortion World, you face Giratina in its Origin Forme at Level 47. Save before this encounter! Giratina holds the Griseous Orb. If you knock it out, it reappears here after the Elite Four. Catching it is highly recommended — it's one of the best Pokemon in the game.",
          encounters: [
            enc("Giratina (Origin Forme)", 487, ["Pt"], "Gift", "47", "Legendary encounter at the end"),
          ],
          items: [
            item("Griseous Orb", "Held by Giratina / found in Distortion World"),
            item("Rare Candy", "Hidden on a floating platform"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 11 — Sunyshore Gym
     * =================================================================== */
    {
      part: 11,
      title: "Sunyshore City & Sunyshore Gym",
      summary:
        "Travel to the solar-powered Sunyshore City and earn the final badge from Volkner.",
      locations: [
        {
          name: "Route 222",
          description:
            "After exiting the Distortion World, you emerge at Sendoff Spring. Fly to Pastoria City and head east on Route 222 toward Sunyshore City. This coastal route has many trainers and strong wild Pokemon. Luxio and Electabuzz can be found here.",
          encounters: [
            enc("Luxio", 404, ["Pt"], "Grass", "38-40", "25%"),
            enc("Chatot", 441, ["Pt"], "Grass", "38-40", "25%"),
            enc("Floatzel", 419, ["Pt"], "Grass", "39-41", "15%"),
            enc("Gastrodon", 423, ["Pt"], "Grass", "39-41", "15%"),
            enc("Mr. Mime", 122, ["Pt"], "Grass", "38-40", "10%"),
            enc("Electabuzz", 125, ["Pt"], "Grass", "39-41", "10%"),
          ],
        },
        {
          name: "Sunyshore City",
          description:
            "A futuristic city powered by solar panels. Volkner has been bored due to a lack of strong challengers — Flint of the Elite Four convinced him to stay. The Sunyshore Market sells rare items. Visit the lighthouse where Volkner hangs out before challenging the Gym.",
          items: [
            item("HM07 Waterfall", "From Jasmine (Johto gym leader) at the beach"),
            item("Effort Ribbon", "From woman in market for max EVs"),
          ],
        },
        {
          name: "Sunyshore Gym -- Leader Volkner",
          description:
            "Volkner is an Electric-type specialist. Ground moves are the obvious counter — Earthquake devastates his entire team. His Electivire has Motor Drive (absorbs Electric moves for a speed boost), so never use Electric attacks against it. The Gym puzzle involves rotating gears to create walkways. Garchomp, Gastrodon, or any Ground type will sweep this Gym.",
          trainers: [
            trn("Guitarist", "Jerry", [pk("Luxio", 44, 404), pk("Luxray", 44, 405)], "₽1,408"),
            trn("Guitarist", "Lonnie", [pk("Raichu", 46, 26)], "₽1,472"),
            trn("Gym Leader", "Volkner", [
              pk("Jolteon", 46, 135),
              pk("Raichu", 46, 26),
              pk("Luxray", 48, 405),
              pk("Electivire", 50, 466),
            ], "₽6,000 + TM57 (Charge Beam)"),
          ],
          items: [
            item("Beacon Badge", "Defeat Volkner"),
            item("TM57 Charge Beam", "Defeat Volkner"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 12 — Victory Road & Pokemon League
     * =================================================================== */
    {
      part: 12,
      title: "Victory Road & Pokemon League",
      summary:
        "Traverse Victory Road and challenge the Elite Four and Champion Cynthia.",
      locations: [
        {
          name: "Route 223 & Victory Road",
          description:
            "Surf north from Sunyshore City through Route 223 to reach the Pokemon League reception gate. Victory Road is a grueling cave with Strength and Rock Climb puzzles, powerful trainers, and high-level wild Pokemon. Your rival Barry challenges you near the entrance. Stock up on Max Potions, Full Restores, and Revives before entering.",
          encounters: [
            enc("Golbat", 42, ["Pt"], "Cave", "40-44", "20%"),
            enc("Graveler", 75, ["Pt"], "Cave", "40-44", "20%"),
            enc("Onix", 95, ["Pt"], "Cave", "41-45", "15%"),
            enc("Machoke", 67, ["Pt"], "Cave", "40-44", "15%"),
            enc("Steelix", 208, ["Pt"], "Cave", "42-46", "10%"),
            enc("Gabite", 444, ["Pt"], "Cave", "41-45", "5%"),
            enc("Rhyhorn", 111, ["Pt"], "Cave", "40-44", "15%"),
          ],
          trainers: [
            trn("Rival", "Barry", [
              pk("Staraptor", 48, 398),
              pk("Heracross", 50, 214),
              pk("Snorlax", 49, 143),
              pk("Roserade", 49, 407),
              pk("Floatzel", 49, 419),
              pk("Empoleon", 51, 395),
            ], "₽3,060"),
          ],
          items: [
            item("TM41 Torment", "Victory Road 1F"),
            item("Razor Claw", "Victory Road B1F"),
            item("Full Restore", "Multiple throughout Victory Road"),
          ],
        },
        {
          name: "Pokemon League — Elite Four & Champion",
          description:
            "The ultimate challenge. You must defeat all four Elite Four members and Champion Cynthia in a row without visiting a Pokemon Center. Recommended level: 55-62+. Aaron uses Bug types, Bertha uses Ground types, Flint uses Fire types, Lucian uses Psychic types, and Cynthia has a balanced team anchored by her iconic Garchomp. Save before entering. Buy plenty of Full Restores and Revives.",
          trainers: [
            trn("Elite Four", "Aaron", [
              pk("Yanmega", 49, 469),
              pk("Scizor", 49, 212),
              pk("Vespiquen", 50, 416),
              pk("Heracross", 51, 214),
              pk("Drapion", 53, 452),
            ], "Bug specialist — use Fire, Rock, Flying"),
            trn("Elite Four", "Bertha", [
              pk("Whiscash", 50, 340),
              pk("Gliscor", 53, 472),
              pk("Golem", 52, 76),
              pk("Rhyperior", 52, 464),
              pk("Hippowdon", 55, 450),
            ], "Ground specialist — use Water, Grass, Ice"),
            trn("Elite Four", "Flint", [
              pk("Houndoom", 52, 229),
              pk("Flareon", 55, 136),
              pk("Rapidash", 53, 78),
              pk("Infernape", 55, 392),
              pk("Magmortar", 57, 467),
            ], "Fire specialist — use Water, Ground, Rock"),
            trn("Elite Four", "Lucian", [
              pk("Mr. Mime", 53, 122),
              pk("Espeon", 55, 196),
              pk("Bronzong", 54, 437),
              pk("Alakazam", 56, 65),
              pk("Gallade", 59, 475),
            ], "Psychic specialist — use Dark, Bug, Ghost"),
            trn("Champion", "Cynthia", [
              pk("Spiritomb", 58, 442),
              pk("Roserade", 58, 407),
              pk("Togekiss", 60, 468),
              pk("Lucario", 60, 448),
              pk("Milotic", 58, 350),
              pk("Garchomp", 62, 445),
            ], "Mixed team — Garchomp is devastating; Ice moves are key"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 13 — Post-Game: Battle Frontier
     * =================================================================== */
    {
      part: 13,
      title: "Post-Game: Battle Frontier",
      summary:
        "Explore the Battle Frontier, Platinum's replacement for the Battle Tower, with five unique battle facilities.",
      isPostGame: true,
      locations: [
        {
          name: "Fight Area & Battle Frontier",
          description:
            "After the credits, take the boat from Snowpoint City to the Fight Area. The Battle Frontier is a massive facility exclusive to Platinum that replaces Diamond/Pearl's Battle Tower. It contains five facilities: the Battle Tower, Battle Factory, Battle Hall, Battle Castle, and Battle Arcade. Each has its own rules and Frontier Brain to defeat. You earn Battle Points (BP) to exchange for rare items, TMs, and hold items. Barry challenges you here with an even stronger team. Routes 225-230 also unlock, with high-level wild Pokemon and trainers.",
          items: [
            item("Battle Points (BP)", "Earned from winning in any facility"),
            item("Star Piece", "Route 228, hidden"),
            item("Rare Candy", "Route 226"),
          ],
        },
        {
          name: "Routes 225-230 & Survival Area",
          description:
            "A chain of routes in the northeast with high-level wild Pokemon (Lv 50+). The Survival Area and Resort Area are here. Buck, Marley, Mira, Riley, and Cheryl — all partner characters from the main game — can be found here for rematches. Strong trainers and daily rematches provide endless leveling opportunities.",
          encounters: [
            enc("Fearow", 22, ["Pt"], "Grass", "50-52", "20%"),
            enc("Raticate", 20, ["Pt"], "Grass", "50-52", "10%"),
            enc("Banette", 354, ["Pt"], "Grass", "50-52", "10%"),
            enc("Arcanine", 59, ["Pt"], "Grass", "50-52", "10%"),
            enc("Skarmory", 227, ["Pt"], "Grass", "50-52", "10%"),
            enc("Absol", 359, ["Pt"], "Grass", "50-52", "10%"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 14 — Post-Game: Legendary Pokemon
     * =================================================================== */
    {
      part: 14,
      title: "Post-Game: Stark Mountain, Turnback Cave & Fullmoon Island",
      summary:
        "Catch Heatran at Stark Mountain, revisit Giratina in Turnback Cave, and encounter Cresselia on Fullmoon Island.",
      isPostGame: true,
      locations: [
        {
          name: "Stark Mountain — Heatran",
          description:
            "Located at the end of Route 227 north of the Survival Area. Team up with Buck to navigate the volcano interior. After completing the first visit, Buck takes the Magma Stone and Heatran becomes restless. Return the Magma Stone (Buck returns it) and Heatran appears in the deepest chamber at Level 50. Heatran is Fire/Steel type — bring Ground moves (4x effective). Save before the encounter.",
          encounters: [
            enc("Heatran", 485, ["Pt"], "Gift", "50", "Legendary encounter in deepest chamber"),
            enc("Camerupt", 323, ["Pt"], "Cave", "54-58", "20%"),
            enc("Torkoal", 324, ["Pt"], "Cave", "54-56", "10%"),
            enc("Golbat", 42, ["Pt"], "Cave", "52-56", "20%"),
            enc("Graveler", 75, ["Pt"], "Cave", "52-56", "20%"),
            enc("Magcargo", 219, ["Pt"], "Cave", "54-56", "10%"),
          ],
          items: [
            item("Magma Stone", "Deep inside Stark Mountain"),
          ],
        },
        {
          name: "Turnback Cave — Giratina (Altered Forme)",
          description:
            "Accessible from Sendoff Spring through Route 214. If you caught Giratina in the Distortion World, this cave leads to the Griseous Orb (if you didn't get it). If Giratina was knocked out during the main story, it reappears here at Level 47 in its Altered Forme. The cave is a maze with randomly generated rooms — reach the end within 30 rooms to find the pillar room. Rare Candy and other items are scattered inside.",
          encounters: [
            enc("Giratina (Altered Forme)", 487, ["Pt"], "Gift", "47", "If not caught in Distortion World"),
            enc("Bronzong", 437, ["Pt"], "Cave", "45-55", "10%"),
            enc("Dusclops", 356, ["Pt"], "Cave", "45-55", "15%"),
            enc("Haunter", 93, ["Pt"], "Cave", "45-55", "15%"),
            enc("Golbat", 42, ["Pt"], "Cave", "45-55", "20%"),
            enc("Chingling", 433, ["Pt"], "Cave", "45-50", "10%"),
          ],
        },
        {
          name: "Fullmoon Island — Cresselia",
          description:
            "After the Elite Four, talk to the sailor in Canalave City. His son is having nightmares caused by Darkrai. Sail to Fullmoon Island where Cresselia awaits at Level 50. When you interact with it, Cresselia flees and becomes a roaming Pokemon across Sinnoh. Track it on your map using the Poketch Marking Map app. Use Mean Look or a trapping ability to prevent it from fleeing in battle. It drops the Lunar Wing which cures the boy.",
          encounters: [
            enc("Cresselia", 488, ["Pt"], "Gift", "50", "Roaming legendary — flees when encountered"),
          ],
          items: [
            item("Lunar Wing", "From Cresselia's pedestal, cures the boy's nightmares"),
          ],
        },
      ],
    },

    /* ===================================================================
     *  PART 15 — Post-Game: Legendary Hunt
     * =================================================================== */
    {
      part: 15,
      title: "Post-Game: Legendary Hunt",
      summary:
        "Track down the Regi trio, the roaming lake guardians, and other rare legendary encounters.",
      isPostGame: true,
      locations: [
        {
          name: "Regigigas & the Regi Trio",
          description:
            "In Platinum, the three Regis (Regirock, Regice, Registeel) are obtainable without trading. After obtaining the National Pokedex, talk to the girl in the Route 209/Solaceon Town area who mentions a special cave. Regirock is in Route 228, Regice is in Mt. Coronet, and Registeel is in Iron Island. Each is at Level 30. After catching all three, bring them to Snowpoint Temple to awaken Regigigas at Level 1. Despite being Level 1, Regigigas has Slow Start which halves its Attack and Speed for 5 turns — plan accordingly.",
          encounters: [
            enc("Regirock", 377, ["Pt"], "Gift", "30", "Route 228 cave"),
            enc("Regice", 378, ["Pt"], "Gift", "30", "Mt. Coronet cave"),
            enc("Registeel", 379, ["Pt"], "Gift", "30", "Iron Island cave"),
            enc("Regigigas", 486, ["Pt"], "Gift", "1", "Snowpoint Temple with all 3 Regis in party"),
          ],
          items: [
            item("Iron Ball", "Snowpoint Temple B5F"),
            item("NeverMeltIce", "Snowpoint Temple B3F"),
          ],
        },
        {
          name: "Lake Trio — Uxie, Mesprit & Azelf",
          description:
            "After the main story, the lake trio returns to their respective lakes. Uxie is at Lake Acuity (Level 50, stationary encounter). Azelf is at Lake Valor (Level 50, stationary encounter). Mesprit is at Lake Verity but flees when approached, becoming a roaming Pokemon across Sinnoh (Level 50). Use the Poketch Marking Map to track Mesprit. Master Ball or Mean Look are recommended for the roamer.",
          encounters: [
            enc("Uxie", 480, ["Pt"], "Gift", "50", "Lake Acuity cavern — stationary"),
            enc("Azelf", 482, ["Pt"], "Gift", "50", "Lake Valor cavern — stationary"),
            enc("Mesprit", 481, ["Pt"], "Gift", "50", "Lake Verity — roaming after interaction"),
          ],
        },
        {
          name: "Dialga & Palkia",
          description:
            "In Platinum, after obtaining the National Pokedex, return to the summit of Mt. Coronet (Spear Pillar). Cynthia's grandmother in Celestic Town gives you the Adamant Orb and Lustrous Orb. Dialga and Palkia each appear at Level 70 on Spear Pillar as stationary encounters. Save before each battle. These are some of the strongest Pokemon in the game with excellent typing and stats.",
          encounters: [
            enc("Dialga", 483, ["Pt"], "Gift", "70", "Spear Pillar — stationary encounter"),
            enc("Palkia", 484, ["Pt"], "Gift", "70", "Spear Pillar — stationary encounter"),
          ],
          items: [
            item("Adamant Orb", "From Cynthia's grandmother for Dialga"),
            item("Lustrous Orb", "From Cynthia's grandmother for Palkia"),
          ],
        },
      ],
    },
  ],
};
