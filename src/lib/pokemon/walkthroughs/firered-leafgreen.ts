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

export const FIRERED_LEAFGREEN_WALKTHROUGH: GameWalkthrough = {
  slug: "firered-leafgreen",
  gameLabel: "FireRed & LeafGreen",
  versionTags: ["FR", "LG"],
  parts: [
    /* ═══════════════════════════════════════════════════════
     *  PART 1 — Introduction, Pallet Town
     * ═══════════════════════════════════════════════════════ */
    {
      part: 1,
      title: "Introduction & Pallet Town",
      summary: "Choose your starter Pokémon and begin your journey.",
      locations: [
        {
          name: "Pallet Town",
          description:
            "Your adventure begins in Pallet Town. Head north out of your house and try to walk into the tall grass. Professor Oak will stop you and take you to his lab. Choose your starter Pokémon — Bulbasaur, Charmander, or Squirtle. Your rival will pick the type that's strong against yours. After choosing, your rival will challenge you to a battle. Don't worry if you lose — it won't affect the game. Head north toward Route 1.",
          items: [
            item("Potion", "On your PC at the start of the game"),
            item("Pokédex", "From Professor Oak after delivering his Parcel"),
            item("Town Map", "From your rival's sister after getting the Pokédex"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 2 — Route 1, Viridian City, Route 2 (West)
     * ═══════════════════════════════════════════════════════ */
    {
      part: 2,
      title: "Route 1, Viridian City & Route 2 (West)",
      summary: "Travel through Route 1, visit Viridian City, deliver Oak's Parcel, and head west on Route 2.",
      locations: [
        {
          name: "Route 1",
          description:
            "Head north from Pallet Town. The grass here has low-level Pokémon — great for getting some early experience. A man along the way will give you a free Potion. No trainers here, just wild encounters.",
          encounters: [
            enc("Pidgey", 16, ["FR", "LG"], "Grass", "2-5", "50%"),
            enc("Rattata", 19, ["FR", "LG"], "Grass", "2-4", "50%"),
          ],
          items: [item("Potion", "From the Poké Mart employee on the route")],
        },
        {
          name: "Viridian City",
          description:
            "The Poké Mart clerk will give you Oak's Parcel. You can't challenge the Viridian Gym yet — it's locked until you have 7 badges. Head back to Pallet Town to deliver the Parcel to Professor Oak. He'll give you and your rival each a Pokédex. Return to Viridian City and head north to Route 2.",
          items: [
            item("Oak's Parcel", "Poké Mart clerk"),
            item("Teachy TV", "Old man near the Pokémon Center (after Parcel delivery)"),
          ],
        },
        {
          name: "Route 2 (West)",
          description:
            "A short route heading north toward Viridian Forest. You can't access the eastern side yet (need Cut). Catch some Pokémon here for your team if you want.",
          encounters: [
            enc("Pidgey", 16, ["FR", "LG"], "Grass", "2-5", "45%"),
            enc("Rattata", 19, ["FR", "LG"], "Grass", "2-5", "45%"),
            enc("Caterpie", 10, ["FR"], "Grass", "3-5", "10%"),
            enc("Weedle", 13, ["LG"], "Grass", "3-5", "10%"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 3 — Viridian Forest, Pewter City, Pewter Gym
     * ═══════════════════════════════════════════════════════ */
    {
      part: 3,
      title: "Viridian Forest, Pewter City & Pewter Gym",
      summary: "Navigate Viridian Forest, reach Pewter City, and earn the Boulder Badge from Brock.",
      locations: [
        {
          name: "Viridian Forest",
          description:
            "A sprawling wooded area — easy to get lost in. Follow the path northwest to find a Poké Ball, then head east and south to reach the southeastern grass patch. Work your way north battling Bug Catchers. Pikachu is rare but very useful here. If you have Charmander, you may struggle against Brock — consider catching a Nidoran♂ (Route 22) that learns Double Kick, or a Mankey.",
          encounters: [
            enc("Caterpie", 10, ["FR", "LG"], "Grass", "3-5", "40%"),
            enc("Weedle", 13, ["FR", "LG"], "Grass", "3-5", "40%"),
            enc("Metapod", 11, ["FR"], "Grass", "4-6", "10%"),
            enc("Kakuna", 14, ["LG"], "Grass", "4-6", "10%"),
            enc("Pikachu", 25, ["FR", "LG"], "Grass", "3-5", "5%"),
          ],
          trainers: [
            trn("Bug Catcher", "Rick", [pk("Weedle", 6, 13), pk("Caterpie", 6, 10)], "₽72"),
            trn("Bug Catcher", "Doug", [pk("Weedle", 7, 13), pk("Kakuna", 7, 14)], "₽84"),
            trn("Bug Catcher", "Anthony", [pk("Caterpie", 7, 10), pk("Caterpie", 8, 10)], "₽96"),
            trn("Bug Catcher", "Charlie", [pk("Metapod", 7, 11), pk("Caterpie", 7, 10), pk("Metapod", 7, 11)], "₽84"),
            trn("Bug Catcher", "Sammy", [pk("Weedle", 9, 13)], "₽108"),
          ],
          items: [
            item("Poké Ball", "Northwest clearing"),
            item("Antidote", "Near Bug Catcher Doug"),
            item("Potion", "Southeast dead-end path"),
          ],
        },
        {
          name: "Pewter City",
          description:
            "Home of the Pewter City Gym and the Museum of Science. Heal up at the Pokémon Center before challenging Brock. If you need to level up, go back to Viridian Forest. Make sure you have a Pokémon that knows a Water, Grass, or Fighting move.",
          items: [
            item("Old Amber", "Museum of Science back room (need Cut later)"),
          ],
        },
        {
          name: "Pewter Gym — Leader Brock",
          description:
            "Brock specializes in Rock-type Pokémon. Water and Grass moves are super effective. If you chose Squirtle or Bulbasaur, this is straightforward. Charmander players should use a Butterfree with Confusion or a Nidoran♂/Mankey with Fighting moves. Beat the one trainer between you and Brock, then challenge him for the Boulder Badge.",
          trainers: [
            trn("Camper", "Liam", [pk("Geodude", 10, 74), pk("Sandshrew", 11, 27)], "₽220"),
            trn("Gym Leader", "Brock", [pk("Geodude", 12, 74), pk("Onix", 14, 95)], "₽1,400 + TM39 (Rock Tomb)"),
          ],
          items: [
            item("Boulder Badge", "Defeat Brock"),
            item("TM39 Rock Tomb", "Defeat Brock"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 4 — Route 3, Mt. Moon, Route 4
     * ═══════════════════════════════════════════════════════ */
    {
      part: 4,
      title: "Route 3, Mt. Moon & Route 4",
      summary: "Battle trainers on Route 3, navigate the caves of Mt. Moon, and emerge on Route 4.",
      locations: [
        {
          name: "Route 3",
          description:
            "A route full of trainers heading east from Pewter City. This is a gauntlet — stock up on Potions before heading out. There are 8 trainers total. At the end of the route, a man outside the Pokémon Center will sell you a Magikarp for ₽500 — it eventually evolves into the powerful Gyarados at level 20, so consider buying it!",
          encounters: [
            enc("Pidgey", 16, ["FR", "LG"], "Grass", "5-8", "35%"),
            enc("Spearow", 21, ["FR", "LG"], "Grass", "5-8", "35%"),
            enc("Nidoran♀", 29, ["FR", "LG"], "Grass", "6-8", "14%"),
            enc("Nidoran♂", 32, ["FR", "LG"], "Grass", "6-8", "14%"),
            enc("Jigglypuff", 39, ["FR", "LG"], "Grass", "3-7", "2%"),
          ],
          trainers: [
            trn("Lass", "Janice", [pk("Pidgey", 9, 16)], "₽144"),
            trn("Bug Catcher", "Colton", [pk("Caterpie", 10, 10), pk("Weedle", 10, 13)], "₽120"),
            trn("Youngster", "Ben", [pk("Rattata", 11, 19)], "₽176"),
            trn("Bug Catcher", "Greg", [pk("Weedle", 9, 13), pk("Kakuna", 9, 14), pk("Caterpie", 9, 10), pk("Metapod", 9, 11)], "₽108"),
            trn("Youngster", "Calvin", [pk("Spearow", 14, 21)], "₽224"),
            trn("Lass", "Sally", [pk("Rattata", 10, 19), pk("Nidoran♀", 10, 29)], "₽160"),
            trn("Bug Catcher", "James", [pk("Caterpie", 11, 10), pk("Metapod", 11, 11)], "₽132"),
            trn("Lass", "Robin", [pk("Jigglypuff", 14, 39)], "₽224"),
          ],
          items: [],
        },
        {
          name: "Mt. Moon",
          description:
            "A large multi-floor cave. You'll encounter Team Rocket grunts for the first time. Make sure you have Repels or plenty of Potions — wild Zubat are very common. On the bottom floor, you'll find two fossils — the Helix Fossil (Omanyte) and the Dome Fossil (Kabuto). A Super Nerd will challenge you and you get to pick one fossil after the battle. Choose wisely — the other fossil is lost forever! Clefairy is rare but appears on the upper floors.",
          encounters: [
            enc("Zubat", 41, ["FR", "LG"], "Cave", "7-11", "69%"),
            enc("Geodude", 74, ["FR", "LG"], "Cave", "7-10", "25%"),
            enc("Paras", 46, ["FR", "LG"], "Cave", "8-12", "5%"),
            enc("Clefairy", 35, ["FR", "LG"], "Cave", "8-12", "1%"),
          ],
          trainers: [
            trn("Bug Catcher", "Kent", [pk("Weedle", 11, 13), pk("Kakuna", 11, 14)], "₽132"),
            trn("Lass", "Iris", [pk("Clefairy", 14, 35)], "₽224"),
            trn("Super Nerd", "Jovan", [pk("Magnemite", 11, 81), pk("Voltorb", 11, 100)], "₽264"),
            trn("Team Rocket Grunt", "Grunt", [pk("Sandshrew", 11, 27), pk("Rattata", 11, 19), pk("Zubat", 11, 41)], "₽440"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 13, 41), pk("Ekans", 13, 23)], "₽520"),
            trn("Super Nerd", "Miguel", [pk("Grimer", 12, 88), pk("Voltorb", 12, 100), pk("Koffing", 12, 109)], "₽288"),
          ],
          items: [
            item("Star Piece", "B1F, northwestern corner"),
            item("TM09 Bullet Seed", "B1F"),
            item("Escape Rope", "B2F"),
            item("Moon Stone", "B2F, crater room"),
            item("Helix Fossil or Dome Fossil", "B2F, after beating Super Nerd Miguel"),
          ],
        },
        {
          name: "Route 4",
          description:
            "A short route leading downhill to Cerulean City. The grass here has some decent Pokémon. You can't go back through Mt. Moon this way — it's a one-way ledge — so make sure you're ready to move forward.",
          encounters: [
            enc("Rattata", 19, ["FR", "LG"], "Grass", "8-12", "35%"),
            enc("Spearow", 21, ["FR", "LG"], "Grass", "8-12", "35%"),
            enc("Ekans", 23, ["FR"], "Grass", "8-12", "25%"),
            enc("Sandshrew", 27, ["LG"], "Grass", "8-12", "25%"),
            enc("Mankey", 56, ["FR", "LG"], "Grass", "10-12", "5%"),
          ],
          items: [
            item("TM05 Roar", "West side of the route"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 5 — Cerulean City, Cerulean Gym, Routes 24-25
     * ═══════════════════════════════════════════════════════ */
    {
      part: 5,
      title: "Cerulean City, Cerulean Gym & Nugget Bridge",
      summary: "Explore Cerulean City, battle Misty, and cross the Nugget Bridge to meet Bill.",
      locations: [
        {
          name: "Cerulean City",
          description:
            "Heal up and explore. Your rival will ambush you on the north side of town when you try to go to Nugget Bridge. Beat him first, then you can challenge Misty or head north. The bike shop has a ₽1,000,000 bicycle you can't afford yet — you'll get a Bike Voucher later.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Pidgeotto", 17, 17),
              pk("Abra", 16, 63),
              pk("Rattata", 15, 19),
              pk("Bulbasaur", 18, 1),
            ], "₽360"),
          ],
          items: [
            item("Rare Candy", "Backyard of house (need Cut later)"),
          ],
        },
        {
          name: "Cerulean Gym — Leader Misty",
          description:
            "Misty uses Water types. Grass and Electric moves work great. If you have Bulbasaur or Pikachu, this is easy. Her Starmie is quite strong and fast — it knows Water Pulse which can confuse. Consider leveling to at least 20-22 before challenging. The Jr. Trainer inside has a Goldeen.",
          trainers: [
            trn("Swimmer", "Diana", [pk("Horsea", 16, 116), pk("Shellder", 16, 90)], "₽64"),
            trn("Gym Leader", "Misty", [pk("Staryu", 18, 120), pk("Starmie", 21, 121)], "₽2,100 + TM03 (Water Pulse)"),
          ],
          items: [
            item("Cascade Badge", "Defeat Misty"),
            item("TM03 Water Pulse", "Defeat Misty"),
          ],
        },
        {
          name: "Route 24 — Nugget Bridge",
          description:
            "The famous Nugget Bridge! Battle 5 trainers in a row across the bridge. After the fifth, a Team Rocket member will try to recruit you — defeat him to earn a Nugget (worth ₽5,000). Continue north to Route 25.",
          encounters: [
            enc("Caterpie", 10, ["FR"], "Grass", "7-12", "20%"),
            enc("Weedle", 13, ["LG"], "Grass", "7-12", "20%"),
            enc("Pidgey", 16, ["FR", "LG"], "Grass", "8-12", "15%"),
            enc("Oddish", 43, ["FR"], "Grass", "12-14", "25%"),
            enc("Bellsprout", 69, ["LG"], "Grass", "12-14", "25%"),
            enc("Abra", 63, ["FR", "LG"], "Grass", "8-12", "15%"),
          ],
          trainers: [
            trn("Bug Catcher", "Cale", [pk("Caterpie", 10, 10), pk("Weedle", 10, 13), pk("Metapod", 10, 11), pk("Kakuna", 10, 14)], "₽120"),
            trn("Lass", "Ali", [pk("Pidgey", 12, 16), pk("Oddish", 12, 43)], "₽192"),
            trn("Youngster", "Timmy", [pk("Sandshrew", 14, 27)], "₽224"),
            trn("Lass", "Reli", [pk("Nidoran♂", 16, 32)], "₽256"),
            trn("Camper", "Ethan", [pk("Mankey", 18, 56)], "₽360"),
            trn("Team Rocket Grunt", "Grunt", [pk("Ekans", 15, 23), pk("Zubat", 15, 41)], "₽600"),
          ],
          items: [
            item("Nugget", "Reward from beating all 5 Nugget Bridge trainers"),
          ],
        },
        {
          name: "Route 25",
          description:
            "Continue east through more trainers to reach Bill's cottage at the end. Bill is a Pokémon researcher who accidentally turned himself into a Pokémon. Help him by using the PC in his house while he's on the teleporter. As thanks, he gives you the S.S. Ticket for the S.S. Anne in Vermilion City.",
          encounters: [
            enc("Pidgey", 16, ["FR", "LG"], "Grass", "8-14", "20%"),
            enc("Oddish", 43, ["FR"], "Grass", "12-14", "25%"),
            enc("Bellsprout", 69, ["LG"], "Grass", "12-14", "25%"),
            enc("Abra", 63, ["FR", "LG"], "Grass", "9-14", "15%"),
            enc("Caterpie", 10, ["FR"], "Grass", "8-12", "15%"),
            enc("Weedle", 13, ["LG"], "Grass", "8-12", "15%"),
          ],
          trainers: [
            trn("Hiker", "Franklin", [pk("Machop", 15, 66), pk("Geodude", 15, 74)], "₽540"),
            trn("Hiker", "Wayne", [pk("Onix", 17, 95)], "₽612"),
            trn("Youngster", "Dan", [pk("Slowpoke", 17, 79)], "₽272"),
            trn("Lass", "Haley", [pk("Oddish", 13, 43), pk("Pidgey", 13, 16), pk("Oddish", 13, 43)], "₽208"),
            trn("Youngster", "Chad", [pk("Ekans", 14, 23), pk("Sandshrew", 14, 27)], "₽224"),
            trn("Lass", "Terry", [pk("Oddish", 16, 43), pk("Bellsprout", 16, 69)], "₽256"),
          ],
          items: [
            item("S.S. Ticket", "From Bill after helping him"),
            item("TM45 Attract", "From a girl north of Bill's cottage"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 6 — Route 5, Route 6, Vermilion City, S.S. Anne, Vermilion Gym
     * ═══════════════════════════════════════════════════════ */
    {
      part: 6,
      title: "Vermilion City, S.S. Anne & Vermilion Gym",
      summary: "Travel to Vermilion City, explore the S.S. Anne for HM01 Cut, and earn the Thunder Badge.",
      locations: [
        {
          name: "Route 5 & Underground Path",
          description:
            "Head south from Cerulean City. Pass through the Underground Path to avoid Saffron City (the guard won't let you through yet). Emerge on Route 6.",
          encounters: [
            enc("Pidgey", 16, ["FR", "LG"], "Grass", "13-16", "35%"),
            enc("Meowth", 52, ["FR", "LG"], "Grass", "10-16", "35%"),
            enc("Oddish", 43, ["FR"], "Grass", "13-16", "25%"),
            enc("Bellsprout", 69, ["LG"], "Grass", "13-16", "25%"),
            enc("Abra", 63, ["FR", "LG"], "Grass", "10-16", "5%"),
          ],
          items: [],
        },
        {
          name: "S.S. Anne",
          description:
            "Use your S.S. Ticket to board. Explore every room for items and trainer battles — this ship leaves permanently after you get Cut! Find your rival on the second floor and battle him. Then visit the Captain on the top deck — he's seasick. Rub his back and he gives you HM01 Cut. The ship departs after this, so grab everything first.",
          trainers: [
            trn("Rival", "Blue", [
              pk("Pidgeotto", 19, 17),
              pk("Raticate", 16, 20),
              pk("Kadabra", 18, 64),
              pk("Ivysaur", 20, 2),
            ], "₽400"),
            trn("Sailor", "Trevor", [pk("Machop", 17, 66)], "₽544"),
            trn("Gentleman", "Arthur", [pk("Voltorb", 18, 100), pk("Magnemite", 18, 81)], "₽1,296"),
            trn("Gentleman", "Thomas", [pk("Growlithe", 18, 58), pk("Ponyta", 18, 77)], "₽1,296"),
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
          name: "Vermilion Gym — Leader Lt. Surge",
          description:
            "Lt. Surge specializes in Electric types. Ground-type moves are the way to go — Geodude or Diglett from Diglett's Cave (Route 11) are perfect counters. The gym has a trash can puzzle: find two hidden switches in the trash cans. The second switch is always adjacent to the first. If you pick wrong, the puzzle resets. Bring patience!",
          trainers: [
            trn("Sailor", "Dwayne", [pk("Pikachu", 21, 25), pk("Pikachu", 21, 25)], "₽672"),
            trn("Engineer", "Baily", [pk("Voltorb", 21, 100), pk("Magnemite", 21, 81)], "₽1,008"),
            trn("Gentleman", "Tucker", [pk("Pikachu", 23, 25)], "₽1,656"),
            trn("Gym Leader", "Lt. Surge", [
              pk("Voltorb", 21, 100),
              pk("Pikachu", 18, 25),
              pk("Raichu", 24, 26),
            ], "₽2,400 + TM34 (Shock Wave)"),
          ],
          items: [
            item("Thunder Badge", "Defeat Lt. Surge"),
            item("TM34 Shock Wave", "Defeat Lt. Surge"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PARTS 7-17 (stubs for now — full data can be added)
     * ═══════════════════════════════════════════════════════ */
    {
      part: 7,
      title: "Route 11, Diglett's Cave & Route 9",
      summary: "Explore Route 11, catch Diglett, and head east through Route 9 toward Rock Tunnel.",
      locations: [
        {
          name: "Route 11 & Diglett's Cave",
          description:
            "Route 11 heads east from Vermilion City. You can catch Drowzee here. At the far end is the entrance to Diglett's Cave — a quick shortcut back to Route 2 near Pewter City. Diglett and Dugtrio make excellent Ground types for your team. Use Cut to access the eastern side of Route 2 for items.",
          encounters: [
            enc("Drowzee", 96, ["FR", "LG"], "Grass", "13-17", "40%"),
            enc("Ekans", 23, ["FR"], "Grass", "11-15", "25%"),
            enc("Sandshrew", 27, ["LG"], "Grass", "11-15", "25%"),
            enc("Diglett", 50, ["FR", "LG"], "Cave", "15-22", "95%"),
            enc("Dugtrio", 51, ["FR", "LG"], "Cave", "29-31", "5%"),
          ],
        },
        {
          name: "Route 9",
          description:
            "Head east from Cerulean City (use Cut on the bush blocking the path). Route 9 is full of trainers and leads to Rock Tunnel. Stock up on supplies and consider buying Repels.",
          encounters: [
            enc("Rattata", 19, ["FR", "LG"], "Grass", "14-17", "30%"),
            enc("Spearow", 21, ["FR", "LG"], "Grass", "13-17", "30%"),
            enc("Nidoran♀", 29, ["FR", "LG"], "Grass", "11-17", "10%"),
            enc("Nidoran♂", 32, ["FR", "LG"], "Grass", "11-17", "10%"),
          ],
        },
      ],
    },
    {
      part: 8,
      title: "Rock Tunnel, Lavender Town & Route 8",
      summary: "Navigate the dark Rock Tunnel (bring Flash!), pass through Lavender Town, and head west.",
      locations: [
        {
          name: "Rock Tunnel",
          description:
            "A dark cave that's much easier with Flash (HM05, from Oak's aide on Route 2 with 10 Pokémon caught). Without Flash you'll be navigating blind. Rock Tunnel has multiple floors with many trainers. Geodude and Machop are common here. This cave takes a while — bring lots of Potions and Repels.",
          encounters: [
            enc("Zubat", 41, ["FR", "LG"], "Cave", "15-17", "40%"),
            enc("Geodude", 74, ["FR", "LG"], "Cave", "15-17", "25%"),
            enc("Machop", 66, ["FR", "LG"], "Cave", "15-17", "25%"),
            enc("Onix", 95, ["FR", "LG"], "Cave", "13-17", "10%"),
          ],
        },
        {
          name: "Lavender Town",
          description:
            "A small town with the Pokémon Tower — a memorial for deceased Pokémon. You can't fully explore the tower yet (you need the Silph Scope from Team Rocket). Heal up and head west on Route 8 toward Celadon City. Mr. Fuji is being held at the top of Pokémon Tower — you'll save him later.",
        },
      ],
    },
    {
      part: 9,
      title: "Celadon City, Celadon Gym & Rocket Hideout",
      summary: "Explore the department store, defeat Erika, infiltrate the Rocket Game Corner, and get the Silph Scope.",
      locations: [
        {
          name: "Celadon City",
          description:
            "A large city with lots to do. The Department Store has everything you need. Get the Coin Case from the restaurant. Don't miss the free Eevee in the Celadon Condominiums (back entrance)! Visit the Game Corner and find the Team Rocket hideout behind the poster.",
          items: [
            item("Eevee", "Celadon Condominiums, roof door, back entrance"),
            item("Coin Case", "Celadon Restaurant (talk to man at the back)"),
            item("TM41 Torment", "Celadon Condominiums"),
            item("Tea", "Old woman in Celadon Condominiums (unlocks Saffron City gates)"),
          ],
        },
        {
          name: "Celadon Gym — Leader Erika",
          description:
            "Erika specializes in Grass types. Fire, Ice, Poison, and Flying moves are all super effective. Her Vileplume can put you to sleep with Sleep Powder so bring Awakenings. The gym is full of female trainers. Cut the bush to enter.",
          trainers: [
            trn("Gym Leader", "Erika", [
              pk("Victreebel", 29, 71),
              pk("Tangela", 24, 114),
              pk("Vileplume", 29, 45),
            ], "₽2,900 + TM19 (Giga Drain)"),
          ],
          items: [
            item("Rainbow Badge", "Defeat Erika"),
            item("TM19 Giga Drain", "Defeat Erika"),
          ],
        },
        {
          name: "Rocket Game Corner Hideout",
          description:
            "Find the secret switch behind the poster in the Game Corner. Navigate the underground base, defeat Team Rocket grunts, and battle Giovanni at the bottom. He uses Ground types. After defeating him, pick up the Silph Scope — now you can identify ghosts in Pokémon Tower!",
          trainers: [
            trn("Team Rocket Boss", "Giovanni", [
              pk("Onix", 25, 95),
              pk("Rhyhorn", 24, 111),
              pk("Kangaskhan", 29, 115),
            ], "₽2,900"),
          ],
          items: [
            item("Silph Scope", "Defeat Giovanni"),
            item("TM12 Taunt", "B3F"),
            item("Rare Candy", "B3F"),
          ],
        },
      ],
    },
    {
      part: 10,
      title: "Pokémon Tower & Fuchsia City",
      summary: "Save Mr. Fuji from Pokémon Tower, then travel south to Fuchsia City for the Soul Badge.",
      locations: [
        {
          name: "Pokémon Tower",
          description:
            "Return to Lavender Town with the Silph Scope. Now you can identify the ghost Pokémon — they're Gastly, Haunter, and Cubone. Fight through Team Rocket grunts on the upper floors. The ghost blocking the stairs on the 6th floor is a Marowak (can't be caught). Rescue Mr. Fuji at the top and he'll give you the Poké Flute — used to wake Snorlax!",
          encounters: [
            enc("Gastly", 92, ["FR", "LG"], "Building", "13-18", "88%"),
            enc("Haunter", 93, ["FR", "LG"], "Building", "15-18", "10%"),
            enc("Cubone", 104, ["FR", "LG"], "Building", "13-17", "2%"),
          ],
          items: [
            item("Poké Flute", "From Mr. Fuji after rescue"),
            item("Cleanse Tag", "From Mr. Fuji"),
          ],
        },
        {
          name: "Fuchsia City — Gym Leader Koga",
          description:
            "Travel south through Routes 12-15 (or Cycling Road from Celadon) to reach Fuchsia City. Visit the Safari Zone to get HM03 Surf and HM04 Strength. Koga's gym has invisible walls — bump into them to find the path. Koga uses Poison types — Psychic and Ground moves destroy his team.",
          trainers: [
            trn("Gym Leader", "Koga", [
              pk("Koffing", 37, 109),
              pk("Muk", 39, 89),
              pk("Koffing", 37, 109),
              pk("Weezing", 43, 110),
            ], "₽4,300 + TM06 (Toxic)"),
          ],
          items: [
            item("Soul Badge", "Defeat Koga"),
            item("TM06 Toxic", "Defeat Koga"),
            item("HM03 Surf", "Safari Zone secret house"),
            item("HM04 Strength", "Safari Zone warden (give him Gold Teeth)"),
          ],
        },
      ],
    },
    {
      part: 11,
      title: "Saffron City, Silph Co. & Saffron Gym",
      summary: "Liberate Silph Co. from Team Rocket and earn the Marsh Badge from Sabrina.",
      locations: [
        {
          name: "Silph Co.",
          description:
            "Give the guards Tea (from Celadon) to enter Saffron City. Silph Co. is occupied by Team Rocket. It's a massive 11-floor building with warp tiles. Get the Card Key on 5F to unlock doors throughout. Your rival is on 7F. Giovanni is on 11F — defeat him to free Silph Co. The president gives you a Master Ball as thanks!",
          trainers: [
            trn("Team Rocket Boss", "Giovanni", [
              pk("Nidorino", 37, 33),
              pk("Kangaskhan", 35, 115),
              pk("Rhyhorn", 37, 111),
              pk("Nidoqueen", 41, 31),
            ], "₽4,100"),
          ],
          items: [
            item("Card Key", "5F"),
            item("Master Ball", "President after defeating Giovanni on 11F"),
            item("Lapras", "Gift from employee on 7F"),
            item("TM01 Focus Punch", "7F"),
          ],
        },
        {
          name: "Saffron Gym — Leader Sabrina",
          description:
            "Sabrina's gym has warp tile puzzles. Step on tiles to teleport between rooms — find the path to Sabrina. She uses powerful Psychic types. Bug, Ghost, and Dark moves are your best bet. Her Alakazam is very fast and hits hard. If you have a Snorlax or Lapras, their bulk can help tank hits.",
          trainers: [
            trn("Gym Leader", "Sabrina", [
              pk("Kadabra", 38, 64),
              pk("Mr. Mime", 37, 122),
              pk("Venomoth", 38, 49),
              pk("Alakazam", 43, 65),
            ], "₽4,300 + TM04 (Calm Mind)"),
          ],
          items: [
            item("Marsh Badge", "Defeat Sabrina"),
            item("TM04 Calm Mind", "Defeat Sabrina"),
          ],
        },
      ],
    },
    {
      part: 12,
      title: "Seafoam Islands & Cinnabar Island",
      summary: "Navigate the Seafoam Islands to find Articuno, then explore Cinnabar Island.",
      locations: [
        {
          name: "Seafoam Islands",
          description:
            "Surf south from Fuchsia City to reach the Seafoam Islands. Use Strength to push boulders and redirect water currents to reach the lowest level. Articuno awaits in the deepest chamber at Level 50 — save before encountering it!",
          encounters: [
            enc("Seel", 86, ["FR", "LG"], "Cave", "26-34", "40%"),
            enc("Zubat", 41, ["FR", "LG"], "Cave", "22-26", "30%"),
            enc("Golbat", 42, ["FR", "LG"], "Cave", "26-30", "10%"),
            enc("Dewgong", 87, ["FR", "LG"], "Cave", "32-36", "10%"),
            enc("Psyduck", 54, ["FR", "LG"], "Surfing", "25-35", "50%"),
            enc("Slowpoke", 79, ["FR", "LG"], "Surfing", "25-35", "50%"),
          ],
          items: [
            item("Articuno", "Deepest chamber (Lv. 50, bring Ultra Balls!)"),
          ],
        },
        {
          name: "Cinnabar Island — Gym Leader Blaine",
          description:
            "Cinnabar Island has the Pokémon Mansion (get the Secret Key to unlock the gym) and the Pokémon Lab (revive fossils). Blaine's gym is a quiz show — answer trivia to skip trainer battles, or battle them. Blaine uses Fire types — Water, Ground, and Rock moves are super effective. Surf is devastating here.",
          trainers: [
            trn("Gym Leader", "Blaine", [
              pk("Growlithe", 42, 58),
              pk("Ponyta", 40, 77),
              pk("Rapidash", 42, 78),
              pk("Arcanine", 47, 59),
            ], "₽4,700 + TM38 (Fire Blast)"),
          ],
          items: [
            item("Volcano Badge", "Defeat Blaine"),
            item("TM38 Fire Blast", "Defeat Blaine"),
            item("Secret Key", "Pokémon Mansion B1F"),
          ],
        },
      ],
    },
    {
      part: 13,
      title: "Viridian Gym, Route 22 & Victory Road",
      summary: "Challenge the final gym leader Giovanni, traverse Victory Road, and prepare for the Elite Four.",
      locations: [
        {
          name: "Viridian Gym — Leader Giovanni",
          description:
            "Return to Viridian City. The gym is now open! Giovanni is the final Gym Leader and uses Ground types. Water, Grass, and Ice moves are ideal. His Rhydon is the toughest — Surf or Razor Leaf will one-shot it. Winning earns you the Earth Badge — all Pokémon will now obey you.",
          trainers: [
            trn("Gym Leader", "Giovanni", [
              pk("Rhyhorn", 45, 111),
              pk("Dugtrio", 42, 51),
              pk("Nidoqueen", 44, 31),
              pk("Nidoking", 45, 34),
              pk("Rhydon", 50, 112),
            ], "₽5,000 + TM26 (Earthquake)"),
          ],
          items: [
            item("Earth Badge", "Defeat Giovanni"),
            item("TM26 Earthquake", "Defeat Giovanni"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "Head west from Viridian through Route 22 (your rival battles you here) and Route 23 (badge checks). Victory Road is a cave puzzle requiring Strength to push boulders onto switches. Multiple floors with strong trainers and wild Pokémon. Moltres is on Victory Road at Level 50 — save before attempting to catch it!",
          encounters: [
            enc("Onix", 95, ["FR", "LG"], "Cave", "40-46", "20%"),
            enc("Geodude", 74, ["FR", "LG"], "Cave", "40-44", "20%"),
            enc("Golbat", 42, ["FR", "LG"], "Cave", "40-46", "30%"),
            enc("Machoke", 67, ["FR", "LG"], "Cave", "40-46", "15%"),
            enc("Marowak", 105, ["FR", "LG"], "Cave", "40-46", "15%"),
          ],
          items: [
            item("Moltres", "Victory Road 2F (Lv. 50)"),
            item("TM02 Dragon Claw", "Victory Road 3F"),
            item("Full Heal", "Victory Road 1F"),
            item("TM07 Hail", "Victory Road 2F"),
          ],
        },
      ],
    },
    {
      part: 14,
      title: "Indigo Plateau — The Pokémon League",
      summary: "Challenge the Elite Four and the Champion to become the Pokémon League Champion!",
      locations: [
        {
          name: "Indigo Plateau",
          description:
            "The final challenge! Buy Full Restores, Revives, and Max Potions from the Poké Mart. You must defeat all four Elite Four members and the Champion in a row without visiting a Pokémon Center. Save before entering! Recommended level: 55-60+.",
          trainers: [
            trn("Elite Four", "Lorelei", [
              pk("Dewgong", 52, 87),
              pk("Cloyster", 51, 91),
              pk("Slowbro", 52, 80),
              pk("Jynx", 54, 124),
              pk("Lapras", 54, 131),
            ], "Ice specialist — use Electric, Fighting, Rock"),
            trn("Elite Four", "Bruno", [
              pk("Onix", 51, 95),
              pk("Hitmonchan", 53, 107),
              pk("Hitmonlee", 53, 106),
              pk("Onix", 54, 95),
              pk("Machamp", 56, 68),
            ], "Fighting specialist — use Psychic, Flying, Water"),
            trn("Elite Four", "Agatha", [
              pk("Gengar", 54, 94),
              pk("Golbat", 54, 42),
              pk("Haunter", 53, 93),
              pk("Arbok", 56, 24),
              pk("Gengar", 58, 94),
            ], "Ghost specialist — use Psychic, Ground, Dark"),
            trn("Elite Four", "Lance", [
              pk("Gyarados", 56, 130),
              pk("Dragonair", 54, 148),
              pk("Dragonair", 54, 148),
              pk("Aerodactyl", 58, 142),
              pk("Dragonite", 60, 149),
            ], "Dragon specialist — use Ice, Rock, Electric"),
            trn("Champion", "Blue", [
              pk("Pidgeot", 59, 18),
              pk("Alakazam", 57, 65),
              pk("Rhydon", 59, 112),
              pk("Arcanine", 61, 59),
              pk("Exeggutor", 59, 103),
              pk("Gyarados", 61, 130),
            ], "Mixed team — no single weakness"),
          ],
        },
      ],
    },
    /* ═══════════════════════════════════════════════════════
     *  POST-GAME
     * ═══════════════════════════════════════════════════════ */
    {
      part: 15,
      title: "Sevii Islands — One, Two & Three Island",
      summary: "Begin exploring the Sevii Islands and help Celio fix the Network Machine.",
      isPostGame: true,
      locations: [
        {
          name: "Sevii Islands (Part I)",
          description:
            "After becoming Champion, Bill invites you to the Sevii Islands. Explore One Island (Celio needs a Ruby for his network machine), Two Island (help a girl's kidnapped daughter), and Three Island (battle bikers). These islands contain Pokémon not found in Kanto, including Johto species.",
        },
      ],
    },
    {
      part: 16,
      title: "Cerulean Cave — Mewtwo",
      summary: "Access the post-game dungeon and catch the legendary Mewtwo.",
      isPostGame: true,
      locations: [
        {
          name: "Cerulean Cave",
          description:
            "After completing the Sevii Islands quest (delivering the Ruby and Sapphire gems to Celio), the cave entrance in Cerulean City is unlocked. Navigate through strong wild Pokémon to find Mewtwo at Level 70 in the deepest chamber. This is the ultimate catch — use your Master Ball or bring tons of Ultra Balls and status-inducing moves. Save before the encounter!",
          encounters: [
            enc("Golbat", 42, ["FR", "LG"], "Cave", "46-58", "25%"),
            enc("Graveler", 75, ["FR", "LG"], "Cave", "46-58", "20%"),
            enc("Parasect", 47, ["FR", "LG"], "Cave", "46-54", "15%"),
            enc("Ditto", 132, ["FR", "LG"], "Cave", "46-58", "10%"),
            enc("Kadabra", 64, ["FR", "LG"], "Cave", "46-58", "10%"),
            enc("Wobbuffet", 202, ["FR", "LG"], "Cave", "46-58", "5%"),
          ],
          items: [
            item("Mewtwo", "Deepest chamber (Lv. 70 — save first!)"),
            item("PP Max", "1F"),
            item("Ultra Ball", "B1F (multiple)"),
          ],
        },
      ],
    },
  ],
};
