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

export const HEARTGOLD_SOULSILVER_WALKTHROUGH: GameWalkthrough = {
  slug: "heartgold-soulsilver",
  gameLabel: "HeartGold & SoulSilver",
  versionTags: ["HG", "SS"],
  parts: [
    /* ===============================================================
     *  PART 1 -- New Bark Town: Choose Your Starter
     * =============================================================== */
    {
      part: 1,
      title: "New Bark Town -- Choose Your Starter",
      summary:
        "Begin your journey in New Bark Town, receive your first Pokemon from Professor Elm, and head to Mr. Pokemon's house.",
      locations: [
        {
          name: "New Bark Town",
          description:
            "Your adventure begins at home in New Bark Town. Head to Professor Elm's lab next door. He'll ask you to visit Mr. Pokemon on Route 30 and gives you a choice of three starter Pokemon: Chikorita (Grass), Cyndaquil (Fire), or Totodile (Water). Cyndaquil is often recommended for beginners as it has an easier time against early Gyms. Your starter will follow you outside its Poke Ball -- a signature feature of HeartGold and SoulSilver! Before leaving, talk to your mom to get your Pokegear and set the day/time.",
          items: [
            item("Pokegear", "From your mom before leaving"),
            item("Potion", "From your PC at home"),
          ],
        },
        {
          name: "Professor Elm's Lab",
          description:
            "Choose one of the three starter Pokemon. Each has a fully evolved form by level 36. Chikorita evolves into Bayleef (16) then Meganium (32). Cyndaquil evolves into Quilava (14) then Typhlosion (36). Totodile evolves into Croconaw (18) then Feraligatr (30). After receiving your starter, Elm asks you to visit Mr. Pokemon north of Cherrygrove City.",
          items: [
            item("Chikorita", "Starter choice from Professor Elm"),
            item("Cyndaquil", "Starter choice from Professor Elm"),
            item("Totodile", "Starter choice from Professor Elm"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 -- Route 29, Cherrygrove, Mr. Pokemon, Rival Battle
     * =============================================================== */
    {
      part: 2,
      title: "Route 29, Cherrygrove City & Rival Battle",
      summary:
        "Travel to Cherrygrove City, visit Mr. Pokemon on Route 30, receive the Mystery Egg and Pokedex, then battle your rival.",
      locations: [
        {
          name: "Route 29",
          description:
            "Head west from New Bark Town. The wild Pokemon here are low-level and perfect for some early training. Pick up some items along the way. A man will show you how to catch Pokemon once you have Poke Balls.",
          encounters: [
            enc("Pidgey", 16, ["HG", "SS"], "Grass", "2-4", "50%"),
            enc("Sentret", 161, ["HG", "SS"], "Grass", "2-4", "40%"),
            enc("Rattata", 19, ["HG", "SS"], "Grass", "2-4", "5%"),
            enc("Hoothoot", 163, ["HG", "SS"], "Grass (Night)", "2-4", "50%"),
          ],
          items: [
            item("Potion", "Hidden on the route"),
          ],
        },
        {
          name: "Cherrygrove City",
          description:
            "A small seaside city. An old man will show you around and give you the Map Card for your Pokegear. Heal up at the Pokemon Center. You can't do much here yet -- continue north to Route 30.",
          items: [
            item("Map Card", "From the Guide Gent after his tour"),
          ],
        },
        {
          name: "Route 30",
          description:
            "Head north through the route. There's a fork -- the left path has Berry trees and trainers, the right leads directly to Mr. Pokemon's house. Wild Pokemon here include Caterpie, Weedle, and more Pidgey.",
          encounters: [
            enc("Pidgey", 16, ["HG", "SS"], "Grass", "3-5", "40%"),
            enc("Caterpie", 10, ["HG", "SS"], "Grass", "3-5", "20%"),
            enc("Metapod", 11, ["HG", "SS"], "Grass", "4-5", "10%"),
            enc("Weedle", 13, ["HG", "SS"], "Grass", "3-5", "20%"),
            enc("Ledyba", 165, ["SS"], "Grass (Morning)", "3-5", "10%"),
            enc("Spinarak", 167, ["HG"], "Grass (Night)", "3-5", "10%"),
          ],
          items: [
            item("Antidote", "On the route"),
            item("Berry Pots", "From the Juggler near Mr. Pokemon's house"),
          ],
        },
        {
          name: "Mr. Pokemon's House (Route 30)",
          description:
            "Mr. Pokemon gives you the Mystery Egg to take back to Professor Elm. Professor Oak is also here -- he gives you the Pokedex! Head back south toward New Bark Town. When you reach Cherrygrove City, a red-haired boy will confront you -- this is your rival, who has stolen a Pokemon from Elm's lab.",
          items: [
            item("Mystery Egg", "From Mr. Pokemon"),
            item("Pokedex", "From Professor Oak"),
          ],
        },
        {
          name: "Cherrygrove City -- Rival Battle",
          description:
            "Your rival challenges you just outside Cherrygrove. He has the starter that is super effective against yours. His Pokemon is level 5. Just use your strongest moves and you should win. After the battle, return to New Bark Town and give the Mystery Egg and info about your rival to Professor Elm. He'll let you keep your starter and give you Poke Balls.",
          trainers: [
            trn("Rival", "Silver", [
              pk("Chikorita", 5, 152),
            ], "₽300 (if you chose Totodile)"),
          ],
          items: [
            item("Poke Balls x5", "From Professor Elm after returning the Egg"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 -- Violet City, Sprout Tower, Violet Gym
     * =============================================================== */
    {
      part: 3,
      title: "Violet City, Sprout Tower & Violet Gym",
      summary:
        "Explore Violet City, climb Sprout Tower for HM05 Flash and experience, then earn the Zephyr Badge from Falkner.",
      locations: [
        {
          name: "Route 31",
          description:
            "Continue west from Route 30 toward Violet City. You can find a Bellsprout or Poliwag here. There's also Dark Cave on this route, but you need Flash to navigate it properly -- come back later.",
          encounters: [
            enc("Pidgey", 16, ["HG", "SS"], "Grass", "4-6", "30%"),
            enc("Caterpie", 10, ["HG", "SS"], "Grass", "4-5", "20%"),
            enc("Weedle", 13, ["HG", "SS"], "Grass", "4-5", "20%"),
            enc("Bellsprout", 69, ["HG", "SS"], "Grass", "4-6", "20%"),
            enc("Gastly", 92, ["HG", "SS"], "Grass (Night)", "4-6", "10%"),
          ],
          items: [
            item("Poke Ball", "On the route"),
          ],
        },
        {
          name: "Violet City",
          description:
            "A city of historical buildings. The Sprout Tower is the pagoda in the north. Before challenging the Gym, visit Sprout Tower to gain experience and get Flash. There's also a school where you can learn about status conditions.",
          items: [
            item("HM06 Rock Smash", "From a man near the Pokemon Center"),
          ],
        },
        {
          name: "Sprout Tower",
          description:
            "A three-floor tower filled with Sage trainers who all use Bellsprout. The swaying pillar in the center is made from a massive Bellsprout. Wild Rattata and Gastly appear here. Your rival is at the top -- he's already beaten the elder. Talk to the elder to receive HM05 Flash. This is great training before the Gym.",
          encounters: [
            enc("Rattata", 19, ["HG", "SS"], "Building", "3-6", "65%"),
            enc("Gastly", 92, ["HG", "SS"], "Building (Night)", "3-6", "35%"),
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
            item("HM05 Flash", "From Elder Li on the top floor"),
            item("Parlyz Heal", "Second floor"),
            item("Escape Rope", "Second floor"),
          ],
        },
        {
          name: "Violet Gym -- Leader Falkner",
          description:
            "Falkner specializes in Flying-type Pokemon. Electric and Rock moves are super effective. If you chose Cyndaquil, use it here -- Fire resists his moves. Be careful of Pidgeotto's Roost, which heals it. Get your team to around level 12-13 before challenging. The gym has an elevated walkway you must traverse to reach Falkner.",
          trainers: [
            trn("Bird Keeper", "Abe", [pk("Spearow", 9, 21)], "₽288"),
            trn("Bird Keeper", "Rod", [pk("Pidgey", 7, 16), pk("Pidgey", 7, 16)], "₽224"),
            trn("Gym Leader", "Falkner", [pk("Pidgey", 9, 16), pk("Pidgeotto", 13, 17)], "₽1,560 + TM51 (Roost)"),
          ],
          items: [
            item("Zephyr Badge", "Defeat Falkner"),
            item("TM51 Roost", "Defeat Falkner"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 -- Route 32-33, Union Cave, Azalea Town, Slowpoke Well, Azalea Gym
     * =============================================================== */
    {
      part: 4,
      title: "Route 32, Union Cave, Azalea Town & Azalea Gym",
      summary:
        "Travel south through Route 32 and Union Cave, clear Team Rocket from Slowpoke Well, and earn the Hive Badge from Bugsy.",
      locations: [
        {
          name: "Route 32",
          description:
            "A long route heading south from Violet City. There are many trainers here. You can fish with the Old Rod (received from a fisherman on the route). Wooper and Mareep are found in the grass -- Mareep is an excellent Electric type for your team. At the bottom of the route is the entrance to Union Cave.",
          encounters: [
            enc("Ekans", 23, ["HG"], "Grass", "6-8", "20%"),
            enc("Bellsprout", 69, ["HG", "SS"], "Grass", "6-8", "30%"),
            enc("Mareep", 179, ["HG", "SS"], "Grass", "6-8", "30%"),
            enc("Hoppip", 187, ["HG", "SS"], "Grass", "6-8", "20%"),
            enc("Wooper", 194, ["HG", "SS"], "Grass", "4-6", "20%"),
            enc("Tentacool", 72, ["HG", "SS"], "Surfing", "15-25", "90%"),
            enc("Magikarp", 129, ["HG", "SS"], "Old Rod", "10", "85%"),
          ],
          trainers: [
            trn("Youngster", "Albert", [pk("Rattata", 6, 19), pk("Zubat", 8, 41)], "₽128"),
            trn("Bird Keeper", "Peter", [pk("Pidgey", 6, 16), pk("Pidgey", 6, 16), pk("Spearow", 8, 21)], "₽192"),
            trn("Picnicker", "Liz", [pk("Nidoran F", 9, 29)], "₽180"),
            trn("Camper", "Roland", [pk("Nidoran M", 9, 32)], "₽180"),
            trn("Fisher", "Henry", [pk("Poliwag", 8, 60), pk("Poliwag", 8, 60)], "₽256"),
            trn("Fisher", "Justin", [pk("Magikarp", 5, 129), pk("Magikarp", 5, 129), pk("Magikarp", 15, 129)], "₽480"),
          ],
          items: [
            item("Old Rod", "From the Fisherman in the Pokemon Center"),
            item("TM09 Bullet Seed", "Man at the northern end"),
            item("Repel", "On the route"),
            item("Great Ball", "Near the southern end"),
          ],
        },
        {
          name: "Union Cave",
          description:
            "A short cave connecting Route 32 and Route 33. Wild Geodude and Onix are common. There is a lower level accessible with Surf later that leads to Lapras (appears on Fridays). For now, just pass through the main path.",
          encounters: [
            enc("Geodude", 74, ["HG", "SS"], "Cave", "6-8", "30%"),
            enc("Zubat", 41, ["HG", "SS"], "Cave", "6-8", "30%"),
            enc("Sandshrew", 27, ["HG", "SS"], "Cave", "6-8", "20%"),
            enc("Onix", 95, ["HG", "SS"], "Cave", "6-8", "10%"),
            enc("Rattata", 19, ["HG", "SS"], "Cave", "6-8", "10%"),
          ],
          trainers: [
            trn("Hiker", "Daniel", [pk("Onix", 11, 95)], "₽352"),
            trn("Hiker", "Russell", [pk("Geodude", 4, 74), pk("Geodude", 6, 74), pk("Geodude", 8, 74)], "₽256"),
            trn("Firebreather", "Bill", [pk("Koffing", 6, 109), pk("Koffing", 6, 109)], "₽192"),
            trn("Pokemaniac", "Larry", [pk("Slowpoke", 10, 79)], "₽600"),
          ],
          items: [
            item("X Attack", "B1F"),
            item("Great Ball", "B1F"),
            item("Potion", "Main floor"),
          ],
        },
        {
          name: "Route 33 & Azalea Town",
          description:
            "A short, rainy route leading to Azalea Town. Hoppip and Rattata appear here. Azalea Town is home to Kurt, who makes special Poke Balls from Apricorns, and the Slowpoke Well. Team Rocket has taken over the town and is cutting off Slowpoke tails to sell. You must clear them out of the Slowpoke Well before you can challenge the Gym.",
          encounters: [
            enc("Rattata", 19, ["HG", "SS"], "Grass", "6-8", "30%"),
            enc("Hoppip", 187, ["HG", "SS"], "Grass", "6-8", "40%"),
            enc("Geodude", 74, ["HG", "SS"], "Grass", "6-8", "10%"),
            enc("Zubat", 41, ["HG", "SS"], "Grass", "6-8", "20%"),
          ],
          items: [
            item("Black Apricorn", "Apricorn tree on Route 33"),
          ],
        },
        {
          name: "Slowpoke Well",
          description:
            "Enter the well to confront Team Rocket. There are four Rocket grunts and their leader, Proton. They've been cutting Slowpoke tails for profit. Defeat them all to save the Slowpoke. Kurt will fall down the well entrance trying to help -- talk to him after clearing the Rockets. Wild Slowpoke and Zubat are found here.",
          encounters: [
            enc("Slowpoke", 79, ["HG", "SS"], "Cave", "5-8", "50%"),
            enc("Zubat", 41, ["HG", "SS"], "Cave", "5-8", "50%"),
          ],
          trainers: [
            trn("Team Rocket Grunt", "Grunt", [pk("Rattata", 6, 19)], "₽240"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 4, 41), pk("Ekans", 8, 23)], "₽320"),
            trn("Team Rocket Grunt", "Grunt", [pk("Rattata", 7, 19), pk("Zubat", 9, 41)], "₽360"),
            trn("Rocket Executive", "Proton", [pk("Zubat", 8, 41), pk("Koffing", 12, 109)], "₽480"),
          ],
        },
        {
          name: "Azalea Gym -- Leader Bugsy",
          description:
            "Bugsy specializes in Bug-type Pokemon. Fire, Flying, and Rock moves are all super effective. His Scyther is dangerous -- it knows U-turn and is fast. If you have Cyndaquil/Quilava, this is straightforward. Geodude also works well. The gym has spider-web paths you must navigate. Get your team to at least level 15 before challenging.",
          trainers: [
            trn("Bug Catcher", "Al", [pk("Caterpie", 12, 10), pk("Weedle", 12, 13)], "₽192"),
            trn("Bug Catcher", "Benny", [pk("Weedle", 7, 13), pk("Kakuna", 9, 14), pk("Beedrill", 12, 15)], "₽192"),
            trn("Twins", "Amy & May", [pk("Spinarak", 10, 167), pk("Ledyba", 10, 165)], "₽240"),
            trn("Gym Leader", "Bugsy", [pk("Metapod", 15, 11), pk("Kakuna", 15, 14), pk("Scyther", 17, 123)], "₽2,040 + TM89 (U-turn)"),
          ],
          items: [
            item("Hive Badge", "Defeat Bugsy"),
            item("TM89 U-turn", "Defeat Bugsy"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 -- Ilex Forest, Goldenrod City, Goldenrod Gym
     * =============================================================== */
    {
      part: 5,
      title: "Ilex Forest, Goldenrod City & Goldenrod Gym",
      summary:
        "Navigate Ilex Forest with Cut, explore the massive Goldenrod City, and face Whitney's infamous Miltank.",
      locations: [
        {
          name: "Ilex Forest",
          description:
            "A dense forest west of Azalea Town. You need to help the Charcoal Maker's apprentice catch his Farfetch'd by herding it using the environment. After that, the apprentice gives you HM01 Cut. You can now cut down thin trees. There's also a shrine to the forest's guardian. Wild Oddish and Paras are common.",
          encounters: [
            enc("Caterpie", 10, ["HG", "SS"], "Grass", "5-7", "20%"),
            enc("Metapod", 11, ["HG", "SS"], "Grass", "6-7", "10%"),
            enc("Weedle", 13, ["HG", "SS"], "Grass", "5-7", "20%"),
            enc("Kakuna", 14, ["HG", "SS"], "Grass", "6-7", "10%"),
            enc("Pidgey", 16, ["HG", "SS"], "Grass", "5-7", "15%"),
            enc("Oddish", 43, ["HG", "SS"], "Grass", "5-7", "15%"),
            enc("Paras", 46, ["HG", "SS"], "Grass", "5-7", "10%"),
          ],
          trainers: [
            trn("Bug Catcher", "Wayne", [pk("Ledyba", 8, 165), pk("Paras", 10, 46)], "₽160"),
          ],
          items: [
            item("HM01 Cut", "From the Charcoal Maker's apprentice"),
            item("TM12 Taunt", "Deep in the forest (requires Cut)"),
            item("Revive", "Hidden in the forest"),
          ],
        },
        {
          name: "Route 34",
          description:
            "A route leading north to Goldenrod City. The Daycare Center is here -- leave two compatible Pokemon to breed! A female Trainer will give you an Odd Egg (which hatches into a baby Pokemon with a chance of being shiny). Lots of trainers on this route to battle.",
          encounters: [
            enc("Rattata", 19, ["HG", "SS"], "Grass", "10-12", "30%"),
            enc("Abra", 63, ["HG", "SS"], "Grass", "10-12", "20%"),
            enc("Drowzee", 96, ["HG", "SS"], "Grass", "10-12", "30%"),
            enc("Ditto", 132, ["HG", "SS"], "Grass", "10-12", "10%"),
            enc("Pidgey", 16, ["HG", "SS"], "Grass", "10-12", "10%"),
          ],
          items: [
            item("Nugget", "Hidden on the route"),
          ],
        },
        {
          name: "Goldenrod City",
          description:
            "The largest city in Johto! The Department Store has everything you need. Visit the Bike Shop for a free Bicycle. The Radio Tower gives you a Radio Card after a quiz. The Goldenrod Tunnel has a Haircut Brothers shop that raises happiness. Bill is in the Pokemon Center and will give you an Eevee. The Name Rater and Move Deleter are also here.",
          items: [
            item("Bicycle", "From the Bike Shop (free)"),
            item("Radio Card", "Pass the quiz at the Radio Tower"),
            item("Eevee", "From Bill at the Pokemon Center"),
            item("Blue Card", "From Buena at the Radio Tower"),
            item("Coin Case", "From man in Goldenrod Tunnel"),
          ],
        },
        {
          name: "Goldenrod Gym -- Leader Whitney",
          description:
            "Whitney specializes in Normal-type Pokemon. Her Miltank is one of the most infamous Pokemon in the series -- it uses Rollout, which doubles in power each turn, and Attract to immobilize male Pokemon. Use a female Pokemon to avoid Attract. Fighting-type moves are super effective. Geodude or Machop from the Department Store trade are excellent counters. After you win, Whitney cries and refuses to give you the badge -- talk to her again after a moment and she'll hand it over.",
          trainers: [
            trn("Lass", "Carrie", [pk("Snubbull", 17, 209)], "₽272"),
            trn("Beauty", "Victoria", [pk("Sentret", 9, 161), pk("Sentret", 13, 161), pk("Sentret", 17, 161)], "₽1,360"),
            trn("Lass", "Bridget", [pk("Jigglypuff", 15, 39), pk("Jigglypuff", 15, 39), pk("Jigglypuff", 15, 39)], "₽240"),
            trn("Gym Leader", "Whitney", [pk("Clefairy", 17, 35), pk("Miltank", 19, 241)], "₽2,280 + TM45 (Attract)"),
          ],
          items: [
            item("Plain Badge", "Defeat Whitney (talk to her again)"),
            item("TM45 Attract", "Defeat Whitney"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 -- National Park, Ecruteak City, Burned Tower, Ecruteak Gym
     * =============================================================== */
    {
      part: 6,
      title: "National Park, Ecruteak City & Ecruteak Gym",
      summary:
        "Pass through the National Park, explore Ecruteak City and the Burned Tower where you awaken the legendary beasts, then earn the Fog Badge from Morty.",
      locations: [
        {
          name: "Route 35 & National Park",
          description:
            "Head north from Goldenrod City. Route 35 has several trainers. The National Park holds a Bug-Catching Contest on Tuesdays, Thursdays, and Saturdays -- you can win Sun Stones, Everstones, and other prizes. Scyther and Pinsir can be caught during the contest. It's a pleasant area to explore and catch Sunkern.",
          encounters: [
            enc("Nidoran F", 29, ["HG", "SS"], "Grass", "12-14", "20%"),
            enc("Nidoran M", 32, ["HG", "SS"], "Grass", "12-14", "20%"),
            enc("Pidgey", 16, ["HG", "SS"], "Grass", "12-14", "20%"),
            enc("Abra", 63, ["HG", "SS"], "Grass", "12-14", "10%"),
            enc("Ditto", 132, ["HG", "SS"], "Grass", "10-12", "10%"),
            enc("Yanma", 193, ["HG", "SS"], "Grass", "12-14", "5%"),
            enc("Sunkern", 191, ["HG", "SS"], "Grass (Morning)", "12-14", "20%"),
            enc("Caterpie", 10, ["HG", "SS"], "Bug Contest", "12-15", "20%"),
            enc("Scyther", 123, ["HG", "SS"], "Bug Contest", "13-14", "5%"),
            enc("Pinsir", 127, ["HG", "SS"], "Bug Contest", "13-14", "5%"),
          ],
          items: [
            item("Quick Claw", "From a woman in the National Park"),
            item("Sun Stone", "Bug-Catching Contest first prize"),
          ],
        },
        {
          name: "Route 36 & Route 37",
          description:
            "Route 36 has a strange tree blocking the path east -- this is a Sudowoodo. You'll need the SquirtBottle from the flower shop in Goldenrod City (available after getting the Plain Badge). Use it to reveal and battle Sudowoodo (level 20). Route 37 leads north to Ecruteak City. Stantler and Growlithe/Vulpix appear here.",
          encounters: [
            enc("Growlithe", 58, ["HG"], "Grass", "13-15", "30%"),
            enc("Vulpix", 37, ["SS"], "Grass", "13-15", "30%"),
            enc("Pidgey", 16, ["HG", "SS"], "Grass", "13-15", "20%"),
            enc("Pidgeotto", 17, ["HG", "SS"], "Grass", "15-16", "5%"),
            enc("Stantler", 234, ["HG", "SS"], "Grass", "13-15", "30%"),
          ],
          items: [
            item("SquirtBottle", "Flower shop in Goldenrod (after Plain Badge)"),
            item("TM62 Silver Wind", "From man on Route 36"),
          ],
        },
        {
          name: "Ecruteak City",
          description:
            "A city steeped in history and legend. Two towers stand here: the Bell Tower (Tin Tower) in the east and the Burned Tower in the northwest. The Kimono Girls perform at the dance theater. Visit Bill at the Pokemon Center -- he'll return to Goldenrod. The Burned Tower is your first priority.",
          items: [
            item("HM03 Surf", "From the man at the Ecruteak Dance Theater after defeating a Rocket Grunt"),
            item("Itemfinder", "From a man in a house"),
            item("Good Rod", "From a fisherman in the house below the Pokemon Center"),
          ],
        },
        {
          name: "Burned Tower",
          description:
            "This tower once housed the legendary beasts. Enter and explore -- your rival will battle you here. Fall through the hole in the floor to the basement, where three Pokemon statues come to life: Raikou, Entei, and Suicune. They flee and begin roaming Johto. You can track them with your Pokedex map. Morty studies these legends.",
          encounters: [
            enc("Rattata", 19, ["HG", "SS"], "Building", "13-16", "30%"),
            enc("Koffing", 109, ["HG", "SS"], "Building", "13-16", "30%"),
            enc("Zubat", 41, ["HG", "SS"], "Building", "13-16", "20%"),
            enc("Magmar", 126, ["HG"], "Building", "14-16", "10%"),
            enc("Rattata", 19, ["HG", "SS"], "Building", "14-16", "10%"),
          ],
          trainers: [
            trn("Rival", "Silver", [pk("Gastly", 20, 92), pk("Magnemite", 18, 81), pk("Zubat", 20, 41), pk("Bayleef", 22, 153)], "₽1,320"),
          ],
          items: [
            item("HP Up", "Burned Tower B1F"),
            item("Ether", "Burned Tower 1F"),
          ],
        },
        {
          name: "Ecruteak Gym -- Leader Morty",
          description:
            "Morty specializes in Ghost-type Pokemon. Dark moves are ideal. His Gengar is dangerous with Shadow Ball and Hypnosis. The gym is pitch-dark with an invisible walkway -- follow the path carefully or you'll fall off and have to restart. Normal and Fighting moves won't work on Ghosts. Consider catching a Dark type or teaching Bite to your Pokemon. Recommended level: 23-25.",
          trainers: [
            trn("Medium", "Martha", [pk("Gastly", 20, 92), pk("Gastly", 20, 92), pk("Gastly", 20, 92)], "₽640"),
            trn("Medium", "Grace", [pk("Haunter", 22, 93)], "₽704"),
            trn("Sage", "Ping", [pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92)], "₽512"),
            trn("Medium", "Edith", [pk("Haunter", 22, 93)], "₽704"),
            trn("Gym Leader", "Morty", [pk("Gastly", 21, 92), pk("Haunter", 21, 93), pk("Haunter", 23, 93), pk("Gengar", 25, 94)], "₽3,000 + TM30 (Shadow Ball)"),
          ],
          items: [
            item("Fog Badge", "Defeat Morty"),
            item("TM30 Shadow Ball", "Defeat Morty"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 -- Olivine City, Olivine Lighthouse, Cianwood City, Cianwood Gym
     * =============================================================== */
    {
      part: 7,
      title: "Olivine Lighthouse, Cianwood City & Cianwood Gym",
      summary:
        "Climb Olivine Lighthouse to find the sick Ampharos, surf to Cianwood City, earn the Storm Badge from Chuck, and get the SecretPotion.",
      locations: [
        {
          name: "Route 38 & Route 39",
          description:
            "Head west from Ecruteak. These routes are dotted with trainers and the Moomoo Farm where a sick Miltank needs berries. Wild Tauros and Miltank appear on Route 39. Farfetch'd and Magnemite can be found here too.",
          encounters: [
            enc("Rattata", 19, ["HG", "SS"], "Grass", "13-16", "20%"),
            enc("Raticate", 20, ["HG", "SS"], "Grass", "16", "5%"),
            enc("Meowth", 52, ["SS"], "Grass", "13-16", "20%"),
            enc("Magnemite", 81, ["HG", "SS"], "Grass", "13-16", "20%"),
            enc("Farfetch'd", 83, ["HG", "SS"], "Grass", "13-16", "15%"),
            enc("Tauros", 128, ["HG", "SS"], "Grass", "13-16", "5%"),
            enc("Miltank", 241, ["HG", "SS"], "Grass", "13-16", "5%"),
            enc("Snubbull", 209, ["HG", "SS"], "Grass", "13-16", "10%"),
          ],
          items: [
            item("TM60 Drain Punch", "On Route 38"),
          ],
        },
        {
          name: "Olivine City & Lighthouse",
          description:
            "A port city on the coast. The Gym Leader, Jasmine, is up in the Lighthouse caring for a sick Ampharos named Amphy. Climb all six floors of the lighthouse to find her. She asks you to get medicine from Cianwood City across the sea. You need Surf to get there. The S.S. Aqua terminal is here but not operational yet.",
          encounters: [
            enc("Tentacool", 72, ["HG", "SS"], "Surfing", "20-25", "90%"),
            enc("Tentacruel", 73, ["HG", "SS"], "Surfing", "25-30", "10%"),
          ],
          trainers: [
            trn("Sailor", "Huey", [pk("Poliwag", 18, 60), pk("Poliwhirl", 20, 61)], "₽640"),
            trn("Gentleman", "Alfred", [pk("Noctowl", 22, 164)], "₽1,584"),
            trn("Lass", "Connie", [pk("Marill", 21, 183)], "₽336"),
            trn("Sailor", "Terrell", [pk("Poliwhirl", 20, 61), pk("Machop", 18, 66)], "₽576"),
            trn("Bird Keeper", "Denis", [pk("Spearow", 18, 21), pk("Fearow", 20, 22)], "₽576"),
          ],
          items: [
            item("Rare Candy", "Lighthouse 5F"),
            item("Super Potion", "Lighthouse 3F"),
            item("Ether", "Lighthouse 4F"),
          ],
        },
        {
          name: "Route 40 & Route 41",
          description:
            "Surf southwest from Olivine City. These ocean routes have many swimmers to battle and Tentacool in the water. The Whirl Islands are visible but you need Whirlpool to enter them (come back later for Lugia). Mantine can be encountered surfing in HeartGold.",
          encounters: [
            enc("Tentacool", 72, ["HG", "SS"], "Surfing", "18-25", "60%"),
            enc("Tentacruel", 73, ["HG", "SS"], "Surfing", "20-30", "10%"),
            enc("Mantine", 226, ["HG"], "Surfing", "20-25", "10%"),
            enc("Krabby", 98, ["HG", "SS"], "Surfing", "15-24", "20%"),
          ],
          trainers: [
            trn("Swimmer M", "Simon", [pk("Tentacool", 20, 72), pk("Tentacool", 22, 72)], "₽352"),
            trn("Swimmer F", "Elaine", [pk("Staryu", 21, 120)], "₽336"),
            trn("Swimmer M", "Randall", [pk("Shellder", 18, 90), pk("Wartortle", 20, 8)], "₽320"),
          ],
        },
        {
          name: "Cianwood City",
          description:
            "A remote city on the western coast. Visit the Cianwood Pharmacy to get the SecretPotion for the sick Ampharos. A man outside gives you HM02 Fly. The Pokemon Seer can tell you details about your Pokemon. Suicune may appear on the cape north of the city. Challenge Chuck's gym after exploring.",
          items: [
            item("SecretPotion", "From the Cianwood Pharmacy"),
            item("HM02 Fly", "From the woman outside Chuck's Gym"),
            item("HM04 Strength", "From a Sailor in the city"),
          ],
        },
        {
          name: "Cianwood Gym -- Leader Chuck",
          description:
            "Chuck specializes in Fighting-type Pokemon. Flying and Psychic moves are super effective. His Poliwrath knows Hypnosis and Focus Punch -- it can be dangerous if you let it put you to sleep. You must push a boulder under the waterfall to stop the water before you can reach Chuck. Consider using a Noctowl or Kadabra. Recommended level: 28-31.",
          trainers: [
            trn("Black Belt", "Yoshi", [pk("Hitmonlee", 27, 106)], "₽864"),
            trn("Black Belt", "Lao", [pk("Hitmonchan", 27, 107)], "₽864"),
            trn("Black Belt", "Nob", [pk("Machop", 25, 66), pk("Machoke", 25, 67)], "₽800"),
            trn("Black Belt", "Lung", [pk("Mankey", 23, 56), pk("Mankey", 23, 56), pk("Primeape", 25, 57)], "₽800"),
            trn("Gym Leader", "Chuck", [pk("Primeape", 29, 57), pk("Poliwrath", 31, 62)], "₽3,720 + TM01 (Focus Punch)"),
          ],
          items: [
            item("Storm Badge", "Defeat Chuck"),
            item("TM01 Focus Punch", "Defeat Chuck"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 -- Olivine Gym, Lake of Rage, Rocket Hideout
     * =============================================================== */
    {
      part: 8,
      title: "Olivine Gym, Lake of Rage & Rocket Hideout",
      summary:
        "Deliver the SecretPotion, earn the Mineral Badge from Jasmine, investigate the Red Gyarados at the Lake of Rage, and infiltrate Team Rocket's hideout.",
      locations: [
        {
          name: "Olivine Gym -- Leader Jasmine",
          description:
            "Fly back to Olivine City and deliver the SecretPotion to Jasmine at the top of the Lighthouse. Amphy is healed and Jasmine returns to her Gym. She specializes in Steel-type Pokemon. Fire and Ground moves are super effective. Her Steelix is bulky and knows Iron Tail. A Fire type like Quilava/Typhlosion or a Fighting type will do well. Recommended level: 30-35.",
          trainers: [
            trn("Gym Leader", "Jasmine", [pk("Magnemite", 30, 81), pk("Magnemite", 30, 81), pk("Steelix", 35, 208)], "₽4,200 + TM23 (Iron Tail)"),
          ],
          items: [
            item("Mineral Badge", "Defeat Jasmine"),
            item("TM23 Iron Tail", "Defeat Jasmine"),
          ],
        },
        {
          name: "Route 42 & Mahogany Town",
          description:
            "Fly to Ecruteak and head east to Mahogany Town. Route 42 has the entrance to Mt. Mortar (optional, large cave). Mahogany Town is a small town with a suspicious shop. Before you can challenge the Gym, you must investigate the Lake of Rage to the north.",
          encounters: [
            enc("Mareep", 179, ["HG", "SS"], "Grass", "13-15", "20%"),
            enc("Flaaffy", 180, ["HG", "SS"], "Grass", "14-16", "10%"),
            enc("Spearow", 21, ["HG", "SS"], "Grass", "13-16", "30%"),
            enc("Mankey", 56, ["HG"], "Grass", "13-16", "20%"),
            enc("Zubat", 41, ["HG", "SS"], "Grass", "13-15", "20%"),
          ],
        },
        {
          name: "Route 43 & Lake of Rage",
          description:
            "Head north from Mahogany Town. Team Rocket grunts block the route and extort money. The Lake of Rage has a special Red Gyarados at Level 30 -- this is a guaranteed shiny encounter. Battle and catch it (or defeat it for a Red Scale). After the encounter, Lance of the Elite Four arrives and asks for your help. He's investigating Team Rocket. Return to Mahogany Town with him.",
          encounters: [
            enc("Flaaffy", 180, ["HG", "SS"], "Grass", "15-17", "10%"),
            enc("Girafarig", 203, ["HG", "SS"], "Grass", "15-17", "10%"),
            enc("Pidgeotto", 17, ["HG", "SS"], "Grass", "15-17", "20%"),
            enc("Venonat", 48, ["HG", "SS"], "Grass", "15-17", "20%"),
            enc("Magikarp", 129, ["HG", "SS"], "Surfing", "15-25", "90%"),
            enc("Gyarados", 130, ["HG", "SS"], "Surfing", "15-20", "10%"),
          ],
          items: [
            item("Red Gyarados", "Guaranteed Lv. 30 shiny encounter (or Red Scale if defeated)"),
            item("TM10 Hidden Power", "On Route 43"),
            item("Red Scale", "From the Red Gyarados if defeated instead of caught"),
          ],
        },
        {
          name: "Team Rocket HQ (Mahogany Town)",
          description:
            "The suspicious souvenir shop in Mahogany Town is a front for Team Rocket's secret base. Lance helps you infiltrate. Navigate the multi-floor hideout, disabling security cameras and defeating Rocket scientists. You must defeat the Electrode powering the transmitter on the upper floor and battle the Rocket Executives. After clearing the base, Lance gives you HM05 Whirlpool and the Mahogany Gym opens.",
          trainers: [
            trn("Rocket Executive", "Petrel", [pk("Zubat", 22, 41), pk("Koffing", 22, 109), pk("Raticate", 24, 20)], "₽960"),
            trn("Rocket Executive", "Ariana", [pk("Arbok", 25, 24), pk("Vileplume", 25, 45), pk("Murkrow", 27, 198)], "₽1,080"),
            trn("Team Rocket Grunt", "Grunt", [pk("Rattata", 17, 19), pk("Rattata", 17, 19)], "₽680"),
            trn("Scientist", "Gregg", [pk("Magnemite", 20, 81), pk("Magnemite", 22, 81), pk("Magnemite", 24, 81)], "₽1,152"),
          ],
          items: [
            item("HM05 Whirlpool", "From Lance after clearing the base"),
            item("Protein", "B2F"),
            item("Full Heal", "B2F"),
            item("Ice Heal", "B2F"),
            item("X Special", "B3F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 -- Mahogany Gym
     * =============================================================== */
    {
      part: 9,
      title: "Mahogany Gym",
      summary:
        "Challenge Pryce's Ice-type Gym and earn the Glacier Badge.",
      locations: [
        {
          name: "Mahogany Gym -- Leader Pryce",
          description:
            "Pryce specializes in Ice-type Pokemon. Fire, Fighting, Rock, and Steel moves are all super effective. The gym is an ice-sliding puzzle -- you must navigate slippery floors and push aside obstacles to reach Pryce. His Piloswine knows Mud Bomb for coverage against Fire types, so be careful. A strong Fighting type like Primeape or Machoke is ideal. Recommended level: 30-34.",
          trainers: [
            trn("Skier", "Roxanne", [pk("Jynx", 28, 124)], "₽896"),
            trn("Boarder", "Brad", [pk("Swinub", 26, 220), pk("Seel", 26, 86)], "₽832"),
            trn("Skier", "Clarissa", [pk("Dewgong", 30, 87)], "₽960"),
            trn("Boarder", "Douglas", [pk("Shellder", 24, 90), pk("Cloyster", 26, 91), pk("Seel", 26, 86)], "₽832"),
            trn("Gym Leader", "Pryce", [pk("Seel", 30, 86), pk("Dewgong", 32, 87), pk("Piloswine", 34, 221)], "₽4,080 + TM07 (Hail)"),
          ],
          items: [
            item("Glacier Badge", "Defeat Pryce"),
            item("TM07 Hail", "Defeat Pryce"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 -- Blackthorn City, Ice Path, Blackthorn Gym
     * =============================================================== */
    {
      part: 10,
      title: "Ice Path, Blackthorn City & Blackthorn Gym",
      summary:
        "Navigate the treacherous Ice Path, reach Blackthorn City, and earn the Rising Badge from Dragon master Clair.",
      locations: [
        {
          name: "Route 44",
          description:
            "Head east from Mahogany Town toward the Ice Path. This route has strong trainers and wild Tangela, Lickitung, and Poliwag. Stock up on supplies -- the Ice Path is challenging.",
          encounters: [
            enc("Tangela", 114, ["HG", "SS"], "Grass", "22-26", "20%"),
            enc("Lickitung", 108, ["HG", "SS"], "Grass", "22-25", "10%"),
            enc("Bellsprout", 69, ["HG", "SS"], "Grass", "22-24", "20%"),
            enc("Weepinbell", 70, ["HG", "SS"], "Grass", "24-26", "10%"),
            enc("Poliwag", 60, ["HG", "SS"], "Grass", "22-24", "30%"),
            enc("Poliwhirl", 61, ["HG", "SS"], "Grass", "24-26", "10%"),
          ],
          trainers: [
            trn("Pokemaniac", "Zach", [pk("Rhyhorn", 27, 111)], "₽1,620"),
            trn("Fisher", "Wilton", [pk("Goldeen", 27, 118), pk("Seaking", 29, 119)], "₽928"),
            trn("Cooltrainer M", "Allen", [pk("Charmeleon", 27, 5), pk("Magneton", 29, 82)], "₽1,392"),
          ],
        },
        {
          name: "Ice Path",
          description:
            "A cave filled with slippery ice floors and strength-boulder puzzles. You need both Strength and Rock Smash to navigate. Push boulders down holes to create paths on lower floors. Wild Swinub and Jynx appear here. HM07 Waterfall is on the deepest floor -- you need it to enter the Blackthorn Gym and progress later.",
          encounters: [
            enc("Zubat", 41, ["HG", "SS"], "Cave", "22-24", "20%"),
            enc("Golbat", 42, ["HG", "SS"], "Cave", "22-26", "10%"),
            enc("Jynx", 124, ["HG", "SS"], "Cave", "22-24", "10%"),
            enc("Swinub", 220, ["HG", "SS"], "Cave", "21-24", "50%"),
            enc("Delibird", 225, ["SS"], "Cave", "22-24", "10%"),
          ],
          items: [
            item("HM07 Waterfall", "B3F, after ice puzzle"),
            item("Full Heal", "B2F"),
            item("Max Potion", "B3F"),
            item("Nevermeltice", "B2F"),
            item("TM72 Avalanche", "B1F"),
          ],
        },
        {
          name: "Blackthorn City",
          description:
            "The home of Dragon-type masters. The Move Tutor in this city can teach powerful moves. Visit the Move Deleter and Move Relearner here. The Dragon's Den is behind the Gym -- you'll visit it after your Gym battle. Stock up on Ultra Balls for upcoming legendary encounters.",
          items: [
            item("TM24 Thunderbolt", "From a house in the city"),
          ],
        },
        {
          name: "Blackthorn Gym -- Leader Clair",
          description:
            "Clair specializes in Dragon-type Pokemon. Ice moves are super effective. Her Kingdra is tricky because Water/Dragon typing has few weaknesses -- only Dragon moves are super effective against it. The gym has a lava-and-platform puzzle. Bring Ice Beam or Blizzard. Lapras with Ice Beam is an excellent choice. After you win, Clair refuses to give you the badge and tells you to pass a test in the Dragon's Den first. Recommended level: 38-42.",
          trainers: [
            trn("Cooltrainer M", "Paul", [pk("Dratini", 34, 147), pk("Dratini", 34, 147), pk("Dragonair", 37, 148)], "₽1,776"),
            trn("Cooltrainer F", "Lola", [pk("Dratini", 35, 147), pk("Dragonair", 37, 148)], "₽1,776"),
            trn("Cooltrainer M", "Mike", [pk("Dragonair", 37, 148)], "₽1,776"),
            trn("Gym Leader", "Clair", [pk("Dragonair", 38, 148), pk("Dragonair", 38, 148), pk("Gyarados", 38, 130), pk("Kingdra", 41, 230)], "₽4,920 + TM59 (Dragon Pulse)"),
          ],
          items: [
            item("Rising Badge", "From Clair after the Dragon's Den test"),
            item("TM59 Dragon Pulse", "From Clair"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 -- Radio Tower, Dragon's Den, Kimono Girls
     * =============================================================== */
    {
      part: 11,
      title: "Radio Tower Crisis, Dragon's Den & Kimono Girls",
      summary:
        "Stop Team Rocket's takeover of the Radio Tower in Goldenrod City, pass the Dragon's Den test, and face the five Kimono Girls.",
      locations: [
        {
          name: "Dragon's Den",
          description:
            "Behind Blackthorn Gym is the Dragon's Den. Surf across the water and enter the shrine. The Dragon Master asks you questions about how you treat your Pokemon. Answer wisely (choose kind, caring answers) and you'll receive the Dratini gift with ExtremeSpeed. Clair arrives and begrudgingly gives you the Rising Badge.",
          encounters: [
            enc("Magikarp", 129, ["HG", "SS"], "Surfing", "15-25", "90%"),
            enc("Dratini", 147, ["HG", "SS"], "Surfing", "10-14", "10%"),
            enc("Dragonair", 148, ["HG", "SS"], "Super Rod", "15-19", "5%"),
          ],
          items: [
            item("Dratini", "Gift from the Dragon Master (with ExtremeSpeed)"),
            item("Dragon Fang", "Inside the shrine"),
          ],
        },
        {
          name: "Goldenrod Radio Tower",
          description:
            "Fly to Goldenrod City. Team Rocket has taken over the Radio Tower and is broadcasting a message to their disbanded leader Giovanni. You need the Basement Key from the director (who is actually the Rocket Executive Petrel in disguise) in the Goldenrod Underground. Navigate through the underground tunnels, defeat Rocket grunts, then storm the Radio Tower floor by floor. Battle Executives Proton, Petrel, Ariana, and finally the interim leader Archer at the top.",
          trainers: [
            trn("Rocket Executive", "Proton", [pk("Golbat", 28, 42), pk("Weezing", 33, 110)], "₽1,320"),
            trn("Rocket Executive", "Petrel", [pk("Koffing", 30, 109), pk("Koffing", 30, 109), pk("Koffing", 30, 109), pk("Weezing", 32, 110), pk("Koffing", 30, 109)], "₽1,280"),
            trn("Rocket Executive", "Ariana", [pk("Arbok", 32, 24), pk("Vileplume", 32, 45), pk("Murkrow", 32, 198)], "₽1,280"),
            trn("Rocket Executive", "Archer", [pk("Houndour", 35, 228), pk("Koffing", 35, 109), pk("Houndoom", 38, 229)], "₽1,520"),
          ],
          items: [
            item("Basement Key", "From the Director in the Underground"),
            item("Card Key", "From Petrel (disguised as Director)"),
            item("Rainbow Wing", "From the Director after saving the tower (HeartGold)"),
            item("Silver Wing", "From the Director after saving the tower (SoulSilver)"),
            item("Clear Bell", "From the Director after saving the tower (HeartGold)"),
            item("Tidal Bell", "From the Director after saving the tower (SoulSilver)"),
          ],
        },
        {
          name: "Ecruteak Dance Theater -- Kimono Girls",
          description:
            "Return to Ecruteak City. The five Kimono Girls challenge you to battle one at a time. Each uses a different Eeveelution. You must defeat all five to proceed to the Legendary encounter. They are tough -- each is around Level 38. Bring type coverage for all five (Vaporeon, Jolteon, Flareon, Espeon, Umbreon). After winning, they tell you to meet them at the Bell Tower (HeartGold) or Whirl Islands (SoulSilver).",
          trainers: [
            trn("Kimono Girl", "Zuki", [pk("Umbreon", 38, 197)], "₽1,520"),
            trn("Kimono Girl", "Naoko", [pk("Espeon", 38, 196)], "₽1,520"),
            trn("Kimono Girl", "Miki", [pk("Flareon", 38, 136)], "₽1,520"),
            trn("Kimono Girl", "Sayo", [pk("Jolteon", 38, 135)], "₽1,520"),
            trn("Kimono Girl", "Kuni", [pk("Vaporeon", 38, 134)], "₽1,520"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 -- Legendary Encounter, Victory Road, Pokemon League
     * =============================================================== */
    {
      part: 12,
      title: "Legendary Encounter, Victory Road & Pokemon League",
      summary:
        "Encounter Ho-Oh or Lugia as part of the story, traverse Victory Road, and challenge the Elite Four and Champion Lance.",
      locations: [
        {
          name: "Bell Tower (HeartGold) / Whirl Islands (SoulSilver)",
          description:
            "In HeartGold, climb the Bell Tower to encounter Ho-Oh at Level 45. You need the Rainbow Wing and Clear Bell. The Kimono Girls perform a dance to summon it. In SoulSilver, dive into the Whirl Islands (need Surf, Whirlpool, and Strength) to reach Lugia at Level 45. You need the Silver Wing and Tidal Bell. These are mandatory story encounters -- you must catch or defeat them to proceed. Save before the encounter! Bring lots of Ultra Balls and Dusk Balls.",
          items: [
            item("Ho-Oh", "Bell Tower rooftop, Lv. 45 (HeartGold story encounter)"),
            item("Lugia", "Whirl Islands deepest chamber, Lv. 45 (SoulSilver story encounter)"),
          ],
        },
        {
          name: "Route 26, Route 27 & Tohjo Falls",
          description:
            "East of New Bark Town, surf across Route 27 and pass through Tohjo Falls. These routes connect Johto to the Pokemon League. Strong trainers line the path. You need Surf and Waterfall to navigate Tohjo Falls.",
          encounters: [
            enc("Ponyta", 77, ["HG", "SS"], "Grass", "28-32", "20%"),
            enc("Raticate", 20, ["HG", "SS"], "Grass", "28-30", "20%"),
            enc("Arbok", 24, ["HG"], "Grass", "28-30", "15%"),
            enc("Sandslash", 28, ["SS"], "Grass", "28-30", "15%"),
            enc("Doduo", 84, ["HG", "SS"], "Grass", "26-30", "20%"),
            enc("Dodrio", 85, ["HG", "SS"], "Grass", "30-32", "5%"),
            enc("Quagsire", 195, ["HG", "SS"], "Grass", "26-30", "10%"),
          ],
          items: [
            item("TM37 Sandstorm", "Route 27"),
            item("Moon Stone", "Tohjo Falls"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "A cave system with strong trainers and powerful wild Pokemon. You need Surf, Strength, and Rock Smash to navigate. Multiple floors with boulder puzzles. Your rival challenges you at the exit. Make sure your team is at least level 40-45 before entering.",
          encounters: [
            enc("Onix", 95, ["HG", "SS"], "Cave", "32-36", "20%"),
            enc("Golbat", 42, ["HG", "SS"], "Cave", "32-36", "30%"),
            enc("Graveler", 75, ["HG", "SS"], "Cave", "32-36", "20%"),
            enc("Rhyhorn", 111, ["HG", "SS"], "Cave", "32-34", "10%"),
            enc("Ursaring", 217, ["HG", "SS"], "Cave", "34-36", "5%"),
            enc("Donphan", 232, ["HG", "SS"], "Cave", "34-36", "5%"),
            enc("Machoke", 67, ["HG", "SS"], "Cave", "34-36", "10%"),
          ],
          trainers: [
            trn("Rival", "Silver", [pk("Sneasel", 36, 215), pk("Magneton", 35, 82), pk("Golbat", 36, 42), pk("Haunter", 35, 93), pk("Kadabra", 35, 64), pk("Meganium", 38, 154)], "₽2,280"),
            trn("Cooltrainer M", "Grant", [pk("Steelix", 38, 208), pk("Exeggutor", 38, 103)], "₽1,824"),
            trn("Cooltrainer F", "Kelly", [pk("Marowak", 37, 105), pk("Rhydon", 37, 112)], "₽1,776"),
          ],
          items: [
            item("TM26 Earthquake", "Victory Road B1F"),
            item("Max Revive", "Victory Road 2F"),
            item("Full Restore", "Victory Road 3F"),
          ],
        },
        {
          name: "Indigo Plateau -- Pokemon League",
          description:
            "The final challenge! Buy plenty of Full Restores, Revives, and Max Potions. You must defeat all four Elite Four members and Champion Lance in a row without visiting a Pokemon Center. The Elite Four have been powered up from the originals. Lance uses three Dragonite! Recommended level: 45-50.",
          trainers: [
            trn("Elite Four", "Will", [
              pk("Xatu", 40, 178),
              pk("Jynx", 41, 124),
              pk("Exeggutor", 41, 103),
              pk("Slowbro", 41, 80),
              pk("Xatu", 42, 178),
            ], "Psychic specialist -- use Dark, Ghost, Bug"),
            trn("Elite Four", "Koga", [
              pk("Ariados", 40, 168),
              pk("Forretress", 43, 205),
              pk("Muk", 42, 89),
              pk("Venomoth", 41, 49),
              pk("Crobat", 44, 169),
            ], "Poison specialist -- use Ground, Psychic"),
            trn("Elite Four", "Bruno", [
              pk("Hitmontop", 42, 237),
              pk("Hitmonlee", 42, 106),
              pk("Hitmonchan", 42, 107),
              pk("Onix", 43, 95),
              pk("Machamp", 46, 68),
            ], "Fighting specialist -- use Psychic, Flying"),
            trn("Elite Four", "Karen", [
              pk("Umbreon", 42, 197),
              pk("Vileplume", 42, 45),
              pk("Gengar", 45, 94),
              pk("Murkrow", 44, 198),
              pk("Houndoom", 47, 229),
            ], "Dark specialist -- use Fighting, Bug"),
            trn("Champion", "Lance", [
              pk("Gyarados", 46, 130),
              pk("Dragonite", 49, 149),
              pk("Dragonite", 49, 149),
              pk("Dragonite", 50, 149),
              pk("Charizard", 48, 6),
              pk("Aerodactyl", 48, 142),
            ], "Dragon master -- use Ice, Rock, Electric"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 -- Kanto: Vermilion, Cerulean, Saffron (Post-Game)
     * =============================================================== */
    {
      part: 13,
      title: "Kanto: Vermilion, Cerulean & Saffron Gyms",
      summary:
        "Travel to Kanto via the S.S. Aqua, explore the reimagined Kanto region, and earn three Gym Badges.",
      isPostGame: true,
      locations: [
        {
          name: "S.S. Aqua",
          description:
            "After becoming Champion, Professor Elm gives you the S.S. Ticket. Board the S.S. Aqua at Olivine City to travel to Vermilion City in Kanto. Explore the ship and battle trainers. A girl has lost her grandfather -- find him for a Metal Coat reward.",
          items: [
            item("S.S. Ticket", "From Professor Elm after becoming Champion"),
            item("Metal Coat", "From the girl's grandfather on the S.S. Aqua"),
          ],
        },
        {
          name: "Vermilion Gym -- Leader Lt. Surge",
          description:
            "Lt. Surge has upgraded his team with powerful Electric types. The trash-can switch puzzle returns. Ground types are still the best counter. His Raichu and Electrode are fast and hit hard.",
          trainers: [
            trn("Gym Leader", "Lt. Surge", [
              pk("Raichu", 51, 26),
              pk("Electrode", 47, 101),
              pk("Magneton", 47, 82),
              pk("Electrode", 47, 101),
              pk("Electabuzz", 53, 125),
            ], "₽6,360 + TM34 (Shock Wave)"),
          ],
          items: [
            item("Thunder Badge", "Defeat Lt. Surge"),
          ],
        },
        {
          name: "Saffron Gym -- Leader Sabrina",
          description:
            "Sabrina's warp-tile gym returns. Her Psychic-type team is more powerful now. Bug, Ghost, and Dark moves are ideal. Her Alakazam is dangerously fast.",
          trainers: [
            trn("Gym Leader", "Sabrina", [
              pk("Espeon", 53, 196),
              pk("Mr. Mime", 53, 122),
              pk("Alakazam", 55, 65),
            ], "₽6,600 + TM04 (Calm Mind)"),
          ],
          items: [
            item("Marsh Badge", "Defeat Sabrina"),
          ],
        },
        {
          name: "Cerulean Gym -- Leader Misty",
          description:
            "Misty is initially not in her Gym. Find her on Route 25 near the cape. She's on a date -- interrupt her and she'll return to the Gym. Her team features powerful Water types. Grass and Electric types are your best friends. Watch out for her Starmie.",
          trainers: [
            trn("Gym Leader", "Misty", [
              pk("Golduck", 49, 55),
              pk("Quagsire", 49, 195),
              pk("Lapras", 52, 131),
              pk("Starmie", 54, 121),
            ], "₽6,480 + TM03 (Water Pulse)"),
          ],
          items: [
            item("Cascade Badge", "Defeat Misty"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 -- Kanto: Celadon, Fuchsia, Pewter, Cinnabar (Post-Game)
     * =============================================================== */
    {
      part: 14,
      title: "Kanto: Celadon, Fuchsia, Pewter & Cinnabar Gyms",
      summary:
        "Continue exploring Kanto and earn four more Gym Badges.",
      isPostGame: true,
      locations: [
        {
          name: "Celadon Gym -- Leader Erika",
          description:
            "Erika still uses Grass types. Fire, Ice, Poison, and Flying moves are super effective. Her Bellossom and Tangela are bulky. Nothing too threatening if you have a Fire type.",
          trainers: [
            trn("Gym Leader", "Erika", [
              pk("Jumpluff", 51, 189),
              pk("Tangela", 52, 114),
              pk("Victreebel", 56, 71),
              pk("Bellossom", 56, 182),
            ], "₽6,720 + TM19 (Giga Drain)"),
          ],
          items: [
            item("Rainbow Badge", "Defeat Erika"),
          ],
        },
        {
          name: "Fuchsia Gym -- Leader Janine",
          description:
            "Koga's daughter Janine has taken over the Fuchsia Gym. She uses Poison types like her father. The invisible-wall puzzle is back. Psychic and Ground moves are ideal.",
          trainers: [
            trn("Gym Leader", "Janine", [
              pk("Crobat", 47, 169),
              pk("Weezing", 44, 110),
              pk("Ariados", 47, 168),
              pk("Ariados", 47, 168),
              pk("Venomoth", 50, 49),
            ], "₽6,000 + TM06 (Toxic)"),
          ],
          items: [
            item("Soul Badge", "Defeat Janine"),
          ],
        },
        {
          name: "Pewter Gym -- Leader Brock",
          description:
            "Brock uses Rock types with higher levels than before. Water and Grass moves destroy his team. His Onix and Rhyhorn are familiar faces. Kabutops and Omastar add variety to his team.",
          trainers: [
            trn("Gym Leader", "Brock", [
              pk("Graveler", 51, 75),
              pk("Rhyhorn", 51, 111),
              pk("Omastar", 53, 139),
              pk("Onix", 54, 95),
              pk("Kabutops", 52, 141),
            ], "₽6,480 + TM80 (Rock Slide)"),
          ],
          items: [
            item("Boulder Badge", "Defeat Brock"),
          ],
        },
        {
          name: "Cinnabar Island / Seafoam Gym -- Leader Blaine",
          description:
            "Cinnabar Island has been destroyed by a volcanic eruption. Blaine relocated his Gym to the Seafoam Islands. He still uses Fire types. Water, Ground, and Rock moves are super effective. His Magcargo and Rapidash are strong.",
          trainers: [
            trn("Gym Leader", "Blaine", [
              pk("Magcargo", 54, 219),
              pk("Magmar", 54, 126),
              pk("Rapidash", 59, 78),
            ], "₽7,080 + TM50 (Overheat)"),
          ],
          items: [
            item("Volcano Badge", "Defeat Blaine"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 15 -- Viridian Gym (Blue), Safari Zone, Legendary Beasts (Post-Game)
     * =============================================================== */
    {
      part: 15,
      title: "Viridian Gym, Safari Zone & Legendary Beasts",
      summary:
        "Challenge Blue in Viridian City, explore the Safari Zone, and hunt down the roaming legendary beasts.",
      isPostGame: true,
      locations: [
        {
          name: "Viridian Gym -- Leader Blue",
          description:
            "The former Champion Blue is now the Viridian City Gym Leader. He uses a mixed team with no single type weakness -- bring diverse coverage. His Pidgeot, Machamp, and Arcanine are all dangerous. This is one of the toughest Gym battles in the game. Recommended level: 55+.",
          trainers: [
            trn("Gym Leader", "Blue", [
              pk("Exeggutor", 55, 103),
              pk("Machamp", 56, 68),
              pk("Arcanine", 58, 59),
              pk("Rhydon", 58, 112),
              pk("Gyarados", 52, 130),
              pk("Pidgeot", 60, 18),
            ], "₽7,200 + TM92 (Trick Room)"),
          ],
          items: [
            item("Earth Badge", "Defeat Blue"),
            item("TM92 Trick Room", "Defeat Blue"),
          ],
        },
        {
          name: "Safari Zone (Route 48)",
          description:
            "The revamped Safari Zone in Johto is unlocked after becoming Champion. Baoba, the warden, calls you to participate. You can customize areas with different terrain blocks to attract rare Pokemon not found elsewhere in the game. This is the only place to find many rare species including Larvitar, Bagon, Riolu, and Misdreavus. Place blocks and wait real-time days for rarer Pokemon to appear.",
          encounters: [
            enc("Geodude", 74, ["HG", "SS"], "Safari Zone", "15-17", "20%"),
            enc("Magikarp", 129, ["HG", "SS"], "Safari Zone (Fish)", "20-40", "30%"),
            enc("Larvitar", 246, ["HG", "SS"], "Safari Zone (Mountain)", "17-18", "10%"),
            enc("Bagon", 371, ["HG", "SS"], "Safari Zone (Wetland)", "45", "5%"),
            enc("Riolu", 447, ["HG", "SS"], "Safari Zone (Meadow)", "17", "5%"),
            enc("Misdreavus", 200, ["HG", "SS"], "Safari Zone (Forest)", "15-17", "10%"),
          ],
        },
        {
          name: "Legendary Beasts -- Raikou, Entei & Suicune",
          description:
            "The three legendary beasts have been roaming Johto since you awoke them in the Burned Tower. Raikou and Entei randomly roam the grass routes -- track them with your Pokedex map. They flee on the first turn, so use Mean Look or a Pokemon with Arena Trap/Shadow Tag to trap them. A level 40 Pokemon with a fast speed stat helps. Damage carries over between encounters. In HeartGold, Raikou and Entei roam while you encounter Suicune at specific locations before battling it at Route 25 at Level 40. In SoulSilver, you encounter Raikou and Entei roaming while Suicune is battled at the Bell Tower at Level 40.",
          items: [
            item("Raikou", "Roaming Johto (Lv. 40, Electric)"),
            item("Entei", "Roaming Johto (Lv. 40, Fire)"),
            item("Suicune", "Route 25 (HG) or Bell Tower (SS) (Lv. 40, Water)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 16 -- Mt. Silver: Red Battle (Post-Game)
     * =============================================================== */
    {
      part: 16,
      title: "Mt. Silver -- The Ultimate Challenge",
      summary:
        "Collect all 16 Kanto and Johto Badges to unlock Mt. Silver and face the legendary trainer Red.",
      isPostGame: true,
      locations: [
        {
          name: "Mt. Silver",
          description:
            "Once you have all 16 Badges, Professor Oak grants you access to Mt. Silver via Route 28 west of Victory Road. This is the highest-level area in the game with wild Pokemon up to level 50. Navigate through the cave and climb to the summit. The wild Pokemon here are extremely strong -- stock up on Max Repels if you just want to reach the top.",
          encounters: [
            enc("Golbat", 42, ["HG", "SS"], "Cave", "42-46", "20%"),
            enc("Graveler", 75, ["HG", "SS"], "Cave", "42-46", "10%"),
            enc("Onix", 95, ["HG", "SS"], "Cave", "42-46", "10%"),
            enc("Golduck", 55, ["HG", "SS"], "Cave", "42-44", "10%"),
            enc("Machoke", 67, ["HG", "SS"], "Cave", "42-44", "10%"),
            enc("Ursaring", 217, ["HG", "SS"], "Grass", "42-46", "10%"),
            enc("Donphan", 232, ["HG", "SS"], "Grass", "42-46", "10%"),
            enc("Larvitar", 246, ["HG", "SS"], "Grass", "20", "5%"),
            enc("Pupitar", 247, ["HG", "SS"], "Grass", "46-50", "5%"),
            enc("Misdreavus", 200, ["HG", "SS"], "Grass (Night)", "42-44", "10%"),
            enc("Sneasel", 215, ["HG", "SS"], "Grass (Night)", "42-44", "10%"),
            enc("Quagsire", 195, ["HG", "SS"], "Surfing", "35-40", "30%"),
          ],
          items: [
            item("TM36 Sludge Bomb", "Mt. Silver exterior"),
            item("Ultra Ball", "Mt. Silver interior"),
            item("Max Elixir", "Mt. Silver peak"),
            item("Expert Belt", "Mt. Silver exterior"),
          ],
        },
        {
          name: "Mt. Silver Summit -- Trainer Red",
          description:
            "At the very top of Mt. Silver stands Red, the protagonist from the original Red/Blue/Yellow games. He says nothing -- just challenges you to battle. His team is the highest-leveled in the game, led by a Level 88 Pikachu. This is the ultimate challenge. Bring your strongest team at level 70-80 minimum. Ice types handle his Venusaur and use Ground for Pikachu. After defeating him, he vanishes. Roll credits -- you've truly completed HeartGold and SoulSilver!",
          trainers: [
            trn("Pokemon Trainer", "Red", [
              pk("Pikachu", 88, 25),
              pk("Lapras", 80, 131),
              pk("Snorlax", 82, 143),
              pk("Venusaur", 84, 3),
              pk("Charizard", 84, 6),
              pk("Blastoise", 84, 9),
            ], "The ultimate battle -- no single weakness"),
          ],
        },
      ],
    },
  ],
};
