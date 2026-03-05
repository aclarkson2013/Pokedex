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

export const RED_BLUE_WALKTHROUGH: GameWalkthrough = {
  slug: "red-blue",
  gameLabel: "Red & Blue",
  versionTags: ["Red", "Blue"],
  parts: [
    /* ===============================================================
     *  PART 1 — Pallet Town: Choose Your Starter
     * =============================================================== */
    {
      part: 1,
      title: "Pallet Town — Choose Your Starter",
      summary:
        "Begin your adventure in Pallet Town and choose your first Pokemon from Professor Oak.",
      locations: [
        {
          name: "Pallet Town",
          description:
            "Your journey begins here. Head downstairs and try to leave town by walking into the tall grass to the north. Professor Oak will stop you and bring you to his lab. Choose one of three starter Pokemon: Bulbasaur (Grass/Poison), Charmander (Fire), or Squirtle (Water). Your rival will always pick the starter that has a type advantage over yours. After choosing, your rival challenges you to your first battle. Win or lose, it doesn't affect the story. Before heading out, check your PC upstairs for a free Potion.",
          items: [
            item("Potion", "Your PC upstairs in your bedroom"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Route 1, Viridian City, Route 2: Oak's Parcel
     * =============================================================== */
    {
      part: 2,
      title: "Route 1, Viridian City & Route 2 — Oak's Parcel",
      summary:
        "Deliver Oak's Parcel, receive the Pokedex, and prepare to enter Viridian Forest.",
      locations: [
        {
          name: "Route 1",
          description:
            "Head north from Pallet Town through the tall grass. A Mart employee along the path will give you a free Potion. The wild Pokemon here are low level, making it a good place to gain some early experience before reaching Viridian City.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "2-5", "55%"),
            enc("Rattata", 19, ["Red", "Blue"], "Grass", "2-4", "45%"),
          ],
          items: [item("Potion", "From the Mart employee on the route")],
        },
        {
          name: "Viridian City",
          description:
            "The Poke Mart clerk asks you to deliver Oak's Parcel back to Professor Oak in Pallet Town. The Viridian Gym is locked — you need seven badges before you can challenge it. After delivering the Parcel, Oak gives you and your rival each a Pokedex. Your rival's sister in Pallet Town will give you a Town Map. Return to Viridian City and head north toward Route 2.",
          items: [
            item("Oak's Parcel", "Viridian City Poke Mart"),
            item("Pokedex", "From Professor Oak after delivering the Parcel"),
            item("Town Map", "From your rival's sister in Pallet Town"),
          ],
        },
        {
          name: "Route 2",
          description:
            "A short route leading north into Viridian Forest. The eastern path is blocked by a cuttable tree — you can return later with HM01 Cut to access items on that side. Catch some Pokemon to start building your team.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "3-5", "45%"),
            enc("Rattata", 19, ["Red", "Blue"], "Grass", "2-5", "45%"),
            enc("Caterpie", 10, ["Red"], "Grass", "3-5", "5%"),
            enc("Weedle", 13, ["Blue"], "Grass", "3-5", "5%"),
            enc("Nidoran\u2640", 29, ["Red", "Blue"], "Grass", "3-5", "5%"),
          ],
          items: [],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Viridian Forest & Pewter Gym (Brock)
     * =============================================================== */
    {
      part: 3,
      title: "Viridian Forest & Pewter Gym (Brock)",
      summary:
        "Navigate Viridian Forest, reach Pewter City, and earn the Boulder Badge from Brock.",
      locations: [
        {
          name: "Viridian Forest",
          description:
            "A large wooded maze full of Bug Catchers. Follow the path generally north, battling trainers along the way. Pikachu is rare here but extremely valuable — it makes the upcoming Brock fight much easier with its Electric moves, and is one of the few Pikachu sources in the game. Caterpie evolves quickly into Butterfree, which learns Confusion at level 10 — another great option for Brock.",
          encounters: [
            enc("Caterpie", 10, ["Red", "Blue"], "Grass", "3-5", "45%"),
            enc("Metapod", 11, ["Red", "Blue"], "Grass", "4-6", "35%"),
            enc("Weedle", 13, ["Red"], "Grass", "3-5", "5%"),
            enc("Kakuna", 14, ["Red"], "Grass", "4-6", "5%"),
            enc("Weedle", 13, ["Blue"], "Grass", "3-5", "45%"),
            enc("Kakuna", 14, ["Blue"], "Grass", "4-6", "35%"),
            enc("Caterpie", 10, ["Blue"], "Grass", "3-5", "5%"),
            enc("Metapod", 11, ["Blue"], "Grass", "4-6", "5%"),
            enc("Pikachu", 25, ["Red", "Blue"], "Grass", "3-5", "5%"),
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
          name: "Pewter City",
          description:
            "Home of the Pewter Museum of Science and the first gym. Heal up at the Pokemon Center before challenging Brock. If you chose Charmander, consider catching a Butterfree (evolve Caterpie/Metapod from Viridian Forest) that knows Confusion, or a Nidoran\u2642 from Route 22 that will learn Double Kick. Squirtle and Bulbasaur players have an easy time here.",
          items: [],
        },
        {
          name: "Pewter Gym \u2014 Leader Brock",
          description:
            "Brock specializes in Rock-type Pokemon. Water and Grass moves are super effective. His Onix has very high Defense but low Special, so special attacks work well. There is one Jr. Trainer between you and Brock. Defeat Brock to earn the Boulder Badge, which boosts your Pokemon's Attack, and TM34 Bide.",
          trainers: [
            trn("Jr. Trainer\u2642", "Liam", [pk("Diglett", 11, 50), pk("Sandshrew", 11, 27)], "\u20BD220"),
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
     *  PART 4 — Route 3, Mt. Moon, Route 4
     * =============================================================== */
    {
      part: 4,
      title: "Route 3, Mt. Moon & Route 4",
      summary:
        "Battle through Route 3's trainer gauntlet, navigate Mt. Moon, choose a fossil, and emerge on Route 4.",
      locations: [
        {
          name: "Route 3",
          description:
            "A long route east of Pewter City with many trainers. Stock up on Potions before heading out. There are 8 trainers total — a real gauntlet at this point in the game. At the Pokemon Center near the Mt. Moon entrance, a man will sell you a Magikarp for 500. It seems useless at first, but it evolves into the powerful Gyarados at level 20.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "6-8", "30%"),
            enc("Spearow", 21, ["Red", "Blue"], "Grass", "5-8", "30%"),
            enc("Nidoran\u2640", 29, ["Red", "Blue"], "Grass", "6-7", "14%"),
            enc("Nidoran\u2642", 32, ["Red", "Blue"], "Grass", "6-7", "14%"),
            enc("Jigglypuff", 39, ["Red", "Blue"], "Grass", "3-7", "10%"),
            enc("Mankey", 56, ["Red"], "Grass", "7-8", "2%"),
          ],
          trainers: [
            trn("Lass", "Janice", [pk("Pidgey", 9, 16), pk("Pidgey", 9, 16)], "\u20BD144"),
            trn("Bug Catcher", "Colton", [pk("Caterpie", 10, 10), pk("Weedle", 10, 13), pk("Caterpie", 10, 10)], "\u20BD120"),
            trn("Youngster", "Ben", [pk("Rattata", 11, 19), pk("Ekans", 11, 23)], "\u20BD176"),
            trn("Bug Catcher", "Greg", [pk("Weedle", 9, 13), pk("Kakuna", 9, 14), pk("Caterpie", 9, 10), pk("Metapod", 9, 11)], "\u20BD108"),
            trn("Youngster", "Calvin", [pk("Spearow", 14, 21)], "\u20BD224"),
            trn("Lass", "Sally", [pk("Rattata", 10, 19), pk("Nidoran\u2640", 10, 29)], "\u20BD160"),
            trn("Bug Catcher", "James", [pk("Caterpie", 11, 10), pk("Metapod", 11, 11)], "\u20BD132"),
            trn("Lass", "Robin", [pk("Jigglypuff", 14, 39)], "\u20BD224"),
          ],
          items: [],
        },
        {
          name: "Mt. Moon",
          description:
            "A multi-floor cave where you encounter Team Rocket for the first time. Zubat are extremely common, so bring Repels if you have them. On the final floor, defeat the Super Nerd to choose between the Helix Fossil (revives into Omanyte) or the Dome Fossil (revives into Kabuto). You can only pick one. Clefairy is rare but worth catching. Moon Stones found here can evolve Clefairy, Nidorino, Nidorina, and Jigglypuff.",
          encounters: [
            enc("Zubat", 41, ["Red", "Blue"], "Cave", "6-11", "69%"),
            enc("Geodude", 74, ["Red", "Blue"], "Cave", "7-10", "15%"),
            enc("Paras", 46, ["Red", "Blue"], "Cave", "8-12", "15%"),
            enc("Clefairy", 35, ["Red", "Blue"], "Cave", "8-12", "1%"),
          ],
          trainers: [
            trn("Bug Catcher", "Kent", [pk("Weedle", 11, 13), pk("Kakuna", 11, 14)], "\u20BD132"),
            trn("Lass", "Iris", [pk("Clefairy", 14, 35)], "\u20BD224"),
            trn("Super Nerd", "Jovan", [pk("Magnemite", 11, 81), pk("Voltorb", 11, 100)], "\u20BD275"),
            trn("Hiker", "Marcos", [pk("Geodude", 10, 74), pk("Geodude", 10, 74), pk("Onix", 10, 95)], "\u20BD350"),
            trn("Team Rocket Grunt", "Grunt", [pk("Sandshrew", 11, 27), pk("Rattata", 11, 19), pk("Zubat", 11, 41)], "\u20BD330"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 13, 41), pk("Ekans", 13, 23)], "\u20BD390"),
            trn("Super Nerd", "Miguel", [pk("Grimer", 12, 88), pk("Voltorb", 12, 100), pk("Koffing", 12, 109)], "\u20BD300"),
          ],
          items: [
            item("TM12 Water Gun", "B1F"),
            item("Rare Candy", "B2F"),
            item("Escape Rope", "B1F"),
            item("Moon Stone", "B2F, in the crater room"),
            item("Moon Stone", "B2F, hidden on the ground"),
            item("HP Up", "B1F"),
            item("Helix Fossil or Dome Fossil", "B2F, after defeating Super Nerd Miguel"),
          ],
        },
        {
          name: "Route 4",
          description:
            "A short route on the other side of Mt. Moon, leading downhill to Cerulean City. There are one-way ledges, so once you jump down you cannot go back through Mt. Moon this way. TM04 Whirlwind can be found here.",
          encounters: [
            enc("Rattata", 19, ["Red", "Blue"], "Grass", "8-12", "35%"),
            enc("Spearow", 21, ["Red", "Blue"], "Grass", "8-12", "35%"),
            enc("Ekans", 23, ["Red"], "Grass", "6-12", "25%"),
            enc("Sandshrew", 27, ["Blue"], "Grass", "6-12", "25%"),
            enc("Mankey", 56, ["Red"], "Grass", "10-12", "5%"),
          ],
          items: [
            item("TM04 Whirlwind", "Near the Pokemon Center"),
            item("Magikarp", "Purchase from man near Mt. Moon Pokemon Center for 500"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 — Cerulean City, Cerulean Gym (Misty), Nugget Bridge
     * =============================================================== */
    {
      part: 5,
      title: "Cerulean City, Cerulean Gym (Misty) & Nugget Bridge",
      summary:
        "Explore Cerulean City, battle your rival, challenge Misty, and cross the Nugget Bridge to meet Bill.",
      locations: [
        {
          name: "Cerulean City",
          description:
            "Heal up and explore the city. Your rival ambushes you north of the Pokemon Center when you try to reach Nugget Bridge. The Bike Shop has a bicycle for 1,000,000 — far too expensive, but you will get a Bike Voucher later. After clearing Nugget Bridge and helping Bill, you can also explore the house that was burglarized by a Team Rocket Grunt to the south — defeat him to get TM28 Dig.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Pidgeotto", 18, 17),
              pk("Abra", 15, 63),
              pk("Rattata", 15, 19),
              pk("Bulbasaur", 17, 1),
            ], "\u20BD595"),
          ],
          items: [
            item("TM28 Dig", "From Team Rocket Grunt behind the burglarized house"),
            item("Rare Candy", "Backyard of house (need Cut later)"),
          ],
        },
        {
          name: "Cerulean Gym \u2014 Leader Misty",
          description:
            "Misty specializes in Water-type Pokemon. Grass and Electric moves are ideal. Her Starmie is strong and fast with a high Special stat — do not underestimate it. If you have Bulbasaur (now Ivysaur), Vine Whip will dominate. Pikachu's Thundershock also works well. Level your Pokemon to at least 20-22 before challenging her. One Jr. Trainer guards the path to Misty.",
          trainers: [
            trn("Jr. Trainer\u2640", "Diana", [pk("Goldeen", 19, 118)], "\u20BD380"),
            trn("Gym Leader", "Misty", [pk("Staryu", 18, 120), pk("Starmie", 21, 121)], "\u20BD2,079 + TM11 (BubbleBeam)"),
          ],
          items: [
            item("Cascade Badge", "Defeat Misty"),
            item("TM11 BubbleBeam", "Defeat Misty"),
          ],
        },
        {
          name: "Route 24 \u2014 Nugget Bridge",
          description:
            "The famous Nugget Bridge! Battle five trainers in a row across the bridge. After defeating the fifth, a Team Rocket Grunt tries to recruit you. Beat him for a Nugget worth 5,000. Beyond the bridge, continue north through the grass area. Oddish (Red) and Bellsprout (Blue) can be found here, as well as the elusive Abra which teleports away on the first turn — use a fast Pokemon with a status move or throw a Poke Ball immediately.",
          encounters: [
            enc("Caterpie", 10, ["Red"], "Grass", "7-8", "20%"),
            enc("Weedle", 13, ["Blue"], "Grass", "7-8", "20%"),
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "8-12", "15%"),
            enc("Oddish", 43, ["Red"], "Grass", "12-14", "25%"),
            enc("Bellsprout", 69, ["Blue"], "Grass", "12-14", "25%"),
            enc("Abra", 63, ["Red", "Blue"], "Grass", "8-12", "15%"),
          ],
          trainers: [
            trn("Bug Catcher", "Cale", [pk("Caterpie", 10, 10), pk("Weedle", 10, 13), pk("Metapod", 10, 11), pk("Kakuna", 10, 14)], "\u20BD120"),
            trn("Lass", "Ali", [pk("Pidgey", 12, 16), pk("Oddish", 12, 43)], "\u20BD192"),
            trn("Youngster", "Timmy", [pk("Sandshrew", 14, 27)], "\u20BD224"),
            trn("Lass", "Reli", [pk("Nidoran\u2642", 16, 32)], "\u20BD256"),
            trn("Jr. Trainer\u2642", "Ethan", [pk("Mankey", 18, 56)], "\u20BD360"),
            trn("Team Rocket Grunt", "Grunt", [pk("Ekans", 15, 23), pk("Zubat", 15, 41)], "\u20BD450"),
          ],
          items: [
            item("Nugget", "Reward after defeating all five Nugget Bridge trainers"),
            item("TM45 Thunder Wave", "Hidden near the end of the bridge area"),
          ],
        },
        {
          name: "Route 25",
          description:
            "Continue east past more trainers to reach Bill's cottage. Bill is a Pokemon researcher who accidentally merged himself with a Pokemon using his teleporter. Help him by interacting with the PC while he stands on the teleporter. As a reward, he gives you the S.S. Ticket to board the S.S. Anne in Vermilion City.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "8-14", "25%"),
            enc("Oddish", 43, ["Red"], "Grass", "12-14", "25%"),
            enc("Bellsprout", 69, ["Blue"], "Grass", "12-14", "25%"),
            enc("Abra", 63, ["Red", "Blue"], "Grass", "9-14", "15%"),
            enc("Caterpie", 10, ["Red"], "Grass", "8-12", "10%"),
            enc("Weedle", 13, ["Blue"], "Grass", "8-12", "10%"),
            enc("Metapod", 11, ["Red"], "Grass", "9-12", "5%"),
            enc("Kakuna", 14, ["Blue"], "Grass", "9-12", "5%"),
          ],
          trainers: [
            trn("Hiker", "Franklin", [pk("Machop", 15, 66), pk("Geodude", 15, 74)], "\u20BD525"),
            trn("Hiker", "Wayne", [pk("Onix", 17, 95)], "\u20BD595"),
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
     *  PART 6 — Vermilion City, S.S. Anne, Vermilion Gym (Lt. Surge)
     * =============================================================== */
    {
      part: 6,
      title: "Vermilion City, S.S. Anne & Vermilion Gym (Lt. Surge)",
      summary:
        "Travel to Vermilion City, explore the S.S. Anne to obtain HM01 Cut, and earn the Thunder Badge from Lt. Surge.",
      locations: [
        {
          name: "Route 5 & Underground Path",
          description:
            "Head south from Cerulean City. The guard at Saffron City's gate will not let you through yet, so use the Underground Path to bypass the city. Emerge on Route 6 and continue south to Vermilion City. You can catch version-exclusive Pokemon in the grass here.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "13-16", "35%"),
            enc("Oddish", 43, ["Red"], "Grass", "13-16", "25%"),
            enc("Bellsprout", 69, ["Blue"], "Grass", "13-16", "25%"),
            enc("Meowth", 52, ["Blue"], "Grass", "10-16", "20%"),
            enc("Mankey", 56, ["Red"], "Grass", "10-16", "20%"),
            enc("Abra", 63, ["Red", "Blue"], "Grass", "13-16", "10%"),
          ],
          items: [],
        },
        {
          name: "Route 6",
          description:
            "A short route south of the Underground Path exit, leading directly to Vermilion City. Six trainers line the path. The grass has similar Pokemon to Route 5.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "13-16", "35%"),
            enc("Oddish", 43, ["Red"], "Grass", "13-16", "25%"),
            enc("Bellsprout", 69, ["Blue"], "Grass", "13-16", "25%"),
            enc("Meowth", 52, ["Blue"], "Grass", "10-16", "20%"),
            enc("Mankey", 56, ["Red"], "Grass", "10-16", "20%"),
          ],
          trainers: [
            trn("Bug Catcher", "Keigo", [pk("Weedle", 16, 13), pk("Caterpie", 16, 10), pk("Weedle", 16, 13)], "\u20BD192"),
            trn("Jr. Trainer\u2640", "Reli", [pk("Pidgey", 16, 16), pk("Pidgey", 16, 16), pk("Pidgey", 16, 16)], "\u20BD320"),
            trn("Jr. Trainer\u2642", "Lao", [pk("Spearow", 16, 21), pk("Raticate", 16, 20)], "\u20BD320"),
            trn("Bug Catcher", "Elijah", [pk("Butterfree", 20, 12)], "\u20BD240"),
          ],
          items: [],
        },
        {
          name: "Vermilion City",
          description:
            "Vermilion City is home to the S.S. Anne dock and the Vermilion Gym. Visit the Pokemon Fan Club chairman and listen to him talk about his Pokemon — he will reward you with a Bike Voucher you can exchange at the Cerulean Bike Shop. The Old Rod can be obtained from the Fishing Guru in a house near the dock.",
          items: [
            item("Bike Voucher", "Pokemon Fan Club chairman"),
            item("Old Rod", "Fishing Guru's house near the dock"),
          ],
        },
        {
          name: "S.S. Anne",
          description:
            "Board the ship using your S.S. Ticket. Explore every cabin for items and trainer battles. Your rival awaits on the upper deck — defeat him. Then visit the Captain in his quarters. He is seasick, so give him a back rub and he rewards you with HM01 Cut. The ship departs after you leave, so make sure you grab everything first. Teach Cut to a Pokemon and use it to access new areas.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Pidgeotto", 19, 17),
              pk("Raticate", 16, 20),
              pk("Kadabra", 18, 64),
              pk("Ivysaur", 20, 2),
            ], "\u20BD1,045"),
            trn("Sailor", "Trevor", [pk("Machop", 17, 66), pk("Tentacool", 17, 72)], "\u20BD510"),
            trn("Gentleman", "Arthur", [pk("Voltorb", 18, 100), pk("Magnemite", 18, 81)], "\u20BD1,260"),
            trn("Gentleman", "Thomas", [pk("Growlithe", 18, 58), pk("Ponyta", 18, 77)], "\u20BD1,260"),
            trn("Sailor", "Huey", [pk("Tentacool", 18, 72), pk("Staryu", 18, 120)], "\u20BD540"),
            trn("Lass", "Ann", [pk("Pidgey", 18, 16), pk("Nidoran\u2640", 18, 29)], "\u20BD288"),
          ],
          items: [
            item("HM01 Cut", "From the Captain after curing his seasickness"),
            item("Ether", "Cabin on 1F"),
            item("Max Potion", "Cabin on 1F"),
            item("Rare Candy", "Cabin on B1F"),
            item("TM08 Body Slam", "Cabin on 2F"),
          ],
        },
        {
          name: "Vermilion Gym \u2014 Leader Lt. Surge",
          description:
            "Lt. Surge uses Electric-type Pokemon. Ground-type moves completely shut down his team. Diglett or Dugtrio from Diglett's Cave (accessible from Route 11) are perfect counters. The gym has a trash can puzzle: you must find two switches hidden in the garbage cans. The second switch is always in a can adjacent to the first. If you guess wrong, both switches reset. Defeat Lt. Surge for the Thunder Badge, which boosts Speed, and TM24 Thunderbolt.",
          trainers: [
            trn("Sailor", "Dwayne", [pk("Pikachu", 21, 25), pk("Pikachu", 21, 25)], "\u20BD630"),
            trn("Gentleman", "Tucker", [pk("Pikachu", 23, 25)], "\u20BD1,610"),
            trn("Rocker", "Jerry", [pk("Voltorb", 20, 100), pk("Magnemite", 20, 81), pk("Voltorb", 20, 100)], "\u20BD600"),
            trn("Gym Leader", "Lt. Surge", [
              pk("Voltorb", 21, 100),
              pk("Pikachu", 18, 25),
              pk("Raichu", 24, 26),
            ], "\u20BD2,376 + TM24 (Thunderbolt)"),
          ],
          items: [
            item("Thunder Badge", "Defeat Lt. Surge"),
            item("TM24 Thunderbolt", "Defeat Lt. Surge"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Route 9-10, Rock Tunnel, Lavender Town
     * =============================================================== */
    {
      part: 7,
      title: "Routes 9-10, Rock Tunnel & Lavender Town",
      summary:
        "Explore Route 11, Diglett's Cave, battle through Route 9, navigate the dark Rock Tunnel, and arrive in Lavender Town.",
      locations: [
        {
          name: "Route 11 & Diglett's Cave",
          description:
            "Route 11 heads east from Vermilion City. You can catch Drowzee here — a solid Psychic-type. At the far east end is a gate with a Professor Oak's aide who gives you an Itemfinder if you have 30 Pokemon registered. Diglett's Cave connects Route 11 to Route 2 near Pewter City. Diglett and the rare Dugtrio are excellent Ground-type additions to your team for Lt. Surge and beyond.",
          encounters: [
            enc("Drowzee", 96, ["Red", "Blue"], "Grass", "13-17", "35%"),
            enc("Ekans", 23, ["Red"], "Grass", "12-15", "25%"),
            enc("Sandshrew", 27, ["Blue"], "Grass", "12-15", "25%"),
            enc("Spearow", 21, ["Red", "Blue"], "Grass", "13-17", "30%"),
            enc("Rattata", 19, ["Red", "Blue"], "Grass", "13-15", "10%"),
            enc("Diglett", 50, ["Red", "Blue"], "Cave", "15-22", "95%"),
            enc("Dugtrio", 51, ["Red", "Blue"], "Cave", "29-31", "5%"),
          ],
          items: [
            item("Itemfinder", "Route 11 gate upstairs (need 30 Pokemon caught)"),
          ],
        },
        {
          name: "Route 9",
          description:
            "Head east from Cerulean City (use Cut on the bush blocking the path). Route 9 is packed with trainers. Stock up on supplies and Repels before heading into Rock Tunnel.",
          encounters: [
            enc("Rattata", 19, ["Red", "Blue"], "Grass", "14-17", "30%"),
            enc("Spearow", 21, ["Red", "Blue"], "Grass", "13-17", "30%"),
            enc("Nidoran\u2640", 29, ["Red", "Blue"], "Grass", "11-17", "10%"),
            enc("Nidoran\u2642", 32, ["Red", "Blue"], "Grass", "11-17", "10%"),
            enc("Ekans", 23, ["Red"], "Grass", "11-17", "15%"),
            enc("Sandshrew", 27, ["Blue"], "Grass", "11-17", "15%"),
          ],
          trainers: [
            trn("Jr. Trainer\u2640", "Maria", [pk("Oddish", 18, 43), pk("Bulbasaur", 18, 1), pk("Ivysaur", 18, 2)], "\u20BD360"),
            trn("Hiker", "Jeremy", [pk("Machop", 20, 66), pk("Onix", 20, 95)], "\u20BD700"),
            trn("Jr. Trainer\u2642", "Brent", [pk("Raticate", 19, 20), pk("Sandshrew", 19, 27)], "\u20BD380"),
            trn("Hiker", "Alan", [pk("Geodude", 19, 74), pk("Onix", 19, 95), pk("Geodude", 19, 74), pk("Geodude", 19, 74)], "\u20BD665"),
            trn("Bug Catcher", "Brent", [pk("Beedrill", 19, 15), pk("Beedrill", 19, 15)], "\u20BD228"),
          ],
          items: [
            item("TM30 Teleport", "On the route"),
          ],
        },
        {
          name: "Route 10 (North) & Power Plant Entrance",
          description:
            "A short connecting route between Route 9 and Rock Tunnel. The Pokemon Center here is your last chance to heal before entering. Later, after you get Surf, you can return to access the Power Plant from this route to catch Zapdos, Electabuzz (Red), Magnemite, Magneton, and Voltorb.",
          encounters: [
            enc("Voltorb", 100, ["Red", "Blue"], "Grass", "14-17", "30%"),
            enc("Spearow", 21, ["Red", "Blue"], "Grass", "13-17", "30%"),
            enc("Ekans", 23, ["Red"], "Grass", "11-17", "15%"),
            enc("Sandshrew", 27, ["Blue"], "Grass", "11-17", "15%"),
          ],
          items: [],
        },
        {
          name: "Rock Tunnel",
          description:
            "A dark cave you must navigate. The HM05 Flash (obtainable from Professor Oak's aide on Route 2 after catching 10 Pokemon) makes it much easier, but is not required. Without it you navigate blind. The cave has two floors with many trainers. Bring plenty of Potions and Repels. Machop and Onix can be found here. Follow the walls and exit on the southern side to Route 10 South.",
          encounters: [
            enc("Zubat", 41, ["Red", "Blue"], "Cave", "15-17", "55%"),
            enc("Geodude", 74, ["Red", "Blue"], "Cave", "15-17", "15%"),
            enc("Machop", 66, ["Red", "Blue"], "Cave", "15-17", "15%"),
            enc("Onix", 95, ["Red", "Blue"], "Cave", "13-17", "10%"),
          ],
          trainers: [
            trn("Pokemaniac", "Ashton", [pk("Cubone", 23, 104), pk("Slowpoke", 23, 79)], "\u20BD1,150"),
            trn("Pokemaniac", "Winston", [pk("Slowpoke", 25, 79)], "\u20BD1,250"),
            trn("Hiker", "Lenny", [pk("Geodude", 19, 74), pk("Onix", 19, 95), pk("Graveler", 21, 75)], "\u20BD735"),
            trn("Hiker", "Oliver", [pk("Onix", 20, 95), pk("Onix", 20, 95), pk("Geodude", 20, 74)], "\u20BD700"),
            trn("Jr. Trainer\u2640", "Jody", [pk("Pidgey", 22, 16), pk("Pidgeotto", 22, 17)], "\u20BD440"),
            trn("Hiker", "Dudley", [pk("Geodude", 21, 74), pk("Geodude", 21, 74), pk("Graveler", 21, 75)], "\u20BD735"),
          ],
          items: [
            item("Escape Rope", "B1F"),
            item("Revive", "B1F"),
            item("Max Ether", "1F"),
          ],
        },
        {
          name: "Lavender Town",
          description:
            "A small eerie town known for the Pokemon Tower, a memorial for deceased Pokemon. You cannot fully explore the tower yet because unidentified ghosts block your way — you need the Silph Scope from Team Rocket's hideout in Celadon City. Heal up and head west through Route 8 toward Celadon City. Mr. Fuji has been taken hostage at the top of Pokemon Tower and you will return to save him.",
          items: [
            item("Poke Flute", "From Mr. Fuji after rescuing him (later)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Celadon City, Celadon Gym (Erika), Rocket Hideout
     * =============================================================== */
    {
      part: 8,
      title: "Celadon City, Celadon Gym (Erika) & Rocket Hideout",
      summary:
        "Explore the department store, earn the Rainbow Badge from Erika, and infiltrate the Rocket Game Corner to get the Silph Scope.",
      locations: [
        {
          name: "Route 7 & Route 8",
          description:
            "Route 8 heads west from Lavender Town toward Celadon City, passing through an Underground Path since the Saffron City gates are still blocked. Route 7 is a short connector from the Underground Path exit to Celadon. Both routes have version-exclusive encounters.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "18-22", "20%"),
            enc("Oddish", 43, ["Red"], "Grass", "18-22", "25%"),
            enc("Bellsprout", 69, ["Blue"], "Grass", "18-22", "25%"),
            enc("Meowth", 52, ["Blue"], "Grass", "18-22", "20%"),
            enc("Mankey", 56, ["Red"], "Grass", "18-22", "20%"),
            enc("Growlithe", 58, ["Red"], "Grass", "18-20", "10%"),
            enc("Vulpix", 37, ["Blue"], "Grass", "18-20", "10%"),
            enc("Ekans", 23, ["Red"], "Grass", "17-22", "10%"),
            enc("Sandshrew", 27, ["Blue"], "Grass", "17-22", "10%"),
          ],
          trainers: [
            trn("Gambler", "Rich", [pk("Growlithe", 18, 58), pk("Vulpix", 18, 37)], "\u20BD1,260"),
            trn("Super Nerd", "Glenn", [pk("Grimer", 22, 88), pk("Muk", 22, 89), pk("Grimer", 22, 88)], "\u20BD550"),
            trn("Lass", "Megan", [pk("Pidgey", 19, 16), pk("Rattata", 19, 19), pk("Nidoran\u2642", 19, 32), pk("Meowth", 19, 52), pk("Pikachu", 19, 25)], "\u20BD304"),
            trn("Gambler", "Stan", [pk("Poliwag", 22, 60), pk("Poliwag", 22, 60)], "\u20BD1,540"),
          ],
          items: [],
        },
        {
          name: "Celadon City",
          description:
            "A sprawling city with lots to do. The Celadon Department Store sells nearly everything you need, including TMs, evolution stones, and stat-boosting drinks. Get a free Eevee in the Celadon Mansion by entering through the back door and going to the roof room. Get the Coin Case from the man in the restaurant. The Game Corner is where the Rocket Hideout entrance is hidden.",
          items: [
            item("Eevee", "Celadon Mansion, back entrance, roof room (Gift)"),
            item("Coin Case", "Restaurant (talk to the man at the back)"),
            item("TM41 Softboiled", "Rooftop of Celadon Mansion (from a girl)"),
            item("TM48 Rock Slide", "Celadon Department Store rooftop girl"),
          ],
        },
        {
          name: "Celadon Gym \u2014 Leader Erika",
          description:
            "Erika specializes in Grass-type Pokemon. Fire, Ice, Poison, and Flying moves are all super effective. Her Vileplume can put your team to sleep, so bring Awakenings or Full Heals. You need to Cut the tree blocking the gym entrance. The gym is full of female trainers. Defeating Erika earns you the Rainbow Badge and TM21 Mega Drain.",
          trainers: [
            trn("Jr. Trainer\u2640", "Tamia", [pk("Weepinbell", 23, 70), pk("Ivysaur", 23, 2)], "\u20BD460"),
            trn("Beauty", "Bridget", [pk("Oddish", 21, 43), pk("Gloom", 21, 44), pk("Oddish", 21, 43)], "\u20BD1,470"),
            trn("Cooltrainer\u2640", "Mary", [pk("Bellsprout", 24, 69), pk("Weepinbell", 24, 70)], "\u20BD840"),
            trn("Beauty", "Lori", [pk("Exeggcute", 24, 102)], "\u20BD1,680"),
            trn("Gym Leader", "Erika", [
              pk("Victreebel", 29, 71),
              pk("Tangela", 24, 114),
              pk("Vileplume", 29, 45),
            ], "\u20BD2,871 + TM21 (Mega Drain)"),
          ],
          items: [
            item("Rainbow Badge", "Defeat Erika"),
            item("TM21 Mega Drain", "Defeat Erika"),
          ],
        },
        {
          name: "Rocket Game Corner Hideout",
          description:
            "Find the secret switch behind the poster in the Game Corner to open the entrance to Team Rocket's underground hideout. Navigate four basement floors, defeat grunts, and take the elevator to the bottom. Giovanni, the Rocket Boss, awaits on B4F with his Ground-type team. After defeating him, pick up the Silph Scope so you can identify the ghost Pokemon in Pokemon Tower. Also pick up TM07 Horn Drill on one of the floors.",
          trainers: [
            trn("Team Rocket Grunt", "Grunt", [pk("Rattata", 20, 19), pk("Zubat", 20, 41)], "\u20BD600"),
            trn("Team Rocket Grunt", "Grunt", [pk("Drowzee", 21, 96), pk("Machop", 21, 66)], "\u20BD630"),
            trn("Team Rocket Grunt", "Grunt", [pk("Raticate", 21, 20), pk("Zubat", 21, 41)], "\u20BD630"),
            trn("Team Rocket Grunt", "Grunt", [pk("Grimer", 22, 88), pk("Koffing", 22, 109), pk("Koffing", 22, 109)], "\u20BD660"),
            trn("Team Rocket Boss", "Giovanni", [
              pk("Onix", 25, 95),
              pk("Rhyhorn", 24, 111),
              pk("Kangaskhan", 29, 115),
            ], "\u20BD2,871"),
          ],
          items: [
            item("Silph Scope", "Defeat Giovanni on B4F"),
            item("TM07 Horn Drill", "B3F"),
            item("Rare Candy", "B3F"),
            item("Escape Rope", "B3F"),
            item("Lift Key", "B4F (needed for the elevator)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Pokemon Tower & Route to Fuchsia City
     * =============================================================== */
    {
      part: 9,
      title: "Pokemon Tower & Route to Fuchsia City",
      summary:
        "Return to Lavender Town to rescue Mr. Fuji from Pokemon Tower, then travel south toward Fuchsia City via Cycling Road or the seaside routes.",
      locations: [
        {
          name: "Pokemon Tower",
          description:
            "Return to Lavender Town with the Silph Scope. Now you can identify the ghost Pokemon — Gastly and Haunter. They can be caught and are useful Ghost/Poison types. Cubone also appears here. Climb the tower battling Channelers on each floor. Your rival appears on the 2nd floor. The ghost blocking the stairs on the 6th floor is a Marowak — a story event that cannot be caught. On the 7th floor, defeat the Team Rocket grunts to rescue Mr. Fuji. He rewards you with the Poke Flute, which awakens the Snorlax blocking Routes 12 and 16.",
          encounters: [
            enc("Gastly", 92, ["Red", "Blue"], "Building", "13-18", "88%"),
            enc("Haunter", 93, ["Red", "Blue"], "Building", "15-18", "10%"),
            enc("Cubone", 104, ["Red", "Blue"], "Building", "15-17", "2%"),
          ],
          trainers: [
            trn("Rival", "Blue", [
              pk("Pidgeotto", 25, 17),
              pk("Gyarados", 23, 130),
              pk("Growlithe", 22, 58),
              pk("Kadabra", 20, 64),
              pk("Ivysaur", 25, 2),
            ], "\u20BD1,375"),
            trn("Channeler", "Hope", [pk("Gastly", 22, 92)], "\u20BD704"),
            trn("Channeler", "Carly", [pk("Gastly", 24, 92)], "\u20BD768"),
            trn("Channeler", "Laurel", [pk("Gastly", 23, 92), pk("Gastly", 23, 92)], "\u20BD736"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 25, 41), pk("Zubat", 25, 41), pk("Golbat", 25, 42)], "\u20BD750"),
            trn("Team Rocket Grunt", "Grunt", [pk("Koffing", 25, 109), pk("Drowzee", 25, 96)], "\u20BD750"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 26, 41), pk("Rattata", 26, 19), pk("Raticate", 26, 20), pk("Zubat", 26, 41)], "\u20BD780"),
          ],
          items: [
            item("Poke Flute", "From Mr. Fuji after rescue on 7F"),
            item("Elixir", "5F"),
            item("Nugget", "5F (hidden)"),
            item("Rare Candy", "6F"),
          ],
        },
        {
          name: "Route 12 (Silence Bridge)",
          description:
            "Head south from Lavender Town. A sleeping Snorlax blocks the route — use the Poke Flute to wake and battle it (level 30, only two in the game!). This route has many Fisherman trainers. With the Good Rod (from a Fishing Guru in a house on the route) you can fish for Water-types.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "23-27", "20%"),
            enc("Oddish", 43, ["Red"], "Grass", "22-26", "30%"),
            enc("Bellsprout", 69, ["Blue"], "Grass", "22-26", "30%"),
            enc("Venonat", 48, ["Red", "Blue"], "Grass", "24-26", "20%"),
            enc("Gloom", 44, ["Red"], "Grass", "26-28", "5%"),
            enc("Weepinbell", 70, ["Blue"], "Grass", "26-28", "5%"),
            enc("Snorlax", 143, ["Red", "Blue"], "Special", "30", "\u2014"),
          ],
          trainers: [
            trn("Fisherman", "Barny", [pk("Goldeen", 20, 118), pk("Poliwag", 20, 60), pk("Goldeen", 20, 118)], "\u20BD700"),
            trn("Fisherman", "Ned", [pk("Goldeen", 22, 118), pk("Poliwag", 22, 60), pk("Goldeen", 22, 118)], "\u20BD770"),
            trn("Fisherman", "Chip", [pk("Tentacool", 24, 72), pk("Goldeen", 24, 118)], "\u20BD840"),
          ],
          items: [
            item("Good Rod", "Fishing Guru's house on the route"),
            item("TM16 Pay Day", "Route 12 (hidden on the path)"),
            item("Iron", "On the route"),
          ],
        },
        {
          name: "Routes 13-15",
          description:
            "Continue south and west from Route 12 through Routes 13, 14, and 15. These routes are loaded with trainers — Bird Keepers, Bikers, and Beauties line the winding paths. Ditto can be found in the grass on Route 15, though it is uncommon. These routes connect to Fuchsia City to the south.",
          encounters: [
            enc("Pidgey", 16, ["Red", "Blue"], "Grass", "23-27", "20%"),
            enc("Pidgeotto", 17, ["Red", "Blue"], "Grass", "25-29", "5%"),
            enc("Oddish", 43, ["Red"], "Grass", "22-26", "25%"),
            enc("Bellsprout", 69, ["Blue"], "Grass", "22-26", "25%"),
            enc("Venonat", 48, ["Red", "Blue"], "Grass", "24-26", "20%"),
            enc("Ditto", 132, ["Red", "Blue"], "Grass", "25", "10%"),
            enc("Gloom", 44, ["Red"], "Grass", "26-28", "5%"),
            enc("Weepinbell", 70, ["Blue"], "Grass", "26-28", "5%"),
          ],
          trainers: [
            trn("Bird Keeper", "Sebastian", [pk("Pidgey", 29, 16), pk("Pidgeotto", 29, 17)], "\u20BD696"),
            trn("Biker", "Jared", [pk("Koffing", 28, 109), pk("Koffing", 28, 109), pk("Koffing", 28, 109)], "\u20BD560"),
            trn("Beauty", "Lola", [pk("Rattata", 27, 19), pk("Pikachu", 27, 25), pk("Rattata", 27, 19)], "\u20BD1,890"),
            trn("Bird Keeper", "Perry", [pk("Spearow", 25, 21), pk("Pidgey", 25, 16), pk("Pidgey", 25, 16), pk("Fearow", 25, 22), pk("Pidgey", 25, 16)], "\u20BD600"),
          ],
          items: [
            item("PP Up", "Route 13 (hidden)"),
            item("TM40 Skull Bash", "Route 14"),
          ],
        },
        {
          name: "Route 16-18 (Cycling Road) \u2014 Alternate Path",
          description:
            "An alternate path to Fuchsia City using the bicycle. Cycling Road descends from Route 16 (west of Celadon) through Route 17 to Route 18 (north of Fuchsia). Another Snorlax blocks Route 16 — use the Poke Flute. The route is downhill so you automatically move forward. Many Bikers and Cue Balls challenge you along the way. HM02 Fly can be found in a secret house on Route 16 (Cut the tree to access it).",
          encounters: [
            enc("Spearow", 21, ["Red", "Blue"], "Grass", "20-22", "25%"),
            enc("Raticate", 20, ["Red", "Blue"], "Grass", "25-29", "10%"),
            enc("Doduo", 84, ["Red", "Blue"], "Grass", "22-28", "35%"),
            enc("Rattata", 19, ["Red", "Blue"], "Grass", "20-22", "20%"),
            enc("Fearow", 22, ["Red", "Blue"], "Grass", "27-29", "5%"),
            enc("Snorlax", 143, ["Red", "Blue"], "Special", "30", "\u2014"),
          ],
          trainers: [
            trn("Cue Ball", "Isaiah", [pk("Machop", 29, 66), pk("Machoke", 29, 67)], "\u20BD696"),
            trn("Biker", "Virgil", [pk("Weezing", 28, 110), pk("Koffing", 28, 109), pk("Weezing", 28, 110)], "\u20BD560"),
            trn("Cue Ball", "Corey", [pk("Primeape", 29, 57), pk("Machoke", 29, 67)], "\u20BD696"),
            trn("Biker", "Ruben", [pk("Weezing", 29, 110)], "\u20BD580"),
          ],
          items: [
            item("HM02 Fly", "Secret house on Route 16 (need Cut)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Fuchsia City, Safari Zone, Fuchsia Gym (Koga)
     * =============================================================== */
    {
      part: 10,
      title: "Fuchsia City, Safari Zone & Fuchsia Gym (Koga)",
      summary:
        "Explore the Safari Zone to obtain HM03 Surf and HM04 Strength, catch rare Pokemon, and earn the Soul Badge from Koga.",
      locations: [
        {
          name: "Fuchsia City",
          description:
            "Fuchsia City is home to the Safari Zone and Koga's gym. The Safari Zone Warden lives in a house east of the Pokemon Center. You will need to find his Gold Teeth in the Safari Zone and return them to him for HM04 Strength. The Good Rod can also be obtained here if you missed it on Route 12.",
          items: [
            item("Good Rod", "Fishing Guru on Route 12 (if not already obtained)"),
            item("Warden's Teeth", "Safari Zone (find and return to him)"),
          ],
        },
        {
          name: "Safari Zone",
          description:
            "The Safari Zone is a special area where you use Safari Balls instead of battling. You get 30 Safari Balls per entry and 500 steps before you are escorted out. You can throw bait (makes Pokemon easier to catch but more likely to flee) or rocks (makes them harder to catch but less likely to flee). Rare Pokemon like Chansey, Kangaskhan, Tauros, Scyther (Red), Pinsir (Blue), and Dratini (fishing) are found here. The Secret House in Area 3 contains HM03 Surf. The Gold Teeth are in Area 4.",
          encounters: [
            enc("Nidoran\u2640", 29, ["Red", "Blue"], "Grass", "22-25", "10%"),
            enc("Nidoran\u2642", 32, ["Red", "Blue"], "Grass", "22-25", "10%"),
            enc("Nidorina", 30, ["Red", "Blue"], "Grass", "28-33", "5%"),
            enc("Nidorino", 33, ["Red", "Blue"], "Grass", "28-33", "5%"),
            enc("Paras", 46, ["Red", "Blue"], "Grass", "22-25", "15%"),
            enc("Parasect", 47, ["Red", "Blue"], "Grass", "30-32", "5%"),
            enc("Venonat", 48, ["Red", "Blue"], "Grass", "22-25", "15%"),
            enc("Exeggcute", 102, ["Red", "Blue"], "Grass", "24-25", "5%"),
            enc("Rhyhorn", 111, ["Red", "Blue"], "Grass", "25-26", "5%"),
            enc("Chansey", 113, ["Red", "Blue"], "Grass", "23-26", "1%"),
            enc("Kangaskhan", 115, ["Red", "Blue"], "Grass", "25-28", "1%"),
            enc("Tauros", 128, ["Red", "Blue"], "Grass", "21-28", "1%"),
            enc("Scyther", 123, ["Red"], "Grass", "25", "4%"),
            enc("Pinsir", 127, ["Blue"], "Grass", "23-25", "4%"),
            enc("Dratini", 147, ["Red", "Blue"], "Super Rod", "15", "25%"),
            enc("Psyduck", 54, ["Red", "Blue"], "Surfing", "20-30", "100%"),
            enc("Goldeen", 118, ["Red", "Blue"], "Good Rod", "10", "50%"),
            enc("Poliwag", 60, ["Red", "Blue"], "Good Rod", "10", "50%"),
          ],
          items: [
            item("HM03 Surf", "Secret House in Area 3"),
            item("Gold Teeth", "Area 4 (return to Warden for HM04)"),
            item("Max Potion", "Area 2"),
            item("Full Restore", "Area 4"),
            item("TM32 Double Team", "Area 3"),
            item("Protein", "Area 2 (hidden)"),
            item("Carbos", "Area 3 (hidden)"),
          ],
        },
        {
          name: "Fuchsia Gym \u2014 Leader Koga",
          description:
            "Koga's gym has invisible walls creating a maze — bump into the walls to find the correct path to him. He specializes in Poison-type Pokemon. Psychic and Ground moves are devastating against his team. His Weezing knows Selfdestruct, so be careful. Defeating Koga earns you the Soul Badge (allows use of Surf outside of battle) and TM06 Toxic.",
          trainers: [
            trn("Juggler", "Kayden", [pk("Drowzee", 29, 96), pk("Drowzee", 29, 96), pk("Kadabra", 29, 64), pk("Drowzee", 29, 96)], "\u20BD1,015"),
            trn("Juggler", "Nate", [pk("Drowzee", 31, 96), pk("Hypno", 31, 97)], "\u20BD1,085"),
            trn("Tamer", "Phil", [pk("Arbok", 34, 24), pk("Sandslash", 34, 28), pk("Arbok", 34, 24)], "\u20BD816"),
            trn("Tamer", "Edgar", [pk("Arbok", 33, 24), pk("Sandslash", 33, 28), pk("Arbok", 33, 24)], "\u20BD792"),
            trn("Gym Leader", "Koga", [
              pk("Koffing", 37, 109),
              pk("Muk", 39, 89),
              pk("Koffing", 37, 109),
              pk("Weezing", 43, 110),
            ], "\u20BD4,257 + TM06 (Toxic)"),
          ],
          items: [
            item("Soul Badge", "Defeat Koga"),
            item("TM06 Toxic", "Defeat Koga"),
          ],
        },
        {
          name: "Warden's House",
          description:
            "Return the Gold Teeth you found in the Safari Zone to the Warden. He will reward you with HM04 Strength, which lets you push boulders. Teach Surf and Strength to your Pokemon — both are essential for navigating upcoming areas like Victory Road and the Seafoam Islands.",
          items: [
            item("HM04 Strength", "From the Warden after returning his Gold Teeth"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Saffron City, Silph Co., Saffron Gym (Sabrina)
     * =============================================================== */
    {
      part: 11,
      title: "Saffron City, Silph Co. & Saffron Gym (Sabrina)",
      summary:
        "Liberate Silph Co. from Team Rocket, earn a Lapras and the Master Ball, challenge the Fighting Dojo, and earn the Marsh Badge from Sabrina.",
      locations: [
        {
          name: "Saffron City",
          description:
            "Saffron City has been taken over by Team Rocket. The city guards now let you in if you bring them a drink from the Celadon Department Store vending machines (Fresh Water, Soda Pop, or Lemonade). Silph Co. headquarters is occupied by Rockets. The Fighting Dojo and Saffron Gym are also here. Visit Mr. Psychic's house for TM29 Psychic, one of the best TMs in the game.",
          items: [
            item("TM29 Psychic", "Mr. Psychic's house"),
          ],
        },
        {
          name: "Fighting Dojo",
          description:
            "The unofficial gym of Saffron City. Defeat the Karate Master and his students to earn your pick of one Fighting-type Pokemon: Hitmonlee or Hitmonchan. You can only choose one, so pick wisely.",
          trainers: [
            trn("Black Belt", "Mike", [pk("Mankey", 31, 56), pk("Mankey", 31, 56), pk("Primeape", 31, 57)], "\u20BD744"),
            trn("Black Belt", "Hitoshi", [pk("Machop", 31, 66), pk("Machoke", 31, 67), pk("Machop", 31, 66)], "\u20BD744"),
            trn("Black Belt", "Aaron", [pk("Primeape", 31, 57), pk("Primeape", 31, 57)], "\u20BD744"),
            trn("Karate Master", "Koichi", [pk("Hitmonlee", 37, 106), pk("Hitmonchan", 37, 107)], "\u20BD888"),
          ],
          items: [
            item("Hitmonlee or Hitmonchan", "Gift from Karate Master after winning (choose one)"),
          ],
        },
        {
          name: "Silph Co.",
          description:
            "Silph Co. is an 11-floor building crawling with Team Rocket grunts. Use the warp tiles and the Card Key (found on 5F) to navigate. Your rival is on 7F. An employee on 7F gives you a free Lapras. Giovanni is on 11F — defeat him to free the building. The president rewards you with a Master Ball, the only Ball that catches any Pokemon without fail. Save it for Mewtwo or a legendary bird.",
          trainers: [
            trn("Team Rocket Grunt", "Grunt", [pk("Machop", 29, 66), pk("Drowzee", 29, 96), pk("Machop", 29, 66)], "\u20BD870"),
            trn("Team Rocket Grunt", "Grunt", [pk("Golbat", 28, 42), pk("Zubat", 28, 41), pk("Zubat", 28, 41), pk("Raticate", 28, 20)], "\u20BD840"),
            trn("Team Rocket Grunt", "Grunt", [pk("Cubone", 29, 104), pk("Zubat", 29, 41), pk("Machop", 29, 66)], "\u20BD870"),
            trn("Rival", "Blue", [
              pk("Pidgeot", 37, 18),
              pk("Growlithe", 35, 58),
              pk("Gyarados", 35, 130),
              pk("Alakazam", 35, 65),
              pk("Venusaur", 38, 3),
            ], "\u20BD2,090"),
            trn("Team Rocket Grunt", "Grunt", [pk("Arbok", 33, 24), pk("Hypno", 33, 97)], "\u20BD990"),
            trn("Team Rocket Boss", "Giovanni", [
              pk("Nidorino", 37, 33),
              pk("Kangaskhan", 35, 115),
              pk("Rhyhorn", 37, 111),
              pk("Nidoqueen", 41, 31),
            ], "\u20BD4,059"),
          ],
          items: [
            item("Card Key", "5F"),
            item("Master Ball", "From the President on 11F after defeating Giovanni"),
            item("Lapras", "Gift from employee on 7F"),
            item("TM36 Selfdestruct", "Floor 2"),
            item("Protein", "Floor 5"),
            item("HP Up", "Floor 10"),
            item("Rare Candy", "Floor 10"),
          ],
        },
        {
          name: "Saffron Gym \u2014 Leader Sabrina",
          description:
            "Sabrina's gym is a warp tile maze. Step on tiles to teleport between rooms — find the correct sequence to reach Sabrina. She uses powerful Psychic-type Pokemon. Bug and Ghost moves should be super effective, but in Gen I the only damaging Ghost move (Lick) is weak and Bug moves are also weak. Your best bet is a strong physical attacker like Snorlax. Her Alakazam has massive Speed and Special stats. Defeating her earns the Marsh Badge and TM46 Psywave.",
          trainers: [
            trn("Psychic", "Johan", [pk("Kadabra", 31, 64), pk("Slowpoke", 31, 79), pk("Mr. Mime", 31, 122), pk("Kadabra", 31, 64)], "\u20BD620"),
            trn("Channeler", "Stacy", [pk("Gastly", 34, 92), pk("Haunter", 34, 93)], "\u20BD1,088"),
            trn("Psychic", "Preston", [pk("Slowpoke", 33, 79), pk("Slowpoke", 33, 79), pk("Slowbro", 33, 80)], "\u20BD660"),
            trn("Gym Leader", "Sabrina", [
              pk("Kadabra", 38, 64),
              pk("Mr. Mime", 37, 122),
              pk("Venomoth", 38, 49),
              pk("Alakazam", 43, 65),
            ], "\u20BD4,257 + TM46 (Psywave)"),
          ],
          items: [
            item("Marsh Badge", "Defeat Sabrina"),
            item("TM46 Psywave", "Defeat Sabrina"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Cinnabar Island, Pokemon Mansion, Cinnabar Gym (Blaine)
     * =============================================================== */
    {
      part: 12,
      title: "Cinnabar Island, Pokemon Mansion & Cinnabar Gym (Blaine)",
      summary:
        "Travel to Cinnabar Island, explore the Pokemon Mansion for the Secret Key, revive fossils, and earn the Volcano Badge from Blaine.",
      locations: [
        {
          name: "Route 19, Route 20 & Seafoam Islands",
          description:
            "Surf south from Fuchsia City through Route 19 and Route 20 to reach Cinnabar Island. On the way, you can explore the Seafoam Islands. Use Strength to push boulders and redirect water currents to reach the lowest level where Articuno (Level 50) awaits. Save before encountering it! This dungeon is optional but the legendary bird is worth the effort.",
          encounters: [
            enc("Tentacool", 72, ["Red", "Blue"], "Surfing", "5-40", "100%"),
            enc("Seel", 86, ["Red", "Blue"], "Cave", "26-34", "40%"),
            enc("Zubat", 41, ["Red", "Blue"], "Cave", "22-26", "30%"),
            enc("Golbat", 42, ["Red", "Blue"], "Cave", "26-30", "10%"),
            enc("Dewgong", 87, ["Red", "Blue"], "Cave", "32-36", "5%"),
            enc("Psyduck", 54, ["Red"], "Cave", "28-32", "10%"),
            enc("Slowpoke", 79, ["Blue"], "Cave", "28-32", "10%"),
            enc("Shellder", 90, ["Red", "Blue"], "Super Rod", "23", "25%"),
            enc("Horsea", 116, ["Red", "Blue"], "Super Rod", "23", "25%"),
            enc("Staryu", 120, ["Red", "Blue"], "Super Rod", "23", "25%"),
            enc("Krabby", 98, ["Red", "Blue"], "Super Rod", "23", "25%"),
          ],
          items: [
            item("Articuno", "Seafoam Islands B4F (Lv. 50, save first!)"),
            item("Rare Candy", "Seafoam Islands"),
            item("Big Pearl", "Seafoam Islands (hidden)"),
          ],
        },
        {
          name: "Pokemon Mansion",
          description:
            "An abandoned research facility on Cinnabar Island where Mewtwo was created. Read the journals on the tables for lore about Mew and Mewtwo. The mansion has multiple floors with switches that open and close doors. You must navigate to B1F to find the Secret Key that unlocks Blaine's gym. Wild Pokemon here include Ponyta, Growlithe (Red), Vulpix (Blue), Grimer, Koffing, and the rare Ditto.",
          encounters: [
            enc("Ponyta", 77, ["Red", "Blue"], "Building", "28-36", "20%"),
            enc("Growlithe", 58, ["Red"], "Building", "28-36", "20%"),
            enc("Vulpix", 37, ["Blue"], "Building", "28-36", "20%"),
            enc("Grimer", 88, ["Red", "Blue"], "Building", "28-30", "15%"),
            enc("Koffing", 109, ["Red", "Blue"], "Building", "28-30", "15%"),
            enc("Weezing", 110, ["Red", "Blue"], "Building", "32-36", "5%"),
            enc("Muk", 89, ["Red", "Blue"], "Building", "34-36", "5%"),
            enc("Ditto", 132, ["Red", "Blue"], "Building", "33", "5%"),
          ],
          trainers: [
            trn("Burglar", "Simon", [pk("Ninetales", 38, 38), pk("Growlithe", 38, 58)], "\u20BD3,420"),
            trn("Burglar", "Lewis", [pk("Growlithe", 34, 58), pk("Ponyta", 34, 77)], "\u20BD3,060"),
            trn("Scientist", "Ted", [pk("Electrode", 33, 101), pk("Weezing", 33, 110)], "\u20BD990"),
            trn("Scientist", "Ivan", [pk("Magnemite", 34, 81), pk("Electrode", 34, 101), pk("Magneton", 34, 82)], "\u20BD1,020"),
          ],
          items: [
            item("Secret Key", "B1F (unlocks Cinnabar Gym)"),
            item("TM14 Blizzard", "3F"),
            item("Iron", "B1F"),
            item("Calcium", "B1F"),
            item("Rare Candy", "3F (hidden)"),
            item("Max Potion", "2F"),
          ],
        },
        {
          name: "Cinnabar Gym \u2014 Leader Blaine",
          description:
            "Use the Secret Key to enter the gym. Blaine's gym features quiz machines — answer trivia questions correctly to open doors without fighting the trainer next to them. Get one wrong and you battle the trainer. Blaine uses Fire-type Pokemon. Water, Ground, and Rock moves are super effective. If you have a Surfer or Lapras, this gym is easy. Defeating Blaine earns the Volcano Badge and TM38 Fire Blast.",
          trainers: [
            trn("Burglar", "Quinn", [pk("Growlithe", 36, 58), pk("Vulpix", 36, 37)], "\u20BD3,240"),
            trn("Super Nerd", "Erik", [pk("Vulpix", 36, 37), pk("Vulpix", 36, 37), pk("Ninetales", 36, 38)], "\u20BD900"),
            trn("Burglar", "Dusty", [pk("Ponyta", 37, 77), pk("Growlithe", 37, 58), pk("Rapidash", 37, 78)], "\u20BD3,330"),
            trn("Super Nerd", "Avery", [pk("Ponyta", 34, 77), pk("Charmeleon", 34, 5), pk("Vulpix", 34, 37), pk("Growlithe", 34, 58)], "\u20BD850"),
            trn("Gym Leader", "Blaine", [
              pk("Growlithe", 42, 58),
              pk("Ponyta", 40, 77),
              pk("Rapidash", 42, 78),
              pk("Arcanine", 47, 59),
            ], "\u20BD4,653 + TM38 (Fire Blast)"),
          ],
          items: [
            item("Volcano Badge", "Defeat Blaine"),
            item("TM38 Fire Blast", "Defeat Blaine"),
          ],
        },
        {
          name: "Cinnabar Lab",
          description:
            "The Cinnabar Lab can revive fossils you collected during your journey. Bring the Helix Fossil (becomes Omanyte) or Dome Fossil (becomes Kabuto) to the scientist. The Old Amber from Pewter Museum (accessible with Cut) can be revived into Aerodactyl. You can also trade for rare Pokemon in the lab.",
          items: [
            item("Omanyte", "Revive Helix Fossil"),
            item("Kabuto", "Revive Dome Fossil"),
            item("Aerodactyl", "Revive Old Amber"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Viridian Gym (Giovanni), Victory Road
     * =============================================================== */
    {
      part: 13,
      title: "Viridian Gym (Giovanni) & Victory Road",
      summary:
        "Return to Viridian City to challenge the final Gym Leader, then traverse Victory Road to reach the Indigo Plateau.",
      locations: [
        {
          name: "Viridian Gym \u2014 Leader Giovanni",
          description:
            "Return to Viridian City with seven badges. The gym is now open and the leader is revealed to be Giovanni, the Team Rocket Boss! He specializes in Ground-type Pokemon. Water, Grass, and Ice moves are ideal. His Rhydon has very high Attack and Defense but weak Special, so Surf or Ice Beam will deal massive damage. Winning earns you the Earth Badge (all Pokemon obey you regardless of level) and TM27 Fissure.",
          trainers: [
            trn("Cooltrainer\u2642", "Samuel", [pk("Sandslash", 39, 28), pk("Rhyhorn", 39, 111), pk("Nidorino", 39, 33), pk("Nidoking", 39, 34)], "\u20BD1,365"),
            trn("Black Belt", "Takashi", [pk("Machoke", 40, 67), pk("Machop", 40, 66), pk("Machoke", 40, 67)], "\u20BD960"),
            trn("Cooltrainer\u2642", "Yuji", [pk("Sandslash", 43, 28), pk("Dugtrio", 43, 51), pk("Nidoqueen", 43, 31)], "\u20BD1,505"),
            trn("Tamer", "Jason", [pk("Arbok", 43, 24), pk("Tauros", 43, 128)], "\u20BD1,032"),
            trn("Cooltrainer\u2642", "Warren", [pk("Marowak", 42, 105), pk("Rhydon", 42, 112), pk("Nidoking", 42, 34)], "\u20BD1,470"),
            trn("Black Belt", "Atsushi", [pk("Machop", 40, 66), pk("Machoke", 40, 67)], "\u20BD960"),
            trn("Gym Leader", "Giovanni", [
              pk("Rhyhorn", 45, 111),
              pk("Dugtrio", 42, 51),
              pk("Nidoqueen", 44, 31),
              pk("Nidoking", 45, 34),
              pk("Rhydon", 50, 112),
            ], "\u20BD4,950 + TM27 (Fissure)"),
          ],
          items: [
            item("Earth Badge", "Defeat Giovanni"),
            item("TM27 Fissure", "Defeat Giovanni"),
          ],
        },
        {
          name: "Route 22 \u2014 Rival Battle",
          description:
            "Head west from Viridian City toward the Pokemon League gate. Your rival ambushes you here for a battle before the badge check gates. His team is fully evolved and in the mid-40s. Make sure your team is ready for a tough fight.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Pidgeot", 47, 18),
              pk("Rhyhorn", 45, 111),
              pk("Growlithe", 45, 58),
              pk("Gyarados", 45, 130),
              pk("Alakazam", 47, 65),
              pk("Venusaur", 53, 3),
            ], "\u20BD2,915"),
          ],
          items: [],
        },
        {
          name: "Route 23 (Badge Check Gates)",
          description:
            "A series of checkpoints where guards verify each of your eight badges. You need all eight to proceed. Wild Pokemon in the grass include rare encounters like Ditto, Fearow, and version-exclusive Ekans/Sandshrew evolutions.",
          encounters: [
            enc("Spearow", 21, ["Red", "Blue"], "Grass", "26-28", "10%"),
            enc("Fearow", 22, ["Red", "Blue"], "Grass", "36-43", "10%"),
            enc("Ekans", 23, ["Red"], "Grass", "26-36", "15%"),
            enc("Sandshrew", 27, ["Blue"], "Grass", "26-36", "15%"),
            enc("Arbok", 24, ["Red"], "Grass", "41-43", "5%"),
            enc("Sandslash", 28, ["Blue"], "Grass", "41-43", "5%"),
            enc("Nidorina", 30, ["Red", "Blue"], "Grass", "33-36", "10%"),
            enc("Nidorino", 33, ["Red", "Blue"], "Grass", "33-36", "10%"),
            enc("Ditto", 132, ["Red", "Blue"], "Grass", "33-43", "10%"),
            enc("Mankey", 56, ["Red"], "Grass", "34-36", "5%"),
          ],
          items: [],
        },
        {
          name: "Victory Road",
          description:
            "A challenging cave with Strength boulder puzzles across three floors. Push boulders onto switches to unlock the way forward. The wild Pokemon here are powerful. Moltres is found in Victory Road at Level 50 — save before the encounter! Many tough trainers line the path. Make sure your team is at least level 45+ before attempting the Elite Four. Stock up on Revives, Full Restores, and Max Potions at the Indigo Plateau Poke Mart.",
          encounters: [
            enc("Onix", 95, ["Red", "Blue"], "Cave", "36-46", "15%"),
            enc("Geodude", 74, ["Red", "Blue"], "Cave", "36-44", "15%"),
            enc("Graveler", 75, ["Red", "Blue"], "Cave", "40-46", "5%"),
            enc("Golbat", 42, ["Red", "Blue"], "Cave", "38-46", "30%"),
            enc("Machoke", 67, ["Red", "Blue"], "Cave", "40-46", "15%"),
            enc("Marowak", 105, ["Red", "Blue"], "Cave", "40-46", "10%"),
            enc("Zubat", 41, ["Red", "Blue"], "Cave", "22-26", "5%"),
            enc("Machop", 66, ["Red", "Blue"], "Cave", "24-26", "5%"),
          ],
          trainers: [
            trn("Cooltrainer\u2640", "Naomi", [pk("Persian", 42, 53), pk("Ponyta", 42, 77), pk("Rapidash", 42, 78), pk("Vulpix", 42, 37), pk("Ninetales", 42, 38)], "\u20BD1,470"),
            trn("Cooltrainer\u2642", "George", [pk("Nidoking", 42, 34), pk("Slowbro", 42, 80), pk("Kangaskhan", 42, 115), pk("Persian", 42, 53)], "\u20BD1,470"),
            trn("Cooltrainer\u2640", "Caroline", [pk("Bellsprout", 42, 69), pk("Weepinbell", 42, 70), pk("Victreebel", 42, 71), pk("Parasect", 42, 47), pk("Vileplume", 42, 45)], "\u20BD1,470"),
            trn("Cooltrainer\u2642", "Colby", [pk("Kingler", 41, 99), pk("Poliwhirl", 42, 61), pk("Tentacruel", 42, 73), pk("Seaking", 42, 119), pk("Starmie", 42, 121)], "\u20BD1,470"),
            trn("Juggler", "Nelson", [pk("Drowzee", 41, 96), pk("Hypno", 41, 97), pk("Kadabra", 41, 64), pk("Kadabra", 41, 64)], "\u20BD1,435"),
            trn("Black Belt", "Daisuke", [pk("Machoke", 43, 67), pk("Machop", 43, 66), pk("Machoke", 43, 67)], "\u20BD1,032"),
          ],
          items: [
            item("Moltres", "Victory Road 2F (Lv. 50, save first!)"),
            item("TM43 Sky Attack", "Victory Road 2F"),
            item("TM05 Mega Kick", "Victory Road 3F"),
            item("Full Heal", "Victory Road 1F"),
            item("Max Revive", "Victory Road 3F"),
            item("Rare Candy", "Victory Road 2F (hidden)"),
            item("Guard Spec.", "Victory Road 1F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Pokemon League & Post-Game
     * =============================================================== */
    {
      part: 14,
      title: "Pokemon League & Post-Game",
      summary:
        "Challenge the Elite Four and Champion to become the Pokemon League Champion, then explore post-game content including Cerulean Cave and Mewtwo.",
      locations: [
        {
          name: "Indigo Plateau \u2014 Pokemon League",
          description:
            "The final challenge. Buy Full Restores, Revives, and Max Potions from the Poke Mart. You must defeat all four Elite Four members and the Champion in a row with no healing between battles except your own items. Save before entering! Recommended level: 55-65+. Lorelei uses Ice/Water types, Bruno uses Fighting/Rock, Agatha uses Ghost/Poison, Lance uses Dragon types, and the Champion (your rival) uses a balanced team with no single weakness.",
          trainers: [
            trn("Elite Four", "Lorelei", [
              pk("Dewgong", 54, 87),
              pk("Cloyster", 53, 91),
              pk("Slowbro", 54, 80),
              pk("Jynx", 56, 124),
              pk("Lapras", 56, 131),
            ], "Ice specialist \u2014 use Electric, Fighting, Rock"),
            trn("Elite Four", "Bruno", [
              pk("Onix", 53, 95),
              pk("Hitmonchan", 55, 107),
              pk("Hitmonlee", 55, 106),
              pk("Onix", 56, 95),
              pk("Machamp", 58, 68),
            ], "Fighting specialist \u2014 use Psychic, Flying, Water"),
            trn("Elite Four", "Agatha", [
              pk("Gengar", 56, 94),
              pk("Golbat", 56, 42),
              pk("Haunter", 55, 93),
              pk("Arbok", 58, 24),
              pk("Gengar", 60, 94),
            ], "Ghost specialist \u2014 use Psychic, Ground"),
            trn("Elite Four", "Lance", [
              pk("Gyarados", 58, 130),
              pk("Dragonair", 56, 148),
              pk("Dragonair", 56, 148),
              pk("Aerodactyl", 60, 142),
              pk("Dragonite", 62, 149),
            ], "Dragon specialist \u2014 use Ice, Rock, Electric"),
            trn("Champion", "Blue", [
              pk("Pidgeot", 61, 18),
              pk("Alakazam", 59, 65),
              pk("Rhydon", 61, 112),
              pk("Arcanine", 63, 59),
              pk("Exeggutor", 61, 103),
              pk("Gyarados", 63, 130),
            ], "Mixed team \u2014 no single weakness"),
          ],
          items: [],
        },
        {
          name: "Power Plant (Post-Game / Missable Earlier)",
          description:
            "The Power Plant is accessible via Surf from Route 10. It contains Electric-type Pokemon and the legendary Zapdos at Level 50. Navigate through the corridors, avoiding the Voltorb disguised as item balls (they are actually Electrode). Save before approaching Zapdos! This can be done before the Elite Four once you have Surf, but is listed here as a reminder if missed.",
          encounters: [
            enc("Voltorb", 100, ["Red", "Blue"], "Building", "21-23", "30%"),
            enc("Magnemite", 81, ["Red", "Blue"], "Building", "21-23", "30%"),
            enc("Pikachu", 25, ["Red", "Blue"], "Building", "21-24", "25%"),
            enc("Magneton", 82, ["Red", "Blue"], "Building", "32-35", "5%"),
            enc("Electrode", 101, ["Red", "Blue"], "Building", "34-37", "5%"),
            enc("Electabuzz", 125, ["Red"], "Building", "33-36", "5%"),
          ],
          items: [
            item("Zapdos", "Deep inside the Power Plant (Lv. 50, save first!)"),
            item("TM25 Thunder", "Power Plant"),
            item("TM33 Reflect", "Power Plant"),
          ],
        },
        {
          name: "Unknown Dungeon (Cerulean Cave)",
          description:
            "After becoming Champion, the cave entrance in Cerulean City (previously guarded) is now open. This is the toughest dungeon in the game with extremely high-level wild Pokemon. Navigate through three floors of powerful encounters to find Mewtwo at Level 70 in the deepest chamber. This is the ultimate catch — use your Master Ball if you saved it, or bring dozens of Ultra Balls and a Pokemon with status moves like Sleep or Freeze. Save before the encounter!",
          encounters: [
            enc("Golbat", 42, ["Red", "Blue"], "Cave", "46-49", "25%"),
            enc("Hypno", 97, ["Red", "Blue"], "Cave", "46-49", "15%"),
            enc("Magneton", 82, ["Red", "Blue"], "Cave", "46-49", "5%"),
            enc("Dodrio", 85, ["Red", "Blue"], "Cave", "49-52", "10%"),
            enc("Venomoth", 49, ["Red", "Blue"], "Cave", "49-52", "10%"),
            enc("Kadabra", 64, ["Red", "Blue"], "Cave", "49-52", "5%"),
            enc("Parasect", 47, ["Red", "Blue"], "Cave", "49-52", "5%"),
            enc("Rhydon", 112, ["Red", "Blue"], "Cave", "52-55", "10%"),
            enc("Chansey", 113, ["Red", "Blue"], "Cave", "52-55", "5%"),
            enc("Ditto", 132, ["Red", "Blue"], "Cave", "55-58", "10%"),
            enc("Raichu", 26, ["Red", "Blue"], "Cave", "46-49", "5%"),
            enc("Wigglytuff", 40, ["Red", "Blue"], "Cave", "46-49", "1%"),
          ],
          items: [
            item("Mewtwo", "Deepest chamber (Lv. 70 \u2014 save first!)"),
            item("PP Up", "2F"),
            item("Max Revive", "B1F"),
            item("Ultra Ball", "B1F (multiple)"),
            item("Full Restore", "B1F"),
          ],
        },
      ],
      isPostGame: true,
    },
  ],
};
