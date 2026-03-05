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

export const SWORD_SHIELD_WALKTHROUGH: GameWalkthrough = {
  slug: "sword-shield",
  gameLabel: "Sword & Shield",
  versionTags: ["Sw", "Sh"],
  parts: [
    /* ===============================================================
     *  PART 1 -- Postwick & Slumbering Weald
     * =============================================================== */
    {
      part: 1,
      title: "Postwick & the Slumbering Weald",
      summary:
        "Meet Hop and Leon, choose your starter, and encounter a mysterious Pokemon in the foggy forest.",
      locations: [
        {
          name: "Postwick",
          description:
            "Your adventure begins in the small town of Postwick in the Galar region. Watch the Champion Cup match on TV featuring Leon, Hop's older brother and the undefeated Champion of Galar. Head outside and meet Hop, who will take you to his house. Leon arrives and offers you and Hop each a starter Pokemon. Choose between Grookey (Grass), Scorbunny (Fire), or Sobble (Water). Hop will pick the starter weak to yours. After choosing, battle Hop in your front yard.",
          trainers: [
            trn("Rival", "Hop", [pk("Wooloo", 3, 831), pk("Grookey", 5, 810)], "First battle"),
          ],
          items: [
            item("Starter Pokemon", "Gift from Leon (Grookey, Scorbunny, or Sobble)"),
            item("Potion", "From your bedroom PC"),
          ],
        },
        {
          name: "Slumbering Weald",
          description:
            "Hop's Wooloo wanders into the mysterious Slumbering Weald. Follow Hop inside to find it. The forest is thick with fog. You will encounter a mysterious Pokemon shrouded in mist that cannot be damaged -- this is a scripted battle you cannot win. After blacking out, you and Hop are rescued by Leon. The encounter sets up the central legend of the game involving Zacian and Zamazenta.",
          encounters: [
            enc("Rookidee", 821, ["Sw", "Sh"], "Grass", "2-4", "30%"),
            enc("Skwovet", 819, ["Sw", "Sh"], "Grass", "2-4", "30%"),
            enc("Blipbug", 824, ["Sw", "Sh"], "Grass", "2-4", "25%"),
            enc("Nickit", 827, ["Sw", "Sh"], "Grass", "2-4", "15%"),
          ],
          items: [
            item("Potion", "Path in the weald"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 -- Route 1, Route 2, Wedgehurst & Wild Area Intro
     * =============================================================== */
    {
      part: 2,
      title: "Routes 1-2, Wedgehurst & Wild Area Introduction",
      summary:
        "Travel through Routes 1 and 2, receive your Pokedex in Wedgehurst, and get your first taste of the Wild Area.",
      locations: [
        {
          name: "Route 1",
          description:
            "Head south from Postwick along Route 1. This short route introduces basic wild encounters. Hop will show you how to catch Pokemon and give you Poke Balls. Catch a few Pokemon to build your team early.",
          encounters: [
            enc("Skwovet", 819, ["Sw", "Sh"], "Grass", "2-5", "35%"),
            enc("Rookidee", 821, ["Sw", "Sh"], "Grass", "2-5", "25%"),
            enc("Blipbug", 824, ["Sw", "Sh"], "Grass", "2-5", "20%"),
            enc("Wooloo", 831, ["Sw", "Sh"], "Grass", "2-5", "15%"),
            enc("Nickit", 827, ["Sw", "Sh"], "Grass", "2-5", "5%"),
          ],
          items: [
            item("Poke Ball x20", "From Hop"),
            item("Potion", "Hidden along the route"),
          ],
        },
        {
          name: "Wedgehurst",
          description:
            "Arrive in Wedgehurst and visit the Pokemon Research Lab. Professor Magnolia's granddaughter Sonia will give you and Hop each a Pokedex and a Dynamax Band. Explore the town -- visit the Boutique and the Pokemon Center. Leon endorses you and Hop for the Gym Challenge.",
          items: [
            item("Pokedex", "From Sonia at the Research Lab"),
            item("Dynamax Band", "From Professor Magnolia"),
            item("Endorsement", "From Leon"),
          ],
        },
        {
          name: "Route 2",
          description:
            "Head north from Wedgehurst toward the Wild Area station. Route 2 has taller grass with slightly higher-level Pokemon. You can find Yamper here, an excellent Electric-type companion. At the north end, take the train to the Wild Area.",
          encounters: [
            enc("Skwovet", 819, ["Sw", "Sh"], "Grass", "4-7", "25%"),
            enc("Rookidee", 821, ["Sw", "Sh"], "Grass", "4-7", "20%"),
            enc("Blipbug", 824, ["Sw", "Sh"], "Grass", "4-7", "15%"),
            enc("Nickit", 827, ["Sw", "Sh"], "Grass", "4-7", "15%"),
            enc("Chewtle", 833, ["Sw", "Sh"], "Grass", "5-7", "10%"),
            enc("Yamper", 835, ["Sw", "Sh"], "Grass", "5-7", "10%"),
            enc("Lotad", 270, ["Sh"], "Grass", "4-6", "5%"),
            enc("Seedot", 273, ["Sw"], "Grass", "4-6", "5%"),
          ],
        },
        {
          name: "Wild Area (South)",
          description:
            "Your first visit to the expansive Wild Area -- an open-world zone with free camera control and Pokemon of wildly varying levels roaming the overworld. Be cautious of high-level Pokemon you cannot yet catch (your catch limit depends on badge count). Explore the Meetup Spot and Rolling Fields. You can participate in Max Raid Battles at glowing Pokemon Dens by interacting with them. Collect Watts from dens to spend at Watt Traders. Take the train from the Wild Area Station to Motostoke when ready.",
          encounters: [
            enc("Machop", 66, ["Sw", "Sh"], "Grass", "8-15", "—"),
            enc("Onix", 95, ["Sw", "Sh"], "Grass", "10-15", "—"),
            enc("Butterfree", 12, ["Sw", "Sh"], "Grass", "12-15", "—"),
            enc("Tyrogue", 236, ["Sw", "Sh"], "Grass", "10-15", "—"),
            enc("Growlithe", 58, ["Sw", "Sh"], "Grass", "10-15", "—"),
            enc("Vulpix", 37, ["Sw", "Sh"], "Grass", "10-15", "—"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 -- Motostoke, Route 3, Galar Mine, Turffield Gym
     * =============================================================== */
    {
      part: 3,
      title: "Motostoke, Route 3, Galar Mine & Turffield Gym",
      summary:
        "Attend the Gym Challenge opening ceremony in Motostoke, travel through Route 3 and Galar Mine, and earn the Grass Badge from Milo.",
      locations: [
        {
          name: "Motostoke",
          description:
            "A large industrial city built around a massive stadium. Explore the city and attend the Gym Challenge opening ceremony at Motostoke Stadium. Here you will meet your fellow challengers including Marnie and her supporter team, Team Yell, as well as Bede, another rival endorsed by Chairman Rose. After the ceremony, head south to Route 3.",
          items: [
            item("TM68 Fire Fang", "Upper Motostoke, from a League Staff member"),
            item("Camping Gear", "From the camping shop owner"),
          ],
        },
        {
          name: "Route 3",
          description:
            "A scenic route heading south from Motostoke toward the Galar Mine. The route features rolling hills and tall grass. You will encounter several trainers along the way. Gossifleur can be found here -- Milo's signature Pokemon line. Stock up on Potions before entering the mine.",
          encounters: [
            enc("Gossifleur", 829, ["Sw", "Sh"], "Grass", "8-12", "20%"),
            enc("Rookidee", 821, ["Sw", "Sh"], "Grass", "8-12", "20%"),
            enc("Skwovet", 819, ["Sw", "Sh"], "Grass", "8-12", "15%"),
            enc("Machop", 66, ["Sw", "Sh"], "Grass", "8-12", "15%"),
            enc("Rolycoly", 837, ["Sw", "Sh"], "Grass", "8-12", "10%"),
            enc("Vulpix", 37, ["Sw", "Sh"], "Grass", "8-12", "10%"),
            enc("Growlithe", 58, ["Sw", "Sh"], "Grass", "8-12", "10%"),
          ],
          trainers: [
            trn("Schoolboy", "Marvin", [pk("Blipbug", 9, 824)], "---"),
            trn("Lass", "Rei", [pk("Gossifleur", 10, 829)], "---"),
          ],
        },
        {
          name: "Galar Mine",
          description:
            "A mine passage connecting Route 3 to Route 4. Team Yell grunts are causing trouble inside -- battle them to proceed. Bede will also challenge you here. Rolycoly and Carkol are common inside. Look for items along the side paths.",
          encounters: [
            enc("Rolycoly", 837, ["Sw", "Sh"], "Cave", "10-13", "35%"),
            enc("Woobat", 527, ["Sw", "Sh"], "Cave", "10-13", "25%"),
            enc("Roggenrola", 524, ["Sw", "Sh"], "Cave", "10-13", "20%"),
            enc("Timburr", 532, ["Sw", "Sh"], "Cave", "10-13", "15%"),
            enc("Drilbur", 529, ["Sw", "Sh"], "Cave", "10-13", "5%"),
          ],
          trainers: [
            trn("Team Yell Grunt", "Grunt", [pk("Zigzagoon", 9, 263)], "---"),
            trn("Team Yell Grunt", "Grunt", [pk("Nickit", 9, 827)], "---"),
            trn("Rival", "Bede", [
              pk("Solosis", 13, 577),
              pk("Gothita", 13, 574),
              pk("Hatenna", 15, 856),
            ], "---"),
          ],
          items: [
            item("Grip Claw", "Side tunnel in the mine"),
            item("Star Piece", "Hidden in a corner"),
          ],
        },
        {
          name: "Turffield",
          description:
            "A rural town known for its geoglyphs and farming culture. The Turffield Gym is here. Before challenging Milo, explore the town and visit the geoglyph on the hillside. Talk to Sonia to learn about the Darkest Day legend.",
          items: [
            item("Revive", "From a woman near the geoglyph"),
          ],
        },
        {
          name: "Turffield Gym -- Leader Milo",
          description:
            "Milo specializes in Grass-type Pokemon. The Gym Mission involves herding Wooloo through a field while avoiding obstacles. Fire, Ice, Poison, and Flying moves are super effective. Milo's ace Eldegoss can Gigantamax, turning it into a massive cotton fortress. Scorbunny or a Rookidee evolution handles this gym well. This is your first experience battling a Gigantamax Pokemon.",
          trainers: [
            trn("Gym Leader", "Milo", [
              pk("Gossifleur", 19, 829),
              pk("Eldegoss", 20, 830),
            ], "Grass Badge + TM10 (Magical Leaf) + Grass Uniform"),
          ],
          items: [
            item("Grass Badge", "Defeat Milo"),
            item("TM10 Magical Leaf", "Defeat Milo"),
            item("Grass Uniform", "Defeat Milo"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 -- Route 5 & Hulbury Gym (Nessa - Water)
     * =============================================================== */
    {
      part: 4,
      title: "Route 5 & Hulbury Gym",
      summary:
        "Travel along Route 5, receive the Rotom Bike, and challenge Nessa for the Water Badge.",
      locations: [
        {
          name: "Route 5",
          description:
            "A route connecting Turffield to Hulbury. You will receive the Rotom Bike here, allowing you to travel faster. The route has a Pokemon Nursery (Day Care) where you can breed Pokemon. Hop will battle you along the way. Applin can be found in the grass here -- a Dragon/Grass type that evolves differently between versions (Flapple in Sword, Appletun in Shield). Toxel is available as a gift from the nursery worker.",
          encounters: [
            enc("Applin", 840, ["Sw", "Sh"], "Grass", "16-18", "10%"),
            enc("Farfetch'd", 83, ["Sw"], "Grass", "16-18", "5%"),
            enc("Spritzee", 682, ["Sh"], "Grass", "16-18", "5%"),
            enc("Swirlix", 684, ["Sw"], "Grass", "16-18", "5%"),
            enc("Stufful", 759, ["Sw", "Sh"], "Grass", "16-18", "15%"),
            enc("Eldegoss", 830, ["Sw", "Sh"], "Grass", "16-18", "15%"),
            enc("Drifloon", 425, ["Sw", "Sh"], "Grass", "16-18", "10%"),
            enc("Wobbuffet", 202, ["Sw", "Sh"], "Grass", "16-18", "10%"),
          ],
          trainers: [
            trn("Rival", "Hop", [
              pk("Wooloo", 18, 831),
              pk("Corvisquire", 19, 822),
              pk("Drizzile", 21, 817),
            ], "---"),
          ],
          items: [
            item("Rotom Bike", "From a man on the route"),
            item("Toxel", "Gift from the nursery worker"),
          ],
        },
        {
          name: "Hulbury",
          description:
            "A port town with a lighthouse and seafood market. Explore the marketplace for items. Chairman Rose and Oleana are present here. Visit the lighthouse to find Sonia researching the legend of the Darkest Day. The Hulbury Gym is at the north end of town.",
          items: [
            item("Expert Belt", "From the marketplace area"),
          ],
        },
        {
          name: "Hulbury Gym -- Leader Nessa",
          description:
            "Nessa specializes in Water-type Pokemon. The Gym Mission involves solving water puzzles by pressing switches to redirect water flow. Grass and Electric moves are super effective. Nessa's ace Drednaw can Gigantamax into a towering snapping turtle. Grookey/Thwackey or an Electric-type like Yamper will be very effective here.",
          trainers: [
            trn("Gym Leader", "Nessa", [
              pk("Goldeen", 22, 118),
              pk("Arrokuda", 23, 846),
              pk("Drednaw", 24, 834),
            ], "Water Badge + TM36 (Whirlpool) + Water Uniform"),
          ],
          items: [
            item("Water Badge", "Defeat Nessa"),
            item("TM36 Whirlpool", "Defeat Nessa"),
            item("Water Uniform", "Defeat Nessa"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 -- Galar Mine No. 2 & Motostoke Gym (Kabu - Fire)
     * =============================================================== */
    {
      part: 5,
      title: "Galar Mine No. 2 & Motostoke Gym",
      summary:
        "Navigate Galar Mine No. 2, confront Team Yell and Bede, then challenge Kabu for the Fire Badge.",
      locations: [
        {
          name: "Galar Mine No. 2",
          description:
            "A second mine connecting Hulbury back to Motostoke. This mine features minecart tracks and Team Yell grunts blocking the way. Bede will battle you again here. You can find Stunfisk (Galarian form) and other Ground/Steel types in the mine. Kabu, the Fire Gym Leader, is known as the 'great wall' of the Gym Challenge -- many challengers fail here.",
          encounters: [
            enc("Stunfisk", 618, ["Sw", "Sh"], "Cave", "20-24", "20%"),
            enc("Carkol", 838, ["Sw", "Sh"], "Cave", "20-24", "15%"),
            enc("Noibat", 714, ["Sw", "Sh"], "Cave", "20-24", "15%"),
            enc("Croagunk", 453, ["Sh"], "Cave", "20-24", "10%"),
            enc("Scraggy", 559, ["Sw"], "Cave", "20-24", "10%"),
            enc("Binacle", 688, ["Sw", "Sh"], "Cave", "20-24", "15%"),
            enc("Shellos", 422, ["Sw", "Sh"], "Cave", "20-24", "15%"),
          ],
          trainers: [
            trn("Team Yell Grunt", "Grunt", [pk("Thievul", 22, 828)], "---"),
            trn("Team Yell Grunt", "Grunt", [pk("Linoone", 22, 264)], "---"),
            trn("Rival", "Bede", [
              pk("Solosis", 21, 577),
              pk("Gothita", 22, 574),
              pk("Ponyta", 22, 77),
              pk("Hatenna", 23, 856),
            ], "---"),
          ],
          items: [
            item("TM49 Sand Tomb", "Side path in the mine"),
          ],
        },
        {
          name: "Motostoke Gym -- Leader Kabu",
          description:
            "Kabu specializes in Fire-type Pokemon. The Gym Mission involves catching or defeating wild Pokemon in a points-based challenge before the timer runs out. Water, Ground, and Rock moves are super effective. Kabu's ace Centiskorch can Gigantamax into a massive flaming centipede. Drednaw or a Water-type from the Wild Area is your best bet. Kabu is considered the toughest of the first three Gym Leaders -- make sure your team is at least level 25.",
          trainers: [
            trn("Gym Leader", "Kabu", [
              pk("Ninetales", 25, 38),
              pk("Arcanine", 25, 59),
              pk("Centiskorch", 27, 851),
            ], "Fire Badge + TM13 (Fire Spin) + Fire Uniform"),
          ],
          items: [
            item("Fire Badge", "Defeat Kabu"),
            item("TM13 Fire Spin", "Defeat Kabu"),
            item("Fire Uniform", "Defeat Kabu"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 -- Route 6 & Stow-on-Side Gym (Bea/Allister)
     * =============================================================== */
    {
      part: 6,
      title: "Route 6 & Stow-on-Side Gym",
      summary:
        "Traverse Route 6, encounter the fossil researchers, and challenge Bea (Sword) or Allister (Shield) for the fourth badge.",
      locations: [
        {
          name: "Route 6",
          description:
            "A desert-like route leading to Stow-on-Side. You will encounter Team Yell along the way. On this route you can find the fossil researchers Cara Liss, who will combine fossils into unique prehistoric Pokemon (Dracozolt, Arctozolt, Dracovish, Arctovish). Silicobra and Torkoal roam the sandy areas.",
          encounters: [
            enc("Silicobra", 843, ["Sw", "Sh"], "Grass", "28-30", "20%"),
            enc("Torkoal", 324, ["Sw", "Sh"], "Grass", "28-30", "10%"),
            enc("Hippopotas", 449, ["Sw", "Sh"], "Grass", "28-30", "15%"),
            enc("Maractus", 556, ["Sw", "Sh"], "Grass", "28-30", "10%"),
            enc("Helioptile", 694, ["Sw", "Sh"], "Grass", "28-30", "15%"),
            enc("Dwebble", 557, ["Sw", "Sh"], "Grass", "28-30", "15%"),
            enc("Trapinch", 328, ["Sw", "Sh"], "Grass", "28-30", "10%"),
          ],
          trainers: [
            trn("Backpacker", "Ruth", [pk("Maractus", 28, 556)], "---"),
            trn("Team Yell Grunt", "Grunt", [pk("Linoone", 28, 264), pk("Pangoro", 28, 675)], "---"),
          ],
          items: [
            item("Fossilized Bird", "Sw: From researcher on Route 6"),
            item("Fossilized Dino", "Sw: From researcher on Route 6"),
            item("Fossilized Drake", "Sh: From researcher on Route 6"),
            item("Fossilized Fish", "Sh: From researcher on Route 6"),
            item("TM30 Steel Wing", "Found on route"),
          ],
        },
        {
          name: "Stow-on-Side",
          description:
            "An ancient town built along cliff walls, known for its market and mural. Hop will challenge you here. After the battle, visit the ancient mural with Sonia to learn more about the legendary heroes. Bede causes a scene by destroying the mural, leading Chairman Rose to revoke his Gym Challenge endorsement.",
          trainers: [
            trn("Rival", "Hop", [
              pk("Cramorant", 29, 845),
              pk("Toxel", 29, 848),
              pk("Silicobra", 30, 843),
              pk("Thwackey", 33, 811),
            ], "---"),
          ],
        },
        {
          name: "Stow-on-Side Gym -- Leader Bea (Sword)",
          description:
            "Bea specializes in Fighting-type Pokemon (Sword only). The Gym Mission involves riding in a cup through a spinning teacup ride while battling trainers. Psychic, Flying, and Fairy moves are super effective. Bea's ace Machamp can Gigantamax. If you have a Flying-type like Corvisquire or a Psychic-type, you will dominate this gym.",
          trainers: [
            trn("Gym Leader", "Bea", [
              pk("Hitmontop", 34, 237),
              pk("Pangoro", 34, 675),
              pk("Sirfetch'd", 35, 865),
              pk("Machamp", 36, 68),
            ], "Fighting Badge + TM42 (Revenge) + Fighting Uniform (Sword only)"),
          ],
          items: [
            item("Fighting Badge", "Defeat Bea (Sword)"),
            item("TM42 Revenge", "Defeat Bea (Sword)"),
          ],
        },
        {
          name: "Stow-on-Side Gym -- Leader Allister (Shield)",
          description:
            "Allister specializes in Ghost-type Pokemon (Shield only). The Gym Mission is the same spinning teacup challenge. Dark and Ghost moves are super effective, but beware of getting hit by Ghost moves in return. Allister's ace Gengar can Gigantamax. A Dark-type like Thievul works well here.",
          trainers: [
            trn("Gym Leader", "Allister", [
              pk("Galarian Yamask", 34, 562),
              pk("Mimikyu", 34, 778),
              pk("Cursola", 35, 864),
              pk("Gengar", 36, 94),
            ], "Ghost Badge + TM77 (Hex) + Ghost Uniform (Shield only)"),
          ],
          items: [
            item("Ghost Badge", "Defeat Allister (Shield)"),
            item("TM77 Hex", "Defeat Allister (Shield)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 -- Glimwood Tangle & Ballonlea Gym (Opal - Fairy)
     * =============================================================== */
    {
      part: 7,
      title: "Glimwood Tangle & Ballonlea Gym",
      summary:
        "Navigate the magical Glimwood Tangle forest and earn the Fairy Badge from Opal in Ballonlea.",
      locations: [
        {
          name: "Glimwood Tangle",
          description:
            "A magical, bioluminescent forest connecting Stow-on-Side to Ballonlea. Wild Pokemon hide behind glowing mushrooms -- touch the mushrooms to trigger encounters. This forest is unique in that Pokemon do not appear in the overworld. Ponyta (Galarian form -- Psychic type) is exclusive to Shield here. Impidimp, Morgrem, and Sinistea can all be found. The atmosphere is ethereal and mysterious.",
          encounters: [
            enc("Impidimp", 859, ["Sw", "Sh"], "Grass", "32-36", "20%"),
            enc("Morgrem", 860, ["Sw", "Sh"], "Grass", "34-36", "10%"),
            enc("Phantump", 708, ["Sw", "Sh"], "Grass", "32-36", "15%"),
            enc("Sinistea", 854, ["Sw", "Sh"], "Grass", "32-36", "15%"),
            enc("Shiinotic", 756, ["Sw", "Sh"], "Grass", "32-36", "10%"),
            enc("Hatenna", 856, ["Sw", "Sh"], "Grass", "32-36", "10%"),
            enc("Spritzee", 682, ["Sh"], "Grass", "32-36", "10%"),
            enc("Swirlix", 684, ["Sw"], "Grass", "32-36", "10%"),
            enc("Galarian Ponyta", 77, ["Sh"], "Grass", "32-36", "10%"),
          ],
          items: [
            item("Luminous Moss", "Hidden among mushrooms"),
            item("Balm Mushroom", "Hidden path"),
          ],
        },
        {
          name: "Ballonlea",
          description:
            "A mystical town hidden beneath the mushroom canopy of Glimwood Tangle. The town glows with bioluminescent light. Opal, the elderly Fairy-type Gym Leader, is preparing to retire and is looking for a successor. Visit the stadium to challenge her.",
        },
        {
          name: "Ballonlea Gym -- Leader Opal",
          description:
            "Opal specializes in Fairy-type Pokemon. The Gym Mission is a quiz show -- Opal asks you questions during battles, and your answers can raise or lower your Pokemon's stats. Steel and Poison moves are super effective. Opal's ace Alcremie can Gigantamax into a towering wedding cake. Her Galarian Weezing has Neutralizing Gas which disables abilities. Bring a strong Steel or Poison type.",
          trainers: [
            trn("Gym Leader", "Opal", [
              pk("Galarian Weezing", 36, 110),
              pk("Mawile", 36, 303),
              pk("Togekiss", 37, 468),
              pk("Alcremie", 38, 869),
            ], "Fairy Badge + TM87 (Draining Kiss) + Fairy Uniform"),
          ],
          items: [
            item("Fairy Badge", "Defeat Opal"),
            item("TM87 Draining Kiss", "Defeat Opal"),
            item("Fairy Uniform", "Defeat Opal"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 -- Routes 7-8 & Circhester Gym (Gordie/Melony)
     * =============================================================== */
    {
      part: 8,
      title: "Routes 7-8 & Circhester Gym",
      summary:
        "Travel through snowy routes, deal with Team Yell, and challenge Gordie (Sword) or Melony (Shield) for the sixth badge.",
      locations: [
        {
          name: "Route 7",
          description:
            "A route leading north from Hammerlocke toward the snowy mountains. The terrain transitions from grassland to rocky highlands. Hop will battle you here again. You can find Galarian Meowth (Steel type) and various other Pokemon.",
          encounters: [
            enc("Galarian Meowth", 52, ["Sw", "Sh"], "Grass", "36-40", "10%"),
            enc("Corviknight", 823, ["Sw", "Sh"], "Grass", "38-40", "5%"),
            enc("Thievul", 828, ["Sw", "Sh"], "Grass", "36-40", "10%"),
            enc("Perrserker", 863, ["Sw", "Sh"], "Grass", "38-40", "5%"),
            enc("Inkay", 686, ["Sw", "Sh"], "Grass", "36-40", "15%"),
            enc("Seismitoad", 537, ["Sw", "Sh"], "Grass", "36-40", "10%"),
            enc("Karrablast", 588, ["Sw", "Sh"], "Grass", "36-40", "10%"),
          ],
          trainers: [
            trn("Rival", "Hop", [
              pk("Trevenant", 37, 709),
              pk("Heatmor", 37, 631),
              pk("Snorlax", 38, 143),
              pk("Rillaboom", 40, 812),
            ], "---"),
          ],
        },
        {
          name: "Route 8",
          description:
            "A rugged mountain route with snowy peaks and ancient ruins. The Steamdrift Way section is covered in snow and ice. Snom can be found here -- a tiny Ice/Bug larva that evolves into the beautiful Frosmoth with high friendship at night. Falinks, the formation Pokemon, also appears.",
          encounters: [
            enc("Snom", 872, ["Sw", "Sh"], "Grass", "38-41", "10%"),
            enc("Falinks", 870, ["Sw", "Sh"], "Grass", "38-41", "10%"),
            enc("Duraludon", 884, ["Sw", "Sh"], "Grass", "38-41", "2%"),
            enc("Togedemaru", 777, ["Sw", "Sh"], "Grass", "38-41", "10%"),
            enc("Rhydon", 112, ["Sw", "Sh"], "Grass", "38-41", "10%"),
            enc("Haunter", 93, ["Sw", "Sh"], "Grass", "38-41", "10%"),
            enc("Dusclops", 356, ["Sw", "Sh"], "Grass", "38-41", "10%"),
            enc("Solrock", 338, ["Sw"], "Grass", "38-41", "10%"),
            enc("Lunatone", 337, ["Sh"], "Grass", "38-41", "10%"),
          ],
          items: [
            item("TM43 Brick Break", "Ruins area"),
          ],
        },
        {
          name: "Circhester",
          description:
            "A snowy city with a famous hot spring and hotel. The Hero's Bath is a landmark. Visit Bob's Your Uncle restaurant for a special meal. The Circhester Gym has version-exclusive Gym Leaders.",
          items: [
            item("Old Letter", "From the hotel for Sonia's research"),
          ],
        },
        {
          name: "Circhester Gym -- Leader Gordie (Sword)",
          description:
            "Gordie specializes in Rock-type Pokemon (Sword only). The Gym Mission involves navigating a trap-filled pitfall course. Water, Grass, Fighting, Ground, and Steel moves are super effective. Gordie's ace Coalossal can Gigantamax into a volcanic mountain. A Water-type with Surf can sweep most of his team.",
          trainers: [
            trn("Gym Leader", "Gordie", [
              pk("Barbaracle", 40, 689),
              pk("Shuckle", 40, 213),
              pk("Stonjourner", 41, 874),
              pk("Coalossal", 42, 839),
            ], "Rock Badge + TM48 (Rock Tomb) + Rock Uniform (Sword only)"),
          ],
          items: [
            item("Rock Badge", "Defeat Gordie (Sword)"),
            item("TM48 Rock Tomb", "Defeat Gordie (Sword)"),
          ],
        },
        {
          name: "Circhester Gym -- Leader Melony (Shield)",
          description:
            "Melony specializes in Ice-type Pokemon (Shield only). The Gym Mission is the same pitfall course. Fire, Fighting, Rock, and Steel moves are super effective. Melony's ace Lapras can Gigantamax, gaining an Aurora Veil effect automatically. A strong Fire or Fighting type can handle her team, but watch out for Lapras's bulk.",
          trainers: [
            trn("Gym Leader", "Melony", [
              pk("Frosmoth", 40, 873),
              pk("Galarian Darmanitan", 40, 555),
              pk("Eiscue", 41, 875),
              pk("Lapras", 42, 131),
            ], "Ice Badge + TM27 (Icy Wind) + Ice Uniform (Shield only)"),
          ],
          items: [
            item("Ice Badge", "Defeat Melony (Shield)"),
            item("TM27 Icy Wind", "Defeat Melony (Shield)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 -- Route 9 & Spikemuth Gym (Piers - Dark)
     * =============================================================== */
    {
      part: 9,
      title: "Route 9 & Spikemuth Gym",
      summary:
        "Bike across the waters of Route 9, pass through Team Yell's blockade, and earn the Dark Badge from Piers in Spikemuth.",
      locations: [
        {
          name: "Route 9",
          description:
            "A coastal and aquatic route that requires the Rotom Bike's water mode upgrade (received on this route). Surf across Circhester Bay and explore the waters. Cramorant can be seen fishing for Arrokuda. Team Yell has blockaded the entrance to Spikemuth. Multiple segments include Route 9 proper, Circhester Bay, and the Outer Spikemuth area.",
          encounters: [
            enc("Cramorant", 845, ["Sw", "Sh"], "Grass", "40-44", "10%"),
            enc("Pincurchin", 871, ["Sw", "Sh"], "Grass", "40-44", "10%"),
            enc("Gastrodon", 423, ["Sw", "Sh"], "Grass", "40-44", "10%"),
            enc("Octillery", 224, ["Sw", "Sh"], "Surfing", "40-44", "15%"),
            enc("Mantyke", 458, ["Sw", "Sh"], "Surfing", "40-44", "15%"),
            enc("Wailmer", 320, ["Sw", "Sh"], "Surfing", "40-44", "15%"),
            enc("Pelipper", 279, ["Sw", "Sh"], "Surfing", "40-44", "10%"),
          ],
          items: [
            item("Rotom Bike Water Mode", "From a researcher on Route 9"),
            item("TM45 Dive", "Found along the coastal path"),
          ],
        },
        {
          name: "Spikemuth",
          description:
            "A rundown, narrow town that feels like a back alley. Unlike other gyms, Spikemuth does not have a stadium or a Power Spot, so Dynamaxing is not possible here. Instead, Piers battles you straight up. Team Yell grunts fill the streets leading to Piers -- they are actually his fans from Spikemuth. Marnie will challenge you before you reach Piers.",
          trainers: [
            trn("Rival", "Marnie", [
              pk("Liepard", 42, 510),
              pk("Toxicroak", 43, 454),
              pk("Scrafty", 43, 560),
              pk("Morpeko", 44, 877),
            ], "---"),
            trn("Team Yell Grunt", "Grunt", [pk("Linoone", 42, 264), pk("Liepard", 42, 510)], "---"),
          ],
        },
        {
          name: "Spikemuth Gym -- Leader Piers",
          description:
            "Piers specializes in Dark-type Pokemon. This is the only gym in Galar without a Dynamax spot, so neither you nor Piers can Dynamax. Fighting, Bug, and Fairy moves are super effective. Piers leads with Scrafty and finishes with Obstagoon, the Galarian evolution of Linoone. After defeat, Piers graciously gives you the Dark Badge and announces his retirement, endorsing Marnie as the next Spikemuth Gym Leader.",
          trainers: [
            trn("Gym Leader", "Piers", [
              pk("Scrafty", 44, 560),
              pk("Malamar", 45, 687),
              pk("Skuntank", 45, 435),
              pk("Obstagoon", 46, 862),
            ], "Dark Badge + TM85 (Snarl) + Dark Uniform"),
          ],
          items: [
            item("Dark Badge", "Defeat Piers"),
            item("TM85 Snarl", "Defeat Piers"),
            item("Dark Uniform", "Defeat Piers"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 -- Hammerlocke Gym (Raihan - Dragon)
     * =============================================================== */
    {
      part: 10,
      title: "Hammerlocke Gym",
      summary:
        "Return to Hammerlocke and challenge Raihan, the final Gym Leader, for the Dragon Badge.",
      locations: [
        {
          name: "Hammerlocke",
          description:
            "Return to the fortified city of Hammerlocke for your final Gym Challenge. Hammerlocke is the home of the Hammerlocke Vault, which contains historical artifacts about the Darkest Day. Hop will battle you outside the stadium. Raihan is the strongest Gym Leader in Galar and is known for his double battle strategy using weather.",
          trainers: [
            trn("Rival", "Hop", [
              pk("Dubwool", 44, 832),
              pk("Snorlax", 44, 143),
              pk("Corviknight", 45, 823),
              pk("Pincurchin", 44, 871),
              pk("Rillaboom", 46, 812),
            ], "---"),
          ],
        },
        {
          name: "Hammerlocke Gym -- Leader Raihan",
          description:
            "Raihan specializes in Dragon-type Pokemon but uses double battles with weather-setting strategies. The Gym Mission involves battling trainers in double battles. Raihan's team uses sandstorm to boost his team's Special Defense and damage yours. His ace Duraludon can Gigantamax into a massive skyscraper-like tower. Ice and Fairy moves work well, but watch out for his weather-boosted attacks. This is a double battle format, so plan your team accordingly.",
          trainers: [
            trn("Gym Leader", "Raihan", [
              pk("Flygon", 47, 330),
              pk("Gigalith", 46, 526),
              pk("Sandaconda", 46, 844),
              pk("Duraludon", 48, 884),
            ], "Dragon Badge + TM99 (Breaking Swipe) + Dragon Uniform"),
          ],
          items: [
            item("Dragon Badge", "Defeat Raihan"),
            item("TM99 Breaking Swipe", "Defeat Raihan"),
            item("Dragon Uniform", "Defeat Raihan"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 -- Rose Tower & Chairman Rose
     * =============================================================== */
    {
      part: 11,
      title: "Rose Tower & the Darkest Day",
      summary:
        "Confront Chairman Rose at Rose Tower as he awakens Eternatus, triggering the Darkest Day.",
      locations: [
        {
          name: "Wyndon",
          description:
            "Travel to Wyndon, the capital of the Galar region and home of the Champion Cup stadium. The city is grand and modern. Hop and you are both in the Champion Cup semifinals. Before the finals, Chairman Rose reveals his plan to unleash the power of Eternatus to solve Galar's energy crisis -- even though the crisis is 1000 years away. Leon tries to stop Rose but is captured.",
          trainers: [
            trn("Rival", "Hop", [
              pk("Dubwool", 48, 832),
              pk("Snorlax", 47, 143),
              pk("Corviknight", 48, 823),
              pk("Pincurchin", 47, 871),
              pk("Rillaboom", 49, 812),
            ], "---"),
          ],
          items: [
            item("TM93 Eerie Impulse", "From a trainer in Wyndon"),
          ],
        },
        {
          name: "Rose Tower",
          description:
            "Infiltrate Rose Tower (Macro Cosmos HQ) by battling through floors of Macro Cosmos employees. Hop and a League Staff member join you as allies for some battles. Oleana, Rose's assistant, is the final boss of the tower. She uses a tough team featuring a Gigantamax Garbodor. After defeating her, Rose proceeds with his plan and awakens Eternatus at the Hammerlocke Energy Plant.",
          trainers: [
            trn("Macro Cosmos", "Oleana", [
              pk("Froslass", 47, 478),
              pk("Milotic", 47, 350),
              pk("Tsareena", 47, 763),
              pk("Salazzle", 48, 758),
              pk("Garbodor", 49, 569),
            ], "---"),
          ],
        },
        {
          name: "Hammerlocke Energy Plant",
          description:
            "Rush to the Hammerlocke Energy Plant beneath the stadium. Battle Chairman Rose, who uses Steel-type Pokemon. His ace Copperajah can Gigantamax. After defeating Rose, confront Eternatus in the tower. Leon is already there trying to contain it but failing. Eternatus is at Level 60 and transforms into its Eternamax form. You cannot catch it normally in this form -- Zacian (Sword) and Zamazenta (Shield) appear from the Slumbering Weald to help. Together with Hop, you battle Eternamax Eternatus in a Max Raid-style battle. After weakening it, throw any Poke Ball to catch Eternatus -- it has a guaranteed catch rate.",
          trainers: [
            trn("Chairman", "Rose", [
              pk("Escavalier", 55, 589),
              pk("Ferrothorn", 55, 598),
              pk("Perrserker", 55, 863),
              pk("Klinklang", 55, 601),
              pk("Copperajah", 56, 879),
            ], "---"),
          ],
          items: [
            item("Eternatus", "Caught after the Eternamax battle (guaranteed catch)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 -- Champion Cup
     * =============================================================== */
    {
      part: 12,
      title: "The Champion Cup",
      summary:
        "Compete in the Champion Cup tournament and face Champion Leon for the title.",
      locations: [
        {
          name: "Wyndon Stadium -- Champion Cup",
          description:
            "With Eternatus defeated and the Darkest Day averted, the Champion Cup can proceed. Battle your way through the semifinals and finals in Wyndon Stadium. Your semifinal opponents are Marnie and Hop. The final match is against the undefeated Champion Leon himself. Leon has an incredibly well-rounded team with his signature Gigantamax Charizard as his ace. Recommended level: 62-65+. This is the climactic battle of the main story.",
          trainers: [
            trn("Rival", "Marnie", [
              pk("Liepard", 47, 510),
              pk("Toxicroak", 47, 454),
              pk("Scrafty", 47, 560),
              pk("Morpeko", 48, 877),
              pk("Grimmsnarl", 49, 861),
            ], "---"),
            trn("Rival", "Hop", [
              pk("Dubwool", 49, 832),
              pk("Snorlax", 48, 143),
              pk("Corviknight", 49, 823),
              pk("Pincurchin", 48, 871),
              pk("Rillaboom", 50, 812),
            ], "---"),
            trn("Champion", "Leon", [
              pk("Aegislash", 62, 681),
              pk("Dragapult", 62, 887),
              pk("Haxorus", 63, 612),
              pk("Mr. Rime", 64, 866),
              pk("Seismitoad", 64, 537),
              pk("Charizard", 65, 6),
            ], "Champion Title"),
          ],
          items: [
            item("Champion Title", "Defeat Leon"),
            item("Champion Cape & Crown", "Ceremony after winning"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 -- Post-Game: Legendaries & Sordward/Shielbert
     * =============================================================== */
    {
      part: 13,
      title: "Post-Game: The Legendary Quest",
      summary:
        "Return to the Slumbering Weald, catch Zacian or Zamazenta, and deal with Sordward and Shielbert.",
      isPostGame: true,
      locations: [
        {
          name: "Slumbering Weald (Post-Game)",
          description:
            "After becoming Champion, Hop wants to return to the Slumbering Weald. Travel back to Postwick and enter the forest. This time you can reach the deepest part. Find the Rusted Sword (Sword) or Rusted Shield (Shield) at the altar. The legendary wolves appear but are stolen by Sordward and Shielbert, two eccentric descendants of the ancient Galar kings.",
          items: [
            item("Rusted Sword", "Sw: Altar in the Slumbering Weald"),
            item("Rusted Shield", "Sh: Altar in the Slumbering Weald"),
          ],
        },
        {
          name: "Gym Stadium Tours",
          description:
            "Sordward and Shielbert use Wishing Stars to force Dynamax on Pokemon at various stadiums throughout Galar. You must travel to each gym stadium and defeat the rampaging Dynamax Pokemon. Visit Turffield, Hulbury, Motostoke, Stow-on-Side, Ballonlea, Circhester, and Hammerlocke stadiums. Hop accompanies you throughout this quest.",
          trainers: [
            trn("Pretender", "Sordward", [
              pk("Sirfetch'd", 60, 865),
              pk("Golisopod", 60, 768),
              pk("Bisharp", 60, 625),
              pk("Doublade", 62, 680),
            ], "---"),
            trn("Pretender", "Shielbert", [
              pk("Bronzong", 60, 437),
              pk("Falinks", 60, 870),
              pk("Klinklang", 60, 601),
              pk("Aegislash", 62, 681),
            ], "---"),
          ],
        },
        {
          name: "Hammerlocke Energy Plant (Post-Game)",
          description:
            "The final post-game confrontation takes place at the Energy Plant. Sordward and Shielbert force Dynamax on Zacian (Shield) or Zamazenta (Sword) and you must battle and calm it. Afterward, Hop catches the other legendary wolf. You then battle the legendary Pokemon of your version at Level 70. In Sword, catch Zacian; in Shield, catch Zamazenta. Give it the Rusted Sword/Shield to unlock its Crowned form. Finally, battle Hop one last time as he begins his journey to become a Pokemon Professor.",
          trainers: [
            trn("Rival", "Hop", [
              pk("Dubwool", 69, 832),
              pk("Snorlax", 68, 143),
              pk("Corviknight", 69, 823),
              pk("Pincurchin", 68, 871),
              pk("Zamazenta", 70, 889),
              pk("Rillaboom", 70, 812),
            ], "Final post-game battle"),
          ],
          items: [
            item("Zacian", "Sw: Energy Plant rooftop battle (Lv70)"),
            item("Zamazenta", "Sh: Energy Plant rooftop battle (Lv70)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 -- Post-Game: Battle Tower & Max Raids
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Battle Tower & Max Raid Dens",
      summary:
        "Tackle the Battle Tower for competitive items and explore Max Raid Dens across the Wild Area.",
      isPostGame: true,
      locations: [
        {
          name: "Battle Tower",
          description:
            "The Battle Tower in Wyndon unlocks after becoming Champion. Battle through tiers of increasingly difficult trainers using rental teams or your own Pokemon. Earn BP (Battle Points) to purchase competitive items, mints (nature changers), Ability Capsules, and bottle caps for Hyper Training. Leon appears as the final boss at the top of the tower. Reaching certain ranks unlocks the Judge Function for checking IVs.",
          trainers: [
            trn("Tower Boss", "Leon", [
              pk("Aegislash", 50, 681),
              pk("Dragapult", 50, 887),
              pk("Charizard", 50, 6),
            ], "Battle Tower format (Lv50 rules)"),
          ],
          items: [
            item("Judge Function", "Reach Beginner Tier rank"),
            item("Battle Points", "Earned from each victory"),
            item("Type: Null", "Gift from a League Staff member in the tower lobby"),
          ],
        },
        {
          name: "Wild Area -- Max Raid Dens",
          description:
            "The Wild Area contains numerous Pokemon Dens that glow red or purple, indicating Max Raid Battles. Team up with three other trainers (online or NPC) to battle a Dynamax or Gigantamax Pokemon. Rare Pokemon and Hidden Ability Pokemon can only be found in Max Raids. Five-star raids contain the strongest Pokemon with the best IVs and Hidden Abilities. Use Wishing Pieces to activate empty dens. Gigantamax Pokemon are especially rare and powerful, with unique G-Max Moves.",
          encounters: [
            enc("Gigantamax Snorlax", 143, ["Sw", "Sh"], "Max Raid", "17-60", "Rare"),
            enc("Gigantamax Butterfree", 12, ["Sw", "Sh"], "Max Raid", "17-60", "Rare"),
            enc("Gigantamax Corviknight", 823, ["Sw", "Sh"], "Max Raid", "17-60", "Rare"),
            enc("Gigantamax Drednaw", 834, ["Sw", "Sh"], "Max Raid", "17-60", "Rare"),
            enc("Gigantamax Centiskorch", 851, ["Sw", "Sh"], "Max Raid", "17-60", "Rare"),
            enc("Gigantamax Grimmsnarl", 861, ["Sw", "Sh"], "Max Raid", "17-60", "Rare"),
            enc("Gigantamax Alcremie", 869, ["Sw", "Sh"], "Max Raid", "17-60", "Rare"),
          ],
          items: [
            item("TRs (Technical Records)", "Rewards from Max Raids"),
            item("Exp. Candy", "Rewards from Max Raids"),
            item("Dynamax Candy", "Rewards from Max Raids"),
            item("Rare Berries & Items", "Rewards from Max Raids"),
          ],
        },
      ],
    },
  ],
};
