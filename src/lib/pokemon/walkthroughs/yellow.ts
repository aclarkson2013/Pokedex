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

export const YELLOW_WALKTHROUGH: GameWalkthrough = {
  slug: "yellow",
  gameLabel: "Yellow",
  versionTags: ["Y"],
  parts: [
    /* ===============================================================
     *  PART 1 -- Pallet Town: Get Pikachu from Oak
     * =============================================================== */
    {
      part: 1,
      title: "Introduction & Pallet Town",
      summary:
        "Begin your journey as Ash's counterpart. Professor Oak gives you a special Pikachu instead of the usual starters.",
      locations: [
        {
          name: "Pallet Town",
          description:
            "Your adventure begins in Pallet Town, loosely following the anime storyline. Head north and try to walk into the tall grass. Professor Oak will stop you, but instead of the usual three starters, your rival grabs the only Eevee on the table. Oak gives you a Pikachu he just caught -- it will follow behind you throughout the game! Your rival challenges you immediately. After the battle, head north toward Route 1. Return later after delivering Oak's Parcel to receive the Pokedex.",
          items: [
            item("Potion", "On your PC at the start of the game"),
            item("Pikachu", "Gift from Professor Oak (Lv. 5)"),
            item("Pokedex", "From Professor Oak after delivering his Parcel"),
            item("Town Map", "From your rival's sister after getting the Pokedex"),
          ],
          trainers: [
            trn("Rival", "Blue", [pk("Eevee", 5, 133)], "---"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 -- Route 1, Viridian City, Route 2
     * =============================================================== */
    {
      part: 2,
      title: "Route 1, Viridian City & Route 2",
      summary:
        "Travel through Route 1, deliver Oak's Parcel from Viridian City, and head toward Viridian Forest.",
      locations: [
        {
          name: "Route 1",
          description:
            "Head north from Pallet Town. The grass here has low-level Pokemon -- great for gaining early experience for Pikachu. A Poke Mart employee will give you a free Potion. Pidgey and Rattata are common here. Note that Pikachu may struggle early on since it has no type advantage yet.",
          encounters: [
            enc("Pidgey", 16, ["Y"], "Grass", "2-5", "50%"),
            enc("Rattata", 19, ["Y"], "Grass", "2-4", "50%"),
          ],
          items: [item("Potion", "From the Poke Mart employee on the route")],
        },
        {
          name: "Viridian City",
          description:
            "The Poke Mart clerk will give you Oak's Parcel. The Viridian Gym is locked until you have 7 badges. Head back to Pallet Town to deliver the Parcel. Oak gives you and your rival each a Pokedex. Return to Viridian City and head north to Route 2. The old man near the north exit will show you how to catch Pokemon once you deliver the Parcel.",
          items: [
            item("Oak's Parcel", "Poke Mart clerk"),
          ],
        },
        {
          name: "Route 2 (South)",
          description:
            "A short route heading north toward Viridian Forest. You cannot access the eastern side yet (need Cut). Pidgey, Rattata, and Nidoran are available here.",
          encounters: [
            enc("Pidgey", 16, ["Y"], "Grass", "3-5", "40%"),
            enc("Rattata", 19, ["Y"], "Grass", "3-5", "30%"),
            enc("Nidoran\u2640", 29, ["Y"], "Grass", "3-5", "15%"),
            enc("Nidoran\u2642", 32, ["Y"], "Grass", "3-5", "15%"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 -- Viridian Forest, Pewter Gym
     * =============================================================== */
    {
      part: 3,
      title: "Viridian Forest & Pewter Gym",
      summary:
        "Navigate Viridian Forest, reach Pewter City, and earn the Boulder Badge from Brock. Pikachu alone will struggle against Brock's Rock/Ground types -- catch a Mankey on Route 22 or use Butterfree's Confusion.",
      locations: [
        {
          name: "Viridian Forest",
          description:
            "A sprawling wooded area with Bug-type Pokemon. In Yellow, Caterpie is very common while Weedle is absent (replaced by more Caterpie and Pidgey). Pikachu can be found wild here but you already have one. Catch a Caterpie and evolve it to Butterfree by level 10 -- Confusion is very helpful against Brock. Alternatively, catch a Mankey on Route 22 (available early in Yellow!) which learns Low Kick.",
          encounters: [
            enc("Caterpie", 10, ["Y"], "Grass", "3-5", "45%"),
            enc("Metapod", 11, ["Y"], "Grass", "4-6", "15%"),
            enc("Pidgey", 16, ["Y"], "Grass", "3-5", "24%"),
            enc("Pidgeotto", 17, ["Y"], "Grass", "9", "1%"),
            enc("Pikachu", 25, ["Y"], "Grass", "3-5", "5%"),
          ],
          trainers: [
            trn("Bug Catcher", "Rick", [pk("Weedle", 6, 13), pk("Caterpie", 6, 10)], "\u20BD72"),
            trn("Bug Catcher", "Doug", [pk("Weedle", 7, 13), pk("Kakuna", 7, 14)], "\u20BD84"),
            trn("Bug Catcher", "Anthony", [pk("Caterpie", 7, 10), pk("Caterpie", 8, 10)], "\u20BD96"),
            trn("Bug Catcher", "Charlie", [pk("Metapod", 7, 11), pk("Caterpie", 7, 10), pk("Metapod", 7, 11)], "\u20BD84"),
            trn("Bug Catcher", "Sammy", [pk("Weedle", 9, 13)], "\u20BD108"),
          ],
          items: [
            item("Poke Ball", "Northwest clearing"),
            item("Antidote", "Near Bug Catcher Doug"),
            item("Potion", "Southeast dead-end path"),
          ],
        },
        {
          name: "Route 22",
          description:
            "West of Viridian City. In Yellow, Mankey is available here early -- its Fighting-type moves are crucial for Brock. Catch one and level it up before challenging the gym. Your rival may ambush you here.",
          encounters: [
            enc("Rattata", 19, ["Y"], "Grass", "2-5", "30%"),
            enc("Spearow", 21, ["Y"], "Grass", "2-5", "25%"),
            enc("Nidoran\u2640", 29, ["Y"], "Grass", "3-6", "15%"),
            enc("Nidoran\u2642", 32, ["Y"], "Grass", "3-6", "15%"),
            enc("Mankey", 56, ["Y"], "Grass", "3-5", "15%"),
          ],
          trainers: [
            trn("Rival", "Blue", [
              pk("Spearow", 9, 21),
              pk("Eevee", 8, 133),
            ], "\u20BD176"),
          ],
        },
        {
          name: "Pewter City",
          description:
            "Home of the Pewter City Gym and the Museum of Science. Heal up at the Pokemon Center before challenging Brock. In Yellow, Brock's team is different from Red/Blue -- he has a higher-level Geodude and Onix. Pikachu's Electric moves are useless here. Use Mankey's Low Kick or Butterfree's Confusion.",
          items: [
            item("Old Amber", "Museum of Science back room (need Cut later)"),
          ],
        },
        {
          name: "Pewter Gym -- Leader Brock",
          description:
            "Brock specializes in Rock-type Pokemon. In Yellow, a kid at the entrance blocks you if Pikachu is your only Pokemon -- you must have at least one other Pokemon in your party. Brock's Geodude is Lv. 12 and Onix is Lv. 14, both higher than in Red/Blue. Water and Grass moves are super effective, but at this point Butterfree with Confusion or Mankey with Low Kick are your best options.",
          trainers: [
            trn("Jr. Trainer", "Liam", [pk("Diglett", 9, 50), pk("Sandshrew", 11, 27)], "\u20BD220"),
            trn("Gym Leader", "Brock", [pk("Geodude", 12, 74), pk("Onix", 14, 95)], "\u20BD1,386 + TM34 (Bide)"),
          ],
          items: [
            item("Boulder Badge", "Defeat Brock"),
            item("TM34 Bide", "Defeat Brock"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 -- Route 3, Mt. Moon, Route 4
     * =============================================================== */
    {
      part: 4,
      title: "Route 3, Mt. Moon & Route 4",
      summary:
        "Battle trainers on Route 3, navigate Mt. Moon's caves, choose a fossil, and emerge on Route 4 heading to Cerulean City.",
      locations: [
        {
          name: "Route 3",
          description:
            "A route full of trainers heading east from Pewter City. This is a gauntlet -- stock up on Potions. At the end of the route, a man outside the Pokemon Center sells a Magikarp for 500 -- it evolves into Gyarados at level 20, a worthwhile investment. In Yellow, Spearow and Jigglypuff appear here instead of some Red/Blue encounters.",
          encounters: [
            enc("Pidgey", 16, ["Y"], "Grass", "6-8", "30%"),
            enc("Spearow", 21, ["Y"], "Grass", "6-8", "30%"),
            enc("Nidoran\u2640", 29, ["Y"], "Grass", "6-8", "15%"),
            enc("Nidoran\u2642", 32, ["Y"], "Grass", "6-8", "15%"),
            enc("Jigglypuff", 39, ["Y"], "Grass", "3-7", "10%"),
          ],
          trainers: [
            trn("Lass", "Janice", [pk("Pidgey", 9, 16)], "\u20BD144"),
            trn("Bug Catcher", "Colton", [pk("Caterpie", 10, 10), pk("Weedle", 10, 13)], "\u20BD120"),
            trn("Youngster", "Ben", [pk("Rattata", 11, 19)], "\u20BD176"),
            trn("Bug Catcher", "Greg", [pk("Weedle", 9, 13), pk("Kakuna", 9, 14), pk("Caterpie", 9, 10), pk("Metapod", 9, 11)], "\u20BD108"),
            trn("Youngster", "Calvin", [pk("Spearow", 14, 21)], "\u20BD224"),
            trn("Lass", "Sally", [pk("Rattata", 10, 19), pk("Nidoran\u2640", 10, 29)], "\u20BD160"),
            trn("Bug Catcher", "James", [pk("Caterpie", 11, 10), pk("Metapod", 11, 11)], "\u20BD132"),
            trn("Lass", "Robin", [pk("Jigglypuff", 14, 39)], "\u20BD224"),
          ],
          items: [
            item("Magikarp", "Purchase from man near Pokemon Center for \u20BD500"),
          ],
        },
        {
          name: "Mt. Moon",
          description:
            "A large multi-floor cave. You will encounter Team Rocket grunts and the infamous Jessie & James for the first time in Yellow! They appear as a duo near the fossil room. Make sure you have Repels or plenty of Potions -- Zubat is extremely common. On the bottom floor, choose between the Helix Fossil (Omanyte) and the Dome Fossil (Kabuto). Clefairy appears rarely.",
          encounters: [
            enc("Zubat", 41, ["Y"], "Cave", "7-11", "65%"),
            enc("Geodude", 74, ["Y"], "Cave", "7-10", "20%"),
            enc("Paras", 46, ["Y"], "Cave", "8-12", "5%"),
            enc("Clefairy", 35, ["Y"], "Cave", "8-12", "6%"),
            enc("Sandshrew", 27, ["Y"], "Cave", "8-11", "4%"),
          ],
          trainers: [
            trn("Bug Catcher", "Kent", [pk("Weedle", 11, 13), pk("Kakuna", 11, 14)], "\u20BD132"),
            trn("Lass", "Iris", [pk("Clefairy", 14, 35)], "\u20BD224"),
            trn("Super Nerd", "Jovan", [pk("Magnemite", 11, 81), pk("Voltorb", 11, 100)], "\u20BD264"),
            trn("Team Rocket", "Jessie & James", [
              pk("Ekans", 12, 23),
              pk("Meowth", 12, 52),
              pk("Koffing", 12, 109),
            ], "\u20BD480"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 13, 41), pk("Ekans", 13, 23)], "\u20BD520"),
            trn("Super Nerd", "Miguel", [pk("Grimer", 12, 88), pk("Voltorb", 12, 100), pk("Koffing", 12, 109)], "\u20BD288"),
          ],
          items: [
            item("Star Piece", "B1F, northwestern corner"),
            item("TM12 Water Gun", "B1F"),
            item("Escape Rope", "B2F"),
            item("Moon Stone", "B2F, crater room"),
            item("Helix Fossil or Dome Fossil", "B2F, after defeating Super Nerd Miguel"),
          ],
        },
        {
          name: "Route 4",
          description:
            "A short route leading downhill to Cerulean City. You cannot go back through Mt. Moon this way -- it is a one-way ledge. In Yellow, Rattata, Spearow, Sandshrew, and Mankey appear here.",
          encounters: [
            enc("Rattata", 19, ["Y"], "Grass", "8-12", "30%"),
            enc("Spearow", 21, ["Y"], "Grass", "8-12", "30%"),
            enc("Sandshrew", 27, ["Y"], "Grass", "8-12", "20%"),
            enc("Ekans", 23, ["Y"], "Grass", "8-12", "10%"),
            enc("Mankey", 56, ["Y"], "Grass", "10-12", "10%"),
          ],
          items: [
            item("TM04 Whirlwind", "West side of the route"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 -- Cerulean City, Cerulean Gym, get Bulbasaur
     * =============================================================== */
    {
      part: 5,
      title: "Cerulean City, Cerulean Gym & Nugget Bridge",
      summary:
        "Explore Cerulean City, receive a free Bulbasaur if Pikachu is happy, battle Misty, and cross the Nugget Bridge to visit Bill.",
      locations: [
        {
          name: "Cerulean City",
          description:
            "Heal up and explore. Your rival will ambush you on the north side of town when you try to go to Nugget Bridge. In Yellow, a woman in a house near the Pokemon Center will give you a Bulbasaur if your Pikachu's friendship is high enough. Keep Pikachu in your party and avoid letting it faint to raise friendship. The bike shop has a 1,000,000 bicycle you cannot afford yet -- you will get a Bike Voucher later.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Spearow", 18, 21),
              pk("Sandshrew", 15, 27),
              pk("Rattata", 15, 19),
              pk("Eevee", 17, 133),
            ], "\u20BD340"),
          ],
          items: [
            item("Bulbasaur", "Gift from woman in house (requires high Pikachu friendship)"),
          ],
        },
        {
          name: "Cerulean Gym -- Leader Misty",
          description:
            "Misty uses Water types. In Yellow, she has Staryu (Lv. 18) and Starmie (Lv. 21). Pikachu's Thunderbolt (learned at Lv. 26 or via TM) is devastating here. If Pikachu is not strong enough yet, Bulbasaur's Vine Whip works great. Misty's Starmie is quite fast and powerful -- come prepared. The Cascade Badge lets you use Cut outside battle.",
          trainers: [
            trn("Jr. Trainer", "Diana", [pk("Goldeen", 19, 118)], "\u20BD380"),
            trn("Gym Leader", "Misty", [pk("Staryu", 18, 120), pk("Starmie", 21, 121)], "\u20BD2,079 + TM11 (BubbleBeam)"),
          ],
          items: [
            item("Cascade Badge", "Defeat Misty"),
            item("TM11 BubbleBeam", "Defeat Misty"),
          ],
        },
        {
          name: "Route 24 -- Nugget Bridge",
          description:
            "The famous Nugget Bridge! Battle 5 trainers in a row. After the fifth, a Team Rocket member tries to recruit you -- defeat him to earn a Nugget (worth 5,000). Continue north to Route 25.",
          encounters: [
            enc("Caterpie", 10, ["Y"], "Grass", "7-12", "15%"),
            enc("Metapod", 11, ["Y"], "Grass", "8-12", "10%"),
            enc("Pidgey", 16, ["Y"], "Grass", "8-12", "15%"),
            enc("Oddish", 43, ["Y"], "Grass", "12-14", "20%"),
            enc("Abra", 63, ["Y"], "Grass", "8-12", "15%"),
            enc("Bellsprout", 69, ["Y"], "Grass", "12-14", "20%"),
          ],
          trainers: [
            trn("Bug Catcher", "Cale", [pk("Caterpie", 10, 10), pk("Weedle", 10, 13), pk("Metapod", 10, 11), pk("Kakuna", 10, 14)], "\u20BD120"),
            trn("Lass", "Ali", [pk("Pidgey", 12, 16), pk("Oddish", 12, 43)], "\u20BD192"),
            trn("Youngster", "Timmy", [pk("Sandshrew", 14, 27)], "\u20BD224"),
            trn("Lass", "Reli", [pk("Nidoran\u2642", 16, 32)], "\u20BD256"),
            trn("Jr. Trainer", "Ethan", [pk("Mankey", 18, 56)], "\u20BD360"),
            trn("Team Rocket Grunt", "Grunt", [pk("Ekans", 15, 23), pk("Zubat", 15, 41)], "\u20BD600"),
          ],
          items: [
            item("Nugget", "Reward for beating all 5 Nugget Bridge trainers"),
          ],
        },
        {
          name: "Route 25",
          description:
            "Continue east through more trainers to reach Bill's cottage. Bill has accidentally turned himself into a Pokemon. Help him by using the PC while he is on the teleporter. As thanks, he gives you the S.S. Ticket for the S.S. Anne in Vermilion City.",
          encounters: [
            enc("Pidgey", 16, ["Y"], "Grass", "8-14", "20%"),
            enc("Oddish", 43, ["Y"], "Grass", "12-14", "25%"),
            enc("Abra", 63, ["Y"], "Grass", "9-14", "15%"),
            enc("Caterpie", 10, ["Y"], "Grass", "8-12", "10%"),
            enc("Metapod", 11, ["Y"], "Grass", "9-12", "5%"),
            enc("Bellsprout", 69, ["Y"], "Grass", "12-14", "25%"),
          ],
          trainers: [
            trn("Hiker", "Franklin", [pk("Machop", 15, 66), pk("Geodude", 15, 74)], "\u20BD540"),
            trn("Hiker", "Wayne", [pk("Onix", 17, 95)], "\u20BD612"),
            trn("Youngster", "Dan", [pk("Slowpoke", 17, 79)], "\u20BD272"),
            trn("Lass", "Haley", [pk("Oddish", 13, 43), pk("Pidgey", 13, 16), pk("Oddish", 13, 43)], "\u20BD208"),
            trn("Youngster", "Chad", [pk("Ekans", 14, 23), pk("Sandshrew", 14, 27)], "\u20BD224"),
            trn("Lass", "Terry", [pk("Oddish", 16, 43), pk("Bellsprout", 16, 69)], "\u20BD256"),
          ],
          items: [
            item("S.S. Ticket", "From Bill after helping him"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 -- Vermilion, S.S. Anne, Vermilion Gym, get Squirtle
     * =============================================================== */
    {
      part: 6,
      title: "Vermilion City, S.S. Anne & Vermilion Gym",
      summary:
        "Travel to Vermilion City, receive a free Squirtle, explore the S.S. Anne for HM01 Cut, and earn the Thunder Badge from Lt. Surge. Pikachu cannot fight Surge's Raichu!",
      locations: [
        {
          name: "Route 5 & Underground Path",
          description:
            "Head south from Cerulean City. Pass through the Underground Path to bypass Saffron City (the guard will not let you through yet). Emerge on Route 6. Oddish and Bellsprout both appear in Yellow (unlike Red/Blue where they are version exclusives).",
          encounters: [
            enc("Pidgey", 16, ["Y"], "Grass", "13-16", "30%"),
            enc("Oddish", 43, ["Y"], "Grass", "13-16", "25%"),
            enc("Bellsprout", 69, ["Y"], "Grass", "13-16", "15%"),
            enc("Meowth", 52, ["Y"], "Grass", "10-16", "25%"),
            enc("Mankey", 56, ["Y"], "Grass", "10-16", "5%"),
          ],
        },
        {
          name: "Vermilion City",
          description:
            "Vermilion City is home to the S.S. Anne port and Lt. Surge's gym. In Yellow, Officer Jenny near the Pokemon Center will give you a Squirtle if you have the Cascade Badge. This is one of three free starters you can obtain in Yellow! Visit the Pokemon Fan Club chairman to receive the Bike Voucher -- take it back to Cerulean City's bike shop for a free bicycle.",
          items: [
            item("Squirtle", "Gift from Officer Jenny (requires Cascade Badge)"),
            item("Bike Voucher", "From Pokemon Fan Club chairman"),
            item("Old Rod", "From the fishing guru in the house near the port"),
          ],
        },
        {
          name: "S.S. Anne",
          description:
            "Use your S.S. Ticket to board. Explore every room for items and trainer battles -- this ship leaves permanently after you get Cut! Your rival is on the second floor. In Yellow, his team includes Spearow, Sandshrew, Rattata, and Eevee (now evolved). Then visit the seasick Captain on the top deck. He gives you HM01 Cut. The ship departs after this.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Spearow", 19, 21),
              pk("Sandshrew", 18, 27),
              pk("Rattata", 16, 19),
              pk("Eevee", 20, 133),
            ], "\u20BD400"),
            trn("Sailor", "Trevor", [pk("Machop", 17, 66)], "\u20BD544"),
            trn("Gentleman", "Arthur", [pk("Voltorb", 18, 100), pk("Magnemite", 18, 81)], "\u20BD1,296"),
            trn("Gentleman", "Thomas", [pk("Growlithe", 18, 58), pk("Ponyta", 18, 77)], "\u20BD1,296"),
          ],
          items: [
            item("HM01 Cut", "From the Captain after curing his seasickness"),
            item("Ether", "Cabin on 1F"),
            item("TM44 Rest", "Cabin on 1F"),
            item("Stardust", "Cabin on B1F"),
            item("Super Potion", "Cabin on B1F"),
          ],
        },
        {
          name: "Route 11 & Diglett's Cave",
          description:
            "Route 11 heads east from Vermilion City. Catch Drowzee here. At the far end is Diglett's Cave, a shortcut back to Route 2. In Yellow, Diglett and Dugtrio are essential -- their Ground-type moves counter Lt. Surge perfectly.",
          encounters: [
            enc("Drowzee", 96, ["Y"], "Grass", "13-17", "40%"),
            enc("Ekans", 23, ["Y"], "Grass", "11-15", "15%"),
            enc("Sandshrew", 27, ["Y"], "Grass", "11-15", "15%"),
            enc("Diglett", 50, ["Y"], "Cave", "15-22", "85%"),
            enc("Dugtrio", 51, ["Y"], "Cave", "29-31", "15%"),
          ],
        },
        {
          name: "Vermilion Gym -- Leader Lt. Surge",
          description:
            "Lt. Surge specializes in Electric types. In Yellow, he has only one Pokemon: a Lv. 28 Raichu! This Raichu knows Mega Punch, Thunderbolt, and Mega Kick. Notably, Pikachu refuses to fight Raichu in a callback to the anime -- you must use other Pokemon. Diglett or Dugtrio from Diglett's Cave are ideal Ground-type counters. The gym has a trash can puzzle: find two hidden switches to unlock the door.",
          trainers: [
            trn("Sailor", "Dwayne", [pk("Pikachu", 21, 25), pk("Pikachu", 21, 25)], "\u20BD672"),
            trn("Rocker", "Baily", [pk("Voltorb", 20, 100), pk("Magnemite", 20, 81), pk("Voltorb", 20, 100)], "\u20BD600"),
            trn("Gentleman", "Tucker", [pk("Pikachu", 23, 25)], "\u20BD1,656"),
            trn("Gym Leader", "Lt. Surge", [pk("Raichu", 28, 26)], "\u20BD2,772 + TM24 (Thunderbolt)"),
          ],
          items: [
            item("Thunder Badge", "Defeat Lt. Surge"),
            item("TM24 Thunderbolt", "Defeat Lt. Surge"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 -- Routes 9-10, Rock Tunnel, Lavender Town
     * =============================================================== */
    {
      part: 7,
      title: "Route 9, Rock Tunnel & Lavender Town",
      summary:
        "Head east from Cerulean City through Route 9, navigate the dark Rock Tunnel, and arrive in Lavender Town.",
      locations: [
        {
          name: "Route 9",
          description:
            "Head east from Cerulean City (use Cut on the bush blocking the path). Route 9 is full of trainers. Stock up on supplies and buy Repels before entering Rock Tunnel.",
          encounters: [
            enc("Rattata", 19, ["Y"], "Grass", "14-17", "25%"),
            enc("Spearow", 21, ["Y"], "Grass", "13-17", "30%"),
            enc("Nidoran\u2640", 29, ["Y"], "Grass", "11-17", "10%"),
            enc("Nidoran\u2642", 32, ["Y"], "Grass", "11-17", "10%"),
            enc("Oddish", 43, ["Y"], "Grass", "14-16", "15%"),
            enc("Bellsprout", 69, ["Y"], "Grass", "14-16", "10%"),
          ],
        },
        {
          name: "Route 10 (North)",
          description:
            "A short route between Route 9 and Rock Tunnel. The Power Plant is visible but requires Surf to reach (come back later). A Pokemon Center sits at the entrance to Rock Tunnel -- heal up before going in.",
          encounters: [
            enc("Voltorb", 100, ["Y"], "Grass", "14-17", "25%"),
            enc("Spearow", 21, ["Y"], "Grass", "13-17", "25%"),
            enc("Ekans", 23, ["Y"], "Grass", "14-17", "10%"),
            enc("Sandshrew", 27, ["Y"], "Grass", "14-17", "10%"),
            enc("Nidoran\u2640", 29, ["Y"], "Grass", "14-17", "15%"),
            enc("Nidoran\u2642", 32, ["Y"], "Grass", "14-17", "15%"),
          ],
        },
        {
          name: "Rock Tunnel",
          description:
            "A dark cave that is much easier with Flash (HM05, from Oak's aide on Route 2 with 10 Pokemon caught). Without Flash you navigate blind. The tunnel has multiple floors with many trainers. In Yellow, Machop and Onix are common alongside Zubat and Geodude. Bring lots of Potions and Repels.",
          encounters: [
            enc("Zubat", 41, ["Y"], "Cave", "15-17", "35%"),
            enc("Geodude", 74, ["Y"], "Cave", "15-17", "20%"),
            enc("Machop", 66, ["Y"], "Cave", "15-17", "20%"),
            enc("Onix", 95, ["Y"], "Cave", "13-17", "15%"),
            enc("Kangaskhan", 115, ["Y"], "Cave", "15-17", "10%"),
          ],
        },
        {
          name: "Lavender Town",
          description:
            "A small eerie town with the Pokemon Tower -- a memorial for deceased Pokemon. You cannot fully explore the tower yet (you need the Silph Scope). Heal up and head west on Route 8 toward Celadon City. Mr. Fuji is being held at the top of Pokemon Tower -- you will save him later.",
        },
      ],
    },

    /* ===============================================================
     *  PART 8 -- Celadon City, Celadon Gym, Rocket Hideout
     * =============================================================== */
    {
      part: 8,
      title: "Celadon City, Celadon Gym & Rocket Hideout",
      summary:
        "Explore the department store, defeat Erika, infiltrate the Rocket Game Corner, and battle Jessie & James again. Get a free Charmander on Route 24!",
      locations: [
        {
          name: "Route 24 -- Charmander Gift",
          description:
            "Before heading to Celadon, backtrack to Route 24 north of Cerulean City. In Yellow, a trainer on Route 24 will give you a Charmander if you have room in your party. This completes your set of all three original starters! This Charmander is at Lv. 10.",
          items: [
            item("Charmander", "Gift from trainer on Route 24 (Lv. 10)"),
          ],
        },
        {
          name: "Route 8",
          description:
            "Head west from Lavender Town through Route 8 to reach Celadon City. In Yellow, both Growlithe and Vulpix appear here, unlike Red/Blue where they are version-exclusive. Meowth is also available.",
          encounters: [
            enc("Pidgey", 16, ["Y"], "Grass", "18-22", "20%"),
            enc("Meowth", 52, ["Y"], "Grass", "18-22", "20%"),
            enc("Growlithe", 58, ["Y"], "Grass", "18-20", "20%"),
            enc("Vulpix", 37, ["Y"], "Grass", "18-20", "20%"),
            enc("Jigglypuff", 39, ["Y"], "Grass", "15-18", "10%"),
            enc("Abra", 63, ["Y"], "Grass", "18-22", "10%"),
          ],
        },
        {
          name: "Celadon City",
          description:
            "A large city with lots to do. The Department Store has everything you need -- buy TMs, evolution stones, and supplies. Get the Coin Case from the man in the restaurant. Do not miss the free Eevee in the Celadon Condominiums (use the back entrance). Visit the Game Corner and look behind the poster for the Team Rocket hideout entrance.",
          items: [
            item("Eevee", "Celadon Condominiums, rooftop room (back entrance)"),
            item("Coin Case", "Celadon Restaurant (talk to man at the back)"),
            item("TM41 Softboiled", "Man in Celadon Condominiums"),
            item("Tea", "Old woman in Celadon Condominiums (unlocks Saffron City gates)"),
          ],
        },
        {
          name: "Celadon Gym -- Leader Erika",
          description:
            "Erika specializes in Grass types. In Yellow, she has Tangela (Lv. 30), Weepinbell (Lv. 32), and Gloom (Lv. 32). Fire, Ice, Poison, and Flying moves are all super effective. Charmander's Fire moves or Pikachu with a diverse moveset work well. Bring Awakenings for her sleep-inducing moves.",
          trainers: [
            trn("Lass", "Kay", [pk("Bellsprout", 23, 69), pk("Weepinbell", 23, 70)], "\u20BD368"),
            trn("Beauty", "Bridget", [pk("Oddish", 21, 43), pk("Gloom", 21, 44), pk("Oddish", 21, 43)], "\u20BD1,512"),
            trn("Gym Leader", "Erika", [
              pk("Tangela", 30, 114),
              pk("Weepinbell", 32, 70),
              pk("Gloom", 32, 44),
            ], "\u20BD3,168 + TM21 (Mega Drain)"),
          ],
          items: [
            item("Rainbow Badge", "Defeat Erika"),
            item("TM21 Mega Drain", "Defeat Erika"),
          ],
        },
        {
          name: "Rocket Game Corner Hideout",
          description:
            "Find the secret switch behind the poster in the Game Corner. Navigate the underground base and fight Team Rocket grunts. In Yellow, Jessie & James appear again here as a boss fight with stronger Pokemon. After defeating Giovanni at the bottom, pick up the Silph Scope so you can identify ghosts in Pokemon Tower.",
          trainers: [
            trn("Team Rocket", "Jessie & James", [
              pk("Ekans", 25, 23),
              pk("Meowth", 25, 52),
              pk("Koffing", 25, 109),
            ], "\u20BD1,000"),
            trn("Team Rocket Boss", "Giovanni", [
              pk("Onix", 25, 95),
              pk("Rhyhorn", 24, 111),
              pk("Persian", 29, 53),
            ], "\u20BD2,871"),
          ],
          items: [
            item("Silph Scope", "Defeat Giovanni"),
            item("TM07 Horn Drill", "B3F"),
            item("Rare Candy", "B3F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 -- Pokemon Tower
     * =============================================================== */
    {
      part: 9,
      title: "Pokemon Tower",
      summary:
        "Return to Lavender Town with the Silph Scope and save Mr. Fuji from Team Rocket at the top of Pokemon Tower.",
      locations: [
        {
          name: "Pokemon Tower",
          description:
            "Return to Lavender Town with the Silph Scope. Now you can identify the ghost Pokemon -- they are Gastly, Haunter, and Cubone. Your rival appears on the 2nd floor for a battle. Fight through Team Rocket grunts on the upper floors, including Jessie & James on Floor 6. The ghost blocking the stairs to the 7th floor is an unownable Marowak. Rescue Mr. Fuji at the top and he gives you the Poke Flute, used to wake the Snorlax blocking Routes 12 and 16!",
          encounters: [
            enc("Gastly", 92, ["Y"], "Building", "13-24", "85%"),
            enc("Haunter", 93, ["Y"], "Building", "20-24", "10%"),
            enc("Cubone", 104, ["Y"], "Building", "15-20", "5%"),
          ],
          trainers: [
            trn("Rival", "Blue", [
              pk("Fearow", 25, 22),
              pk("Shellder", 23, 90),
              pk("Sandshrew", 23, 27),
              pk("Vulpix", 22, 37),
              pk("Eevee", 25, 133),
            ], "\u20BD500"),
            trn("Team Rocket", "Jessie & James", [
              pk("Meowth", 27, 52),
              pk("Arbok", 27, 24),
              pk("Weezing", 27, 110),
            ], "\u20BD1,080"),
            trn("Channeler", "Hope", [pk("Gastly", 22, 92)], "\u20BD704"),
            trn("Channeler", "Carly", [pk("Gastly", 24, 92)], "\u20BD768"),
          ],
          items: [
            item("Poke Flute", "From Mr. Fuji after rescue"),
            item("Elixir", "5F"),
            item("Nugget", "6F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 -- Fuchsia City, Safari Zone, Fuchsia Gym
     * =============================================================== */
    {
      part: 10,
      title: "Fuchsia City, Safari Zone & Fuchsia Gym",
      summary:
        "Travel to Fuchsia City via Cycling Road or Routes 12-15. Explore the Safari Zone for rare Pokemon and HMs, then earn the Soul Badge from Koga.",
      locations: [
        {
          name: "Routes 12-15 (Fishing Route) or Cycling Road (Routes 16-18)",
          description:
            "Two paths lead to Fuchsia City. The eastern route (12-15) passes by a sleeping Snorlax -- wake it with the Poke Flute and catch it (Lv. 30). The western route (Cycling Road, Routes 16-18) also has a Snorlax at the northern entrance. Both Snorlax are one-of-a-kind -- save before engaging! The eastern route has many fishable encounters and trainers.",
          encounters: [
            enc("Pidgey", 16, ["Y"], "Grass", "23-27", "20%"),
            enc("Oddish", 43, ["Y"], "Grass", "22-26", "25%"),
            enc("Bellsprout", 69, ["Y"], "Grass", "22-26", "15%"),
            enc("Venonat", 48, ["Y"], "Grass", "24-26", "15%"),
            enc("Gloom", 44, ["Y"], "Grass", "26-28", "15%"),
            enc("Ditto", 132, ["Y"], "Grass", "23-27", "10%"),
            enc("Snorlax", 143, ["Y"], "Gift", "30", "\u2014"),
          ],
          items: [
            item("Super Rod", "From the fishing guru in Fuchsia City"),
          ],
        },
        {
          name: "Safari Zone",
          description:
            "Pay 500 to enter with 30 Safari Balls and 600 steps. The Safari Zone has four areas with rare Pokemon not found anywhere else: Kangaskhan, Chansey, Tauros, Scyther, Pinsir, and more. Pick up the Gold Teeth in Area 3 and bring them to the Warden for HM04 Strength. Reach the Secret House in Area 3 for HM03 Surf!",
          encounters: [
            enc("Nidoran\u2640", 29, ["Y"], "Grass", "22-31", "15%"),
            enc("Nidoran\u2642", 32, ["Y"], "Grass", "22-31", "15%"),
            enc("Nidorina", 30, ["Y"], "Grass", "28-33", "10%"),
            enc("Nidorino", 33, ["Y"], "Grass", "28-33", "10%"),
            enc("Paras", 46, ["Y"], "Grass", "22-30", "10%"),
            enc("Parasect", 47, ["Y"], "Grass", "30-33", "5%"),
            enc("Venonat", 48, ["Y"], "Grass", "22-30", "10%"),
            enc("Exeggcute", 102, ["Y"], "Grass", "24-30", "5%"),
            enc("Rhyhorn", 111, ["Y"], "Grass", "25-29", "5%"),
            enc("Chansey", 113, ["Y"], "Grass", "23-30", "4%"),
            enc("Kangaskhan", 115, ["Y"], "Grass", "25-28", "1%"),
            enc("Scyther", 123, ["Y"], "Grass", "23-25", "4%"),
            enc("Pinsir", 127, ["Y"], "Grass", "23-25", "4%"),
            enc("Tauros", 128, ["Y"], "Grass", "28-30", "1%"),
            enc("Dratini", 147, ["Y"], "Super Rod", "15", "25%"),
          ],
          items: [
            item("HM03 Surf", "Safari Zone secret house (Area 3)"),
            item("HM04 Strength", "Safari Zone warden (give him Gold Teeth)"),
            item("Gold Teeth", "Area 3"),
            item("Max Potion", "Area 2"),
            item("Full Restore", "Area 4"),
          ],
        },
        {
          name: "Fuchsia Gym -- Leader Koga",
          description:
            "Koga's gym has invisible walls -- bump into them to find the path to the leader. In Yellow, Koga uses Venonat (Lv. 44), Venonat (Lv. 46), Venonat (Lv. 48), and Venomoth (Lv. 50). All Poison/Bug types -- Psychic, Ground, and Fire moves are very effective. His Pokemon know status moves like Toxic and Sleep Powder, so bring Full Heals or Awakenings.",
          trainers: [
            trn("Juggler", "Nate", [pk("Drowzee", 34, 96), pk("Kadabra", 34, 64)], "\u20BD1,088"),
            trn("Tamer", "Edgar", [pk("Arbok", 33, 24), pk("Sandslash", 33, 28), pk("Arbok", 33, 24)], "\u20BD792"),
            trn("Gym Leader", "Koga", [
              pk("Venonat", 44, 48),
              pk("Venonat", 46, 48),
              pk("Venonat", 48, 48),
              pk("Venomoth", 50, 49),
            ], "\u20BD4,950 + TM06 (Toxic)"),
          ],
          items: [
            item("Soul Badge", "Defeat Koga"),
            item("TM06 Toxic", "Defeat Koga"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 -- Saffron City, Silph Co., Saffron Gym
     * =============================================================== */
    {
      part: 11,
      title: "Saffron City, Silph Co. & Saffron Gym",
      summary:
        "Liberate Silph Co. from Team Rocket, receive a Lapras, and earn the Marsh Badge from Sabrina.",
      locations: [
        {
          name: "Saffron City",
          description:
            "Give the guards Tea (from Celadon) to enter Saffron City. The city has two gyms -- the Fighting Dojo and Sabrina's Gym. Visit the Fighting Dojo first for a free Hitmonlee or Hitmonchan after defeating the Karate Master. Then tackle Silph Co.",
          items: [
            item("Hitmonlee or Hitmonchan", "Fighting Dojo reward (choose one)"),
          ],
          trainers: [
            trn("Karate Master", "Koichi", [
              pk("Hitmonlee", 37, 106),
              pk("Hitmonchan", 37, 107),
            ], "Choice of Hitmonlee or Hitmonchan"),
          ],
        },
        {
          name: "Silph Co.",
          description:
            "Silph Co. is occupied by Team Rocket. It is a massive 11-floor building with warp tiles. Get the Card Key on 5F to unlock doors throughout. Your rival is on 7F. Jessie & James appear here again in Yellow. Giovanni is on 11F -- defeat him to free Silph Co. An employee on 7F gives you a Lapras. The president rewards you with a Master Ball!",
          trainers: [
            trn("Rival", "Blue", [
              pk("Sandslash", 38, 28),
              pk("Cloyster", 35, 91),
              pk("Ninetales", 37, 38),
              pk("Kadabra", 35, 64),
              pk("Eevee", 40, 133),
            ], "\u20BD800"),
            trn("Team Rocket", "Jessie & James", [
              pk("Weezing", 31, 110),
              pk("Arbok", 31, 24),
              pk("Meowth", 31, 52),
            ], "\u20BD1,240"),
            trn("Team Rocket Boss", "Giovanni", [
              pk("Nidorino", 37, 33),
              pk("Persian", 35, 53),
              pk("Rhyhorn", 37, 111),
              pk("Nidoqueen", 41, 31),
            ], "\u20BD4,059"),
          ],
          items: [
            item("Card Key", "5F"),
            item("Master Ball", "President after defeating Giovanni on 11F"),
            item("Lapras", "Gift from employee on 7F"),
            item("TM36 Selfdestruct", "B1F"),
          ],
        },
        {
          name: "Saffron Gym -- Leader Sabrina",
          description:
            "Sabrina's gym has warp tile puzzles. Step on tiles to teleport between rooms and find the path to Sabrina. In Yellow, she uses Abra (Lv. 50), Kadabra (Lv. 50), and Alakazam (Lv. 50). All Psychic types -- Bug and Ghost moves are your best bet (though in Gen 1, Ghost does not actually hit Psychic super effectively due to a bug). Her Alakazam is extremely fast and powerful. Use a Pokemon with high Special and strong neutral STAB attacks.",
          trainers: [
            trn("Psychic", "Cameron", [pk("Slowpoke", 33, 79), pk("Slowpoke", 33, 79), pk("Slowbro", 33, 80)], "\u20BD660"),
            trn("Channeler", "Stacy", [pk("Haunter", 34, 93)], "\u20BD1,088"),
            trn("Gym Leader", "Sabrina", [
              pk("Abra", 50, 63),
              pk("Kadabra", 50, 64),
              pk("Alakazam", 50, 65),
            ], "\u20BD4,950 + TM46 (Psywave)"),
          ],
          items: [
            item("Marsh Badge", "Defeat Sabrina"),
            item("TM46 Psywave", "Defeat Sabrina"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 -- Cinnabar Island, Pokemon Mansion, Cinnabar Gym
     * =============================================================== */
    {
      part: 12,
      title: "Cinnabar Island, Pokemon Mansion & Cinnabar Gym",
      summary:
        "Surf to Cinnabar Island, explore the abandoned Pokemon Mansion for the Secret Key, and earn the Volcano Badge from Blaine. Visit the Seafoam Islands en route.",
      locations: [
        {
          name: "Seafoam Islands",
          description:
            "Surf south from Fuchsia City to reach the Seafoam Islands. Use Strength to push boulders and redirect water currents to reach the lowest level. Articuno awaits in the deepest chamber at Level 50 -- save before encountering it! Seel and Dewgong are common here.",
          encounters: [
            enc("Seel", 86, ["Y"], "Cave", "26-34", "40%"),
            enc("Zubat", 41, ["Y"], "Cave", "22-26", "25%"),
            enc("Golbat", 42, ["Y"], "Cave", "26-30", "15%"),
            enc("Dewgong", 87, ["Y"], "Cave", "32-36", "5%"),
            enc("Psyduck", 54, ["Y"], "Surfing", "25-35", "50%"),
            enc("Slowpoke", 79, ["Y"], "Surfing", "25-35", "25%"),
            enc("Shellder", 90, ["Y"], "Surfing", "25-30", "15%"),
            enc("Horsea", 116, ["Y"], "Surfing", "25-30", "10%"),
          ],
          items: [
            item("Articuno", "Deepest chamber (Lv. 50, bring Ultra Balls!)"),
          ],
        },
        {
          name: "Cinnabar Island",
          description:
            "Cinnabar Island has the Pokemon Mansion, the Pokemon Lab (revive fossils here), and Blaine's Gym. The gym is locked until you find the Secret Key in the Mansion.",
          items: [
            item("Revived Fossil Pokemon", "Pokemon Lab (give your Helix or Dome Fossil)"),
          ],
        },
        {
          name: "Pokemon Mansion",
          description:
            "An abandoned mansion filled with wild Pokemon and journals about Mewtwo's creation. Navigate multiple floors using switches that open and close barriers. The Secret Key to Blaine's Gym is on B1F. Ponyta, Growlithe, Vulpix, Grimer, Koffing, and Magmar are all found here. In Yellow, Magmar appears in the Mansion.",
          encounters: [
            enc("Ponyta", 77, ["Y"], "Building", "28-36", "20%"),
            enc("Growlithe", 58, ["Y"], "Building", "28-36", "15%"),
            enc("Vulpix", 37, ["Y"], "Building", "28-36", "15%"),
            enc("Grimer", 88, ["Y"], "Building", "28-34", "15%"),
            enc("Muk", 89, ["Y"], "Building", "32-36", "5%"),
            enc("Koffing", 109, ["Y"], "Building", "28-34", "15%"),
            enc("Weezing", 110, ["Y"], "Building", "32-36", "5%"),
            enc("Magmar", 126, ["Y"], "Building", "34-36", "5%"),
            enc("Ditto", 132, ["Y"], "Building", "28-34", "5%"),
          ],
          items: [
            item("Secret Key", "B1F"),
            item("Calcium", "2F"),
            item("Iron", "3F"),
            item("TM14 Blizzard", "B1F"),
            item("TM22 SolarBeam", "Hidden on 1F"),
          ],
        },
        {
          name: "Cinnabar Gym -- Leader Blaine",
          description:
            "Blaine's gym is a quiz show -- answer trivia to skip trainer battles, or answer wrong to fight. Blaine uses Fire types. In Yellow, he has Ninetales (Lv. 48), Rapidash (Lv. 50), and Arcanine (Lv. 54). Water, Ground, and Rock moves are super effective. Surf from Squirtle/Blastoise or Lapras is devastating. Pikachu's Electric moves work on Rapidash but not the others.",
          trainers: [
            trn("Super Nerd", "Erik", [pk("Vulpix", 36, 37), pk("Vulpix", 36, 37), pk("Ninetales", 36, 38)], "\u20BD864"),
            trn("Burglar", "Dick", [pk("Ponyta", 34, 77), pk("Growlithe", 34, 58), pk("Ponyta", 34, 77)], "\u20BD3,264"),
            trn("Gym Leader", "Blaine", [
              pk("Ninetales", 48, 38),
              pk("Rapidash", 50, 78),
              pk("Arcanine", 54, 59),
            ], "\u20BD5,346 + TM38 (Fire Blast)"),
          ],
          items: [
            item("Volcano Badge", "Defeat Blaine"),
            item("TM38 Fire Blast", "Defeat Blaine"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 -- Viridian Gym (Giovanni), Victory Road
     * =============================================================== */
    {
      part: 13,
      title: "Viridian Gym & Victory Road",
      summary:
        "Challenge the final gym leader Giovanni for the Earth Badge, battle Jessie & James one last time, and traverse Victory Road.",
      locations: [
        {
          name: "Power Plant",
          description:
            "Before heading to the Viridian Gym, Surf east from Route 10 to reach the Power Plant. Zapdos awaits at Level 50 deep inside. Voltorb, Magnemite, and Electabuzz are found here. Save before Zapdos!",
          encounters: [
            enc("Voltorb", 100, ["Y"], "Building", "21-30", "30%"),
            enc("Magnemite", 81, ["Y"], "Building", "21-30", "30%"),
            enc("Magneton", 82, ["Y"], "Building", "32-35", "10%"),
            enc("Electrode", 101, ["Y"], "Building", "32-35", "10%"),
            enc("Electabuzz", 125, ["Y"], "Building", "33-36", "15%"),
            enc("Pikachu", 25, ["Y"], "Building", "22-25", "5%"),
          ],
          items: [
            item("Zapdos", "Deep inside Power Plant (Lv. 50)"),
            item("TM33 Ice Punch", "Inside Power Plant"),
            item("TM25 Thunder", "Inside Power Plant"),
          ],
        },
        {
          name: "Viridian Gym -- Leader Giovanni",
          description:
            "Return to Viridian City. The gym is now open -- Giovanni is the final Gym Leader! In Yellow, he uses Persian (Lv. 53), Dugtrio (Lv. 53), Nidoqueen (Lv. 53), Nidoking (Lv. 55), and Rhydon (Lv. 55). Giovanni specializes in Ground types. Water, Grass, and Ice moves are ideal. His Rhydon is the toughest -- Surf or Ice Beam will deal massive damage. Jessie & James make their final appearance outside the gym in Yellow before you enter.",
          trainers: [
            trn("Team Rocket", "Jessie & James", [
              pk("Weezing", 36, 110),
              pk("Arbok", 36, 24),
              pk("Meowth", 36, 52),
            ], "\u20BD1,440"),
            trn("Cooltrainer", "Samuel", [pk("Sandslash", 39, 28), pk("Dugtrio", 39, 51), pk("Rhyhorn", 39, 111)], "\u20BD1,560"),
            trn("Blackbelt", "Takashi", [pk("Machoke", 38, 67), pk("Machop", 38, 66), pk("Machoke", 38, 67)], "\u20BD912"),
            trn("Gym Leader", "Giovanni", [
              pk("Persian", 53, 53),
              pk("Dugtrio", 53, 51),
              pk("Nidoqueen", 53, 31),
              pk("Nidoking", 55, 34),
              pk("Rhydon", 55, 112),
            ], "\u20BD5,445 + TM27 (Fissure)"),
          ],
          items: [
            item("Earth Badge", "Defeat Giovanni"),
            item("TM27 Fissure", "Defeat Giovanni"),
          ],
        },
        {
          name: "Route 22 & Route 23",
          description:
            "Head west from Viridian City through Route 22 -- your rival battles you here with his strongest team yet. Route 23 has badge check gates. Make sure all 8 badges are in order.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Sandslash", 47, 28),
              pk("Cloyster", 45, 91),
              pk("Ninetales", 47, 38),
              pk("Kadabra", 45, 64),
              pk("Eevee", 50, 133),
            ], "\u20BD1,000"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "Victory Road is a cave puzzle requiring Strength to push boulders onto switches. Multiple floors with strong trainers and wild Pokemon. Moltres is found here at Level 50 -- save before attempting to catch it!",
          encounters: [
            enc("Onix", 95, ["Y"], "Cave", "40-46", "20%"),
            enc("Geodude", 74, ["Y"], "Cave", "40-44", "20%"),
            enc("Golbat", 42, ["Y"], "Cave", "40-46", "25%"),
            enc("Machoke", 67, ["Y"], "Cave", "40-46", "15%"),
            enc("Marowak", 105, ["Y"], "Cave", "40-46", "15%"),
            enc("Venomoth", 49, ["Y"], "Cave", "40-44", "5%"),
          ],
          items: [
            item("Moltres", "Victory Road 2F (Lv. 50)"),
            item("TM43 Sky Attack", "Victory Road 3F"),
            item("Full Heal", "Victory Road 1F"),
            item("Guard Spec.", "Victory Road 2F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 -- Pokemon League & Post-Game
     * =============================================================== */
    {
      part: 14,
      title: "Pokemon League & Post-Game",
      summary:
        "Challenge the Elite Four and the Champion to become the Pokemon League Champion! Then explore Cerulean Cave to catch Mewtwo.",
      locations: [
        {
          name: "Indigo Plateau",
          description:
            "The final challenge! Buy Full Restores, Revives, and Max Potions from the Poke Mart. You must defeat all four Elite Four members and the Champion in a row without visiting a Pokemon Center. Save before entering! Recommended level: 55-65+. In Yellow, the Elite Four teams are the same as Red/Blue, but your rival's Champion team reflects his Yellow roster with Eevee (now fully evolved) and his unique team composition.",
          trainers: [
            trn("Elite Four", "Lorelei", [
              pk("Dewgong", 54, 87),
              pk("Cloyster", 53, 91),
              pk("Slowbro", 54, 80),
              pk("Jynx", 56, 124),
              pk("Lapras", 56, 131),
            ], "Ice specialist -- use Electric, Fighting, Rock"),
            trn("Elite Four", "Bruno", [
              pk("Onix", 53, 95),
              pk("Hitmonchan", 55, 107),
              pk("Hitmonlee", 55, 106),
              pk("Onix", 56, 95),
              pk("Machamp", 58, 68),
            ], "Fighting specialist -- use Psychic, Flying, Water"),
            trn("Elite Four", "Agatha", [
              pk("Gengar", 56, 94),
              pk("Golbat", 56, 42),
              pk("Haunter", 55, 93),
              pk("Arbok", 58, 24),
              pk("Gengar", 60, 94),
            ], "Ghost specialist -- use Psychic, Ground"),
            trn("Elite Four", "Lance", [
              pk("Gyarados", 58, 130),
              pk("Dragonair", 56, 148),
              pk("Dragonair", 56, 148),
              pk("Aerodactyl", 60, 142),
              pk("Dragonite", 62, 149),
            ], "Dragon specialist -- use Ice, Rock, Electric"),
            trn("Champion", "Blue", [
              pk("Sandslash", 61, 28),
              pk("Alakazam", 59, 65),
              pk("Exeggutor", 61, 103),
              pk("Cloyster", 61, 91),
              pk("Ninetales", 63, 38),
              pk("Flareon", 65, 136),
            ], "Mixed team (Eevee evolved into Flareon) -- varies by rival's Eevee evolution"),
          ],
        },
        {
          name: "Cerulean Cave (Post-Game)",
          description:
            "After becoming Champion, the cave entrance north of Cerulean City is unlocked. Navigate through extremely strong wild Pokemon to find Mewtwo at Level 70 in the deepest chamber. This is the ultimate catch -- use your Master Ball or bring tons of Ultra Balls and status-inducing moves. Ditto, Chansey, and Kadabra also appear here at high levels. Save before the encounter!",
          encounters: [
            enc("Golbat", 42, ["Y"], "Cave", "46-58", "25%"),
            enc("Graveler", 75, ["Y"], "Cave", "46-58", "15%"),
            enc("Parasect", 47, ["Y"], "Cave", "46-54", "10%"),
            enc("Ditto", 132, ["Y"], "Cave", "53-58", "15%"),
            enc("Kadabra", 64, ["Y"], "Cave", "49-58", "10%"),
            enc("Chansey", 113, ["Y"], "Cave", "52-58", "5%"),
            enc("Rhydon", 112, ["Y"], "Cave", "49-58", "10%"),
            enc("Dodrio", 85, ["Y"], "Cave", "52-58", "5%"),
            enc("Venomoth", 49, ["Y"], "Cave", "46-54", "5%"),
          ],
          items: [
            item("Mewtwo", "Deepest chamber (Lv. 70 -- save first!)"),
            item("PP Up", "1F"),
            item("Ultra Ball", "B1F (multiple)"),
            item("Max Revive", "B1F"),
          ],
        },
      ],
      isPostGame: true,
    },
  ],
};
