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

export const BDSP_WALKTHROUGH: GameWalkthrough = {
  slug: "brilliant-diamond-shining-pearl",
  gameLabel: "Brilliant Diamond & Shining Pearl",
  versionTags: ["BD", "SP"],
  parts: [
    /* ===============================================================
     *  PART 1 — Twinleaf Town & Lake Verity
     * =============================================================== */
    {
      part: 1,
      title: "Twinleaf Town & Lake Verity",
      summary:
        "Begin your Sinnoh journey, witness a wild Starly attack at the lake, and choose your starter.",
      locations: [
        {
          name: "Twinleaf Town",
          description:
            "Your adventure begins at home in Twinleaf Town. Watch the TV news about a red Gyarados, then head to your rival Barry's house next door. He'll rush off to the lake. Before leaving town, check your PC for a Potion. Follow Barry north to Route 201, where Professor Rowan's briefcase awaits at the lake.",
          items: [
            item("Potion", "Your PC at home"),
          ],
        },
        {
          name: "Lake Verity",
          description:
            "At the lake, you and Barry are attacked by wild Starly. Professor Rowan has left his briefcase here. Choose your starter: Turtwig (Grass), Chimchar (Fire), or Piplup (Water). Barry picks the starter with a type advantage against yours. After the battle, return the briefcase to Professor Rowan in Sandgem Town. This is a faithful remake of Diamond & Pearl with updated graphics in a chibi art style and quality-of-life improvements.",
          encounters: [
            enc("Starly", 396, ["BD", "SP"], "Grass", "2-3", "50%"),
            enc("Bidoof", 399, ["BD", "SP"], "Grass", "2-3", "50%"),
          ],
          items: [
            item("Turtwig", "Starter choice from briefcase (Grass type)"),
            item("Chimchar", "Starter choice from briefcase (Fire type)"),
            item("Piplup", "Starter choice from briefcase (Water type)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Sandgem Town, Jubilife City, Routes 202-203
     * =============================================================== */
    {
      part: 2,
      title: "Sandgem Town, Jubilife City & Routes 202-203",
      summary:
        "Return Rowan's briefcase, receive the Pokedex, and travel through Jubilife City.",
      locations: [
        {
          name: "Route 201",
          description:
            "The first route connecting Twinleaf Town to Sandgem Town. Wild encounters are available now that you have a starter. Catch some early Pokemoni to start building your team.",
          encounters: [
            enc("Starly", 396, ["BD", "SP"], "Grass", "2-3", "50%"),
            enc("Bidoof", 399, ["BD", "SP"], "Grass", "2-3", "50%"),
          ],
        },
        {
          name: "Sandgem Town",
          description:
            "Deliver the briefcase to Professor Rowan at his lab. He'll let you keep your starter and gives you the Pokedex. Dawn (or Lucas, depending on your character) will show you around town. Visit the Pokemart and Pokemon Center. Your mom gives you the Journal and running shoes before you head north.",
          items: [
            item("Pokedex", "From Professor Rowan"),
            item("Journal", "From your mom"),
            item("Running Shoes", "From your mom"),
          ],
        },
        {
          name: "Route 202",
          description:
            "Dawn/Lucas teaches you how to catch Pokemon here and gives you Poke Balls. Train your starter and catch a Shinx for excellent Electric-type coverage early on. There are a few trainers along the way.",
          encounters: [
            enc("Starly", 396, ["BD", "SP"], "Grass", "2-4", "25%"),
            enc("Bidoof", 399, ["BD", "SP"], "Grass", "2-4", "25%"),
            enc("Shinx", 403, ["BD", "SP"], "Grass", "3-4", "25%"),
            enc("Kricketot", 401, ["BD", "SP"], "Grass", "3-4", "25%"),
          ],
          trainers: [
            trn("Youngster", "Tristan", [pk("Starly", 5, 396)], "P100"),
            trn("Lass", "Natalie", [pk("Bidoof", 5, 399)], "P100"),
          ],
          items: [
            item("Poke Balls x5", "From Dawn/Lucas"),
          ],
        },
        {
          name: "Jubilife City",
          description:
            "The largest city in Sinnoh. Visit the Trainers' School to learn battle basics and get TM10 Hidden Power. The Poketch Company president gives you the Poketch after finding three clowns around the city. Meet Looker for the first time — he's investigating Team Galactic. Barry challenges you to a rival battle before you leave.",
          trainers: [
            trn("Rival", "Barry", [
              pk("Starly", 7, 396),
              pk("Piplup", 9, 393),
            ], "P540"),
          ],
          items: [
            item("Poketch", "From Poketch Company president (find 3 clowns)"),
            item("TM10 Hidden Power", "Trainers' School"),
            item("Quick Claw", "Jubilife Condominiums"),
          ],
        },
        {
          name: "Route 203",
          description:
            "Head east from Jubilife City toward Oreburgh Gate. Several trainers line this route. Abra can be found here but it immediately Teleports, so throw a Poke Ball on the first turn. This is a good route for grinding before the first gym.",
          encounters: [
            enc("Starly", 396, ["BD", "SP"], "Grass", "4-6", "20%"),
            enc("Shinx", 403, ["BD", "SP"], "Grass", "4-6", "20%"),
            enc("Bidoof", 399, ["BD", "SP"], "Grass", "4-6", "15%"),
            enc("Kricketot", 401, ["BD", "SP"], "Grass", "4-6", "15%"),
            enc("Abra", 63, ["BD", "SP"], "Grass", "4-6", "10%"),
            enc("Zubat", 41, ["BD", "SP"], "Grass", "4-6", "20%"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Oreburgh Gate & Oreburgh Gym
     * =============================================================== */
    {
      part: 3,
      title: "Oreburgh Gate, Oreburgh City & Oreburgh Gym",
      summary:
        "Pass through Oreburgh Gate, explore the mining city, and earn the Coal Badge from Roark.",
      locations: [
        {
          name: "Oreburgh Gate",
          description:
            "A short cave connecting Route 203 to Oreburgh City. Psyduck, Geodude, and Zubat can be found here. You'll need Rock Smash (obtainable later) to fully explore the lower level. For now, just pass through to Oreburgh City.",
          encounters: [
            enc("Zubat", 41, ["BD", "SP"], "Cave", "5-9", "40%"),
            enc("Geodude", 74, ["BD", "SP"], "Cave", "5-8", "40%"),
            enc("Psyduck", 54, ["BD", "SP"], "Cave", "5-7", "20%"),
          ],
        },
        {
          name: "Oreburgh City",
          description:
            "A coal-mining town. Roark is at the Oreburgh Mine when you first arrive — go talk to him there and he'll return to the gym. The mine has Rock Smash rocks and is a good spot to catch Onix or Geodude. Make sure to heal at the Pokemon Center before challenging the gym. If you picked Chimchar, consider catching a Machop on Route 207 for extra coverage.",
          encounters: [
            enc("Geodude", 74, ["BD", "SP"], "Cave", "6-8", "40%"),
            enc("Onix", 95, ["BD", "SP"], "Cave", "6-8", "30%"),
            enc("Zubat", 41, ["BD", "SP"], "Cave", "6-8", "30%"),
          ],
          items: [
            item("Super Potion", "From the hiker in the mine"),
          ],
        },
        {
          name: "Oreburgh Gym - Leader Roark",
          description:
            "Roark specializes in Rock-type Pokemon. Water, Grass, and Fighting moves are super effective. Turtwig and Piplup users have an easy time. Chimchar can learn Mach Punch. One gym trainer stands between you and Roark. His Cranidos hits hard with Headbutt, so don't underestimate it. Win to earn the Coal Badge, which lets you use Rock Smash outside of battle.",
          trainers: [
            trn("Youngster", "Jonathon", [pk("Geodude", 10, 74)], "P200"),
            trn("Youngster", "Darius", [pk("Onix", 10, 95)], "P200"),
            trn(
              "Gym Leader",
              "Roark",
              [
                pk("Geodude", 12, 74),
                pk("Onix", 12, 95),
                pk("Cranidos", 14, 408),
              ],
              "P1,680 + TM76 (Stealth Rock)"
            ),
          ],
          items: [
            item("Coal Badge", "Defeat Roark"),
            item("TM76 Stealth Rock", "Defeat Roark"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 — Valley Windworks, Eterna Forest & Eterna Gym
     * =============================================================== */
    {
      part: 4,
      title: "Valley Windworks, Eterna Forest & Eterna Gym",
      summary:
        "Confront Team Galactic at the Valley Windworks, travel through Eterna Forest, and earn the Forest Badge.",
      locations: [
        {
          name: "Route 204 & Ravaged Path",
          description:
            "Head back west through Jubilife and north on Route 204. The Ravaged Path is a short cave you can partially explore with Rock Smash. Continue north through more grass and trainers to reach Floaroma Town.",
          encounters: [
            enc("Starly", 396, ["BD", "SP"], "Grass", "4-6", "20%"),
            enc("Bidoof", 399, ["BD", "SP"], "Grass", "4-6", "20%"),
            enc("Shinx", 403, ["BD", "SP"], "Grass", "4-6", "15%"),
            enc("Budew", 406, ["BD", "SP"], "Grass", "4-6", "25%"),
            enc("Zubat", 41, ["BD", "SP"], "Grass", "4-6", "20%"),
          ],
        },
        {
          name: "Floaroma Town",
          description:
            "A small flower-filled town. Pick up the Sprayduck watering can and get some accessories at the flower shop. Team Galactic grunts are blocking the entrance to the Valley Windworks to the east and also causing trouble at the Floaroma Meadow to the north. Defeat the grunts at the meadow first to get the Works Key.",
          items: [
            item("Sprayduck", "Flower shop"),
            item("Works Key", "Defeat Galactic Grunts at Floaroma Meadow"),
          ],
        },
        {
          name: "Valley Windworks",
          description:
            "Team Galactic has seized the windmill power plant. Use the Works Key to enter. Battle through Galactic Grunts and face Commander Mars at the end. Her Purugly is surprisingly strong and fast — don't underestimate its Fake Out. After defeating Mars, the windworks is freed. On Fridays, the rare Drifloon appears outside the building.",
          trainers: [
            trn("Galactic Grunt", "Grunt", [pk("Glameow", 11, 431)], "P440"),
            trn("Galactic Grunt", "Grunt", [pk("Zubat", 11, 41), pk("Stunky", 11, 434)], "P440"),
            trn(
              "Galactic Commander",
              "Mars",
              [pk("Zubat", 15, 41), pk("Purugly", 17, 432)],
              "P1,020"
            ),
          ],
          encounters: [
            enc("Shellos", 422, ["BD", "SP"], "Grass", "7-11", "30%"),
            enc("Buizel", 418, ["BD", "SP"], "Grass", "8-11", "30%"),
            enc("Pachirisu", 417, ["BD", "SP"], "Grass", "8-10", "20%"),
            enc("Drifloon", 425, ["BD", "SP"], "Special", "22", "Fridays only"),
          ],
          items: [
            item("TM46 Thief", "Inside the building"),
          ],
        },
        {
          name: "Eterna Forest",
          description:
            "A dense forest between Route 205 and Eterna City. You'll be joined by Cheryl, who heals your team after every battle. This makes it an excellent grinding spot. Double battles occur while she travels with you. Buneary, Wurmple, and Budew are common here. Cheryl leaves at the forest exit.",
          encounters: [
            enc("Wurmple", 265, ["BD", "SP"], "Grass", "10-12", "20%"),
            enc("Silcoon", 266, ["BD", "SP"], "Grass", "10-11", "10%"),
            enc("Cascoon", 268, ["BD", "SP"], "Grass", "10-11", "10%"),
            enc("Budew", 406, ["BD", "SP"], "Grass", "10-12", "20%"),
            enc("Buneary", 427, ["BD", "SP"], "Grass", "10-12", "20%"),
            enc("Gastly", 92, ["BD", "SP"], "Grass", "10-12", "10%"),
            enc("Murkrow", 198, ["BD"], "Grass", "10-12", "10%"),
            enc("Misdreavus", 200, ["SP"], "Grass", "10-12", "10%"),
          ],
          items: [
            item("Antidote", "Northwest clearing"),
            item("Paralyz Heal", "East side of the forest"),
            item("Green Shard", "Hidden near mossy rock"),
          ],
        },
        {
          name: "Eterna City",
          description:
            "Home to the second gym and the Galactic Eterna Building. Visit the Underground Man to get the Explorer Kit for the Grand Underground. Cynthia gives you HM01 Cut in the city. Challenge Gardenia after exploring. Her Roserade is her ace — it has Poison Point and Grass Knot.",
          items: [
            item("HM01 Cut", "From Cynthia"),
            item("Explorer Kit", "From the Underground Man"),
            item("Bicycle", "From Rad Rickshaw after clearing the Galactic Building"),
          ],
        },
        {
          name: "Eterna Gym - Leader Gardenia",
          description:
            "Gardenia specializes in Grass-type Pokemon. Fire, Flying, Ice, and Poison moves are super effective. The gym has a clock-themed puzzle where you need to find trainers hidden behind decorative trees. Her Roserade is Level 22 and can be tricky — bring Starly/Staravia or use Chimchar if you have it.",
          trainers: [
            trn("Aroma Lady", "Jenna", [pk("Budew", 17, 406), pk("Cherubi", 17, 420)], "P680"),
            trn("Aroma Lady", "Angela", [pk("Turtwig", 18, 387)], "P720"),
            trn(
              "Gym Leader",
              "Gardenia",
              [
                pk("Cherubi", 19, 420),
                pk("Turtwig", 19, 387),
                pk("Roserade", 22, 407),
              ],
              "P2,640 + TM86 (Grass Knot)"
            ),
          ],
          items: [
            item("Forest Badge", "Defeat Gardenia"),
            item("TM86 Grass Knot", "Defeat Gardenia"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 — Routes 206-208 & Hearthome Gym
     * =============================================================== */
    {
      part: 5,
      title: "Routes 206-208 & Hearthome Gym",
      summary:
        "Cycle south through Route 206, explore Mt. Coronet's entrance, and battle Fantina for the Relic Badge.",
      locations: [
        {
          name: "Galactic Eterna Building",
          description:
            "Before leaving Eterna City, clear out the Team Galactic building. Battle through grunts and face Commander Jupiter at the top. She uses a Skuntank that can be tough with its Poison/Dark typing. After winning, Rad Rickshaw gives you a Bicycle as thanks for saving his Pokemon.",
          trainers: [
            trn(
              "Galactic Commander",
              "Jupiter",
              [pk("Zubat", 18, 41), pk("Skuntank", 20, 435)],
              "P1,200"
            ),
          ],
        },
        {
          name: "Route 206 (Cycling Road)",
          description:
            "A downhill cycling road heading south from Eterna City. Many trainers challenge you along the route. Below the cycling road is a hidden grass area where you can catch Ponyta and Kricketune. Wayward Cave is underneath Route 206 and has Gible hidden in a secret entrance on the right side.",
          encounters: [
            enc("Ponyta", 77, ["BD", "SP"], "Grass", "14-16", "25%"),
            enc("Kricketune", 402, ["BD", "SP"], "Grass", "14-16", "25%"),
            enc("Stunky", 434, ["BD"], "Grass", "14-16", "25%"),
            enc("Glameow", 431, ["SP"], "Grass", "14-16", "25%"),
            enc("Geodude", 74, ["BD", "SP"], "Grass", "14-16", "25%"),
          ],
          items: [
            item("Poison Barb", "Hidden under the Cycling Road"),
          ],
        },
        {
          name: "Wayward Cave",
          description:
            "A cave under Route 206. The main entrance leads to a puzzle cave where you can find items. There's a hidden entrance (go right from under the cycling road) that leads to a secret section containing Gible. Mira is lost inside and will partner with you in double battles, healing after each fight, making this a great training area.",
          encounters: [
            enc("Zubat", 41, ["BD", "SP"], "Cave", "14-17", "40%"),
            enc("Geodude", 74, ["BD", "SP"], "Cave", "15-17", "40%"),
            enc("Onix", 95, ["BD", "SP"], "Cave", "15-16", "10%"),
            enc("Gible", 443, ["BD", "SP"], "Cave", "15-17", "Secret entrance only, 15%"),
          ],
          items: [
            item("TM26 Earthquake", "B1F (requires Strength later)"),
            item("Rare Candy", "Hidden in secret section"),
          ],
        },
        {
          name: "Route 207 & Mt. Coronet (South Entrance)",
          description:
            "Route 207 leads east to Mt. Coronet. Machop and Meditite can be caught here. The Mt. Coronet south entrance is a short pass-through to Route 208. You'll return to fully explore Mt. Coronet later in the story.",
          encounters: [
            enc("Machop", 66, ["BD", "SP"], "Grass", "5-7", "25%"),
            enc("Geodude", 74, ["BD", "SP"], "Grass", "5-7", "25%"),
            enc("Ponyta", 77, ["BD", "SP"], "Grass", "5-7", "25%"),
            enc("Meditite", 307, ["BD", "SP"], "Cave", "14-16", "30%"),
            enc("Zubat", 41, ["BD", "SP"], "Cave", "14-16", "30%"),
            enc("Chingling", 433, ["BD", "SP"], "Cave", "14-16", "10%"),
          ],
        },
        {
          name: "Route 208 & Hearthome City",
          description:
            "Route 208 connects Mt. Coronet to Hearthome City. You can pick berries along the way. Hearthome City is a large hub with the Contest Hall, Amity Square, and the Pokemon Fan Club. You'll meet Cynthia here, who gives you a Pokemon Egg containing Togepi. Barry will challenge you again. The Hearthome Gym is accessible now.",
          encounters: [
            enc("Bidoof", 399, ["BD", "SP"], "Grass", "16-18", "20%"),
            enc("Bibarel", 400, ["BD", "SP"], "Grass", "17-18", "10%"),
            enc("Zubat", 41, ["BD", "SP"], "Grass", "16-18", "20%"),
            enc("Psyduck", 54, ["BD", "SP"], "Grass", "16-18", "20%"),
            enc("Roselia", 315, ["BD", "SP"], "Grass", "16-18", "20%"),
            enc("Ralts", 280, ["BD", "SP"], "Grass", "16-18", "10%"),
          ],
          items: [
            item("Pokemon Egg (Togepi)", "From Cynthia in Hearthome City"),
            item("Poffin Case", "From Pokemon Fan Club chairman"),
            item("Tuxedo/Dress", "From a lady in the Contest Hall"),
          ],
        },
        {
          name: "Hearthome Gym - Leader Fantina",
          description:
            "Fantina specializes in Ghost-type Pokemon. Dark moves are ideal; Normal and Fighting moves won't work on her team. The gym has a math-puzzle room where you must answer questions to find the right door. Her Mismagius has Psybeam and Shadow Ball. A Luxio with Bite or Murkrow (BD) with Pursuit works well here.",
          trainers: [
            trn("School Kid", "Mackenzie", [pk("Gastly", 22, 92), pk("Gastly", 22, 92)], "P440"),
            trn("Ace Trainer", "Allen", [pk("Haunter", 23, 93)], "P1,380"),
            trn(
              "Gym Leader",
              "Fantina",
              [
                pk("Duskull", 24, 355),
                pk("Haunter", 24, 93),
                pk("Mismagius", 26, 429),
              ],
              "P3,120 + TM65 (Shadow Claw)"
            ),
          ],
          items: [
            item("Relic Badge", "Defeat Fantina"),
            item("TM65 Shadow Claw", "Defeat Fantina"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 — Solaceon Town & Veilstone Gym
     * =============================================================== */
    {
      part: 6,
      title: "Solaceon Town & Veilstone Gym",
      summary:
        "Explore the Solaceon Ruins, travel to Veilstone City, and earn the Cobble Badge from Maylene.",
      locations: [
        {
          name: "Route 209 & Solaceon Town",
          description:
            "Route 209 heads east from Hearthome with many trainers and the Lost Tower, a memorial for Pokemon where you can find Murkrow (BD) or Misdreavus (SP). Solaceon Town has the Day Care Center for breeding and the Solaceon Ruins, which hide the Unown and the Defog HM. Use the Seal Case from a boy in town to customize Poke Ball animations.",
          encounters: [
            enc("Bibarel", 400, ["BD", "SP"], "Grass", "16-20", "20%"),
            enc("Chansey", 113, ["BD", "SP"], "Grass", "16-18", "5%"),
            enc("Staravia", 397, ["BD", "SP"], "Grass", "16-18", "20%"),
            enc("Mime Jr.", 439, ["BD", "SP"], "Grass", "16-18", "20%"),
            enc("Bonsly", 438, ["BD", "SP"], "Grass", "16-18", "20%"),
          ],
          items: [
            item("HM05 Defog", "Solaceon Ruins"),
            item("Seal Case", "Boy in Solaceon Town"),
            item("Nugget", "Hidden in Solaceon Ruins"),
          ],
        },
        {
          name: "Route 210 (South) & Route 215",
          description:
            "Route 210 south is blocked by Psyduck (you'll clear them later). Take Route 215 east to Veilstone City. It rains constantly on Route 215, boosting Water moves. Many trainers line this route. Kadabra can be found here.",
          encounters: [
            enc("Ponyta", 77, ["BD", "SP"], "Grass", "19-22", "20%"),
            enc("Kadabra", 64, ["BD", "SP"], "Grass", "20-22", "10%"),
            enc("Geodude", 74, ["BD", "SP"], "Grass", "19-22", "20%"),
            enc("Marill", 183, ["BD", "SP"], "Grass", "19-22", "20%"),
            enc("Lickitung", 108, ["BD", "SP"], "Grass", "19-22", "10%"),
          ],
        },
        {
          name: "Veilstone City",
          description:
            "A city built from stone, home to the Veilstone Department Store and the Game Corner. The department store is the best shop in Sinnoh — stock up on everything. Team Galactic has a warehouse here you'll investigate later. Dawn/Lucas will give you the Vs. Seeker and the Dowsing Machine after meeting them at the entrance.",
          items: [
            item("Vs. Seeker", "From Dawn/Lucas"),
            item("Dowsing Machine Poketch App", "From Dawn/Lucas"),
            item("TM63 Embargo", "From Team Galactic warehouse"),
            item("HM02 Fly", "From Team Galactic warehouse (after clearing grunts with Dawn/Lucas)"),
          ],
        },
        {
          name: "Veilstone Gym - Leader Maylene",
          description:
            "Maylene specializes in Fighting-type Pokemon. Flying, Psychic, and Fairy moves are super effective. The gym has a punching-bag puzzle where you move walls by pushing bags. Her Lucario is powerful with Metal Claw and Drain Punch. A Staravia with Aerial Ace or Kadabra with Psybeam can handle her team. Bring healing items for Lucario.",
          trainers: [
            trn("Black Belt", "Colby", [pk("Machoke", 27, 67)], "P864"),
            trn("Black Belt", "Darren", [pk("Meditite", 26, 307), pk("Machoke", 26, 67)], "P832"),
            trn(
              "Gym Leader",
              "Maylene",
              [
                pk("Meditite", 28, 307),
                pk("Machoke", 29, 67),
                pk("Lucario", 32, 448),
              ],
              "P3,840 + TM60 (Drain Punch)"
            ),
          ],
          items: [
            item("Cobble Badge", "Defeat Maylene"),
            item("TM60 Drain Punch", "Defeat Maylene"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Pastoria Gym
     * =============================================================== */
    {
      part: 7,
      title: "Pastoria City & Pastoria Gym",
      summary:
        "Travel to the marsh city of Pastoria and earn the Fen Badge from Crasher Wake.",
      locations: [
        {
          name: "Route 212 & Route 213",
          description:
            "Head south from Veilstone City through Route 214 and Route 213 to reach Pastoria City. Route 213 runs along the beach with a few trainers. Stop by the Footstep house and Hotel Grand Lake. The Great Marsh in Pastoria functions like the Safari Zone, letting you catch rare Pokemon including Skorupi and Carnivine.",
          encounters: [
            enc("Shellos", 422, ["BD", "SP"], "Grass", "20-24", "25%"),
            enc("Chatot", 441, ["BD", "SP"], "Grass", "20-22", "20%"),
            enc("Wingull", 278, ["BD", "SP"], "Grass", "20-22", "20%"),
            enc("Roselia", 315, ["BD", "SP"], "Grass", "20-22", "20%"),
            enc("Buizel", 418, ["BD", "SP"], "Grass", "20-24", "15%"),
          ],
        },
        {
          name: "Pastoria Great Marsh (Safari Game)",
          description:
            "Pastoria's Great Marsh works like the Safari Zone. Pay 500 Poke Dollars for 30 Safari Balls. Use the binoculars upstairs to check which Pokemon are available daily. Carnivine, Skorupi, Croagunk, and Tropius are among the rare catches. The marsh is divided into areas you unlock with HMs later.",
          encounters: [
            enc("Wooper", 194, ["BD", "SP"], "Grass", "20-26", "20%"),
            enc("Quagsire", 195, ["BD", "SP"], "Grass", "22-28", "10%"),
            enc("Bibarel", 400, ["BD", "SP"], "Grass", "20-26", "15%"),
            enc("Skorupi", 451, ["BD", "SP"], "Grass", "20-26", "20%"),
            enc("Croagunk", 453, ["BD", "SP"], "Grass", "20-26", "20%"),
            enc("Carnivine", 455, ["BD", "SP"], "Grass", "20-26", "15%"),
          ],
        },
        {
          name: "Pastoria Gym - Leader Crasher Wake",
          description:
            "Crasher Wake specializes in Water-type Pokemon. Grass and Electric moves are super effective. The gym has a water-level puzzle where you raise and lower water by pressing buttons. His Floatzel is fast with Aqua Jet. A Luxio/Luxray with Spark or Roselia with Giga Drain works well. His Gyarados is Water/Flying, so Electric is 4x effective.",
          trainers: [
            trn("Tuber", "Jacky", [pk("Buizel", 25, 418)], "P100"),
            trn("Sailor", "Damian", [pk("Shellos", 24, 422), pk("Wingull", 26, 278)], "P832"),
            trn(
              "Gym Leader",
              "Crasher Wake",
              [
                pk("Gyarados", 27, 130),
                pk("Quagsire", 27, 195),
                pk("Floatzel", 30, 419),
              ],
              "P3,600 + TM55 (Brine)"
            ),
          ],
          items: [
            item("Fen Badge", "Defeat Crasher Wake"),
            item("TM55 Brine", "Defeat Crasher Wake"),
          ],
        },
        {
          name: "Pastoria City - Team Galactic Chase",
          description:
            "After the gym battle, a Team Galactic Grunt is spotted near the Great Marsh. Chase him through the city and north on Route 213. You'll encounter Barry, who challenges you again. Then meet Cynthia, who gives you the SecretPotion to cure the Psyduck blocking Route 210. This opens up the northern half of Sinnoh.",
          trainers: [
            trn("Rival", "Barry", [
              pk("Staravia", 26, 397),
              pk("Buizel", 25, 418),
              pk("Roselia", 25, 315),
              pk("Prinplup", 28, 394),
            ], "P1,680"),
          ],
          items: [
            item("SecretPotion", "From Cynthia"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Celestic Town & Canalave Gym
     * =============================================================== */
    {
      part: 8,
      title: "Celestic Town & Canalave Gym",
      summary:
        "Clear the Psyduck, visit the ancient Celestic Town, and earn the Mine Badge from Byron.",
      locations: [
        {
          name: "Route 210 (North) & Celestic Town",
          description:
            "Use the SecretPotion on the Psyduck blocking Route 210 north. The foggy route requires Defog. Navigate through the tall grass and trainers to reach Celestic Town. This small historic town has ruins depicting Dialga and Palkia. A Team Galactic Grunt tries to blow up the ruins — defeat him and Cyrus appears, revealing his ambitions. Cynthia's grandmother gives you HM03 Surf.",
          encounters: [
            enc("Psyduck", 54, ["BD", "SP"], "Grass", "20-23", "20%"),
            enc("Machop", 66, ["BD", "SP"], "Grass", "19-22", "15%"),
            enc("Machoke", 67, ["BD", "SP"], "Grass", "22-24", "5%"),
            enc("Meditite", 307, ["BD", "SP"], "Grass", "20-22", "15%"),
            enc("Geodude", 74, ["BD", "SP"], "Grass", "19-22", "20%"),
            enc("Ponyta", 77, ["BD", "SP"], "Grass", "19-22", "15%"),
            enc("Scyther", 123, ["BD"], "Grass", "20-22", "5%"),
            enc("Pinsir", 127, ["SP"], "Grass", "20-22", "5%"),
          ],
          trainers: [
            trn("Galactic Grunt", "Grunt", [pk("Beautifly", 25, 267), pk("Croagunk", 27, 453)], "P1,080"),
          ],
          items: [
            item("HM03 Surf", "From Cynthia's grandmother in Celestic Town"),
            item("Analog Watch Poketch App", "From a man in Celestic Town"),
          ],
        },
        {
          name: "Route 218 & Canalave City",
          description:
            "Fly back to Jubilife City and surf west on Route 218 to reach Canalave City. Barry meets you at the bridge and immediately challenges you to a battle. The Canalave Library has books about Sinnoh's legendary Pokemon. Iron Island is accessible by boat from here — visit before or after the gym.",
          encounters: [
            enc("Tentacool", 72, ["BD", "SP"], "Surfing", "20-30", "60%"),
            enc("Wingull", 278, ["BD", "SP"], "Surfing", "20-30", "30%"),
            enc("Tentacruel", 73, ["BD", "SP"], "Surfing", "20-30", "10%"),
            enc("Mr. Mime", 122, ["BD", "SP"], "Grass", "28-30", "25%"),
            enc("Floatzel", 419, ["BD", "SP"], "Grass", "28-30", "25%"),
            enc("Gastrodon", 423, ["BD", "SP"], "Grass", "28-30", "20%"),
          ],
          trainers: [
            trn("Rival", "Barry", [
              pk("Staravia", 31, 397),
              pk("Buizel", 30, 418),
              pk("Roselia", 30, 315),
              pk("Prinplup", 33, 394),
            ], "P1,980"),
          ],
        },
        {
          name: "Canalave Gym - Leader Byron",
          description:
            "Byron is Roark's father and specializes in Steel-type Pokemon. Fire, Fighting, and Ground moves are super effective. The gym has a series of moving elevators/platforms. His Bastiodon has incredible Defense but low Special Defense — use special Fire or Ground moves. His Steelix knows Earthquake which can hurt. A Monferno or Machoke work great here.",
          trainers: [
            trn("Worker", "Jackson", [pk("Onix", 31, 95), pk("Onix", 33, 95)], "P1,320"),
            trn("Worker", "Gerardo", [pk("Steelix", 34, 208)], "P1,360"),
            trn(
              "Gym Leader",
              "Byron",
              [
                pk("Magneton", 36, 82),
                pk("Steelix", 36, 208),
                pk("Bastiodon", 39, 411),
              ],
              "P4,680 + TM91 (Flash Cannon)"
            ),
          ],
          items: [
            item("Mine Badge", "Defeat Byron"),
            item("TM91 Flash Cannon", "Defeat Byron"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Iron Island, Lake Events & Snowpoint Gym
     * =============================================================== */
    {
      part: 9,
      title: "Iron Island, Lake Events & Snowpoint Gym",
      summary:
        "Explore Iron Island for a Riolu egg, respond to the lake crisis, and earn the Icicle Badge.",
      locations: [
        {
          name: "Iron Island",
          description:
            "Take the boat from Canalave City. Iron Island is a cave crawling with Steel and Rock types. You'll partner with Riley, a trainer using Lucario, for double battles inside — he heals your team after each fight. After clearing all the Galactic Grunts, Riley gives you a Riolu Egg. This is the only way to get Riolu before post-game.",
          encounters: [
            enc("Geodude", 74, ["BD", "SP"], "Cave", "29-32", "20%"),
            enc("Graveler", 75, ["BD", "SP"], "Cave", "30-32", "10%"),
            enc("Onix", 95, ["BD", "SP"], "Cave", "30-32", "20%"),
            enc("Steelix", 208, ["BD", "SP"], "Cave", "30-32", "10%"),
            enc("Golbat", 42, ["BD", "SP"], "Cave", "29-32", "20%"),
          ],
          trainers: [
            trn("Galactic Grunt", "Grunt", [pk("Zubat", 25, 41), pk("Glameow", 27, 431)], "P1,080"),
            trn("Galactic Grunt", "Grunt", [pk("Stunky", 25, 434), pk("Golbat", 27, 42)], "P1,080"),
          ],
          items: [
            item("Riolu Egg", "Gift from Riley after clearing the cave"),
            item("Shiny Stone", "Hidden on B2F"),
            item("Iron Plate", "B3F"),
          ],
        },
        {
          name: "Lake Events — Lake Valor & Lake Verity",
          description:
            "After leaving Canalave, a massive explosion rocks Lake Valor. Team Galactic has drained the lake and captured the legendary Azelf. Rush to Lake Valor and defeat Commander Saturn. Then fly to Twinleaf Town — Lake Verity is under attack too. Dawn/Lucas and Professor Rowan are fighting Commander Mars. Help them battle Mars. After both events, the third lake commander (Jupiter) has already captured Uxie at Lake Acuity near Snowpoint City. Head to Snowpoint to continue the story.",
          trainers: [
            trn(
              "Galactic Commander",
              "Saturn",
              [pk("Kadabra", 35, 64), pk("Bronzor", 35, 436), pk("Toxicroak", 37, 454)],
              "P2,220"
            ),
            trn(
              "Galactic Commander",
              "Mars",
              [pk("Golbat", 37, 42), pk("Bronzor", 37, 436), pk("Purugly", 39, 432)],
              "P2,340"
            ),
          ],
        },
        {
          name: "Route 216, Route 217 & Snowpoint City",
          description:
            "Travel north from Eterna City through Mt. Coronet's middle section to reach the snow routes. Route 216 and 217 have blizzard conditions that slow you down. Snover and Sneasel are common. Find HM08 Rock Climb in Route 217 in a blizzard. Snowpoint City has the temple for Regigigas (post-game) and the gym.",
          encounters: [
            enc("Snover", 459, ["BD", "SP"], "Grass", "32-35", "30%"),
            enc("Sneasel", 215, ["BD", "SP"], "Grass", "33-35", "20%"),
            enc("Medicham", 308, ["BD", "SP"], "Grass", "32-35", "20%"),
            enc("Machoke", 67, ["BD", "SP"], "Grass", "32-35", "15%"),
            enc("Swinub", 220, ["BD", "SP"], "Grass", "32-34", "15%"),
          ],
          items: [
            item("HM08 Rock Climb", "Hidden behind a house on Route 217"),
            item("Icicle Plate", "Route 217"),
            item("NeverMeltIce", "From a sailor in Snowpoint City"),
          ],
        },
        {
          name: "Snowpoint Gym - Leader Candice",
          description:
            "Candice specializes in Ice-type Pokemon. Fire, Fighting, Rock, and Steel moves are super effective. The gym has a sliding ice puzzle where you must navigate slippery floors. Her ace Froslass is Ice/Ghost and has Snow Cloak for evasion in hail. Abomasnow sets up Hail with Snow Warning. Infernape, Rapidash, or Lucario are great counters.",
          trainers: [
            trn("Ace Trainer", "Brenna", [pk("Snover", 36, 459), pk("Sneasel", 38, 215)], "P2,280"),
            trn("Ace Trainer", "Sergio", [pk("Snover", 36, 459), pk("Piloswine", 38, 221)], "P2,280"),
            trn(
              "Gym Leader",
              "Candice",
              [
                pk("Sneasel", 38, 215),
                pk("Piloswine", 38, 221),
                pk("Abomasnow", 42, 460),
                pk("Froslass", 40, 478),
              ],
              "P5,040 + TM72 (Avalanche)"
            ),
          ],
          items: [
            item("Icicle Badge", "Defeat Candice"),
            item("TM72 Avalanche", "Defeat Candice"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Team Galactic HQ, Mt. Coronet & Spear Pillar
     * =============================================================== */
    {
      part: 10,
      title: "Team Galactic HQ, Mt. Coronet & Spear Pillar",
      summary:
        "Infiltrate Team Galactic's Veilstone headquarters, ascend Mt. Coronet, and encounter Dialga or Palkia.",
      locations: [
        {
          name: "Team Galactic HQ — Veilstone City",
          description:
            "Use the Storage Key to enter Team Galactic's headquarters in Veilstone. Battle through numerous grunts across multiple floors. Free the three Lake Pokemon (Azelf, Mesprit, Uxie) and get the Master Ball from Cyrus's office. Commander Saturn guards the way — defeat him. This is a long dungeon, bring lots of healing items.",
          trainers: [
            trn("Galactic Grunt", "Grunt", [pk("Golbat", 34, 42), pk("Stunky", 32, 434)], "P1,280"),
            trn(
              "Galactic Commander",
              "Saturn",
              [pk("Kadabra", 38, 64), pk("Bronzor", 38, 436), pk("Toxicroak", 40, 454)],
              "P2,400"
            ),
          ],
          items: [
            item("Master Ball", "Found in Cyrus's office"),
            item("Dusk Stone", "B2F"),
            item("Galactic Key", "From a grunt on 2F"),
          ],
        },
        {
          name: "Mt. Coronet — Full Ascent",
          description:
            "The full climb of Mt. Coronet requires Surf, Strength, Rock Climb, and Rock Smash. Enter from the Route 207 side and work your way up through multiple cave floors. Galactic Grunts are posted throughout. The cave is long and winding — stock up on Repels and healing. Bronzong and Clefairy appear in the upper sections.",
          encounters: [
            enc("Golbat", 42, ["BD", "SP"], "Cave", "36-40", "25%"),
            enc("Graveler", 75, ["BD", "SP"], "Cave", "36-40", "20%"),
            enc("Medicham", 308, ["BD", "SP"], "Cave", "36-40", "15%"),
            enc("Bronzong", 437, ["BD", "SP"], "Cave", "37-39", "10%"),
            enc("Clefairy", 35, ["BD", "SP"], "Cave", "36-38", "10%"),
            enc("Chingling", 433, ["BD", "SP"], "Cave", "36-38", "10%"),
            enc("Absol", 359, ["BD", "SP"], "Cave", "38-40", "10%"),
          ],
          items: [
            item("TM02 Dragon Claw", "Upper floors"),
            item("Lustrous Orb", "Upper floors (SP only)"),
            item("Adamant Orb", "Upper floors (BD only)"),
          ],
        },
        {
          name: "Spear Pillar",
          description:
            "The summit of Mt. Coronet. Cyrus has summoned Dialga (Brilliant Diamond) or Palkia (Shining Pearl) using the Red Chain. Battle through the last Galactic Grunts, then fight Commander Mars and Commander Jupiter in a double battle alongside Barry. Finally, confront Cyrus in one last battle. After defeating him, the legendary Pokemon remains — you must battle and catch Dialga (BD) or Palkia (SP). Save before this encounter! Use the Master Ball if you wish, or bring many Ultra Balls. The Lake trio will assist by calming the distortion.",
          trainers: [
            trn("Galactic Grunt", "Grunt", [pk("Golbat", 38, 42), pk("Bronzor", 38, 436)], "P1,520"),
            trn(
              "Galactic Boss",
              "Cyrus",
              [
                pk("Honchkrow", 45, 430),
                pk("Gyarados", 45, 130),
                pk("Crobat", 46, 169),
                pk("Weavile", 48, 461),
              ],
              "P7,680"
            ),
          ],
          encounters: [
            enc("Dialga", 483, ["BD"], "Special", "47", "Story encounter"),
            enc("Palkia", 484, ["SP"], "Special", "47", "Story encounter"),
          ],
          items: [
            item("Adamant Orb", "After catching Dialga (BD)"),
            item("Lustrous Orb", "After catching Palkia (SP)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Sunyshore Gym
     * =============================================================== */
    {
      part: 11,
      title: "Sunyshore City & Sunyshore Gym",
      summary:
        "Travel to the final gym city on the coast and earn the Beacon Badge from Volkner.",
      locations: [
        {
          name: "Route 222 & Sunyshore City",
          description:
            "With Dialga/Palkia calmed, the blackout in Sunyshore City is over. Fly to Pastoria and head east through Route 222 to reach the seaside city. Sunyshore has elevated solar-powered walkways. Visit the Sunyshore Market for useful held items. Volkner is bored from winning too much — challenge him for the last badge. Jasmine from Johto is visiting at the lighthouse.",
          encounters: [
            enc("Magnemite", 81, ["BD", "SP"], "Grass", "40-42", "20%"),
            enc("Electabuzz", 125, ["BD", "SP"], "Grass", "40-42", "10%"),
            enc("Luxio", 404, ["BD", "SP"], "Grass", "40-42", "20%"),
            enc("Chatot", 441, ["BD", "SP"], "Grass", "40-42", "20%"),
            enc("Mr. Mime", 122, ["BD", "SP"], "Grass", "40-42", "15%"),
            enc("Floatzel", 419, ["BD", "SP"], "Grass", "40-42", "15%"),
          ],
          items: [
            item("HM07 Waterfall", "From Jasmine at Vista Lighthouse"),
          ],
        },
        {
          name: "Sunyshore Gym - Leader Volkner",
          description:
            "Volkner specializes in Electric-type Pokemon, though his team has mixed coverage. The gym has a rotating gear puzzle — turn gears to create a path to the leader. His Luxray is powerful with Ice Fang and Crunch for coverage. Ambipom and Octillery are not Electric-types, so adjust your strategy. Ground-types like Garchomp, Gastrodon, or Hippowdon wall his team effectively.",
          trainers: [
            trn("Guitarist", "Jerry", [pk("Luxio", 44, 404), pk("Raichu", 44, 26)], "P1,408"),
            trn("Guitarist", "Preston", [pk("Magneton", 44, 82), pk("Electabuzz", 44, 125)], "P1,408"),
            trn(
              "Gym Leader",
              "Volkner",
              [
                pk("Raichu", 46, 26),
                pk("Ambipom", 47, 424),
                pk("Octillery", 47, 224),
                pk("Luxray", 49, 405),
              ],
              "P5,880 + TM57 (Charge Beam)"
            ),
          ],
          items: [
            item("Beacon Badge", "Defeat Volkner"),
            item("TM57 Charge Beam", "Defeat Volkner"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Victory Road & Pokemon League
     * =============================================================== */
    {
      part: 12,
      title: "Victory Road & Pokemon League",
      summary:
        "Navigate Victory Road, challenge the Elite Four, and face Champion Cynthia.",
      locations: [
        {
          name: "Route 223 & Victory Road",
          description:
            "Surf north from Sunyshore City through Route 223 to reach the Pokemon League. Victory Road is a large cave requiring Surf, Strength, Rock Smash, Rock Climb, and Defog. Strong wild Pokemon and trainers await. Barry challenges you one final time before the entrance. Make sure your team is at least Level 55-60 before entering the Pokemon League.",
          encounters: [
            enc("Golbat", 42, ["BD", "SP"], "Cave", "40-44", "20%"),
            enc("Graveler", 75, ["BD", "SP"], "Cave", "40-44", "20%"),
            enc("Onix", 95, ["BD", "SP"], "Cave", "41-44", "15%"),
            enc("Steelix", 208, ["BD", "SP"], "Cave", "44-46", "5%"),
            enc("Machoke", 67, ["BD", "SP"], "Cave", "41-44", "15%"),
            enc("Medicham", 308, ["BD", "SP"], "Cave", "41-44", "15%"),
            enc("Rhyhorn", 111, ["BD", "SP"], "Cave", "41-44", "10%"),
          ],
          trainers: [
            trn("Rival", "Barry", [
              pk("Staraptor", 48, 398),
              pk("Heracross", 48, 214),
              pk("Floatzel", 49, 419),
              pk("Roserade", 49, 407),
              pk("Snorlax", 51, 143),
              pk("Empoleon", 53, 395),
            ], "P3,180"),
          ],
          items: [
            item("TM41 Torment", "Victory Road 1F"),
            item("Full Restore", "Victory Road 2F"),
            item("Razor Claw", "Victory Road B1F"),
          ],
        },
        {
          name: "Pokemon League",
          description:
            "Stock up on Full Restores, Revives, and Max Potions at the Poke Mart. You must defeat all four Elite Four members and Champion Cynthia in a row. Save before entering! The BDSP Elite Four and Cynthia in their initial fight use the same teams as the original Diamond/Pearl. Cynthia's Garchomp is the biggest threat — an Ice move is essential. Recommended level: 58-65.",
          trainers: [
            trn(
              "Elite Four",
              "Aaron",
              [
                pk("Dustox", 53, 269),
                pk("Beautifly", 53, 267),
                pk("Vespiquen", 54, 416),
                pk("Heracross", 54, 214),
                pk("Drapion", 57, 452),
              ],
              "Bug specialist - use Fire, Flying, Rock"
            ),
            trn(
              "Elite Four",
              "Bertha",
              [
                pk("Quagsire", 55, 195),
                pk("Sudowoodo", 56, 185),
                pk("Golem", 56, 76),
                pk("Whiscash", 55, 340),
                pk("Hippowdon", 59, 450),
              ],
              "Ground specialist - use Water, Grass, Ice"
            ),
            trn(
              "Elite Four",
              "Flint",
              [
                pk("Rapidash", 58, 78),
                pk("Steelix", 57, 208),
                pk("Drifblim", 58, 426),
                pk("Lopunny", 57, 428),
                pk("Infernape", 61, 392),
              ],
              "Fire specialist - use Water, Ground, Rock"
            ),
            trn(
              "Elite Four",
              "Lucian",
              [
                pk("Mr. Mime", 59, 122),
                pk("Espeon", 58, 196),
                pk("Bronzong", 60, 437),
                pk("Alakazam", 60, 65),
                pk("Gallade", 63, 475),
              ],
              "Psychic specialist - use Dark, Bug, Ghost"
            ),
            trn(
              "Champion",
              "Cynthia",
              [
                pk("Spiritomb", 61, 442),
                pk("Roserade", 60, 407),
                pk("Gastrodon", 60, 423),
                pk("Lucario", 63, 448),
                pk("Milotic", 63, 350),
                pk("Garchomp", 66, 445),
              ],
              "Mixed team - Ice moves essential for Garchomp"
            ),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Post-Game: Grand Underground & Ramanas Park
     * =============================================================== */
    {
      part: 13,
      title: "Post-Game: Grand Underground & Ramanas Park",
      summary:
        "Explore Pokemon Hideaways in the Grand Underground and catch legendaries at Ramanas Park.",
      isPostGame: true,
      locations: [
        {
          name: "Grand Underground - Pokemon Hideaways",
          description:
            "After entering the Hall of Fame, the Grand Underground expands significantly. Pokemon Hideaways are themed rooms where wild Pokemon appear visibly. Unlike the original Underground, these Hideaways contain Pokemon from all generations based on the statues you place in your Secret Base. Rare Pokemon like Ditto, Eevee, and many starters' evolved forms become available. Place statues of certain types to attract specific Pokemon. Fossil Pokemon can also appear in the Underground.",
          encounters: [
            enc("Eevee", 133, ["BD", "SP"], "Hideaway", "16-63", "Varies by statue setup"),
            enc("Ditto", 132, ["BD", "SP"], "Hideaway", "16-63", "Varies by statue setup"),
            enc("Ralts", 280, ["BD", "SP"], "Hideaway", "16-63", "Spacious Cave, Dazzling Cave"),
            enc("Houndoom", 229, ["BD", "SP"], "Hideaway", "16-63", "Volcanic Cave (Fire statues)"),
            enc("Absol", 359, ["BD", "SP"], "Hideaway", "16-63", "Spacious Cave, Dazzling Cave"),
            enc("Larvitar", 246, ["BD"], "Hideaway", "16-63", "Rocky Cave, Big Bluff Cavern"),
            enc("Bagon", 371, ["SP"], "Hideaway", "16-63", "Rocky Cave, Big Bluff Cavern"),
            enc("Togepi", 175, ["BD", "SP"], "Hideaway", "16-63", "Fountainspring Cave"),
            enc("Spiritomb", 442, ["BD", "SP"], "Hideaway", "16-63", "Dazzling Cave (rare)"),
          ],
        },
        {
          name: "Ramanas Park",
          description:
            "Located on Route 221, Ramanas Park replaces Pal Park from the originals. Use Discovery Slates (from mining in the Grand Underground) to encounter legendary Pokemon from past generations. Brilliant Diamond gets the Johto legendaries (Raikou, Entei, Suicune, Ho-Oh) while Shining Pearl gets the Hoenn legendaries (Regirock, Regice, Registeel, Latias, Latios, Kyogre). Both versions can catch Mewtwo and Rayquaza after obtaining the required slates.",
          encounters: [
            enc("Raikou", 243, ["BD"], "Special", "70", "Johto Slate"),
            enc("Entei", 244, ["BD"], "Special", "70", "Johto Slate"),
            enc("Suicune", 245, ["BD"], "Special", "70", "Johto Slate"),
            enc("Ho-Oh", 250, ["BD"], "Special", "70", "Rainbow Slate"),
            enc("Regirock", 377, ["SP"], "Special", "70", "Discovery Slate"),
            enc("Regice", 378, ["SP"], "Special", "70", "Discovery Slate"),
            enc("Registeel", 379, ["SP"], "Special", "70", "Discovery Slate"),
            enc("Latias", 380, ["SP"], "Special", "70", "Soul Slate"),
            enc("Latios", 381, ["SP"], "Special", "70", "Soul Slate"),
            enc("Kyogre", 382, ["SP"], "Special", "70", "Oceanic Slate"),
            enc("Groudon", 383, ["BD"], "Special", "70", "Tectonic Slate"),
            enc("Rayquaza", 384, ["BD", "SP"], "Special", "70", "Stratospheric Slate"),
            enc("Mewtwo", 150, ["BD", "SP"], "Special", "70", "Genome Slate"),
          ],
          items: [
            item("Discovery Slates", "Dig in Grand Underground"),
            item("Various Slates", "Purchase with Mysterious Shards at Ramanas Park"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Post-Game: Battle Tower, Stark Mountain & Rematches
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Battle Tower, Stark Mountain & Rematches",
      summary:
        "Challenge the Battle Tower, catch Heatran at Stark Mountain, and rematch gym leaders with competitive teams.",
      isPostGame: true,
      locations: [
        {
          name: "Stark Mountain",
          description:
            "Located on Route 227/228, Stark Mountain is a volcanic cave accessible after the Elite Four. Team with Buck to navigate the cave. After clearing it, Buck takes the Magma Stone, causing Heatran to awaken. Return to the Survival Area and talk to Buck, then go back to Stark Mountain's inner chamber to find Heatran at Level 70. Save before encountering it! Heatran is Fire/Steel type — bring Ground-type moves.",
          encounters: [
            enc("Graveler", 75, ["BD", "SP"], "Cave", "54-56", "20%"),
            enc("Golbat", 42, ["BD", "SP"], "Cave", "55-56", "20%"),
            enc("Magcargo", 219, ["BD", "SP"], "Cave", "55-56", "20%"),
            enc("Weezing", 110, ["BD", "SP"], "Cave", "55-56", "15%"),
            enc("Camerupt", 323, ["BD", "SP"], "Cave", "55-56", "15%"),
            enc("Rhyhorn", 111, ["BD", "SP"], "Cave", "55-56", "10%"),
            enc("Heatran", 485, ["BD", "SP"], "Special", "70", "Inner chamber (after Buck event)"),
          ],
          items: [
            item("Magma Stone", "Inner chamber (Buck takes and returns it)"),
            item("Fire Plate", "Stark Mountain depths"),
          ],
        },
        {
          name: "Lake Trio — Azelf, Uxie, Mesprit",
          description:
            "After entering the Hall of Fame, the Lake Trio can be caught. Azelf is at Lake Valor (Level 50, stationary). Uxie is at Lake Acuity (Level 50, stationary). Mesprit is at Lake Verity but flees immediately and roams Sinnoh — track it with the Marking Map Poketch App. Use Mean Look or a Pokemon with Shadow Tag to trap Mesprit. Save before each encounter.",
          encounters: [
            enc("Azelf", 482, ["BD", "SP"], "Special", "50", "Lake Valor (stationary)"),
            enc("Uxie", 480, ["BD", "SP"], "Special", "50", "Lake Acuity (stationary)"),
            enc("Mesprit", 481, ["BD", "SP"], "Special", "50", "Lake Verity (roaming)"),
          ],
        },
        {
          name: "Battle Tower",
          description:
            "The Battle Tower in the Fight Area is the main competitive facility. Battle in Single or Double format using rental or your own Pokemon at Level 50. Earn Battle Points (BP) to exchange for rare items, TMs, and held items like Choice Band, Choice Specs, and Life Orb. Tower Tycoon Palmer is the boss at streak 21 and 49. This is also where you can rematch gym leaders and other strong trainers with competitive movesets, held items, and EV-trained Pokemon.",
        },
        {
          name: "Gym Leader Rematches",
          description:
            "After obtaining the National Dex, gym leaders can be rematched with significantly stronger teams. They use competitive movesets, held items, and fully trained Pokemon. Roark's Rampardos, Gardenia's Roserade, Volkner's Electivire, and other aces all carry competitive items. Cynthia can also be rematched in the post-game with an even stronger team including a Togekiss. These rematches are some of the hardest battles in the game.",
          trainers: [
            trn(
              "Gym Leader Rematch",
              "Roark",
              [
                pk("Aerodactyl", 75, 142),
                pk("Probopass", 75, 476),
                pk("Relicanth", 73, 369),
                pk("Golem", 75, 76),
                pk("Rampardos", 77, 409),
              ],
              "Competitive Rock team"
            ),
            trn(
              "Gym Leader Rematch",
              "Volkner",
              [
                pk("Jolteon", 75, 135),
                pk("Raichu", 75, 26),
                pk("Luxray", 77, 405),
                pk("Electivire", 79, 466),
              ],
              "Competitive Electric team"
            ),
          ],
        },
      ],
    },
  ],
};
