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

export const SUN_MOON_WALKTHROUGH: GameWalkthrough = {
  slug: "sun-moon",
  gameLabel: "Sun & Moon",
  versionTags: ["Su", "Mo"],
  parts: [
    /* ===============================================================
     *  PART 1 — Melemele Island: Route 1, Iki Town, Starter Choice
     * =============================================================== */
    {
      part: 1,
      title: "Melemele Island — Route 1 & Iki Town",
      summary:
        "Arrive in Alola, meet Lillie and Nebby, choose your starter, and begin your Island Challenge.",
      locations: [
        {
          name: "Route 1 (Your House)",
          description:
            "You've just moved to Alola from Kanto. After the introductory cutscene with Professor Kukui, head outside. Kukui will lead you up Route 1 toward Iki Town. Along the way you'll see tall grass with early Pokémon. Catch a few to fill out your team early.",
          encounters: [
            enc("Pikipek", 731, ["Su", "Mo"], "Grass", "2-4", "30%"),
            enc("Yungoos", 734, ["Su"], "Grass", "2-3", "30%"),
            enc("Rattata", 19, ["Mo"], "Grass", "2-3", "30%"),
            enc("Grubbin", 736, ["Su", "Mo"], "Grass", "2-4", "15%"),
            enc("Caterpie", 10, ["Su", "Mo"], "Grass", "3-5", "15%"),
            enc("Ledyba", 165, ["Su"], "Grass", "2-3", "10%"),
            enc("Spinarak", 167, ["Mo"], "Grass", "2-3", "10%"),
          ],
          items: [
            item("Potion", "On your desk at home"),
          ],
        },
        {
          name: "Iki Town",
          description:
            "A traditional town on Melemele Island where the guardian deity Tapu Koko is worshipped. You'll meet Hau, your cheerful rival, and Kahuna Hala. Follow Lillie to the Mahalo Trail where Nebby (Cosmog) is in danger on a rickety bridge. Tapu Koko saves you and gives you a Sparkling Stone. Return to Iki Town, and Professor Kukui lets you choose your starter Pokémon from three options: Rowlet (Grass/Flying), Litten (Fire), or Popplio (Water). Hau will pick the starter weak to yours. After a festival battle with Hau, Hala will take your Sparkling Stone and promise to make a Z-Ring for you.",
          items: [
            item("Starter Pokémon", "Choose Rowlet, Litten, or Popplio from Kukui"),
            item("Pokédex", "From Professor Kukui after choosing your starter"),
            item("Z-Ring", "From Hala (received next day)"),
            item("Sparkling Stone", "Gift from Tapu Koko after Mahalo Trail"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Routes 1-3, Trainer's School, Hau'oli, Trial 1
     * =============================================================== */
    {
      part: 2,
      title: "Routes 1-3, Trainer's School & Ilima's Trial",
      summary:
        "Explore Hau'oli City, attend the Trainer's School, and complete your first trial in Verdant Cavern.",
      locations: [
        {
          name: "Route 1 (Revisit) & Trainer's School",
          description:
            "Professor Kukui takes you to the Trainer's School on Route 1 to learn battle basics. Battle four trainers inside and outside. After graduating, Kukui gives you the Exp. Share — it shares experience with your whole party, making training much easier. Head to Hau'oli City.",
          encounters: [
            enc("Pikipek", 731, ["Su", "Mo"], "Grass", "3-5", "30%"),
            enc("Yungoos", 734, ["Su"], "Grass", "3-5", "30%"),
            enc("Rattata", 19, ["Mo"], "Grass", "3-5", "30%"),
            enc("Grubbin", 736, ["Su", "Mo"], "Grass", "4-6", "15%"),
            enc("Pichu", 172, ["Su", "Mo"], "Grass", "4-6", "5%"),
          ],
          trainers: [
            trn("Youngster", "Joey", [pk("Metapod", 7, 11)], "Z$112"),
            trn("Lass", "Audrey", [pk("Popplio", 7, 728)], "Z$112"),
            trn("Youngster", "Kevin", [pk("Grubbin", 7, 736)], "Z$112"),
            trn("Rising Star", "Joseph", [pk("Ekans", 8, 23)], "Z$384"),
          ],
          items: [
            item("Exp. Share", "From Professor Kukui after Trainer's School"),
          ],
        },
        {
          name: "Hau'oli City",
          description:
            "The biggest city on Melemele Island. Explore the shopping district, visit the Pokémon Center, and get your Pokédex upgraded to the Rotom Dex by Kukui. Talk to everyone for free items. The Malasada Shop and apparel shops are here. Ilima, the Trial Captain for Verdant Cavern, will introduce himself. Team Skull grunts make their first appearance here, harassing a citizen. Battle them to chase them off.",
          trainers: [
            trn("Team Skull Grunt", "Grunt", [pk("Zubat", 9, 41)], "Z$360"),
          ],
          items: [
            item("Rotom Dex", "From Professor Kukui at his lab"),
            item("Lens Case", "From Ilima at his house"),
            item("Silk Scarf", "From man in Tourist Bureau"),
          ],
        },
        {
          name: "Route 2",
          description:
            "Head north from Hau'oli City through Route 2 toward Verdant Cavern. The route passes through a small residential area and Berry fields. You'll encounter Team Skull grunts again. The Pokémon Center near the cave entrance is your last stop before the trial.",
          encounters: [
            enc("Yungoos", 734, ["Su"], "Grass", "5-8", "30%"),
            enc("Rattata", 19, ["Mo"], "Grass", "5-8", "30%"),
            enc("Drowzee", 96, ["Su", "Mo"], "Grass", "6-9", "20%"),
            enc("Smeargle", 235, ["Su", "Mo"], "Grass", "6-9", "10%"),
            enc("Cutiefly", 742, ["Su", "Mo"], "Grass", "6-9", "20%"),
            enc("Makuhita", 296, ["Su", "Mo"], "Grass", "6-9", "20%"),
          ],
          items: [
            item("Revive", "Berry fields area"),
            item("Super Potion", "Near motel"),
          ],
        },
        {
          name: "Verdant Cavern — Ilima's Trial (Normal)",
          description:
            "Your first Island Trial! Captain Ilima tasks you with defeating three Pokémon hiding in the cave's dens, then face the Totem Pokémon. In Sun, the Totem is Gumshoos; in Moon, it's Alolan Raticate. The Totem Pokémon is larger than normal, has boosted stats (it gets a defense boost aura), and can call allies for help. Fighting-type moves are super effective against both Totem options. After winning, you receive Normalium Z, your first Z-Crystal, which lets you use a Normal-type Z-Move once per battle when held by a Pokémon that knows a Normal-type move.",
          encounters: [
            enc("Zubat", 41, ["Su", "Mo"], "Cave", "7-10", "60%"),
            enc("Diglett", 50, ["Su", "Mo"], "Cave", "7-10", "30%"),
            enc("Yungoos", 734, ["Su"], "Cave", "7-9", "10%"),
            enc("Rattata", 19, ["Mo"], "Cave", "7-9", "10%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Gumshoos (Sun)", [pk("Gumshoos", 12, 735)], "Calls ally Yungoos"),
            trn("Totem Pokémon", "Raticate (Moon)", [pk("Raticate", 12, 20)], "Calls ally Rattata"),
            trn("Team Skull Grunt", "Grunt", [pk("Drowzee", 9, 96)], "Z$360"),
          ],
          items: [
            item("Normalium Z", "Clear Ilima's Trial"),
            item("TM31 Brick Break", "Deep within Verdant Cavern"),
            item("X Defense", "On the cave floor"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Grand Trial: Kahuna Hala (Fighting)
     * =============================================================== */
    {
      part: 3,
      title: "Grand Trial: Kahuna Hala",
      summary:
        "Return to Iki Town and challenge Island Kahuna Hala in the first Grand Trial.",
      locations: [
        {
          name: "Route 3",
          description:
            "After Ilima's Trial, head through Route 3 which leads east along the coast of Melemele Island. Melemele Meadow, a flower field filled with Oricorio (Pom-Pom Style in Sun, Pa'u Style in Moon on other islands), is accessible from here. Route 3 has several trainers and some new Pokémon to catch. Delibird and Hawlucha appear here.",
          encounters: [
            enc("Cutiefly", 742, ["Su", "Mo"], "Grass", "9-12", "20%"),
            enc("Oricorio", 741, ["Su", "Mo"], "Grass", "9-12", "20%"),
            enc("Delibird", 225, ["Su", "Mo"], "Grass", "9-12", "20%"),
            enc("Hawlucha", 701, ["Su", "Mo"], "Grass", "9-12", "10%"),
            enc("Mankey", 56, ["Su", "Mo"], "Grass", "9-12", "20%"),
            enc("Bonsly", 438, ["Su", "Mo"], "Grass", "10-12", "10%"),
          ],
          items: [
            item("Sharp Beak", "Near cliff side"),
            item("Heal Ball", "East side of route"),
          ],
        },
        {
          name: "Iki Town — Grand Trial: Kahuna Hala",
          description:
            "The Grand Trial is a special battle against the Island Kahuna. Hala is a Fighting-type specialist. He uses Z-Moves himself — his Crabrawler will use All-Out Pummeling, the Fighting-type Z-Move. Flying and Psychic types are your best counters. Fairy also works well. After defeating Hala, you receive Fightinium Z and officially clear Melemele Island's challenge. Hala gives you your Z-Ring and Ride Pager (with Tauros Charge to break rocks). You can now travel to Akala Island!",
          trainers: [
            trn("Island Kahuna", "Hala", [
              pk("Mankey", 15, 56),
              pk("Makuhita", 15, 296),
              pk("Crabrawler", 16, 739),
            ], "Z$2,880 + Fightinium Z"),
          ],
          items: [
            item("Fightinium Z", "Defeat Kahuna Hala"),
            item("Ride Pager", "From Hala (Tauros Charge)"),
            item("Z-Ring", "From Hala (upgraded from Sparkling Stone)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 — Akala Island: Routes 4-6, Brooklet Hill, Lana's Trial
     * =============================================================== */
    {
      part: 4,
      title: "Akala Island — Brooklet Hill & Lana's Trial",
      summary:
        "Arrive on Akala Island, explore Routes 4-6 and Paniola Ranch, and complete Lana's Water trial at Brooklet Hill.",
      locations: [
        {
          name: "Heahea City",
          description:
            "You arrive at Akala Island's port city. Meet Olivia (Island Kahuna), Mallow and Lana (Trial Captains), and Sina and Dexio from Kalos who give you a Zygarde Cube to collect Zygarde Cells. Explore the shops, visit Dimensional Research Lab where you meet Professor Burnet, and head north.",
          items: [
            item("Zygarde Cube", "From Sina and Dexio"),
            item("Dire Hit", "From woman in Dimensional Research Lab"),
          ],
        },
        {
          name: "Route 4",
          description:
            "The first route on Akala Island, heading north from Heahea City toward Paniola Town. Fields of tall grass line the path. You can find Eevee here, which is a great addition to your team with its many evolution options. Lillipup and Mudbray are common.",
          encounters: [
            enc("Lillipup", 506, ["Su", "Mo"], "Grass", "11-14", "20%"),
            enc("Pikipek", 731, ["Su", "Mo"], "Grass", "11-14", "20%"),
            enc("Yungoos", 734, ["Su"], "Grass", "11-14", "20%"),
            enc("Rattata", 19, ["Mo"], "Grass", "11-14", "20%"),
            enc("Mudbray", 749, ["Su", "Mo"], "Grass", "11-14", "20%"),
            enc("Eevee", 133, ["Su", "Mo"], "Grass", "11-14", "10%"),
            enc("Grubbin", 736, ["Su", "Mo"], "Grass", "11-14", "10%"),
          ],
          items: [
            item("Energy Root", "East side of route"),
            item("Adrenaline Orb", "From gate to Paniola Town"),
          ],
        },
        {
          name: "Paniola Town & Paniola Ranch",
          description:
            "A country town with a large ranch. At Paniola Ranch you can find wild Pokémon in the tall grass and receive an Egg from the Pokémon Nursery (it will hatch into Eevee). Miltank are in the ranch's pens. Hau will battle you here. Continue east through Route 5 to reach Brooklet Hill.",
          encounters: [
            enc("Mudbray", 749, ["Su", "Mo"], "Grass", "12-15", "30%"),
            enc("Lillipup", 506, ["Su", "Mo"], "Grass", "12-15", "30%"),
            enc("Tauros", 128, ["Su", "Mo"], "Grass", "12-15", "10%"),
            enc("Miltank", 241, ["Su", "Mo"], "Grass", "12-15", "10%"),
          ],
          trainers: [
            trn("Pokémon Breeder", "Glenn", [pk("Lillipup", 13, 506), pk("Mudbray", 13, 749)], "Z$520"),
          ],
          items: [
            item("Pokémon Egg", "From woman at the Nursery (hatches into Eevee)"),
          ],
        },
        {
          name: "Route 5",
          description:
            "Connects Paniola Ranch to Brooklet Hill. Gladion appears here for the first time, battling you with his mysterious Type: Null. He's intense and serious — the opposite of Hau. Several trainers line this route. Fomantis and Dewpider can be found here.",
          encounters: [
            enc("Fomantis", 753, ["Su", "Mo"], "Grass", "13-16", "30%"),
            enc("Dewpider", 751, ["Su", "Mo"], "Grass", "13-16", "20%"),
            enc("Grubbin", 736, ["Su", "Mo"], "Grass", "13-16", "20%"),
            enc("Pikipek", 731, ["Su", "Mo"], "Grass", "13-16", "20%"),
            enc("Caterpie", 10, ["Su", "Mo"], "Grass", "14-16", "10%"),
          ],
          trainers: [
            trn("Team Skull", "Gladion", [pk("Type: Null", 18, 772)], "Z$720"),
          ],
          items: [
            item("TM41 Torment", "Hidden on the hillside"),
            item("Hyper Potion", "Near trial gate"),
          ],
        },
        {
          name: "Brooklet Hill — Lana's Trial (Water)",
          description:
            "Captain Lana's trial takes place at Brooklet Hill, a series of pools and waterfalls. She asks you to investigate mysterious splashing in the water. You battle Wishiwashi in several pools, each getting progressively bigger. The Totem Pokémon is Totem Wishiwashi in its School Form — a massive fish made of hundreds of tiny fish. It calls ally Alomomola which can heal it. Electric and Grass moves are super effective. Wishiwashi in School Form has extremely high Attack and defenses, but its Solo Form (under 25% HP) is weak. After winning, you receive Waterium Z.",
          encounters: [
            enc("Dewpider", 751, ["Su", "Mo"], "Grass", "14-17", "30%"),
            enc("Surskit", 283, ["Su", "Mo"], "Grass", "14-17", "30%"),
            enc("Poliwag", 60, ["Su", "Mo"], "Surfing", "15-18", "40%"),
            enc("Wishiwashi", 746, ["Su", "Mo"], "Fishing", "14-17", "40%"),
            enc("Goldeen", 118, ["Su", "Mo"], "Fishing", "14-17", "30%"),
            enc("Feebas", 349, ["Su", "Mo"], "Fishing", "15-17", "1%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Wishiwashi", [pk("Wishiwashi", 20, 746)], "Calls ally Alomomola — use Electric/Grass"),
          ],
          items: [
            item("Waterium Z", "Clear Lana's Trial"),
            item("Fishing Rod", "From Lana after the trial"),
            item("Dive Ball", "Near the waterfalls"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 — Wela Volcano, Kiawe's Trial, Routes 7-8
     * =============================================================== */
    {
      part: 5,
      title: "Wela Volcano Park & Kiawe's Trial",
      summary:
        "Climb Wela Volcano Park for the Fire trial against Totem Salazzle, then continue through Routes 7 and 8.",
      locations: [
        {
          name: "Route 7",
          description:
            "A short beach route connecting Brooklet Hill to the Royal Avenue area. You can Surf here to find Wingull and Tentacool. The Wimpod on the beach will run away if you approach it from the front — corner it to battle and catch it.",
          encounters: [
            enc("Tentacool", 72, ["Su", "Mo"], "Surfing", "15-18", "40%"),
            enc("Wingull", 278, ["Su", "Mo"], "Surfing", "15-18", "40%"),
            enc("Staryu", 120, ["Su", "Mo"], "Fishing", "15-18", "30%"),
            enc("Magikarp", 129, ["Su", "Mo"], "Fishing", "14-17", "50%"),
            enc("Pyukumuku", 771, ["Su", "Mo"], "Grass", "15-18", "10%"),
          ],
        },
        {
          name: "Wela Volcano Park",
          description:
            "A volcanic mountain on Akala Island. The path winds upward through rocky terrain with Fire and Rock type Pokémon. Salandit is common here — only female Salandit evolve into Salazzle, so catch one carefully. Fletchinder, Cubone, and Kangaskhan also appear. At the summit you'll find Kiawe and his trial site.",
          encounters: [
            enc("Cubone", 104, ["Su", "Mo"], "Grass", "16-19", "20%"),
            enc("Kangaskhan", 115, ["Su", "Mo"], "Grass", "16-19", "10%"),
            enc("Magby", 240, ["Su", "Mo"], "Grass", "16-19", "10%"),
            enc("Salandit", 757, ["Su", "Mo"], "Grass", "16-19", "30%"),
            enc("Fletchinder", 662, ["Su", "Mo"], "Grass", "17-19", "10%"),
            enc("Larvesta", 636, ["Su", "Mo"], "Grass", "17-19", "1%"),
          ],
          items: [
            item("Charcoal", "From hiker on the trail"),
            item("TM39 Rock Tomb", "On a ledge midway up"),
          ],
        },
        {
          name: "Wela Volcano Park — Kiawe's Trial (Fire)",
          description:
            "Captain Kiawe's trial is unique — it's a dance quiz! You watch Marowak (Alolan form) perform dances and must spot the differences between takes. Get it wrong and you battle a Hiker. After the quiz, Totem Salazzle appears. It is boosted in Special Defense and calls ally Salandit. Salazzle can be dangerous with its Poison/Fire typing. Water, Ground, and Rock moves are super effective. After winning, you receive Firium Z.",
          trainers: [
            trn("Totem Pokémon", "Salazzle", [pk("Salazzle", 22, 758)], "Calls ally Salandit — use Water/Ground/Rock"),
            trn("Hiker", "David", [pk("Magmar", 19, 126)], "Z$608"),
          ],
          items: [
            item("Firium Z", "Clear Kiawe's Trial"),
            item("Quick Ball ×10", "Reward from Kiawe"),
          ],
        },
        {
          name: "Route 8",
          description:
            "Heads south from the volcano toward Lush Jungle. This route has a Pokémon Center, the Fossil Restoration Center (Skull Fossil and Cover Fossil available), and the Aether Foundation base where you first learn about their Pokémon conservation mission. Stufful appears here — don't be fooled by its cute appearance, it evolves into the powerful Bewear.",
          encounters: [
            enc("Stufful", 759, ["Su", "Mo"], "Grass", "17-20", "15%"),
            enc("Salandit", 757, ["Su", "Mo"], "Grass", "17-20", "20%"),
            enc("Fletchinder", 662, ["Su", "Mo"], "Grass", "17-20", "20%"),
            enc("Trumbeak", 732, ["Su", "Mo"], "Grass", "17-20", "20%"),
            enc("Yungoos", 734, ["Su"], "Grass", "17-20", "15%"),
            enc("Rattata", 19, ["Mo"], "Grass", "17-20", "15%"),
          ],
          items: [
            item("Miracle Seed", "From girl near Pokémon Center"),
            item("Zygarde Cell", "Behind the Aether base"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 — Lush Jungle, Mallow's Trial, Grand Trial: Olivia
     * =============================================================== */
    {
      part: 6,
      title: "Lush Jungle, Mallow's Trial & Grand Trial: Olivia",
      summary:
        "Complete Mallow's Grass trial in Lush Jungle, then face Island Kahuna Olivia in the second Grand Trial.",
      locations: [
        {
          name: "Route 5 (South) & Lush Jungle Entrance",
          description:
            "Head south from Route 8 into the Lush Jungle area. The jungle is dense and filled with Bug and Grass type Pokémon. Bounsweet, Fomantis, Comfey, and Morelull all appear here. The rare Passimian (Sun) and Oranguru (Moon) can be found deep in the jungle.",
          encounters: [
            enc("Fomantis", 753, ["Su", "Mo"], "Grass", "18-21", "30%"),
            enc("Bounsweet", 761, ["Su", "Mo"], "Grass", "18-21", "20%"),
            enc("Morelull", 755, ["Su", "Mo"], "Grass", "18-21", "20%"),
            enc("Comfey", 764, ["Su", "Mo"], "Grass", "18-21", "5%"),
            enc("Passimian", 766, ["Su"], "Grass", "19-21", "5%"),
            enc("Oranguru", 765, ["Mo"], "Grass", "19-21", "5%"),
            enc("Paras", 46, ["Su", "Mo"], "Grass", "18-21", "20%"),
          ],
        },
        {
          name: "Lush Jungle — Mallow's Trial (Grass)",
          description:
            "Captain Mallow asks you to gather four ingredients for a special dish by foraging through the jungle: a Mago Berry, Tiny Mushroom, Revival Herb, and Miracle Seed. Each ingredient requires finding the item spot and sometimes battling a wild Pokémon. Once all ingredients are gathered, the delicious scent draws out Totem Lurantis! This is one of the toughest Totem battles in the game. Totem Lurantis has boosted Speed and calls ally Castform (which uses Sunny Day, powering up Lurantis's Solar Blade). Fire and Flying moves are your best bet, but watch out for Lurantis's coverage moves. After winning, you receive Grassium Z.",
          trainers: [
            trn("Totem Pokémon", "Lurantis", [pk("Lurantis", 24, 754)], "Calls ally Castform — use Fire/Flying/Ice"),
          ],
          items: [
            item("Grassium Z", "Clear Mallow's Trial"),
            item("Nest Ball ×10", "Reward from Mallow"),
            item("Miracle Seed", "Found during ingredient gathering"),
          ],
        },
        {
          name: "Diglett's Tunnel & Konikoni City",
          description:
            "Travel through Diglett's Tunnel (Alolan Diglett are Ground/Steel here) to reach Konikoni City on the south coast of Akala Island. Konikoni is a market town where Olivia lives. Shop for items, get TMs, and visit the Fossil shop. Prepare for the Grand Trial — stock up on healing items and make sure you have Water, Grass, Fighting, or Ground type moves.",
          encounters: [
            enc("Diglett", 50, ["Su", "Mo"], "Cave", "19-22", "50%"),
            enc("Zubat", 41, ["Su", "Mo"], "Cave", "19-22", "40%"),
            enc("Larvitar", 246, ["Su", "Mo"], "Cave", "20-22", "10%"),
          ],
          items: [
            item("Dusk Ball ×10", "From worker in tunnel"),
            item("Max Potion", "Hidden in Konikoni City"),
          ],
        },
        {
          name: "Ruins of Life — Grand Trial: Kahuna Olivia",
          description:
            "Olivia awaits at the Ruins of Life, a sacred site dedicated to Tapu Lele. Olivia is a Rock-type specialist. Water, Grass, Fighting, Ground, and Steel moves are super effective against her team. Her Lycanroc (Midnight Form in Moon, Midday Form in Sun) is her ace and hits hard. She will use Rockium Z for a Continental Crush Z-Move. After winning, you receive Rockium Z and Ride Charizard (Fly). You've now cleared Akala Island!",
          trainers: [
            trn("Island Kahuna", "Olivia", [
              pk("Nosepass", 26, 299),
              pk("Boldore", 26, 525),
              pk("Lycanroc", 27, 745),
            ], "Z$4,860 + Rockium Z"),
          ],
          items: [
            item("Rockium Z", "Defeat Kahuna Olivia"),
            item("Charizard Glide", "Ride Pager upgrade (Fly equivalent)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Ula'ula Island: Malie City, Hokulani, Sophocles' Trial
     * =============================================================== */
    {
      part: 7,
      title: "Ula'ula Island — Malie City & Sophocles' Trial",
      summary:
        "Travel to Ula'ula Island, explore Malie City, climb Mount Hokulani, and complete the Electric trial.",
      locations: [
        {
          name: "Malie City",
          description:
            "A large city with Johto-inspired architecture. The Malie Library has books about Alola's history, Legendary Pokémon, and the Ultra Beasts. Professor Kukui and Lillie are researching here. You'll battle Hau again. The Malie Garden is a beautiful park area where you can find some Pokémon. Visit the Outer Cape to meet Professor Kukui for a battle tutorial on Z-Moves.",
          encounters: [
            enc("Psyduck", 54, ["Su", "Mo"], "Grass (Garden)", "24-27", "30%"),
            enc("Poliwag", 60, ["Su", "Mo"], "Grass (Garden)", "24-27", "30%"),
            enc("Goldeen", 118, ["Su", "Mo"], "Fishing (Garden)", "24-27", "40%"),
            enc("Gyarados", 130, ["Su", "Mo"], "Fishing (Garden)", "25-28", "10%"),
          ],
          trainers: [
            trn("Pokémon Trainer", "Hau", [
              pk("Raichu", 24, 26),
              pk("Flareon", 24, 136),
            ], "Z$1,152"),
          ],
          items: [
            item("TM76 Fly", "From Professor Kukui at Malie Garden"),
            item("Electrium Z", "Reward from Sophocles' Trial (later)"),
          ],
        },
        {
          name: "Route 10 & Mount Hokulani",
          description:
            "Take the bus from Route 10 up Mount Hokulani. The summit has the Hokulani Observatory where Sophocles runs his trial. On the way you can battle trainers and encounter wild Pokémon in the grass. The mountain is home to Minior — a unique Pokémon with a rock shell that breaks when low on HP, revealing its colorful core.",
          encounters: [
            enc("Skarmory", 227, ["Su", "Mo"], "Grass", "25-28", "10%"),
            enc("Fearow", 22, ["Su", "Mo"], "Grass", "25-28", "20%"),
            enc("Pancham", 674, ["Su", "Mo"], "Grass", "25-28", "20%"),
            enc("Gumshoos", 735, ["Su"], "Grass", "26-28", "20%"),
            enc("Raticate", 20, ["Mo"], "Grass", "26-28", "20%"),
            enc("Minior", 774, ["Su", "Mo"], "Grass", "25-28", "10%"),
            enc("Beldum", 374, ["Su", "Mo"], "Grass", "27-28", "10%"),
          ],
          items: [
            item("Comet Shard", "Hidden on mountain trail"),
            item("Metal Coat", "From hiker near observatory"),
          ],
        },
        {
          name: "Hokulani Observatory — Sophocles' Trial (Electric)",
          description:
            "Sophocles' trial is technology-themed. You answer quiz questions on a machine, and wrong answers lead to battles with Charjabug (the pre-evolution of Vikavolt). After completing the quiz, Totem Vikavolt appears! It has boosted Special Attack and calls ally Charjabug which uses Mud-Slap to lower your accuracy. Ground-type moves are your best counter since Vikavolt is Bug/Electric. Fire and Rock also work well. After winning, you receive Electrium Z.",
          trainers: [
            trn("Totem Pokémon", "Vikavolt", [pk("Vikavolt", 29, 738)], "Calls ally Charjabug — use Ground/Fire/Rock"),
          ],
          items: [
            item("Electrium Z", "Clear Sophocles' Trial"),
            item("Charjabug Ally", "Part of trial encounter"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Routes 13-15, Acerola's Trial, Po Town
     * =============================================================== */
    {
      part: 8,
      title: "Route 13-15, Acerola's Trial & Po Town",
      summary:
        "Continue through Ula'ula Island, complete the Ghost trial at the Thrifty Megamart, and infiltrate Team Skull's base at Po Town.",
      locations: [
        {
          name: "Route 11 & Route 12",
          description:
            "Route 11 leads north from Malie City past the bus terminal. Route 12 is a rocky coastal path where you ride Mudsdale to cross rough terrain. Geodude (Alolan Rock/Electric form) and Torkoal appear here.",
          encounters: [
            enc("Geodude", 74, ["Su", "Mo"], "Grass", "25-28", "30%"),
            enc("Torkoal", 324, ["Su", "Mo"], "Grass", "25-28", "20%"),
            enc("Elekid", 239, ["Su"], "Grass", "25-28", "10%"),
            enc("Magby", 240, ["Mo"], "Grass", "25-28", "10%"),
            enc("Mudbray", 749, ["Su", "Mo"], "Grass", "25-28", "20%"),
            enc("Komala", 775, ["Su", "Mo"], "Grass", "26-28", "10%"),
          ],
          items: [
            item("Mudsdale Gallop", "Ride Pager upgrade"),
            item("Max Repel", "Hidden on Route 12"),
          ],
        },
        {
          name: "Route 13 (Haina Desert Entrance) & Route 14",
          description:
            "Route 13 is a barren road along the coast. The Haina Desert is accessible but confusing — save exploration for later (Psychium Z is inside). Route 14 leads south to the Thrifty Megamart, an abandoned supermarket that is the site of Acerola's trial. The black sand beach here has Sandygast — don't let it grab you!",
          encounters: [
            enc("Sandygast", 769, ["Su", "Mo"], "Grass", "27-30", "20%"),
            enc("Alomomola", 594, ["Su", "Mo"], "Surfing", "27-30", "20%"),
            enc("Bruxish", 779, ["Su", "Mo"], "Surfing", "27-30", "20%"),
            enc("Pelipper", 279, ["Su", "Mo"], "Surfing", "28-30", "20%"),
          ],
          items: [
            item("TM28 Leech Life", "Route 14"),
            item("Dusk Stone", "Route 13"),
          ],
        },
        {
          name: "Thrifty Megamart — Acerola's Trial (Ghost)",
          description:
            "An abandoned supermarket haunted by ghost Pokémon. Acerola's trial has you investigating moving objects and taking photos of Ghost Pokémon with the Poké Finder. Each photo reveals a Gastly or Haunter to battle. At the back of the store, Totem Mimikyu appears! Mimikyu's Disguise ability means the first hit it takes does zero damage — its 'costume' takes the hit instead. It has boosted Special Defense and calls ally Haunter which uses Hypnosis. Ghost and Steel moves work best. After winning, you receive Ghostium Z.",
          trainers: [
            trn("Totem Pokémon", "Mimikyu", [pk("Mimikyu", 33, 778)], "Calls ally Haunter — use Ghost/Steel"),
          ],
          items: [
            item("Ghostium Z", "Clear Acerola's Trial"),
            item("Ghost Memory", "Found in the abandoned mart"),
          ],
        },
        {
          name: "Route 15 & Route 16",
          description:
            "Route 15 heads west from the Thrifty Megamart area, while Route 16 leads to Ula'ula Meadow and eventually Po Town. The Aether House is on Route 15 — a small house run by Acerola where orphaned Pokémon are cared for. Team Skull attacks the Aether House and steals a Yungoos!",
          encounters: [
            enc("Pelipper", 279, ["Su", "Mo"], "Surfing", "28-31", "30%"),
            enc("Gumshoos", 735, ["Su"], "Grass", "28-31", "30%"),
            enc("Raticate", 20, ["Mo"], "Grass", "28-31", "30%"),
            enc("Slowpoke", 79, ["Su", "Mo"], "Surfing", "28-31", "30%"),
          ],
          items: [
            item("TM93 Wild Charge", "Route 15"),
            item("Rare Candy", "Hidden on Route 16"),
          ],
        },
        {
          name: "Po Town — Team Skull's Base",
          description:
            "Po Town is a walled-off town that Team Skull has taken over. Rain pours constantly. Fight through waves of Team Skull grunts in the barricaded streets. You need to find passwords to get through locked doors. Guzma, the boss of Team Skull, awaits in the Shady House mansion at the heart of Po Town. He uses Bug types and is aggressive. After defeating him, you recover the stolen Yungoos and receive Buginium Z. Nanu, the lazy Kahuna who did nothing to stop Team Skull, awaits you outside.",
          trainers: [
            trn("Team Skull Grunts", "Various", [
              pk("Drowzee", 33, 96),
              pk("Haunter", 33, 93),
              pk("Fomantis", 33, 753),
            ], "Z$1,320"),
            trn("Team Skull Boss", "Guzma", [
              pk("Golisopod", 34, 768),
              pk("Ariados", 34, 168),
            ], "Z$2,720 + Buginium Z"),
          ],
          items: [
            item("Buginium Z", "Defeat Guzma in the Shady House"),
            item("TM36 Sludge Bomb", "Inside the Shady House"),
            item("Rare Candy", "Hidden in barricaded house"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Grand Trial: Kahuna Nanu (Dark)
     * =============================================================== */
    {
      part: 9,
      title: "Grand Trial: Kahuna Nanu",
      summary:
        "Challenge Island Kahuna Nanu in the third Grand Trial — a Dark-type specialist.",
      locations: [
        {
          name: "Malie City — Grand Trial: Kahuna Nanu",
          description:
            "Nanu is a former International Police officer and the reluctant Kahuna of Ula'ula Island. He specializes in Dark-type Pokémon. Fighting, Bug, and Fairy moves are super effective against his team. His Alolan Persian is his ace and can be tricky with Fake Out and Power Gem. He uses Darkinium Z for a Black Hole Eclipse Z-Move. After winning, you receive Darkinium Z and clear Ula'ula Island's Grand Trial. However, Lillie has been taken by the Aether Foundation — you must head to Aether Paradise!",
          trainers: [
            trn("Island Kahuna", "Nanu", [
              pk("Sableye", 43, 302),
              pk("Krokorok", 43, 552),
              pk("Persian", 44, 53),
            ], "Z$7,920 + Darkinium Z"),
          ],
          items: [
            item("Darkinium Z", "Defeat Kahuna Nanu"),
            item("Lycanium Z", "From Gladion after next events"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Aether Paradise & Poni Island
     * =============================================================== */
    {
      part: 10,
      title: "Aether Paradise Infiltration & Poni Island",
      summary:
        "Infiltrate Aether Paradise, battle Lusamine, and travel to Poni Island.",
      locations: [
        {
          name: "Aether Paradise — First Infiltration",
          description:
            "The Aether Foundation's artificial island paradise hides dark secrets. Lusamine, the Aether President and mother to Gladion and Lillie, is obsessed with Ultra Beasts. She has been opening Ultra Wormholes and plans to enter Ultra Space. Fight through Aether employees on multiple floors. Hau and Gladion join you as allies. You'll first battle Faba (the branch chief) who uses Psychic types, then confront Lusamine herself.",
          trainers: [
            trn("Aether Branch Chief", "Faba", [
              pk("Slowbro", 39, 80),
              pk("Bruxish", 39, 779),
              pk("Hypno", 39, 97),
            ], "Z$6,240"),
            trn("Aether President", "Lusamine", [
              pk("Clefable", 41, 36),
              pk("Lilligant", 41, 549),
              pk("Milotic", 41, 350),
              pk("Mismagius", 41, 429),
              pk("Bewear", 41, 760),
            ], "Z$8,200"),
          ],
          items: [
            item("TM06 Toxic", "Found on lab floor"),
            item("Full Restore", "From Wicke after events"),
          ],
        },
        {
          name: "Poni Island — Seafolk Village",
          description:
            "After Lusamine opens an Ultra Wormhole and vanishes into Ultra Space with Guzma, you head to Poni Island, the fourth and least developed island in Alola. Seafolk Village is a floating town built on boats. There is no Kahuna currently — the previous one passed away. Hapu, a girl you've met several times, will become the new Kahuna. Head to the Ancient Poni Path and Poni Wilds.",
          encounters: [
            enc("Pelipper", 279, ["Su", "Mo"], "Surfing", "38-41", "30%"),
            enc("Relicanth", 369, ["Su", "Mo"], "Fishing", "38-41", "10%"),
            enc("Wailmer", 320, ["Su", "Mo"], "Surfing", "38-41", "30%"),
            enc("Sharpedo", 319, ["Su", "Mo"], "Surfing", "38-41", "10%"),
          ],
          items: [
            item("Lucky Punch", "From man in Seafolk Village"),
            item("Aerodactylite", "From woman in Seafolk Village"),
          ],
        },
        {
          name: "Poni Wilds & Ancient Poni Path",
          description:
            "Wild, untamed areas of Poni Island with strong wild Pokémon. Trainers are sparse but the wild encounters are high level. Jangmo-o, the pseudo-legendary's first stage, can be found in the canyon area. Hapu battles you to prove her strength. After this, she is officially made Kahuna by Tapu Fini.",
          encounters: [
            enc("Pelipper", 279, ["Su", "Mo"], "Grass", "40-43", "20%"),
            enc("Gastrodon", 423, ["Su", "Mo"], "Grass", "40-43", "20%"),
            enc("Granbull", 210, ["Su", "Mo"], "Grass", "40-43", "20%"),
            enc("Exeggcute", 102, ["Su", "Mo"], "Grass", "40-43", "20%"),
          ],
          items: [
            item("TM24 Thunderbolt", "Ancient Poni Path"),
            item("Max Elixir", "Hidden near cliff"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Vast Poni Canyon, Altar of the Sunne/Moone
     * =============================================================== */
    {
      part: 11,
      title: "Vast Poni Canyon & The Altar",
      summary:
        "Traverse Vast Poni Canyon, complete the Dragon trial, and reach the Altar to summon Solgaleo or Lunala.",
      locations: [
        {
          name: "Grand Trial: Kahuna Hapu (Ground)",
          description:
            "Before entering Vast Poni Canyon, you face the newly appointed Kahuna Hapu. She specializes in Ground types. Water, Grass, and Ice moves are super effective. Her ace Mudsdale is incredibly bulky with its Stamina ability (raises Defense each time it's hit). Special attacks work much better than physical ones. After winning, you receive Groundium Z.",
          trainers: [
            trn("Island Kahuna", "Hapu", [
              pk("Dugtrio", 47, 51),
              pk("Gastrodon", 47, 423),
              pk("Flygon", 47, 330),
              pk("Mudsdale", 48, 750),
            ], "Z$8,640 + Groundium Z"),
          ],
          items: [
            item("Groundium Z", "Defeat Kahuna Hapu"),
          ],
        },
        {
          name: "Vast Poni Canyon",
          description:
            "A long, treacherous canyon with powerful trainers and strong wild Pokémon. This serves as Alola's Victory Road equivalent. The Dragon trial (unofficial — there's no captain present) involves battling Jangmo-o and Hakamo-o, leading to a battle with Totem Kommo-o. The canyon has multiple levels navigated with Ride Pokémon. Wild Jangmo-o, Hakamo-o, and even Kommo-o appear here. Bring plenty of healing items.",
          encounters: [
            enc("Jangmo-o", 782, ["Su", "Mo"], "Grass", "40-44", "20%"),
            enc("Hakamo-o", 783, ["Su", "Mo"], "Grass", "41-44", "10%"),
            enc("Boldore", 525, ["Su", "Mo"], "Cave", "40-43", "30%"),
            enc("Carbink", 703, ["Su", "Mo"], "Cave", "40-43", "20%"),
            enc("Machoke", 67, ["Su", "Mo"], "Cave", "40-43", "20%"),
            enc("Golbat", 42, ["Su", "Mo"], "Cave", "40-43", "20%"),
            enc("Lycanroc", 745, ["Su", "Mo"], "Cave", "42-44", "10%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Kommo-o", [pk("Kommo-o", 45, 784)], "Calls ally Hakamo-o — use Fairy/Ice/Flying/Dragon"),
            trn("Veteran", "Harry", [pk("Talonflame", 45, 663), pk("Weavile", 45, 461)], "Z$5,400"),
            trn("Backpacker", "Perdy", [pk("Raticate", 44, 20), pk("Araquanid", 44, 752)], "Z$1,056"),
          ],
          items: [
            item("Dragonium Z", "Clear the Dragon Trial"),
            item("TM02 Dragon Claw", "Deep in the canyon"),
            item("Rare Candy", "Hidden on cliff ledge"),
          ],
        },
        {
          name: "Altar of the Sunne / Altar of the Moone",
          description:
            "At the end of Vast Poni Canyon lies the sacred altar. Lillie plays the Sun Flute (or Moon Flute) alongside you to open an Ultra Wormhole. In Sun, Nebby evolves into Solgaleo (Psychic/Steel); in Moon, it evolves into Lunala (Psychic/Ghost). You must battle and catch it — the story cannot progress without capturing your version's Legendary Pokémon. After catching Solgaleo/Lunala, you ride it into Ultra Space to rescue Lusamine from Nihilego's control. Battle Lusamine one final time — her Pokémon are fused with Ultra Beast energy and are much stronger.",
          trainers: [
            trn("Aether President", "Lusamine (Powered)", [
              pk("Clefable", 50, 36),
              pk("Lilligant", 50, 549),
              pk("Milotic", 50, 350),
              pk("Mismagius", 50, 429),
              pk("Bewear", 50, 760),
            ], "Final story battle"),
          ],
          items: [
            item("Solgaleo", "Catch at the Altar (Sun, Lv. 55)"),
            item("Lunala", "Catch at the Altar (Moon, Lv. 55)"),
            item("Cosmog", "Post-game gift from alternate world altar"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Pokémon League
     * =============================================================== */
    {
      part: 12,
      title: "Pokémon League",
      summary:
        "Climb Mount Lanakila and challenge the newly formed Alola Pokémon League to become Champion!",
      locations: [
        {
          name: "Mount Lanakila",
          description:
            "The tallest mountain in Alola, covered in snow. This is where the brand new Pokémon League has been built. Fight through trainers and catch Ice-type Pokémon on the way up. Sneasel, Vanillish, Absol, and Snorunt appear in the tall grass. Gladion challenges you to one final battle before the League. At the summit, heal at the Pokémon Center and stock up — buy Full Restores, Revives, and Max Potions.",
          encounters: [
            enc("Sneasel", 215, ["Su", "Mo"], "Grass", "46-49", "20%"),
            enc("Snorunt", 361, ["Su", "Mo"], "Grass", "46-49", "20%"),
            enc("Vanillite", 582, ["Su", "Mo"], "Grass", "46-49", "20%"),
            enc("Absol", 359, ["Su", "Mo"], "Grass", "47-49", "10%"),
            enc("Vulpix", 37, ["Su", "Mo"], "Grass", "46-49", "20%"),
            enc("Sandshrew", 27, ["Su", "Mo"], "Grass", "46-49", "10%"),
          ],
          trainers: [
            trn("Pokémon Trainer", "Gladion", [
              pk("Crobat", 53, 169),
              pk("Weavile", 53, 461),
              pk("Lucario", 53, 448),
              pk("Silvally", 55, 773),
            ], "Z$4,400"),
          ],
          items: [
            item("TM13 Ice Beam", "Inside Mount Lanakila cave"),
            item("Max Revive", "Hidden near summit"),
            item("Icium Z", "Cave interior"),
          ],
        },
        {
          name: "Pokémon League — Elite Four & Champion",
          description:
            "The Alola Pokémon League is unique — you can challenge the four Elite Four members in any order! Each has a themed room. After defeating all four, you ascend to the Champion's throne, but there's a surprise — Professor Kukui is waiting to battle you as the final challenge! He uses a well-balanced team and will use a Z-Move. Kukui's starter is the one that has a type advantage over yours. Recommended level: 55-60+. Save before starting the gauntlet!",
          trainers: [
            trn("Elite Four", "Hala (Fighting)", [
              pk("Hariyama", 54, 297),
              pk("Primeape", 54, 57),
              pk("Bewear", 54, 760),
              pk("Poliwrath", 54, 62),
              pk("Crabominable", 55, 740),
            ], "Use Psychic, Flying, Fairy"),
            trn("Elite Four", "Olivia (Rock)", [
              pk("Relicanth", 54, 369),
              pk("Carbink", 54, 703),
              pk("Golem", 54, 76),
              pk("Probopass", 54, 476),
              pk("Lycanroc", 55, 745),
            ], "Use Water, Grass, Fighting, Ground, Steel"),
            trn("Elite Four", "Acerola (Ghost)", [
              pk("Sableye", 54, 302),
              pk("Drifblim", 54, 426),
              pk("Dhelmise", 54, 781),
              pk("Froslass", 54, 478),
              pk("Palossand", 55, 770),
            ], "Use Ghost, Dark"),
            trn("Elite Four", "Kahili (Flying)", [
              pk("Skarmory", 54, 227),
              pk("Crobat", 54, 169),
              pk("Oricorio", 54, 741),
              pk("Mandibuzz", 54, 630),
              pk("Toucannon", 55, 733),
            ], "Use Electric, Ice, Rock"),
            trn("Champion Battle", "Professor Kukui", [
              pk("Lycanroc", 57, 745),
              pk("Magnezone", 56, 462),
              pk("Snorlax", 56, 143),
              pk("Ninetales", 56, 38),
              pk("Braviary", 56, 628),
              pk("Incineroar", 58, 727),
            ], "Mixed team — bring diverse coverage"),
          ],
          items: [
            item("Champion Title", "Defeat Professor Kukui"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Post-Game: Ultra Beast Hunt
     * =============================================================== */
    {
      part: 13,
      title: "Post-Game: Ultra Beast Hunt",
      summary:
        "Join Looker and Anabel of the International Police to track down Ultra Beasts loose in Alola.",
      isPostGame: true,
      locations: [
        {
          name: "Ultra Beast Missions — Looker's Quest",
          description:
            "After becoming Champion, Looker and Anabel of the International Police recruit you to hunt Ultra Beasts that have escaped through Ultra Wormholes. You receive Beast Balls, special Poké Balls designed to catch Ultra Beasts. The missions take you across Alola to catch them in sequence. Each Ultra Beast appears at a specific location and must be caught (not defeated) to progress. Nihilego appears at Diglett's Tunnel and Wela Volcano Park. Buzzwole (Sun) or Pheromosa (Moon) appears on Melemele Meadow / Verdant Cavern. Xurkitree appears at Lush Jungle and Memorial Hill. Celesteela (Moon) or Kartana (Sun) appears at Malie Garden and Route 17/Haina Desert. Finally, Guzzlord appears deep in Resolution Cave.",
          items: [
            item("Beast Ball ×10", "From Looker at each mission"),
            item("Nihilego", "Diglett's Tunnel / Wela Volcano Park (Lv. 55)"),
            item("Buzzwole ×2", "Melemele Meadow (Sun only, Lv. 65)"),
            item("Pheromosa ×4", "Verdant Cavern (Moon only, Lv. 60)"),
            item("Xurkitree ×2", "Lush Jungle / Memorial Hill (Lv. 65)"),
            item("Kartana ×4", "Malie Garden / Route 17 (Sun only, Lv. 60)"),
            item("Celesteela ×2", "Haina Desert (Moon only, Lv. 65)"),
            item("Guzzlord", "Resolution Cave (Lv. 70)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Post-Game: Battle Tree & Legendaries
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Battle Tree & Legendary Encounters",
      summary:
        "Challenge the Battle Tree, find the Island Guardians, and encounter Necrozma.",
      isPostGame: true,
      locations: [
        {
          name: "Battle Tree",
          description:
            "Located at the far end of Poni Gauntlet, the Battle Tree is Alola's battle facility. Before entering you'll battle either Red or Blue from Kanto. The Battle Tree features Single, Double, and Multi Battle modes with progressively harder trainers. Earn Battle Points (BP) to exchange for competitive items, TMs, and Mega Stones. Red and Blue can be recruited as partners in Multi Battles.",
          trainers: [
            trn("Pokémon Trainer", "Red", [
              pk("Pikachu", 70, 25),
              pk("Lapras", 70, 131),
              pk("Snorlax", 70, 143),
              pk("Venusaur", 70, 3),
              pk("Charizard", 70, 6),
              pk("Blastoise", 70, 9),
            ], "Battle Tree entrance challenge"),
            trn("Pokémon Trainer", "Blue", [
              pk("Alakazam", 70, 65),
              pk("Machamp", 70, 68),
              pk("Gyarados", 70, 130),
              pk("Arcanine", 70, 59),
              pk("Exeggutor", 70, 103),
              pk("Aerodactyl", 70, 142),
            ], "Battle Tree entrance challenge"),
          ],
          items: [
            item("Mega Stones", "Purchase with BP at Battle Tree"),
            item("Various TMs", "Purchase with BP"),
            item("Choice items", "Purchase with BP"),
          ],
        },
        {
          name: "Guardian Deity Encounters",
          description:
            "After becoming Champion, you can visit each island's ruins to battle and catch the Guardian Deities — the Legendary Pokémon that protect each island. Each is Level 60 and has a powerful Z-Move. Save before each encounter. Tapu Koko (Electric/Fairy) is at the Ruins of Conflict on Melemele. Tapu Lele (Psychic/Fairy) is at the Ruins of Life on Akala. Tapu Bulu (Grass/Fairy) is at the Ruins of Abundance on Ula'ula. Tapu Fini (Water/Fairy) is at the Ruins of Hope on Poni.",
          items: [
            item("Tapu Koko", "Ruins of Conflict, Melemele Island (Lv. 60)"),
            item("Tapu Lele", "Ruins of Life, Akala Island (Lv. 60)"),
            item("Tapu Bulu", "Ruins of Abundance, Ula'ula Island (Lv. 60)"),
            item("Tapu Fini", "Ruins of Hope, Poni Island (Lv. 60)"),
          ],
        },
        {
          name: "Necrozma & Other Legendaries",
          description:
            "Necrozma, a mysterious Prism Pokémon, appears at Ten Carat Hill on Melemele Island at Level 75 after becoming Champion. It is a Psychic type with incredible Special Attack. Use Dark, Bug, and Ghost moves. Necrozma is very difficult to catch — Timer Balls become effective after many turns. Additionally, a Cosmog can be obtained by visiting the alternate world's Altar (Lake of the Sunne in Moon, Lake of the Moone in Sun) with your Solgaleo or Lunala in the party. The Ultra Beasts are detailed in the Looker quest (Part 13).",
          items: [
            item("Necrozma", "Ten Carat Hill, Farthest Hollow (Lv. 75)"),
            item("Cosmog", "Altar in alternate world (bring Solgaleo/Lunala)"),
            item("Zygarde", "Assemble from collected Cells/Cores at Route 16"),
          ],
        },
      ],
    },
  ],
};
