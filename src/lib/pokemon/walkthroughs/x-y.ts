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

export const X_Y_WALKTHROUGH: GameWalkthrough = {
  slug: "x-y",
  gameLabel: "X & Y",
  versionTags: ["X", "Y"],
  parts: [
    /* ================================================================
     *  PART 1 — Vaniville Town, Route 1, Aquacorde Town
     * ================================================================ */
    {
      part: 1,
      title: "Vaniville Town, Route 1 & Aquacorde Town",
      summary:
        "Begin your Kalos adventure, meet your four friends, and choose your starter.",
      locations: [
        {
          name: "Vaniville Town",
          description:
            "Your adventure in the Kalos region begins here. After the opening cutscene with a Fletchling wake-up call, head downstairs and talk to your mom. She'll tell you to meet the neighbors. Change your outfit if you like, then head outside. This is the first fully 3D mainline Pokemon game, so take a moment to enjoy the new perspective. Your neighbor Serena (or Calem, depending on your gender) will greet you and suggest heading to Aquacorde Town.",
          items: [item("Town Map", "From your mom after leaving the house")],
        },
        {
          name: "Route 1 — Vaniville Pathway",
          description:
            "A short, scenic path connecting Vaniville Town to Aquacorde Town. No wild encounters here — just follow the road north. Enjoy the Kalos scenery and the Rhyhorn lounging in your front yard.",
        },
        {
          name: "Aquacorde Town",
          description:
            "Meet your four friends at the cafe: Shauna (cheerful, wants to make memories), Tierno (big guy who loves dancing), Trevor (studious, wants to complete the Pokedex), and your rival Serena/Calem. Professor Sycamore has entrusted them with starter Pokemon for you. Choose your partner: Chespin (Grass), Fennekin (Fire), or Froakie (Water). You'll also receive the Pokedex and Prof. Sycamore's Letter. Shauna will pick the starter weak to yours, and your rival takes the one strong against yours.",
          items: [
            item("Pokedex", "From Tierno at the cafe"),
            item("Prof. Sycamore's Letter", "From Tierno at the cafe"),
            item("Starter Pokemon", "Choose Chespin, Fennekin, or Froakie"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 2 — Route 2, Santalune Forest, Santalune City, Santalune Gym
     * ================================================================ */
    {
      part: 2,
      title: "Route 2, Santalune Forest & Santalune Gym",
      summary:
        "Catch your first Pokemon, navigate Santalune Forest, and challenge Viola for the Bug Badge.",
      locations: [
        {
          name: "Route 2 — Avance Trail",
          description:
            "Shauna teaches you how to catch Pokemon here. She gives you 10 Poke Balls. This is your first chance to build your team. Bunnelby and Fletchling are both excellent early-game catches — Fletchling evolves into the powerful Talonflame later.",
          encounters: [
            enc("Bunnelby", 659, ["X", "Y"], "Grass", "2-4", "30%"),
            enc("Fletchling", 661, ["X", "Y"], "Grass", "2-4", "25%"),
            enc("Zigzagoon", 263, ["X", "Y"], "Grass", "2-4", "20%"),
            enc("Pidgey", 16, ["X", "Y"], "Grass", "2-4", "15%"),
            enc("Caterpie", 10, ["X", "Y"], "Grass", "2-4", "5%"),
            enc("Weedle", 13, ["X", "Y"], "Grass", "2-4", "5%"),
          ],
          items: [
            item("Poke Ball x10", "From Shauna"),
            item("Potion", "Hidden in the grass area"),
          ],
        },
        {
          name: "Santalune Forest",
          description:
            "A lush forest with winding paths. Shauna joins you and will heal your Pokemon after battles, making this a great place to grind early levels. Pikachu can be found here, though it's uncommon. Pansage, Pansear, and Panpour also appear — catch the one that covers your starter's weakness. Your rival waits at the exit for a battle.",
          encounters: [
            enc("Pikachu", 25, ["X", "Y"], "Grass", "2-4", "6%"),
            enc("Caterpie", 10, ["X", "Y"], "Grass", "2-4", "15%"),
            enc("Weedle", 13, ["X", "Y"], "Grass", "2-4", "15%"),
            enc("Scatterbug", 664, ["X", "Y"], "Grass", "2-4", "20%"),
            enc("Fletchling", 661, ["X", "Y"], "Grass", "2-4", "15%"),
            enc("Pansage", 511, ["X", "Y"], "Grass", "2-4", "5%"),
            enc("Pansear", 513, ["X", "Y"], "Grass", "2-4", "5%"),
            enc("Panpour", 515, ["X", "Y"], "Grass", "2-4", "5%"),
          ],
          trainers: [
            trn("Youngster", "Joey", [pk("Scatterbug", 5, 664)], "₽120"),
            trn("Lass", "Anna", [pk("Pikachu", 5, 25)], "₽120"),
          ],
          items: [
            item("Potion", "Northeast corner"),
            item("Antidote", "West path"),
            item("Poke Ball", "Near the exit"),
          ],
        },
        {
          name: "Route 3 — Ouvert Way",
          description:
            "A short route leading to Santalune City. Several trainers line the path. Burmy can be found here in the grass. The route offers a nice view of the Santalune City gym in the distance.",
          encounters: [
            enc("Pidgey", 16, ["X", "Y"], "Grass", "3-5", "25%"),
            enc("Fletchling", 661, ["X", "Y"], "Grass", "3-5", "20%"),
            enc("Bunnelby", 659, ["X", "Y"], "Grass", "3-5", "20%"),
            enc("Burmy", 412, ["X", "Y"], "Grass", "3-5", "15%"),
            enc("Bidoof", 399, ["X", "Y"], "Grass", "3-5", "20%"),
          ],
          trainers: [
            trn(
              "Preschooler",
              "Oliver",
              [pk("Caterpie", 5, 10)],
              "₽100"
            ),
            trn(
              "Preschooler",
              "Ella",
              [pk("Pichu", 5, 172)],
              "₽100"
            ),
          ],
        },
        {
          name: "Santalune City",
          description:
            "Your first major city in Kalos. The Pokemon Center has a changing room where you can customize your character's appearance — a new feature in X & Y. Visit the Trainers' School to learn battle mechanics. When ready, head to the gym. Stock up on Potions and make sure your team is around level 10-12.",
          items: [
            item("Roller Skates", "From a girl outside the gym after your first gym victory"),
            item("Great Ball", "From the Trainer School"),
            item("X Attack", "Trainers' School reward"),
          ],
        },
        {
          name: "Santalune Gym — Leader Viola",
          description:
            "Viola is a Bug-type specialist and photographer. The gym is designed like a giant spider web — walk along the web strands and slide down dewdrops to navigate. Fire, Flying, and Rock types are all super effective against Bug. Fletchling is an excellent choice here. Her Vivillon knows Infestation which traps you, so try to take it down quickly.",
          trainers: [
            trn(
              "Youngster",
              "David",
              [pk("Ledyba", 10, 165)],
              "₽240"
            ),
            trn(
              "Youngster",
              "Zachary",
              [pk("Spewpa", 10, 665)],
              "₽240"
            ),
            trn("Gym Leader", "Viola", [
              pk("Surskit", 10, 283),
              pk("Vivillon", 12, 666),
            ], "₽1,920 + TM83 (Infestation)"),
          ],
          items: [
            item("Bug Badge", "Defeat Viola"),
            item("TM83 Infestation", "Defeat Viola"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 3 — Route 4-5, Lumiose City (partial), Route 22, Cyllage City
     * ================================================================ */
    {
      part: 3,
      title: "Routes 4-5, Lumiose City & Cyllage Gym",
      summary:
        "Travel through the flower-filled Route 4, get a brief taste of Lumiose City, and earn the Cliff Badge from Grant.",
      locations: [
        {
          name: "Route 4 — Parterre Way",
          description:
            "A beautiful garden route with ornate hedges and fountains. The flower beds have different colored flowers depending on your version. Flabebe floats among the flowers — its color varies. Ralts is a rare but excellent catch here, evolving into the powerful Gardevoir (or Gallade for males). Combee is also available.",
          encounters: [
            enc("Flabebe", 669, ["X", "Y"], "Grass", "6-8", "15%"),
            enc("Ralts", 280, ["X", "Y"], "Grass", "6-8", "5%"),
            enc("Ledyba", 165, ["X", "Y"], "Grass", "6-8", "20%"),
            enc("Combee", 415, ["X", "Y"], "Grass", "6-8", "15%"),
            enc("Skitty", 300, ["X", "Y"], "Grass", "6-8", "15%"),
            enc("Budew", 406, ["X", "Y"], "Grass", "6-8", "15%"),
          ],
          trainers: [
            trn("Gardener", "Grover", [pk("Corphish", 10, 341)], "₽480"),
            trn(
              "Preschooler",
              "Adrian",
              [pk("Budew", 10, 406)],
              "₽200"
            ),
          ],
          items: [
            item("Antidote", "Northeast hedge maze"),
            item("Super Potion", "Near the fountain"),
            item("Poison Barb", "Hidden near flowers"),
          ],
        },
        {
          name: "Lumiose City (South Boulevard)",
          description:
            "You can only explore the southern part of Lumiose City for now — a blackout is affecting the northern half. Visit Professor Sycamore's Lab on South Boulevard. He'll battle you with the three Kanto starters and then let you choose one: Bulbasaur, Charmander, or Squirtle! Each comes with its Mega Stone (Venusaurite, Charizardite X/Y, Blastoisinite). The Kanto starter adds incredible depth to your team.",
          trainers: [
            trn("Professor", "Sycamore", [
              pk("Bulbasaur", 10, 1),
              pk("Charmander", 10, 4),
              pk("Squirtle", 10, 7),
            ], "₽1,600"),
          ],
          items: [
            item(
              "Kanto Starter",
              "Choose Bulbasaur, Charmander, or Squirtle from Prof. Sycamore"
            ),
            item("Mega Stone", "Comes with your Kanto starter choice"),
          ],
        },
        {
          name: "Route 5 — Versant Road",
          description:
            "A hilly route with skateable rails and a Pokemon Day Care. Furfrou appears here — the poodle Pokemon that can be groomed into different trims. Pancham is a solid Fighting type that evolves into the Dark/Fighting Pangoro. Your rival challenges you to a battle here. Tierno and Trevor also make appearances.",
          encounters: [
            enc("Furfrou", 676, ["X", "Y"], "Grass", "8-10", "15%"),
            enc("Pancham", 674, ["X", "Y"], "Grass", "8-10", "15%"),
            enc("Doduo", 84, ["X", "Y"], "Grass", "8-10", "15%"),
            enc("Gulpin", 316, ["X", "Y"], "Grass", "8-10", "20%"),
            enc("Skiddo", 672, ["X", "Y"], "Grass", "8-10", "15%"),
            enc("Abra", 63, ["X", "Y"], "Grass", "8-10", "10%"),
          ],
          trainers: [
            trn("Rival", "Serena/Calem", [
              pk("Meowstic", 16, 678),
              pk("Absol", 16, 359),
            ], "₽960"),
            trn("Rising Star", "Hamish", [pk("Litleo", 12, 667)], "₽720"),
            trn("Backpacker", "Heike", [pk("Pancham", 12, 674)], "₽480"),
          ],
          items: [
            item("Super Potion", "Near the Day Care"),
            item("Oran Berry x3", "From a girl on the route"),
          ],
        },
        {
          name: "Camphrier Town & Route 7",
          description:
            "A quaint town with the Shabboneau Castle. The path to Route 7 is blocked by a sleeping Snorlax. Enter the castle and find the Poke Flute needed to wake it. Route 7 connects through the Berry fields and a Battle Chateau where you can fight nobles for experience and money.",
          encounters: [
            enc("Smeargle", 235, ["X", "Y"], "Grass", "10-12", "10%"),
            enc("Volbeat", 313, ["X"], "Grass", "10-12", "15%"),
            enc("Illumise", 314, ["Y"], "Grass", "10-12", "15%"),
            enc("Roselia", 315, ["X", "Y"], "Grass", "10-12", "15%"),
            enc("Croagunk", 453, ["X", "Y"], "Grass", "10-12", "15%"),
            enc("Ducklett", 580, ["X", "Y"], "Grass", "10-12", "10%"),
          ],
          items: [
            item("Poke Flute", "Parfum Palace (return it to the owner)"),
            item("TM46 Thief", "Camphrier Town"),
          ],
        },
        {
          name: "Connecting Cave & Route 8",
          description:
            "Connecting Cave links Route 7 to Cyllage City via Route 8. Zubat and Whismur lurk inside. Route 8 runs along the coastal cliffs with great views. You can encounter Absol here (rare) as well as the new Inkay, which evolves into Malamar by leveling up while holding the 3DS upside down — one of the most unique evolution methods ever.",
          encounters: [
            enc("Zubat", 41, ["X", "Y"], "Cave", "13-15", "40%"),
            enc("Whismur", 293, ["X", "Y"], "Cave", "13-15", "30%"),
            enc("Axew", 610, ["X", "Y"], "Cave", "13-15", "20%"),
            enc("Inkay", 686, ["X", "Y"], "Grass", "13-15", "15%"),
            enc("Mienfoo", 619, ["X", "Y"], "Grass", "13-15", "15%"),
            enc("Absol", 359, ["X", "Y"], "Grass", "13-15", "5%"),
            enc("Spoink", 325, ["X", "Y"], "Grass", "13-15", "15%"),
          ],
        },
        {
          name: "Cyllage City",
          description:
            "A scenic coastal city built into seaside cliffs. The city has a bicycle shop where you can get your bike. The gym is built into a massive rock climbing wall. Make sure your team is around level 23-25 before challenging Grant.",
          items: [item("Bicycle", "Bike shop on the lower level")],
        },
        {
          name: "Cyllage Gym — Leader Grant",
          description:
            "Grant specializes in Rock types. The gym is a rock climbing wall — scale the walls to reach Grant at the top. Water, Grass, Fighting, Ground, and Steel moves are all super effective. His Amaura has Refrigerate ability turning Normal moves to Ice, and Tyrunt hits hard with Bite. A Grass or Water starter makes this fight easy.",
          trainers: [
            trn(
              "Hiker",
              "Craig",
              [pk("Relicanth", 21, 369)],
              "₽1,008"
            ),
            trn(
              "Rising Star",
              "Manon",
              [pk("Solrock", 22, 338), pk("Lunatone", 22, 337)],
              "₽1,320"
            ),
            trn("Gym Leader", "Grant", [
              pk("Amaura", 25, 698),
              pk("Tyrunt", 25, 696),
            ], "₽4,000 + TM39 (Rock Tomb)"),
          ],
          items: [
            item("Cliff Badge", "Defeat Grant"),
            item("TM39 Rock Tomb", "Defeat Grant"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 4 — Ambrette Town, Glittering Cave, Fossils, Kanto Starter
     * ================================================================ */
    {
      part: 4,
      title: "Ambrette Town, Glittering Cave & Fossil Pokemon",
      summary:
        "Explore the coastal areas, rescue a researcher in Glittering Cave, and revive a fossil Pokemon.",
      locations: [
        {
          name: "Route 9 — Spikes Passage",
          description:
            "A rocky route where you ride Rhyhorn to smash through rocks. This is one of the game's riding Pokemon segments. You can't use your own Pokemon here — just ride the Rhyhorn along the path, breaking boulders to progress.",
        },
        {
          name: "Ambrette Town",
          description:
            "A seaside town with the Fossil Lab. The researcher you need to talk to has gone into Glittering Cave. Visit the aquarium for a look at marine Pokemon. The Fossil Lab will revive your fossil once you find one in the cave.",
          items: [item("Old Rod", "Fishing Guru in town")],
        },
        {
          name: "Glittering Cave",
          description:
            "A sparkling cave full of crystals. Inside, Team Flare grunts are harassing a fossil researcher. This is your first encounter with Team Flare — the fashionable villains of Kalos who believe in making the world more beautiful (at any cost). Defeat the grunts to save the researcher. You'll receive a fossil as thanks: the Jaw Fossil (Tyrunt, Rock/Dragon) or the Sail Fossil (Amaura, Rock/Ice).",
          encounters: [
            enc("Cubone", 104, ["X", "Y"], "Cave", "15-17", "20%"),
            enc("Rhyhorn", 111, ["X", "Y"], "Cave", "15-17", "20%"),
            enc("Machop", 66, ["X", "Y"], "Cave", "15-17", "20%"),
            enc("Onix", 95, ["X", "Y"], "Cave", "15-17", "15%"),
            enc("Lunatone", 337, ["X", "Y"], "Cave", "15-17", "10%"),
            enc("Solrock", 338, ["X", "Y"], "Cave", "15-17", "10%"),
            enc("Kangaskhan", 115, ["X", "Y"], "Cave", "15-17", "5%"),
          ],
          trainers: [
            trn("Team Flare Grunt", "Grunt", [pk("Houndour", 18, 228), pk("Zubat", 18, 41)], "₽720"),
            trn("Team Flare Grunt", "Grunt", [pk("Gulpin", 18, 316), pk("Electrike", 18, 309)], "₽720"),
          ],
          items: [
            item("Jaw Fossil or Sail Fossil", "From the researcher after saving him"),
            item("TM65 Shadow Claw", "Deep in the cave"),
            item("Hard Stone", "Hidden in cave wall"),
          ],
        },
        {
          name: "Route 10 — Menhir Trail",
          description:
            "An atmospheric route lined with mysterious standing stones (menhirs). There's an eerie energy here tied to the game's legendary plot. Golett and Hawlucha appear in the grass. Hawlucha is a great Fighting/Flying type that can carry you through the mid-game. Sigilyph also wanders among the stones. The path leads to Geosenge Town.",
          encounters: [
            enc("Eevee", 133, ["X", "Y"], "Grass", "17-19", "5%"),
            enc("Hawlucha", 701, ["X", "Y"], "Grass", "17-19", "10%"),
            enc("Golett", 622, ["X", "Y"], "Grass", "17-19", "15%"),
            enc("Sigilyph", 561, ["X", "Y"], "Grass", "17-19", "15%"),
            enc("Snubbull", 209, ["X", "Y"], "Grass", "17-19", "20%"),
            enc("Houndour", 228, ["X"], "Grass", "17-19", "10%"),
            enc("Electrike", 309, ["Y"], "Grass", "17-19", "10%"),
            enc("Emolga", 587, ["X", "Y"], "Grass", "17-19", "10%"),
          ],
          items: [
            item("Thunder Stone", "Among the menhirs"),
            item("TM73 Thunder Wave", "End of the route"),
          ],
        },
        {
          name: "Geosenge Town",
          description:
            "A small town built among giant stones. Something ominous lurks beneath — you'll return here later for a critical story moment. For now, just pass through and head north toward Shalour City. There's a Hotel and a Pokemon Center here.",
        },
      ],
    },

    /* ================================================================
     *  PART 5 — Shalour City, Tower of Mastery, Shalour Gym
     * ================================================================ */
    {
      part: 5,
      title: "Shalour City, Tower of Mastery & Shalour Gym",
      summary:
        "Learn about Mega Evolution at the Tower of Mastery, earn the Mega Ring, and defeat Korrina for the Rumble Badge.",
      locations: [
        {
          name: "Route 11 — Miroir Way",
          description:
            "A mountainous path with wild Nidorina, Nidorino, and Dedenne (the Fairy/Electric Pikachu-clone of Gen 6). Staravia patrols the skies. This route connects Reflection Cave to Shalour City.",
          encounters: [
            enc("Nidorina", 30, ["X", "Y"], "Grass", "19-21", "15%"),
            enc("Nidorino", 33, ["X", "Y"], "Grass", "19-21", "15%"),
            enc("Dedenne", 702, ["X", "Y"], "Grass", "19-21", "10%"),
            enc("Hariyama", 297, ["X", "Y"], "Grass", "19-21", "15%"),
            enc("Staravia", 397, ["X", "Y"], "Grass", "19-21", "15%"),
            enc("Chingling", 433, ["X", "Y"], "Grass", "19-21", "10%"),
            enc("Throh", 538, ["X"], "Grass", "19-21", "10%"),
            enc("Sawk", 539, ["Y"], "Grass", "19-21", "10%"),
          ],
        },
        {
          name: "Reflection Cave",
          description:
            "A beautiful crystal cave with reflective surfaces. You can see your reflection in the cave walls. Carbink and Sableye lurk among the crystals. Mr. Mime and Wobbuffet can also be found here. The cave connects to Shalour City.",
          encounters: [
            enc("Carbink", 703, ["X", "Y"], "Cave", "19-22", "10%"),
            enc("Sableye", 302, ["Y"], "Cave", "19-22", "15%"),
            enc("Mr. Mime", 122, ["X", "Y"], "Cave", "19-22", "15%"),
            enc("Wobbuffet", 202, ["X", "Y"], "Cave", "19-22", "15%"),
            enc("Chingling", 433, ["X", "Y"], "Cave", "19-22", "10%"),
            enc("Roggenrola", 524, ["X", "Y"], "Cave", "19-22", "20%"),
            enc("Solosis", 577, ["X"], "Cave", "19-22", "10%"),
            enc("Gothita", 574, ["Y"], "Cave", "19-22", "10%"),
          ],
          items: [
            item("TM74 Gyro Ball", "Deep in the cave"),
            item("Earth Plate", "Hidden reflective wall"),
            item("Nest Ball", "Cave side path"),
          ],
        },
        {
          name: "Shalour City",
          description:
            "A coastal city famous for the Tower of Mastery. The Mega Evolution guru Gurkinn lives here with his granddaughter, Gym Leader Korrina. Visit the Tower of Mastery after defeating Korrina to receive the Mega Ring, which allows one Pokemon per battle to Mega Evolve when holding the right Mega Stone. Korrina battles you atop the tower with her Mega Lucario, and you receive a Lucario that can Mega Evolve!",
          items: [
            item("Mega Ring", "Tower of Mastery, after defeating Korrina"),
            item("Lucario", "Gift from Korrina at the Tower of Mastery (holds Lucarionite)"),
            item("Soothe Bell", "From a woman in the Pokemon Center"),
          ],
        },
        {
          name: "Shalour Gym — Leader Korrina",
          description:
            "Korrina specializes in Fighting types. The gym is a roller skating rink — grind along the rails to reach her. Psychic, Flying, and Fairy moves are all super effective. Her Hawlucha is part Flying so it resists Fighting moves itself. Korrina's team hits hard physically, so Pokemon with high Defense or Flying typing are valuable. Get your team to around level 30 before challenging her.",
          trainers: [
            trn(
              "Roller Skater",
              "Shun",
              [pk("Pancham", 27, 674), pk("Throh", 27, 538)],
              "₽864"
            ),
            trn(
              "Roller Skater",
              "Kate",
              [pk("Mienfoo", 28, 619), pk("Machoke", 28, 67)],
              "₽896"
            ),
            trn("Gym Leader", "Korrina", [
              pk("Mienfoo", 29, 619),
              pk("Machoke", 28, 67),
              pk("Hawlucha", 32, 701),
            ], "₽5,120 + TM98 (Power-Up Punch)"),
          ],
          items: [
            item("Rumble Badge", "Defeat Korrina"),
            item("TM98 Power-Up Punch", "Defeat Korrina"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 6 — Routes 12-13, Coumarine City, Coumarine Gym
     * ================================================================ */
    {
      part: 6,
      title: "Routes 12-13, Coumarine City & Coumarine Gym",
      summary:
        "Ride Skiddo along coastal routes, reach the seaside Coumarine City, and earn the Plant Badge from Ramos.",
      locations: [
        {
          name: "Route 12 — Fourrage Road",
          description:
            "A pastoral route where you can ride Skiddo over obstacles. Lots of green pastures and fences. Tauros, Miltank, and Mareep graze in the fields. Pachirisu dashes through the tall grass. This route has a beautiful countryside feel.",
          encounters: [
            enc("Tauros", 128, ["X", "Y"], "Grass", "24-26", "10%"),
            enc("Miltank", 241, ["X", "Y"], "Grass", "24-26", "10%"),
            enc("Mareep", 179, ["X", "Y"], "Grass", "24-26", "15%"),
            enc("Pachirisu", 417, ["X", "Y"], "Grass", "24-26", "15%"),
            enc("Chatot", 441, ["X", "Y"], "Grass", "24-26", "15%"),
            enc("Helioptile", 694, ["X", "Y"], "Grass", "24-26", "15%"),
            enc("Slowpoke", 79, ["X", "Y"], "Grass", "24-26", "10%"),
          ],
          items: [
            item("Aspear Berry x3", "Berry tree on the route"),
            item("Shiny Stone", "Hidden near the fence"),
          ],
        },
        {
          name: "Azure Bay",
          description:
            "An optional coastal area accessible by Surfing from Route 12. Beautiful ocean views and a sea cave. Lapras can be found here, and Chatot sings from the cliffs. There's also a small island with items.",
          encounters: [
            enc("Lapras", 131, ["X", "Y"], "Surfing", "25-27", "5%"),
            enc("Tentacool", 72, ["X", "Y"], "Surfing", "25-27", "35%"),
            enc("Mantyke", 458, ["X", "Y"], "Surfing", "25-27", "20%"),
            enc("Luvdisc", 370, ["X", "Y"], "Surfing", "25-27", "25%"),
            enc("Inkay", 686, ["X", "Y"], "Grass", "25-27", "15%"),
          ],
        },
        {
          name: "Route 13 — Lumiose Badlands",
          description:
            "A barren, desert-like area with sandstorms. Ground and Rock types dominate here. Trapinch and Gible can be found — both evolve into powerhouses (Flygon and Garchomp). The Power Plant is nearby but inaccessible for now due to Team Flare.",
          encounters: [
            enc("Trapinch", 328, ["X", "Y"], "Grass", "26-28", "15%"),
            enc("Gible", 443, ["X", "Y"], "Grass", "26-28", "5%"),
            enc("Dugtrio", 51, ["X", "Y"], "Grass", "26-28", "20%"),
            enc("Graveler", 75, ["X", "Y"], "Grass", "26-28", "20%"),
            enc("Slugma", 218, ["X", "Y"], "Grass", "26-28", "20%"),
          ],
          items: [
            item("Flame Plate", "Hidden in the sand"),
            item("Sun Stone", "Rocky outcrop"),
          ],
        },
        {
          name: "Coumarine City",
          description:
            "A hillside city split between an upper cliff area and a lower seaside area, connected by a monorail. The gym is on the hilltop area. Shauna gives you HM02 Fly here, allowing fast travel to previously visited cities. Professor Sycamore also meets you here and discusses Mega Evolution further.",
          items: [
            item("HM02 Fly", "From Shauna at the monorail station"),
            item("Good Rod", "Fisherman on the docks"),
          ],
        },
        {
          name: "Coumarine Gym — Leader Ramos",
          description:
            "Ramos is a veteran Grass-type specialist. His gym is a massive tree you must climb by swinging on ropes. Fire, Ice, Flying, and Poison moves are all super effective. His Gogoat is his ace — it's bulky and hits hard with Bulldoze. Bring a good Fire or Flying type and this battle should be manageable. Recommended level: 32-34.",
          trainers: [
            trn(
              "Pokemon Ranger",
              "Chaise",
              [pk("Simisage", 29, 512), pk("Lombre", 29, 271)],
              "₽2,320"
            ),
            trn(
              "Pokemon Ranger",
              "Brooke",
              [pk("Roselia", 30, 315), pk("Wormadam", 30, 413)],
              "₽2,400"
            ),
            trn("Gym Leader", "Ramos", [
              pk("Jumpluff", 30, 189),
              pk("Weepinbell", 31, 70),
              pk("Gogoat", 34, 673),
            ], "₽5,440 + TM86 (Grass Knot)"),
          ],
          items: [
            item("Plant Badge", "Defeat Ramos"),
            item("TM86 Grass Knot", "Defeat Ramos"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 7 — Lumiose City (full), Lumiose Gym
     * ================================================================ */
    {
      part: 7,
      title: "Lumiose City (Full) & Lumiose Gym",
      summary:
        "The blackout is resolved! Explore all of Lumiose City — the hub of Kalos — and challenge Clemont for the Voltage Badge.",
      locations: [
        {
          name: "Lumiose City — Full Access",
          description:
            "The power is back on and you can now explore all of Lumiose City, the largest city in any Pokemon game. This sprawling metropolis is built around the iconic Prism Tower (which doubles as the gym). Explore cafes, restaurants, boutiques, the PR Video Studio, the Battle Institute, Sycamore's Lab, Hotel Richissime, and much more. Lumiose is divided into North and South Boulevards with multiple avenues branching off. The Lumiose City taxi system (Gogoat shuttle) helps you get around. You can also find Mega Stones hidden around the city at night using the Mega Ring detector.",
          items: [
            item("TM49 Echoed Voice", "Cafe on North Boulevard"),
            item("TM82 Dragon Tail", "From Sycamore's assistant"),
            item("Holo Caster upgrade", "Professor Sycamore's Lab"),
          ],
        },
        {
          name: "Route 14 — Laverre Nature Trail",
          description:
            "A swampy, spooky route leading toward Laverre City. Rain falls constantly. Goomy, the pure Dragon type that evolves into the pseudo-legendary Goodra, appears here — it's somewhat rare but absolutely worth catching. Haunter, Quagsire, and Karrablast/Shelmet also appear. The route has a creepy, atmospheric vibe.",
          encounters: [
            enc("Goomy", 704, ["X", "Y"], "Grass", "30-32", "5%"),
            enc("Haunter", 93, ["X", "Y"], "Grass", "30-32", "10%"),
            enc("Quagsire", 195, ["X", "Y"], "Grass", "30-32", "15%"),
            enc("Karrablast", 588, ["X", "Y"], "Grass", "30-32", "10%"),
            enc("Shelmet", 616, ["X", "Y"], "Grass", "30-32", "10%"),
            enc("Stunfisk", 618, ["X", "Y"], "Grass", "30-32", "15%"),
            enc("Skorupi", 451, ["X", "Y"], "Grass", "30-32", "10%"),
            enc("Bellsprout", 69, ["X", "Y"], "Grass", "30-32", "10%"),
          ],
        },
        {
          name: "Lumiose Gym — Leader Clemont",
          description:
            "Clemont is the Electric-type Gym Leader and an inventor. The Prism Tower gym involves answering quiz questions in an elevator as you ascend the tower. Get questions right to skip trainer battles. Ground types completely wall his team — Dugtrio, Garchomp, or anything with Earthquake will dominate. His Heliolisk is fast and can hit hard with Thunderbolt. Emolga has Levitate so Ground moves won't work on it — use Rock or Ice instead. Recommended level: 35-37.",
          trainers: [
            trn(
              "Schoolboy",
              "Sherlock",
              [pk("Pachirisu", 34, 417), pk("Stunfisk", 34, 618)],
              "₽1,360"
            ),
            trn(
              "Schoolgirl",
              "Macon",
              [pk("Dedenne", 35, 702), pk("Raichu", 35, 26)],
              "₽1,400"
            ),
            trn("Gym Leader", "Clemont", [
              pk("Emolga", 35, 587),
              pk("Magneton", 35, 82),
              pk("Heliolisk", 37, 695),
            ], "₽5,920 + TM24 (Thunderbolt)"),
          ],
          items: [
            item("Voltage Badge", "Defeat Clemont"),
            item("TM24 Thunderbolt", "Defeat Clemont"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 8 — Laverre City, Laverre Gym
     * ================================================================ */
    {
      part: 8,
      title: "Laverre City & Laverre Gym",
      summary:
        "Discover the enchanting Laverre City and challenge Valerie, the first Fairy-type Gym Leader in the series.",
      locations: [
        {
          name: "Laverre City",
          description:
            "A fairy-tale town built around a giant ancient tree. The atmosphere is magical and whimsical. Laverre City is home to the Poke Ball Factory, which Team Flare will soon attempt to take over. The city's boutique is one of the most exclusive in Kalos. Valerie is the Gym Leader and a fashion designer who came from Johto — she's the first Fairy-type Gym Leader in the series, showcasing the brand-new Fairy type introduced in Gen 6.",
          items: [
            item("TM41 Torment", "Building near the Pokemon Center"),
          ],
        },
        {
          name: "Laverre Gym — Leader Valerie",
          description:
            "Valerie uses the brand-new Fairy type. The gym resembles a giant dollhouse — navigate between rooms to reach her. Poison and Steel moves are super effective against Fairy types. Her Mawile is Steel/Fairy so Fire and Ground moves work best on it. Mr. Mime is Psychic/Fairy, so Ghost and Poison are ideal. Sylveon is her ace — a pure Fairy type with high Special Defense. Use a strong physical Poison or Steel attacker. Recommended level: 39-42.",
          trainers: [
            trn(
              "Furisode Girl",
              "Kali",
              [pk("Dedenne", 38, 702)],
              "₽3,040"
            ),
            trn(
              "Furisode Girl",
              "Blossom",
              [pk("Azumarill", 38, 184)],
              "₽3,040"
            ),
            trn(
              "Furisode Girl",
              "Katherine",
              [pk("Aromatisse", 38, 683)],
              "₽3,040"
            ),
            trn("Gym Leader", "Valerie", [
              pk("Mawile", 38, 303),
              pk("Mr. Mime", 39, 122),
              pk("Sylveon", 42, 700),
            ], "₽6,720 + TM99 (Dazzling Gleam)"),
          ],
          items: [
            item("Fairy Badge", "Defeat Valerie"),
            item("TM99 Dazzling Gleam", "Defeat Valerie"),
          ],
        },
        {
          name: "Poke Ball Factory",
          description:
            "Team Flare has infiltrated the Poke Ball Factory north of Laverre City. Team up with your rival to battle through the factory and drive out the grunts. The factory's conveyor belts and narrow corridors make for an interesting dungeon. Defeat the Team Flare admins at the end. The factory president rewards you with a Master Ball and a Big Nugget.",
          trainers: [
            trn("Team Flare Admin", "Admin", [pk("Scraggy", 37, 559), pk("Houndoom", 38, 229)], "₽3,040"),
            trn("Team Flare Admin", "Admin", [pk("Liepard", 38, 510), pk("Manectric", 38, 310)], "₽3,040"),
          ],
          items: [
            item("Master Ball", "From the factory president"),
            item("Big Nugget", "From the factory president"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 9 — Route 15-16, Dendemille Town, Frost Cavern, Team Flare
     * ================================================================ */
    {
      part: 9,
      title: "Dendemille Town, Frost Cavern & Team Flare",
      summary:
        "Journey through autumn routes, battle Team Flare at the Frost Cavern, and prepare for tougher challenges ahead.",
      locations: [
        {
          name: "Route 15 — Brun Way",
          description:
            "An autumnal route with fallen leaves and colorful trees. The Lost Hotel is accessible from here — a rundown building inhabited by punks and skaters who teach rare moves. Klefki appears among the hotel's corridors. The route has trainers and leads to Dendemille Town.",
          encounters: [
            enc("Klefki", 707, ["X", "Y"], "Grass", "34-36", "10%"),
            enc("Murkrow", 198, ["X", "Y"], "Grass", "34-36", "15%"),
            enc("Foongus", 590, ["X", "Y"], "Grass", "34-36", "15%"),
            enc("Pawniard", 624, ["X", "Y"], "Grass", "34-36", "15%"),
            enc("Mightyena", 262, ["X", "Y"], "Grass", "34-36", "15%"),
            enc("Liepard", 510, ["X", "Y"], "Grass", "34-36", "10%"),
          ],
          items: [
            item("TM62 Acrobatics", "Near the bridge"),
            item("Escape Rope", "Lost Hotel entrance"),
          ],
        },
        {
          name: "Route 16 — Melancolie Path",
          description:
            "A route with large grass patches and a gate leading to Lumiose City's north side. More autumn scenery. Pumpkaboo and Phantump appear here — both are Grass/Ghost types that evolve when traded. They're fantastic Pokemon with great typing.",
          encounters: [
            enc("Pumpkaboo", 710, ["X", "Y"], "Grass", "34-36", "15%"),
            enc("Phantump", 708, ["X", "Y"], "Grass", "34-36", "15%"),
            enc("Klefki", 707, ["X", "Y"], "Grass", "34-36", "10%"),
            enc("Floatzel", 419, ["X", "Y"], "Grass", "34-36", "15%"),
            enc("Weepinbell", 70, ["X", "Y"], "Grass", "34-36", "10%"),
            enc("Foongus", 590, ["X", "Y"], "Grass", "34-36", "15%"),
          ],
          items: [
            item("Super Rod", "Fisherman at the fishing house"),
          ],
        },
        {
          name: "Dendemille Town",
          description:
            "A windmill town surrounded by grain fields. The Move Reminder is here — she'll reteach any move your Pokemon has forgotten in exchange for a Heart Scale. This is very useful for getting powerful moves back. Team Flare activity has been reported at the nearby Frost Cavern.",
          items: [
            item("TM42 Facade", "From a man in town"),
          ],
        },
        {
          name: "Frost Cavern",
          description:
            "A frozen cave with icy floors and snowdrifts. Team Flare is here trying to capture an Abomasnow to harness its energy. Slide across ice puzzles to navigate deeper. Bergmite and Smoochum appear in the cave. At the deepest point, battle a Team Flare scientist and Admin to free the Abomasnow. The Abomasnow gives you Abomasite (Mega Stone) as thanks.",
          encounters: [
            enc("Bergmite", 712, ["X", "Y"], "Cave", "38-40", "15%"),
            enc("Smoochum", 238, ["X", "Y"], "Cave", "38-40", "10%"),
            enc("Beartic", 614, ["X", "Y"], "Cave", "38-40", "10%"),
            enc("Piloswine", 221, ["X", "Y"], "Cave", "38-40", "15%"),
            enc("Jynx", 124, ["X", "Y"], "Cave", "38-40", "10%"),
            enc("Cryogonal", 615, ["X", "Y"], "Cave", "38-40", "5%"),
            enc("Vanillite", 582, ["X", "Y"], "Cave", "38-40", "15%"),
          ],
          trainers: [
            trn("Team Flare Admin", "Admin", [pk("Manectric", 40, 310), pk("Golbat", 40, 42)], "₽3,200"),
            trn("Team Flare Scientist", "Scientist", [pk("Muk", 40, 89), pk("Swalot", 40, 317)], "₽3,200"),
          ],
          items: [
            item("Abomasite", "From the Abomasnow after rescue"),
            item("TM79 Frost Breath", "Ice room"),
            item("Never-Melt Ice", "Near frozen waterfall"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 10 — Anistar City, Anistar Gym
     * ================================================================ */
    {
      part: 10,
      title: "Anistar City & Anistar Gym",
      summary:
        "Reach the mystical Anistar City with its giant sundial and challenge Olympia for the Psychic Badge.",
      locations: [
        {
          name: "Route 17 — Mamoswine Road",
          description:
            "A snowy route where you ride Mamoswine to plow through deep snow. This is one of the game's coolest ride Pokemon moments. The thick snow is impassable on foot, so Mamoswine is essential. Wild encounters occur in the snow patches you've cleared.",
          encounters: [
            enc("Snover", 459, ["X", "Y"], "Grass", "38-40", "20%"),
            enc("Delibird", 225, ["X", "Y"], "Grass", "38-40", "15%"),
            enc("Sneasel", 215, ["X", "Y"], "Grass", "38-40", "15%"),
            enc("Abomasnow", 460, ["X", "Y"], "Grass", "38-40", "10%"),
          ],
        },
        {
          name: "Anistar City",
          description:
            "A mysterious city with a giant pink crystal sundial that glows at dusk. Professor Sycamore reveals that the sundial is connected to Mega Evolution and emits the energy needed for Mega Stones. The sundial activates between 8-9 PM in-game, allowing you to find hidden Mega Stones around Kalos. Anistar also has a Memory Girl who can tell you your Pokemon's happiness. Team Flare's boss Lysandre begins making his move after you beat the gym.",
          items: [
            item("TM10 Hidden Power", "From a man in a house"),
          ],
        },
        {
          name: "Anistar Gym — Leader Olympia",
          description:
            "Olympia is a cosmic Psychic-type Gym Leader who speaks in riddles about the future. The gym is set in outer space — walk along starry pathways and warp between platforms to reach her. Bug, Ghost, and Dark moves are super effective. Her Meowstic has Calm Mind which boosts its already good special stats, so try to take it out quickly. Sigilyph can be annoying with its Light Screen. Recommended level: 45-48.",
          trainers: [
            trn(
              "Psychic",
              "Arthur",
              [pk("Exeggutor", 40, 103)],
              "₽2,560"
            ),
            trn(
              "Psychic",
              "Charlene",
              [pk("Medicham", 41, 308)],
              "₽2,624"
            ),
            trn("Gym Leader", "Olympia", [
              pk("Sigilyph", 44, 561),
              pk("Slowking", 45, 199),
              pk("Meowstic", 48, 678),
            ], "₽7,680 + TM04 (Calm Mind)"),
          ],
          items: [
            item("Psychic Badge", "Defeat Olympia"),
            item("TM04 Calm Mind", "Defeat Olympia"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 11 — Team Flare HQ, Lysandre Labs, Geosenge, Legendary
     * ================================================================ */
    {
      part: 11,
      title: "Team Flare HQ, Lysandre Labs & Legendary Encounter",
      summary:
        "Infiltrate Team Flare's base, confront Lysandre, and encounter the legendary Xerneas or Yveltal.",
      locations: [
        {
          name: "Lumiose City — Lysandre Cafe",
          description:
            "After defeating Olympia, Lysandre reveals his plan on the Holo Caster. He wants to use the ultimate weapon to destroy everything he considers ugly and create a 'beautiful' world. Head to Lysandre Cafe in Lumiose City. The cafe is a front for Team Flare's operations. Battle Lysandre and discover the hidden entrance to Lysandre Labs beneath the cafe.",
          trainers: [
            trn("Team Flare Boss", "Lysandre", [
              pk("Mienshao", 47, 620),
              pk("Honchkrow", 47, 430),
              pk("Pyroar", 49, 668),
              pk("Gyarados", 51, 130),
            ], "₽10,200"),
          ],
        },
        {
          name: "Lysandre Labs",
          description:
            "A high-tech underground base beneath Lysandre Cafe. Battle through Team Flare Scientists and Admins. You'll learn about the ultimate weapon and its connection to the legendary Pokemon. Free the captured Pokemon powering the weapon. The labs have warp panels and multiple floors to navigate.",
          trainers: [
            trn("Team Flare Admin", "Aliana", [pk("Mightyena", 48, 262), pk("Druddigon", 48, 621)], "₽3,840"),
            trn("Team Flare Admin", "Celosia", [pk("Manectric", 48, 310), pk("Drapion", 48, 452)], "₽3,840"),
            trn("Team Flare Admin", "Bryony", [pk("Liepard", 48, 510), pk("Bisharp", 48, 625)], "₽3,840"),
            trn("Team Flare Admin", "Mable", [pk("Houndoom", 48, 229), pk("Weavile", 48, 461)], "₽3,840"),
          ],
          items: [
            item("Elevator Key", "From defeating an Admin"),
            item("Revive", "Lab corridor"),
            item("Full Restore", "Lab basement"),
          ],
        },
        {
          name: "Geosenge Town — Team Flare Secret HQ",
          description:
            "Return to Geosenge Town. The giant stones have risen, revealing Team Flare's Secret HQ beneath the town. The ultimate weapon is hidden here. Navigate through the base and confront Lysandre a second time. After defeating him, you'll encounter the legendary Pokemon: Xerneas (Pokemon X) or Yveltal (Pokemon Y). This is a mandatory catch — the legendary is at Level 50 and the game won't continue until you catch it. Lysandre activates the weapon anyway, but your legendary Pokemon helps stop it. Lysandre is buried in the rubble.",
          trainers: [
            trn("Team Flare Boss", "Lysandre", [
              pk("Mienshao", 49, 620),
              pk("Honchkrow", 49, 430),
              pk("Pyroar", 51, 668),
              pk("Mega Gyarados", 53, 130),
            ], "₽10,600"),
          ],
          items: [
            item("Xerneas", "Mandatory encounter in X (Lv. 50)"),
            item("Yveltal", "Mandatory encounter in Y (Lv. 50)"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 12 — Routes 18-19, Snowbelle City, Snowbelle Gym
     * ================================================================ */
    {
      part: 12,
      title: "Routes 18-19, Snowbelle City & Snowbelle Gym",
      summary:
        "Travel through the final routes, reach the snowy Snowbelle City, and earn the Iceberg Badge from Wulfric.",
      locations: [
        {
          name: "Couriway Town",
          description:
            "A waterfall town that connects the routes to Snowbelle City. Professor Sycamore meets you here and reflects on the events at Geosenge Town. He gives you HM05 Waterfall. Your rival also challenges you to a battle here — their team has grown considerably.",
          trainers: [
            trn("Rival", "Serena/Calem", [
              pk("Meowstic", 49, 678),
              pk("Absol", 49, 359),
              pk("Vaporeon", 49, 134),
              pk("Altaria", 51, 334),
            ], "₽5,100"),
          ],
          items: [
            item("HM05 Waterfall", "From Professor Sycamore"),
            item("TM55 Scald", "Couriway Hotel"),
          ],
        },
        {
          name: "Route 18 — Vallee Etroite Way",
          description:
            "A rocky canyon route with strong trainers. Heatmor and Durant are version counterparts here. Lairon roams the rocky terrain. The route is linear but has a few side paths with valuable items.",
          encounters: [
            enc("Heatmor", 631, ["X", "Y"], "Grass", "44-46", "15%"),
            enc("Durant", 632, ["X", "Y"], "Grass", "44-46", "15%"),
            enc("Lairon", 305, ["X", "Y"], "Grass", "44-46", "15%"),
            enc("Torkoal", 324, ["X", "Y"], "Grass", "44-46", "15%"),
            enc("Gurdurr", 533, ["X", "Y"], "Grass", "44-46", "15%"),
            enc("Geodude", 74, ["X", "Y"], "Grass", "44-46", "10%"),
          ],
          items: [
            item("TM17 Protect", "Rocky side path"),
            item("Wacan Berry", "Hidden near rocks"),
          ],
        },
        {
          name: "Terminus Cave",
          description:
            "A massive underground cave system accessible from Route 18. Noibat, the Bat Dragon Pokemon, can be found here — it evolves into the excellent Noivern. Ariados and Durant also appear. The deepest chamber is sealed for now — it holds Zygarde, which you can access post-game.",
          encounters: [
            enc("Noibat", 714, ["X", "Y"], "Cave", "44-46", "15%"),
            enc("Ariados", 168, ["X", "Y"], "Cave", "44-46", "15%"),
            enc("Durant", 632, ["X", "Y"], "Cave", "44-46", "20%"),
            enc("Lairon", 305, ["X", "Y"], "Cave", "44-46", "15%"),
            enc("Graveler", 75, ["X", "Y"], "Cave", "44-46", "15%"),
            enc("Sandslash", 28, ["X", "Y"], "Cave", "44-46", "10%"),
          ],
          items: [
            item("TM30 Shadow Ball", "Deepest accessible floor"),
            item("Iron Plate", "Side chamber"),
            item("Dragon Scale", "Hidden in the cave"),
          ],
        },
        {
          name: "Route 19 — Grande Vallee Way",
          description:
            "A winding valley route with autumn forests and a river. Cross bridges and battle through trainers. The route has beautiful views of the mountain range leading to Snowbelle City. Your rival and friends have a brief scene here. Sliggoo and Druddigon appear in the tall grass.",
          encounters: [
            enc("Sliggoo", 705, ["X", "Y"], "Grass", "48-50", "5%"),
            enc("Druddigon", 621, ["X", "Y"], "Grass", "48-50", "15%"),
            enc("Gligar", 207, ["X", "Y"], "Grass", "48-50", "15%"),
            enc("Weepinbell", 70, ["X", "Y"], "Grass", "48-50", "15%"),
            enc("Haunter", 93, ["X", "Y"], "Grass", "48-50", "15%"),
            enc("Quagsire", 195, ["X", "Y"], "Grass", "48-50", "15%"),
          ],
        },
        {
          name: "Snowbelle City",
          description:
            "A frozen city in the mountains where it always snows. The last gym awaits here. The Pokemon Center is cozy and warm. Make sure your team is well-prepared — Wulfric's Ice types hit extremely hard. Recommended level: 55-59.",
          items: [
            item("TM13 Ice Beam", "From a girl in a house"),
          ],
        },
        {
          name: "Snowbelle Gym — Leader Wulfric",
          description:
            "Wulfric is a jolly but powerful Ice-type specialist. His gym is a rotating ice floor puzzle — step on tiles to rotate sections of the floor until you can reach him. Fire, Fighting, Rock, and Steel moves are super effective. His Avalugg is his ace — an enormous iceberg Pokemon with incredible physical Defense. Use special Fire or Fighting moves on it. Abomasnow may Mega Evolve in rematches. Cryogonal has good Special Defense, so hit it with physical moves.",
          trainers: [
            trn(
              "Ace Trainer",
              "Viktor",
              [pk("Weavile", 52, 461), pk("Mamoswine", 52, 473)],
              "₽5,200"
            ),
            trn(
              "Ace Trainer",
              "Shannon",
              [pk("Piloswine", 51, 221), pk("Cloyster", 53, 91)],
              "₽5,300"
            ),
            trn("Gym Leader", "Wulfric", [
              pk("Abomasnow", 56, 460),
              pk("Cryogonal", 55, 615),
              pk("Avalugg", 59, 713),
            ], "₽9,440 + TM13 (Ice Beam)"),
          ],
          items: [
            item("Iceberg Badge", "Defeat Wulfric"),
            item("TM13 Ice Beam", "Defeat Wulfric"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 13 — Victory Road, Pokemon League
     * ================================================================ */
    {
      part: 13,
      title: "Victory Road & the Pokemon League",
      summary:
        "Conquer Victory Road and challenge the Elite Four and Champion Diantha to become Champion of Kalos!",
      locations: [
        {
          name: "Route 21 — Derniere Way",
          description:
            "The final route before Victory Road. Strong trainers and wild Pokemon test your team one last time. Scyther and Ursaring patrol the grass. Make sure you're stocked up on Full Restores, Revives, and Max Potions before heading into Victory Road.",
          encounters: [
            enc("Scyther", 123, ["X", "Y"], "Grass", "50-52", "10%"),
            enc("Ursaring", 217, ["X", "Y"], "Grass", "50-52", "15%"),
            enc("Spinda", 327, ["X", "Y"], "Grass", "50-52", "15%"),
            enc("Altaria", 334, ["X", "Y"], "Grass", "50-52", "15%"),
            enc("Floatzel", 419, ["X", "Y"], "Grass", "50-52", "15%"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "A massive cave and outdoor mountain path leading to the Pokemon League. Hydreigon, Druddigon, and Lickitung appear here. The cave has Strength puzzles and Waterfall traversal sections. Your rival battles you near the entrance for one final test before the League. Make sure every Pokemon in your team is at least level 60 before attempting the Elite Four.",
          encounters: [
            enc("Lickitung", 108, ["X", "Y"], "Cave", "55-58", "10%"),
            enc("Gurdurr", 533, ["X", "Y"], "Cave", "55-58", "15%"),
            enc("Graveler", 75, ["X", "Y"], "Cave", "55-58", "20%"),
            enc("Haunter", 93, ["X", "Y"], "Cave", "55-58", "15%"),
            enc("Druddigon", 621, ["X", "Y"], "Cave", "55-58", "10%"),
            enc("Zweilous", 634, ["X", "Y"], "Cave", "55-58", "5%"),
            enc("Noibat", 714, ["X", "Y"], "Cave", "55-58", "10%"),
          ],
          trainers: [
            trn("Rival", "Serena/Calem", [
              pk("Meowstic", 57, 678),
              pk("Clefable", 57, 36),
              pk("Absol", 57, 359),
              pk("Jolteon", 55, 135),
              pk("Altaria", 59, 334),
            ], "₽5,900"),
          ],
          items: [
            item("TM02 Dragon Claw", "Cave 1F"),
            item("Full Restore", "Mountain path"),
            item("PP Up", "Hidden in rocks"),
            item("Rare Candy", "Side chamber"),
          ],
        },
        {
          name: "Pokemon League — Kalos",
          description:
            "The Kalos Pokemon League sits atop a beautiful castle-like structure. You can choose to battle the Elite Four in any order! Each member has a themed room. Buy plenty of Full Restores and Revives from the Poke Mart before entering. After defeating all four, you'll face Champion Diantha in the grand throne room. Recommended level: 63-68. Diantha uses a diverse team with her ace Gardevoir Mega Evolving.",
          trainers: [
            trn("Elite Four", "Malva", [
              pk("Pyroar", 63, 668),
              pk("Torkoal", 63, 324),
              pk("Chandelure", 63, 609),
              pk("Talonflame", 65, 663),
            ], "Fire specialist — use Water, Ground, Rock"),
            trn("Elite Four", "Siebold", [
              pk("Clawitzer", 63, 693),
              pk("Gyarados", 63, 130),
              pk("Starmie", 63, 121),
              pk("Barbaracle", 65, 689),
            ], "Water specialist — use Electric, Grass"),
            trn("Elite Four", "Wikstrom", [
              pk("Klefki", 63, 707),
              pk("Probopass", 63, 476),
              pk("Scizor", 63, 212),
              pk("Aegislash", 65, 681),
            ], "Steel specialist — use Fire, Fighting, Ground"),
            trn("Elite Four", "Drasna", [
              pk("Dragalge", 63, 691),
              pk("Druddigon", 63, 621),
              pk("Altaria", 63, 334),
              pk("Noivern", 65, 715),
            ], "Dragon specialist — use Ice, Fairy, Dragon"),
            trn("Champion", "Diantha", [
              pk("Hawlucha", 64, 701),
              pk("Tyrantrum", 65, 697),
              pk("Aurorus", 65, 699),
              pk("Gourgeist", 65, 711),
              pk("Goodra", 66, 706),
              pk("Mega Gardevoir", 68, 282),
            ], "Mixed team — no single weakness"),
          ],
        },
      ],
    },

    /* ================================================================
     *  PART 14 — Post-Game
     * ================================================================ */
    {
      part: 14,
      title: "Post-Game: Looker Bureau, Legendaries & Friend Safari",
      summary:
        "Embark on the Looker detective storyline, hunt legendary Pokemon, and explore the Friend Safari.",
      isPostGame: true,
      locations: [
        {
          name: "Kiloude City & Friend Safari",
          description:
            "Take the TMV train from Lumiose City to Kiloude City, unlocked after becoming Champion. This city has the Battle Maison (Kalos's Battle Tower equivalent) and the Friend Safari. The Friend Safari is a special zone where each friend registered on your 3DS has a unique safari with two or three Pokemon. The Pokemon available depend on your friend's profile and can include starters, rare Pokemon, and even hidden ability Pokemon. This is one of the best features for competitive and shiny hunters. Your rival battles you here and afterward upgrades your Mega Ring so you can find hidden Mega Stones around Kalos between 8-9 PM.",
          trainers: [
            trn("Rival", "Serena/Calem", [
              pk("Meowstic", 66, 678),
              pk("Clefable", 68, 36),
              pk("Absol", 68, 359),
              pk("Jolteon", 66, 135),
              pk("Altaria", 70, 334),
            ], "₽7,000"),
          ],
          items: [
            item("Absolite", "From your rival after battle"),
          ],
        },
        {
          name: "Looker Bureau — Detective Storyline",
          description:
            "Return to Lumiose City and visit the Looker Bureau on Rouge Plaza. Looker from previous games has set up a detective agency. Work with Looker and a mysterious girl named Emma to solve five cases around Lumiose City involving Team Flare remnants, criminal gangs, and missing Pokemon. This storyline reveals what happened to some Team Flare members after the main plot and has an emotional conclusion about Emma and her Espurr. Completing all five chapters provides significant rewards.",
          items: [
            item("Looker Ticket", "From Looker, access to the Looker Bureau"),
            item("Mega Stones", "Found around Lumiose during the storyline"),
          ],
        },
        {
          name: "Legendary Pokemon Hunts",
          description:
            "Several legendary Pokemon become available post-game. Return to Terminus Cave's deepest chamber (Route 18) to find Zygarde at Level 70 — bring plenty of Ultra Balls and Dusk Balls. One of the Kanto legendary birds (Articuno for Chespin, Zapdos for Froakie, Moltres for Fennekin) begins roaming Kalos after you become Champion. After encountering it about 12 times in the wild (it always flees), it settles at the Sea Spirit's Den in Azure Bay at Level 70. Finally, Mewtwo awaits in the Unknown Dungeon (Pokemon Village cave) at Level 70 — it holds Mewtwonite X (in X) or Mewtwonite Y (in Y).",
          items: [
            item("Zygarde", "Terminus Cave deepest chamber (Lv. 70)"),
            item("Articuno/Zapdos/Moltres", "Roaming, then Sea Spirit's Den (Lv. 70)"),
            item("Mewtwo", "Unknown Dungeon in Pokemon Village (Lv. 70)"),
            item("Mewtwonite X", "With Mewtwo in Pokemon X"),
            item("Mewtwonite Y", "With Mewtwo in Pokemon Y"),
          ],
        },
        {
          name: "Pokemon Village",
          description:
            "A hidden sanctuary near Route 20 where abandoned and mistreated Pokemon gather. Zoroark guards the entrance. Inside you can find rare Pokemon like Ditto, Banette, Jigglypuff, Poliwag, and Lombre. The Unknown Dungeon entrance (Mewtwo's cave) is located here. This peaceful area is a fitting counterpoint to Team Flare's destructive philosophy.",
          encounters: [
            enc("Ditto", 132, ["X", "Y"], "Grass", "48-50", "10%"),
            enc("Zoroark", 571, ["X", "Y"], "Grass", "48-50", "5%"),
            enc("Banette", 354, ["X", "Y"], "Grass", "48-50", "10%"),
            enc("Jigglypuff", 39, ["X", "Y"], "Grass", "48-50", "15%"),
            enc("Poliwag", 60, ["X", "Y"], "Surfing", "48-50", "30%"),
            enc("Lombre", 271, ["X", "Y"], "Grass", "48-50", "15%"),
            enc("Gothorita", 575, ["X"], "Grass", "48-50", "10%"),
            enc("Duosion", 578, ["Y"], "Grass", "48-50", "10%"),
          ],
          items: [
            item("TM29 Psychic", "Near the pond"),
            item("Pixie Plate", "Hidden in the garden"),
            item("Full Restore", "Near the Unknown Dungeon entrance"),
          ],
        },
      ],
    },
  ],
};
