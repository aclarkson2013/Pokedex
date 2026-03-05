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

export const USUM_WALKTHROUGH: GameWalkthrough = {
  slug: "ultra-sun-ultra-moon",
  gameLabel: "Ultra Sun & Ultra Moon",
  versionTags: ["US", "UM"],
  parts: [
    /* ===============================================================
     *  PART 1 -- Melemele Island: Route 1, Choose Your Starter
     * =============================================================== */
    {
      part: 1,
      title: "Melemele Island — Route 1 & Choosing Your Starter",
      summary:
        "Arrive in Alola, explore Iki Town, and choose your first partner Pokémon from Professor Kukui.",
      locations: [
        {
          name: "Route 1 (Hau'oli Outskirts)",
          description:
            "You arrive in Alola and settle into your new home on Route 1. Professor Kukui lives nearby and will guide you to Iki Town on Melemele Island. Along the way you encounter wild Pokémon in the tall grass. After reaching Iki Town, you meet Kahuna Hala and witness a mysterious event at the Ruins of Conflict involving a girl named Lillie and the legendary Pokémon Tapu Koko. Tapu Koko gives you a Sparkling Stone. Return to Iki Town and choose your starter from Professor Kukui: Rowlet (Grass/Flying), Litten (Fire), or Popplio (Water). Your new friend Hau picks the starter weak to yours. After choosing, you battle Hau for the first time.",
          encounters: [
            enc("Pikipek", 731, ["US", "UM"], "Grass", "2-4", "30%"),
            enc("Yungoos", 734, ["US", "UM"], "Grass (Day)", "2-4", "30%"),
            enc("Rattata (Alolan)", 19, ["US", "UM"], "Grass (Night)", "2-4", "30%"),
            enc("Grubbin", 736, ["US", "UM"], "Grass", "2-4", "20%"),
            enc("Caterpie", 10, ["US", "UM"], "Grass", "3-5", "10%"),
            enc("Ledyba", 165, ["US", "UM"], "Grass (Day)", "3-5", "10%"),
            enc("Spinarak", 167, ["US", "UM"], "Grass (Night)", "3-5", "10%"),
          ],
          items: [
            item("Potion", "From your mom at your new house"),
            item("Rowlet", "Starter choice from Professor Kukui (Grass/Flying, #722)"),
            item("Litten", "Starter choice from Professor Kukui (Fire, #725)"),
            item("Popplio", "Starter choice from Professor Kukui (Water, #728)"),
            item("Sparkling Stone", "From Tapu Koko at the Ruins of Conflict"),
          ],
          trainers: [
            trn("Pokémon Trainer", "Hau", [
              pk("Pichu", 6, 172),
            ], "₽120"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 -- Routes 1-3, Trainer's School, Ilima's Trial
     * =============================================================== */
    {
      part: 2,
      title: "Routes 1-3, Trainer's School & Ilima's Trial",
      summary:
        "Train at the Trainer's School, explore Hau'oli City, and complete your first Island Trial at Verdant Cavern.",
      locations: [
        {
          name: "Trainer's School",
          description:
            "Professor Kukui sends you to the Trainer's School near Hau'oli City to learn the basics of battling. Battle four trainers inside and outside the school. Defeating them earns you an Exp. Share — a key item that distributes experience to your entire team. This makes leveling much easier throughout the game.",
          trainers: [
            trn("Youngster", "Joey", [pk("Metapod", 7, 11)], "₽140"),
            trn("Lass", "Audrey", [pk("Caterpie", 7, 10), pk("Alolan Meowth", 7, 52)], "₽140"),
            trn("Preschooler", "Mia", [pk("Bonsly", 7, 438)], "₽84"),
            trn("Rising Star", "Joseph", [pk("Grimer (Alolan)", 8, 88)], "₽384"),
          ],
          items: [
            item("Exp. Share", "From the Teacher after defeating all trainers"),
          ],
        },
        {
          name: "Hau'oli City",
          description:
            "The largest city on Melemele Island. Explore the Shopping District, visit the Tourist Bureau, and meet Captain Ilima. Team Skull grunts make their first appearance here, harassing locals. You can also pick up the Poké Finder from Rotom Dex, and Ilima will invite you to attempt his trial at Verdant Cavern. Stock up on Potions and Poké Balls at the Pokémon Center before heading to Route 2.",
          encounters: [
            enc("Wingull", 278, ["US", "UM"], "Grass", "5-8", "30%"),
            enc("Yungoos", 734, ["US", "UM"], "Grass (Day)", "5-8", "30%"),
            enc("Rattata (Alolan)", 19, ["US", "UM"], "Grass (Night)", "5-8", "30%"),
            enc("Abra", 63, ["US", "UM"], "Grass", "6-8", "10%"),
          ],
          items: [
            item("Rotom Pokédex", "From Professor Kukui"),
            item("Silk Scarf", "From Ilima in his house"),
          ],
          trainers: [
            trn("Team Skull Grunt", "Grunt", [pk("Drowzee", 9, 96)], "₽360"),
          ],
        },
        {
          name: "Route 2",
          description:
            "Head north through Route 2 toward Verdant Cavern. There is a Pokémon Center along the way and a Delibird encounter near the Berry fields. You encounter Lillie and Hau again before reaching the trial gate. The motel on Route 2 has some items to pick up.",
          encounters: [
            enc("Yungoos", 734, ["US", "UM"], "Grass (Day)", "6-9", "30%"),
            enc("Rattata (Alolan)", 19, ["US", "UM"], "Grass (Night)", "6-9", "30%"),
            enc("Smeargle", 235, ["US", "UM"], "Grass", "6-9", "20%"),
            enc("Cutiefly", 742, ["US", "UM"], "Grass", "6-9", "20%"),
            enc("Drowzee", 96, ["US", "UM"], "Grass", "6-9", "20%"),
            enc("Growlithe", 58, ["US", "UM"], "Grass", "7-9", "10%"),
          ],
          items: [
            item("Revive", "Pokémon Center on Route 2"),
            item("Super Potion", "Near the Berry fields"),
            item("Nest Ball", "Near Verdant Cavern entrance"),
          ],
        },
        {
          name: "Route 3",
          description:
            "A scenic route overlooking the ocean. You can catch Delibird and Hawlucha here. Melemele Meadow lies off to the side with Oricorio (Pom-Pom Style in US, Pa'u Style in UM if you use nectars). Continue onward past several trainers.",
          encounters: [
            enc("Delibird", 225, ["US", "UM"], "Grass", "9-12", "20%"),
            enc("Hawlucha", 701, ["US", "UM"], "Grass", "9-12", "20%"),
            enc("Mankey", 56, ["US", "UM"], "Grass", "9-12", "20%"),
            enc("Bagon", 371, ["US", "UM"], "Grass", "9-12", "10%"),
            enc("Rufflet", 627, ["US"], "Grass", "9-12", "10%"),
            enc("Vullaby", 629, ["UM"], "Grass", "9-12", "10%"),
          ],
        },
        {
          name: "Verdant Cavern — Ilima's Trial",
          description:
            "Your first Island Trial! Captain Ilima's trial requires you to defeat three Pokémon hiding in dens within the cavern — two Yungoos/Rattata and a Gumshoos/Raticate. After clearing the dens, the Totem Pokémon appears: Totem Gumshoos (in Ultra Sun, during day) or Totem Alolan Raticate (in Ultra Moon, during night). The Totem Pokémon is larger than normal and has boosted stats via its aura (Defense +1). It can call allies for help. After defeating the Totem Pokémon, you receive Normalium Z and the right to catch Pokémon inside Verdant Cavern.",
          encounters: [
            enc("Zubat", 41, ["US", "UM"], "Cave", "7-10", "50%"),
            enc("Diglett (Alolan)", 50, ["US", "UM"], "Cave", "7-10", "30%"),
            enc("Yungoos", 734, ["US"], "Cave (Day)", "8-10", "20%"),
            enc("Rattata (Alolan)", 19, ["UM"], "Cave (Night)", "8-10", "20%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Gumshoos (US)", [pk("Gumshoos", 12, 735)], "Aura: Defense +1, calls Yungoos ally"),
            trn("Totem Pokémon", "Raticate-A (UM)", [pk("Raticate (Alolan)", 12, 20)], "Aura: Defense +1, calls Rattata-A ally"),
          ],
          items: [
            item("Normalium Z", "Defeat the Totem Pokémon"),
            item("Z-Ring", "From Kahuna Hala after completing the trial"),
            item("X Attack", "Inside Verdant Cavern"),
            item("Super Potion", "Inside Verdant Cavern"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 -- Grand Trial: Kahuna Hala (Fighting)
     * =============================================================== */
    {
      part: 3,
      title: "Grand Trial: Kahuna Hala",
      summary:
        "Complete Ilima's trial aftermath, challenge Kahuna Hala in the Grand Trial, and prepare to depart for Akala Island.",
      locations: [
        {
          name: "Iki Town — Grand Trial",
          description:
            "After completing Verdant Cavern, return to Iki Town for the Grand Trial. Hala has had your Sparkling Stone crafted into a Z-Ring. At the festival that night, challenge Kahuna Hala. He specializes in Fighting-type Pokémon. Flying and Psychic types are super effective. Hala uses Fightinium Z on his Crabrawler for All-Out Pummeling, so make sure your Pokémon can survive a boosted Fighting move. After defeating Hala, you receive Fightinium Z and can use Tauros Ride to smash rocks. Prepare to travel to Akala Island with Hau.",
          trainers: [
            trn("Island Kahuna", "Hala", [
              pk("Machop", 15, 66),
              pk("Makuhita", 15, 296),
              pk("Crabrawler", 16, 739),
            ], "₽2,560 + Fightinium Z"),
          ],
          items: [
            item("Fightinium Z", "Defeat Kahuna Hala"),
            item("Ride Pager", "Tauros Charge — smash rocks on the overworld"),
          ],
        },
        {
          name: "Hau'oli City Marina",
          description:
            "Board the ferry to Akala Island. Professor Kukui and Lillie join you. You can now use Mantine Surf between islands — a new minigame in Ultra Sun & Ultra Moon where you ride Mantine across the ocean, performing tricks for BP (Battle Points). The higher your score, the more BP you earn to spend on items and move tutors.",
          items: [
            item("Mantine Surf", "Unlocked — surf between islands for BP rewards"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 -- Akala Island: Brooklet Hill & Lana's Trial
     * =============================================================== */
    {
      part: 4,
      title: "Akala Island — Brooklet Hill & Lana's Trial",
      summary:
        "Arrive on Akala Island, explore Heahea City and Route 4-5, and complete Lana's Water-type Trial at Brooklet Hill.",
      locations: [
        {
          name: "Heahea City",
          description:
            "Your arrival point on Akala Island. Meet Olivia, the Island Kahuna, and learn about the three trials you must complete. Visit the Dimensional Research Lab where Professor Burnet studies Ultra Wormholes — foreshadowing the Ultra Recon Squad's arrival. Explore the Tide Song Hotel and pick up items around town.",
          items: [
            item("TM49 Echoed Voice", "From a man in the Tourist Bureau"),
            item("Quick Ball", "Dimensional Research Lab"),
          ],
        },
        {
          name: "Route 4",
          description:
            "A route connecting Heahea City to Paniola Town. The route is full of trainers and has tall grass with a variety of Pokémon. Eevee can be found here in the wild — a great catch with many evolution options.",
          encounters: [
            enc("Eevee", 133, ["US", "UM"], "Grass", "11-14", "5%"),
            enc("Lillipup", 506, ["US", "UM"], "Grass", "11-14", "20%"),
            enc("Pikipek", 731, ["US", "UM"], "Grass", "11-14", "25%"),
            enc("Yungoos", 734, ["US", "UM"], "Grass (Day)", "11-14", "20%"),
            enc("Rattata (Alolan)", 19, ["US", "UM"], "Grass (Night)", "11-14", "20%"),
            enc("Mudbray", 749, ["US", "UM"], "Grass", "11-14", "20%"),
            enc("Crabrawler", 739, ["US", "UM"], "Berry piles", "11-14", "100%"),
          ],
          items: [
            item("Great Ball", "Near the entrance from Heahea City"),
            item("Amulet Coin", "From Professor Kukui on Route 5"),
          ],
        },
        {
          name: "Route 5 & Paniola Town",
          description:
            "Paniola Town is a ranch-themed town with a Pokémon Nursery where you can breed Pokémon. On Route 5 heading east, you encounter Gladion for the first time — a mysterious trainer with a powerful Type: Null. He battles you before you reach Brooklet Hill. Members of the Ultra Recon Squad may appear here in USUM, hinting at Ultra Beasts and Ultra Space.",
          encounters: [
            enc("Mudbray", 749, ["US", "UM"], "Grass", "12-15", "30%"),
            enc("Fomantis", 753, ["US", "UM"], "Grass", "12-15", "20%"),
            enc("Caterpie", 10, ["US", "UM"], "Grass", "12-15", "10%"),
            enc("Metapod", 11, ["US", "UM"], "Grass", "12-15", "10%"),
            enc("Butterfree", 12, ["US", "UM"], "Grass", "14-15", "5%"),
          ],
          trainers: [
            trn("Team Skull", "Gladion", [
              pk("Type: Null", 18, 772),
            ], "₽720"),
          ],
        },
        {
          name: "Brooklet Hill — Lana's Trial",
          description:
            "Captain Lana's trial takes place at Brooklet Hill, a series of ponds and waterfalls. You must investigate water disturbances by splashing Lapras Ride into the water. Each disturbance spawns a wild Wishiwashi that you must defeat. After clearing all disturbances, the Totem Pokémon appears: Totem Araquanid. It has an aura that boosts its Sp. Def by +1 and can call Dewpider as an ally. Araquanid's Water Bubble ability makes its Water moves extremely powerful. Use Electric or Grass types to counter it. After winning, you receive Waterium Z.",
          encounters: [
            enc("Dewpider", 751, ["US", "UM"], "Walking", "14-17", "20%"),
            enc("Surskit", 283, ["US", "UM"], "Walking", "14-17", "20%"),
            enc("Poliwag", 60, ["US", "UM"], "Surfing", "15-18", "40%"),
            enc("Wishiwashi", 746, ["US", "UM"], "Fishing", "15-18", "40%"),
            enc("Psyduck", 54, ["US", "UM"], "Surfing", "15-18", "30%"),
            enc("Goldeen", 118, ["US", "UM"], "Fishing", "15-18", "30%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Araquanid", [pk("Araquanid", 20, 752)], "Aura: Sp. Def +1, calls Dewpider ally"),
          ],
          items: [
            item("Waterium Z", "Defeat the Totem Pokémon"),
            item("Fishing Rod", "From Lana after completing the trial"),
            item("Net Ball", "Brooklet Hill 1F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 -- Wela Volcano, Kiawe's Trial, Lush Jungle, Mallow's Trial
     * =============================================================== */
    {
      part: 5,
      title: "Wela Volcano Park & Lush Jungle Trials",
      summary:
        "Complete Kiawe's Fire-type trial at Wela Volcano Park and Mallow's Grass-type trial in Lush Jungle.",
      locations: [
        {
          name: "Route 7 & Wela Volcano Park",
          description:
            "Head west from Royal Avenue toward Wela Volcano Park. The park is home to Fire-type Pokémon. Climb the volcano trail, battling hikers along the way. At the summit, Captain Kiawe's trial begins.",
          encounters: [
            enc("Cubone", 104, ["US", "UM"], "Grass", "16-19", "30%"),
            enc("Kangaskhan", 115, ["US", "UM"], "Grass", "16-19", "5%"),
            enc("Magby", 240, ["US", "UM"], "Grass", "16-19", "20%"),
            enc("Fletchinder", 662, ["US", "UM"], "Grass", "17-19", "10%"),
            enc("Salandit", 757, ["US", "UM"], "Grass", "16-19", "30%"),
          ],
        },
        {
          name: "Wela Volcano Park — Kiawe's Trial",
          description:
            "Captain Kiawe's trial is a dance quiz! You must watch Alolan Marowak dances and spot the difference between performances. Get the answers right to progress; wrong answers trigger a Hiker battle. After the quiz, the Totem Pokémon appears: Totem Alolan Marowak. It has an aura that boosts its Speed by +1 and can summon Salazzle as an ally. Water, Ground, Rock, Ghost, and Dark moves are effective. Marowak's Lightning Rod absorbs Electric moves, so don't rely on those. After winning, you earn Firium Z.",
          trainers: [
            trn("Totem Pokémon", "Marowak-A", [pk("Marowak (Alolan)", 22, 105)], "Aura: Speed +1, calls Salazzle ally"),
          ],
          items: [
            item("Firium Z", "Defeat the Totem Pokémon"),
            item("Charizard Ride", "Unlocked — fly to visited locations"),
          ],
        },
        {
          name: "Route 8 & Lush Jungle",
          description:
            "Route 8 connects to the Lush Jungle area. Catch Stufful here (rare but powerful when evolved). The Fossil Restoration Center is on Route 8 where you can revive fossils obtained later.",
          encounters: [
            enc("Stufful", 759, ["US", "UM"], "Grass", "17-20", "10%"),
            enc("Salandit", 757, ["US", "UM"], "Grass", "17-20", "20%"),
            enc("Fletchinder", 662, ["US", "UM"], "Grass", "17-20", "15%"),
            enc("Trumbeak", 732, ["US", "UM"], "Grass", "17-20", "15%"),
            enc("Wimpod", 767, ["US", "UM"], "Overworld", "17-20", "—"),
          ],
        },
        {
          name: "Lush Jungle — Mallow's Trial",
          description:
            "Captain Mallow's trial involves gathering four ingredients for a special stew: Mago Berry, Tiny Mushroom, Revival Herb, and Miracle Seed. Search the jungle to find them, battling wild Pokémon along the way. Once you cook the stew, its aroma attracts the Totem Pokémon: Totem Lurantis. It has an aura that boosts its Speed by +1 and calls Trumbeak or Comfey as allies. Lurantis is powerful — it uses Solar Blade and Synthesis. Fire, Flying, Poison, and Ice moves are super effective. After winning, you receive Grassium Z.",
          encounters: [
            enc("Fomantis", 753, ["US", "UM"], "Grass", "18-21", "30%"),
            enc("Paras", 46, ["US", "UM"], "Grass", "18-21", "20%"),
            enc("Morelull", 755, ["US", "UM"], "Grass", "18-21", "20%"),
            enc("Bounsweet", 761, ["US", "UM"], "Grass", "18-21", "20%"),
            enc("Comfey", 764, ["US", "UM"], "Grass", "18-21", "5%"),
            enc("Oranguru", 765, ["UM"], "Grass", "18-21", "5%"),
            enc("Passimian", 766, ["US"], "Grass", "18-21", "5%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Lurantis", [pk("Lurantis", 24, 754)], "Aura: Speed +1, calls Trumbeak/Comfey ally"),
          ],
          items: [
            item("Grassium Z", "Defeat the Totem Pokémon"),
            item("Mago Berry", "Found during trial foraging"),
            item("Tiny Mushroom", "Found during trial foraging"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 -- Grand Trial: Olivia (Rock)
     * =============================================================== */
    {
      part: 6,
      title: "Grand Trial: Kahuna Olivia",
      summary:
        "Explore Diglett's Tunnel and Memorial Hill, then face Kahuna Olivia in the Akala Grand Trial.",
      locations: [
        {
          name: "Diglett's Tunnel",
          description:
            "A tunnel connecting Route 9 to Konikoni City. The Ultra Recon Squad makes a significant appearance here, discussing Ultra Wormholes and the mysterious Pokémon Necrozma. Wild Alolan Diglett are common inside. At the exit, you can explore Route 9 via Lapras Ride.",
          encounters: [
            enc("Diglett (Alolan)", 50, ["US", "UM"], "Cave", "19-22", "50%"),
            enc("Zubat", 41, ["US", "UM"], "Cave", "19-22", "30%"),
            enc("Larvitar", 246, ["US", "UM"], "Cave", "19-22", "10%"),
            enc("Carbink", 703, ["US", "UM"], "Cave", "20-22", "10%"),
          ],
          items: [
            item("Dusk Ball", "Inside Diglett's Tunnel"),
            item("Fire Stone", "Hidden near tunnel exit"),
          ],
        },
        {
          name: "Memorial Hill & Ruins of Life",
          description:
            "A somber area with gravestones and Ghost-type Pokémon. Team Skull grunts harass visitors here. Beyond Memorial Hill lies the Ruins of Life, home to Tapu Lele. You cannot fully explore the ruins until post-game.",
          encounters: [
            enc("Zubat", 41, ["US", "UM"], "Grass", "20-23", "30%"),
            enc("Gastly", 92, ["US", "UM"], "Grass", "20-23", "30%"),
            enc("Phantump", 708, ["US", "UM"], "Grass", "20-23", "30%"),
            enc("Litwick", 607, ["US", "UM"], "Grass", "20-23", "10%"),
          ],
        },
        {
          name: "Konikoni City — Grand Trial: Olivia",
          description:
            "The charming city on the south side of Akala Island. Visit the jewelry shop and Olivia's house. When ready, challenge Kahuna Olivia at the Ruins of Life. She specializes in Rock-type Pokémon. Water, Grass, Fighting, Ground, and Steel moves are super effective. She uses Rockium Z on her Lycanroc for Continental Crush, which hits extremely hard. After winning, you receive Rockium Z and can use Charizard Ride to fly across Alola. Prepare to depart for Ula'ula Island.",
          trainers: [
            trn("Island Kahuna", "Olivia", [
              pk("Anorith", 27, 347),
              pk("Lileep", 27, 345),
              pk("Lycanroc (Midnight)", 28, 745),
            ], "₽4,480 + Rockium Z"),
          ],
          items: [
            item("Rockium Z", "Defeat Kahuna Olivia"),
            item("Max Potion", "Konikoni City item shop"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 -- Ula'ula Island: Hokulani Observatory, Sophocles' Trial
     * =============================================================== */
    {
      part: 7,
      title: "Ula'ula Island — Hokulani Observatory & Sophocles' Trial",
      summary:
        "Arrive on Ula'ula Island, explore Malie City, ascend Mount Hokulani, and complete Sophocles' Electric-type trial.",
      locations: [
        {
          name: "Malie City & Malie Garden",
          description:
            "Arrive on Ula'ula Island at Malie City, which has a Johto-inspired aesthetic. Explore Malie Garden where you battle Professor Kukui. Hau challenges you near the library. The Ultra Recon Squad appears again to discuss Necrozma and the Ultra Beasts, warning that Ultra Wormholes are becoming unstable.",
          encounters: [
            enc("Psyduck", 54, ["US", "UM"], "Walking", "24-27", "30%"),
            enc("Poliwhirl", 61, ["US", "UM"], "Walking", "24-27", "10%"),
            enc("Goldeen", 118, ["US", "UM"], "Walking", "24-27", "20%"),
            enc("Gyarados", 130, ["US", "UM"], "Surfing", "25-28", "10%"),
          ],
          trainers: [
            trn("Pokémon Professor", "Kukui", [
              pk("Lycanroc (Midday)", 28, 745),
            ], "Friendly battle — no reward"),
          ],
          items: [
            item("TM76 Fly", "From a man in Malie City"),
          ],
        },
        {
          name: "Route 10 & Mount Hokulani",
          description:
            "Take the bus up Mount Hokulani or walk through Route 10. The route has Electric- and Steel-type Pokémon. At the observatory, you find Captain Sophocles preparing his trial.",
          encounters: [
            enc("Skarmory", 227, ["US", "UM"], "Grass", "24-27", "20%"),
            enc("Fearow", 22, ["US", "UM"], "Grass", "24-27", "20%"),
            enc("Geodude (Alolan)", 74, ["US", "UM"], "Grass", "24-27", "20%"),
            enc("Pancham", 674, ["US", "UM"], "Grass", "24-27", "20%"),
            enc("Cleffa", 173, ["US", "UM"], "Grass", "24-27", "10%"),
          ],
          items: [
            item("Thunder Stone", "Mount Hokulani summit"),
            item("Metal Coat", "Mount Hokulani, near the observatory"),
          ],
        },
        {
          name: "Hokulani Observatory — Sophocles' Trial",
          description:
            "Captain Sophocles' trial involves answering audio quiz questions using a special machine. In USUM, the trial is different from Sun/Moon: you must call Pokémon using audio cues and battle Charjabug and Elekid along the way. The Totem Pokémon is Totem Togedemaru. It has an aura that boosts its Attack and Defense by +1 and can call Skarmory as an ally. Togedemaru's Lightning Rod ability redirects Electric moves, and its Iron Head + Spiky Shield combo is dangerous. Use Fire or Ground moves. After winning, you receive Electrium Z.",
          trainers: [
            trn("Totem Pokémon", "Togedemaru", [pk("Togedemaru", 29, 777)], "Aura: Attack +1, Defense +1, calls Skarmory ally"),
          ],
          items: [
            item("Electrium Z", "Defeat the Totem Pokémon"),
            item("Steelium Z", "From Molayne at the observatory after the trial"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 -- Acerola's Trial, Po Town, Grand Trial: Nanu
     * =============================================================== */
    {
      part: 8,
      title: "Acerola's Trial, Po Town & Grand Trial: Nanu",
      summary:
        "Complete Acerola's Ghost-type trial at the Thrifty Megamart, infiltrate Team Skull's headquarters in Po Town, and challenge Kahuna Nanu.",
      locations: [
        {
          name: "Route 12 & Tapu Village",
          description:
            "Route 12 is a rocky coastal route where you need Mudsdale Ride to cross rough terrain. Tapu Village is a quiet settlement near the base of Mount Lanakila. The Aether House is nearby where Acerola cares for orphaned Pokémon.",
          encounters: [
            enc("Mudbray", 749, ["US", "UM"], "Grass", "25-28", "20%"),
            enc("Geodude (Alolan)", 74, ["US", "UM"], "Grass", "25-28", "30%"),
            enc("Torkoal", 324, ["US", "UM"], "Grass", "25-28", "20%"),
            enc("Elekid", 239, ["US", "UM"], "Grass", "25-28", "10%"),
          ],
        },
        {
          name: "Thrifty Megamart (Abandoned) — Acerola's Trial",
          description:
            "Captain Acerola's trial takes place in an abandoned supermarket haunted by Ghost-type Pokémon. You must follow a mysterious Pikachu-shaped ghost (actually a Mimikyu) through the aisles, investigating disturbances and taking photos with the Poké Finder. After several encounters, the Totem Pokémon appears: Totem Mimikyu. It has an aura that boosts all stats by +1 and can call Banette or Jellicent as allies. Mimikyu's Disguise ability lets it tank one hit for free. Use strong super-effective moves — Ghost or Steel. After winning, you receive Ghostium Z.",
          encounters: [
            enc("Gastly", 92, ["US", "UM"], "Walking", "27-30", "30%"),
            enc("Haunter", 93, ["US", "UM"], "Walking", "27-30", "20%"),
            enc("Golbat", 42, ["US", "UM"], "Walking", "27-30", "20%"),
            enc("Klefki", 707, ["US", "UM"], "Walking", "27-30", "10%"),
            enc("Mimikyu", 778, ["US", "UM"], "Walking", "27-30", "5%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Mimikyu", [pk("Mimikyu", 33, 778)], "Aura: All stats +1, calls Banette/Jellicent ally"),
          ],
          items: [
            item("Ghostium Z", "Defeat the Totem Pokémon"),
          ],
        },
        {
          name: "Po Town — Team Skull HQ",
          description:
            "Team Skull has taken over the entire town of Po Town, surrounded by barricades. Battle through grunts in the rain-soaked streets. Team Skull Admin Plumeria guards the Shady House. Inside, battle more grunts and find the leader Guzma on the top floor. He uses Bug-type Pokémon and his signature Golisopod. After defeating him, recover the stolen Pokémon from the Aether House. This leads to Kahuna Nanu stepping in.",
          trainers: [
            trn("Team Skull Admin", "Plumeria", [
              pk("Golbat", 34, 42),
              pk("Salazzle", 34, 758),
            ], "₽1,360"),
            trn("Team Skull Boss", "Guzma", [
              pk("Golisopod", 34, 768),
              pk("Ariados", 34, 168),
              pk("Masquerain", 34, 284),
            ], "₽2,720"),
          ],
          items: [
            item("Buginium Z", "From Guzma after the battle"),
            item("TM36 Sludge Bomb", "Po Town Pokémon Center"),
          ],
        },
        {
          name: "Malie City — Grand Trial: Nanu",
          description:
            "Return to Malie City to challenge Kahuna Nanu. He specializes in Dark-type Pokémon and is a reluctant battler. His team includes Sableye, Krokorok, and Persian (Alolan). He uses Darkinium Z on his Persian for Black Hole Eclipse. Fighting, Bug, and Fairy moves are super effective against most of his team. After winning, you receive Darkinium Z.",
          trainers: [
            trn("Island Kahuna", "Nanu", [
              pk("Sableye", 34, 302),
              pk("Krokorok", 34, 552),
              pk("Persian (Alolan)", 35, 53),
            ], "₽5,600 + Darkinium Z"),
          ],
          items: [
            item("Darkinium Z", "Defeat Kahuna Nanu"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 -- Aether Paradise, Lusamine & Necrozma Events
     * =============================================================== */
    {
      part: 9,
      title: "Aether Paradise & Necrozma Events",
      summary:
        "Infiltrate the Aether Foundation, confront Lusamine, and witness Necrozma's emergence through an Ultra Wormhole.",
      locations: [
        {
          name: "Aether Paradise — First Visit",
          description:
            "You are invited to Aether Paradise, a massive artificial island dedicated to Pokémon conservation. Meet Aether President Lusamine, Chief Faba, and learn about the Aether Foundation's research. However, things are not as they seem. An Ultra Wormhole opens and an Ultra Beast (Nihilego) appears! After a brief encounter, Lusamine becomes obsessed with Ultra Wormholes. In USUM, the focus shifts more toward Necrozma — the Blinding One — and the Ultra Recon Squad warns that Necrozma is draining light from worlds through Ultra Wormholes.",
          items: [
            item("TM29 Psychic", "From Faba in Aether Paradise"),
            item("Big Malasada", "Aether Paradise cafeteria"),
          ],
        },
        {
          name: "Aether Paradise — Infiltration",
          description:
            "After Team Skull kidnaps Lillie, you return to Aether Paradise to rescue her and Cosmog (Nebby). Battle through Aether Foundation employees who are trying to stop you. Confront Faba, then battle Lusamine. In USUM, Lusamine is not the main antagonist — she is manipulated by Necrozma's influence. The battle with Lusamine is tough but she does not merge with Nihilego like in Sun/Moon. After the events, Lillie takes Nebby and decides to go to the Altar on Poni Island. Gladion gives you a Master Ball.",
          trainers: [
            trn("Aether Branch Chief", "Faba", [
              pk("Hypno", 39, 97),
              pk("Bruxish", 39, 779),
            ], "₽6,240"),
            trn("Aether President", "Lusamine", [
              pk("Clefable", 41, 36),
              pk("Lilligant", 41, 549),
              pk("Milotic", 41, 350),
              pk("Mismagius", 41, 429),
              pk("Bewear", 41, 760),
            ], "₽8,200"),
          ],
          items: [
            item("Master Ball", "From Gladion after the events"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 -- Poni Island, Vast Poni Canyon, Altar
     * =============================================================== */
    {
      part: 10,
      title: "Poni Island — Vast Poni Canyon & The Altar",
      summary:
        "Explore Poni Island, complete the final trial at Vast Poni Canyon, and witness Necrozma fuse with the legendary Pokémon at the Altar.",
      locations: [
        {
          name: "Seafolk Village",
          description:
            "The main settlement on Poni Island, built on houseboats. There is no proper Pokémon Center building — it is on a boat! Meet Hapu, who will eventually become the Island Kahuna. The elderly Captain Mina can be found here. Stock up on supplies — the challenges ahead are difficult.",
          items: [
            item("Dragonium Z", "From a trainer at the Seafolk Village restaurant"),
            item("Aerodactyl", "Restore Old Amber at the Fossil shop on the boats"),
          ],
        },
        {
          name: "Poni Wilds & Ancient Poni Path",
          description:
            "Wild areas with strong Pokémon. Battle trainers along the coast and inland paths. Hapu joins you briefly as you travel toward the Ruins of Hope where Tapu Fini resides. After events at the ruins, Hapu is formally appointed as the new Island Kahuna.",
          encounters: [
            enc("Pelipper", 279, ["US", "UM"], "Grass", "40-43", "20%"),
            enc("Gastrodon", 423, ["US", "UM"], "Grass", "40-43", "15%"),
            enc("Granbull", 210, ["US", "UM"], "Grass", "40-43", "15%"),
            enc("Exeggcute", 102, ["US", "UM"], "Grass", "40-43", "15%"),
            enc("Gumshoos", 735, ["US", "UM"], "Grass (Day)", "40-43", "15%"),
            enc("Raticate (Alolan)", 20, ["US", "UM"], "Grass (Night)", "40-43", "15%"),
          ],
        },
        {
          name: "Vast Poni Canyon",
          description:
            "The final trial site — a massive canyon with powerful wild Pokémon. There is no Captain for this trial. You must navigate the canyon, solving puzzles and battling wild Pokémon. At the end, you face Totem Kommo-o (Dragon/Fighting). It has an aura that boosts all stats and can call Scizor or Noivern as allies. Fairy-type moves are 4x effective. After clearing the canyon, you receive Dragonium Z (if you did not already get it) and proceed to the Altar.",
          encounters: [
            enc("Golbat", 42, ["US", "UM"], "Cave", "40-44", "30%"),
            enc("Boldore", 525, ["US", "UM"], "Cave", "40-44", "20%"),
            enc("Carbink", 703, ["US", "UM"], "Cave", "40-44", "10%"),
            enc("Jangmo-o", 782, ["US", "UM"], "Grass", "40-44", "10%"),
            enc("Hakamo-o", 783, ["US", "UM"], "Grass", "41-44", "5%"),
            enc("Mienfoo", 619, ["US", "UM"], "Grass", "40-44", "15%"),
            enc("Machoke", 67, ["US", "UM"], "Grass", "40-44", "10%"),
          ],
          trainers: [
            trn("Totem Pokémon", "Kommo-o", [pk("Kommo-o", 49, 784)], "Aura: All stats +1, calls Scizor/Noivern ally"),
          ],
          items: [
            item("TM02 Dragon Claw", "Vast Poni Canyon interior"),
            item("Rare Candy", "Hidden on the cliff path"),
          ],
        },
        {
          name: "Altar of the Sunne / Altar of the Moone",
          description:
            "At the Altar, Lillie plays the Sun Flute (US) or Moon Flute (UM) to evolve Nebby. In Ultra Sun, Cosmoem evolves into Solgaleo (Psychic/Steel). In Ultra Moon, Cosmoem evolves into Lunala (Psychic/Ghost). However, Necrozma descends through an Ultra Wormhole and forcibly fuses with the legendary Pokémon — becoming Dusk Mane Necrozma (fused with Solgaleo, in US) or Dawn Wings Necrozma (fused with Lunala, in UM). You must battle Necrozma here, but it escapes through an Ultra Wormhole to Ultra Megalopolis.",
          trainers: [
            trn("Legendary Battle", "Necrozma (Fused)", [
              pk("Dusk Mane Necrozma", 50, 800),
            ], "Ultra Sun — Necrozma + Solgaleo fusion"),
            trn("Legendary Battle", "Necrozma (Fused)", [
              pk("Dawn Wings Necrozma", 50, 800),
            ], "Ultra Moon — Necrozma + Lunala fusion"),
          ],
          items: [
            item("Sun Flute", "Used at the Altar (Ultra Sun)"),
            item("Moon Flute", "Used at the Altar (Ultra Moon)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 -- Ultra Megalopolis & Ultra Necrozma
     * =============================================================== */
    {
      part: 11,
      title: "Ultra Megalopolis & Ultra Necrozma",
      summary:
        "Travel through Ultra Space to Ultra Megalopolis and face the terrifyingly powerful Ultra Necrozma.",
      locations: [
        {
          name: "Ultra Wormhole Ride",
          description:
            "Ride Solgaleo (US) or Lunala (UM) through Ultra Space in a mini-game, navigating wormholes. The Ultra Recon Squad guides you toward Ultra Megalopolis, a city that has lost its light because Necrozma stole it.",
        },
        {
          name: "Ultra Megalopolis",
          description:
            "A dark, otherworldly city in Ultra Space. The Ultra Recon Squad explains that Necrozma was once a being of light but was shattered, and now it hungers to absorb all light. At the top of Megalo Tower, you confront Ultra Necrozma — Necrozma in its true, radiant form. This is one of the hardest mandatory battles in any Pokémon game. Ultra Necrozma has a base stat total of 754, higher than Arceus, and receives a +1 boost to all stats from its Totem-like aura. It knows Photon Geyser, Smart Strike, Dragon Pulse, and Power Gem. Strategy: Use a Pokémon with Toxic + Protect to stall it, a Focus Sash to survive a hit, or Zoroark's Illusion to trick its AI. After defeating Ultra Necrozma, it separates from Solgaleo/Lunala. You can catch Necrozma here. Return to Alola with the legendary Pokémon.",
          trainers: [
            trn("Ultra Boss", "Ultra Necrozma", [
              pk("Ultra Necrozma", 60, 800),
            ], "BST 754 + Aura: All stats +1. Use Toxic, Focus Sash, or Zoroark Illusion"),
          ],
          items: [
            item("Ultranecrozium Z", "After defeating Ultra Necrozma"),
            item("Solgaleo", "Capture after Ultra Necrozma battle (Ultra Sun)"),
            item("Lunala", "Capture after Ultra Necrozma battle (Ultra Moon)"),
            item("Necrozma", "Capture opportunity after Ultra Necrozma battle"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 -- Pokémon League
     * =============================================================== */
    {
      part: 12,
      title: "Pokémon League — Champion Title Defense",
      summary:
        "Climb Mount Lanakila, challenge the Elite Four, and become the first Champion of Alola.",
      locations: [
        {
          name: "Mount Lanakila",
          description:
            "The final stretch before the Pokémon League. Mount Lanakila is covered in snow and has powerful wild Pokémon. Battle trainers along the way and catch Ice-type Pokémon. Gladion challenges you near the summit with his evolved Silvally. Hau waits at the peak with words of encouragement.",
          encounters: [
            enc("Snorunt", 361, ["US", "UM"], "Grass", "44-47", "20%"),
            enc("Sneasel", 215, ["US", "UM"], "Grass", "44-47", "20%"),
            enc("Absol", 359, ["US", "UM"], "Grass", "44-47", "10%"),
            enc("Vanillite", 582, ["US", "UM"], "Grass", "44-47", "20%"),
            enc("Vulpix (Alolan)", 37, ["US"], "Grass", "44-47", "20%"),
            enc("Sandshrew (Alolan)", 27, ["UM"], "Grass", "44-47", "20%"),
          ],
          trainers: [
            trn("Pokémon Trainer", "Gladion", [
              pk("Crobat", 53, 169),
              pk("Lucario", 53, 448),
              pk("Zoroark", 53, 571),
              pk("Silvally", 55, 773),
            ], "₽8,800"),
          ],
          items: [
            item("TM13 Ice Beam", "Mount Lanakila cave"),
            item("Max Revive", "Hidden on the snowy path"),
            item("Icium Z", "Near the cave with Alolan Vulpix/Sandshrew"),
          ],
        },
        {
          name: "Pokémon League",
          description:
            "The Alola Pokémon League is newly built atop Mount Lanakila. Unlike other regions, you can challenge the Elite Four in any order. The four members are: Molayne (Steel), Olivia (Rock), Acerola (Ghost), and Kahili (Flying). After defeating all four, proceed to the Champion's chamber — since the League is new, there is no reigning Champion. However, after taking the throne, a challenger immediately appears: Professor Kukui (or Hau in some scenarios). Defeat them to become the first-ever Alola Champion! Recommended level: 55-60+.",
          trainers: [
            trn("Elite Four", "Molayne", [
              pk("Klefki", 56, 707),
              pk("Bisharp", 56, 625),
              pk("Magnezone", 56, 462),
              pk("Metagross", 56, 376),
              pk("Dugtrio (Alolan)", 57, 51),
            ], "Steel specialist — use Fire, Ground, Fighting"),
            trn("Elite Four", "Olivia", [
              pk("Armaldo", 56, 348),
              pk("Cradily", 56, 346),
              pk("Gigalith", 56, 526),
              pk("Probopass", 56, 476),
              pk("Lycanroc (Midnight)", 57, 745),
            ], "Rock specialist — use Water, Grass, Fighting, Ground, Steel"),
            trn("Elite Four", "Acerola", [
              pk("Banette", 56, 354),
              pk("Drifblim", 56, 426),
              pk("Dhelmise", 56, 781),
              pk("Froslass", 56, 478),
              pk("Palossand", 57, 770),
            ], "Ghost specialist — use Ghost, Dark"),
            trn("Elite Four", "Kahili", [
              pk("Braviary", 56, 628),
              pk("Hawlucha", 56, 701),
              pk("Oricorio (Baile)", 56, 741),
              pk("Mandibuzz", 56, 630),
              pk("Toucannon", 57, 733),
            ], "Flying specialist — use Electric, Ice, Rock"),
            trn("Champion Challenger", "Professor Kukui", [
              pk("Lycanroc (Midday)", 57, 745),
              pk("Magnezone", 56, 462),
              pk("Braviary", 56, 628),
              pk("Snorlax", 56, 143),
              pk("Ninetales (Alolan)", 56, 38),
              pk("Incineroar", 58, 727),
            ], "Mixed team — varies by your starter choice"),
          ],
          items: [
            item("Champion Title", "Defeat the final challenger to become Champion"),
            item("Tapunium Z", "From all four Tapu guardians after visiting their ruins"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 -- Post-Game: Ultra Wormholes & Legendaries
     * =============================================================== */
    {
      part: 13,
      title: "Post-Game: Ultra Wormholes & Legendary Pokémon",
      summary:
        "Explore Ultra Wormholes to encounter legendary Pokémon from every generation and Ultra Beasts in alternate dimensions.",
      isPostGame: true,
      locations: [
        {
          name: "Ultra Warp Ride",
          description:
            "After becoming Champion, you can access Ultra Warp Ride from the Altar of the Sunne/Moone. Ride Solgaleo or Lunala through Ultra Space, navigating wormholes of different colors. The further you travel and the rarer the wormhole color, the more likely you are to find legendary Pokémon. White wormholes lead to Ultra Beasts, colored wormholes lead to legendary Pokémon from past games. This is the primary method for catching legendaries from all generations in USUM.",
        },
        {
          name: "Ultra Beast Worlds",
          description:
            "White wormholes lead to alternate dimensions where you can encounter Ultra Beasts. Each Ultra Beast has its own unique world. Some Ultra Beasts are version-exclusive: Stakataka (Ultra Sun) and Blacephalon (Ultra Moon). Additionally, Poipole is given to you as a gift by the Ultra Recon Squad at the Ultra Megalopolis — it evolves into Naganadel when leveled up knowing Dragon Pulse.",
          encounters: [
            enc("Nihilego", 793, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Buzzwole", 794, ["US"], "Ultra Space", "60", "—"),
            enc("Pheromosa", 795, ["UM"], "Ultra Space", "60", "—"),
            enc("Xurkitree", 796, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Celesteela", 797, ["UM"], "Ultra Space", "60", "—"),
            enc("Kartana", 798, ["US"], "Ultra Space", "60", "—"),
            enc("Guzzlord", 799, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Stakataka", 805, ["US"], "Ultra Space", "60", "—"),
            enc("Blacephalon", 806, ["UM"], "Ultra Space", "60", "—"),
          ],
          items: [
            item("Poipole", "Gift from Ultra Recon Squad at Ultra Megalopolis (#803)"),
            item("Beast Ball", "From Looker for catching Ultra Beasts"),
          ],
        },
        {
          name: "Legendary Pokémon Wormholes",
          description:
            "Colored wormholes in Ultra Space lead to pocket dimensions where you can catch legendary Pokémon from all previous generations. Which legendaries appear depends on your game version. Some require both a specific Pokémon in your party and a specific version. All legendaries appear at Level 60. Save before entering each wormhole! This is the most comprehensive legendary collection feature in any Pokémon game.",
          encounters: [
            enc("Mewtwo", 150, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Raikou", 243, ["US"], "Ultra Space", "60", "—"),
            enc("Entei", 244, ["UM"], "Ultra Space", "60", "—"),
            enc("Suicune", 245, ["US", "UM"], "Ultra Space", "60", "Requires Raikou + Entei"),
            enc("Ho-Oh", 250, ["US"], "Ultra Space", "60", "—"),
            enc("Lugia", 249, ["UM"], "Ultra Space", "60", "—"),
            enc("Groudon", 383, ["US"], "Ultra Space", "60", "—"),
            enc("Kyogre", 382, ["UM"], "Ultra Space", "60", "—"),
            enc("Rayquaza", 384, ["US", "UM"], "Ultra Space", "60", "Requires Groudon + Kyogre"),
            enc("Uxie", 480, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Mesprit", 481, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Azelf", 482, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Dialga", 483, ["US"], "Ultra Space", "60", "—"),
            enc("Palkia", 484, ["UM"], "Ultra Space", "60", "—"),
            enc("Giratina", 487, ["US", "UM"], "Ultra Space", "60", "Requires Dialga + Palkia"),
            enc("Heatran", 485, ["US"], "Ultra Space", "60", "—"),
            enc("Regigigas", 486, ["UM"], "Ultra Space", "60", "—"),
            enc("Cresselia", 488, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Cobalion", 638, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Terrakion", 639, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Virizion", 640, ["US", "UM"], "Ultra Space", "60", "—"),
            enc("Reshiram", 643, ["US"], "Ultra Space", "60", "—"),
            enc("Zekrom", 644, ["UM"], "Ultra Space", "60", "—"),
            enc("Kyurem", 646, ["US", "UM"], "Ultra Space", "60", "Requires Reshiram + Zekrom"),
            enc("Tornadus", 641, ["US"], "Ultra Space", "60", "—"),
            enc("Thundurus", 642, ["UM"], "Ultra Space", "60", "—"),
            enc("Landorus", 645, ["US", "UM"], "Ultra Space", "60", "Requires Tornadus + Thundurus"),
            enc("Xerneas", 716, ["US"], "Ultra Space", "60", "—"),
            enc("Yveltal", 717, ["UM"], "Ultra Space", "60", "—"),
            enc("Zygarde", 718, ["US", "UM"], "Ultra Space", "60", "Requires Xerneas + Yveltal"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 -- Post-Game: Team Rainbow Rocket Episode
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Episode RR — Team Rainbow Rocket",
      summary:
        "Team Rainbow Rocket, led by Giovanni and composed of villainous team leaders from every generation, takes over the Festival Plaza. Defeat them all!",
      isPostGame: true,
      locations: [
        {
          name: "Festival Plaza — Team Rainbow Rocket Takeover",
          description:
            "After becoming Champion, Team Rainbow Rocket — an organization led by Giovanni that has recruited the leaders of every villainous team from alternate dimensions — seizes control of the Festival Plaza and then Lusamine's Aether Paradise mansion. The Ultra Recon Squad and Aether Foundation need your help to stop them. This is the ultimate villain gauntlet and one of the most epic post-game episodes in Pokémon history.",
        },
        {
          name: "Team Rainbow Rocket Castle",
          description:
            "Lusamine's mansion has been transformed into a castle. Inside, you must battle through each villainous leader one by one: Archie (Team Aqua, Water), Maxie (Team Magma, Fire/Ground), Cyrus (Team Galactic, uses Dialga or Palkia), Ghetsis (Team Plasma, uses Zekrom or Reshiram), and Lysandre (Team Flare, uses Xerneas or Yveltal). Each leader comes from an alternate dimension where they succeeded in their plans. They use legendary Pokémon! After defeating all five, confront Giovanni himself at the top — he wields Mewtwo.",
          trainers: [
            trn("Team Aqua Leader", "Archie", [
              pk("Sharpedo", 65, 319),
              pk("Muk", 65, 89),
              pk("Crobat", 65, 169),
              pk("Kyogre", 66, 382),
            ], "₽10,560"),
            trn("Team Magma Leader", "Maxie", [
              pk("Camerupt", 65, 323),
              pk("Weezing", 65, 110),
              pk("Crobat", 65, 169),
              pk("Groudon", 66, 383),
            ], "₽10,560"),
            trn("Team Galactic Leader", "Cyrus", [
              pk("Honchkrow", 65, 430),
              pk("Houndoom", 65, 229),
              pk("Crobat", 65, 169),
              pk("Dialga", 66, 483),
            ], "₽10,560 — US version"),
            trn("Team Plasma Leader", "Ghetsis", [
              pk("Cofagrigus", 65, 563),
              pk("Hydreigon", 65, 635),
              pk("Eelektross", 65, 604),
              pk("Zekrom", 66, 644),
            ], "₽10,560 — Uses Zekrom or Reshiram"),
            trn("Team Flare Leader", "Lysandre", [
              pk("Mienshao", 65, 620),
              pk("Honchkrow", 65, 430),
              pk("Pyroar", 65, 668),
              pk("Xerneas", 66, 716),
            ], "₽10,560 — US version; uses Yveltal in UM"),
            trn("Team Rainbow Rocket Boss", "Giovanni", [
              pk("Dugtrio", 66, 51),
              pk("Nidoking", 66, 34),
              pk("Nidoqueen", 66, 31),
              pk("Rhyperior", 66, 464),
              pk("Mewtwo", 70, 150),
            ], "₽11,200"),
          ],
          items: [
            item("Mega Stones", "Various — from defeated leaders"),
            item("Gold Bottle Cap", "From Lusamine after Episode RR"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 15 -- Post-Game: Battle Tree & Battle Agency
     * =============================================================== */
    {
      part: 15,
      title: "Post-Game: Battle Tree & Battle Agency",
      summary:
        "Test your skills at the Battle Tree against powerful trainers from across the Pokémon world, and earn rewards at the Battle Agency.",
      isPostGame: true,
      locations: [
        {
          name: "Battle Tree",
          description:
            "Located on Poni Island, the Battle Tree is the ultimate competitive challenge in USUM. Choose between Single, Double, or Multi battles. Battle through consecutive trainers, earning BP for each streak. Famous trainers from past games appear as opponents and potential partners, including Red and Blue from Kanto, Wally from Hoenn, and Cynthia from Sinnoh. Reaching streak milestones earns you rare items like Mega Stones and Gold Bottle Caps. At streak 20, you face a Battle Legend (Red or Blue). This is the endgame for competitive team testing.",
          items: [
            item("Mega Stones", "Purchase with BP at Battle Tree shop"),
            item("Gold Bottle Cap", "50-win streak reward"),
            item("Lansat Berry", "100-win streak reward"),
            item("Starf Berry", "200-win streak reward"),
            item("Ability Capsule", "100 BP at Battle Tree shop"),
          ],
        },
        {
          name: "Battle Agency",
          description:
            "Located in the Festival Plaza, the Battle Agency lets you battle using rental Pokémon. You pick one Pokémon from a selection, and two allies are provided. Win battles to increase your rank and unlock stronger rental Pokémon. This is great for earning Festival Coins and experimenting with Pokémon you don't own. Higher ranks unlock rare Pokémon options like pseudo-legendaries and Ultra Beasts.",
          items: [
            item("Festival Coins", "Earned from winning Battle Agency matches"),
            item("Rare Candy", "Festival Plaza shop with Festival Coins"),
            item("PP Up", "Festival Plaza shop with Festival Coins"),
          ],
        },
        {
          name: "Other Post-Game Activities",
          description:
            "There is much more to do in the post-game: visit the Ruins of Conflict, Life, Abundance, and Hope to catch the four Tapu guardians (Tapu Koko, Tapu Lele, Tapu Bulu, Tapu Fini). Collect Zygarde Cells scattered across Alola to assemble Zygarde (10%, 50%, and Complete Forme) at the Aether lab on Route 16. Rematch island Kahunas and trial captains via Title Defense at the Pokémon League. Hunt for shiny Pokémon via SOS chaining. Complete the Alola Pokédex to receive the Shiny Charm from the Game Director in Heahea City.",
          encounters: [
            enc("Tapu Koko", 785, ["US", "UM"], "Ruins of Conflict", "60", "—"),
            enc("Tapu Lele", 786, ["US", "UM"], "Ruins of Life", "60", "—"),
            enc("Tapu Bulu", 787, ["US", "UM"], "Ruins of Abundance", "60", "—"),
            enc("Tapu Fini", 788, ["US", "UM"], "Ruins of Hope", "60", "—"),
            enc("Zygarde", 718, ["US", "UM"], "Assemble Cells", "50", "—"),
          ],
          items: [
            item("Shiny Charm", "Complete the Alola Pokédex"),
            item("Tapunium Z", "Visit all four Tapu ruins after catching them"),
          ],
        },
      ],
    },
  ],
};
