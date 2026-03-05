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

export const CRYSTAL_WALKTHROUGH: GameWalkthrough = {
  slug: "crystal",
  gameLabel: "Crystal",
  versionTags: ["C"],
  parts: [
    /* ===============================================================
     *  PART 1 — New Bark Town: Choose Your Starter
     * =============================================================== */
    {
      part: 1,
      title: "New Bark Town — Choose Your Starter",
      summary:
        "Begin your journey in New Bark Town. Meet Professor Elm, choose your starter, and receive your first mission.",
      locations: [
        {
          name: "New Bark Town",
          description:
            "Your adventure begins in New Bark Town, a small town where the winds of a new beginning blow. Crystal is the first main-series game to let you choose between a boy or girl character. Head downstairs and your mom will set the day and time. Visit Professor Elm's lab next door. He'll ask you to visit Mr. Pokemon on Route 30 and lets you choose one of three starter Pokemon: Chikorita (Grass), Cyndaquil (Fire), or Totodile (Water). Cyndaquil is often recommended for beginners since early Gyms favor it. Elm also gives you his phone number for the PokeGear. Before leaving, grab a Potion from the PC in your room.",
          items: [
            item("Potion", "Your PC at home"),
            item("Starter Pokemon", "Choose Chikorita, Cyndaquil, or Totodile from Prof. Elm"),
            item("PokeGear", "Already in your possession"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Route 29-30, Cherrygrove City, Mr. Pokemon, Rival
     * =============================================================== */
    {
      part: 2,
      title: "Route 29, Cherrygrove City & Mr. Pokemon",
      summary:
        "Travel to Cherrygrove City, visit Mr. Pokemon to get the Mystery Egg, and battle your rival for the first time.",
      locations: [
        {
          name: "Route 29",
          description:
            "Head west from New Bark Town. This route has low-level wild Pokemon for early training. You cannot catch Pokemon yet since you have no Poke Balls. The route is straightforward — just follow it west to Cherrygrove City. A man near the beginning will give you a tutorial on catching Pokemon if you talk to him.",
          encounters: [
            enc("Sentret", 161, ["C"], "Grass", "2-4", "35%"),
            enc("Pidgey", 16, ["C"], "Grass", "2-4", "30%"),
            enc("Rattata", 19, ["C"], "Grass", "2-4", "20%"),
            enc("Hoothoot", 163, ["C"], "Grass", "2-3", "15%"),
          ],
        },
        {
          name: "Cherrygrove City",
          description:
            "A small city on the sea. An old man will give you a tour, showing you the Pokemon Center, Poke Mart, and the route north. Heal at the Pokemon Center, then head north on Route 30 toward Mr. Pokemon's house.",
          items: [
            item("Map Card", "From the Guide Gent after the tour"),
          ],
        },
        {
          name: "Route 30",
          description:
            "Follow the path north past Berry trees. A youngster near the start will give you a Berry. Mr. Pokemon's house is at the far north end. Inside, Mr. Pokemon gives you the Mystery Egg to deliver to Professor Elm. Professor Oak is also visiting — he gives you the Pokedex and evaluates your potential as a trainer.",
          encounters: [
            enc("Pidgey", 16, ["C"], "Grass", "3-5", "30%"),
            enc("Caterpie", 10, ["C"], "Grass", "3-5", "25%"),
            enc("Metapod", 11, ["C"], "Grass", "4-5", "10%"),
            enc("Ledyba", 165, ["C"], "Grass", "3-5", "15%"),
            enc("Spinarak", 167, ["C"], "Grass", "3-5", "15%"),
            enc("Poliwag", 60, ["C"], "Grass", "4-5", "5%"),
          ],
          items: [
            item("Berry", "From youngster at the start of the route"),
            item("Mystery Egg", "From Mr. Pokemon"),
            item("Pokedex", "From Professor Oak at Mr. Pokemon's house"),
          ],
        },
        {
          name: "Rival Battle — Cherrygrove City",
          description:
            "On your way back to New Bark Town, you'll be ambushed just outside Cherrygrove City by a red-haired boy — your rival. He stole a Pokemon from Professor Elm's lab and challenges you. He always has the starter that is strong against yours. After defeating him, you'll see his Trainer Card on the ground — his name is shown (you get to name him). Return to Elm's lab and report the theft. Elm lets you keep your starter and gives you Poke Balls.",
          trainers: [
            trn("Rival", "???", [pk("Chikorita", 5, 152)], "₽300"),
          ],
          items: [
            item("Poke Balls x5", "From Professor Elm after reporting the rival"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Violet City, Sprout Tower, Violet Gym
     * =============================================================== */
    {
      part: 3,
      title: "Violet City, Sprout Tower & Violet Gym",
      summary:
        "Explore Violet City, climb Sprout Tower for HM05 Flash, and earn the Zephyr Badge from Falkner.",
      locations: [
        {
          name: "Route 31",
          description:
            "Continue west from Cherrygrove through Route 30 and onto Route 31. There is a cave entrance to Dark Cave here, but you cannot fully explore it yet. The route leads to Violet City. Catch some new Pokemon along the way to build your team. You can also encounter Bellsprout in the grass.",
          encounters: [
            enc("Pidgey", 16, ["C"], "Grass", "4-6", "30%"),
            enc("Caterpie", 10, ["C"], "Grass", "4-6", "20%"),
            enc("Bellsprout", 69, ["C"], "Grass", "4-6", "20%"),
            enc("Ledyba", 165, ["C"], "Grass", "4-6", "15%"),
            enc("Spinarak", 167, ["C"], "Grass", "4-6", "10%"),
            enc("Poliwag", 60, ["C"], "Grass", "4-6", "5%"),
          ],
          items: [
            item("Potion", "Hidden in the grass area"),
            item("Bitter Berry", "From a Berry tree"),
          ],
        },
        {
          name: "Violet City",
          description:
            "A historic city with traditional architecture. The Pokemon Academy here teaches battle basics. Visit Sprout Tower before the Gym — the experience is invaluable, and the Elder at the top gives you HM05 Flash. There is also a trade NPC in the Pokemon Center who will trade an Onix for a Bellsprout.",
          items: [
            item("Onix", "Trade Bellsprout to NPC in Pokemon Center"),
          ],
        },
        {
          name: "Sprout Tower",
          description:
            "A tall pagoda held up by a swaying central pillar said to be a 100-foot Bellsprout. Climb through three floors of Sage trainers who use Bellsprout. At the top, your rival has just finished battling the Elder. The Elder will give you HM05 Flash after you defeat him. This tower is great for leveling up before the Gym since the Bellsprout give decent experience.",
          encounters: [
            enc("Rattata", 19, ["C"], "Building", "3-5", "65%"),
            enc("Gastly", 92, ["C"], "Building", "3-6", "35%"),
          ],
          trainers: [
            trn("Sage", "Nico", [pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69)], "₽96"),
            trn("Sage", "Chow", [pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69)], "₽96"),
            trn("Sage", "Edmond", [pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69)], "₽96"),
            trn("Sage", "Jin", [pk("Bellsprout", 6, 69)], "₽192"),
            trn("Sage", "Neal", [pk("Bellsprout", 6, 69)], "₽192"),
            trn("Sage", "Troy", [pk("Bellsprout", 7, 69), pk("Hoothoot", 7, 163)], "₽224"),
            trn("Elder", "Li", [pk("Bellsprout", 7, 69), pk("Bellsprout", 7, 69), pk("Hoothoot", 10, 163)], "₽320"),
          ],
          items: [
            item("HM05 Flash", "From Elder Li after defeating him"),
            item("Parlyz Heal", "2F"),
            item("Escape Rope", "3F"),
          ],
        },
        {
          name: "Violet Gym — Leader Falkner",
          description:
            "Falkner is the first Gym Leader and specializes in Flying-type Pokemon. His Pidgeotto is the main threat — it knows Mud-Slap which lowers accuracy and Gust for STAB damage. Electric or Rock types do well here. If you chose Cyndaquil, it resists Flying moves. The Gym has a straightforward elevated walkway. Defeat Falkner to earn the Zephyr Badge, which lets you use Flash outside battle and makes traded Pokemon up to Lv20 obey.",
          trainers: [
            trn("Bird Keeper", "Abe", [pk("Spearow", 9, 21)], "₽216"),
            trn("Bird Keeper", "Rod", [pk("Pidgey", 7, 16), pk("Pidgey", 7, 16)], "₽168"),
            trn("Gym Leader", "Falkner", [pk("Pidgey", 7, 16), pk("Pidgeotto", 9, 17)], "₽900 + TM31 (Mud-Slap)"),
          ],
          items: [
            item("Zephyr Badge", "Defeat Falkner"),
            item("TM31 Mud-Slap", "Defeat Falkner"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 — Route 32-33, Union Cave, Azalea Town, Slowpoke Well, Azalea Gym
     * =============================================================== */
    {
      part: 4,
      title: "Union Cave, Azalea Town & Azalea Gym",
      summary:
        "Travel south through Union Cave, save the Slowpoke in Azalea Town from Team Rocket, and earn the Hive Badge from Bugsy.",
      locations: [
        {
          name: "Route 32",
          description:
            "A long route south from Violet City. You will receive the Egg from Elm's aide at the Pokemon Center here — it hatches into Togepi. Fridays you can find Lapras deep in Union Cave, so remember to come back. The route has both grass and fishing encounters. There is a fisherman who gives you an Old Rod. Mareep, found in the tall grass here, is one of the best early Electric types in the game.",
          encounters: [
            enc("Mareep", 179, ["C"], "Grass", "6-8", "30%"),
            enc("Hoppip", 187, ["C"], "Grass", "6-8", "20%"),
            enc("Ekans", 23, ["C"], "Grass", "6-8", "20%"),
            enc("Bellsprout", 69, ["C"], "Grass", "6-8", "15%"),
            enc("Pidgey", 16, ["C"], "Grass", "6-8", "10%"),
            enc("Wooper", 194, ["C"], "Grass", "4-6", "5%"),
            enc("Tentacool", 72, ["C"], "Surfing", "15-19", "90%"),
            enc("Tentacruel", 73, ["C"], "Surfing", "20-24", "10%"),
          ],
          items: [
            item("Old Rod", "From the fisherman near the Pokemon Center"),
            item("Miracle Seed", "From the man on the route (show him a Grass type)"),
            item("Pokemon Egg (Togepi)", "From Elm's aide at the Pokemon Center"),
          ],
        },
        {
          name: "Union Cave",
          description:
            "A short cave connecting Routes 32 and 33. Wild Geodude and Onix are found here. The cave has a lower level accessible with Surf later — Lapras appears there on Fridays at Lv20. For now, just pass through the main path heading south. There are a few trainers including Hikers who use Rock and Ground types.",
          encounters: [
            enc("Geodude", 74, ["C"], "Cave", "6-8", "40%"),
            enc("Zubat", 41, ["C"], "Cave", "6-8", "30%"),
            enc("Onix", 95, ["C"], "Cave", "6-8", "15%"),
            enc("Sandshrew", 27, ["C"], "Cave", "6-8", "10%"),
            enc("Rattata", 19, ["C"], "Cave", "6-8", "5%"),
          ],
          trainers: [
            trn("Hiker", "Daniel", [pk("Onix", 11, 95)], "₽352"),
            trn("Hiker", "Russell", [pk("Geodude", 4, 74), pk("Geodude", 6, 74), pk("Geodude", 8, 74)], "₽256"),
            trn("Firebreather", "Bill", [pk("Koffing", 6, 109), pk("Koffing", 6, 109)], "₽192"),
            trn("Pokemaniac", "Larry", [pk("Slowpoke", 10, 79)], "₽480"),
          ],
          items: [
            item("X Attack", "Near the entrance"),
            item("TM39 Swift", "Hidden path on B1F"),
            item("Great Ball", "B1F"),
          ],
        },
        {
          name: "Route 33",
          description:
            "A short rainy route between Union Cave and Azalea Town. There is a Berry tree here. The constant rain makes this route atmospheric but brief.",
          encounters: [
            enc("Hoppip", 187, ["C"], "Grass", "6-8", "40%"),
            enc("Rattata", 19, ["C"], "Grass", "6-8", "30%"),
            enc("Ekans", 23, ["C"], "Grass", "6-8", "30%"),
          ],
          trainers: [
            trn("Hiker", "Anthony", [pk("Geodude", 11, 74)], "₽352"),
          ],
        },
        {
          name: "Slowpoke Well",
          description:
            "Team Rocket has taken over Azalea Town and is cutting off Slowpoke tails to sell. Enter Slowpoke Well in the northwest part of town to confront them. Fight through four Rocket Grunts and their Poison types. At the bottom, defeat Proton, one of the Rocket Executives. After clearing them out, Kurt the Pokeball maker will thank you and offer to make custom Poke Balls from Apricorns.",
          encounters: [
            enc("Slowpoke", 79, ["C"], "Cave", "5-7", "85%"),
            enc("Zubat", 41, ["C"], "Cave", "5-7", "15%"),
          ],
          trainers: [
            trn("Rocket Grunt", "Grunt", [pk("Rattata", 7, 19), pk("Rattata", 7, 19)], "₽280"),
            trn("Rocket Grunt", "Grunt", [pk("Zubat", 9, 41)], "₽360"),
            trn("Rocket Grunt", "Grunt", [pk("Zubat", 7, 41), pk("Ekans", 7, 23)], "₽280"),
            trn("Rocket Executive", "Proton", [pk("Zubat", 8, 41), pk("Koffing", 12, 109)], "₽480"),
          ],
          items: [
            item("Super Potion", "B1F"),
          ],
        },
        {
          name: "Azalea Gym — Leader Bugsy",
          description:
            "Bugsy uses Bug-type Pokemon. His signature Pokemon is Scyther, which has high Attack and Speed and knows Fury Cutter — a move that doubles in power with each consecutive hit. Fire and Rock types are extremely effective here. Flying types also do well. If you caught a Geodude in Union Cave, it walls Bugsy's entire team. Cyndaquil/Quilava also has a huge advantage. Defeat Bugsy for the Hive Badge, which lets you use Cut outside battle.",
          trainers: [
            trn("Bug Catcher", "Benny", [pk("Caterpie", 7, 10), pk("Weedle", 9, 13)], "₽108"),
            trn("Bug Catcher", "Al", [pk("Caterpie", 12, 10)], "₽144"),
            trn("Twins", "Amy & May", [pk("Ledyba", 10, 165), pk("Spinarak", 10, 167)], "₽240"),
            trn("Gym Leader", "Bugsy", [pk("Metapod", 14, 11), pk("Kakuna", 14, 14), pk("Scyther", 16, 123)], "₽1,600 + TM49 (Fury Cutter)"),
          ],
          items: [
            item("Hive Badge", "Defeat Bugsy"),
            item("TM49 Fury Cutter", "Defeat Bugsy"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 — Ilex Forest, Route 34, Goldenrod City, Goldenrod Gym
     * =============================================================== */
    {
      part: 5,
      title: "Ilex Forest, Goldenrod City & Goldenrod Gym",
      summary:
        "Chase the Farfetch'd through Ilex Forest, explore Goldenrod City's many attractions, and defeat Whitney for the Plain Badge.",
      locations: [
        {
          name: "Ilex Forest",
          description:
            "A dense forest west of Azalea Town. Your rival will battle you at the entrance. Inside, you need to help a Charcoal maker catch his Farfetch'd by herding it from behind (approach from the correct direction to move it toward the man). As thanks, he gives you HM01 Cut. Use Cut to access the Ilex Forest shrine deeper in, where you can find the GS Ball event location (in Crystal, this triggers a Celebi encounter via a special event). The forest also has the Headbutt tutor who teaches your Pokemon Headbutt — essential for finding Pokemon in trees like Heracross and Pineco.",
          encounters: [
            enc("Oddish", 43, ["C"], "Grass", "5-7", "30%"),
            enc("Paras", 46, ["C"], "Grass", "5-7", "25%"),
            enc("Caterpie", 10, ["C"], "Grass", "5-7", "20%"),
            enc("Pidgey", 16, ["C"], "Grass", "5-7", "10%"),
            enc("Weedle", 13, ["C"], "Grass", "5-7", "10%"),
            enc("Zubat", 41, ["C"], "Grass", "5-7", "5%"),
          ],
          trainers: [
            trn("Rival", "???", [
              pk("Gastly", 12, 92),
              pk("Zubat", 14, 41),
              pk("Bayleef", 16, 153),
            ], "₽960"),
          ],
          items: [
            item("HM01 Cut", "From the Charcoal maker after catching Farfetch'd"),
            item("Headbutt", "From the Headbutt tutor NPC in the forest"),
            item("Revive", "Hidden near the shrine"),
          ],
        },
        {
          name: "Route 34",
          description:
            "A route heading north from Ilex Forest to Goldenrod City. The Daycare Center is here — leave two compatible Pokemon and they can produce an Egg. This is also a good training area. A Game Corner is north in Goldenrod. You can find Drowzee and Abra in the grass here — Abra is notoriously hard to catch since it always Teleports on the first turn, so use a fast Pokemon or throw a Ball immediately.",
          encounters: [
            enc("Drowzee", 96, ["C"], "Grass", "10-12", "30%"),
            enc("Abra", 63, ["C"], "Grass", "10-12", "15%"),
            enc("Ditto", 132, ["C"], "Grass", "10-12", "10%"),
            enc("Pidgey", 16, ["C"], "Grass", "10-12", "20%"),
            enc("Rattata", 19, ["C"], "Grass", "10-12", "15%"),
            enc("Jigglypuff", 39, ["C"], "Grass", "10-12", "10%"),
          ],
          items: [
            item("Nugget", "Hidden near the Daycare fence"),
          ],
        },
        {
          name: "Goldenrod City",
          description:
            "The largest city in Johto and a hub of activity. The Department Store sells everything you need. Visit the Radio Tower to get the Radio Card for your PokeGear by answering a quiz. The Goldenrod Underground has a Salon for haircuts that boost happiness, and a Name Rater. Bill is at his house and will give you an Eevee. The Bike Shop gives you a free Bicycle. The Game Corner lets you win prizes including TMs. This city has so much to do — explore thoroughly before challenging the Gym.",
          items: [
            item("Radio Card", "Answer the quiz at the Radio Tower ground floor"),
            item("Bicycle", "From the Bike Shop (free)"),
            item("Eevee", "Gift from Bill at his house"),
            item("Coin Case", "From the underground merchant"),
            item("Blue Card", "From the Buena's Password NPC at Radio Tower"),
          ],
        },
        {
          name: "Goldenrod Gym — Leader Whitney",
          description:
            "Whitney is famous for being one of the toughest early-game Gym Leaders in the series. She specializes in Normal-type Pokemon. Her Miltank at Lv20 is the real threat — it knows Rollout (doubles in power each turn and becomes devastating), Attract (infatuates male Pokemon), Stomp, and Milk Drink (heals HP). Counter strategies: use a Female Pokemon to avoid Attract, use Fighting types like Machop (trade for one at the Goldenrod Department Store), or use Geodude whose Rock typing resists Rollout. If Rollout starts building up, switch Pokemon to reset it. Whitney will cry after losing and initially refuse to give you the badge — talk to her again to receive it.",
          trainers: [
            trn("Lass", "Carrie", [pk("Snubbull", 18, 209)], "₽288"),
            trn("Beauty", "Samantha", [pk("Meowth", 16, 52), pk("Meowth", 16, 52)], "₽1,152"),
            trn("Beauty", "Victoria", [pk("Sentret", 9, 161), pk("Sentret", 13, 161), pk("Sentret", 17, 161)], "₽1,224"),
            trn("Gym Leader", "Whitney", [pk("Clefairy", 18, 35), pk("Miltank", 20, 241)], "₽2,000 + TM45 (Attract)"),
          ],
          items: [
            item("Plain Badge", "Defeat Whitney (talk to her again after she stops crying)"),
            item("TM45 Attract", "Defeat Whitney"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 — Route 35, National Park, Ecruteak City, Burned Tower, Ecruteak Gym
     * =============================================================== */
    {
      part: 6,
      title: "National Park, Ecruteak City & Ecruteak Gym",
      summary:
        "Explore National Park for the Bug-Catching Contest, discover the legendary beasts in the Burned Tower, and earn the Fog Badge from Morty.",
      locations: [
        {
          name: "Route 35",
          description:
            "Head north from Goldenrod City. This route has tall grass with some new Pokemon including Nidoran (both genders) and Ditto. The route leads to the National Park gatehouse. A guard inside will give you TM04 (Rollout) on certain days.",
          encounters: [
            enc("Nidoran♀", 29, ["C"], "Grass", "12-14", "25%"),
            enc("Nidoran♂", 32, ["C"], "Grass", "12-14", "25%"),
            enc("Drowzee", 96, ["C"], "Grass", "12-14", "20%"),
            enc("Ditto", 132, ["C"], "Grass", "10-12", "10%"),
            enc("Pidgey", 16, ["C"], "Grass", "12-14", "10%"),
            enc("Yanma", 193, ["C"], "Grass", "12-14", "10%"),
          ],
          items: [
            item("TM04 Rollout", "From guard in National Park gate (certain days)"),
          ],
        },
        {
          name: "National Park",
          description:
            "A beautiful park north of Goldenrod. On Tuesdays, Thursdays, and Saturdays, the Bug-Catching Contest is held here. You enter with one Pokemon and 20 Sport Balls to catch the best Bug-type you can. Scyther and Pinsir are the rarest and score the highest. First place wins a Sun Stone. This is a great opportunity to add a powerful Bug-type like Scyther or Pinsir to your team. Outside contest days, the park has regular wild encounters and trainers.",
          encounters: [
            enc("Caterpie", 10, ["C"], "Grass", "10-13", "20%"),
            enc("Metapod", 11, ["C"], "Grass", "10-13", "10%"),
            enc("Weedle", 13, ["C"], "Grass", "10-13", "20%"),
            enc("Kakuna", 14, ["C"], "Grass", "10-13", "10%"),
            enc("Scyther", 123, ["C"], "Grass", "13-14", "5%"),
            enc("Pinsir", 127, ["C"], "Grass", "13-14", "5%"),
            enc("Butterfree", 12, ["C"], "Grass", "12-14", "5%"),
            enc("Beedrill", 15, ["C"], "Grass", "12-14", "5%"),
          ],
          items: [
            item("Sun Stone", "1st place Bug-Catching Contest prize"),
            item("Everstone", "2nd place Bug-Catching Contest prize"),
            item("Gold Berry", "3rd place Bug-Catching Contest prize"),
          ],
        },
        {
          name: "Ecruteak City",
          description:
            "An ancient city steeped in history and legend. This is where the story of the legendary beasts — Raikou, Entei, and Suicune — and the Legendary birds Ho-Oh and Lugia truly unfolds. The two towers — Bell Tower (Tin Tower) to the north and the Burned Tower in the center — are central to the plot. The Dance Theatre is here where you can watch the Kimono Girls perform. Visit the Burned Tower before challenging the Gym. In Crystal specifically, you will encounter Suicune multiple times throughout the game as part of a unique storyline featuring the mysterious trainer Eusine, who is obsessed with Suicune.",
          items: [
            item("HM03 Surf", "From the man in the house near the Burned Tower after beating Morty"),
            item("Itemfinder", "From a man in a house on the west side"),
          ],
        },
        {
          name: "Burned Tower",
          description:
            "Enter the Burned Tower to find your rival, who challenges you to a battle. After defeating him, explore the basement. When you approach the three statues on B1F, the legendary beasts — Raikou, Entei, and Suicune — awaken and flee. In Crystal, Suicune will pause and stare at you before leaving, beginning a unique storyline where you encounter it at various locations across Johto. Raikou and Entei become roaming Pokemon across Johto. Eusine, a researcher obsessed with Suicune, appears and introduces himself here.",
          encounters: [
            enc("Rattata", 19, ["C"], "Building", "13-16", "35%"),
            enc("Koffing", 109, ["C"], "Building", "13-16", "35%"),
            enc("Zubat", 41, ["C"], "Building", "13-16", "20%"),
            enc("Magmar", 126, ["C"], "Building", "15-17", "10%"),
          ],
          trainers: [
            trn("Rival", "???", [
              pk("Haunter", 20, 93),
              pk("Magnemite", 18, 81),
              pk("Zubat", 20, 41),
              pk("Bayleef", 22, 153),
            ], "₽1,320"),
          ],
          items: [
            item("HP Up", "B1F hidden"),
            item("Ether", "1F"),
          ],
        },
        {
          name: "Ecruteak Gym — Leader Morty",
          description:
            "Morty specializes in Ghost types. His Gym has an invisible floor puzzle — you must walk on invisible paths over a dark void to reach him. If you step on a wrong tile you fall and have to start over. Ghost types are weak to Dark and Ghost moves. A Normal-type Pokemon is immune to Ghost attacks but cannot hit them back with Normal moves either. Use Bite (learnable by many Pokemon) or a Pokemon with Foresight to hit Ghosts with Normal moves. Morty's Gengar is the biggest threat with Shadow Ball and Hypnosis. Defeating Morty earns you the Fog Badge and allows you to use Surf outside battle.",
          trainers: [
            trn("Sage", "Jeffrey", [pk("Haunter", 20, 93)], "₽640"),
            trn("Medium", "Martha", [pk("Gastly", 18, 92), pk("Haunter", 20, 93), pk("Gastly", 18, 92)], "₽576"),
            trn("Medium", "Grace", [pk("Gastly", 20, 92), pk("Haunter", 22, 93)], "₽704"),
            trn("Sage", "Ping", [pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92)], "₽512"),
            trn("Gym Leader", "Morty", [
              pk("Gastly", 21, 92),
              pk("Haunter", 21, 93),
              pk("Gengar", 25, 94),
              pk("Haunter", 23, 93),
            ], "₽2,500 + TM30 (Shadow Ball)"),
          ],
          items: [
            item("Fog Badge", "Defeat Morty"),
            item("TM30 Shadow Ball", "Defeat Morty"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Routes 38-39, Olivine City, Lighthouse, Cianwood Gym
     * =============================================================== */
    {
      part: 7,
      title: "Olivine City, Lighthouse & Cianwood Gym",
      summary:
        "Travel to Olivine City, climb the Lighthouse to find the sick Ampharos, surf to Cianwood City, and earn the Storm Badge from Chuck.",
      locations: [
        {
          name: "Route 38",
          description:
            "Head west from Ecruteak City. This route has several trainers and tall grass. You can find Snubbull and Tauros here, among other Pokemon. In Crystal, Suicune can be spotted briefly on this route — it runs away when you approach, continuing the storyline.",
          encounters: [
            enc("Rattata", 19, ["C"], "Grass", "14-16", "25%"),
            enc("Raticate", 20, ["C"], "Grass", "16-18", "10%"),
            enc("Snubbull", 209, ["C"], "Grass", "14-16", "25%"),
            enc("Magnemite", 81, ["C"], "Grass", "14-16", "20%"),
            enc("Miltank", 241, ["C"], "Grass", "14-16", "10%"),
            enc("Tauros", 128, ["C"], "Grass", "14-16", "10%"),
          ],
          trainers: [
            trn("Lass", "Dana", [pk("Flaaffy", 19, 180), pk("Psyduck", 19, 54)], "₽304"),
            trn("Schoolboy", "Chad", [pk("Mr. Mime", 20, 122)], "₽640"),
            trn("Beauty", "Olivia", [pk("Corsola", 19, 222)], "₽1,368"),
          ],
        },
        {
          name: "Route 39",
          description:
            "A short route heading south to Olivine City. MooMoo Farm is here — speak to the sick Miltank and feed it 7 Berries to heal it. The farmer rewards you with TM13 Snore. The farm is also a nice bit of rural Johto flavor.",
          encounters: [
            enc("Rattata", 19, ["C"], "Grass", "14-16", "25%"),
            enc("Raticate", 20, ["C"], "Grass", "16-18", "15%"),
            enc("Miltank", 241, ["C"], "Grass", "14-16", "20%"),
            enc("Tauros", 128, ["C"], "Grass", "14-16", "20%"),
            enc("Magnemite", 81, ["C"], "Grass", "14-16", "20%"),
          ],
          items: [
            item("TM13 Snore", "From MooMoo Farm after healing Miltank with 7 Berries"),
            item("Nugget", "Hidden near the fence"),
          ],
        },
        {
          name: "Olivine City",
          description:
            "A port city on the western coast of Johto. The Olivine Lighthouse is the main landmark. Before you can battle the Gym Leader Jasmine, you must help her. Climb the Lighthouse to find Jasmine caring for a sick Ampharos (Amphy). She asks you to get medicine from Cianwood City across the sea. You need Surf to get there. The Good Rod can be obtained from a fisherman near the port.",
          items: [
            item("Good Rod", "From the fisherman by the docks"),
            item("HM04 Strength", "From the sailor near the docks"),
          ],
        },
        {
          name: "Olivine Lighthouse",
          description:
            "A tall lighthouse with 6 floors. Navigate the floors by falling through specific holes in the floor to reach lower sections, then take elevators and stairs. At the top, Jasmine tends to the sick Ampharos. Various trainers populate the floors. After talking to Jasmine, Surf south from Olivine City to reach Cianwood.",
          encounters: [],
          trainers: [
            trn("Gentleman", "Alfred", [pk("Noctowl", 22, 164)], "₽1,584"),
            trn("Sailor", "Huey", [pk("Poliwag", 18, 60), pk("Poliwhirl", 20, 61)], "₽640"),
            trn("Lass", "Connie", [pk("Marill", 21, 183)], "₽336"),
            trn("Bird Keeper", "Denis", [pk("Spearow", 18, 21), pk("Fearow", 20, 22), pk("Spearow", 18, 21)], "₽432"),
          ],
          items: [
            item("Ether", "3F"),
            item("Super Potion", "5F"),
            item("Rare Candy", "Hidden on 4F"),
          ],
        },
        {
          name: "Cianwood City",
          description:
            "A remote city across the sea from Olivine. Visit the pharmacy to get the SecretPotion for Amphy. There is a man who gives you the Shuckle to take care of. The move tutor here teaches a Pokemon a move it has forgotten. Before heading back, challenge the Gym Leader Chuck.",
          items: [
            item("SecretPotion", "Cianwood Pharmacy"),
            item("HM02 Fly", "From the woman outside the Gym after defeating Chuck"),
            item("Shuckle", "Gift from the man in the house south of the Pokemon Center"),
          ],
        },
        {
          name: "Cianwood Gym — Leader Chuck",
          description:
            "Chuck specializes in Fighting types. His Gym requires you to push a boulder under a waterfall to stop the flow and reach him. Chuck trains under a waterfall himself. His Poliwrath is the main threat — it has Hypnosis, Mind Reader, and the devastating DynamicPunch (always confuses on hit). Mind Reader plus DynamicPunch is a guaranteed confused hit, so be prepared with Awakenings. Flying and Psychic types work well here. Kadabra or a Noctowl can handle his team. Defeat Chuck for the Storm Badge.",
          trainers: [
            trn("Blackbelt", "Yoshi", [pk("Hitmonlee", 27, 106)], "₽648"),
            trn("Blackbelt", "Lao", [pk("Hitmonchan", 27, 107)], "₽648"),
            trn("Blackbelt", "Nob", [pk("Machop", 25, 66), pk("Machoke", 25, 67)], "₽600"),
            trn("Blackbelt", "Lung", [pk("Mankey", 23, 56), pk("Mankey", 23, 56), pk("Primeape", 25, 57)], "₽600"),
            trn("Gym Leader", "Chuck", [pk("Primeape", 27, 57), pk("Poliwrath", 30, 62)], "₽3,000 + TM01 (DynamicPunch)"),
          ],
          items: [
            item("Storm Badge", "Defeat Chuck"),
            item("TM01 DynamicPunch", "Defeat Chuck"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Olivine Gym, Lake of Rage, Rocket Hideout
     * =============================================================== */
    {
      part: 8,
      title: "Olivine Gym, Lake of Rage & Rocket Hideout",
      summary:
        "Deliver the medicine to Amphy, defeat Jasmine, encounter the Red Gyarados at the Lake of Rage, and infiltrate Team Rocket's hideout in Mahogany Town.",
      locations: [
        {
          name: "Olivine Gym — Leader Jasmine",
          description:
            "Fly back to Olivine City and deliver the SecretPotion to Jasmine at the Lighthouse. Amphy recovers and Jasmine returns to her Gym. Jasmine is the first Steel-type specialist in the series. Her two Magnemite have Thunderbolt and Sonic Boom. Her Steelix is the big threat with Iron Tail and Rock Throw. Fire and Ground types are your best bet. Quilava/Typhlosion is excellent here. Geodude line also resists most of her attacks while hitting back with Earthquake or Dig.",
          trainers: [
            trn("Gym Leader", "Jasmine", [
              pk("Magnemite", 30, 81),
              pk("Magnemite", 30, 81),
              pk("Steelix", 35, 208),
            ], "₽3,500 + TM23 (Iron Tail)"),
          ],
          items: [
            item("Mineral Badge", "Defeat Jasmine"),
            item("TM23 Iron Tail", "Defeat Jasmine"),
          ],
        },
        {
          name: "Route 42 & Mahogany Town",
          description:
            "Fly to Ecruteak City and head east through Route 42 to reach Mahogany Town. Mt. Mortar is along this route but is optional — Karate King inside gives you a Tyrogue if you defeat him (requires Surf and Waterfall). Mahogany Town is a small mountain village with a suspicious souvenir shop that is actually a front for Team Rocket.",
          encounters: [
            enc("Spearow", 21, ["C"], "Grass", "15-17", "30%"),
            enc("Mareep", 179, ["C"], "Grass", "15-17", "20%"),
            enc("Mankey", 56, ["C"], "Grass", "15-17", "20%"),
            enc("Flaaffy", 180, ["C"], "Grass", "15-17", "10%"),
            enc("Goldeen", 118, ["C"], "Surfing", "15-24", "60%"),
            enc("Seaking", 119, ["C"], "Surfing", "20-24", "10%"),
          ],
          items: [
            item("Tyrogue", "Defeat Karate King in Mt. Mortar (optional)"),
          ],
        },
        {
          name: "Route 43 & Lake of Rage",
          description:
            "Head north from Mahogany Town through Route 43 to the Lake of Rage. Team Rocket grunts are blocking parts of the route and will force you to pay a toll or take the longer grass path. At the Lake of Rage, you will find a shiny Red Gyarados at Lv30 in the center of the lake — this is a scripted encounter and the Gyarados is always shiny. Surf out to it and battle it. Catch it or defeat it — you get the Red Scale either way. After the encounter, Lance of the Elite Four appears and asks for your help investigating Team Rocket in Mahogany Town.",
          encounters: [
            enc("Flaaffy", 180, ["C"], "Grass", "15-17", "20%"),
            enc("Pidgeotto", 17, ["C"], "Grass", "15-17", "20%"),
            enc("Girafarig", 203, ["C"], "Grass", "15-17", "20%"),
            enc("Venonat", 48, ["C"], "Grass", "15-17", "20%"),
            enc("Noctowl", 164, ["C"], "Grass", "15-17", "10%"),
            enc("Raticate", 20, ["C"], "Grass", "15-17", "10%"),
            enc("Gyarados", 130, ["C"], "Surfing", "15-24", "90%"),
            enc("Magikarp", 129, ["C"], "Surfing", "10-19", "10%"),
          ],
          trainers: [],
          items: [
            item("Red Gyarados", "Shiny Gyarados Lv30 in the center of the lake"),
            item("Red Scale", "From the Red Gyarados encounter"),
            item("TM10 Hidden Power", "Hidden near the shore"),
          ],
        },
        {
          name: "Team Rocket Hideout",
          description:
            "Return to Mahogany Town and enter the souvenir shop with Lance. The shop has a secret staircase leading to Team Rocket's underground hideout. This is a multi-floor dungeon with Persian statues that set off alarms (summoning Rocket Grunts to battle you), Voltorb/Electrode traps, and password-locked doors. You must find passwords by defeating Rocket Executives. Lance helps you on some floors with his Dragonite. On the final floor, defeat Executive Petrel and shut down the signal that is forcibly evolving Magikarp into Gyarados. Destroying the generator also shuts down the radio signal causing havoc at the Lake of Rage.",
          encounters: [
            enc("Geodude", 74, ["C"], "Cave", "20-23", "30%"),
            enc("Voltorb", 100, ["C"], "Cave", "20-23", "30%"),
            enc("Koffing", 109, ["C"], "Cave", "20-23", "30%"),
            enc("Rattata", 19, ["C"], "Cave", "20-23", "10%"),
          ],
          trainers: [
            trn("Rocket Grunt", "Grunt", [pk("Drowzee", 17, 96), pk("Zubat", 19, 41)], "₽760"),
            trn("Rocket Grunt", "Grunt", [pk("Zubat", 16, 41), pk("Grimer", 17, 88), pk("Rattata", 18, 19)], "₽720"),
            trn("Rocket Grunt", "Grunt", [pk("Rattata", 18, 19), pk("Raticate", 20, 20)], "₽800"),
            trn("Rocket Executive", "Petrel", [pk("Zubat", 22, 41), pk("Koffing", 22, 109), pk("Raticate", 24, 20)], "₽960"),
            trn("Rocket Executive", "Ariana", [pk("Arbok", 25, 24), pk("Vileplume", 25, 45), pk("Murkrow", 27, 198)], "₽1,080"),
          ],
          items: [
            item("Protein", "B1F"),
            item("Ultra Ball", "B2F"),
            item("HM06 Whirlpool", "From Lance after clearing the hideout"),
            item("Ice Heal", "B2F"),
            item("Full Heal", "B3F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Mahogany Gym, Routes 43-44
     * =============================================================== */
    {
      part: 9,
      title: "Mahogany Gym & Ice Path Approach",
      summary:
        "Defeat Pryce at the Mahogany Gym for the Glacier Badge and prepare to head east toward Blackthorn City.",
      locations: [
        {
          name: "Mahogany Gym — Leader Pryce",
          description:
            "With Team Rocket gone, you can now challenge Pryce at the Mahogany Gym. He is an Ice-type specialist. The Gym has a sliding ice puzzle — step on ice tiles and you slide until hitting a wall or obstacle. You need to push certain barriers to create paths. Pryce's team is not terribly strong but his Piloswine has high HP and knows Blizzard. Fire, Fighting, and Rock moves are super effective against his team. Steel types also resist Ice moves well. Quilava/Typhlosion or Heracross are excellent choices here.",
          trainers: [
            trn("Boarder", "Ronald", [pk("Seel", 24, 86), pk("Dewgong", 25, 87)], "₽600"),
            trn("Skier", "Roxanne", [pk("Jynx", 28, 124)], "₽672"),
            trn("Boarder", "Brad", [pk("Swinub", 26, 220), pk("Swinub", 26, 220)], "₽624"),
            trn("Skier", "Clarissa", [pk("Dewgong", 28, 87)], "₽672"),
            trn("Gym Leader", "Pryce", [
              pk("Seel", 27, 86),
              pk("Dewgong", 29, 87),
              pk("Piloswine", 31, 221),
            ], "₽3,100 + TM16 (Icy Wind)"),
          ],
          items: [
            item("Glacier Badge", "Defeat Pryce"),
            item("TM16 Icy Wind", "Defeat Pryce"),
          ],
        },
        {
          name: "Route 44",
          description:
            "Head east from Mahogany Town toward Blackthorn City. This route has strong trainers and some new Pokemon including Lickitung and Tangela. The Ice Path cave is at the end of this route. Make sure your team is healed and you have some items — Ice Path is a tricky dungeon with sliding puzzles. You can find Poliwag and Poliwhirl by surfing.",
          encounters: [
            enc("Tangela", 114, ["C"], "Grass", "22-24", "20%"),
            enc("Bellsprout", 69, ["C"], "Grass", "22-24", "20%"),
            enc("Lickitung", 108, ["C"], "Grass", "22-24", "15%"),
            enc("Weepinbell", 70, ["C"], "Grass", "24-26", "10%"),
            enc("Poliwag", 60, ["C"], "Surfing", "20-24", "60%"),
            enc("Poliwhirl", 61, ["C"], "Surfing", "20-24", "30%"),
            enc("Remoraid", 223, ["C"], "Good Rod", "20", "65%"),
          ],
          trainers: [
            trn("Psychic", "Phil", [pk("Natu", 26, 177), pk("Kadabra", 26, 64)], "₽832"),
            trn("Bird Keeper", "Vance", [pk("Pidgeotto", 26, 17), pk("Pidgeotto", 26, 17)], "₽624"),
            trn("Fisher", "Wilton", [pk("Goldeen", 23, 118), pk("Goldeen", 23, 118), pk("Seaking", 25, 119)], "₽800"),
            trn("Cooltrainer", "Allen", [pk("Charmeleon", 27, 5)], "₽1,296"),
          ],
          items: [
            item("Max Repel", "Hidden in the grass"),
            item("Ultra Ball", "Near the Ice Path entrance"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Ice Path, Blackthorn City, Blackthorn Gym
     * =============================================================== */
    {
      part: 10,
      title: "Ice Path & Blackthorn City Gym",
      summary:
        "Navigate the treacherous Ice Path dungeon and earn the Rising Badge from Clair in Blackthorn City.",
      locations: [
        {
          name: "Ice Path",
          description:
            "A multi-floor ice cave with sliding puzzles and boulder-pushing challenges. You need HM04 Strength to push boulders into holes on B2F to create a path on B3F. The ice floors make you slide until you hit a wall — plan your route carefully. Jynx, Swinub, and Delibird can be found here. This is the only place to catch Swinub and Delibird in Crystal. HM07 Waterfall is hidden deep in the cave — you need it to climb waterfalls to reach the Pokemon League later.",
          encounters: [
            enc("Swinub", 220, ["C"], "Cave", "22-24", "30%"),
            enc("Zubat", 41, ["C"], "Cave", "22-24", "25%"),
            enc("Golbat", 42, ["C"], "Cave", "22-24", "15%"),
            enc("Jynx", 124, ["C"], "Cave", "22-24", "15%"),
            enc("Delibird", 225, ["C"], "Cave", "22-24", "10%"),
            enc("Sneasel", 215, ["C"], "Cave", "23-25", "5%"),
          ],
          items: [
            item("HM07 Waterfall", "B3F, reach it via boulder puzzle"),
            item("Max Potion", "B2F"),
            item("Full Heal", "B1F"),
            item("Iron", "B3F hidden"),
            item("Nevermeltice", "B3F hidden"),
          ],
        },
        {
          name: "Blackthorn City",
          description:
            "A city nestled in the mountains, home to the Dragon-type Gym. The Move Deleter lives here — useful for removing HM moves. The Dragon's Den is a sacred cave behind the Gym where trainers prove their worth. After defeating Clair, she refuses to give you the badge and tells you to pass a test in the Dragon's Den. You must answer questions from the Dragon Shrine Elder correctly (choose answers about treating Pokemon with kindness and respect). Clair then reluctantly gives you the Rising Badge.",
          items: [
            item("Exp. Share", "From Mr. Pokemon on Route 30 when you show him the Red Scale"),
          ],
        },
        {
          name: "Blackthorn Gym — Leader Clair",
          description:
            "Clair is the eighth and final Johto Gym Leader, specializing in Dragon types. Her Gym has a lava floor you cross by stepping on moving platforms. Her Kingdra is the toughest challenge — Dragon/Water typing means it is only weak to Dragon moves. Ice moves work well on her three Dragonair. Bring plenty of healing items. A strong Ice type like Piloswine or a Pokemon with Ice Punch/Icy Wind can sweep her Dragonair. For Kingdra, Dragon Rage or just raw damage from your strongest Pokemon. After defeating her, go to the Dragon's Den behind the Gym and answer the Elder's questions to receive the badge.",
          trainers: [
            trn("Cooltrainer", "Paul", [pk("Dratini", 34, 147), pk("Dratini", 34, 147), pk("Dratini", 34, 147)], "₽1,632"),
            trn("Cooltrainer", "Fran", [pk("Seadra", 37, 117)], "₽1,776"),
            trn("Cooltrainer", "Cody", [pk("Horsea", 34, 116), pk("Seadra", 36, 117)], "₽1,728"),
            trn("Gym Leader", "Clair", [
              pk("Dragonair", 37, 148),
              pk("Dragonair", 37, 148),
              pk("Dragonair", 37, 148),
              pk("Kingdra", 40, 230),
            ], "₽4,000 + TM24 (DragonBreath)"),
          ],
          items: [
            item("Rising Badge", "From Clair after passing the Dragon's Den test"),
            item("TM24 DragonBreath", "Defeat Clair"),
            item("Dragon Fang", "From the Elder in Dragon's Den"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Radio Tower Takeover, Suicune Encounters
     * =============================================================== */
    {
      part: 11,
      title: "Radio Tower Takeover & Suicune Encounters",
      summary:
        "Return to Goldenrod City to stop Team Rocket's takeover of the Radio Tower. Continue tracking Suicune across Johto.",
      locations: [
        {
          name: "Goldenrod Radio Tower",
          description:
            "After earning all eight Johto badges, Professor Elm calls about a Team Rocket crisis. Return to Goldenrod City to find Team Rocket has taken over the Radio Tower and is broadcasting a signal to contact Giovanni. Fight through the first five floors of Rocket Grunts. You will need to go through the Underground Warehouse to get the Basement Key to reach the Director. The impostor Director (Petrel in disguise) on the 3rd floor gives you the Basement Key. In the Underground, face more Grunts and Executives including Proton and Ariana. Finally reach the top floor to battle Executive Archer. Defeat him to liberate the Radio Tower. The Director thanks you and gives you a Clear Bell (in Crystal) or Rainbow Wing.",
          trainers: [
            trn("Rocket Grunt", "Grunt", [pk("Raticate", 24, 20), pk("Raticate", 24, 20)], "₽960"),
            trn("Rocket Grunt", "Grunt", [pk("Arbok", 26, 24)], "₽1,040"),
            trn("Rocket Grunt", "Grunt", [pk("Grimer", 23, 88), pk("Grimer", 23, 88), pk("Muk", 25, 89)], "₽1,000"),
            trn("Rocket Executive", "Proton", [pk("Golbat", 28, 42), pk("Weezing", 33, 110)], "₽1,320"),
            trn("Rocket Executive", "Petrel", [pk("Koffing", 30, 109), pk("Weezing", 30, 110), pk("Koffing", 30, 109), pk("Koffing", 30, 109), pk("Weezing", 32, 110)], "₽1,280"),
            trn("Rocket Executive", "Ariana", [pk("Arbok", 32, 24), pk("Vileplume", 32, 45), pk("Murkrow", 32, 198)], "₽1,280"),
            trn("Rocket Executive", "Archer", [pk("Houndour", 33, 228), pk("Koffing", 33, 109), pk("Houndoom", 35, 229)], "₽1,400"),
          ],
          items: [
            item("Basement Key", "From impostor Director (Petrel) on 3F"),
            item("Clear Bell", "From the real Director after clearing the tower (Crystal)"),
            item("Card Key", "Underground Warehouse"),
            item("Ultra Ball", "5F"),
          ],
        },
        {
          name: "Suicune Encounters (Crystal Exclusive)",
          description:
            "Throughout your journey in Crystal, Suicune appears at several fixed locations. After the Burned Tower event, you may spot Suicune on Route 42 near Mahogany Town, on Route 36 near the Sudowoodo, at the north end of Cianwood City, and on Route 14 in Kanto. Eusine appears at several of these spots, determined to capture Suicune himself. At one point in Cianwood City, Eusine challenges you to a battle to prove who is more worthy of Suicune's attention. These encounters are building toward the climax at Tin Tower in the post-game where Suicune finally stands still and lets you battle it.",
          trainers: [
            trn("Mystery Man", "Eusine", [
              pk("Drowzee", 25, 96),
              pk("Haunter", 25, 93),
              pk("Electrode", 27, 101),
            ], "₽1,500"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Victory Road, Pokemon League
     * =============================================================== */
    {
      part: 12,
      title: "Victory Road & Pokemon League",
      summary:
        "Traverse Victory Road, then challenge the Elite Four and Champion Lance to become the Johto Champion.",
      locations: [
        {
          name: "Route 26 & Route 27",
          description:
            "Head east from New Bark Town, surfing across the water to reach Route 27 and eventually Route 26 leading to the Pokemon League. These routes are long and have powerful trainers to test your team. You will need Surf and Waterfall to navigate the water routes. Route 27 crosses into Kanto territory — you will see Tohjo Falls where you use Waterfall to climb up.",
          encounters: [
            enc("Ponyta", 77, ["C"], "Grass", "28-32", "25%"),
            enc("Doduo", 84, ["C"], "Grass", "28-32", "25%"),
            enc("Raticate", 20, ["C"], "Grass", "28-32", "15%"),
            enc("Arcanine", 59, ["C"], "Grass", "30-32", "5%"),
            enc("Quagsire", 195, ["C"], "Surfing", "25-34", "30%"),
            enc("Tentacruel", 73, ["C"], "Surfing", "25-34", "30%"),
          ],
          trainers: [
            trn("Cooltrainer", "Beth", [pk("Rapidash", 35, 78)], "₽1,680"),
            trn("Cooltrainer", "Reena", [pk("Starmie", 35, 121)], "₽1,680"),
            trn("Psychic", "Gilbert", [pk("Starmie", 34, 121), pk("Exeggcute", 34, 102)], "₽1,088"),
            trn("Bird Keeper", "Jose", [pk("Dodrio", 36, 85), pk("Fearow", 34, 22)], "₽816"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "The final test before the Pokemon League. Victory Road is a three-floor cave with boulder puzzles requiring Strength. Strong wild Pokemon and tough trainers populate the cave. You need all eight badges to enter. Your rival appears for one final battle before the League. Make sure your team is at least Lv38-42 and bring plenty of healing items. Catch any remaining Pokemon you need for your team.",
          encounters: [
            enc("Golbat", 42, ["C"], "Cave", "32-36", "30%"),
            enc("Graveler", 75, ["C"], "Cave", "32-36", "25%"),
            enc("Onix", 95, ["C"], "Cave", "32-36", "20%"),
            enc("Ursaring", 217, ["C"], "Cave", "32-36", "10%"),
            enc("Donphan", 232, ["C"], "Cave", "32-36", "10%"),
            enc("Rhyhorn", 111, ["C"], "Cave", "32-36", "5%"),
          ],
          trainers: [
            trn("Rival", "???", [
              pk("Sneasel", 34, 215),
              pk("Golbat", 36, 42),
              pk("Magneton", 35, 82),
              pk("Haunter", 35, 93),
              pk("Kadabra", 35, 64),
              pk("Meganium", 38, 154),
            ], "₽2,280"),
            trn("Cooltrainer", "Albert", [pk("Magneton", 35, 82), pk("Exeggcute", 35, 102)], "₽1,680"),
            trn("Cooltrainer", "Kim", [pk("Persian", 32, 53), pk("Starmie", 35, 121)], "₽1,680"),
          ],
          items: [
            item("TM26 Earthquake", "B1F"),
            item("Max Revive", "2F"),
            item("Full Heal", "1F"),
            item("HP Up", "Hidden on 3F"),
          ],
        },
        {
          name: "Indigo Plateau — Pokemon League",
          description:
            "The ultimate challenge. Stock up on Full Restores, Revives, and Max Potions at the Poke Mart. You must defeat all four Elite Four members and Champion Lance in succession without returning to a Pokemon Center. Recommended level: 40-45+. Will uses Psychic types — bring Dark or Bug moves. Koga uses Poison types — Psychic and Ground work well. Bruno uses Fighting types — Flying and Psychic are ideal. Karen uses Dark types — Fighting and Bug moves are effective. Champion Lance uses a team centered around Dragonite — Ice moves are essential. His three Dragonite are extremely powerful, with the highest being Lv50.",
          trainers: [
            trn("Elite Four", "Will", [
              pk("Xatu", 40, 178),
              pk("Jynx", 41, 124),
              pk("Exeggutor", 41, 103),
              pk("Slowbro", 41, 80),
              pk("Xatu", 42, 178),
            ], "Psychic specialist - use Dark, Bug, Ghost"),
            trn("Elite Four", "Koga", [
              pk("Ariados", 40, 168),
              pk("Forretress", 43, 205),
              pk("Muk", 42, 89),
              pk("Venomoth", 41, 49),
              pk("Crobat", 44, 169),
            ], "Poison specialist - use Psychic, Ground"),
            trn("Elite Four", "Bruno", [
              pk("Hitmontop", 42, 237),
              pk("Hitmonlee", 42, 106),
              pk("Hitmonchan", 42, 107),
              pk("Onix", 43, 95),
              pk("Machamp", 46, 68),
            ], "Fighting specialist - use Psychic, Flying"),
            trn("Elite Four", "Karen", [
              pk("Umbreon", 42, 197),
              pk("Vileplume", 42, 45),
              pk("Murkrow", 44, 198),
              pk("Gengar", 45, 94),
              pk("Houndoom", 47, 229),
            ], "Dark specialist - use Fighting, Bug"),
            trn("Champion", "Lance", [
              pk("Gyarados", 44, 130),
              pk("Dragonite", 47, 149),
              pk("Dragonite", 47, 149),
              pk("Aerodactyl", 46, 142),
              pk("Charizard", 46, 6),
              pk("Dragonite", 50, 149),
            ], "Dragon master - use Ice, Rock, Electric"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Kanto: Vermilion, Cerulean, Saffron Gyms (Post-Game)
     * =============================================================== */
    {
      part: 13,
      title: "Kanto — Vermilion, Cerulean & Saffron Gyms",
      summary:
        "After becoming Champion, travel to Kanto to challenge the Gym Leaders there. Start with Vermilion, Cerulean, and Saffron.",
      isPostGame: true,
      locations: [
        {
          name: "Kanto Introduction",
          description:
            "After defeating Lance, Professor Elm calls to congratulate you and gives you the S.S. Ticket. Take the S.S. Aqua from Olivine City to Vermilion City in Kanto. On the ship, you will run into a panicked grandfather looking for his granddaughter — find her to progress. Kanto has been revamped since the original Red/Blue — three years have passed and things have changed. Many areas are accessible, and all 8 Kanto Gym Leaders await your challenge. You can tackle most Gyms in any order.",
          items: [
            item("S.S. Ticket", "From Professor Elm after becoming Champion"),
          ],
        },
        {
          name: "Vermilion Gym — Leader Lt. Surge",
          description:
            "Lt. Surge still uses Electric types but his team is stronger now. His Gym retains the trash can switch puzzle from the original games. Ground types completely wall his team. Earthquake or Dig from Graveler, Golem, or Piloswine makes quick work of him. His Electrode is the fastest, and his Electabuzz has Fire Punch for coverage against Grass types.",
          trainers: [
            trn("Gym Leader", "Lt. Surge", [
              pk("Raichu", 44, 26),
              pk("Electrode", 40, 101),
              pk("Magneton", 40, 82),
              pk("Electrode", 40, 101),
              pk("Electabuzz", 46, 125),
            ], "₽4,600 + TM34 (Shock Wave)"),
          ],
          items: [
            item("Thunder Badge", "Defeat Lt. Surge"),
          ],
        },
        {
          name: "Cerulean Gym — Leader Misty",
          description:
            "Travel north from Vermilion through Saffron City to reach Cerulean City. Misty is not at her Gym initially — you need to find her on Route 25 at Cerulean Cape (near Bill's old house) where she is on a date. After interrupting her date, she returns to the Gym and battles you. Her team features powerful Water types. Electric and Grass moves are your best options. Her Starmie is fast and hits hard with various coverage moves. Lanturn is a tricky Pokemon with Water/Electric typing.",
          trainers: [
            trn("Gym Leader", "Misty", [
              pk("Golduck", 42, 55),
              pk("Quagsire", 42, 195),
              pk("Lapras", 44, 131),
              pk("Starmie", 47, 121),
            ], "₽4,700 + TM03 (Water Pulse)"),
          ],
          items: [
            item("Cascade Badge", "Defeat Misty"),
          ],
        },
        {
          name: "Saffron Gym — Leader Sabrina",
          description:
            "Sabrina's Gym still has the warp tile puzzle. Her Psychic team is powerful but hasn't changed its strategy. Dark types are immune to Psychic moves and are your best bet. Umbreon is an excellent choice if you evolved your Eevee. Bug moves from Heracross or Scizor (if you can trade) are also devastating. Her Alakazam is the fastest Pokemon you will face in a Gym and hits extremely hard.",
          trainers: [
            trn("Gym Leader", "Sabrina", [
              pk("Espeon", 46, 196),
              pk("Mr. Mime", 46, 122),
              pk("Alakazam", 48, 65),
            ], "₽4,800 + TM04 (Calm Mind)"),
          ],
          items: [
            item("Marsh Badge", "Defeat Sabrina"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Kanto: Celadon, Fuchsia, Pewter Gyms (Post-Game)
     * =============================================================== */
    {
      part: 14,
      title: "Kanto — Celadon, Fuchsia & Pewter Gyms",
      summary:
        "Continue your Kanto Gym challenge with Erika, Janine, and Brock.",
      isPostGame: true,
      locations: [
        {
          name: "Celadon Gym — Leader Erika",
          description:
            "Erika still leads the Celadon Gym with Grass-type Pokemon. Fire, Ice, Flying, and Poison moves are all super effective. Her Bellossom is a new addition from Generation II. The Gym is full of female trainers. If you have Typhlosion, this Gym is a breeze. Erika's Victreebel knows Acid which can lower Special Defense, so be cautious with Pokemon weak to Poison.",
          trainers: [
            trn("Gym Leader", "Erika", [
              pk("Tangela", 42, 114),
              pk("Jumpluff", 41, 189),
              pk("Victreebel", 46, 71),
              pk("Bellossom", 46, 182),
            ], "₽4,600 + TM19 (Giga Drain)"),
          ],
          items: [
            item("Rainbow Badge", "Defeat Erika"),
          ],
        },
        {
          name: "Fuchsia Gym — Leader Janine",
          description:
            "Koga has been promoted to the Elite Four, so his daughter Janine now leads the Fuchsia Gym. She uses Poison types just like her father. The Gym has the same invisible wall gimmick. Some of the trainers are disguised as Janine to confuse you. Psychic and Ground moves are effective. Her team of Ariados, Weezing, Ariados, Venomoth, and Crobat can be troublesome with their status moves like Toxic and Curse. Pack some Full Heals.",
          trainers: [
            trn("Gym Leader", "Janine", [
              pk("Crobat", 36, 169),
              pk("Weezing", 36, 110),
              pk("Ariados", 33, 168),
              pk("Ariados", 33, 168),
              pk("Venomoth", 39, 49),
            ], "₽3,900 + TM06 (Toxic)"),
          ],
          items: [
            item("Soul Badge", "Defeat Janine"),
          ],
        },
        {
          name: "Pewter Gym — Leader Brock",
          description:
            "Travel north from Cerulean through Mt. Moon to reach Pewter City. Brock still uses Rock-type Pokemon. Water and Grass moves are extremely effective. His team has been significantly upgraded since the original games, featuring Graveler, Rhyhorn, Omastar, Kabutops, and Onix. Many of his Pokemon are part Ground type, making them 4x weak to Water and Grass. Surf from a decent Water type will sweep his entire team.",
          trainers: [
            trn("Gym Leader", "Brock", [
              pk("Graveler", 41, 75),
              pk("Rhyhorn", 41, 111),
              pk("Omastar", 42, 139),
              pk("Kabutops", 42, 141),
              pk("Onix", 44, 95),
            ], "₽4,400 + TM39 (Rock Tomb)"),
          ],
          items: [
            item("Boulder Badge", "Defeat Brock"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 15 — Tin Tower (Suicune), Viridian Gym (Post-Game)
     * =============================================================== */
    {
      part: 15,
      title: "Tin Tower — Catch Suicune & Viridian Gym",
      summary:
        "Confront Suicune at Tin Tower for a climactic battle, then challenge the Viridian City Gym.",
      isPostGame: true,
      locations: [
        {
          name: "Tin Tower — Catch Suicune",
          description:
            "In Crystal, after completing all Suicune encounters and clearing the Radio Tower, Suicune finally awaits you at the top of Tin Tower in Ecruteak City. Use the Clear Bell received from the Radio Tower Director to gain access. Climb through 10 floors of challenging puzzles. At the top, Suicune stands waiting — unlike Gold and Silver where it roams, Crystal gives you a fixed encounter at Lv40. Eusine appears one last time, accepting that Suicune chose you. Save before the battle. Suicune is Water type with excellent Special Defense. Use Electric or Grass moves to weaken it. Put it to sleep or paralyze it for the best catch rate. Use Ultra Balls — do not waste your Master Ball unless desperate, as you may want it for Raikou or Entei who still roam.",
          encounters: [
            enc("Rattata", 19, ["C"], "Building", "22-26", "50%"),
            enc("Gastly", 92, ["C"], "Building", "22-26", "50%"),
          ],
          trainers: [],
          items: [
            item("Suicune", "Fixed encounter at the top of Tin Tower (Lv40)"),
            item("Full Restore", "5F"),
            item("Rare Candy", "7F hidden"),
            item("Max Revive", "9F"),
          ],
        },
        {
          name: "Viridian Gym — Leader Blue",
          description:
            "In Gold, Silver, and Crystal, Blue (the former Champion from Red/Blue) now leads the Viridian City Gym after Giovanni's disappearance. He uses a mixed team with no single type weakness, making him the toughest Gym Leader in Kanto. His team includes Pidgeot, Alakazam, Rhydon, Gyarados, Exeggutor, and Arcanine. You need a diverse team to handle his coverage. Ice moves for Pidgeot and Exeggutor, Ground for Arcanine and Rhydon, Electric for Gyarados. This is the 16th and final badge.",
          trainers: [
            trn("Cooltrainer", "Paul", [pk("Nidoking", 42, 34), pk("Alakazam", 42, 65)], "₽2,016"),
            trn("Cooltrainer", "Beth", [pk("Nidoqueen", 42, 31), pk("Alakazam", 42, 65)], "₽2,016"),
            trn("Gym Leader", "Blue", [
              pk("Pidgeot", 56, 18),
              pk("Alakazam", 54, 65),
              pk("Rhydon", 56, 112),
              pk("Gyarados", 58, 130),
              pk("Exeggutor", 55, 103),
              pk("Arcanine", 58, 59),
            ], "₽5,800 + Earth Badge"),
          ],
          items: [
            item("Earth Badge", "Defeat Blue"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 16 — Mt. Silver: Red Battle (Post-Game)
     * =============================================================== */
    {
      part: 16,
      title: "Mt. Silver — Battle Red",
      summary:
        "With all 16 badges, enter Mt. Silver and face the ultimate challenge: Red, the silent protagonist of Red/Blue/Yellow.",
      isPostGame: true,
      locations: [
        {
          name: "Mt. Silver",
          description:
            "With all 16 badges, Professor Oak grants you access to Mt. Silver from Route 28 west of the Pokemon League. Mt. Silver is an enormous mountain with multiple floors and powerful wild Pokemon including Larvitar, Ursaring, Donphan, and Misdreavus. This is one of the best training areas in the game. The wild Pokemon here are Lv40-50, making it excellent for leveling your team before the final battle. Navigate through the cave and eventually climb to the summit.",
          encounters: [
            enc("Larvitar", 246, ["C"], "Cave", "15-20", "5%"),
            enc("Ursaring", 217, ["C"], "Cave", "42-48", "20%"),
            enc("Donphan", 232, ["C"], "Cave", "42-48", "15%"),
            enc("Golbat", 42, ["C"], "Cave", "38-44", "20%"),
            enc("Golduck", 55, ["C"], "Cave", "42-48", "10%"),
            enc("Graveler", 75, ["C"], "Cave", "42-48", "15%"),
            enc("Misdreavus", 200, ["C"], "Cave", "42-48", "10%"),
            enc("Sneasel", 215, ["C"], "Cave", "42-48", "5%"),
          ],
          items: [
            item("Ultra Ball", "Multiple throughout the cave"),
            item("Max Elixir", "Deep inside the cave"),
            item("Full Restore", "Near the summit"),
            item("Protein", "Hidden in the cave"),
          ],
        },
        {
          name: "Mt. Silver Summit — Red",
          description:
            "At the very top of Mt. Silver stands Red — the silent protagonist of Red, Blue, and Yellow. He says nothing, simply turning to battle you when you approach. This is the hardest battle in the game. His team is in the high Lv70s-Lv80s, with his Pikachu at a staggering Lv81. His team covers almost every type. Pikachu has Thunder and is extremely fast. Espeon, Snorlax, Venusaur, Charizard, and Blastoise round out his roster. You need a team of at least Lv65-70 and excellent type coverage. Recommended strategies: use a Ground type for Pikachu, Water for Charizard, Electric or Grass for Blastoise, Fire or Ice for Venusaur, Fighting for Snorlax (beware its Rest), and Dark or Ghost for Espeon. This is the ultimate test — beating Red is the true ending of Pokemon Crystal. After defeating him, the credits roll again.",
          trainers: [
            trn("Pokemon Trainer", "Red", [
              pk("Pikachu", 81, 25),
              pk("Espeon", 73, 196),
              pk("Snorlax", 75, 143),
              pk("Venusaur", 77, 3),
              pk("Charizard", 77, 6),
              pk("Blastoise", 77, 9),
            ], "The ultimate challenge — no prize money, only glory"),
          ],
        },
      ],
    },
  ],
};
