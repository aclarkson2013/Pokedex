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

export const DIAMOND_PEARL_WALKTHROUGH: GameWalkthrough = {
  slug: "diamond-pearl",
  gameLabel: "Diamond & Pearl",
  versionTags: ["D", "P"],
  parts: [
    /* ===============================================================
     *  PART 1 — Twinleaf Town, Route 201 & Lake Verity
     * =============================================================== */
    {
      part: 1,
      title: "Twinleaf Town, Route 201 & Lake Verity",
      summary:
        "Begin your Sinnoh adventure, visit Lake Verity, and choose your starter Pokémon.",
      locations: [
        {
          name: "Twinleaf Town",
          description:
            "Your journey starts in Twinleaf Town. Head to your rival Barry's house — he's impatient as always and wants to go to the lake. Before leaving, grab the Potion from your PC. Head north to Route 201 with Barry.",
          items: [
            item("Potion", "Your PC at the start of the game"),
            item("Journal", "From your mom before leaving"),
          ],
        },
        {
          name: "Route 201",
          description:
            "Professor Rowan's assistant warns you not to enter the tall grass without a Pokémon. Head west toward Lake Verity with Barry. You'll receive your starter Pokémon soon.",
        },
        {
          name: "Lake Verity",
          description:
            "At the lake, you and Barry discover Professor Rowan's briefcase containing three Poké Balls. A wild Starly attacks, forcing you to choose a starter: Turtwig (Grass), Chimchar (Fire), or Piplup (Water). Barry picks the type strong against yours. After the battle, Professor Rowan lets you keep the Pokémon. Return to Twinleaf Town and say goodbye to your mom, then head to Sandgem Town.",
          encounters: [
            enc("Starly", 396, ["D", "P"], "Grass", "2-4", "50%"),
            enc("Bidoof", 399, ["D", "P"], "Grass", "2-3", "50%"),
          ],
          items: [
            item("Turtwig", "Starter choice (Grass type)"),
            item("Chimchar", "Starter choice (Fire type)"),
            item("Piplup", "Starter choice (Water type)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Sandgem Town, Route 202-203, Jubilife City
     * =============================================================== */
    {
      part: 2,
      title: "Sandgem Town, Routes 202-203 & Jubilife City",
      summary:
        "Meet Professor Rowan, receive the Pokédex, and explore Jubilife City.",
      locations: [
        {
          name: "Route 201 (revisit)",
          description:
            "Now that you have a Pokémon, you can walk through the tall grass. Head east to Sandgem Town. Train your starter along the way — Starly and Bidoof are common here.",
          encounters: [
            enc("Starly", 396, ["D", "P"], "Grass", "2-3", "50%"),
            enc("Bidoof", 399, ["D", "P"], "Grass", "2-3", "50%"),
          ],
        },
        {
          name: "Sandgem Town",
          description:
            "Professor Rowan's lab is here. He gives you the Pokédex and asks you to catalog every Pokémon in Sinnoh. Dawn/Lucas (the professor's assistant) shows you around town. Visit the Pokémon Center and Poké Mart. Head back home to tell your mom, then proceed north to Route 202.",
          items: [
            item("Pokédex", "From Professor Rowan"),
            item("Parcel", "From Dawn/Lucas for your mom"),
          ],
        },
        {
          name: "Route 202",
          description:
            "Dawn/Lucas teaches you how to catch Pokémon and gives you Poké Balls. This is the first route where you can freely catch wild Pokémon. Shinx is an excellent early Electric-type — grab one if you can!",
          encounters: [
            enc("Starly", 396, ["D", "P"], "Grass", "2-4", "25%"),
            enc("Bidoof", 399, ["D", "P"], "Grass", "2-4", "25%"),
            enc("Shinx", 403, ["D", "P"], "Grass", "3-4", "25%"),
            enc("Kricketot", 401, ["D", "P"], "Grass", "3-4", "25%"),
          ],
          trainers: [
            trn(
              "Youngster",
              "Tristan",
              [pk("Starly", 5, 396)],
              "₽80"
            ),
            trn(
              "Lass",
              "Natalie",
              [pk("Bidoof", 5, 399)],
              "₽80"
            ),
          ],
          items: [
            item("Poké Ball x5", "From Dawn/Lucas"),
          ],
        },
        {
          name: "Jubilife City",
          description:
            "The largest city in Sinnoh so far. Visit the Trainers' School to learn battle mechanics. Meet Looker from the International Police who's investigating Team Galactic. Get the Pokétch from the clown (answer his questions by finding three clowns around town). Head north to Route 204 or east to Route 203.",
          items: [
            item("Pokétch", "From the clown after finding three coupons"),
            item("Town Map", "From your rival's mom (or Dawn/Lucas)"),
            item("Old Rod", "From the fisherman near Route 218 gate"),
          ],
        },
        {
          name: "Route 203",
          description:
            "Head east from Jubilife City. Your rival Barry will challenge you here — he's picked up an extra Pokémon. This route leads to Oreburgh Gate.",
          encounters: [
            enc("Starly", 396, ["D", "P"], "Grass", "4-6", "25%"),
            enc("Shinx", 403, ["D", "P"], "Grass", "4-6", "25%"),
            enc("Bidoof", 399, ["D", "P"], "Grass", "4-5", "15%"),
            enc("Kricketot", 401, ["D", "P"], "Grass", "4-5", "15%"),
            enc("Abra", 63, ["D", "P"], "Grass", "4-6", "10%"),
            enc("Zubat", 41, ["D", "P"], "Grass", "4-6", "10%"),
          ],
          trainers: [
            trn("Rival", "Barry", [
              pk("Starly", 7, 396),
              pk("Turtwig", 9, 387),
            ], "₽540"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Route 204, Ravaged Path, Oreburgh Gate & Oreburgh Gym
     * =============================================================== */
    {
      part: 3,
      title: "Route 204, Oreburgh Gate & Oreburgh Gym",
      summary:
        "Pass through Oreburgh Gate, reach Oreburgh City, and earn the Coal Badge from Roark.",
      locations: [
        {
          name: "Route 204 (South)",
          description:
            "A short route north of Jubilife City leading to the Ravaged Path. Budew is available here during the day and makes a solid Grass-type teammate if you didn't choose Turtwig.",
          encounters: [
            enc("Starly", 396, ["D", "P"], "Grass", "4-6", "25%"),
            enc("Bidoof", 399, ["D", "P"], "Grass", "4-6", "25%"),
            enc("Budew", 406, ["D", "P"], "Grass", "4-6", "25%"),
            enc("Shinx", 403, ["D", "P"], "Grass", "4-5", "15%"),
            enc("Zubat", 41, ["D", "P"], "Grass", "5-6", "10%"),
          ],
        },
        {
          name: "Ravaged Path",
          description:
            "A small cave connecting the two halves of Route 204. You'll need Rock Smash later to fully explore it, but for now just walk through.",
          encounters: [
            enc("Zubat", 41, ["D", "P"], "Cave", "5-8", "50%"),
            enc("Geodude", 74, ["D", "P"], "Cave", "5-7", "30%"),
            enc("Psyduck", 54, ["D", "P"], "Cave", "5-7", "20%"),
          ],
        },
        {
          name: "Oreburgh Gate",
          description:
            "A cave connecting Route 203 to Oreburgh City. A hiker inside gives you HM06 Rock Smash. Geodude is common here and can be useful against the first Gym.",
          encounters: [
            enc("Zubat", 41, ["D", "P"], "Cave", "5-8", "40%"),
            enc("Geodude", 74, ["D", "P"], "Cave", "5-8", "40%"),
            enc("Psyduck", 54, ["D", "P"], "Cave", "6-8", "20%"),
          ],
          items: [
            item("HM06 Rock Smash", "From the hiker inside the cave"),
          ],
        },
        {
          name: "Oreburgh City",
          description:
            "A mining town and home to the first Gym. Roark is at the Oreburgh Mine south of town — talk to him to get him back to the Gym. Visit the Mining Museum. The Oreburgh Mine also has wild Geodude and Onix you can catch.",
          encounters: [
            enc("Geodude", 74, ["D", "P"], "Cave", "5-10", "50%"),
            enc("Zubat", 41, ["D", "P"], "Cave", "6-9", "30%"),
            enc("Onix", 95, ["D", "P"], "Cave", "7-10", "20%"),
          ],
          items: [
            item("Super Potion", "From a man near the Pokémon Center"),
          ],
        },
        {
          name: "Oreburgh Gym — Leader Roark",
          description:
            "Roark specializes in Rock-type Pokémon. Water, Grass, Fighting, and Ground moves are super effective. If you chose Piplup or Turtwig, this gym is straightforward. Chimchar users should catch a Machop in Route 207 or use a Geodude. Roark's Cranidos hits hard with Headbutt — don't underestimate it. Aim for level 14+ before challenging.",
          trainers: [
            trn(
              "Youngster",
              "Jonathon",
              [pk("Geodude", 10, 74)],
              "₽160"
            ),
            trn(
              "Youngster",
              "Darius",
              [pk("Geodude", 8, 74), pk("Onix", 8, 95)],
              "₽128"
            ),
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

    /* ===============================================================
     *  PART 4 — Route 205, Valley Windworks, Eterna Forest & Eterna Gym
     * =============================================================== */
    {
      part: 4,
      title: "Route 205, Valley Windworks, Eterna Forest & Eterna Gym",
      summary:
        "Defeat Team Galactic at Valley Windworks, explore Eterna Forest with Cheryl, and earn the Forest Badge from Gardenia.",
      locations: [
        {
          name: "Route 205 (South)",
          description:
            "Head north from Jubilife to Route 204, through the Ravaged Path, and continue north to Floaroma Town. Floaroma is a flower-filled town. East of town, Team Galactic grunts are blocking the path to Valley Windworks. Defeat the grunts at the Floaroma Meadow to get the Works Key.",
          encounters: [
            enc("Bidoof", 399, ["D", "P"], "Grass", "8-10", "25%"),
            enc("Pachirisu", 417, ["D", "P"], "Grass", "8-11", "20%"),
            enc("Shellos", 422, ["D", "P"], "Grass", "8-10", "20%"),
            enc("Buizel", 418, ["D", "P"], "Grass", "9-11", "20%"),
            enc("Bidoof", 399, ["D", "P"], "Grass", "8-9", "15%"),
          ],
          items: [
            item("Works Key", "From Team Galactic Grunt at Floaroma Meadow"),
            item("Honey", "From the man in Floaroma Meadow"),
          ],
        },
        {
          name: "Valley Windworks",
          description:
            "Use the Works Key to enter. Team Galactic has taken over the power plant. Fight through Galactic grunts and face Commander Mars at the end. Her Purugly is fast and hits hard — be prepared at level 15+. After defeating her, the Windworks returns to normal. On Fridays, Drifloon appears outside at level 22.",
          encounters: [
            enc("Drifloon", 425, ["D", "P"], "Special", "22", "Fridays only"),
          ],
          trainers: [
            trn("Galactic Grunt", "Grunt", [
              pk("Glameow", 11, 431),
            ], "₽440"),
            trn("Galactic Grunt", "Grunt", [
              pk("Zubat", 11, 41),
              pk("Stunky", 11, 434),
            ], "₽440"),
            trn("Galactic Commander", "Mars", [
              pk("Zubat", 15, 41),
              pk("Purugly", 17, 432),
            ], "₽1,360"),
          ],
          items: [
            item("TM24 Thunderbolt", "Valley Windworks interior"),
          ],
        },
        {
          name: "Route 205 (North) & Eterna Forest",
          description:
            "Head north from Floaroma Town on Route 205 toward Eterna Forest. Inside the forest, you'll team up with Cheryl, a Trainer with a Chansey. She heals your Pokémon after every battle, making this an excellent grinding spot. All wild encounters here are doubles while Cheryl is with you. Catch a Buneary or Budew here if you haven't already. Murkrow appears at night in Diamond only; Misdreavus at night in Pearl only.",
          encounters: [
            enc("Budew", 406, ["D", "P"], "Grass", "10-12", "20%"),
            enc("Buneary", 427, ["D", "P"], "Grass", "10-12", "20%"),
            enc("Wurmple", 265, ["D", "P"], "Grass", "10-11", "15%"),
            enc("Silcoon", 266, ["D"], "Grass", "10-11", "10%"),
            enc("Cascoon", 268, ["P"], "Grass", "10-11", "10%"),
            enc("Gastly", 92, ["D", "P"], "Grass", "10-12", "10%"),
            enc("Murkrow", 198, ["D"], "Grass", "10-12", "10% (Night)"),
            enc("Misdreavus", 200, ["P"], "Grass", "10-12", "10% (Night)"),
          ],
        },
        {
          name: "Eterna City",
          description:
            "A city with an imposing Team Galactic building and the second Gym. Explore the city — the Underground Man gives you an Explorer Kit to access the Grand Underground. Cynthia appears and gives you HM01 Cut. You'll need the Forest Badge to use Cut outside of battle.",
          items: [
            item("Explorer Kit", "From the Underground Man"),
            item("HM01 Cut", "From Cynthia"),
          ],
        },
        {
          name: "Eterna Gym — Leader Gardenia",
          description:
            "Gardenia specializes in Grass-type Pokémon. Fire, Ice, Poison, and Flying moves are super effective. Her Roserade is her ace and can be tricky with Grass Knot and Stun Spore. If you chose Chimchar, this gym is easy. Starly/Staravia with Wing Attack also works well. The gym has a hide-and-seek clock puzzle — find trainers hiding behind the clock trees to progress.",
          trainers: [
            trn(
              "Lass",
              "Caroline",
              [pk("Cherubi", 17, 420), pk("Roselia", 17, 315)],
              "₽272"
            ),
            trn(
              "Aroma Lady",
              "Jenna",
              [pk("Budew", 15, 406), pk("Budew", 15, 406), pk("Roselia", 17, 315)],
              "₽408"
            ),
            trn("Gym Leader", "Gardenia", [
              pk("Cherubi", 19, 420),
              pk("Turtwig", 19, 387),
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

    /* ===============================================================
     *  PART 5 — Routes 206-208, Mt. Coronet, Hearthome City & Hearthome Gym
     * =============================================================== */
    {
      part: 5,
      title: "Routes 206-208, Mt. Coronet & Hearthome Gym",
      summary:
        "Travel south through Cycling Road, pass through Mt. Coronet, and earn the Relic Badge from Fantina in Hearthome City.",
      locations: [
        {
          name: "Team Galactic Eterna Building",
          description:
            "Before leaving Eterna City, infiltrate the Galactic Building to rescue the stolen Pokémon. Fight through grunts and Commander Jupiter at the top. After winning, you receive a Bicycle from the Bike Shop owner as thanks.",
          trainers: [
            trn("Galactic Commander", "Jupiter", [
              pk("Zubat", 18, 41),
              pk("Skuntank", 20, 435),
            ], "₽1,600"),
          ],
          items: [
            item("Bicycle", "From the Cycle Shop owner after freeing the Pokémon"),
          ],
        },
        {
          name: "Route 206 — Cycling Road",
          description:
            "A long downhill cycling road heading south from Eterna City. Many trainers line the route. Underneath the cycling road is a hidden area with Gible in Wayward Cave (very rare, but extremely strong). Bronzor and Ponyta appear in the grass beneath the road.",
          encounters: [
            enc("Ponyta", 77, ["D", "P"], "Grass", "14-16", "25%"),
            enc("Kricketune", 402, ["D", "P"], "Grass", "14-16", "20%"),
            enc("Stunky", 434, ["D"], "Grass", "14-16", "20%"),
            enc("Glameow", 431, ["P"], "Grass", "14-16", "20%"),
            enc("Geodude", 74, ["D", "P"], "Grass", "14-16", "20%"),
            enc("Gible", 443, ["D", "P"], "Cave", "15-17", "Wayward Cave (hidden entrance)"),
          ],
          items: [
            item("TM78 Captivate", "Under Cycling Road"),
            item("Razz Berry", "Route 206 Berry patch"),
          ],
        },
        {
          name: "Route 207",
          description:
            "A short route east of Oreburgh City leading to Mt. Coronet. Machop can be caught here — useful Fighting-type.",
          encounters: [
            enc("Machop", 66, ["D", "P"], "Grass", "5-7", "25%"),
            enc("Geodude", 74, ["D", "P"], "Grass", "5-7", "25%"),
            enc("Ponyta", 77, ["D", "P"], "Grass", "6-7", "20%"),
            enc("Kricketot", 401, ["D", "P"], "Grass", "5-6", "30%"),
          ],
        },
        {
          name: "Mt. Coronet (1F, first pass)",
          description:
            "The mountain at the heart of Sinnoh. For now you can only pass through the first floor. You'll return many times as you gain new HMs. Bronzor is common here and makes a sturdy Psychic/Steel team member.",
          encounters: [
            enc("Zubat", 41, ["D", "P"], "Cave", "14-16", "30%"),
            enc("Geodude", 74, ["D", "P"], "Cave", "14-16", "30%"),
            enc("Bronzor", 436, ["D", "P"], "Cave", "14-16", "20%"),
            enc("Meditite", 307, ["D", "P"], "Cave", "15-16", "10%"),
            enc("Chingling", 433, ["D", "P"], "Cave", "14-16", "10%"),
          ],
        },
        {
          name: "Route 208",
          description:
            "A scenic route west of Hearthome City. The Berry Master lives here and gives you berries daily. Roselia and Bibarel can be found in the grass.",
          encounters: [
            enc("Bidoof", 399, ["D", "P"], "Grass", "16-18", "20%"),
            enc("Bibarel", 400, ["D", "P"], "Grass", "17-18", "10%"),
            enc("Roselia", 315, ["D", "P"], "Grass", "16-18", "25%"),
            enc("Zubat", 41, ["D", "P"], "Grass", "16-18", "15%"),
            enc("Ralts", 280, ["D", "P"], "Grass", "16-18", "15%"),
            enc("Machop", 66, ["D", "P"], "Grass", "16-18", "15%"),
          ],
          items: [
            item("Berry Master's berries", "Daily from the Berry Master"),
            item("Odd Keystone", "From a man on Route 208 (for Spiritomb)"),
          ],
        },
        {
          name: "Hearthome City",
          description:
            "A large city with the Contest Hall, the Pokémon Fan Club, and Amity Square. You'll receive a Pokémon Egg containing Happiny from a Hiker near the gate. Bebe gives you an Eevee in the house next to the Pokémon Center. Fantina runs the Gym here but you can challenge her now in Diamond & Pearl (unlike Platinum). The city also has the entrance to the Underground.",
          items: [
            item("Happiny Egg", "From the Hiker at the south gate"),
            item("Eevee", "Gift from Bebe next to the Pokémon Center"),
            item("Poffin Case", "From the Pokémon Fan Club chairman"),
            item("Tuxedo/Dress", "From a woman at the Contest Hall entrance"),
          ],
        },
        {
          name: "Hearthome Gym — Leader Fantina",
          description:
            "Fantina specializes in Ghost-type Pokémon. Dark moves are your best bet — if you have a Murkrow (Diamond) or Stunky, they'll excel here. Normal and Fighting moves won't work on Ghosts! Her Mismagius is dangerous with Shadow Ball and Psybeam. The gym has a math-based door puzzle — follow the correct answers to progress.",
          trainers: [
            trn(
              "Lass",
              "Molly",
              [pk("Gastly", 20, 92), pk("Haunter", 22, 93)],
              "₽352"
            ),
            trn(
              "School Kid",
              "Chance",
              [pk("Drifloon", 22, 425)],
              "₽440"
            ),
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

    /* ===============================================================
     *  PART 6 — Routes 209-210, Solaceon, Route 215 & Veilstone Gym
     * =============================================================== */
    {
      part: 6,
      title: "Routes 209-210, Solaceon Town, Route 215 & Veilstone Gym",
      summary:
        "Visit the Lost Tower and Solaceon Ruins, then head to Veilstone City for the Cobble Badge from Maylene.",
      locations: [
        {
          name: "Route 209",
          description:
            "Head east from Hearthome City. The Lost Tower is here — a memorial for deceased Pokémon, similar to Lavender Tower in Kanto. At the top, two old ladies give you HM04 Strength and a Cleanse Tag. Chansey is rare in the grass here.",
          encounters: [
            enc("Bibarel", 400, ["D", "P"], "Grass", "18-20", "20%"),
            enc("Staravia", 397, ["D", "P"], "Grass", "18-20", "20%"),
            enc("Chansey", 113, ["D", "P"], "Grass", "18-20", "5%"),
            enc("Mime Jr.", 439, ["D", "P"], "Grass", "18-20", "20%"),
            enc("Ralts", 280, ["D", "P"], "Grass", "18-20", "15%"),
            enc("Zubat", 41, ["D", "P"], "Grass", "18-20", "20%"),
          ],
          items: [
            item("HM04 Strength", "From the old woman at the top of Lost Tower"),
            item("Cleanse Tag", "From the old woman at the top of Lost Tower"),
            item("Good Rod", "From the fisherman near the stream"),
          ],
        },
        {
          name: "Solaceon Town",
          description:
            "A quiet town with the Solaceon Ruins and a Day Care. The ruins contain Unown — catch different forms to unlock rewards. The Pokémon Day Care is here, useful for breeding. The Pokémon News Press gives out accessories. A man will give you the Seal Case for decorating Poké Balls.",
          items: [
            item("Seal Case", "From a boy in Solaceon Town"),
            item("Pokémon History app", "Pokétch app from the Pokémon News Press"),
          ],
        },
        {
          name: "Route 210 (South)",
          description:
            "Head north from Solaceon but you can't pass through the Psyduck blocking the path yet. Continue east instead on Route 215 toward Veilstone City.",
          encounters: [
            enc("Staravia", 397, ["D", "P"], "Grass", "19-21", "20%"),
            enc("Chansey", 113, ["D", "P"], "Grass", "19-20", "5%"),
            enc("Geodude", 74, ["D", "P"], "Grass", "19-21", "20%"),
            enc("Ponyta", 77, ["D", "P"], "Grass", "19-21", "20%"),
            enc("Kricketune", 402, ["D", "P"], "Grass", "19-20", "15%"),
            enc("Roselia", 315, ["D", "P"], "Grass", "20-21", "20%"),
          ],
        },
        {
          name: "Route 215",
          description:
            "A rainy route east of Route 210 leading to Veilstone City. The rain is permanent. Kadabra appears here — they're tricky to catch because of Teleport. Stock up on Quick Balls. Lots of trainers, including Black Belts.",
          encounters: [
            enc("Geodude", 74, ["D", "P"], "Grass", "20-22", "20%"),
            enc("Ponyta", 77, ["D", "P"], "Grass", "20-22", "20%"),
            enc("Kadabra", 64, ["D", "P"], "Grass", "20-22", "15%"),
            enc("Kricketune", 402, ["D", "P"], "Grass", "20-22", "20%"),
            enc("Marill", 183, ["D", "P"], "Grass", "20-22", "10%"),
            enc("Abra", 63, ["D", "P"], "Grass", "20-22", "15%"),
          ],
        },
        {
          name: "Veilstone City",
          description:
            "A large city carved into rock. Team Galactic's main HQ is here but you can't enter yet. The Veilstone Department Store has everything you need — stock up on items! The Game Corner has prizes. Talk to the Karate master in a house to receive a Porygon in Diamond/Pearl.",
          items: [
            item("TM63 Embargo", "From a Team Galactic Grunt outside the warehouse"),
            item("Coin Case", "From a clown in a house"),
            item("Porygon", "Gift from a man behind the Pokémon Center"),
          ],
        },
        {
          name: "Veilstone Gym — Leader Maylene",
          description:
            "Maylene uses Fighting-type Pokémon. Flying, Psychic, and Fairy moves are super effective. Her Lucario is a real threat — its Metal Claw covers its Fairy weakness and it has high Attack and Speed. A Staravia with Aerial Ace works wonderfully here. The gym has a sliding-wall puzzle — punch your way through barriers to reach Maylene.",
          trainers: [
            trn(
              "Black Belt",
              "Jeffery",
              [pk("Machoke", 28, 67)],
              "₽672"
            ),
            trn(
              "Black Belt",
              "Colby",
              [pk("Meditite", 26, 307), pk("Machoke", 26, 67)],
              "₽624"
            ),
            trn("Gym Leader", "Maylene", [
              pk("Meditite", 28, 307),
              pk("Machoke", 29, 67),
              pk("Lucario", 32, 448),
            ], "₽3,840 + TM60 (Drain Punch)"),
          ],
          items: [
            item("Cobble Badge", "Defeat Maylene"),
            item("TM60 Drain Punch", "Defeat Maylene"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Routes 213-214, Pastoria City & Pastoria Gym
     * =============================================================== */
    {
      part: 7,
      title: "Routes 213-214, Pastoria City & Pastoria Gym",
      summary:
        "Head south to Pastoria City and earn the Fen Badge from Crasher Wake.",
      locations: [
        {
          name: "Route 214",
          description:
            "Head south from Veilstone City. There's a cave entrance to the Ruin Maniac's Tunnel here, which extends as you catch more Unown. Houndour appears at night (Diamond), Stunky during the day.",
          encounters: [
            enc("Geodude", 74, ["D", "P"], "Grass", "22-24", "20%"),
            enc("Ponyta", 77, ["D", "P"], "Grass", "22-24", "20%"),
            enc("Zubat", 41, ["D", "P"], "Grass", "22-24", "15%"),
            enc("Stunky", 434, ["D"], "Grass", "22-24", "15%"),
            enc("Glameow", 431, ["P"], "Grass", "22-24", "15%"),
            enc("Rhyhorn", 111, ["D", "P"], "Grass", "22-24", "10%"),
            enc("Girafarig", 203, ["D", "P"], "Grass", "22-24", "20%"),
          ],
        },
        {
          name: "Route 213",
          description:
            "A coastal route with beaches leading to Pastoria City. Visit the Hotel Grand Lake for a chat with Dr. Footstep. You can Surf here later for additional encounters. The Footprint Ribbon is available from Dr. Footstep for Pokémon with max friendship.",
          encounters: [
            enc("Wingull", 278, ["D", "P"], "Grass", "22-24", "25%"),
            enc("Buizel", 418, ["D", "P"], "Grass", "22-24", "20%"),
            enc("Shellos", 422, ["D", "P"], "Grass", "22-24", "20%"),
            enc("Chatot", 441, ["D", "P"], "Grass", "22-24", "20%"),
            enc("Floatzel", 419, ["D", "P"], "Surfing", "20-30", "30%"),
          ],
          items: [
            item("TM05 Roar", "Found on the beach"),
          ],
        },
        {
          name: "Pastoria City",
          description:
            "Home of the Great Marsh (Sinnoh's Safari Zone) and Crasher Wake's Gym. Visit the Great Marsh for rare Pokémon — Carnivine, Skorupi, and Croagunk are among the catches. Use the binoculars on the second floor to see what Pokémon are available each day.",
          encounters: [
            enc("Croagunk", 453, ["D", "P"], "Great Marsh", "20-26", "Variable"),
            enc("Skorupi", 451, ["D", "P"], "Great Marsh", "20-26", "Variable"),
            enc("Carnivine", 455, ["D", "P"], "Great Marsh", "20-26", "Variable"),
          ],
          items: [
            item("Great Marsh binoculars", "2F of the Great Marsh entrance"),
          ],
        },
        {
          name: "Pastoria Gym — Leader Crasher Wake",
          description:
            "Crasher Wake uses Water-type Pokémon. Grass and Electric moves are ideal. His Floatzel is fast and has Ice Fang to counter Grass types. An Electric-type like Luxio or a Grass-type like Roselia works great. The gym has a water-level puzzle — press buttons to raise and lower water to create a path to Wake.",
          trainers: [
            trn(
              "Sailor",
              "Damian",
              [pk("Wingull", 26, 278), pk("Shellos", 28, 422)],
              "₽896"
            ),
            trn(
              "Tuber",
              "Carly",
              [pk("Marill", 26, 183), pk("Buizel", 28, 418)],
              "₽112"
            ),
            trn("Gym Leader", "Crasher Wake", [
              pk("Gyarados", 27, 130),
              pk("Quagsire", 27, 195),
              pk("Floatzel", 30, 419),
            ], "₽3,600 + TM55 (Brine)"),
          ],
          items: [
            item("Fen Badge", "Defeat Crasher Wake"),
            item("TM55 Brine", "Defeat Crasher Wake"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Route 212, Celestic Town & Team Galactic HQ
     * =============================================================== */
    {
      part: 8,
      title: "Route 212, Celestic Town & Team Galactic Pursuit",
      summary:
        "Chase Team Galactic through the rainy Route 212, receive HM03 Surf, and explore Celestic Town's ruins.",
      locations: [
        {
          name: "Post-Wake Chase",
          description:
            "After beating Crasher Wake, your rival alerts you that a Team Galactic grunt was spotted near the Great Marsh. Chase the grunt — he'll lead you on a chase through Pastoria City. After cornering him, he drops a Secret Potion. Cynthia appears and asks you to deliver the potion to the Psyduck on Route 210.",
          items: [
            item("HM03 Surf", "From Cynthia's grandmother in Celestic Town (after clearing ruins)"),
            item("SecretPotion", "Dropped by the Galactic Grunt"),
          ],
        },
        {
          name: "Route 212 (South to Pokémon Mansion)",
          description:
            "Head south from Pastoria through the rainy southern section. The Pokémon Mansion is here — talk to Mr. Backlot, who has a trophy garden with rare Pokémon that change daily (Eevee, Porygon, etc.). The route has swampy areas requiring Surf later.",
          encounters: [
            enc("Roselia", 315, ["D", "P"], "Grass", "22-24", "25%"),
            enc("Staravia", 397, ["D", "P"], "Grass", "22-24", "20%"),
            enc("Kricketune", 402, ["D", "P"], "Grass", "22-24", "15%"),
            enc("Budew", 406, ["D", "P"], "Grass", "22-24", "15%"),
            enc("Ralts", 280, ["D", "P"], "Grass", "22-24", "10%"),
            enc("Croagunk", 453, ["D", "P"], "Grass", "24-26", "15%"),
          ],
          items: [
            item("TM06 Toxic", "Near the Pokémon Mansion"),
            item("Soothe Bell", "From a Pokémon breeder in the Mansion"),
          ],
        },
        {
          name: "Route 210 (North) & Celestic Town",
          description:
            "Use the SecretPotion on the Psyduck blocking Route 210. Continue north through the foggy route (use Defog to clear it). Celestic Town is a small historic town. Inside the ruins, a Galactic Grunt tries to blow them up — defeat him. Then Cyrus, the Team Galactic boss, appears and battles you. Cynthia's grandmother gives you HM03 Surf and tells you about the legendary Dialga and Palkia.",
          encounters: [
            enc("Psyduck", 54, ["D", "P"], "Grass", "24-26", "20%"),
            enc("Machoke", 67, ["D", "P"], "Grass", "24-26", "15%"),
            enc("Geodude", 74, ["D", "P"], "Grass", "24-26", "20%"),
            enc("Meditite", 307, ["D", "P"], "Grass", "24-26", "20%"),
            enc("Ponyta", 77, ["D", "P"], "Grass", "24-26", "15%"),
            enc("Noctowl", 164, ["D", "P"], "Grass", "25-26", "10%"),
          ],
          trainers: [
            trn("Galactic Grunt", "Grunt", [
              pk("Beautifly", 25, 267),
              pk("Croagunk", 27, 453),
            ], "₽1,080"),
            trn("Galactic Boss", "Cyrus", [
              pk("Sneasel", 25, 215),
              pk("Golbat", 25, 42),
              pk("Murkrow", 27, 198),
            ], "₽2,700"),
          ],
          items: [
            item("HM03 Surf", "From Cynthia's grandmother after clearing the ruins"),
            item("Old Charm", "Cynthia gives you this to deliver to her grandmother"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Canalave City, Canalave Gym & Iron Island
     * =============================================================== */
    {
      part: 9,
      title: "Canalave City, Canalave Gym & Iron Island",
      summary:
        "Cross the sea to Canalave City, earn the Mine Badge from Byron, and team up with Riley on Iron Island.",
      locations: [
        {
          name: "Canalave City",
          description:
            "Surf west from Jubilife City to reach Canalave City. Your rival Barry challenges you at the bridge. The Canalave Library has important lore about Sinnoh's legendary Pokémon — Professor Rowan and Dawn/Lucas are researching here. A sailor at the dock can take you to Iron Island.",
          trainers: [
            trn("Rival", "Barry", [
              pk("Staravia", 31, 397),
              pk("Buizel", 30, 418),
              pk("Roselia", 30, 315),
              pk("Ponyta", 32, 77),
              pk("Prinplup", 33, 394),
            ], "₽2,640"),
          ],
          items: [
            item("TM48 Skill Swap", "Canalave Library"),
          ],
        },
        {
          name: "Iron Island",
          description:
            "Take the sailor's boat to Iron Island. Inside the cave, you'll team up with Riley and his Lucario — like Cheryl, he heals your team after each battle, making this perfect for training. Fight through Team Galactic grunts who are disturbing the wild Pokémon. At the end, Riley gives you a Riolu Egg as thanks. Riolu evolves into Lucario with high friendship during the day.",
          encounters: [
            enc("Geodude", 74, ["D", "P"], "Cave", "29-31", "25%"),
            enc("Graveler", 75, ["D", "P"], "Cave", "29-31", "20%"),
            enc("Onix", 95, ["D", "P"], "Cave", "30-32", "15%"),
            enc("Steelix", 208, ["D", "P"], "Cave", "31-33", "10%"),
            enc("Golbat", 42, ["D", "P"], "Cave", "29-31", "20%"),
          ],
          trainers: [
            trn("Galactic Grunt", "Grunt", [
              pk("Zubat", 27, 41),
              pk("Glameow", 27, 431),
            ], "₽1,080"),
            trn("Galactic Grunt", "Grunt", [
              pk("Stunky", 25, 434),
              pk("Croagunk", 27, 453),
              pk("Glameow", 25, 431),
            ], "₽1,000"),
          ],
          items: [
            item("Riolu Egg", "Gift from Riley after clearing Iron Island"),
            item("Shiny Stone", "B3F"),
            item("Iron Ball", "B2F"),
          ],
        },
        {
          name: "Canalave Gym — Leader Byron",
          description:
            "Byron is Roark's father and specializes in Steel-type Pokémon. Fire, Fighting, and Ground moves are super effective. His Bastiodon has tremendous defenses — use special attacks or Fighting moves. A Chimchar/Monferno/Infernape trivializes this gym. The gym has moving platform puzzles — ride lifts and navigate elevated walkways to reach Byron.",
          trainers: [
            trn(
              "Worker",
              "Jackson",
              [pk("Onix", 31, 95), pk("Onix", 31, 95)],
              "₽1,240"
            ),
            trn(
              "Worker",
              "Gerardo",
              [pk("Bronzor", 31, 436), pk("Steelix", 33, 208)],
              "₽1,320"
            ),
            trn("Gym Leader", "Byron", [
              pk("Magneton", 36, 82),
              pk("Steelix", 36, 208),
              pk("Bastiodon", 39, 411),
            ], "₽4,680 + TM91 (Flash Cannon)"),
          ],
          items: [
            item("Mine Badge", "Defeat Byron"),
            item("TM91 Flash Cannon", "Defeat Byron"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Lake Events, Snowpoint City & Snowpoint Gym
     * =============================================================== */
    {
      part: 10,
      title: "Lake Trio Events, Snowpoint City & Snowpoint Gym",
      summary:
        "Respond to Team Galactic's attacks on the three lakes, then head to Snowpoint City for the Icicle Badge from Candice.",
      locations: [
        {
          name: "Lake Valor Bombing",
          description:
            "After earning the Mine Badge, a massive explosion rocks Lake Valor — Team Galactic has drained the lake! Rush to Lake Valor via Route 214. Battle through Galactic grunts and face Commander Saturn. Despite your efforts, they capture Azelf, the lake guardian.",
          trainers: [
            trn("Galactic Commander", "Saturn", [
              pk("Kadabra", 35, 64),
              pk("Bronzor", 35, 436),
              pk("Toxicroak", 37, 454),
            ], "₽2,960"),
          ],
        },
        {
          name: "Lake Verity",
          description:
            "Rush back to Lake Verity (your hometown lake). Team Galactic's Commander Mars is here, trying to capture Mesprit. Dawn/Lucas is fighting but losing. Help them by defeating Mars. She succeeds in capturing Mesprit despite your victory.",
          trainers: [
            trn("Galactic Commander", "Mars", [
              pk("Golbat", 37, 42),
              pk("Bronzor", 35, 436),
              pk("Purugly", 37, 432),
            ], "₽2,960"),
          ],
        },
        {
          name: "Route 216 & Route 217",
          description:
            "Head north from Mt. Coronet through the snowy routes to Snowpoint City. These routes feature heavy snowfall and hail. Pick up HM08 Rock Climb from a hiker's house on Route 217. Snover is abundant here — a solid Ice/Grass type.",
          encounters: [
            enc("Snover", 459, ["D", "P"], "Grass", "32-34", "30%"),
            enc("Sneasel", 215, ["D", "P"], "Grass", "33-35", "20%"),
            enc("Medicham", 308, ["D", "P"], "Grass", "32-34", "15%"),
            enc("Meditite", 307, ["D", "P"], "Grass", "32-33", "15%"),
            enc("Machoke", 67, ["D", "P"], "Grass", "32-34", "10%"),
            enc("Zubat", 41, ["D", "P"], "Grass", "32-34", "10%"),
          ],
          items: [
            item("HM08 Rock Climb", "Behind the hiker's house on Route 217"),
            item("Icicle Plate", "Route 217 blizzard area"),
            item("Spell Tag", "Route 217"),
          ],
        },
        {
          name: "Snowpoint City",
          description:
            "A frozen city at the northernmost point of Sinnoh. Snowpoint Temple is here but sealed for now. The Gym is available immediately. Make sure your team is at least level 38+ for Candice.",
        },
        {
          name: "Snowpoint Gym — Leader Candice",
          description:
            "Candice specializes in Ice-type Pokémon. Fire, Fighting, Rock, and Steel moves are super effective. Her Abomasnow sets up Snow Warning (permanent hail), so bring a Fire-type if possible. In Diamond, her fourth Pokémon is Froslass; in Pearl, it's Medicham. The gym has an ice-sliding puzzle — step on snowballs to smash them and create paths.",
          trainers: [
            trn(
              "Ace Trainer",
              "Brenna",
              [pk("Snover", 38, 459), pk("Sneasel", 38, 215)],
              "₽2,280"
            ),
            trn(
              "Ace Trainer",
              "Isaiah",
              [pk("Snover", 36, 459), pk("Sneasel", 36, 215), pk("Tentacruel", 38, 73)],
              "₽2,280"
            ),
            trn("Gym Leader", "Candice", [
              pk("Sneasel", 38, 215),
              pk("Piloswine", 38, 221),
              pk("Abomasnow", 42, 460),
              pk("Froslass", 40, 478),
            ], "₽5,040 + TM72 (Avalanche)"),
          ],
          items: [
            item("Icicle Badge", "Defeat Candice"),
            item("TM72 Avalanche", "Defeat Candice"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Team Galactic HQ, Mt. Coronet & Spear Pillar
     * =============================================================== */
    {
      part: 11,
      title: "Team Galactic HQ, Mt. Coronet & Spear Pillar",
      summary:
        "Infiltrate Team Galactic's Veilstone HQ, ascend Mt. Coronet, and confront Cyrus at Spear Pillar to encounter Dialga or Palkia.",
      locations: [
        {
          name: "Lake Acuity & Team Galactic HQ",
          description:
            "Head to Lake Acuity north of Snowpoint. Commander Jupiter has already captured Uxie and defeated Barry. Fly to Veilstone City to infiltrate Team Galactic's HQ. Use the Storage Key from a grunt outside the warehouse. Navigate through the HQ, battling grunts. Free the three lake Pokémon. Cyrus reveals his plan to use the Red Chain to control Dialga/Palkia and remake the universe.",
          trainers: [
            trn("Galactic Commander", "Jupiter", [
              pk("Golbat", 38, 42),
              pk("Bronzor", 38, 436),
              pk("Skuntank", 40, 435),
            ], "₽3,200"),
            trn("Galactic Boss", "Cyrus", [
              pk("Sneasel", 40, 215),
              pk("Golbat", 40, 42),
              pk("Murkrow", 40, 198),
              pk("Honchkrow", 43, 430),
            ], "₽6,880"),
          ],
          items: [
            item("Storage Key", "From the Galactic Grunt outside the warehouse"),
            item("Galactic Key", "Found inside the HQ"),
            item("TM49 Snatch", "Team Galactic HQ"),
            item("Master Ball", "From Cyrus's office"),
          ],
        },
        {
          name: "Mt. Coronet Summit",
          description:
            "Use Surf, Strength, Rock Smash, and Rock Climb to ascend Mt. Coronet to the peak. This is a long and arduous climb with powerful wild Pokémon. Stock up on Revives and Full Restores. Team Galactic grunts line the path. Commanders Mars and Jupiter team up against you and Barry in a double battle near the top.",
          encounters: [
            enc("Golbat", 42, ["D", "P"], "Cave", "38-40", "30%"),
            enc("Graveler", 75, ["D", "P"], "Cave", "36-40", "25%"),
            enc("Bronzong", 437, ["D", "P"], "Cave", "38-40", "15%"),
            enc("Chingling", 433, ["D", "P"], "Cave", "36-38", "10%"),
            enc("Medicham", 308, ["D", "P"], "Cave", "38-40", "10%"),
            enc("Absol", 359, ["D", "P"], "Cave", "38-40", "10%"),
          ],
          trainers: [
            trn("Galactic Commanders", "Mars & Jupiter (Double Battle)", [
              pk("Bronzor", 38, 436),
              pk("Golbat", 40, 42),
              pk("Purugly", 42, 432),
              pk("Skuntank", 42, 435),
            ], "₽3,360 (with Barry as partner)"),
          ],
        },
        {
          name: "Spear Pillar",
          description:
            "At the very summit of Mt. Coronet. Cyrus uses the Red Chain to summon Dialga (Diamond) or Palkia (Pearl). The lake trio appears to resist but Cyrus overpowers them. Battle Cyrus one final time. After defeating him, the legendary Pokémon remains — approach it and you'll enter battle. Save before interacting! This is your chance to catch Dialga (Lv.47) or Palkia (Lv.47). Use your Master Ball or bring many Ultra Balls and Dusk Balls.",
          trainers: [
            trn("Galactic Boss", "Cyrus", [
              pk("Honchkrow", 45, 430),
              pk("Gyarados", 45, 130),
              pk("Crobat", 46, 169),
              pk("Weavile", 48, 461),
            ], "₽7,680"),
          ],
          items: [
            item("Dialga", "Diamond only — Lv. 47 at Spear Pillar"),
            item("Palkia", "Pearl only — Lv. 47 at Spear Pillar"),
            item("Adamant Orb", "Behind Dialga's position (Diamond)"),
            item("Lustrous Orb", "Behind Palkia's position (Pearl)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Sunyshore City & Sunyshore Gym
     * =============================================================== */
    {
      part: 12,
      title: "Sunyshore City & Sunyshore Gym",
      summary:
        "Head to Sunyshore City, the final gym city, and earn the Beacon Badge from Volkner.",
      locations: [
        {
          name: "Route 222",
          description:
            "Surf east from Pastoria or take the road from Route 213. This coastal route leads to Sunyshore City. Strong trainers and many wild Pokémon are available. Chatot and Floatzel are common here.",
          encounters: [
            enc("Chatot", 441, ["D", "P"], "Grass", "28-30", "25%"),
            enc("Floatzel", 419, ["D", "P"], "Grass", "28-30", "20%"),
            enc("Gastrodon", 423, ["D", "P"], "Grass", "28-30", "15%"),
            enc("Glameow", 431, ["P"], "Grass", "28-30", "15%"),
            enc("Stunky", 434, ["D"], "Grass", "28-30", "15%"),
            enc("Mr. Mime", 122, ["D", "P"], "Grass", "29-30", "10%"),
            enc("Electabuzz", 125, ["D", "P"], "Grass", "29-30", "15%"),
          ],
        },
        {
          name: "Sunyshore City",
          description:
            "A coastal city powered by solar energy with elevated walkways. Volkner, the Gym Leader, has been bored because no strong challengers have appeared. Meeting you excites him enough to reopen the Gym. Visit the Sunyshore Market for Seals and the lighthouse for Jasmine (a guest from Johto). Pick up HM07 Waterfall from a girl on the beach.",
          items: [
            item("HM07 Waterfall", "From the girl on Sunyshore Beach"),
            item("Effort Ribbon", "From a woman in the market area"),
          ],
        },
        {
          name: "Sunyshore Gym — Leader Volkner",
          description:
            "Volkner specializes in Electric-type Pokémon. Ground-type moves will sweep his team. His Luxray is dangerous with Crunch and Thunder Fang. Note that his Octillery and Ambipom are not Electric-types — they're there to surprise you. A Garchomp, Gastrodon, or any Ground-type makes this gym easy. The gym has a gear/switch puzzle — rotate gears to create a path.",
          trainers: [
            trn(
              "Guitarist",
              "Jerry",
              [pk("Luxio", 44, 404), pk("Luxio", 44, 404)],
              "₽1,408"
            ),
            trn(
              "Guitarist",
              "Lonnie",
              [pk("Raichu", 46, 26)],
              "₽1,472"
            ),
            trn("Gym Leader", "Volkner", [
              pk("Raichu", 46, 26),
              pk("Ambipom", 47, 424),
              pk("Octillery", 47, 224),
              pk("Luxray", 49, 405),
            ], "₽5,880 + TM57 (Charge Beam)"),
          ],
          items: [
            item("Beacon Badge", "Defeat Volkner"),
            item("TM57 Charge Beam", "Defeat Volkner"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Victory Road & Pokémon League
     * =============================================================== */
    {
      part: 13,
      title: "Victory Road & the Pokémon League",
      summary:
        "Navigate Victory Road and challenge the Elite Four and Champion Cynthia to become the Champion of Sinnoh.",
      locations: [
        {
          name: "Route 223",
          description:
            "Surf north from Sunyshore City through Route 223. Many swimmers challenge you along the way. Use Waterfall at the end to reach the Pokémon League entrance. Stock up on Revives, Full Restores, and Max Potions.",
          encounters: [
            enc("Tentacruel", 73, ["D", "P"], "Surfing", "30-40", "30%"),
            enc("Pelipper", 279, ["D", "P"], "Surfing", "30-40", "30%"),
            enc("Mantyke", 458, ["D", "P"], "Surfing", "20-30", "20%"),
            enc("Tentacool", 72, ["D", "P"], "Surfing", "20-30", "20%"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "The final gauntlet before the Pokémon League. This multi-floor cave requires Surf, Strength, Rock Smash, Rock Climb, and Waterfall to fully navigate. Powerful trainers and high-level wild Pokémon fill the cave. Your rival Barry challenges you near the exit. Level up to at least 55+ before leaving.",
          encounters: [
            enc("Golbat", 42, ["D", "P"], "Cave", "40-44", "25%"),
            enc("Graveler", 75, ["D", "P"], "Cave", "41-44", "20%"),
            enc("Onix", 95, ["D", "P"], "Cave", "41-44", "15%"),
            enc("Steelix", 208, ["D", "P"], "Cave", "43-45", "10%"),
            enc("Machoke", 67, ["D", "P"], "Cave", "41-44", "15%"),
            enc("Medicham", 308, ["D", "P"], "Cave", "41-44", "15%"),
          ],
          trainers: [
            trn("Rival", "Barry", [
              pk("Staraptor", 48, 398),
              pk("Heracross", 48, 214),
              pk("Floatzel", 49, 419),
              pk("Roserade", 49, 407),
              pk("Rapidash", 49, 78),
              pk("Empoleon", 51, 395),
            ], "₽3,264"),
          ],
          items: [
            item("TM41 Torment", "Victory Road B1F"),
            item("TM71 Stone Edge", "Victory Road 2F"),
            item("Razor Claw", "Victory Road 2F (evolves Sneasel at night)"),
            item("Full Restore", "Victory Road 1F"),
          ],
        },
        {
          name: "Pokémon League — Elite Four & Champion",
          description:
            "The final challenge! Buy Full Restores, Revives, and Max Potions at the Poké Mart. You must defeat all four Elite Four members and Champion Cynthia without visiting a Pokémon Center. Save before entering! Recommended level: 55-60+.",
          trainers: [
            trn("Elite Four", "Aaron", [
              pk("Dustox", 53, 269),
              pk("Beautifly", 53, 267),
              pk("Vespiquen", 54, 416),
              pk("Heracross", 54, 214),
              pk("Drapion", 57, 452),
            ], "Bug specialist — use Fire, Flying, Rock"),
            trn("Elite Four", "Bertha", [
              pk("Quagsire", 55, 195),
              pk("Sudowoodo", 56, 185),
              pk("Golem", 56, 76),
              pk("Whiscash", 55, 340),
              pk("Hippowdon", 59, 450),
            ], "Ground specialist — use Water, Grass, Ice"),
            trn("Elite Four", "Flint", [
              pk("Rapidash", 58, 78),
              pk("Steelix", 57, 208),
              pk("Drifblim", 58, 426),
              pk("Lopunny", 57, 428),
              pk("Infernape", 61, 392),
            ], "Fire specialist — use Water, Ground, Rock"),
            trn("Elite Four", "Lucian", [
              pk("Mr. Mime", 59, 122),
              pk("Girafarig", 56, 203),
              pk("Medicham", 58, 308),
              pk("Alakazam", 60, 65),
              pk("Bronzong", 63, 437),
            ], "Psychic specialist — use Bug, Dark, Ghost"),
            trn("Champion", "Cynthia", [
              pk("Spiritomb", 61, 442),
              pk("Roserade", 60, 407),
              pk("Gastrodon", 60, 423),
              pk("Lucario", 63, 448),
              pk("Milotic", 63, 350),
              pk("Garchomp", 66, 445),
            ], "Mixed team — Garchomp is devastating, use Ice!"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Post-Game
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game — Legendaries, Battle Tower & National Dex",
      summary:
        "Upgrade to the National Pokédex, catch remaining legendaries, and tackle the Battle Tower.",
      isPostGame: true,
      locations: [
        {
          name: "National Pokédex & Pal Park",
          description:
            "After becoming Champion, visit Professor Rowan in Sandgem Town once you've seen all 150 Sinnoh Dex Pokémon. He'll upgrade your Pokédex to the National Dex. Pal Park opens on Route 221 — use it to transfer Pokémon from GBA games (Ruby, Sapphire, Emerald, FireRed, LeafGreen). New areas and Pokémon become available across Sinnoh.",
        },
        {
          name: "Heatran — Stark Mountain",
          description:
            "Fly to the Survival Area (east of the Fight Area). Team up with Buck to navigate Stark Mountain. After clearing the mountain, Buck takes the Magma Stone. Return to the Survival Area, talk to Buck, then go back to Stark Mountain's deepest chamber. Heatran awaits at Level 70. It's Fire/Steel — Ground moves deal 4x damage. Save before the encounter!",
          encounters: [
            enc("Heatran", 485, ["D", "P"], "Special", "70", "One encounter"),
          ],
          items: [
            item("Magma Stone", "Stark Mountain summit (Buck takes and returns it)"),
          ],
        },
        {
          name: "Giratina — Turnback Cave",
          description:
            "Turnback Cave is accessible from Spring Path (Route 214 area). Navigate through this confusing, randomized cave by passing through 30 rooms before hitting 30 pillars. Giratina waits at Level 70 in its Altered Forme. Ghost/Dragon typing makes it weak to Ghost, Dark, Ice, and Dragon. Save before the encounter!",
          encounters: [
            enc("Giratina", 487, ["D", "P"], "Special", "70", "One encounter"),
          ],
        },
        {
          name: "Cresselia — Fullmoon Island",
          description:
            "After getting the National Dex, talk to the sailor in Canalave City. His son is having nightmares. Sail to Fullmoon Island — Cresselia appears and then flees, becoming a roaming Pokémon across Sinnoh at Level 50. Track it with the Pokétch Marking Map. Use Mean Look or a trapping ability to prevent it from fleeing in battle.",
          encounters: [
            enc("Cresselia", 488, ["D", "P"], "Special", "50", "Roaming"),
          ],
          items: [
            item("Lunar Wing", "Fullmoon Island — cures the sailor's son"),
          ],
        },
        {
          name: "Battle Tower & Fight Area",
          description:
            "The Fight Area is northeast of the Pokémon League, accessed by taking the boat from Snowpoint City. The Battle Tower offers competitive-style battles in sets of 7 for Battle Points (BP). Trade BP for rare items, TMs, and held items. Your rival Barry can be battled here on weekends. The Survival Area and Resort Area offer additional post-game content.",
          items: [
            item("Battle Tower access", "Fight Area (after National Dex)"),
            item("BP prizes", "Earn Battle Points for TMs, held items, vitamins"),
          ],
        },
      ],
    },
  ],
};
