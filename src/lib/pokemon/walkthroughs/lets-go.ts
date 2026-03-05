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

export const LETS_GO_WALKTHROUGH: GameWalkthrough = {
  slug: "lets-go",
  gameLabel: "Let's Go, Pikachu! & Eevee!",
  versionTags: ["LGP", "LGE"],
  parts: [
    /* ===============================================================
     *  PART 1 — Pallet Town: Meet Your Partner
     * =============================================================== */
    {
      part: 1,
      title: "Pallet Town — Meet Your Partner",
      summary:
        "Receive your partner Pikachu or Eevee and battle your rival Trace for the first time.",
      locations: [
        {
          name: "Pallet Town",
          description:
            "Your adventure begins in Pallet Town. After a short introduction, Professor Oak gives you a partner Pokemon — Pikachu in Let's Go, Pikachu! or Eevee in Let's Go, Eevee! Your partner rides on your head or shoulder and cannot be evolved. Your friendly rival Trace will also receive a partner (Eevee in LGP, Pikachu in LGE) and challenge you to your first battle. Unlike previous games there are no wild battles — you catch Pokemon using a throwing mechanic inspired by Pokemon GO. Head north toward Route 1 when ready.",
          trainers: [
            trn(
              "Pokemon Trainer",
              "Trace",
              [pk("Eevee", 6, 133)],
              "₽60 (LGP)"
            ),
            trn(
              "Pokemon Trainer",
              "Trace",
              [pk("Pikachu", 6, 25)],
              "₽60 (LGE)"
            ),
          ],
          items: [
            item("Partner Pikachu", "Gift from Professor Oak (LGP)"),
            item("Partner Eevee", "Gift from Professor Oak (LGE)"),
            item("Potion x5", "From your Mom before leaving"),
            item("Pokedex", "From Professor Oak after delivering his Parcel"),
            item("Town Map", "From Trace's sister after getting the Pokedex"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Route 1, Viridian City & Route 2
     * =============================================================== */
    {
      part: 2,
      title: "Route 1, Viridian City & Route 2",
      summary:
        "Travel through Route 1 catching Pokemon, visit Viridian City, deliver Oak's Parcel, and continue north.",
      locations: [
        {
          name: "Route 1",
          description:
            "Head north from Pallet Town. Wild Pokemon appear in the overworld — walk into them to start a catch encounter. There are no wild battles in Let's Go; instead you throw Poke Balls using motion controls or handheld aiming. Catch combos (catching the same species repeatedly) increase your chances of finding rare Pokemon and getting better IVs. A man on the route gives you a free Potion.",
          encounters: [
            enc("Pidgey", 16, ["LGP", "LGE"], "Overworld", "3-4", "45%"),
            enc("Rattata", 19, ["LGP", "LGE"], "Overworld", "3-4", "45%"),
            enc("Oddish", 43, ["LGP"], "Overworld", "3-4", "Uncommon"),
            enc("Bellsprout", 69, ["LGE"], "Overworld", "3-4", "Uncommon"),
          ],
          items: [item("Potion", "From the aide on the route")],
        },
        {
          name: "Viridian City",
          description:
            "The Poke Mart clerk gives you Oak's Parcel — deliver it back to Professor Oak in Pallet Town. He will give you and Trace each a Pokedex. The Viridian Gym is locked until you have seven badges. Return to Viridian City and head north to Route 2.",
          items: [
            item("Oak's Parcel", "Poke Mart clerk"),
            item("Outfit Set", "From woman near Poke Mart (customization)"),
          ],
        },
        {
          name: "Route 2",
          description:
            "A short route leading north toward Viridian Forest. You can find a few new Pokemon species here. The eastern portion is blocked until you learn Chop Down (the replacement for HM Cut in Let's Go).",
          encounters: [
            enc("Pidgey", 16, ["LGP", "LGE"], "Overworld", "3-5", "40%"),
            enc("Rattata", 19, ["LGP", "LGE"], "Overworld", "3-5", "40%"),
            enc("Caterpie", 10, ["LGP", "LGE"], "Overworld", "3-5", "15%"),
            enc("Weedle", 13, ["LGP", "LGE"], "Overworld", "3-5", "15%"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Viridian Forest & Pewter Gym
     * =============================================================== */
    {
      part: 3,
      title: "Viridian Forest & Pewter Gym",
      summary:
        "Navigate Viridian Forest, reach Pewter City, and earn the Boulder Badge from Brock.",
      locations: [
        {
          name: "Viridian Forest",
          description:
            "A dense forest full of Bug-type Pokemon. Pikachu can be found here as a rare spawn (appears in the overworld). In Let's Go, catching Pokemon is the primary way to gain experience — catch everything you see! Bulbasaur has a chance to appear as a rare spawn if your catch combo is high enough. Battle the Bug Catcher trainers as you make your way through.",
          encounters: [
            enc("Caterpie", 10, ["LGP", "LGE"], "Overworld", "3-6", "30%"),
            enc("Weedle", 13, ["LGP", "LGE"], "Overworld", "3-6", "30%"),
            enc("Metapod", 11, ["LGP", "LGE"], "Overworld", "4-6", "15%"),
            enc("Kakuna", 14, ["LGP", "LGE"], "Overworld", "4-6", "15%"),
            enc("Pikachu", 25, ["LGP", "LGE"], "Overworld", "3-6", "5%"),
            enc(
              "Bulbasaur",
              1,
              ["LGP", "LGE"],
              "Rare Spawn",
              "3-6",
              "Rare"
            ),
          ],
          trainers: [
            trn(
              "Bug Catcher",
              "Rick",
              [pk("Weedle", 6, 13), pk("Caterpie", 6, 10)],
              "₽72"
            ),
            trn(
              "Bug Catcher",
              "Doug",
              [pk("Weedle", 7, 13), pk("Kakuna", 7, 14)],
              "₽84"
            ),
            trn(
              "Bug Catcher",
              "Sammy",
              [pk("Caterpie", 7, 10), pk("Caterpie", 8, 10)],
              "₽96"
            ),
          ],
          items: [
            item("Poke Ball x5", "Along the main path"),
            item("Antidote", "Near Bug Catcher Doug"),
            item("Potion", "Southeast dead-end"),
          ],
        },
        {
          name: "Pewter City",
          description:
            "Home of the Pewter City Gym. Heal your Pokemon at the Pokemon Center before challenging Brock. In Let's Go, you need a Grass or Water-type Pokemon in your party to enter the gym (the gym guide checks). If you chose Bulbasaur in Viridian Forest or caught an Oddish/Bellsprout, you are set.",
          items: [
            item(
              "Old Amber",
              "Museum of Science back room (need Chop Down later)"
            ),
          ],
        },
        {
          name: "Pewter Gym — Leader Brock",
          description:
            "Brock specializes in Rock-type Pokemon. You need a Grass or Water-type Pokemon in your party to enter this gym. Your partner Pikachu can learn the special move Double Kick from the Move Tutor, or your partner Eevee can learn Bouncy Bubble (Water type). Brock's Geodude and Onix are weak to Water and Grass. Defeat Brock to earn the Boulder Badge and TM01 Headbutt.",
          trainers: [
            trn(
              "Camper",
              "Jerry",
              [pk("Geodude", 10, 74), pk("Sandshrew", 10, 27)],
              "₽200"
            ),
            trn(
              "Gym Leader",
              "Brock",
              [pk("Geodude", 11, 74), pk("Onix", 12, 95)],
              "₽1,920 + TM01 (Headbutt)"
            ),
          ],
          items: [
            item("Boulder Badge", "Defeat Brock"),
            item("TM01 Headbutt", "Defeat Brock"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 — Route 3, Mt. Moon & Route 4
     * =============================================================== */
    {
      part: 4,
      title: "Route 3, Mt. Moon & Route 4",
      summary:
        "Battle trainers on Route 3, navigate Mt. Moon's caverns, and emerge on Route 4.",
      locations: [
        {
          name: "Route 3",
          description:
            "A route full of trainers heading east from Pewter City. Stock up on Potions and Poke Balls before heading out. Nidoran can be found in the grass here and both evolve into very strong Pokemon. At the end a man outside the Pokemon Center will offer to sell you a Magikarp for 500 — it evolves into the powerful Gyarados at level 20.",
          encounters: [
            enc("Pidgey", 16, ["LGP", "LGE"], "Overworld", "5-10", "30%"),
            enc("Spearow", 21, ["LGP", "LGE"], "Overworld", "5-10", "30%"),
            enc(
              "Nidoran♀",
              29,
              ["LGP", "LGE"],
              "Overworld",
              "6-10",
              "14%"
            ),
            enc(
              "Nidoran♂",
              32,
              ["LGP", "LGE"],
              "Overworld",
              "6-10",
              "14%"
            ),
            enc(
              "Jigglypuff",
              39,
              ["LGP", "LGE"],
              "Overworld",
              "5-10",
              "5%"
            ),
            enc("Mankey", 56, ["LGP"], "Overworld", "5-10", "Uncommon"),
          ],
          trainers: [
            trn("Lass", "Janice", [pk("Pidgey", 10, 16)], "₽200"),
            trn(
              "Youngster",
              "Ben",
              [pk("Rattata", 11, 19), pk("Ekans", 11, 23)],
              "₽220"
            ),
            trn(
              "Bug Catcher",
              "Colton",
              [pk("Caterpie", 10, 10), pk("Weedle", 10, 13)],
              "₽120"
            ),
            trn("Youngster", "Calvin", [pk("Spearow", 14, 21)], "₽280"),
            trn(
              "Lass",
              "Sally",
              [pk("Rattata", 10, 19), pk("Nidoran♀", 10, 29)],
              "₽200"
            ),
          ],
          items: [],
        },
        {
          name: "Mt. Moon",
          description:
            "A large cave system. You will encounter Team Rocket for the first time here — in Let's Go, Jessie and James from the anime appear alongside regular grunts! Wild Pokemon appear in the overworld in caves too. On the bottom floor you will find two fossils — the Helix Fossil (Omanyte) and the Dome Fossil (Kabuto). Choose one after defeating a Super Nerd. Clefairy is rare but appears here, and rare spawns include Charmander with a high enough catch combo.",
          encounters: [
            enc("Zubat", 41, ["LGP", "LGE"], "Cave", "7-11", "50%"),
            enc("Geodude", 74, ["LGP", "LGE"], "Cave", "7-11", "25%"),
            enc("Paras", 46, ["LGP", "LGE"], "Cave", "8-11", "15%"),
            enc("Clefairy", 35, ["LGP", "LGE"], "Cave", "8-11", "5%"),
            enc(
              "Charmander",
              4,
              ["LGP", "LGE"],
              "Rare Spawn",
              "8-11",
              "Rare"
            ),
          ],
          trainers: [
            trn(
              "Bug Catcher",
              "Kent",
              [pk("Weedle", 11, 13), pk("Kakuna", 11, 14)],
              "₽132"
            ),
            trn("Lass", "Iris", [pk("Clefairy", 14, 35)], "₽280"),
            trn(
              "Super Nerd",
              "Jovan",
              [pk("Magnemite", 11, 81), pk("Voltorb", 11, 100)],
              "₽264"
            ),
            trn(
              "Team Rocket",
              "Jessie & James",
              [
                pk("Ekans", 12, 23),
                pk("Koffing", 12, 109),
                pk("Meowth", 12, 52),
              ],
              "₽480"
            ),
            trn(
              "Team Rocket Grunt",
              "Grunt",
              [pk("Zubat", 13, 41), pk("Rattata", 13, 19)],
              "₽520"
            ),
          ],
          items: [
            item("Star Piece", "B1F, northwestern corner"),
            item("Revive", "B1F"),
            item("Escape Rope", "B2F"),
            item("Moon Stone", "B2F, crater room"),
            item(
              "Helix Fossil or Dome Fossil",
              "B2F, after beating Super Nerd"
            ),
          ],
        },
        {
          name: "Route 4",
          description:
            "A short route leading downhill from Mt. Moon to Cerulean City. It is a one-way ledge so make sure you are ready before jumping down.",
          encounters: [
            enc("Rattata", 19, ["LGP", "LGE"], "Overworld", "8-13", "30%"),
            enc("Spearow", 21, ["LGP", "LGE"], "Overworld", "8-13", "30%"),
            enc("Ekans", 23, ["LGP"], "Overworld", "8-13", "Uncommon"),
            enc("Sandshrew", 27, ["LGE"], "Overworld", "8-13", "Uncommon"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 — Cerulean City & Cerulean Gym
     * =============================================================== */
    {
      part: 5,
      title: "Cerulean City & Cerulean Gym",
      summary:
        "Explore Cerulean City, battle Misty, cross Nugget Bridge, and visit Bill.",
      locations: [
        {
          name: "Cerulean City",
          description:
            "Heal up and explore. Trace will challenge you before Nugget Bridge. In Let's Go you can play with your partner Pokemon by accessing the Partner Play menu. The bike shop is gone — instead you can ride rideable Pokemon in the overworld for faster travel! Head north to Nugget Bridge (Route 24) to progress.",
          trainers: [
            trn(
              "Pokemon Trainer",
              "Trace",
              [
                pk("Pidgeotto", 16, 17),
                pk("Oddish", 16, 43),
                pk("Eevee", 17, 133),
              ],
              "₽340 (LGP)"
            ),
            trn(
              "Pokemon Trainer",
              "Trace",
              [
                pk("Pidgeotto", 16, 17),
                pk("Oddish", 16, 43),
                pk("Pikachu", 17, 25),
              ],
              "₽340 (LGE)"
            ),
          ],
        },
        {
          name: "Cerulean Gym — Leader Misty",
          description:
            "Misty specializes in Water-type Pokemon. You need a Grass or Electric-type Pokemon in your party to enter. Your partner Pikachu naturally covers Electric, or partner Eevee can learn Buzzy Buzz (Electric type). Misty's Starmie is fast and powerful — consider leveling to at least 20 before challenging. Defeat Misty to earn the Cascade Badge.",
          trainers: [
            trn(
              "Swimmer",
              "Diana",
              [pk("Horsea", 16, 116), pk("Shellder", 16, 90)],
              "₽320"
            ),
            trn(
              "Gym Leader",
              "Misty",
              [pk("Psyduck", 18, 54), pk("Starmie", 19, 121)],
              "₽3,040 + TM29 (Scald)"
            ),
          ],
          items: [
            item("Cascade Badge", "Defeat Misty"),
            item("TM29 Scald", "Defeat Misty"),
          ],
        },
        {
          name: "Route 24 — Nugget Bridge",
          description:
            "Battle five trainers across the bridge in succession. After the fifth, a Team Rocket member tries to recruit you — defeat him to earn a Nugget (worth 5,000). Continue north to Route 25 and Bill's cottage.",
          encounters: [
            enc("Oddish", 43, ["LGP"], "Overworld", "11-16", "25%"),
            enc("Bellsprout", 69, ["LGE"], "Overworld", "11-16", "25%"),
            enc("Pidgey", 16, ["LGP", "LGE"], "Overworld", "11-16", "20%"),
            enc("Abra", 63, ["LGP", "LGE"], "Overworld", "11-16", "10%"),
            enc(
              "Charmander",
              4,
              ["LGP", "LGE"],
              "Rare Spawn",
              "11-16",
              "Rare"
            ),
          ],
          trainers: [
            trn(
              "Bug Catcher",
              "Cale",
              [
                pk("Caterpie", 14, 10),
                pk("Weedle", 14, 13),
                pk("Metapod", 14, 11),
              ],
              "₽168"
            ),
            trn(
              "Lass",
              "Ali",
              [pk("Pidgey", 15, 16), pk("Oddish", 15, 43)],
              "₽300"
            ),
            trn("Youngster", "Timmy", [pk("Sandshrew", 15, 27)], "₽300"),
            trn("Lass", "Reli", [pk("Nidoran♂", 15, 32)], "₽300"),
            trn("Camper", "Ethan", [pk("Mankey", 15, 56)], "₽300"),
            trn(
              "Team Rocket Grunt",
              "Grunt",
              [pk("Ekans", 15, 23), pk("Zubat", 15, 41)],
              "₽600"
            ),
          ],
          items: [
            item("Nugget", "Reward for beating all five Nugget Bridge trainers"),
          ],
        },
        {
          name: "Route 25 — Bill's Cottage",
          description:
            "Continue east through more trainers to reach Bill's cottage. Bill has accidentally merged himself with a Pokemon using his teleportation experiment. Help him by interacting with the PC while he stands on the teleporter. As thanks he gives you the S.S. Ticket. In Let's Go, Bill also gives you tickets to access the S.S. Anne in Vermilion City.",
          encounters: [
            enc("Pidgey", 16, ["LGP", "LGE"], "Overworld", "11-16", "25%"),
            enc("Oddish", 43, ["LGP"], "Overworld", "12-16", "25%"),
            enc("Bellsprout", 69, ["LGE"], "Overworld", "12-16", "25%"),
            enc("Abra", 63, ["LGP", "LGE"], "Overworld", "11-16", "10%"),
          ],
          items: [item("S.S. Ticket", "Gift from Bill after helping him")],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 — Vermilion City, S.S. Anne & Vermilion Gym
     * =============================================================== */
    {
      part: 6,
      title: "Vermilion City, S.S. Anne & Vermilion Gym",
      summary:
        "Travel to Vermilion City, explore the S.S. Anne, and earn the Thunder Badge from Lt. Surge.",
      locations: [
        {
          name: "Route 5 & Underground Path",
          description:
            "Head south from Cerulean City. Use the underground path to bypass the Saffron City gate guard (who will not let you through yet). Emerge on Route 6 and continue south to Vermilion City.",
          encounters: [
            enc("Pidgey", 16, ["LGP", "LGE"], "Overworld", "13-18", "30%"),
            enc("Meowth", 52, ["LGE"], "Overworld", "13-18", "25%"),
            enc("Mankey", 56, ["LGP"], "Overworld", "13-18", "25%"),
            enc("Oddish", 43, ["LGP"], "Overworld", "13-18", "20%"),
            enc("Bellsprout", 69, ["LGE"], "Overworld", "13-18", "20%"),
            enc("Abra", 63, ["LGP", "LGE"], "Overworld", "13-18", "5%"),
          ],
        },
        {
          name: "S.S. Anne",
          description:
            "Board the ship with your S.S. Ticket. Explore every room for items and trainer battles — the ship leaves permanently after you obtain Chop Down! Find Trace on the second floor and battle him. Visit the Captain who is seasick — rub his back and he teaches your partner the Secret Technique Chop Down (replaces Cut). Your partner Pikachu/Eevee learns secret techniques that replace HMs. The ship departs after this, so grab everything first!",
          trainers: [
            trn(
              "Pokemon Trainer",
              "Trace",
              [
                pk("Pidgeotto", 20, 17),
                pk("Gloom", 20, 44),
                pk("Eevee", 21, 133),
              ],
              "₽420 (LGP)"
            ),
            trn(
              "Pokemon Trainer",
              "Trace",
              [
                pk("Pidgeotto", 20, 17),
                pk("Gloom", 20, 44),
                pk("Pikachu", 21, 25),
              ],
              "₽420 (LGE)"
            ),
            trn("Sailor", "Trevor", [pk("Machop", 18, 66)], "₽576"),
            trn(
              "Gentleman",
              "Arthur",
              [pk("Voltorb", 20, 100), pk("Magnemite", 20, 81)],
              "₽1,440"
            ),
          ],
          items: [
            item(
              "Chop Down (Secret Technique)",
              "Captain teaches your partner after curing his seasickness"
            ),
            item("Ether", "Cabin on 1F"),
            item("Super Potion", "Cabin on B1F"),
            item("Stardust", "Cabin on B1F"),
          ],
        },
        {
          name: "Vermilion Gym — Leader Lt. Surge",
          description:
            "Lt. Surge specializes in Electric-type Pokemon. Ground-type moves are the best counter — catch a Diglett from Diglett's Cave (accessible from Route 11). The gym has a trash can puzzle: find two hidden switches in the trash cans. The second switch is always adjacent to the first. If you guess wrong, the puzzle resets. Lt. Surge's Raichu is his ace at level 26.",
          trainers: [
            trn(
              "Sailor",
              "Dwayne",
              [pk("Magnemite", 23, 81), pk("Magnemite", 23, 81)],
              "₽736"
            ),
            trn(
              "Engineer",
              "Baily",
              [pk("Voltorb", 23, 100), pk("Magnemite", 23, 81)],
              "₽1,104"
            ),
            trn("Gentleman", "Tucker", [pk("Pikachu", 24, 25)], "₽1,728"),
            trn(
              "Gym Leader",
              "Lt. Surge",
              [
                pk("Voltorb", 25, 100),
                pk("Magnemite", 25, 81),
                pk("Raichu", 26, 26),
              ],
              "₽4,160 + TM36 (Thunderbolt)"
            ),
          ],
          items: [
            item("Thunder Badge", "Defeat Lt. Surge"),
            item("TM36 Thunderbolt", "Defeat Lt. Surge"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Route 9-10, Rock Tunnel & Lavender Town
     * =============================================================== */
    {
      part: 7,
      title: "Route 9-10, Rock Tunnel & Lavender Town",
      summary:
        "Traverse Route 9, navigate Rock Tunnel (the secret technique Light Up replaces Flash), and reach Lavender Town.",
      locations: [
        {
          name: "Route 9 & Route 10",
          description:
            "Head east from Cerulean City using Chop Down on the bush blocking the path. Route 9 is full of trainers. At the end of Route 10, you reach the entrance to Rock Tunnel. A Pokemon Center is conveniently located outside.",
          encounters: [
            enc("Rattata", 19, ["LGP", "LGE"], "Overworld", "16-21", "25%"),
            enc("Spearow", 21, ["LGP", "LGE"], "Overworld", "16-21", "25%"),
            enc(
              "Nidoran♀",
              29,
              ["LGP", "LGE"],
              "Overworld",
              "16-21",
              "10%"
            ),
            enc(
              "Nidoran♂",
              32,
              ["LGP", "LGE"],
              "Overworld",
              "16-21",
              "10%"
            ),
            enc("Geodude", 74, ["LGP", "LGE"], "Overworld", "16-21", "10%"),
            enc("Voltorb", 100, ["LGP", "LGE"], "Overworld", "16-21", "10%"),
          ],
        },
        {
          name: "Rock Tunnel",
          description:
            "A dark multi-floor cave. In Let's Go, the secret technique Light Up (replacing Flash) makes navigation much easier. Rock Tunnel has many trainers and wild Pokemon. Machop and Onix can be found here. Squirtle has a chance to appear as a rare spawn. Work your way through both floors to emerge on the south side near Lavender Town.",
          encounters: [
            enc("Zubat", 41, ["LGP", "LGE"], "Cave", "18-23", "35%"),
            enc("Geodude", 74, ["LGP", "LGE"], "Cave", "18-23", "25%"),
            enc("Machop", 66, ["LGP", "LGE"], "Cave", "18-23", "20%"),
            enc("Onix", 95, ["LGP", "LGE"], "Cave", "18-23", "10%"),
            enc(
              "Squirtle",
              7,
              ["LGP", "LGE"],
              "Rare Spawn",
              "18-23",
              "Rare"
            ),
          ],
          trainers: [
            trn(
              "Hiker",
              "Marcos",
              [pk("Geodude", 20, 74), pk("Geodude", 20, 74)],
              "₽720"
            ),
            trn("Hiker", "Dudley", [pk("Onix", 21, 95)], "₽756"),
            trn(
              "Pokemaniac",
              "Ashton",
              [pk("Slowpoke", 21, 79), pk("Cubone", 21, 104)],
              "₽1,260"
            ),
          ],
        },
        {
          name: "Lavender Town",
          description:
            "A quiet town known for the Pokemon Tower — a memorial for deceased Pokemon. You cannot fully explore the tower yet because the ghosts will block your path. You need the Silph Scope from Team Rocket to identify them. Heal up and head west on Route 8 toward Celadon City.",
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Celadon City, Celadon Gym & Team Rocket Hideout
     * =============================================================== */
    {
      part: 8,
      title: "Celadon City, Celadon Gym & Team Rocket Hideout",
      summary:
        "Explore the department store, defeat Erika for the Rainbow Badge, and infiltrate Team Rocket's hideout to get the Silph Scope.",
      locations: [
        {
          name: "Celadon City",
          description:
            "A large city with plenty to do. The Celadon Department Store sells TMs, stones, and supplies. In Let's Go, Eevee is available as a gift Pokemon from a person in one of the buildings (if playing LGP, since your partner is Pikachu). The Tea item from the woman in the Celadon Condominiums unlocks Saffron City's gates. Visit the Team Rocket Game Corner and discover their secret hideout behind the poster.",
          items: [
            item(
              "Tea",
              "Old woman in Celadon Condominiums (unlocks Saffron City gates)"
            ),
            item("Eevee", "Gift from NPC in Celadon City (if LGP)"),
            item("Coin Case", "Man in the restaurant"),
          ],
        },
        {
          name: "Celadon Gym — Leader Erika",
          description:
            "Erika specializes in Grass-type Pokemon. Fire, Ice, Poison, and Flying moves are all super effective. Your partner Pikachu can learn Zippy Zap (Electric) which is useful, or partner Eevee can learn Sizzly Slide (Fire type). Erika's Vileplume can put you to sleep with Sleep Powder, so bring Awakenings. You need a Grass, Poison, or Bug-type Pokemon in your party to enter.",
          trainers: [
            trn(
              "Lass",
              "Kay",
              [pk("Bellsprout", 28, 69), pk("Weepinbell", 28, 70)],
              "₽560"
            ),
            trn(
              "Beauty",
              "Bridget",
              [pk("Oddish", 28, 43), pk("Gloom", 28, 44)],
              "₽1,680"
            ),
            trn(
              "Gym Leader",
              "Erika",
              [
                pk("Tangela", 33, 114),
                pk("Weepinbell", 33, 70),
                pk("Vileplume", 34, 45),
              ],
              "₽5,440 + TM53 (Mega Drain)"
            ),
          ],
          items: [
            item("Rainbow Badge", "Defeat Erika"),
            item("TM53 Mega Drain", "Defeat Erika"),
          ],
        },
        {
          name: "Team Rocket Hideout",
          description:
            "Find the secret switch behind the poster in the Game Corner. Navigate the underground base using the elevator and arrow tile puzzles. Jessie and James from Team Rocket appear again here alongside Archer. Battle through grunts and defeat Giovanni at the bottom. He uses Ground-type Pokemon. After defeating him, you receive the Silph Scope, which lets you identify ghosts in Pokemon Tower.",
          trainers: [
            trn(
              "Team Rocket",
              "Jessie & James",
              [
                pk("Arbok", 27, 24),
                pk("Weezing", 27, 110),
                pk("Meowth", 27, 52),
              ],
              "₽1,080"
            ),
            trn(
              "Team Rocket Grunt",
              "Grunt",
              [pk("Raticate", 26, 20), pk("Zubat", 26, 41)],
              "₽1,040"
            ),
            trn(
              "Team Rocket Boss",
              "Giovanni",
              [
                pk("Onix", 29, 95),
                pk("Rhyhorn", 29, 111),
                pk("Persian", 30, 53),
              ],
              "₽4,800"
            ),
          ],
          items: [
            item("Silph Scope", "Defeat Giovanni"),
            item("Rare Candy", "B3F"),
            item("Nugget", "B2F"),
            item("Escape Rope", "B2F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Pokemon Tower, Routes 12-15, Fuchsia City & Fuchsia Gym
     * =============================================================== */
    {
      part: 9,
      title: "Pokemon Tower, Fuchsia City & Fuchsia Gym",
      summary:
        "Clear Pokemon Tower, travel south to Fuchsia City, and earn the Soul Badge from Koga.",
      locations: [
        {
          name: "Pokemon Tower",
          description:
            "Return to Lavender Town with the Silph Scope. The ghost Pokemon are now identifiable — Gastly, Haunter, and Cubone can be caught. Battle Team Rocket grunts including Jessie and James on the upper floors. The ghost blocking the stairway on floor 6 is a Marowak (it cannot be caught — it is a story event). Rescue Mr. Fuji at the top and he gives you the Poke Flute, which can wake sleeping Snorlax blocking Route 12 and Route 16.",
          encounters: [
            enc("Gastly", 92, ["LGP", "LGE"], "Building", "20-27", "75%"),
            enc("Haunter", 93, ["LGP", "LGE"], "Building", "22-27", "15%"),
            enc("Cubone", 104, ["LGP", "LGE"], "Building", "20-25", "10%"),
          ],
          trainers: [
            trn(
              "Team Rocket",
              "Jessie & James",
              [
                pk("Arbok", 31, 24),
                pk("Weezing", 31, 110),
                pk("Meowth", 31, 52),
              ],
              "₽1,240"
            ),
            trn(
              "Team Rocket Grunt",
              "Grunt",
              [pk("Zubat", 30, 41), pk("Golbat", 30, 42)],
              "₽1,200"
            ),
            trn(
              "Channeler",
              "Hope",
              [pk("Gastly", 27, 92), pk("Haunter", 27, 93)],
              "₽864"
            ),
          ],
          items: [
            item("Poke Flute", "Gift from Mr. Fuji after rescue"),
            item("Rare Candy", "5F"),
            item("Nugget", "6F"),
          ],
        },
        {
          name: "Routes 12-15 & Cycling Road",
          description:
            "Travel south from Lavender Town through Routes 12-15 to reach Fuchsia City. Alternatively, take Cycling Road (Routes 16-18) from Celadon City. You can ride large Pokemon instead of a bicycle in Let's Go! Wake the sleeping Snorlax on Route 12 or Route 16 with the Poke Flute — it is at Level 34 and very useful to catch. Version exclusives appear along these routes.",
          encounters: [
            enc("Pidgey", 16, ["LGP", "LGE"], "Overworld", "24-29", "20%"),
            enc("Pidgeotto", 17, ["LGP", "LGE"], "Overworld", "24-29", "15%"),
            enc("Oddish", 43, ["LGP"], "Overworld", "24-29", "15%"),
            enc("Bellsprout", 69, ["LGE"], "Overworld", "24-29", "15%"),
            enc("Gloom", 44, ["LGP"], "Overworld", "26-29", "5%"),
            enc("Weepinbell", 70, ["LGE"], "Overworld", "26-29", "5%"),
            enc("Snorlax", 143, ["LGP", "LGE"], "Special", "34", "One"),
          ],
        },
        {
          name: "Fuchsia City",
          description:
            "Fuchsia City is home to the GO Park — a replacement for the Safari Zone where you can transfer Pokemon from Pokemon GO to Let's Go! This is the only way to obtain Alolan forms in-game (through GO transfers or in-game trades). The Warden gives you the secret technique Strong Push (replaces Strength). Visit the gym when you are ready.",
          items: [
            item(
              "Strong Push (Secret Technique)",
              "Warden in the GO Park complex"
            ),
            item("Gold Teeth", "Found in GO Park area (give to Warden)"),
          ],
        },
        {
          name: "Fuchsia Gym — Leader Koga",
          description:
            "Koga specializes in Poison-type Pokemon. Psychic and Ground moves are super effective. The gym has invisible walls — bump into them to find the path. Koga's team includes Weezing, Muk, Golbat, and his ace Venomoth. Bring Antidotes or Full Heals to cure poison.",
          trainers: [
            trn(
              "Juggler",
              "Nelson",
              [pk("Drowzee", 36, 96), pk("Hypno", 36, 97)],
              "₽1,440"
            ),
            trn("Tamer", "Phil", [pk("Arbok", 37, 24)], "₽1,480"),
            trn(
              "Juggler",
              "Shawn",
              [pk("Drowzee", 36, 96), pk("Kadabra", 36, 64)],
              "₽1,440"
            ),
            trn(
              "Gym Leader",
              "Koga",
              [
                pk("Weezing", 43, 110),
                pk("Muk", 43, 89),
                pk("Golbat", 43, 42),
                pk("Venomoth", 44, 49),
              ],
              "₽7,040 + TM27 (Toxic)"
            ),
          ],
          items: [
            item("Soul Badge", "Defeat Koga"),
            item("TM27 Toxic", "Defeat Koga"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Saffron City, Silph Co. & Saffron Gym
     * =============================================================== */
    {
      part: 10,
      title: "Saffron City, Silph Co. & Saffron Gym",
      summary:
        "Liberate Silph Co. from Team Rocket and earn the Marsh Badge from Sabrina.",
      locations: [
        {
          name: "Saffron City",
          description:
            "Use the Tea to pass through the gate guards and enter Saffron City. The city is under Team Rocket's control. Silph Co. headquarters has been taken over. The Fighting Dojo is also here — defeat everyone to choose between Hitmonlee or Hitmonchan as a prize. Complete Silph Co. before challenging Sabrina.",
          items: [
            item(
              "Hitmonlee or Hitmonchan",
              "Fighting Dojo reward (choose one)"
            ),
          ],
        },
        {
          name: "Silph Co.",
          description:
            "A massive 11-floor building with warp tiles. Get the Card Key on 5F to unlock doors throughout the building. Your rival Trace battles you on 7F. Jessie and James appear again. Giovanni is on 11F — defeat him to liberate Silph Co. The president gives you a Master Ball as thanks. An employee on 7F gifts you a Lapras.",
          trainers: [
            trn(
              "Pokemon Trainer",
              "Trace",
              [
                pk("Pidgeot", 37, 18),
                pk("Vileplume", 37, 45),
                pk("Marowak", 38, 105),
                pk("Jolteon", 39, 135),
              ],
              "₽780 (LGP)"
            ),
            trn(
              "Team Rocket",
              "Jessie & James",
              [
                pk("Arbok", 36, 24),
                pk("Weezing", 36, 110),
                pk("Meowth", 36, 52),
              ],
              "₽1,440"
            ),
            trn(
              "Team Rocket Boss",
              "Giovanni",
              [
                pk("Persian", 39, 53),
                pk("Rhyhorn", 39, 111),
                pk("Nidoqueen", 39, 31),
              ],
              "₽6,240"
            ),
          ],
          items: [
            item("Card Key", "5F"),
            item("Master Ball", "President after defeating Giovanni on 11F"),
            item("Lapras", "Gift from employee on 7F"),
          ],
        },
        {
          name: "Saffron Gym — Leader Sabrina",
          description:
            "Sabrina's gym features warp tile puzzles. Step on tiles to teleport between rooms — find the correct path to reach Sabrina. She uses Psychic-type Pokemon. Bug, Ghost, and Dark moves are super effective. Her Alakazam is very fast and hits hard. Consider using a Snorlax or other bulky Pokemon to take hits.",
          trainers: [
            trn(
              "Psychic",
              "Johan",
              [pk("Kadabra", 38, 64), pk("Slowpoke", 38, 79)],
              "₽1,520"
            ),
            trn(
              "Channeler",
              "Amanda",
              [pk("Gastly", 38, 92), pk("Haunter", 38, 93)],
              "₽1,216"
            ),
            trn(
              "Gym Leader",
              "Sabrina",
              [
                pk("Mr. Mime", 43, 122),
                pk("Slowbro", 43, 80),
                pk("Jynx", 43, 124),
                pk("Alakazam", 44, 65),
              ],
              "₽7,040 + TM33 (Calm Mind)"
            ),
          ],
          items: [
            item("Marsh Badge", "Defeat Sabrina"),
            item("TM33 Calm Mind", "Defeat Sabrina"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Cinnabar Island, Pokemon Mansion & Cinnabar Gym
     * =============================================================== */
    {
      part: 11,
      title: "Cinnabar Island, Pokemon Mansion & Cinnabar Gym",
      summary:
        "Explore the Pokemon Mansion for the Secret Key and earn the Volcano Badge from Blaine.",
      locations: [
        {
          name: "Seafoam Islands (Optional)",
          description:
            "Surf south from Fuchsia City using the secret technique Sea Skim. The Seafoam Islands are home to the legendary Articuno at Level 50. Use Strong Push to redirect water currents by pushing boulders. Save before encountering Articuno!",
          encounters: [
            enc("Seel", 86, ["LGP", "LGE"], "Cave", "39-44", "30%"),
            enc("Zubat", 41, ["LGP", "LGE"], "Cave", "39-44", "25%"),
            enc("Golbat", 42, ["LGP", "LGE"], "Cave", "39-44", "10%"),
            enc("Dewgong", 87, ["LGP", "LGE"], "Cave", "39-44", "10%"),
            enc("Psyduck", 54, ["LGP", "LGE"], "Surfing", "39-44", "20%"),
            enc("Slowpoke", 79, ["LGP", "LGE"], "Surfing", "39-44", "20%"),
          ],
          items: [
            item(
              "Articuno",
              "Deepest chamber (Lv. 50 — save first, 5-min catch timer)"
            ),
          ],
        },
        {
          name: "Cinnabar Island",
          description:
            "Surf south from Pallet Town or west from Seafoam Islands to reach Cinnabar Island. The Pokemon Lab can revive your fossils (Helix Fossil into Omanyte, Dome Fossil into Kabuto, Old Amber into Aerodactyl). The gym is locked — you need the Secret Key from the Pokemon Mansion.",
        },
        {
          name: "Pokemon Mansion",
          description:
            "A dilapidated mansion filled with wild Pokemon. In Let's Go, Grimer and Koffing appear here. Find the Secret Key to unlock Blaine's gym by navigating through the basement using switches to activate or deactivate barriers. Read the journal entries about Mew and Mewtwo scattered throughout.",
          encounters: [
            enc("Grimer", 88, ["LGP"], "Building", "39-44", "25%"),
            enc("Koffing", 109, ["LGE"], "Building", "39-44", "25%"),
            enc("Growlithe", 58, ["LGP"], "Building", "39-44", "25%"),
            enc("Vulpix", 37, ["LGE"], "Building", "39-44", "25%"),
            enc("Ponyta", 77, ["LGP", "LGE"], "Building", "39-44", "20%"),
            enc("Magmar", 126, ["LGP", "LGE"], "Building", "39-44", "10%"),
          ],
          items: [
            item("Secret Key", "B1F"),
            item("Rare Candy", "2F"),
            item("Max Revive", "3F"),
          ],
        },
        {
          name: "Cinnabar Gym — Leader Blaine",
          description:
            "Blaine specializes in Fire-type Pokemon. Water, Ground, and Rock moves are super effective. Your partner can learn Sea Skim, and Surf-capable Pokemon will dominate here. Blaine's gym features a quiz format — answer trivia correctly to skip trainer battles or answer wrong to fight. His Arcanine is his ace at Level 48.",
          trainers: [
            trn(
              "Burglar",
              "Quinn",
              [pk("Growlithe", 40, 58), pk("Vulpix", 40, 37)],
              "₽3,200"
            ),
            trn(
              "Super Nerd",
              "Erik",
              [pk("Ponyta", 40, 77), pk("Rapidash", 40, 78)],
              "₽960"
            ),
            trn(
              "Gym Leader",
              "Blaine",
              [
                pk("Magmar", 47, 126),
                pk("Rapidash", 47, 78),
                pk("Arcanine", 48, 59),
              ],
              "₽7,680 + TM46 (Fire Blast)"
            ),
          ],
          items: [
            item("Volcano Badge", "Defeat Blaine"),
            item("TM46 Fire Blast", "Defeat Blaine"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Viridian Gym & Victory Road
     * =============================================================== */
    {
      part: 12,
      title: "Viridian Gym & Victory Road",
      summary:
        "Challenge the final Gym Leader Giovanni, catch Zapdos at the Power Plant, and traverse Victory Road.",
      locations: [
        {
          name: "Power Plant (Optional)",
          description:
            "Surf east from Route 10 to reach the Power Plant. The legendary Zapdos awaits inside at Level 50. In Let's Go, legendary encounters give you a 5-minute timer to defeat them in battle before you can attempt to catch them. Electrode disguised as items may ambush you. Magnemite and Voltorb are common here.",
          encounters: [
            enc("Magnemite", 81, ["LGP", "LGE"], "Building", "39-44", "35%"),
            enc("Voltorb", 100, ["LGP", "LGE"], "Building", "39-44", "30%"),
            enc("Magneton", 82, ["LGP", "LGE"], "Building", "39-44", "15%"),
            enc("Electrode", 101, ["LGP", "LGE"], "Building", "39-44", "10%"),
            enc("Electabuzz", 125, ["LGP", "LGE"], "Building", "39-44", "5%"),
          ],
          items: [
            item(
              "Zapdos",
              "Deepest chamber (Lv. 50 — save first, 5-min catch timer)"
            ),
            item("Thunder Stone", "Near the entrance"),
          ],
        },
        {
          name: "Viridian Gym — Leader Giovanni",
          description:
            "Return to Viridian City. The gym is now open! Giovanni is the final Gym Leader and the boss of Team Rocket. He uses Ground-type Pokemon. Water, Grass, and Ice moves are ideal. His Rhydon is tough — Surf or any Water move will destroy it. Winning earns you the Earth Badge, meaning all Pokemon will now obey you regardless of level.",
          trainers: [
            trn(
              "Tamer",
              "Jason",
              [pk("Rhyhorn", 43, 111), pk("Sandslash", 43, 28)],
              "₽1,720"
            ),
            trn(
              "Black Belt",
              "Takashi",
              [pk("Machoke", 44, 67), pk("Machoke", 44, 67)],
              "₽1,056"
            ),
            trn(
              "Gym Leader",
              "Giovanni",
              [
                pk("Dugtrio", 49, 51),
                pk("Nidoqueen", 49, 31),
                pk("Nidoking", 49, 34),
                pk("Rhydon", 50, 112),
              ],
              "₽8,000 + TM41 (Earthquake)"
            ),
          ],
          items: [
            item("Earth Badge", "Defeat Giovanni"),
            item("TM41 Earthquake", "Defeat Giovanni"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "Head west from Viridian City through Route 22 (Trace battles you here) and Route 23 (badge checks). Victory Road is a cave puzzle requiring Strong Push to move boulders onto switches. Multiple floors with strong trainers and high-level wild Pokemon. Moltres can be found on Victory Road at Level 50 — save before the encounter!",
          encounters: [
            enc("Onix", 95, ["LGP", "LGE"], "Cave", "41-46", "20%"),
            enc("Geodude", 74, ["LGP", "LGE"], "Cave", "41-46", "20%"),
            enc("Golbat", 42, ["LGP", "LGE"], "Cave", "41-46", "25%"),
            enc("Machoke", 67, ["LGP", "LGE"], "Cave", "41-46", "15%"),
            enc("Graveler", 75, ["LGP", "LGE"], "Cave", "41-46", "10%"),
            enc("Marowak", 105, ["LGP", "LGE"], "Cave", "41-46", "10%"),
          ],
          trainers: [
            trn(
              "Pokemon Trainer",
              "Trace",
              [
                pk("Pidgeot", 47, 18),
                pk("Vileplume", 47, 45),
                pk("Marowak", 47, 105),
                pk("Rapidash", 47, 78),
                pk("Jolteon", 48, 135),
              ],
              "₽960 (LGP)"
            ),
          ],
          items: [
            item(
              "Moltres",
              "Victory Road 2F (Lv. 50 — save first, 5-min catch timer)"
            ),
            item("Full Restore", "Victory Road 1F"),
            item("Max Revive", "Victory Road 3F"),
            item("PP Max", "Victory Road 2F"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Pokemon League
     * =============================================================== */
    {
      part: 13,
      title: "Indigo Plateau — The Pokemon League",
      summary:
        "Challenge the Elite Four and Champion Trace to become the Pokemon League Champion!",
      locations: [
        {
          name: "Indigo Plateau",
          description:
            "The final challenge! Stock up on Full Restores, Revives, and Max Potions. You must defeat all four Elite Four members and the Champion in a row without visiting a Pokemon Center. In Let's Go, your rival Trace is the Champion instead of Blue. Recommended level: 55-60+. Save before entering!",
          trainers: [
            trn(
              "Elite Four",
              "Lorelei",
              [
                pk("Dewgong", 51, 87),
                pk("Jynx", 51, 124),
                pk("Cloyster", 51, 91),
                pk("Slowbro", 51, 80),
                pk("Lapras", 52, 131),
              ],
              "Ice specialist — use Electric, Fighting, Rock"
            ),
            trn(
              "Elite Four",
              "Bruno",
              [
                pk("Onix", 52, 95),
                pk("Hitmonchan", 52, 107),
                pk("Hitmonlee", 52, 106),
                pk("Poliwrath", 52, 62),
                pk("Machamp", 53, 68),
              ],
              "Fighting specialist — use Psychic, Flying, Fairy"
            ),
            trn(
              "Elite Four",
              "Agatha",
              [
                pk("Arbok", 53, 24),
                pk("Gengar", 53, 94),
                pk("Golbat", 53, 42),
                pk("Weezing", 53, 110),
                pk("Gengar", 54, 94),
              ],
              "Ghost specialist — use Psychic, Ground"
            ),
            trn(
              "Elite Four",
              "Lance",
              [
                pk("Seadra", 54, 117),
                pk("Aerodactyl", 54, 142),
                pk("Gyarados", 54, 130),
                pk("Charizard", 54, 6),
                pk("Dragonite", 55, 149),
              ],
              "Dragon specialist — use Ice, Rock, Electric"
            ),
            trn(
              "Champion",
              "Trace",
              [
                pk("Pidgeot", 56, 18),
                pk("Vileplume", 56, 45),
                pk("Marowak", 56, 105),
                pk("Rapidash", 56, 78),
                pk("Slowbro", 56, 80),
                pk("Jolteon", 57, 135),
              ],
              "Mixed team — no single weakness (LGP)"
            ),
            trn(
              "Champion",
              "Trace",
              [
                pk("Pidgeot", 56, 18),
                pk("Vileplume", 56, 45),
                pk("Marowak", 56, 105),
                pk("Rapidash", 56, 78),
                pk("Slowbro", 56, 80),
                pk("Raichu", 57, 26),
              ],
              "Mixed team — no single weakness (LGE)"
            ),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Post-Game
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Master Trainers, Cerulean Cave & Green",
      summary:
        "Take on the Master Trainers scattered across Kanto, explore Cerulean Cave to catch Mewtwo, and battle the mysterious trainer Green.",
      isPostGame: true,
      locations: [
        {
          name: "Master Trainers",
          description:
            "After becoming Champion, 153 Master Trainers appear across Kanto — one for every Pokemon in the Let's Go Pokedex. Each Master Trainer specializes in a single Pokemon species and challenges you to a one-on-one battle using that same species (no items allowed). Defeat them to earn their title. This is the ultimate completionist challenge. Master Trainers have very high-level Pokemon (often Lv. 65-80) with competitive movesets and maxed candy-boosted stats.",
        },
        {
          name: "Cerulean Cave — Mewtwo",
          description:
            "After entering the Hall of Fame, the cave entrance in Cerulean City is unlocked. Navigate through strong wild Pokemon to find Mewtwo at Level 70 in the deepest chamber. Like the legendary birds, you must defeat Mewtwo in a timed battle (5 minutes) before you can attempt to catch it. Mewtwo is the most powerful Pokemon in Let's Go — save before the encounter and use your Master Ball if you still have it! Wild Pokemon here are Lv. 51-60+.",
          encounters: [
            enc("Golbat", 42, ["LGP", "LGE"], "Cave", "51-56", "20%"),
            enc("Graveler", 75, ["LGP", "LGE"], "Cave", "51-56", "15%"),
            enc("Lickitung", 108, ["LGP", "LGE"], "Cave", "51-56", "10%"),
            enc("Chansey", 113, ["LGP", "LGE"], "Cave", "51-56", "5%"),
            enc("Ditto", 132, ["LGP", "LGE"], "Cave", "51-56", "10%"),
            enc("Snorlax", 143, ["LGP", "LGE"], "Cave", "51-56", "5%"),
          ],
          items: [
            item("Mewtwo", "Deepest chamber (Lv. 70 — save first!)"),
            item("PP Max", "1F"),
            item("Full Restore", "B1F (multiple)"),
            item("Golden Nanab Berry", "B1F"),
          ],
        },
        {
          name: "Green Battle",
          description:
            "After catching Mewtwo, the mysterious trainer Green (based on the female protagonist from FireRed and LeafGreen) appears in Cerulean City near the cave entrance. She is a powerful trainer with a balanced team of six Pokemon at high levels. Defeating her earns you a set of Mega Stones (Venusaurite, Charizardite X, Charizardite Y, Blastoisinite). Green can be rebattled daily.",
          trainers: [
            trn(
              "Pokemon Trainer",
              "Green",
              [
                pk("Clefable", 66, 36),
                pk("Gengar", 66, 94),
                pk("Kangaskhan", 66, 115),
                pk("Ninetales", 66, 38),
                pk("Victreebel", 66, 71),
                pk("Blastoise", 68, 9),
              ],
              "Mega Stones reward"
            ),
          ],
          items: [
            item(
              "Mega Stones Set",
              "Defeat Green (Venusaurite, Charizardite X/Y, Blastoisinite)"
            ),
          ],
        },
        {
          name: "Meltan & Melmetal",
          description:
            "Meltan can only be obtained by transferring from Pokemon GO via the GO Park in Fuchsia City. Use a Mystery Box in Pokemon GO (obtained by sending any Pokemon from GO to Let's Go) to spawn Meltan in GO, catch them there, then transfer to Let's Go. Melmetal evolves from Meltan using 400 Meltan Candy in Pokemon GO, then can be transferred to Let's Go. These are the only non-Kanto Pokemon available in Let's Go.",
          items: [
            item(
              "Meltan",
              "Transfer from Pokemon GO via GO Park in Fuchsia City"
            ),
            item("Melmetal", "Evolve Meltan in Pokemon GO, then transfer"),
          ],
        },
      ],
    },
  ],
};
