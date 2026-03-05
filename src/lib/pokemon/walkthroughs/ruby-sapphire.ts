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

export const RUBY_SAPPHIRE_WALKTHROUGH: GameWalkthrough = {
  slug: "ruby-sapphire",
  gameLabel: "Ruby & Sapphire",
  versionTags: ["R", "S"],
  parts: [
    /* ===============================================================
     *  PART 1 — Littleroot Town: Save Prof. Birch, Choose Starter
     * =============================================================== */
    {
      part: 1,
      title: "Littleroot Town & Route 101",
      summary:
        "Arrive in Littleroot Town, rescue Professor Birch, and choose your starter Pokemon.",
      locations: [
        {
          name: "Littleroot Town",
          description:
            "You arrive in Littleroot Town after moving from Johto. Head to your house and set the clock. Visit the house next door to meet your rival (May or Brendan, depending on your gender). Professor Birch's lab is here but he's out doing fieldwork. Head north to Route 101 where you'll find Prof. Birch being chased by a wild Poochyena. Grab a Poke Ball from his bag and save him! You'll choose one of three starters: Treecko (Grass), Torchic (Fire), or Mudkip (Water). Return to the lab to receive your Pokemon officially and a Pokedex.",
          items: [
            item("Potion", "Your PC at the start of the game"),
            item("Pokedex", "From Professor Birch after saving him"),
            item("Running Shoes", "From your Mom after getting the Pokedex"),
          ],
        },
        {
          name: "Route 101",
          description:
            "A short route north of Littleroot Town. This is where you rescue Professor Birch from a wild Poochyena. After getting your starter, you can catch Pokemon here.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "2-3", "45%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "2-3", "45%"),
            enc("Wurmple", 265, ["R", "S"], "Grass", "2-3", "10%"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Oldale Town, Route 103, Petalburg City
     * =============================================================== */
    {
      part: 2,
      title: "Oldale Town, Route 102-103 & Petalburg City",
      summary:
        "Battle your rival on Route 103, travel through Oldale Town, and meet your father Norman in Petalburg City.",
      locations: [
        {
          name: "Oldale Town",
          description:
            "A small town with a Pokemon Center and Poke Mart. Heal up here. Head north to Route 103 to battle your rival before continuing west to Route 102.",
          items: [
            item("Potion", "From the Poke Mart clerk (sample)"),
          ],
        },
        {
          name: "Route 103",
          description:
            "Head north from Oldale Town. Your rival is waiting here for a battle. They have the starter with a type disadvantage against yours at Level 5. After winning, return to Professor Birch's lab where he gives you Poke Balls.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "2-4", "40%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "2-4", "40%"),
            enc("Wingull", 278, ["R", "S"], "Grass", "3-4", "20%"),
          ],
          trainers: [
            trn("Rival", "May/Brendan", [
              pk("Treecko", 5, 252),
            ], "₽300"),
          ],
        },
        {
          name: "Route 102",
          description:
            "Head west from Oldale Town toward Petalburg City. Several trainers here. Seedot appears only in Ruby, Lotad only in Sapphire. Ralts is very rare but an excellent catch for later.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "3-4", "30%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "3-4", "30%"),
            enc("Wurmple", 265, ["R", "S"], "Grass", "3-4", "20%"),
            enc("Lotad", 270, ["S"], "Grass", "3-4", "10%"),
            enc("Seedot", 273, ["R"], "Grass", "3-4", "10%"),
            enc("Ralts", 280, ["R", "S"], "Grass", "4", "4%"),
            enc("Surskit", 283, ["R", "S"], "Grass", "3-4", "1%"),
          ],
          trainers: [
            trn("Youngster", "Calvin", [pk("Poochyena", 5, 261)], "₽80"),
            trn("Bug Catcher", "Rick", [pk("Wurmple", 4, 265)], "₽64"),
            trn("Youngster", "Allen", [pk("Zigzagoon", 4, 263)], "₽64"),
            trn("Lass", "Tiana", [pk("Zigzagoon", 4, 263), pk("Shroomish", 4, 285)], "₽64"),
          ],
        },
        {
          name: "Petalburg City",
          description:
            "Your father Norman is the Gym Leader here, but he won't battle you until you have four badges. He introduces you to Wally, a timid boy who wants to catch his first Pokemon. You help Wally catch a Ralts, then he leaves for Verdanturf Town. Head west toward Route 104 and Petalburg Woods.",
          items: [
            item("HM03 Surf", "From Wally's Dad after Norman is defeated (later)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Petalburg Woods, Rustboro City, Rustboro Gym
     * =============================================================== */
    {
      part: 3,
      title: "Petalburg Woods, Rustboro City & Rustboro Gym",
      summary:
        "Navigate Petalburg Woods, arrive in Rustboro City, and earn the Stone Badge from Roxanne.",
      locations: [
        {
          name: "Route 104 (South)",
          description:
            "A coastal route leading north from Petalburg City toward Petalburg Woods. There's a flower shop here and a few trainers. Stock up on Poke Balls at the shop.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "4-5", "25%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "4-5", "25%"),
            enc("Wurmple", 265, ["R", "S"], "Grass", "4-5", "20%"),
            enc("Taillow", 276, ["R", "S"], "Grass", "4-5", "15%"),
            enc("Wingull", 278, ["R", "S"], "Grass", "4-5", "15%"),
          ],
          trainers: [
            trn("Youngster", "Billy", [pk("Zigzagoon", 5, 263)], "₽80"),
            trn("Fisherman", "Darian", [pk("Magikarp", 9, 129)], "₽360"),
          ],
        },
        {
          name: "Petalburg Woods",
          description:
            "A dense forest full of Bug-type Pokemon. A Devon Corporation researcher is being harassed by a Team Aqua (Sapphire) or Team Magma (Ruby) grunt. Defeat the grunt to save the researcher and he'll give you a Great Ball. Shroomish is a good catch here — it learns Absorb, useful against Roxanne.",
          encounters: [
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "5-6", "30%"),
            enc("Wurmple", 265, ["R", "S"], "Grass", "5-6", "25%"),
            enc("Silcoon", 266, ["R", "S"], "Grass", "5-6", "10%"),
            enc("Cascoon", 268, ["R", "S"], "Grass", "5-6", "10%"),
            enc("Shroomish", 285, ["R", "S"], "Grass", "5-6", "15%"),
            enc("Slakoth", 287, ["R", "S"], "Grass", "5-6", "5%"),
            enc("Taillow", 276, ["R", "S"], "Grass", "5-6", "5%"),
          ],
          trainers: [
            trn("Bug Catcher", "Lyle", [pk("Wurmple", 5, 265), pk("Wurmple", 5, 265)], "₽80"),
            trn("Team Magma Grunt", "Grunt", [pk("Poochyena", 9, 261)], "₽180"),
          ],
          items: [
            item("Great Ball", "From Devon Researcher after rescue"),
            item("Ether", "Hidden in the northwest area"),
            item("X Attack", "Near the east side of the forest"),
            item("Poke Ball", "Southwest corner"),
          ],
        },
        {
          name: "Route 104 (North)",
          description:
            "Emerge from Petalburg Woods into the northern section of Route 104. Cross the bridge with a few trainers and continue north to Rustboro City. Mr. Briney's cottage is near the shore — you'll need his help later.",
          trainers: [
            trn("Rich Boy", "Winston", [pk("Zigzagoon", 7, 263)], "₽1,400"),
            trn("Lady", "Cindy", [pk("Zigzagoon", 7, 263)], "₽1,400"),
            trn("Twins", "Gina & Mia", [pk("Lotad", 6, 270), pk("Seedot", 6, 273)], "₽144"),
          ],
        },
        {
          name: "Rustboro City",
          description:
            "A large city built from stone. Visit the Pokemon School to learn battle mechanics. The Devon Corporation HQ is here — you'll interact with it throughout the story. Heal up at the Pokemon Center and prepare for the first Gym.",
          items: [
            item("HM01 Cut", "From the Cutter's house west of the Pokemon Center"),
            item("Quick Claw", "Rustboro Pokemon School"),
          ],
        },
        {
          name: "Rustboro Gym -- Leader Roxanne",
          description:
            "Roxanne specializes in Rock-type Pokemon. Water, Grass, and Fighting moves are super effective. If you chose Mudkip or Treecko, this gym is straightforward. Torchic users should train a Shroomish or Lotad. Her Nosepass can be tricky with Rock Tomb, which lowers your Speed. Defeat her to earn the Stone Badge, which boosts Attack and lets you use Cut outside of battle.",
          trainers: [
            trn("Youngster", "Tommy", [pk("Geodude", 10, 74)], "₽160"),
            trn("Youngster", "Marc", [pk("Geodude", 8, 74), pk("Geodude", 8, 74)], "₽128"),
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

    /* ===============================================================
     *  PART 4 — Rusturf Tunnel, Dewford Town, Dewford Gym
     * =============================================================== */
    {
      part: 4,
      title: "Route 116, Rusturf Tunnel, Dewford Town & Dewford Gym",
      summary:
        "Chase down a Team Grunt through Route 116, visit Dewford Town via Mr. Briney's boat, and earn the Knuckle Badge from Brawly.",
      locations: [
        {
          name: "Route 116",
          description:
            "After defeating Roxanne, a Team Aqua/Magma grunt steals the Devon Goods. Chase him east through Route 116 toward Rusturf Tunnel. Nincada is a great catch here — it evolves into Ninjask and can also produce Shedinja. Taillow and Whismur are common.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "6-8", "28%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "6-8", "20%"),
            enc("Taillow", 276, ["R", "S"], "Grass", "6-8", "20%"),
            enc("Whismur", 293, ["R", "S"], "Grass", "6-8", "20%"),
            enc("Nincada", 290, ["R", "S"], "Grass", "6-7", "10%"),
            enc("Skitty", 300, ["R", "S"], "Grass", "7-8", "2%"),
          ],
          trainers: [
            trn("Youngster", "Joey", [pk("Machop", 9, 66)], "₽144"),
            trn("Bug Catcher", "Jose", [pk("Nincada", 8, 290)], "₽128"),
            trn("School Kid", "Karen", [pk("Shroomish", 9, 285)], "₽180"),
            trn("Hiker", "Clark", [pk("Geodude", 8, 74)], "₽320"),
          ],
        },
        {
          name: "Rusturf Tunnel",
          description:
            "A short tunnel connecting Route 116 to Verdanturf Town (blocked by rocks for now). Confront the grunt inside and retrieve the stolen Devon Goods. Return them to the Devon President in Rustboro City — he gives you the PokeNav and asks you to deliver a letter to Steven in Dewford. Head to Mr. Briney's cottage on Route 104 to sail to Dewford Town.",
          encounters: [
            enc("Whismur", 293, ["R", "S"], "Cave", "5-8", "100%"),
          ],
          items: [
            item("Devon Goods", "Recovered from Team Grunt"),
            item("PokeNav", "From Devon President after returning goods"),
            item("Letter", "From Devon President to deliver to Steven"),
          ],
        },
        {
          name: "Dewford Town",
          description:
            "A small island town accessible only by boat. Mr. Briney sails you here from Route 104. There's a Gym and Granite Cave nearby. Talk to the townsfolk about trends. Deliver Steven's letter in Granite Cave before or after challenging the Gym.",
          items: [
            item("Old Rod", "From the fisherman on the dock"),
            item("Silk Scarf", "From a boy in one of the houses"),
          ],
        },
        {
          name: "Granite Cave",
          description:
            "A multi-floor cave north of Dewford Town. Steven is deep inside studying rare stones. Deliver his letter and he gives you TM47 Steel Wing. You'll need Flash (from the Hiker at the entrance) to navigate the dark lower floors. Makuhita and Aron are excellent catches here.",
          encounters: [
            enc("Zubat", 41, ["R", "S"], "Cave", "7-10", "50%"),
            enc("Makuhita", 296, ["R", "S"], "Cave", "7-10", "30%"),
            enc("Geodude", 74, ["R", "S"], "Cave", "7-10", "10%"),
            enc("Aron", 304, ["R", "S"], "Cave", "8-10", "10%"),
            enc("Sableye", 302, ["S"], "Cave", "9-11", "10%"),
            enc("Mawile", 303, ["R"], "Cave", "9-11", "10%"),
          ],
          trainers: [
            trn("Hiker", "Mike", [pk("Geodude", 10, 74), pk("Geodude", 10, 74)], "₽400"),
          ],
          items: [
            item("TM47 Steel Wing", "From Steven after delivering the letter"),
            item("HM05 Flash", "From Hiker at cave entrance"),
            item("Escape Rope", "B1F"),
            item("Repel", "B1F"),
            item("Rare Candy", "B2F (requires Flash)"),
            item("Everstone", "B2F"),
          ],
        },
        {
          name: "Dewford Gym -- Leader Brawly",
          description:
            "Brawly specializes in Fighting-type Pokemon. Flying and Psychic moves are super effective. The gym is dark — you must defeat trainers to light up the room. His Makuhita has Bulk Up and Arm Thrust, making it dangerous if it sets up. Taillow with Wing Attack or Ralts with Confusion are great choices. Defeat Brawly for the Knuckle Badge, which boosts the power of moves and lets you use Flash outside of battle.",
          trainers: [
            trn("Battle Girl", "Laura", [pk("Meditite", 13, 307)], "₽312"),
            trn("Sailor", "Brenden", [pk("Machop", 13, 66)], "₽416"),
            trn("Gym Leader", "Brawly", [
              pk("Machop", 16, 66),
              pk("Meditite", 16, 307),
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

    /* ===============================================================
     *  PART 5 — Slateport City, Route 110, Mauville Gym
     * =============================================================== */
    {
      part: 5,
      title: "Slateport City, Route 110 & Mauville Gym",
      summary:
        "Sail to Slateport, explore the Oceanic Museum, travel to Mauville City, and earn the Dynamo Badge from Wattson.",
      locations: [
        {
          name: "Route 109 & Slateport Beach",
          description:
            "Mr. Briney sails you from Dewford to Slateport. Route 109 is the beach area south of Slateport City with swimmers and beach trainers. You can explore the Seashore House for battles.",
          encounters: [
            enc("Tentacool", 72, ["R", "S"], "Surfing", "5-35", "60%"),
            enc("Wingull", 278, ["R", "S"], "Surfing", "10-30", "35%"),
            enc("Pelipper", 279, ["R", "S"], "Surfing", "25-30", "5%"),
            enc("Magikarp", 129, ["R", "S"], "Old Rod", "5-10", "70%"),
            enc("Tentacool", 72, ["R", "S"], "Old Rod", "5-10", "30%"),
          ],
          trainers: [
            trn("Tuber", "Ricky", [pk("Zigzagoon", 9, 263)], "₽36"),
            trn("Sailor", "Huey", [pk("Wingull", 12, 278), pk("Machop", 12, 66)], "₽384"),
            trn("Beauty", "Johanna", [pk("Goldeen", 13, 118)], "₽1,040"),
          ],
        },
        {
          name: "Slateport City",
          description:
            "A busy port city. Visit the Oceanic Museum where Team Aqua/Magma grunts are causing trouble. Defeat them inside the museum and meet their leader (Archie for Aqua, Maxie for Magma). The market area sells useful items. The Name Rater is here too. Deliver the Devon Goods to Captain Stern at the Shipyard, then head north to Route 110.",
          items: [
            item("TM46 Thief", "From Oceanic Museum after clearing Team grunts"),
            item("Exp. Share", "From the Devon President's aide on Route 116 (50+ Pokemon seen)"),
            item("Contest Pass", "From the Contest Hall receptionist"),
          ],
        },
        {
          name: "Route 110",
          description:
            "A long route north of Slateport leading to Mauville City. The Cycling Road (requires a Bike) runs above the main path. Plusle and Minun can only be caught in the tall grass here. Electrike is a solid Electric-type pickup. Your rival ambushes you for a battle partway through. Defeat them and continue north.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "12-13", "20%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "12-13", "20%"),
            enc("Electrike", 309, ["R", "S"], "Grass", "12-13", "25%"),
            enc("Gulpin", 316, ["R", "S"], "Grass", "12-13", "15%"),
            enc("Plusle", 311, ["R", "S"], "Grass", "12-13", "4%"),
            enc("Minun", 312, ["R", "S"], "Grass", "12-13", "4%"),
            enc("Oddish", 43, ["R", "S"], "Grass", "12-13", "5%"),
            enc("Wingull", 278, ["R", "S"], "Grass", "12-13", "7%"),
          ],
          trainers: [
            trn("Rival", "May/Brendan", [
              pk("Slugma", 18, 218),
              pk("Wingull", 18, 278),
              pk("Grovyle", 20, 253),
            ], "₽1,200"),
            trn("Triathlete", "Abigail", [pk("Magnemite", 16, 81)], "₽640"),
            trn("Fisherman", "Dale", [pk("Tentacool", 11, 72), pk("Tentacool", 14, 72), pk("Wailmer", 17, 320)], "₽680"),
            trn("Collector", "Edwin", [pk("Lombre", 14, 271), pk("Nuzleaf", 14, 274)], "₽840"),
          ],
          items: [
            item("Dire Hit", "Hidden on Cycling Road"),
            item("Rare Candy", "Near the Trick House"),
          ],
        },
        {
          name: "Mauville City",
          description:
            "A crossroads city in the center of Hoenn. Get the Mach Bike or Acro Bike from Rydel's Cycles. The Game Corner is here too. Wally challenges you outside the Gym but his team is still weak. Head inside when ready.",
          items: [
            item("Mach Bike or Acro Bike", "Rydel's Cycles (choose one)"),
            item("HM06 Rock Smash", "From the Rock Smash guy's house east of the Mart"),
            item("Coin Case", "From the girl in the house next to the Game Corner"),
          ],
        },
        {
          name: "Mauville Gym -- Leader Wattson",
          description:
            "Wattson specializes in Electric-type Pokemon. Ground moves are the best counter — Geodude or Marshtomp (if you chose Mudkip) are ideal. The gym has electric barriers that you must deactivate by pressing switches. His Magneton has Volt Switch and can be tough. Defeat Wattson for the Dynamo Badge, which lets you use Rock Smash outside of battle.",
          trainers: [
            trn("Guitarist", "Kirk", [pk("Electrike", 17, 309), pk("Voltorb", 17, 100)], "₽544"),
            trn("Battle Girl", "Vivian", [pk("Meditite", 17, 307)], "₽408"),
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

    /* ===============================================================
     *  PART 6 — Route 111 Desert, Mt. Chimney, Lavaridge Gym
     * =============================================================== */
    {
      part: 6,
      title: "Route 111 Desert, Mt. Chimney & Lavaridge Gym",
      summary:
        "Explore the desert on Route 111, confront Team Magma/Aqua on Mt. Chimney, and earn the Heat Badge from Flannery.",
      locations: [
        {
          name: "Route 111 (South & Desert)",
          description:
            "Head north from Mauville City. The southern part of Route 111 has trainers and the Winstrate family's house (beat all four for a Macho Brace). The desert in the middle requires Go-Goggles (obtained after Lavaridge Gym). Later you can return for Trapinch, Cacnea, and Baltoy. The route continues north toward Route 112 and Mt. Chimney.",
          encounters: [
            enc("Sandshrew", 27, ["R", "S"], "Grass", "19-21", "30%"),
            enc("Trapinch", 328, ["R", "S"], "Grass", "19-21", "20%"),
            enc("Cacnea", 331, ["R", "S"], "Grass", "19-21", "20%"),
            enc("Baltoy", 343, ["R", "S"], "Grass", "19-21", "20%"),
          ],
          items: [
            item("Macho Brace", "Defeat the Winstrate family"),
            item("TM37 Sandstorm", "Desert (requires Go-Goggles)"),
            item("Root Fossil or Claw Fossil", "Desert tower (choose one)"),
          ],
        },
        {
          name: "Route 112 & Fiery Path",
          description:
            "Route 112 leads up to Mt. Chimney via the cable car. The Fiery Path is a short cave passage on the route. Numel is common here and a decent Fire/Ground type.",
          encounters: [
            enc("Numel", 322, ["R", "S"], "Grass", "14-16", "55%"),
            enc("Marill", 183, ["R", "S"], "Grass", "14-16", "30%"),
            enc("Machop", 66, ["R", "S"], "Grass", "14-16", "10%"),
            enc("Torkoal", 324, ["R", "S"], "Cave", "14-16", "5%"),
          ],
        },
        {
          name: "Mt. Chimney",
          description:
            "Take the cable car to the summit. Team Magma (Ruby) or Team Aqua (Sapphire) is here trying to use the volcano for their plans. Fight through grunts and their admins. In Ruby, battle Team Magma leader Maxie who wants to expand the landmass. In Sapphire, battle Team Aqua leader Archie. After clearing the summit, head down the Jagged Pass to Lavaridge Town.",
          trainers: [
            trn("Magma Admin", "Tabitha", [
              pk("Numel", 18, 322),
              pk("Poochyena", 20, 261),
              pk("Numel", 22, 322),
              pk("Zubat", 22, 41),
            ], "₽880"),
            trn("Magma Leader", "Maxie", [
              pk("Mightyena", 24, 262),
              pk("Zubat", 24, 41),
              pk("Camerupt", 25, 323),
            ], "₽2,000"),
          ],
          items: [
            item("Meteorite", "From the Team leader after battle"),
          ],
        },
        {
          name: "Jagged Pass",
          description:
            "A steep path leading down from Mt. Chimney to Lavaridge Town. You need the Acro Bike to hop across certain rocks here. Spoink and Numel can be caught on this route.",
          encounters: [
            enc("Machop", 66, ["R", "S"], "Grass", "18-22", "20%"),
            enc("Numel", 322, ["R", "S"], "Grass", "18-22", "55%"),
            enc("Spoink", 325, ["R", "S"], "Grass", "18-22", "25%"),
          ],
        },
        {
          name: "Lavaridge Town",
          description:
            "A town at the base of Mt. Chimney, famous for its hot springs. Visit the herb shop for cheap healing items (but they taste bitter, lowering happiness). Prepare for Flannery's Fire-type Gym.",
          items: [
            item("Go-Goggles", "From your rival after arriving"),
            item("Pokemon Egg (Wynaut)", "From the old lady near the hot springs"),
          ],
        },
        {
          name: "Lavaridge Gym -- Leader Flannery",
          description:
            "Flannery specializes in Fire-type Pokemon. Water and Ground moves are the way to go. The gym is a steam-filled puzzle — fall through holes in the floor and use geysers to navigate. Her Torkoal is tanky with Overheat and can burn you. Marshtomp or any Water type will sweep her. Defeat Flannery for the Heat Badge, which lets you use Strength outside of battle.",
          trainers: [
            trn("Kindler", "Jeff", [pk("Slugma", 22, 218)], "₽704"),
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

    /* ===============================================================
     *  PART 7 — Petalburg Gym, Routes 118-119, Weather Institute
     * =============================================================== */
    {
      part: 7,
      title: "Petalburg Gym, Route 118-119 & Weather Institute",
      summary:
        "Return to Petalburg for the fifth badge from your father Norman, then travel east through Routes 118-119 and save the Weather Institute.",
      locations: [
        {
          name: "Petalburg Gym -- Leader Norman",
          description:
            "Your father Norman specializes in Normal-type Pokemon. Fighting moves are the only super effective option. His gym has a series of rooms — each door leads to a trainer with a different battle gimmick (Speed Room, Defense Room, etc.). Choose your path carefully. Norman's Slaking has the Truant ability (loafs every other turn) but hits extremely hard with Facade. Use the free turns wisely. Defeat Norman for the Balance Badge and HM03 Surf from Wally's father.",
          trainers: [
            trn("Cooltrainer", "Randall", [pk("Delcatty", 26, 301)], "₽1,248"),
            trn("Cooltrainer", "Mary", [pk("Delcatty", 26, 301)], "₽1,248"),
            trn("Cooltrainer", "Parker", [pk("Linoone", 26, 264)], "₽1,248"),
            trn("Cooltrainer", "Lori", [pk("Linoone", 26, 264)], "₽1,248"),
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
        {
          name: "Route 118",
          description:
            "East of Mauville City, you'll need Surf to cross the water. On the other side, you'll meet Steven who upgrades your PokeNav with the Match Call feature. Electrike and Zigzagoon are common here. Kecleon can also be found.",
          encounters: [
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "24-26", "30%"),
            enc("Electrike", 309, ["R", "S"], "Grass", "24-26", "30%"),
            enc("Wingull", 278, ["R", "S"], "Grass", "24-26", "15%"),
            enc("Linoone", 264, ["R", "S"], "Grass", "24-26", "10%"),
            enc("Manectric", 310, ["R", "S"], "Grass", "26", "10%"),
            enc("Kecleon", 352, ["R", "S"], "Grass", "25-26", "5%"),
          ],
        },
        {
          name: "Route 119",
          description:
            "A long, rainy route with tall grass and many trainers. This is one of the longest routes in Hoenn. The Weather Institute is partway through — Team Aqua/Magma has taken it over. Clear them out and the scientists give you Castform. Continue north to Fortree City.",
          encounters: [
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "25-27", "20%"),
            enc("Linoone", 264, ["R", "S"], "Grass", "25-27", "10%"),
            enc("Oddish", 43, ["R", "S"], "Grass", "25-27", "30%"),
            enc("Tropius", 357, ["R", "S"], "Grass", "25-27", "5%"),
            enc("Kecleon", 352, ["R", "S"], "Grass", "25-27", "5%"),
            enc("Feebas", 349, ["R", "S"], "Fishing", "20-25", "—"),
          ],
          trainers: [
            trn("Bug Maniac", "Donald", [pk("Wurmple", 24, 265), pk("Silcoon", 24, 266), pk("Beautifly", 24, 267)], "₽1,440"),
            trn("Ninja Boy", "Yasu", [pk("Ninjask", 26, 291)], "₽312"),
            trn("Bird Keeper", "Hugh", [pk("Wingull", 25, 278), pk("Tropius", 25, 357)], "₽800"),
          ],
          items: [
            item("Castform", "Gift from Weather Institute scientists"),
            item("HM02 Fly", "From your rival on Route 119 after Weather Institute"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Fortree City, Fortree Gym, Routes 120-121
     * =============================================================== */
    {
      part: 8,
      title: "Fortree City, Fortree Gym & Routes 120-121",
      summary:
        "Explore Fortree City in the treetops, uncover the invisible Kecleon, and earn the Feather Badge from Winona.",
      locations: [
        {
          name: "Fortree City",
          description:
            "A city built in the treetops connected by rope bridges. The Gym entrance is blocked by an invisible obstacle. You need to continue east to Route 120 to get the Devon Scope from Steven, which reveals an invisible Kecleon blocking the Gym door. Use the Devon Scope on it, battle or catch it, then enter the Gym.",
          items: [
            item("TM10 Hidden Power", "From a house in Fortree"),
          ],
        },
        {
          name: "Route 120",
          description:
            "A long route east of Fortree with tall grass and bridges over a lake. Steven is here — he gives you the Devon Scope to see invisible Kecleon. Absol can be found in the tall grass here and is a solid Dark-type addition to your team. There are also some hidden items on the lake island.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "25-27", "20%"),
            enc("Mightyena", 262, ["R", "S"], "Grass", "25-27", "10%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "25-27", "20%"),
            enc("Linoone", 264, ["R", "S"], "Grass", "25-27", "10%"),
            enc("Oddish", 43, ["R", "S"], "Grass", "25-27", "25%"),
            enc("Absol", 359, ["R", "S"], "Grass", "25-27", "8%"),
            enc("Kecleon", 352, ["R", "S"], "Grass", "25-27", "5%"),
            enc("Surskit", 283, ["R", "S"], "Surfing", "20-30", "1%"),
          ],
          items: [
            item("Devon Scope", "From Steven on Route 120"),
            item("Nugget", "Hidden on the lake island"),
          ],
        },
        {
          name: "Route 121",
          description:
            "Continues east from Route 120 toward Lilycove City. A junction leads south to the Safari Zone entrance (Route 121). Shuppet and Duskull can be caught here for Ghost-type coverage. The Safari Zone has many Pokemon not available elsewhere.",
          encounters: [
            enc("Poochyena", 261, ["R", "S"], "Grass", "26-28", "20%"),
            enc("Mightyena", 262, ["R", "S"], "Grass", "26-28", "10%"),
            enc("Zigzagoon", 263, ["R", "S"], "Grass", "26-28", "20%"),
            enc("Linoone", 264, ["R", "S"], "Grass", "26-28", "10%"),
            enc("Oddish", 43, ["R", "S"], "Grass", "26-28", "25%"),
            enc("Shuppet", 353, ["R", "S"], "Grass", "26-28", "8%"),
            enc("Duskull", 355, ["R", "S"], "Grass", "26-28", "7%"),
          ],
        },
        {
          name: "Fortree Gym -- Leader Winona",
          description:
            "Winona specializes in Flying-type Pokemon. Electric, Ice, and Rock moves are super effective. The gym has revolving doors that you rotate to navigate to Winona. Her Altaria is the biggest threat — it knows Earthquake (countering Electric types) and Dragon Dance. An Ice move or a Rock type will handle it. Defeat Winona for the Feather Badge, which lets you use Fly outside of battle.",
          trainers: [
            trn("Bird Keeper", "Jared", [pk("Doduo", 28, 84), pk("Skarmory", 28, 227)], "₽896"),
            trn("Picnicker", "Kylee", [pk("Swablu", 28, 333), pk("Swablu", 28, 333)], "₽448"),
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

    /* ===============================================================
     *  PART 9 — Lilycove City, Mt. Pyre, Team Hideout
     * =============================================================== */
    {
      part: 9,
      title: "Lilycove City, Mt. Pyre & Team Magma/Aqua Hideout",
      summary:
        "Explore Lilycove City, climb Mt. Pyre to stop Team Magma/Aqua, and raid their secret hideout.",
      locations: [
        {
          name: "Lilycove City",
          description:
            "A large coastal city in eastern Hoenn. The Department Store here is the biggest shop in the game — stock up on everything. The Contest Hall hosts Master Rank contests. Team Aqua/Magma has blocked the eastern exit with Wailmer. Visit the Lilycove Museum and the Pokemon Fan Club. Your rival battles you one more time near the Department Store.",
          trainers: [
            trn("Rival", "May/Brendan", [
              pk("Swellow", 29, 277),
              pk("Slugma", 29, 218),
              pk("Lombre", 29, 271),
              pk("Sceptile", 31, 254),
            ], "₽1,860"),
          ],
          items: [
            item("Max Repel", "Department Store (purchase)"),
            item("TM44 Rest", "From a man near the lighthouse"),
          ],
        },
        {
          name: "Mt. Pyre",
          description:
            "A massive cemetery for Pokemon, located on Route 122 (Surf south from Route 121). The exterior has wild Vulpix and Chimecho (very rare). Team Magma/Aqua is at the summit stealing the Red Orb (Ruby) or Blue Orb (Sapphire) from the old couple. Fight through grunts to reach the top. After the theft, the old couple gives you the remaining orb. The team retreats to their hideout.",
          encounters: [
            enc("Shuppet", 353, ["R", "S"], "Building", "24-30", "50%"),
            enc("Duskull", 355, ["R", "S"], "Building", "24-30", "50%"),
            enc("Vulpix", 37, ["R", "S"], "Grass", "24-28", "20%"),
            enc("Meditite", 307, ["R", "S"], "Grass", "24-28", "20%"),
            enc("Wingull", 278, ["R", "S"], "Grass", "24-28", "10%"),
            enc("Chimecho", 358, ["R", "S"], "Grass", "26-28", "2%"),
          ],
          items: [
            item("Blue Orb", "From the old couple at the summit (Ruby)"),
            item("Red Orb", "From the old couple at the summit (Sapphire)"),
            item("Cleanse Tag", "From the old woman on 4F"),
            item("Lax Incense", "Summit area"),
            item("TM30 Shadow Ball", "Exterior area"),
          ],
        },
        {
          name: "Team Magma Hideout / Team Aqua Hideout",
          description:
            "In Ruby, Team Magma's hideout is inside Mt. Chimney (Jagged Pass entrance). In Sapphire, Team Aqua's hideout is in a cove near Lilycove City. Navigate through the base, fighting grunts and solving puzzles with teleporter pads. The team leader reveals their plan to awaken Groudon (Ruby) or Kyogre (Sapphire). They escape by submarine. After clearing the hideout, the Wailmer blocking Lilycove's east exit are gone.",
          trainers: [
            trn("Team Magma Grunt", "Grunt", [pk("Poochyena", 29, 261)], "₽580"),
            trn("Team Magma Grunt", "Grunt", [pk("Numel", 29, 322)], "₽580"),
            trn("Team Magma Admin", "Tabitha", [
              pk("Camerupt", 28, 323),
              pk("Mightyena", 28, 262),
              pk("Golbat", 28, 42),
            ], "₽1,120"),
          ],
          items: [
            item("Master Ball", "In the hideout (hidden item)"),
            item("Max Elixir", "Hideout interior"),
            item("Nugget", "Hideout interior"),
            item("Electrode", "Disguised as Poke Balls (battle them)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Mossdeep City, Mossdeep Gym, Space Center
     * =============================================================== */
    {
      part: 10,
      title: "Mossdeep City, Mossdeep Gym & Space Center",
      summary:
        "Surf east to Mossdeep City, explore the Space Center, and earn the Mind Badge from Tate & Liza in a Double Battle.",
      locations: [
        {
          name: "Route 124-125",
          description:
            "Ocean routes east of Lilycove leading to Mossdeep City. Dive spots are scattered here (you'll need HM08 Dive later). Many swimmers to battle. You can find Clamperl underwater and Relicanth in the seaweed.",
          encounters: [
            enc("Tentacool", 72, ["R", "S"], "Surfing", "5-35", "60%"),
            enc("Wingull", 278, ["R", "S"], "Surfing", "10-30", "35%"),
            enc("Pelipper", 279, ["R", "S"], "Surfing", "25-30", "5%"),
            enc("Magikarp", 129, ["R", "S"], "Old Rod", "5-10", "70%"),
            enc("Wailmer", 320, ["R", "S"], "Good Rod", "10-30", "60%"),
          ],
        },
        {
          name: "Mossdeep City",
          description:
            "An island city in eastern Hoenn, home to the Mossdeep Space Center. Steven's house is here — talk to him for intel. The Space Center has been visited by Team Magma/Aqua. A fisherman gives you the Super Rod. Prepare for the unique Double Battle Gym.",
          items: [
            item("Super Rod", "From the fisherman in a house"),
            item("HM08 Dive", "From Steven's house after clearing Space Center"),
            item("King's Rock", "From a man in a house"),
            item("Net Ball", "From a man near the Space Center"),
          ],
        },
        {
          name: "Mossdeep Gym -- Leaders Tate & Liza",
          description:
            "Tate and Liza are twin Gym Leaders who specialize in Psychic-type Pokemon. This is a Double Battle! They use Lunatone and Solrock together, which complement each other well. Dark, Ghost, and Bug moves are super effective. A Water type with Surf can hit both opponents. Their Solrock has Sunny Day + Solar Beam while Lunatone has Calm Mind. Defeat them for the Mind Badge, which lets you use Dive outside of battle.",
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

    /* ===============================================================
     *  PART 11 — Seafloor Cavern, Legendary Awakening, Sootopolis Gym
     * =============================================================== */
    {
      part: 11,
      title: "Seafloor Cavern, Groudon/Kyogre & Sootopolis Gym",
      summary:
        "Dive to the Seafloor Cavern, witness the awakening of Groudon or Kyogre, and earn the Rain Badge in Sootopolis City.",
      locations: [
        {
          name: "Route 126-127 & Seafloor Cavern",
          description:
            "Use Dive on Route 128 to find the entrance to the Seafloor Cavern. Navigate through underwater passages and surface inside the cavern. Team Magma (Ruby) or Team Aqua (Sapphire) is here with their leader attempting to awaken Groudon or Kyogre using the stolen Orb. Fight through grunts, use Strength and Rock Smash to navigate, and confront the Team Leader. The legendary Pokemon awakens and escapes, causing a massive drought (Ruby) or torrential rain (Sapphire) across Hoenn.",
          encounters: [
            enc("Zubat", 41, ["R", "S"], "Cave", "30-35", "50%"),
            enc("Golbat", 42, ["R", "S"], "Cave", "30-35", "40%"),
            enc("Tentacool", 72, ["R", "S"], "Surfing", "5-35", "60%"),
            enc("Wailmer", 320, ["R", "S"], "Surfing", "20-35", "40%"),
          ],
          trainers: [
            trn("Team Magma Admin", "Tabitha", [
              pk("Mightyena", 36, 262),
              pk("Camerupt", 38, 323),
            ], "₽1,520"),
            trn("Magma Leader", "Maxie", [
              pk("Mightyena", 37, 262),
              pk("Crobat", 38, 169),
              pk("Camerupt", 39, 323),
            ], "₽3,120"),
          ],
        },
        {
          name: "Sootopolis City",
          description:
            "A city built inside a volcanic crater, accessible only by Surfing or Diving through an underwater cave. Groudon (Ruby) or Kyogre (Sapphire) is rampaging here. Go to the Cave of Origin where Steven and Wallace are waiting. Enter the cave and confront the legendary Pokemon. In Ruby, Groudon (Lv. 45) is at the bottom of the cave. In Sapphire, Kyogre (Lv. 45) is in an underwater cavern. Save before the encounter! After catching or defeating the legendary, the weather returns to normal. Now you can challenge the Sootopolis Gym.",
          encounters: [
            enc("Groudon", 383, ["R"], "Cave", "45", "—"),
            enc("Kyogre", 382, ["S"], "Cave", "45", "—"),
          ],
          items: [
            item("HM07 Waterfall", "From the Gym after resolving the crisis"),
          ],
        },
        {
          name: "Sootopolis Gym -- Leader Wallace",
          description:
            "Wallace (Ruby/Sapphire) specializes in Water-type Pokemon. Electric and Grass moves are super effective. The gym has an ice-tile puzzle — step on each tile exactly once to make stairs appear. His Milotic is extremely bulky with Recover and can stall you out. A strong Electric type or a Grass type with a powerful STAB move is essential. Defeat Wallace for the Rain Badge, the final badge, which makes all Pokemon obey you and lets you use Waterfall outside of battle.",
          trainers: [
            trn("Beauty", "Olivia", [pk("Lombre", 38, 271), pk("Lombre", 38, 271)], "₽3,040"),
            trn("Pokefan", "Marissa", [pk("Azumarill", 38, 184)], "₽3,040"),
            trn("Beauty", "Tiffany", [pk("Carvanha", 38, 318), pk("Sharpedo", 38, 319)], "₽3,040"),
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

    /* ===============================================================
     *  PART 12 — Pacifidlog Town, Victory Road
     * =============================================================== */
    {
      part: 12,
      title: "Route 126-128, Pacifidlog Town & Victory Road",
      summary:
        "Explore the ocean routes, visit Pacifidlog Town, and navigate Victory Road to reach the Pokemon League.",
      locations: [
        {
          name: "Routes 126-128",
          description:
            "Ocean routes connecting the eastern islands of Hoenn. Route 126 leads to the Underwater cavern entrance to Sootopolis. Route 127 and 128 are open water with many swimmers. Use Dive to explore underwater areas for hidden items and rare Pokemon like Relicanth and Clamperl.",
          encounters: [
            enc("Tentacool", 72, ["R", "S"], "Surfing", "5-35", "60%"),
            enc("Wingull", 278, ["R", "S"], "Surfing", "10-30", "35%"),
            enc("Wailmer", 320, ["R", "S"], "Good Rod", "10-30", "60%"),
            enc("Sharpedo", 319, ["R", "S"], "Super Rod", "30-35", "40%"),
            enc("Clamperl", 366, ["R", "S"], "Diving", "20-30", "60%"),
            enc("Relicanth", 369, ["R", "S"], "Diving", "25-35", "5%"),
          ],
        },
        {
          name: "Pacifidlog Town",
          description:
            "A town built on floating logs and Corsola, accessible by Surfing on Route 131. The town is the gateway to the Sky Pillar (post-game) and the sealed chamber (for the Regi trio). TM27 Return can be found here from a friendly NPC if your lead Pokemon has high happiness.",
          items: [
            item("TM27 Return", "From a girl if lead Pokemon has high happiness"),
          ],
        },
        {
          name: "Route 128 & Ever Grande City",
          description:
            "Surf and use Waterfall to reach Ever Grande City, the site of the Pokemon League. The waterfall entrance is dramatic. Heal at the Pokemon Center before entering Victory Road.",
        },
        {
          name: "Victory Road",
          description:
            "A challenging cave with multiple floors, Strength puzzles, and Rock Smash boulders. Strong trainers guard the path. Wally challenges you near the end of Victory Road with his fully evolved Gardevoir leading the team. This is the final test before the Elite Four. Make sure your team is Level 45+ before attempting the Pokemon League.",
          encounters: [
            enc("Zubat", 41, ["R", "S"], "Cave", "36-40", "30%"),
            enc("Golbat", 42, ["R", "S"], "Cave", "36-40", "30%"),
            enc("Makuhita", 296, ["R", "S"], "Cave", "36-40", "10%"),
            enc("Hariyama", 297, ["R", "S"], "Cave", "38-40", "5%"),
            enc("Aron", 304, ["R", "S"], "Cave", "36-40", "10%"),
            enc("Lairon", 305, ["R", "S"], "Cave", "38-40", "5%"),
            enc("Mawile", 303, ["R"], "Cave", "36-40", "5%"),
            enc("Sableye", 302, ["S"], "Cave", "36-40", "5%"),
            enc("Loudred", 294, ["R", "S"], "Cave", "36-40", "5%"),
          ],
          trainers: [
            trn("Cooltrainer", "Albert", [pk("Magneton", 43, 82), pk("Muk", 43, 89)], "₽2,064"),
            trn("Cooltrainer", "Hope", [pk("Roselia", 43, 315)], "₽2,064"),
            trn("Cooltrainer", "Shannon", [pk("Claydol", 43, 344)], "₽2,064"),
            trn("Pokemon Trainer", "Wally", [
              pk("Altaria", 44, 334),
              pk("Delcatty", 43, 301),
              pk("Roselia", 44, 315),
              pk("Magneton", 41, 82),
              pk("Gardevoir", 45, 282),
            ], "₽2,700"),
          ],
          items: [
            item("TM29 Psychic", "Victory Road B1F"),
            item("Full Restore", "Victory Road 1F"),
            item("PP Up", "Victory Road B2F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Pokemon League
     * =============================================================== */
    {
      part: 13,
      title: "Pokemon League -- Elite Four & Champion",
      summary:
        "Challenge the Elite Four and Champion Steven to become the Hoenn Pokemon League Champion!",
      locations: [
        {
          name: "Ever Grande City -- Pokemon League",
          description:
            "The ultimate challenge! Stock up on Full Restores, Revives, and Max Potions from the Poke Mart before entering. You must defeat all four Elite Four members and the Champion in a row without visiting a Pokemon Center. Save before entering! Recommended level: 48-55+. Sidney uses Dark types, Phoebe uses Ghost types, Glacia uses Ice types, Drake uses Dragon types, and Champion Steven uses Steel types with his signature Metagross.",
          trainers: [
            trn("Elite Four", "Sidney", [
              pk("Mightyena", 46, 262),
              pk("Cacturne", 46, 332),
              pk("Shiftry", 48, 275),
              pk("Sharpedo", 48, 319),
              pk("Absol", 49, 359),
            ], "Dark specialist -- use Fighting, Bug, Fairy"),
            trn("Elite Four", "Phoebe", [
              pk("Dusclops", 48, 356),
              pk("Banette", 49, 354),
              pk("Banette", 49, 354),
              pk("Sableye", 50, 302),
              pk("Dusclops", 51, 356),
            ], "Ghost specialist -- use Dark, Ghost"),
            trn("Elite Four", "Glacia", [
              pk("Sealeo", 50, 364),
              pk("Sealeo", 50, 364),
              pk("Glalie", 52, 362),
              pk("Glalie", 52, 362),
              pk("Walrein", 53, 365),
            ], "Ice specialist -- use Fighting, Fire, Rock, Steel"),
            trn("Elite Four", "Drake", [
              pk("Shelgon", 52, 372),
              pk("Altaria", 54, 334),
              pk("Flygon", 53, 330),
              pk("Flygon", 53, 330),
              pk("Salamence", 55, 373),
            ], "Dragon specialist -- use Ice, Dragon"),
            trn("Champion", "Steven", [
              pk("Skarmory", 57, 227),
              pk("Claydol", 55, 344),
              pk("Aggron", 56, 306),
              pk("Cradily", 56, 346),
              pk("Armaldo", 56, 348),
              pk("Metagross", 58, 376),
            ], "Steel specialist -- use Fire, Ground, Fighting, Water"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Post-Game
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Sky Pillar, Regis & Battle Tower",
      summary:
        "Climb Sky Pillar to encounter Rayquaza, unlock the Regi trio, and challenge the Battle Tower.",
      isPostGame: true,
      locations: [
        {
          name: "Sky Pillar",
          description:
            "Located on Route 131 near Pacifidlog Town. You'll need the Mach Bike to cross the cracking floor tiles on the upper floors. Rayquaza awaits at the top at Level 70. Save before the encounter! This is one of the most powerful Pokemon in the game with Air Lock canceling weather effects. The wild Pokemon here are high-level, including Claydol and Banette.",
          encounters: [
            enc("Golbat", 42, ["R", "S"], "Cave", "34-40", "30%"),
            enc("Sableye", 302, ["S"], "Cave", "34-38", "25%"),
            enc("Mawile", 303, ["R"], "Cave", "34-38", "25%"),
            enc("Claydol", 344, ["R", "S"], "Cave", "37-40", "15%"),
            enc("Banette", 354, ["R", "S"], "Cave", "37-40", "15%"),
            enc("Dusclops", 356, ["R", "S"], "Cave", "37-40", "15%"),
          ],
          items: [
            item("Rayquaza", "Top of Sky Pillar (Lv. 70 -- save first!)"),
          ],
        },
        {
          name: "Sealed Chamber & Regi Trio",
          description:
            "To unlock the three Regi golems, you need a Relicanth and Wailord in your party. Dive on Route 134 near Pacifidlog Town to find the Sealed Chamber. Solve the Braille puzzle inside (use Dig on the back wall). This unlocks three caves across Hoenn: Island Cave (Route 105) for Regice, Desert Ruins (Route 111) for Regirock, and Ancient Tomb (Route 120) for Registeel. Each has its own Braille puzzle. All three are at Level 40.",
          encounters: [
            enc("Regirock", 377, ["R", "S"], "Cave", "40", "—"),
            enc("Regice", 378, ["R", "S"], "Cave", "40", "—"),
            enc("Registeel", 379, ["R", "S"], "Cave", "40", "—"),
          ],
          items: [
            item("Regirock", "Desert Ruins, Route 111 (Lv. 40)"),
            item("Regice", "Island Cave, Route 105 (Lv. 40)"),
            item("Registeel", "Ancient Tomb, Route 120 (Lv. 40)"),
          ],
        },
        {
          name: "Roaming Legendaries",
          description:
            "After entering the Hall of Fame, a roaming legendary appears in Hoenn. In Ruby, Latios roams the region. In Sapphire, Latias roams instead. They flee on the first turn, so use Mean Look, Shadow Tag, or a Master Ball. Check the Pokedex Area feature after your first encounter to track their location.",
          encounters: [
            enc("Latios", 381, ["R"], "Grass", "40", "—"),
            enc("Latias", 380, ["S"], "Grass", "40", "—"),
          ],
        },
        {
          name: "Battle Tower",
          description:
            "Located on the island east of Mossdeep, the Battle Tower is Hoenn's premier post-game battle facility. Enter with a team of three Pokemon at Level 50 or Level 100. Battle through seven consecutive trainers in each challenge. Winning streaks earn you Battle Points (BP) which can be exchanged for rare items and TMs. This is the ultimate test of your team-building and battle strategy skills.",
        },
      ],
    },
  ],
};
