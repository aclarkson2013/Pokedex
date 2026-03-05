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

export const GOLD_SILVER_WALKTHROUGH: GameWalkthrough = {
  slug: "gold-silver",
  gameLabel: "Gold & Silver",
  versionTags: ["G", "S"],
  parts: [
    /* ===============================================================
     *  PART 1 — New Bark Town
     * =============================================================== */
    {
      part: 1,
      title: "New Bark Town — A New Journey Begins",
      summary:
        "Choose your starter Pokemon from Professor Elm and set out on your journey.",
      locations: [
        {
          name: "New Bark Town",
          description:
            "Your adventure starts in New Bark Town. Head to Professor Elm's lab to receive your first Pokemon. Choose between Chikorita (Grass), Cyndaquil (Fire), or Totodile (Water). Cyndaquil is generally the easiest pick for the early game due to its advantage against the first two gyms' weaknesses. Professor Elm asks you to visit Mr. Pokemon on Route 30 to pick up a mysterious discovery. Before leaving, talk to your mom who will save your money for you throughout the journey.",
          items: [
            item("Starter Pokemon", "Choose from Chikorita, Cyndaquil, or Totodile at Elm's lab"),
            item("Potion", "From your PC at home"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Route 29, Cherrygrove, Route 30, Mr. Pokemon, Rival
     * =============================================================== */
    {
      part: 2,
      title: "Route 29, Cherrygrove City & Mr. Pokemon",
      summary:
        "Travel to Cherrygrove City, visit Mr. Pokemon on Route 30, receive the Mystery Egg, and battle your rival.",
      locations: [
        {
          name: "Route 29",
          description:
            "Head west from New Bark Town. The route is straightforward with low-level wild Pokemon. You cannot catch anything yet since you have no Poke Balls. A man near the entrance to Cherrygrove will explain the basics of the map.",
          encounters: [
            enc("Pidgey", 16, ["G", "S"], "Grass", "2-4", "45%"),
            enc("Sentret", 161, ["G", "S"], "Grass", "2-4", "45%"),
            enc("Hoothoot", 163, ["G", "S"], "Grass", "2-3", "10%"),
          ],
        },
        {
          name: "Cherrygrove City",
          description:
            "An old man gives you a tour of the town, showing you the Pokemon Center, Poke Mart, and the sea. After the tour he gives you the Map Card for your PokeGear. Heal up at the Pokemon Center and continue north to Route 30.",
          items: [
            item("Map Card", "From the Guide Gent after his tour"),
          ],
        },
        {
          name: "Route 30",
          description:
            "Head north from Cherrygrove City. A man in the first house will give you a Berry. Continue north to find Mr. Pokemon's house at the end of the route.",
          encounters: [
            enc("Pidgey", 16, ["G", "S"], "Grass", "3-5", "40%"),
            enc("Caterpie", 10, ["G"], "Grass", "3-5", "20%"),
            enc("Weedle", 13, ["S"], "Grass", "3-5", "20%"),
            enc("Ledyba", 165, ["S"], "Grass", "3-5", "10%"),
            enc("Spinarak", 167, ["G"], "Grass", "3-5", "10%"),
            enc("Poliwag", 60, ["G", "S"], "Grass", "3-5", "10%"),
            enc("Hoothoot", 163, ["G", "S"], "Grass", "3-4", "10%"),
          ],
          items: [
            item("Berry", "From man in first house"),
          ],
        },
        {
          name: "Mr. Pokemon's House",
          description:
            "Mr. Pokemon gives you the Mystery Egg to deliver to Professor Elm. Professor Oak is also here and gives you the Pokedex. When you leave, Elm calls you urgently — someone has stolen a Pokemon from his lab! Head back to Cherrygrove City. Your rival will ambush you on the way back.",
          items: [
            item("Mystery Egg", "From Mr. Pokemon"),
            item("Pokedex", "From Professor Oak"),
          ],
        },
        {
          name: "Rival Battle — Cherrygrove City",
          description:
            "On your way back through Cherrygrove, your rival challenges you. He stole the starter Pokemon that is strong against yours. After the battle a police officer asks for his name — whatever you named your rival. Return to New Bark Town and deliver the Mystery Egg to Professor Elm. He gives you Poke Balls so you can start catching Pokemon.",
          trainers: [
            trn("Rival", "???", [
              pk("Chikorita", 5, 152),
            ], "₽300 (if your starter is Totodile)"),
          ],
          items: [
            item("Poke Balls x5", "From Prof. Elm's assistant after delivering the Egg"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Route 31, Violet City, Sprout Tower, Falkner
     * =============================================================== */
    {
      part: 3,
      title: "Violet City, Sprout Tower & Falkner",
      summary:
        "Reach Violet City, train in Sprout Tower, and earn the Zephyr Badge from Falkner.",
      locations: [
        {
          name: "Route 31",
          description:
            "Head west from Cherrygrove again, then north through the gatehouse to Route 31. The Dark Cave entrance is here but you need Flash to navigate it. Continue west to Violet City. You can catch Bellsprout and Gastly (at night) along the way.",
          encounters: [
            enc("Pidgey", 16, ["G", "S"], "Grass", "4-6", "35%"),
            enc("Caterpie", 10, ["G"], "Grass", "4-6", "20%"),
            enc("Weedle", 13, ["S"], "Grass", "4-6", "20%"),
            enc("Bellsprout", 69, ["G", "S"], "Grass", "4-6", "20%"),
            enc("Poliwag", 60, ["G", "S"], "Grass", "4-6", "10%"),
            enc("Gastly", 92, ["G", "S"], "Grass", "4-6", "10%"),
          ],
          items: [
            item("Poke Ball", "Hidden in grass area"),
          ],
        },
        {
          name: "Violet City",
          description:
            "The first gym city. Heal up at the Pokemon Center. Talk to the man at the Pokemon Academy to learn about status effects. The Sprout Tower is in the north of town — train there before challenging the gym.",
          items: [
            item("HM05 Flash", "From Sage in Sprout Tower (after Zephyr Badge, Bellsprout Tower elder)"),
          ],
        },
        {
          name: "Sprout Tower",
          description:
            "A tall pagoda filled with monks (Sages) who train Bellsprout. Work your way up to the top floor battling Sages. Your rival is here and has already beaten the Elder. The Elder gives you HM05 Flash after you defeat him. This is excellent training before the gym. Gastly can be found here at night.",
          encounters: [
            enc("Rattata", 19, ["G", "S"], "Building", "3-6", "80%"),
            enc("Gastly", 92, ["G", "S"], "Building", "3-6", "20%"),
          ],
          trainers: [
            trn("Sage", "Nico", [pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69)], "₽96"),
            trn("Sage", "Chow", [pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69)], "₽96"),
            trn("Sage", "Edmond", [pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69), pk("Bellsprout", 3, 69)], "₽96"),
            trn("Sage", "Jin", [pk("Bellsprout", 6, 69)], "₽192"),
            trn("Sage", "Neal", [pk("Bellsprout", 6, 69)], "₽192"),
            trn("Sage", "Troy", [pk("Bellsprout", 7, 69), pk("Hoothoot", 7, 163)], "₽224"),
            trn("Elder", "Li", [pk("Bellsprout", 7, 69), pk("Bellsprout", 7, 69), pk("Hoothoot", 10, 163)], "₽3,200"),
          ],
          items: [
            item("Parlyz Heal", "Second floor"),
            item("Escape Rope", "Second floor"),
            item("Potion", "Third floor"),
          ],
        },
        {
          name: "Violet Gym — Leader Falkner",
          description:
            "Falkner uses Flying-type Pokemon. Electric and Rock moves are super effective. His Pidgeotto knows Mud-Slap which lowers accuracy — bring extra Potions. If you picked Cyndaquil, level it to at least 12-14. Chikorita has a tough time here — consider using a Geodude from Dark Cave or a Mareep from Route 32.",
          trainers: [
            trn("Bird Keeper", "Abe", [pk("Spearow", 9, 21)], "₽216"),
            trn("Bird Keeper", "Rod", [pk("Pidgey", 7, 16), pk("Pidgey", 7, 16)], "₽168"),
            trn("Gym Leader", "Falkner", [pk("Pidgey", 7, 16), pk("Pidgeotto", 9, 17)], "₽900 + TM31 (Mud-Slap)"),
          ],
          items: [
            item("Zephyr Badge", "Defeat Falkner — allows use of Flash outside battle"),
            item("TM31 Mud-Slap", "Defeat Falkner"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 — Route 32-33, Union Cave, Azalea Town, Slowpoke Well, Bugsy
     * =============================================================== */
    {
      part: 4,
      title: "Union Cave, Azalea Town & Bugsy",
      summary:
        "Travel through Route 32 and Union Cave, clear Team Rocket from Slowpoke Well, and earn the Hive Badge.",
      locations: [
        {
          name: "Route 32",
          description:
            "Head south from Violet City. This is a long route with many trainers. A man in the Pokemon Center along the way gives you the Old Rod. Mareep is found here — an excellent Electric-type for your team. Fish with the Old Rod for Tentacool. The Ruins of Alph are accessible from this route if you want to catch Unown.",
          encounters: [
            enc("Mareep", 179, ["G", "S"], "Grass", "6-8", "30%"),
            enc("Hoppip", 187, ["G", "S"], "Grass", "6-8", "20%"),
            enc("Bellsprout", 69, ["G", "S"], "Grass", "6-8", "20%"),
            enc("Pidgey", 16, ["G", "S"], "Grass", "4-7", "15%"),
            enc("Ekans", 23, ["G"], "Grass", "4-7", "10%"),
            enc("Wooper", 194, ["G", "S"], "Grass", "4-6", "5%"),
            enc("Tentacool", 72, ["G", "S"], "Old Rod", "10", "85%"),
          ],
          items: [
            item("Old Rod", "From fisherman in the Route 32 Pokemon Center"),
            item("TM05 Roar", "From man on the route"),
            item("Repel", "Hidden along the path"),
          ],
        },
        {
          name: "Union Cave",
          description:
            "A cave connecting Routes 32 and 33. Bring Repels if Zubat annoy you. The lower floors require Surf to access later. Geodude and Onix are available here — great for building your team. Watch for Hikers with strong Rock-types.",
          encounters: [
            enc("Zubat", 41, ["G", "S"], "Cave", "6-8", "40%"),
            enc("Geodude", 74, ["G", "S"], "Cave", "6-8", "30%"),
            enc("Sandshrew", 27, ["G", "S"], "Cave", "6-8", "20%"),
            enc("Onix", 95, ["G", "S"], "Cave", "6-8", "10%"),
          ],
          trainers: [
            trn("Hiker", "Daniel", [pk("Onix", 11, 95)], "₽352"),
            trn("Hiker", "Russell", [pk("Geodude", 4, 74), pk("Geodude", 6, 74), pk("Geodude", 8, 74)], "₽256"),
            trn("Firebreather", "Bill", [pk("Koffing", 6, 109), pk("Koffing", 6, 109)], "₽192"),
            trn("Pokemaniac", "Larry", [pk("Slowpoke", 10, 79)], "₽480"),
          ],
          items: [
            item("X Attack", "1F near Hiker"),
            item("Great Ball", "B1F"),
            item("Potion", "Near north entrance"),
          ],
        },
        {
          name: "Route 33",
          description:
            "A short rainy route connecting Union Cave to Azalea Town. A single Hiker stands guard.",
          encounters: [
            enc("Hoppip", 187, ["G", "S"], "Grass", "6-8", "50%"),
            enc("Rattata", 19, ["G", "S"], "Grass", "6-8", "30%"),
            enc("Ekans", 23, ["G"], "Grass", "6-7", "10%"),
            enc("Geodude", 74, ["G", "S"], "Grass", "6-7", "10%"),
          ],
          trainers: [
            trn("Hiker", "Anthony", [pk("Geodude", 11, 74), pk("Machop", 11, 66)], "₽352"),
          ],
        },
        {
          name: "Azalea Town & Slowpoke Well",
          description:
            "Team Rocket has taken over the town and is cutting off Slowpoke tails to sell. Enter Slowpoke Well in the northwest corner and defeat the Rocket Grunts inside. Their leader, Executive Proton, is at the bottom. After clearing them out, Kurt the Poke Ball maker thanks you and offers to make custom Poke Balls from Apricorns. Talk to him to get a Lure Ball.",
          encounters: [
            enc("Slowpoke", 79, ["G", "S"], "Cave", "5-7", "85%"),
            enc("Zubat", 41, ["G", "S"], "Cave", "5-7", "15%"),
          ],
          trainers: [
            trn("Team Rocket Grunt", "Grunt", [pk("Rattata", 7, 19), pk("Rattata", 9, 19)], "₽360"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 9, 41), pk("Ekans", 11, 23)], "₽440"),
            trn("Team Rocket Grunt", "Grunt", [pk("Rattata", 7, 19), pk("Zubat", 9, 41), pk("Zubat", 9, 41)], "₽360"),
            trn("Rocket Executive", "Proton", [pk("Zubat", 8, 41), pk("Koffing", 12, 109)], "₽480"),
          ],
          items: [
            item("Lure Ball", "From Kurt after rescuing the Slowpoke"),
            item("Super Potion", "Slowpoke Well B1F"),
          ],
        },
        {
          name: "Azalea Gym — Leader Bugsy",
          description:
            "Bugsy uses Bug-type Pokemon. Fire, Flying, and Rock moves are super effective. His Scyther is the biggest threat with high Attack and Fury Cutter, which doubles in power with each consecutive hit. Geodude or Cyndaquil's line handles this gym well. Totodile users should bring a Flying-type like Pidgeotto.",
          trainers: [
            trn("Bug Catcher", "Benny", [pk("Weedle", 7, 13), pk("Kakuna", 9, 14), pk("Beedrill", 12, 15)], "₽144"),
            trn("Bug Catcher", "Al", [pk("Caterpie", 10, 10), pk("Metapod", 10, 11)], "₽120"),
            trn("Twins", "Amy & May", [pk("Spinarak", 10, 167), pk("Ledyba", 10, 165)], "₽320"),
            trn("Gym Leader", "Bugsy", [pk("Metapod", 14, 11), pk("Kakuna", 14, 14), pk("Scyther", 16, 123)], "₽1,600 + TM49 (Fury Cutter)"),
          ],
          items: [
            item("Hive Badge", "Defeat Bugsy — allows use of Cut outside battle"),
            item("TM49 Fury Cutter", "Defeat Bugsy"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 — Ilex Forest, Route 34, Goldenrod City, Whitney
     * =============================================================== */
    {
      part: 5,
      title: "Ilex Forest, Goldenrod City & Whitney",
      summary:
        "Navigate Ilex Forest, reach the sprawling Goldenrod City, and earn the Plain Badge from Whitney.",
      locations: [
        {
          name: "Ilex Forest",
          description:
            "A dense forest west of Azalea Town. A man near the entrance has lost his Farfetch'd — help him by cornering it using the stepping mechanic (approach it from the right direction to herd it back). He gives you HM01 Cut as thanks. The Ilex Forest shrine is here — it has a connection to the legendary Celebi. Use Cut to proceed through the forest to Route 34.",
          encounters: [
            enc("Caterpie", 10, ["G", "S"], "Grass", "5-7", "30%"),
            enc("Weedle", 13, ["G", "S"], "Grass", "5-7", "20%"),
            enc("Pidgey", 16, ["G", "S"], "Grass", "5-7", "15%"),
            enc("Paras", 46, ["G", "S"], "Grass", "5-7", "15%"),
            enc("Oddish", 43, ["G", "S"], "Grass", "5-7", "10%"),
            enc("Zubat", 41, ["G", "S"], "Grass", "5-7", "10%"),
          ],
          trainers: [
            trn("Bug Catcher", "Wayne", [pk("Ledyba", 8, 165), pk("Paras", 10, 46)], "₽120"),
          ],
          items: [
            item("HM01 Cut", "From the charcoal maker's apprentice after returning Farfetch'd"),
            item("Revive", "Hidden in the forest"),
            item("TM02 Headbutt", "From man near exit (use on trees to find Pokemon)"),
          ],
        },
        {
          name: "Route 34",
          description:
            "A route heading north to Goldenrod City. The Day Care is here — leave two compatible Pokemon to breed Eggs. Several trainers along the way. A police officer stands near the Goldenrod gate. Drowzee and Abra can be caught here.",
          encounters: [
            enc("Drowzee", 96, ["G", "S"], "Grass", "10-12", "30%"),
            enc("Abra", 63, ["G", "S"], "Grass", "10-12", "20%"),
            enc("Ditto", 132, ["G", "S"], "Grass", "10-12", "10%"),
            enc("Pidgey", 16, ["G", "S"], "Grass", "10-12", "20%"),
            enc("Rattata", 19, ["G", "S"], "Grass", "10-12", "10%"),
            enc("Jigglypuff", 39, ["G", "S"], "Grass", "10-12", "5%"),
          ],
          trainers: [
            trn("Youngster", "Samuel", [pk("Rattata", 7, 19), pk("Sandshrew", 10, 27), pk("Spearow", 8, 21), pk("Spearow", 8, 21)], "₽160"),
            trn("Pokefan", "Brandon", [pk("Snubbull", 13, 209)], "₽1,040"),
            trn("Picnicker", "Gina", [pk("Hoppip", 9, 187), pk("Hoppip", 9, 187), pk("Bulbasaur", 12, 1)], "₽192"),
            trn("Camper", "Todd", [pk("Psyduck", 14, 54)], "₽280"),
          ],
          items: [
            item("Nugget", "Hidden in the grassy area near the Day Care"),
          ],
        },
        {
          name: "Goldenrod City",
          description:
            "The largest city in Johto, full of activities. The Department Store has everything you need. Visit the Goldenrod Game Corner to win prizes. The Name Rater is here to change your Pokemon's nicknames. The Bike Shop will give you a Bicycle for free! The Radio Tower lets you get a Radio Card for your PokeGear by answering a quiz. Bill is at his house — talk to him to unlock the Time Capsule for trading with Generation I games.",
          items: [
            item("Bicycle", "Free from the Bike Shop"),
            item("Radio Card", "From the Radio Tower quiz"),
            item("Coin Case", "From the man in the underground tunnel"),
            item("Blue Card", "From Buena at the Radio Tower (for Blue Card point system)"),
          ],
        },
        {
          name: "Goldenrod Gym — Leader Whitney",
          description:
            "Whitney uses Normal-type Pokemon. Fighting moves are super effective. Her Miltank is infamously difficult — it knows Rollout (doubles damage each turn), Attract (infatuates male Pokemon), Stomp, and Milk Drink for healing. Counter strategies: use a female Pokemon to avoid Attract, use Geodude (immune to Rollout as Rock-type), or Machop from the Department Store trade. After winning, Whitney cries and refuses to give you the badge — talk to her again after a moment and she hands it over.",
          trainers: [
            trn("Lass", "Carrie", [pk("Snubbull", 18, 209)], "₽288"),
            trn("Beauty", "Victoria", [pk("Sentret", 9, 161), pk("Sentret", 13, 161), pk("Sentret", 17, 161)], "₽1,224"),
            trn("Beauty", "Samantha", [pk("Meowth", 16, 52), pk("Meowth", 16, 52)], "₽1,152"),
            trn("Lass", "Bridget", [pk("Jigglypuff", 15, 39), pk("Jigglypuff", 15, 39), pk("Jigglypuff", 15, 39)], "₽240"),
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
     *  PART 6 — National Park, Ecruteak City, Morty, Burned Tower
     * =============================================================== */
    {
      part: 6,
      title: "National Park, Ecruteak City & Morty",
      summary:
        "Enter the Bug Catching Contest, explore the Burned Tower to awaken the legendary beasts, and earn the Fog Badge.",
      locations: [
        {
          name: "Route 35",
          description:
            "Head north from Goldenrod City. Several trainers along the way. The National Park is at the end of this route.",
          encounters: [
            enc("Nidoran♀", 29, ["G", "S"], "Grass", "12-14", "30%"),
            enc("Nidoran♂", 32, ["G", "S"], "Grass", "12-14", "30%"),
            enc("Drowzee", 96, ["G", "S"], "Grass", "12-14", "20%"),
            enc("Pidgey", 16, ["G", "S"], "Grass", "12-14", "10%"),
            enc("Ditto", 132, ["G", "S"], "Grass", "10-12", "10%"),
          ],
          trainers: [
            trn("Bug Catcher", "Arnie", [pk("Venonat", 15, 48)], "₽180"),
            trn("Camper", "Ivan", [pk("Diglett", 10, 50), pk("Zubat", 12, 41), pk("Diglett", 14, 50)], "₽280"),
            trn("Picnicker", "Kim", [pk("Vulpix", 15, 37)], "₽300"),
            trn("Juggler", "Irwin", [pk("Voltorb", 2, 100), pk("Voltorb", 6, 100), pk("Voltorb", 10, 100), pk("Voltorb", 14, 100)], "₽560"),
          ],
        },
        {
          name: "National Park",
          description:
            "A beautiful park north of Goldenrod. On Tuesdays, Thursdays, and Saturdays, the Bug Catching Contest is held — you get 20 Sport Balls and 20 minutes to catch the best Bug-type Pokemon. Prizes include Sun Stone, Everstone, and more. Scyther and Pinsir are the top catches. Outside of the contest, the park has trainers and items.",
          encounters: [
            enc("Caterpie", 10, ["G", "S"], "Grass", "10-13", "25%"),
            enc("Weedle", 13, ["G", "S"], "Grass", "10-13", "25%"),
            enc("Scyther", 123, ["G", "S"], "Grass", "13-14", "5%"),
            enc("Pinsir", 127, ["G", "S"], "Grass", "13-14", "5%"),
            enc("Butterfree", 12, ["G", "S"], "Grass", "12-14", "5%"),
            enc("Beedrill", 15, ["G", "S"], "Grass", "12-14", "5%"),
          ],
          items: [
            item("Sun Stone", "First prize in Bug Catching Contest"),
            item("Parlyz Heal", "Hidden in park"),
            item("TM28 Dig", "From girl in the park"),
          ],
        },
        {
          name: "Route 36 & Route 37",
          description:
            "Route 36 has a strange tree blocking the path — it is actually a Sudowoodo (use the SquirtBottle from the Goldenrod Flower Shop after getting the Plain Badge). After removing Sudowoodo, continue east. Route 37 leads north to Ecruteak City through trainers and tall grass.",
          encounters: [
            enc("Stantler", 234, ["G", "S"], "Grass", "13-15", "25%"),
            enc("Pidgey", 16, ["G", "S"], "Grass", "13-15", "20%"),
            enc("Pidgeotto", 17, ["G", "S"], "Grass", "15", "5%"),
            enc("Growlithe", 58, ["G"], "Grass", "13-15", "20%"),
            enc("Vulpix", 37, ["S"], "Grass", "13-15", "20%"),
            enc("Hoothoot", 163, ["G", "S"], "Grass", "13-14", "15%"),
          ],
          items: [
            item("SquirtBottle", "From Goldenrod Flower Shop after getting Plain Badge"),
            item("TM08 Rock Smash", "From man on Route 36"),
          ],
        },
        {
          name: "Ecruteak City & Burned Tower",
          description:
            "A historic city with two towers. The Burned Tower is in the northwest — explore it to meet your rival and encounter the three legendary beasts: Raikou, Entei, and Suicune. They flee when you approach, and after this event, Raikou and Entei begin roaming Johto. Suicune will appear at specific locations throughout your journey. The Kimono Girls in the dance theater each use an Eeveelution. Defeat all five to receive HM03 Surf.",
          encounters: [
            enc("Rattata", 19, ["G", "S"], "Building", "13-16", "50%"),
            enc("Koffing", 109, ["G", "S"], "Building", "13-16", "30%"),
            enc("Zubat", 41, ["G", "S"], "Building", "13-16", "15%"),
            enc("Magmar", 126, ["G", "S"], "Building", "15-16", "5%"),
          ],
          trainers: [
            trn("Rival", "???", [
              pk("Haunter", 20, 93),
              pk("Magnemite", 18, 81),
              pk("Zubat", 20, 41),
              pk("Bayleef", 22, 153),
            ], "₽1,320"),
            trn("Sage", "Ping", [pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92), pk("Gastly", 16, 92)], "₽512"),
          ],
          items: [
            item("HM03 Surf", "From the Kimono Girl theater (after defeating all five)"),
            item("Itemfinder", "From house near Burned Tower"),
          ],
        },
        {
          name: "Ecruteak Gym — Leader Morty",
          description:
            "Morty specializes in Ghost-type Pokemon. Normal and Fighting moves do not affect Ghost types. Use Dark, Ghost, or Psychic moves. His Gengar is dangerous with Shadow Ball and Hypnosis. A Pokemon with the Insomnia ability or one holding an Awakening is helpful. The gym has an invisible floor puzzle — follow the path carefully by watching for faint platforms.",
          trainers: [
            trn("Medium", "Martha", [pk("Gastly", 18, 92), pk("Haunter", 20, 93)], "₽640"),
            trn("Medium", "Grace", [pk("Gastly", 20, 92), pk("Haunter", 20, 93)], "₽640"),
            trn("Sage", "Jeffrey", [pk("Haunter", 22, 93)], "₽704"),
            trn("Medium", "Edith", [pk("Gastly", 20, 92), pk("Gastly", 20, 92), pk("Haunter", 20, 93)], "₽640"),
            trn("Gym Leader", "Morty", [pk("Gastly", 21, 92), pk("Haunter", 21, 93), pk("Gengar", 25, 94), pk("Haunter", 23, 93)], "₽2,500 + TM30 (Shadow Ball)"),
          ],
          items: [
            item("Fog Badge", "Defeat Morty — allows use of Surf outside battle"),
            item("TM30 Shadow Ball", "Defeat Morty"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Olivine, Lighthouse, Cianwood, Chuck
     * =============================================================== */
    {
      part: 7,
      title: "Olivine City, Lighthouse & Cianwood Gym",
      summary:
        "Discover the sick Amphy in the Lighthouse, surf to Cianwood City, and earn the Storm Badge from Chuck.",
      locations: [
        {
          name: "Route 38 & Route 39",
          description:
            "Head west from Ecruteak City through Routes 38 and 39 to reach Olivine City. Miltank Farm is on Route 39 — buy MooMoo Milk for cheap healing. Several trainers line the routes. Tauros and Miltank can be found in the grass here.",
          encounters: [
            enc("Rattata", 19, ["G", "S"], "Grass", "13-16", "25%"),
            enc("Raticate", 20, ["G", "S"], "Grass", "15-16", "5%"),
            enc("Meowth", 52, ["S"], "Grass", "13-16", "20%"),
            enc("Mankey", 56, ["G"], "Grass", "13-16", "20%"),
            enc("Magnemite", 81, ["G", "S"], "Grass", "13-16", "20%"),
            enc("Pidgeotto", 17, ["G", "S"], "Grass", "15-16", "10%"),
            enc("Tauros", 128, ["G", "S"], "Grass", "13-15", "5%"),
            enc("Miltank", 241, ["G", "S"], "Grass", "13-15", "5%"),
          ],
          trainers: [
            trn("Lass", "Dana", [pk("Flaaffy", 19, 180), pk("Psyduck", 19, 54)], "₽304"),
            trn("Sailor", "Eugene", [pk("Poliwhirl", 17, 61), pk("Raticate", 17, 20), pk("Krabby", 19, 98)], "₽680"),
            trn("Pokefan", "Derek", [pk("Pikachu", 17, 25)], "₽1,360"),
          ],
          items: [
            item("MooMoo Milk", "Buy from Miltank Farm on Route 39"),
            item("TM13 Snore", "From man on Route 39"),
          ],
        },
        {
          name: "Olivine City & Lighthouse",
          description:
            "Olivine City has a Gym, but the Leader Jasmine is not available yet. She is tending to a sick Amphy (a Ampharos) at the top of the Olivine Lighthouse. Climb the six-floor lighthouse to find Jasmine. She asks you to get SecretPotion from the pharmacy in Cianwood City across the sea. Use Surf to head south across Routes 40 and 41 to Cianwood.",
          encounters: [
            enc("Tentacool", 72, ["G", "S"], "Surfing", "20-24", "90%"),
            enc("Tentacruel", 73, ["G", "S"], "Surfing", "24", "10%"),
          ],
          trainers: [
            trn("Sailor", "Huey", [pk("Poliwag", 18, 60), pk("Poliwhirl", 18, 61)], "₽720"),
            trn("Gentleman", "Alfred", [pk("Noctowl", 22, 164)], "₽1,584"),
            trn("Lass", "Connie", [pk("Marill", 19, 183)], "₽304"),
          ],
          items: [
            item("Rare Candy", "Top of the Lighthouse"),
            item("Ether", "Lighthouse 3F"),
            item("Super Potion", "Lighthouse 5F"),
          ],
        },
        {
          name: "Route 40 & Route 41",
          description:
            "Surf south from Olivine to reach Cianwood. Many swimmers challenge you along the way. The Whirl Islands are visible but you need Whirlpool to enter (and later, this is where you find Lugia). Mantine and Chinchou can be encountered in the water.",
          encounters: [
            enc("Tentacool", 72, ["G", "S"], "Surfing", "15-24", "90%"),
            enc("Tentacruel", 73, ["G", "S"], "Surfing", "20-24", "10%"),
            enc("Chinchou", 170, ["G", "S"], "Good Rod", "20", "60%"),
            enc("Mantine", 226, ["G"], "Surfing", "15-25", "5%"),
          ],
          trainers: [
            trn("Swimmer", "Simon", [pk("Tentacool", 20, 72), pk("Tentacruel", 22, 73)], "₽352"),
            trn("Swimmer", "Elaine", [pk("Staryu", 21, 120)], "₽336"),
            trn("Swimmer", "Randall", [pk("Shellder", 18, 90), pk("Wartortle", 20, 8), pk("Shellder", 20, 90)], "₽320"),
          ],
        },
        {
          name: "Cianwood City",
          description:
            "A remote city on the western coast. Pick up the SecretPotion from the pharmacy to bring back to Jasmine. The photo studio lets you take pictures. Chuck's wife stands outside the gym and gives you HM02 Fly after you beat Chuck — essential for fast travel!",
          items: [
            item("SecretPotion", "From the Cianwood Pharmacy"),
            item("HM02 Fly", "From Chuck's wife outside the gym after defeating Chuck"),
          ],
        },
        {
          name: "Cianwood Gym — Leader Chuck",
          description:
            "Chuck uses Fighting-type Pokemon. Psychic and Flying moves are super effective. His Poliwrath knows Hypnosis and DynamicPunch (always confuses if it hits). A Drowzee or Kadabra with Psychic moves will sweep this gym. If your team lacks these types, Pidgeotto's Flying moves work well. The waterfall inside the gym is part of the puzzle — you need to step under it.",
          trainers: [
            trn("Blackbelt", "Yoshi", [pk("Hitmonlee", 27, 106)], "₽648"),
            trn("Blackbelt", "Lao", [pk("Hitmonchan", 27, 107)], "₽648"),
            trn("Blackbelt", "Nob", [pk("Machop", 25, 66), pk("Machoke", 25, 67)], "₽600"),
            trn("Blackbelt", "Lung", [pk("Mankey", 23, 56), pk("Mankey", 23, 56), pk("Primeape", 25, 57)], "₽600"),
            trn("Gym Leader", "Chuck", [pk("Primeape", 27, 57), pk("Poliwrath", 30, 62)], "₽3,000 + TM01 (DynamicPunch)"),
          ],
          items: [
            item("Storm Badge", "Defeat Chuck — allows use of Fly outside battle"),
            item("TM01 DynamicPunch", "Defeat Chuck"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Olivine Gym, Mahogany, Lake of Rage, Rocket Hideout
     * =============================================================== */
    {
      part: 8,
      title: "Olivine Gym, Lake of Rage & Rocket Hideout",
      summary:
        "Cure Amphy, earn the Mineral Badge from Jasmine, investigate the Red Gyarados, and infiltrate the Rocket Hideout.",
      locations: [
        {
          name: "Olivine Gym — Leader Jasmine",
          description:
            "Fly back to Olivine City and deliver the SecretPotion to Jasmine at the Lighthouse. Amphy is cured and Jasmine returns to her gym. She uses Steel-type Pokemon — Fire, Ground, and Fighting moves are super effective. Her two Magnemite are easy but Steelix is bulky and hits hard. Ground moves (Dig, Earthquake) are ideal.",
          trainers: [
            trn("Gym Leader", "Jasmine", [pk("Magnemite", 30, 81), pk("Magnemite", 30, 81), pk("Steelix", 35, 208)], "₽3,500 + TM23 (Iron Tail)"),
          ],
          items: [
            item("Mineral Badge", "Defeat Jasmine — allows use of Strength outside battle"),
            item("TM23 Iron Tail", "Defeat Jasmine"),
          ],
        },
        {
          name: "Route 42 & Mahogany Town",
          description:
            "Fly to Ecruteak City and head east through Route 42 to Mahogany Town. Mt. Mortar is along the way but is optional. The entrance to the cave has Suicune watching from a distance (it runs again). Mahogany Town seems quiet but a suspicious shop has a hidden entrance to the Team Rocket HQ.",
          encounters: [
            enc("Spearow", 21, ["G", "S"], "Grass", "13-17", "30%"),
            enc("Mareep", 179, ["G", "S"], "Grass", "13-15", "20%"),
            enc("Mankey", 56, ["G"], "Grass", "13-17", "20%"),
            enc("Flaaffy", 180, ["G", "S"], "Grass", "15-17", "10%"),
            enc("Goldeen", 118, ["G", "S"], "Surfing", "15-24", "60%"),
          ],
        },
        {
          name: "Route 43 & Lake of Rage",
          description:
            "Head north from Mahogany Town through Route 43 to the Lake of Rage. Team Rocket grunts block the regular path and try to charge a toll — you can take the longer grassy route to avoid them. At the lake, a Red Gyarados (a shiny Gyarados) is rampaging. Surf out and battle it — this is your only guaranteed shiny encounter! After catching or defeating it, you receive the Red Scale. Lance the Dragon Master appears and asks for your help investigating Team Rocket.",
          encounters: [
            enc("Pidgeotto", 17, ["G", "S"], "Grass", "15-17", "20%"),
            enc("Flaaffy", 180, ["G", "S"], "Grass", "15-17", "15%"),
            enc("Venonat", 48, ["G", "S"], "Grass", "15-16", "20%"),
            enc("Raticate", 20, ["G", "S"], "Grass", "15-16", "10%"),
            enc("Girafarig", 203, ["G", "S"], "Grass", "15-17", "5%"),
            enc("Magikarp", 129, ["G", "S"], "Surfing", "15-24", "90%"),
            enc("Gyarados", 130, ["G", "S"], "Surfing", "15-24", "10%"),
          ],
          items: [
            item("Red Scale", "From the Red Gyarados encounter"),
            item("TM10 Hidden Power", "Northeast shore of the lake"),
            item("Elixir", "Hidden near the lake"),
          ],
        },
        {
          name: "Team Rocket HQ — Mahogany Town",
          description:
            "Return to Mahogany Town with Lance. The souvenir shop is a front for Team Rocket's underground base. Lance's Dragonite helps you through the early floors. Navigate through the base, disabling the Electrode powering the radio signal that is forcing Magikarp to evolve. Battle Executive Petrel and Executive Ariana. After clearing the base, the signal stops and Mahogany Gym opens for challenge.",
          trainers: [
            trn("Team Rocket Grunt", "Grunt", [pk("Drowzee", 17, 96), pk("Zubat", 19, 41)], "₽760"),
            trn("Team Rocket Grunt", "Grunt", [pk("Zubat", 16, 41), pk("Grimer", 17, 88), pk("Rattata", 18, 19)], "₽720"),
            trn("Scientist", "Ross", [pk("Koffing", 22, 109)], "₽1,056"),
            trn("Rocket Executive", "Petrel", [pk("Zubat", 22, 41), pk("Koffing", 22, 109), pk("Raticate", 24, 20)], "₽960"),
            trn("Rocket Executive", "Ariana", [pk("Arbok", 23, 24), pk("Gloom", 23, 44), pk("Murkrow", 25, 198)], "₽1,000"),
          ],
          items: [
            item("Protein", "B1F"),
            item("Ice Heal", "B1F"),
            item("HM06 Whirlpool", "From Lance after clearing the base"),
            item("Full Heal", "B2F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Mahogany Gym, Route 43-44
     * =============================================================== */
    {
      part: 9,
      title: "Mahogany Gym & Route 44",
      summary:
        "Earn the Glacier Badge from Pryce and head east toward Blackthorn City.",
      locations: [
        {
          name: "Mahogany Gym — Leader Pryce",
          description:
            "Pryce specializes in Ice-type Pokemon. Fire, Fighting, Rock, and Steel moves are super effective. The gym has an ice floor puzzle — slide across the ice and hit obstacles to navigate to Pryce. His Piloswine is the main threat with high Attack and Blizzard. A Fire-type or Fighting-type will handle this gym well.",
          trainers: [
            trn("Boarder", "Ronald", [pk("Seel", 24, 86), pk("Dewgong", 25, 87)], "₽600"),
            trn("Skier", "Roxanne", [pk("Jynx", 28, 124)], "₽896"),
            trn("Boarder", "Brad", [pk("Swinub", 26, 220), pk("Swinub", 26, 220)], "₽624"),
            trn("Skier", "Clarissa", [pk("Dewgong", 28, 87)], "₽896"),
            trn("Gym Leader", "Pryce", [pk("Seel", 27, 86), pk("Dewgong", 29, 87), pk("Piloswine", 31, 221)], "₽3,100 + TM16 (Icy Wind)"),
          ],
          items: [
            item("Glacier Badge", "Defeat Pryce — allows use of Whirlpool outside battle"),
            item("TM16 Icy Wind", "Defeat Pryce"),
          ],
        },
        {
          name: "Route 44",
          description:
            "Head east from Mahogany Town toward the Ice Path. Several trainers and wild Pokemon along the way. Lickitung and Tangela can be found here. This route leads to the Ice Path, which connects to Blackthorn City.",
          encounters: [
            enc("Bellsprout", 69, ["G", "S"], "Grass", "22-26", "20%"),
            enc("Weepinbell", 70, ["G", "S"], "Grass", "24-26", "10%"),
            enc("Tangela", 114, ["G", "S"], "Grass", "22-24", "10%"),
            enc("Lickitung", 108, ["G", "S"], "Grass", "22-24", "5%"),
            enc("Poliwag", 60, ["G", "S"], "Surfing", "20-24", "60%"),
            enc("Poliwhirl", 61, ["G", "S"], "Surfing", "20-24", "30%"),
          ],
          trainers: [
            trn("Cooltrainer", "Allen", [pk("Charmeleon", 27, 5), pk("Growlithe", 27, 58)], "₽1,296"),
            trn("Cooltrainer", "Cybil", [pk("Butterfree", 27, 12), pk("Bellossom", 27, 182)], "₽1,296"),
            trn("Psychic", "Phil", [pk("Natu", 26, 177), pk("Kadabra", 26, 64)], "₽832"),
            trn("Bird Keeper", "Vance", [pk("Pidgeotto", 27, 17), pk("Pidgeotto", 29, 17)], "₽696"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Ice Path, Blackthorn City, Clair, Dragon's Den
     * =============================================================== */
    {
      part: 10,
      title: "Ice Path, Blackthorn City & Clair",
      summary:
        "Navigate the Ice Path, reach Blackthorn City, and earn the Rising Badge from Clair.",
      locations: [
        {
          name: "Ice Path",
          description:
            "A cave between Route 44 and Blackthorn City with ice floor puzzles and Strength boulder puzzles. You need HM04 Strength to progress. Slide across ice and push boulders into holes to create paths. Jynx and Swinub can be found here. HM07 Waterfall is hidden here — essential for reaching the Pokemon League later.",
          encounters: [
            enc("Zubat", 41, ["G", "S"], "Cave", "22-24", "20%"),
            enc("Golbat", 42, ["G", "S"], "Cave", "22-24", "10%"),
            enc("Swinub", 220, ["G", "S"], "Cave", "22-24", "30%"),
            enc("Jynx", 124, ["G", "S"], "Cave", "22-24", "15%"),
            enc("Delibird", 225, ["S"], "Cave", "22-24", "10%"),
            enc("Sneasel", 215, ["G", "S"], "Cave", "22-24", "15%"),
          ],
          items: [
            item("HM07 Waterfall", "B1F, in the ice boulder puzzle room"),
            item("Protein", "B1F"),
            item("PP Up", "B2F"),
            item("Max Potion", "B2F"),
            item("Full Heal", "B3F"),
            item("Nevermeltice", "B3F"),
          ],
        },
        {
          name: "Blackthorn City",
          description:
            "The home of the Dragon-type Gym. The Move Deleter and Move Tutor are here — the Move Deleter can remove HM moves. The Dragon's Den is behind the gym. Stock up at the Poke Mart before challenging Clair.",
          items: [
            item("Exp. Share", "From Mr. Pokemon on Route 30 if you bring him the Red Scale"),
          ],
        },
        {
          name: "Blackthorn Gym — Leader Clair",
          description:
            "Clair uses Dragon-type Pokemon. Ice and Dragon moves are super effective. Her Kingdra is especially tough since its Water/Dragon typing removes the Ice weakness partially. The gym has a lava floor and moving platforms. Clair's three Dragonair can be frustrating with Slam and DragonBreath paralysis. After defeating her, Clair refuses to give you the badge and demands you pass a test in the Dragon's Den.",
          trainers: [
            trn("Cooltrainer", "Paul", [pk("Dratini", 34, 147), pk("Dratini", 34, 147), pk("Dragonair", 37, 148)], "₽1,776"),
            trn("Cooltrainer", "Fran", [pk("Seadra", 37, 117)], "₽1,776"),
            trn("Cooltrainer", "Cody", [pk("Horsea", 34, 116), pk("Seadra", 36, 117)], "₽1,728"),
            trn("Gym Leader", "Clair", [pk("Dragonair", 37, 148), pk("Dragonair", 37, 148), pk("Dragonair", 37, 148), pk("Kingdra", 40, 230)], "₽4,000 + TM24 (DragonBreath)"),
          ],
          items: [
            item("Rising Badge", "From Clair after passing the Dragon's Den test"),
            item("TM24 DragonBreath", "Defeat Clair"),
          ],
        },
        {
          name: "Dragon's Den",
          description:
            "After defeating Clair, she demands you visit the Dragon's Den behind the gym. Surf across the water and enter the shrine. Answer the Elder's questions about Pokemon — the correct answers emphasize love and kindness toward Pokemon. After passing, Clair reluctantly gives you the Rising Badge. The Elder also gives you a Dratini as a gift.",
          encounters: [
            enc("Magikarp", 129, ["G", "S"], "Surfing", "10-20", "90%"),
            enc("Dratini", 147, ["G", "S"], "Surfing", "10-14", "10%"),
            enc("Dragonair", 148, ["G", "S"], "Super Rod", "15-19", "5%"),
          ],
          items: [
            item("Dratini", "Gift from the Elder after answering questions correctly"),
            item("Dragon Fang", "Hidden in the shrine"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Radio Tower Takeover, Routes 45-46
     * =============================================================== */
    {
      part: 11,
      title: "Goldenrod Radio Tower Takeover",
      summary:
        "Return to Goldenrod City to stop Team Rocket's takeover of the Radio Tower and explore Routes 45-46.",
      locations: [
        {
          name: "Route 45 & Route 46",
          description:
            "South of Blackthorn City. Route 45 is a one-way downhill path with ledges, trainers, and rare Pokemon like Teddiursa (Gold) or Phanpy (Silver). Route 46 connects back to Route 29. This is optional but good for catching version exclusives.",
          encounters: [
            enc("Geodude", 74, ["G", "S"], "Grass", "20-25", "20%"),
            enc("Graveler", 75, ["G", "S"], "Grass", "23-27", "10%"),
            enc("Gligar", 207, ["G"], "Grass", "20-23", "20%"),
            enc("Teddiursa", 216, ["G"], "Grass", "20-23", "20%"),
            enc("Phanpy", 231, ["S"], "Grass", "20-23", "20%"),
            enc("Skarmory", 227, ["S"], "Grass", "20-23", "5%"),
            enc("Donphan", 232, ["S"], "Grass", "25-27", "5%"),
          ],
          trainers: [
            trn("Blackbelt", "Kenji", [pk("Machoke", 28, 67)], "₽672"),
            trn("Hiker", "Parry", [pk("Onix", 25, 95), pk("Onix", 27, 95)], "₽864"),
            trn("Hiker", "Erik", [pk("Machamp", 30, 68)], "₽960"),
            trn("Cooltrainer", "Ryan", [pk("Pidgeot", 30, 18), pk("Electabuzz", 28, 125)], "₽1,440"),
          ],
        },
        {
          name: "Goldenrod Underground & Radio Tower",
          description:
            "Fly to Goldenrod City. Team Rocket has taken over the Radio Tower! The underground passage has a Team Rocket member disguised as a normal person. You need to get the Basement Key from the underground to access the blocked stairway in the Radio Tower. Fight through multiple floors of Rocket Grunts and Executives. Executive Archer is the leader of this operation. After defeating him on the top floor, the Director thanks you and gives you the Rainbow Wing (Gold) or Silver Wing (Silver) — used to encounter Ho-Oh or Lugia.",
          trainers: [
            trn("Team Rocket Grunt", "Grunt", [pk("Raticate", 24, 20), pk("Koffing", 26, 109)], "₽1,040"),
            trn("Team Rocket Grunt", "Grunt", [pk("Golbat", 26, 42), pk("Grimer", 23, 88), pk("Weezing", 26, 110)], "₽1,040"),
            trn("Rocket Executive", "Petrel", [pk("Koffing", 30, 109), pk("Koffing", 30, 109), pk("Koffing", 30, 109), pk("Weezing", 32, 110), pk("Koffing", 30, 109)], "₽1,280"),
            trn("Rocket Executive", "Proton", [pk("Golbat", 28, 42), pk("Weezing", 33, 110)], "₽1,320"),
            trn("Rocket Executive", "Ariana", [pk("Arbok", 32, 24), pk("Gloom", 32, 44), pk("Murkrow", 32, 198)], "₽1,280"),
            trn("Rocket Executive", "Archer", [pk("Houndour", 35, 228), pk("Koffing", 35, 109), pk("Houndoom", 38, 229)], "₽1,520"),
          ],
          items: [
            item("Basement Key", "Goldenrod Underground"),
            item("Rainbow Wing", "From the Director (Gold version) — needed for Ho-Oh"),
            item("Silver Wing", "From the Director (Silver version) — needed for Lugia"),
            item("Clear Bell", "From the Director after freeing the Radio Tower"),
          ],
        },
        {
          name: "Tin Tower / Whirl Islands",
          description:
            "With the Rainbow Wing (Gold), climb the Tin Tower in Ecruteak City to battle Ho-Oh at Level 40. With the Silver Wing (Silver), use Surf and Whirlpool to reach Lugia in the Whirl Islands at Level 40. Both are incredibly powerful and worth catching with Ultra Balls after weakening them. Save before the encounter!",
          items: [
            item("Ho-Oh", "Tin Tower, Ecruteak City (Gold — Lv. 40, bring Ultra Balls)"),
            item("Lugia", "Whirl Islands, Route 41 (Silver — Lv. 40, bring Ultra Balls)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Victory Road & Pokemon League
     * =============================================================== */
    {
      part: 12,
      title: "Victory Road & the Pokemon League",
      summary:
        "Traverse Victory Road and challenge the Elite Four and Champion Lance.",
      locations: [
        {
          name: "Route 27 & Route 26",
          description:
            "Head east from New Bark Town using Surf to reach the Kanto side. Routes 27 and 26 are long paths with strong trainers and require Surf and Waterfall. This is the path to the Pokemon League.",
          encounters: [
            enc("Ponyta", 77, ["G", "S"], "Grass", "28-32", "25%"),
            enc("Doduo", 84, ["G", "S"], "Grass", "26-30", "20%"),
            enc("Raticate", 20, ["G", "S"], "Grass", "28-30", "15%"),
            enc("Arbok", 24, ["G"], "Grass", "28-30", "10%"),
            enc("Sandslash", 28, ["S"], "Grass", "28-30", "10%"),
            enc("Quagsire", 195, ["G", "S"], "Surfing", "20-30", "30%"),
          ],
          trainers: [
            trn("Cooltrainer", "Blake", [pk("Magneton", 35, 82), pk("Quagsire", 35, 195), pk("Exeggcutor", 35, 103)], "₽1,680"),
            trn("Cooltrainer", "Gaven", [pk("Victreebel", 35, 71), pk("Kingler", 35, 99), pk("Flareon", 35, 136)], "₽1,680"),
            trn("Cooltrainer", "Beth", [pk("Rapidash", 37, 78)], "₽1,776"),
            trn("Cooltrainer", "Reena", [pk("Starmie", 35, 121), pk("Nidoqueen", 37, 31)], "₽1,776"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "The final cave before the Pokemon League. You need Surf, Waterfall, and Strength to navigate it. Push boulders, ride waterfalls, and battle tough trainers. Your rival appears here for one final pre-League battle. Make sure your team is well-prepared — recommended level is 40-45+.",
          encounters: [
            enc("Golbat", 42, ["G", "S"], "Cave", "32-36", "30%"),
            enc("Graveler", 75, ["G", "S"], "Cave", "32-34", "20%"),
            enc("Onix", 95, ["G", "S"], "Cave", "32-36", "20%"),
            enc("Rhyhorn", 111, ["G", "S"], "Cave", "32-34", "10%"),
            enc("Machoke", 67, ["G", "S"], "Cave", "32-34", "10%"),
            enc("Ursaring", 217, ["G"], "Cave", "34-36", "5%"),
            enc("Donphan", 232, ["S"], "Cave", "34-36", "5%"),
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
            trn("Cooltrainer", "Albert", [pk("Magneton", 35, 82), pk("Gengar", 37, 94)], "₽1,776"),
            trn("Cooltrainer", "Kim", [pk("Persian", 32, 53), pk("Stantler", 32, 234), pk("Kadabra", 35, 64)], "₽1,680"),
          ],
          items: [
            item("TM26 Earthquake", "Victory Road B1F"),
            item("Max Revive", "Victory Road 1F"),
            item("Full Restore", "Victory Road 2F"),
            item("HP Up", "Victory Road B1F"),
          ],
        },
        {
          name: "Indigo Plateau — The Pokemon League",
          description:
            "The ultimate challenge! Stock up on Full Restores, Max Potions, and Revives. You face the Elite Four and Champion Lance in sequence without visiting a Pokemon Center. Will (Psychic), Koga (Poison), Bruno (Fighting), Karen (Dark), and Champion Lance (Dragon). Recommended level: 45-50. Lance's three Dragonite are devastating — pack Ice moves!",
          trainers: [
            trn("Elite Four", "Will", [
              pk("Xatu", 40, 178),
              pk("Jynx", 41, 124),
              pk("Exeggutor", 41, 103),
              pk("Slowbro", 41, 80),
              pk("Xatu", 42, 178),
            ], "Psychic specialist — use Bug, Ghost, Dark"),
            trn("Elite Four", "Koga", [
              pk("Ariados", 40, 168),
              pk("Forretress", 43, 205),
              pk("Muk", 42, 89),
              pk("Venomoth", 41, 49),
              pk("Crobat", 44, 169),
            ], "Poison specialist — use Psychic, Ground"),
            trn("Elite Four", "Bruno", [
              pk("Hitmontop", 42, 237),
              pk("Hitmonlee", 42, 106),
              pk("Hitmonchan", 42, 107),
              pk("Onix", 43, 95),
              pk("Machamp", 46, 68),
            ], "Fighting specialist — use Psychic, Flying"),
            trn("Elite Four", "Karen", [
              pk("Umbreon", 42, 197),
              pk("Vileplume", 42, 45),
              pk("Murkrow", 44, 198),
              pk("Gengar", 45, 94),
              pk("Houndoom", 47, 229),
            ], "Dark specialist — use Fighting, Bug"),
            trn("Champion", "Lance", [
              pk("Gyarados", 44, 130),
              pk("Dragonite", 47, 149),
              pk("Dragonite", 47, 149),
              pk("Dragonite", 50, 149),
              pk("Aerodactyl", 46, 142),
              pk("Charizard", 46, 6),
            ], "Dragon specialist — use Ice, Electric, Rock"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Post-game: Kanto begins
     * =============================================================== */
    {
      part: 13,
      title: "S.S. Aqua to Kanto — Vermilion, Cerulean & Saffron",
      summary:
        "Board the S.S. Aqua to Kanto, and challenge the Vermilion, Cerulean, and Saffron Gyms.",
      isPostGame: true,
      locations: [
        {
          name: "S.S. Aqua",
          description:
            "After becoming Champion, Professor Elm gives you the S.S. Ticket. Board the S.S. Aqua from Olivine City. On the ship, help find the lost granddaughter of an old man — she is with a sailor. A lazy crew member gives you the Metal Coat. The ship docks at Vermilion City in Kanto.",
          trainers: [
            trn("Sailor", "Stanly", [pk("Machop", 20, 66), pk("Machop", 20, 66), pk("Poliwhirl", 24, 61)], "₽960"),
            trn("Juggler", "Fritz", [pk("Mr. Mime", 29, 122), pk("Magmar", 29, 126)], "₽1,160"),
          ],
          items: [
            item("S.S. Ticket", "From Professor Elm after becoming Champion"),
            item("Metal Coat", "From the lazy sailor"),
          ],
        },
        {
          name: "Vermilion City — Gym Leader Lt. Surge",
          description:
            "Lt. Surge still uses Electric-type Pokemon but with stronger teams than in Generation I. His Raichu, Electrode, Magneton, Electabuzz, and Electrode are fast and hit hard. Ground moves (Earthquake, Dig) shut down his entire team. The trash can switch puzzle returns.",
          trainers: [
            trn("Gym Leader", "Lt. Surge", [
              pk("Raichu", 44, 26),
              pk("Electrode", 40, 101),
              pk("Magneton", 40, 82),
              pk("Electrode", 40, 101),
              pk("Electabuzz", 46, 125),
            ], "₽4,600 + TM34 (ThunderPunch)"),
          ],
          items: [
            item("Thunder Badge", "Defeat Lt. Surge"),
          ],
        },
        {
          name: "Saffron City — Gym Leader Sabrina",
          description:
            "Sabrina still uses Psychic types. Her Espeon is the strongest team member. Bug, Ghost, and Dark moves are super effective. The warp tile puzzle is the same as in Generation I. Navigate through the teleporters to reach her.",
          trainers: [
            trn("Gym Leader", "Sabrina", [
              pk("Espeon", 46, 196),
              pk("Mr. Mime", 46, 122),
              pk("Alakazam", 48, 65),
            ], "₽4,800"),
          ],
          items: [
            item("Marsh Badge", "Defeat Sabrina"),
          ],
        },
        {
          name: "Cerulean City — Gym Leader Misty",
          description:
            "Misty is not at her gym initially. Find her on Route 25 near the Cape on a date. When confronted, she returns to her gym. Her team now includes Golduck, Quagsire, Lapras, and Starmie. Electric and Grass moves are ideal. Her Starmie is still a powerhouse with its high Speed.",
          trainers: [
            trn("Gym Leader", "Misty", [
              pk("Golduck", 42, 55),
              pk("Quagsire", 42, 195),
              pk("Lapras", 44, 131),
              pk("Starmie", 47, 121),
            ], "₽4,700"),
          ],
          items: [
            item("Cascade Badge", "Defeat Misty"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Kanto Gyms continued
     * =============================================================== */
    {
      part: 14,
      title: "Celadon, Fuchsia, Pewter & Cinnabar Gyms",
      summary:
        "Continue your Kanto journey by challenging four more Gym Leaders.",
      isPostGame: true,
      locations: [
        {
          name: "Celadon City — Gym Leader Erika",
          description:
            "Erika still uses Grass-type Pokemon. Fire, Ice, Poison, and Flying moves are super effective. Her Victreebel and Bellossom are the main threats. The gym layout is unchanged — Cut the tree to enter.",
          trainers: [
            trn("Gym Leader", "Erika", [
              pk("Tangela", 42, 114),
              pk("Jumpluff", 41, 189),
              pk("Victreebel", 46, 71),
              pk("Bellossom", 46, 182),
            ], "₽4,600"),
          ],
          items: [
            item("Rainbow Badge", "Defeat Erika"),
          ],
        },
        {
          name: "Fuchsia City — Gym Leader Janine",
          description:
            "Koga has moved to the Elite Four, so his daughter Janine now runs the Fuchsia Gym. She uses Poison types similar to her father. Her team features Crobat, Ariados, Weezing, and Venomoth. Psychic and Ground moves are effective.",
          trainers: [
            trn("Gym Leader", "Janine", [
              pk("Crobat", 36, 169),
              pk("Weezing", 36, 110),
              pk("Ariados", 33, 168),
              pk("Ariados", 33, 168),
              pk("Venomoth", 39, 49),
            ], "₽3,900"),
          ],
          items: [
            item("Soul Badge", "Defeat Janine"),
          ],
        },
        {
          name: "Pewter City — Gym Leader Brock",
          description:
            "Brock still uses Rock-type Pokemon. Water and Grass moves are super effective. His team has grown significantly — Graveler, Rhyhorn, Omastar, Kabutops, and Onix. Surf destroys most of his team.",
          trainers: [
            trn("Gym Leader", "Brock", [
              pk("Graveler", 41, 75),
              pk("Rhyhorn", 41, 111),
              pk("Omastar", 42, 139),
              pk("Kabutops", 42, 141),
              pk("Onix", 44, 95),
            ], "₽4,400"),
          ],
          items: [
            item("Boulder Badge", "Defeat Brock"),
          ],
        },
        {
          name: "Cinnabar Island / Seafoam Islands — Gym Leader Blaine",
          description:
            "Cinnabar Island has been destroyed by a volcanic eruption. Blaine relocated to the Seafoam Islands. Surf to the small cave in the Seafoam Islands to find his gym. His team includes Magcargo, Magmar, and Rapidash. Water moves are devastating.",
          trainers: [
            trn("Gym Leader", "Blaine", [
              pk("Magcargo", 45, 219),
              pk("Magmar", 45, 126),
              pk("Rapidash", 50, 78),
            ], "₽5,000"),
          ],
          items: [
            item("Volcano Badge", "Defeat Blaine"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 15 — Viridian Gym, Route 28
     * =============================================================== */
    {
      part: 15,
      title: "Viridian Gym & Route 28",
      summary:
        "Challenge the final Kanto Gym Leader Blue and unlock the path to Mt. Silver.",
      isPostGame: true,
      locations: [
        {
          name: "Viridian City — Gym Leader Blue",
          description:
            "Blue (the former Champion from Generation I) now runs the Viridian Gym. He has no type specialty — his team is a balanced mix: Pidgeot, Alakazam, Rhydon, Gyarados, Exeggutor, and Arcanine. You need a diverse team to handle him. After earning all 16 badges, Professor Oak opens up the path to Mt. Silver via Route 28.",
          trainers: [
            trn("Gym Leader", "Blue", [
              pk("Pidgeot", 56, 18),
              pk("Alakazam", 54, 65),
              pk("Rhydon", 56, 112),
              pk("Gyarados", 58, 130),
              pk("Exeggutor", 54, 103),
              pk("Arcanine", 58, 59),
            ], "₽5,800"),
          ],
          items: [
            item("Earth Badge", "Defeat Blue — completing all 16 badges"),
          ],
        },
        {
          name: "Route 28",
          description:
            "The path from Kanto to Mt. Silver. Only trainers with all 16 badges are allowed through. Stock up at the Pokemon Center at the base of Mt. Silver — the wild Pokemon here are very high level. This is the final stretch.",
          encounters: [
            enc("Tangela", 114, ["G", "S"], "Grass", "39-42", "25%"),
            enc("Ponyta", 77, ["G", "S"], "Grass", "39-42", "20%"),
            enc("Rapidash", 78, ["G", "S"], "Grass", "40-42", "5%"),
            enc("Doduo", 84, ["G", "S"], "Grass", "37-40", "20%"),
            enc("Dodrio", 85, ["G", "S"], "Grass", "39-42", "10%"),
            enc("Ursaring", 217, ["G"], "Grass", "40-42", "10%"),
            enc("Donphan", 232, ["S"], "Grass", "40-42", "10%"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 16 — Mt. Silver & Red
     * =============================================================== */
    {
      part: 16,
      title: "Mt. Silver — The Final Battle",
      summary:
        "Climb Mt. Silver and face the ultimate challenge: Red, the silent protagonist from Generation I.",
      isPostGame: true,
      locations: [
        {
          name: "Mt. Silver",
          description:
            "The ultimate dungeon in Gold and Silver. The wild Pokemon here are level 40-50 — excellent for grinding. The cave is multi-floored with Surf and Waterfall required. Larvitar, Misdreavus, and other rare Pokemon appear here. Reach the summit to find Red waiting in silence.",
          encounters: [
            enc("Golbat", 42, ["G", "S"], "Cave", "38-42", "20%"),
            enc("Graveler", 75, ["G", "S"], "Cave", "38-42", "15%"),
            enc("Golduck", 55, ["G", "S"], "Cave", "38-42", "10%"),
            enc("Machoke", 67, ["G", "S"], "Cave", "38-42", "10%"),
            enc("Ursaring", 217, ["G"], "Cave", "40-42", "10%"),
            enc("Donphan", 232, ["S"], "Cave", "40-42", "10%"),
            enc("Larvitar", 246, ["G", "S"], "Cave", "15-20", "5%"),
            enc("Misdreavus", 200, ["G", "S"], "Cave", "38-42", "10%"),
            enc("Sneasel", 215, ["G", "S"], "Cave", "38-42", "10%"),
            enc("Quagsire", 195, ["G", "S"], "Surfing", "35-39", "30%"),
          ],
          items: [
            item("PP Max", "Mt. Silver 1F"),
            item("Max Elixir", "Mt. Silver 2F"),
            item("Protein", "Mt. Silver exterior"),
            item("Ultra Ball", "Multiple locations"),
            item("Full Restore", "Near summit"),
          ],
        },
        {
          name: "Mt. Silver Summit — Red",
          description:
            "At the summit stands Red, the protagonist of Pokemon Red and Blue. He says nothing — the battle begins immediately. His team is the highest-leveled in the game: Pikachu (81), Espeon (73), Snorlax (75), Venusaur (77), Charizard (77), and Blastoise (77). Recommended level: 65-75+. This is the true final boss of Pokemon Gold and Silver. Defeating Red completes your journey and rolls the credits.",
          trainers: [
            trn("Pokemon Trainer", "Red", [
              pk("Pikachu", 81, 25),
              pk("Espeon", 73, 196),
              pk("Snorlax", 75, 143),
              pk("Venusaur", 77, 3),
              pk("Charizard", 77, 6),
              pk("Blastoise", 77, 9),
            ], "The ultimate challenge — no single strategy works!"),
          ],
        },
      ],
    },
  ],
};
