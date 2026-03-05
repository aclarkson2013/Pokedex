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

export const BLACK2_WHITE2_WALKTHROUGH: GameWalkthrough = {
  slug: "black2-white2",
  gameLabel: "Black 2 & White 2",
  versionTags: ["B2", "W2"],
  parts: [
    /* ═══════════════════════════════════════════════════════
     *  PART 1 — Aspertia City
     * ═══════════════════════════════════════════════════════ */
    {
      part: 1,
      title: "Aspertia City — A New Journey Begins",
      summary:
        "Choose your starter, meet your rival Hugh, and earn the Basic Badge from Cheren.",
      locations: [
        {
          name: "Aspertia City",
          description:
            "Two years after the events of Black & White, your adventure begins in Aspertia City, a new town in southwestern Unova. Meet Bianca at the Aspertia Lookout, where she offers you a choice of three starter Pokemon: Snivy (Grass), Tepig (Fire), or Oshawott (Water). Your childhood friend Hugh will pick the starter strong against yours. After choosing, head to the Pokemon Center. Hugh will challenge you to your first battle near the city gate. Prepare for the Aspertia Gym, which has replaced the old Striaton Gym.",
          items: [
            item("Starter Pokemon", "Gift from Bianca at the Lookout"),
            item("Pokedex", "Gift from Bianca after choosing your starter"),
            item("Town Map", "From your Mom after leaving home"),
            item("Running Shoes", "From your Mom"),
          ],
        },
        {
          name: "Aspertia Gym — Leader Cheren",
          description:
            "Cheren is the first Gym Leader, specializing in Normal types. His gym is set up like a school with a simple path. Cheren uses Patrat and Lillipup. Fighting-type moves are super effective against Normal types, but you likely don't have one yet. Focus on leveling your starter to around 13-14 before challenging him. Lillipup's Work Up can boost its Attack, so try to take it down quickly. Winning earns you the Basic Badge and TM83 Work Up.",
          trainers: [
            trn(
              "School Kid",
              "Serena",
              [pk("Patrat", 9, 504), pk("Lillipup", 9, 506)],
              "₽180"
            ),
            trn(
              "School Kid",
              "Tai",
              [pk("Patrat", 9, 504), pk("Lillipup", 9, 506)],
              "₽180"
            ),
            trn(
              "Gym Leader",
              "Cheren",
              [pk("Patrat", 11, 504), pk("Lillipup", 13, 506)],
              "₽1,560 + TM83 (Work Up)"
            ),
          ],
          items: [
            item("Basic Badge", "Defeat Cheren"),
            item("TM83 Work Up", "Defeat Cheren"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 2 — Routes 19-20, Virbank City
     * ═══════════════════════════════════════════════════════ */
    {
      part: 2,
      title: "Floccesy Town, Floccesy Ranch & Virbank City",
      summary:
        "Explore the early routes, help Hugh at Floccesy Ranch, and earn the Toxic Badge from Roxie.",
      locations: [
        {
          name: "Route 19",
          description:
            "Head south from Aspertia City toward Floccesy Town. This short route introduces you to wild Pokemon battles. You can find Patrat and Purrloin in the grass here. Trainers line the path, providing good early experience.",
          encounters: [
            enc("Patrat", 504, ["B2", "W2"], "Grass", "2-4", "50%"),
            enc("Purrloin", 509, ["B2", "W2"], "Grass", "2-4", "50%"),
          ],
        },
        {
          name: "Floccesy Town",
          description:
            "A quiet pastoral town. Alder, the former Champion, lives here and will give you some guidance. Heal up at the Pokemon Center and head north to Route 20.",
          items: [item("Medal Box", "From Mr. Medal in the Pokemon Center")],
        },
        {
          name: "Route 20",
          description:
            "A longer route heading north from Floccesy Town toward Floccesy Ranch. The grass has a wider variety of Pokemon. Sunkern, Pidove, and Sewaddle can be found here. This is a good place to build your early team.",
          encounters: [
            enc("Pidove", 519, ["B2", "W2"], "Grass", "2-4", "30%"),
            enc("Sewaddle", 540, ["B2", "W2"], "Grass", "2-4", "20%"),
            enc("Sunkern", 191, ["B2", "W2"], "Grass", "2-4", "20%"),
            enc("Patrat", 504, ["B2", "W2"], "Grass", "2-4", "15%"),
            enc("Purrloin", 509, ["B2", "W2"], "Grass", "2-4", "15%"),
          ],
        },
        {
          name: "Floccesy Ranch",
          description:
            "Alder asks you and Hugh to find a lost Herdier on the ranch. Explore the ranch to find Team Plasma grunts trying to steal Pokemon. Battle them with Hugh, and the Herdier will be returned. Riolu can be found in the grass here, making it one of the earliest games where you can catch one. Mareep is also available and evolves into the useful Flaaffy and Ampharos.",
          encounters: [
            enc("Lillipup", 506, ["B2", "W2"], "Grass", "4-7", "30%"),
            enc("Mareep", 179, ["B2", "W2"], "Grass", "4-7", "25%"),
            enc("Psyduck", 54, ["B2", "W2"], "Grass", "4-7", "20%"),
            enc("Azurill", 298, ["B2", "W2"], "Grass", "4-7", "15%"),
            enc("Riolu", 447, ["B2", "W2"], "Grass", "5-7", "5%"),
            enc("Patrat", 504, ["B2", "W2"], "Grass", "4-7", "5%"),
          ],
          trainers: [
            trn(
              "Team Plasma Grunt",
              "Grunt",
              [pk("Patrat", 8, 504)],
              "₽320"
            ),
          ],
          items: [
            item("Paralyz Heal", "Northwest corner of the ranch"),
            item("Potion", "Near the entrance"),
          ],
        },
        {
          name: "Virbank City",
          description:
            "Return south through Route 20 to reach Virbank City, an industrial port town with a music scene. Roxie runs the Virbank Gym inside a music club. Before challenging the gym, explore the Virbank Complex to the south for additional training and Pokemon. Magnemite and Growlithe (B2) or Magby (B2) and Elekid (W2) can be found there.",
          encounters: [
            enc("Magnemite", 81, ["B2", "W2"], "Grass", "11-14", "30%"),
            enc("Growlithe", 58, ["B2", "W2"], "Grass", "11-14", "25%"),
            enc("Magby", 240, ["B2"], "Grass", "11-14", "15%"),
            enc("Elekid", 239, ["W2"], "Grass", "11-14", "15%"),
            enc("Koffing", 109, ["B2", "W2"], "Grass", "11-14", "15%"),
            enc("Patrat", 504, ["B2", "W2"], "Grass", "11-14", "15%"),
          ],
        },
        {
          name: "Virbank Gym — Leader Roxie",
          description:
            "Roxie's gym is a rock club where you battle band members before facing her. Roxie specializes in Poison types. Ground and Psychic moves are super effective. Her Koffing can use Assurance and her Whirlipede is tough with Venoshock, which does double damage if your Pokemon is poisoned. Bring Antidotes or Pecha Berries! A Psyduck or Magnemite from the area can help. Level your team to around 16-18.",
          trainers: [
            trn(
              "Roughneck",
              "Nicky",
              [pk("Grimer", 14, 88), pk("Koffing", 14, 109)],
              "₽336"
            ),
            trn(
              "Guitarist",
              "Billy Jo",
              [pk("Venipede", 14, 543), pk("Koffing", 14, 109)],
              "₽448"
            ),
            trn(
              "Gym Leader",
              "Roxie",
              [pk("Koffing", 16, 109), pk("Whirlipede", 18, 544)],
              "₽2,160 + TM09 (Venoshock)"
            ),
          ],
          items: [
            item("Toxic Badge", "Defeat Roxie"),
            item("TM09 Venoshock", "Defeat Roxie"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 3 — Pokestar Studios, Castelia City
     * ═══════════════════════════════════════════════════════ */
    {
      part: 3,
      title: "Pokestar Studios & Castelia City",
      summary:
        "Try your hand at Pokestar Studios, sail to Castelia City, and earn the Insect Badge from Burgh.",
      locations: [
        {
          name: "Pokestar Studios",
          description:
            "Before leaving Virbank, you can visit Pokestar Studios, a unique feature where you star in movies by battling scripted opponents. Your rival Hugh and the studio owner will give you a tutorial. Completing movies earns you fans and special items. This is entirely optional but fun. You can return here anytime later.",
          items: [
            item("Lemonade", "From a fan after completing your first movie"),
          ],
        },
        {
          name: "Castelia City",
          description:
            "Take the boat from Virbank City's dock to reach Castelia City, the massive metropolis from Black & White. Explore the piers for free items, visit the Battle Company for trainer battles and an Exp. Share, and check out the various shops on the streets. Before heading to the gym, you'll encounter Team Plasma in the Castelia Sewers with Hugh. The sewers contain Zubat, Rattata, and Grimer. After dealing with Team Plasma, head to the gym.",
          encounters: [
            enc("Rattata", 19, ["B2", "W2"], "Grass", "14-17", "30%"),
            enc("Zubat", 41, ["B2", "W2"], "Cave", "14-17", "30%"),
            enc("Grimer", 88, ["B2", "W2"], "Cave", "14-17", "20%"),
            enc("Cottonee", 546, ["B2"], "Grass", "14-17", "10%"),
            enc("Petilil", 548, ["W2"], "Grass", "14-17", "10%"),
          ],
          items: [
            item("Exp. Share", "Battle Company, 55th floor, defeat the boss"),
            item("Bicycle", "From a clown at the Pokemon Center gate"),
            item("Amulet Coin", "Castelia Sewers, north area"),
          ],
        },
        {
          name: "Castelia Gym — Leader Burgh",
          description:
            "Burgh's gym has a honey wall maze — walk through cocoon tunnels to find your way to him. Burgh uses Bug types. Fire, Flying, and Rock moves are super effective. His Leavanny is the biggest threat with Razor Leaf covering its Water and Rock weaknesses. A Growlithe or Magby/Elekid from the Virbank Complex is great here. Level your team to around 22-24.",
          trainers: [
            trn(
              "Harlequin",
              "Clarence",
              [pk("Sewaddle", 20, 540), pk("Sewaddle", 20, 540)],
              "₽640"
            ),
            trn(
              "Harlequin",
              "Gary",
              [pk("Dwebble", 20, 557), pk("Shelmet", 20, 616)],
              "₽640"
            ),
            trn(
              "Gym Leader",
              "Burgh",
              [
                pk("Swadloon", 22, 541),
                pk("Dwebble", 22, 557),
                pk("Leavanny", 24, 542),
              ],
              "₽2,880 + TM76 (Struggle Bug)"
            ),
          ],
          items: [
            item("Insect Badge", "Defeat Burgh"),
            item("TM76 Struggle Bug", "Defeat Burgh"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 4 — Route 4, Desert Resort, Nimbasa City
     * ═══════════════════════════════════════════════════════ */
    {
      part: 4,
      title: "Route 4, Desert Resort & Nimbasa City",
      summary:
        "Cross the desert, explore the ruins, and earn the Bolt Badge from Elesa.",
      locations: [
        {
          name: "Route 4",
          description:
            "Head north from Castelia through the gate to Route 4. In Black 2, the route has been developed with buildings and paved roads. In White 2, it remains a sandy construction zone. Both versions have Sandile, Darumaka, and Scraggy in the grass. Trainers line the route heading north toward the Desert Resort and Nimbasa City.",
          encounters: [
            enc("Sandile", 551, ["B2", "W2"], "Grass", "15-17", "30%"),
            enc("Darumaka", 554, ["B2", "W2"], "Grass", "15-17", "25%"),
            enc("Scraggy", 559, ["B2", "W2"], "Grass", "15-17", "20%"),
            enc("Trubbish", 568, ["B2", "W2"], "Grass", "15-17", "15%"),
            enc("Minccino", 572, ["B2", "W2"], "Grass", "15-17", "10%"),
          ],
          items: [
            item("Protein", "Hidden in the sand (dowsing machine)"),
            item("Wide Lens", "From a scientist on the route"),
          ],
        },
        {
          name: "Desert Resort",
          description:
            "West of Route 4, the Desert Resort is a sandy area with strong wild Pokemon and the Relic Castle entrance. Sandstorm is constant outdoors, chipping away HP each turn for non-Rock/Ground/Steel types. Sigilyph and Sandile are common. Inside the Relic Castle, you can find Yamask and explore deeper floors. Volcarona can be found in the deepest chamber as a post-game encounter.",
          encounters: [
            enc("Sandile", 551, ["B2", "W2"], "Grass", "19-22", "30%"),
            enc("Sandshrew", 27, ["B2", "W2"], "Grass", "19-22", "20%"),
            enc("Sigilyph", 561, ["B2", "W2"], "Grass", "19-22", "20%"),
            enc("Maractus", 556, ["B2", "W2"], "Grass", "19-22", "15%"),
            enc("Dwebble", 557, ["B2", "W2"], "Grass", "19-22", "10%"),
            enc("Trapinch", 328, ["B2", "W2"], "Grass", "19-22", "5%"),
            enc("Yamask", 562, ["B2", "W2"], "Cave", "19-22", "30%"),
            enc("Sandshrew", 27, ["B2", "W2"], "Cave", "19-22", "30%"),
          ],
          items: [
            item("Heart Scale", "Relic Castle 1F"),
            item("TM39 Rock Tomb", "Relic Castle B1F"),
            item("Fresh Water", "From a worker"),
          ],
        },
        {
          name: "Nimbasa City",
          description:
            "The entertainment capital of Unova. Explore the amusement park, Battle Subway, and sports stadiums. You'll meet your rival Hugh who battles Team Plasma here. The old gym leaders from Black & White can be challenged at the stadiums for extra experience. Head to the gym after exploring.",
          items: [
            item("Sun Stone", "In the amusement park area"),
            item("Vs. Recorder", "Battle Subway entrance"),
            item("Macho Brace", "From a man in the Pokemon Center"),
          ],
        },
        {
          name: "Nimbasa Gym — Leader Elesa",
          description:
            "Elesa's gym has been redesigned into a fashion runway with spotlights. Walk the catwalks to reach her. Elesa uses Electric types, including a Flaaffy, which is new to her B2W2 team. Ground moves are the most reliable counter, though Emolga's Volt Switch and Aerial Ace can be tricky since Ground moves don't hit Flying types. Use Rock or Ice moves for Emolga. A Sandile or Trapinch from the desert is excellent here. Level to 28-30.",
          trainers: [
            trn(
              "Beauty",
              "Fleming",
              [pk("Flaaffy", 27, 180), pk("Blitzle", 27, 522)],
              "₽1,728"
            ),
            trn(
              "Beauty",
              "Nikola",
              [pk("Emolga", 27, 587), pk("Flaaffy", 27, 180)],
              "₽1,728"
            ),
            trn(
              "Gym Leader",
              "Elesa",
              [
                pk("Emolga", 28, 587),
                pk("Flaaffy", 28, 180),
                pk("Zebstrika", 30, 523),
              ],
              "₽3,600 + TM72 (Volt Switch)"
            ),
          ],
          items: [
            item("Bolt Badge", "Defeat Elesa"),
            item("TM72 Volt Switch", "Defeat Elesa"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 5 — Route 5, Driftveil City, PWT intro
     * ═══════════════════════════════════════════════════════ */
    {
      part: 5,
      title: "Route 5, Driftveil City & PWT Introduction",
      summary:
        "Cross the Driftveil Drawbridge, earn the Quake Badge from Clay, and discover the Pokemon World Tournament.",
      locations: [
        {
          name: "Route 5",
          description:
            "Head west from Nimbasa across Route 5. Trainers and performers line the path. You can find Liepard, Trubbish, and Minccino in the tall grass. At the end of the route is the Driftveil Drawbridge, where you can find Wing items (feathers) as you cross.",
          encounters: [
            enc("Liepard", 510, ["B2", "W2"], "Grass", "22-25", "25%"),
            enc("Trubbish", 568, ["B2", "W2"], "Grass", "22-25", "25%"),
            enc("Minccino", 572, ["B2", "W2"], "Grass", "22-25", "20%"),
            enc("Solosis", 577, ["W2"], "Grass", "22-25", "15%"),
            enc("Gothita", 574, ["B2"], "Grass", "22-25", "15%"),
            enc("Liepard", 510, ["B2", "W2"], "Grass", "24-25", "15%"),
          ],
          items: [
            item("Hyper Potion", "Hidden near the performers"),
            item("Various Wings", "Random encounters on Driftveil Drawbridge"),
          ],
        },
        {
          name: "Driftveil City",
          description:
            "A mining and market town. Clay is the Gym Leader. Before you can challenge the gym, you'll need to help deal with Team Plasma. Hugh is also pursuing them aggressively. Explore the Driftveil Market for affordable items. A former Team Plasma member in a house will give you a Zorua. The PWT (Pokemon World Tournament) facility is south of town.",
          items: [
            item("Shell Bell", "From a man at the Pokemon Center"),
            item("Expert Belt", "From a woman in a house"),
            item("Zorua", "Gift from former Team Plasma member (Rood)"),
          ],
        },
        {
          name: "Driftveil Gym — Leader Clay",
          description:
            "Clay's gym is a mine elevator puzzle where you ride platforms down to different levels. Clay uses Ground types. Water, Grass, and Ice moves are super effective. His Excadrill is particularly dangerous with its high Attack stat and moves like Bulldoze and Slash. A Water-type like Azumarill or Dewott handles his team well. Level to around 31-33.",
          trainers: [
            trn(
              "Worker",
              "Noel",
              [pk("Drilbur", 29, 529), pk("Baltoy", 29, 343)],
              "₽1,160"
            ),
            trn(
              "Worker",
              "Tavarius",
              [pk("Sandile", 30, 551), pk("Onix", 30, 95)],
              "₽1,200"
            ),
            trn(
              "Gym Leader",
              "Clay",
              [
                pk("Krokorok", 31, 552),
                pk("Sandslash", 31, 28),
                pk("Excadrill", 33, 530),
              ],
              "₽3,960 + TM78 (Bulldoze)"
            ),
          ],
          items: [
            item("Quake Badge", "Defeat Clay"),
            item("TM78 Bulldoze", "Defeat Clay"),
          ],
        },
        {
          name: "Pokemon World Tournament (Introduction)",
          description:
            "After earning the Quake Badge, Clay takes you to the PWT facility south of Driftveil. You'll participate in a Driftveil Tournament as an introduction. Battle familiar Gym Leaders Cheren, Roxie, and Burgh in tournament-style matches. This is just a taste of the PWT — the full facility opens after the main story and lets you battle gym leaders and champions from every region!",
          trainers: [
            trn(
              "Gym Leader",
              "Cheren (PWT)",
              [pk("Stoutland", 25, 508), pk("Watchog", 25, 505)],
              "Tournament"
            ),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 6 — Route 6, Chargestone Cave, Mistralton City
     * ═══════════════════════════════════════════════════════ */
    {
      part: 6,
      title: "Route 6, Chargestone Cave & Mistralton City",
      summary:
        "Navigate the magnetic cave, deal with Team Plasma, and earn the Jet Badge from Skyla.",
      locations: [
        {
          name: "Route 6",
          description:
            "Head west from Driftveil. Route 6 passes through a forested area with a seasonal research lab. Deerling, Karrablast, Shelmet, and Foongus can all be found here. The Mistralton Cave entrance is visible but optional. At the end of the route lies Chargestone Cave.",
          encounters: [
            enc("Deerling", 585, ["B2", "W2"], "Grass", "24-27", "25%"),
            enc("Karrablast", 588, ["B2", "W2"], "Grass", "24-27", "20%"),
            enc("Shelmet", 616, ["B2", "W2"], "Grass", "24-27", "20%"),
            enc("Foongus", 590, ["B2", "W2"], "Grass", "24-27", "15%"),
            enc("Tranquill", 520, ["B2", "W2"], "Grass", "24-27", "10%"),
            enc("Marill", 183, ["B2", "W2"], "Grass", "24-27", "10%"),
          ],
          items: [
            item("Shiny Stone", "Northern section of Route 6"),
            item("TM56 Fling", "Near the Season Research Lab"),
          ],
        },
        {
          name: "Chargestone Cave",
          description:
            "A cave filled with electrically charged crystals that float and can be pushed. The puzzles involve pushing crystals to create paths. Wild Joltik, Ferroseed, Boldore, and Klink live here. N will appear and talk to you about his ideals from 2 years ago. Team Plasma Sage Zinzolin also appears. Bianca and Professor Juniper are studying the cave.",
          encounters: [
            enc("Joltik", 595, ["B2", "W2"], "Cave", "25-28", "25%"),
            enc("Ferroseed", 597, ["B2", "W2"], "Cave", "25-28", "20%"),
            enc("Boldore", 525, ["B2", "W2"], "Cave", "25-28", "20%"),
            enc("Klink", 599, ["B2", "W2"], "Cave", "25-28", "15%"),
            enc("Nosepass", 299, ["B2", "W2"], "Cave", "25-28", "10%"),
            enc("Tynamo", 602, ["B2", "W2"], "Cave", "25-28", "5%"),
            enc("Drilbur", 529, ["B2", "W2"], "Cave", "25-28", "5%"),
          ],
          trainers: [
            trn(
              "Scientist",
              "Ronald",
              [pk("Magneton", 32, 82), pk("Klink", 32, 599)],
              "₽1,536"
            ),
            trn(
              "Ace Trainer",
              "Corky",
              [pk("Sandslash", 33, 28), pk("Jolteon", 33, 135)],
              "₽1,980"
            ),
          ],
          items: [
            item("Revive", "East side of B1F"),
            item("Magnet", "Near the exit"),
            item("Thunderstone", "Hidden, use Dowsing Machine"),
          ],
        },
        {
          name: "Mistralton City",
          description:
            "A city built around a cargo airport. Skyla is the Gym Leader and also a pilot. Before challenging the gym, help Skyla by visiting the Celestial Tower on Route 7 to ring the bell at the top. Professor Juniper's father is here and will evaluate your Pokedex progress.",
          items: [
            item("Sharp Beak", "From a person near the runway"),
            item("TM40 Aerial Ace", "From a man in the cargo area"),
          ],
        },
        {
          name: "Mistralton Gym — Leader Skyla",
          description:
            "Skyla's gym uses cannons to launch you between platforms. Navigate the wind tunnels to reach her. Skyla uses Flying types. Electric, Rock, and Ice moves are super effective. Her Skarmory is a Steel/Flying type so Fire moves work too. Swoobat's Heart Stamp can flinch, and Swanna's BubbleBeam provides water coverage. An Electric type like Ampharos or Joltik/Galvantula is ideal. Level to 37-39.",
          trainers: [
            trn(
              "Pilot",
              "Chase",
              [pk("Swoobat", 35, 528), pk("Sigilyph", 35, 561)],
              "₽2,240"
            ),
            trn(
              "Pilot",
              "Ewing",
              [pk("Unfezant", 36, 521)],
              "₽2,304"
            ),
            trn(
              "Gym Leader",
              "Skyla",
              [
                pk("Swoobat", 37, 528),
                pk("Skarmory", 37, 227),
                pk("Swanna", 39, 581),
              ],
              "₽4,680 + TM62 (Acrobatics)"
            ),
          ],
          items: [
            item("Jet Badge", "Defeat Skyla"),
            item("TM62 Acrobatics", "Defeat Skyla"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 7 — Lentimas, Reversal Mountain, Undella
     * ═══════════════════════════════════════════════════════ */
    {
      part: 7,
      title: "Route 7, Celestial Tower, Lentimas Town & Reversal Mountain",
      summary:
        "Journey through Lentimas Town, navigate Reversal Mountain with Bianca, and reach Undella Town.",
      locations: [
        {
          name: "Route 7 & Celestial Tower",
          description:
            "Route 7 heads north from Mistralton through tall grass. Celestial Tower is a memorial tower where trainers come to honor their departed Pokemon. Climb to the top and ring the bell. Litwick and Elgyem can be found inside the tower. Route 7 also has Zebstrika, Watchog, and Deerling.",
          encounters: [
            enc("Zebstrika", 523, ["B2", "W2"], "Grass", "30-33", "20%"),
            enc("Watchog", 505, ["B2", "W2"], "Grass", "30-33", "20%"),
            enc("Deerling", 585, ["B2", "W2"], "Grass", "30-33", "20%"),
            enc("Foongus", 590, ["B2", "W2"], "Grass", "30-33", "15%"),
            enc("Tranquill", 520, ["B2", "W2"], "Grass", "30-33", "15%"),
            enc("Cubchoo", 613, ["B2", "W2"], "Grass", "30-33", "10%"),
            enc("Litwick", 607, ["B2", "W2"], "Building", "26-29", "40%"),
            enc("Elgyem", 605, ["B2", "W2"], "Building", "26-29", "30%"),
            enc("Golbat", 42, ["B2", "W2"], "Building", "26-29", "30%"),
          ],
          items: [
            item("TM61 Will-O-Wisp", "Celestial Tower 3F"),
            item("Spell Tag", "Celestial Tower 4F"),
          ],
        },
        {
          name: "Lentimas Town",
          description:
            "Fly to Lentimas Town from Mistralton by plane. This small volcanic town sits near Reversal Mountain. A Move Tutor here can teach powerful moves for shards. Stock up on supplies before entering Reversal Mountain.",
          items: [
            item("Fire Stone", "From a woman in town"),
            item("TM57 Charge Beam", "From a person near the airport"),
          ],
        },
        {
          name: "Reversal Mountain",
          description:
            "A volcanic cave that differs between versions — in Black 2 the exterior is cooler and the interior is volcanic, while in White 2 it's reversed. Bianca joins you as a partner, healing your Pokemon after every battle. This makes it a great grinding spot. Skarmory, Spoink, Numel, and Skorupi can be found here. Heatran can be found deep inside after the main story.",
          encounters: [
            enc("Boldore", 525, ["B2", "W2"], "Cave", "33-36", "20%"),
            enc("Woobat", 527, ["B2", "W2"], "Cave", "33-36", "20%"),
            enc("Skorupi", 451, ["B2", "W2"], "Cave", "33-36", "20%"),
            enc("Numel", 322, ["B2", "W2"], "Cave", "33-36", "15%"),
            enc("Spoink", 325, ["B2", "W2"], "Cave", "33-36", "10%"),
            enc("Skarmory", 227, ["B2", "W2"], "Cave", "33-36", "10%"),
            enc("Drifblim", 426, ["B2", "W2"], "Cave", "33-36", "5%"),
          ],
          trainers: [
            trn(
              "Hiker",
              "Jared",
              [pk("Boldore", 34, 525), pk("Gurdurr", 34, 533)],
              "₽1,088"
            ),
            trn(
              "Backpacker",
              "Kumiko",
              [pk("Golbat", 35, 42), pk("Darmanitan", 35, 555)],
              "₽840"
            ),
          ],
          items: [
            item("TM54 False Swipe", "Interior, west side"),
            item("Hyper Potion", "Near the exit"),
            item("PP Up", "Hidden on a ledge"),
          ],
        },
        {
          name: "Undella Town",
          description:
            "Exit Reversal Mountain to reach Undella Town, a seaside resort. Cynthia, the Sinnoh Champion, has a villa here and can be challenged once per day in the post-game. The Abyssal Ruins are accessible by diving underwater. Surf and fish to find Water-type Pokemon. Continue north to Lacunosa Town.",
          encounters: [
            enc("Frillish", 592, ["B2", "W2"], "Surfing", "30-40", "60%"),
            enc("Remoraid", 223, ["B2", "W2"], "Surfing", "30-40", "30%"),
            enc("Mantyke", 458, ["B2", "W2"], "Surfing", "30-35", "10%"),
          ],
          items: [
            item("Prism Scale", "Near the beach (hidden)"),
            item("Heart Scale", "From a girl for showing her a specific Pokemon"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 8 — Lacunosa, Village Bridge, Opelucid
     * ═══════════════════════════════════════════════════════ */
    {
      part: 8,
      title: "Lacunosa Town, Village Bridge & Opelucid City",
      summary:
        "Travel north through Lacunosa Town and Village Bridge to earn the Legend Badge from Drayden.",
      locations: [
        {
          name: "Lacunosa Town",
          description:
            "A walled town with a legend about a monster that comes at night. The townspeople lock their doors after dark due to the legend of Kyurem. Zinzolin of Team Plasma is sighted here. Continue east on Route 12.",
          items: [
            item("Metronome", "From a man in the Pokemon Center"),
          ],
        },
        {
          name: "Route 12 & Route 13",
          description:
            "Route 12 heads south through grassy areas. Route 13 is a long coastal route with strong Pokemon, hidden items, and the Giant Chasm entrance (which you'll visit later). Absol, Tangela, and Drifblim appear here. Strong currents in the water limit surfing areas.",
          encounters: [
            enc("Roselia", 315, ["B2", "W2"], "Grass", "34-37", "20%"),
            enc("Combee", 415, ["B2", "W2"], "Grass", "34-37", "20%"),
            enc("Heracross", 214, ["B2", "W2"], "Grass", "34-37", "10%"),
            enc("Pinsir", 127, ["B2", "W2"], "Grass", "34-37", "10%"),
            enc("Absol", 359, ["B2", "W2"], "Grass", "36-39", "15%"),
            enc("Tangela", 114, ["B2", "W2"], "Grass", "36-39", "10%"),
            enc("Drifblim", 426, ["B2", "W2"], "Grass", "36-39", "5%"),
            enc("Lunatone", 337, ["B2", "W2"], "Grass", "36-39", "5%"),
            enc("Solrock", 338, ["B2", "W2"], "Grass", "36-39", "5%"),
          ],
          items: [
            item("TM29 Psychic", "Route 13, via Strength puzzle"),
            item("Star Piece", "Route 13, hidden in the sand"),
            item("Max Repel", "Route 12, near the north end"),
          ],
        },
        {
          name: "Village Bridge",
          description:
            "A charming bridge settlement with NPCs who play music you can interact with. Battle trainers along the bridge. Fish for Carvanha and Basculin. Continue north to Opelucid City.",
          encounters: [
            enc("Basculin", 550, ["B2", "W2"], "Surfing", "30-40", "60%"),
            enc("Lapras", 131, ["B2", "W2"], "Surfing", "35-40", "5%"),
            enc("Marill", 183, ["B2", "W2"], "Surfing", "30-40", "35%"),
          ],
          trainers: [
            trn(
              "Smasher",
              "Lizzy",
              [pk("Emolga", 39, 587), pk("Stoutland", 39, 508)],
              "₽1,560"
            ),
          ],
        },
        {
          name: "Opelucid City",
          description:
            "A city that looks futuristic in Black 2 and traditional in White 2. Drayden is the Gym Leader in both versions. The city has a tutor who teaches Draco Meteor to fully evolved Dragon-type Pokemon. Prepare for Drayden's powerful Dragon types.",
          items: [
            item("Float Stone", "From a person on the east side"),
            item("Ring Target", "From a person in a house"),
          ],
        },
        {
          name: "Opelucid Gym — Leader Drayden",
          description:
            "Drayden's gym features dragon statues you must navigate by stepping on switches that alter their positions. Drayden uses Dragon types. Ice moves are doubly effective against Flygon (Dragon/Ground) and very effective against the rest. Dragon and Fairy moves also work. His Haxorus hits incredibly hard with Dragon Dance boosted attacks. Bring a strong Ice-type move user like Lapras or Beartic. Level to 46-48.",
          trainers: [
            trn(
              "Veteran",
              "Hugo",
              [pk("Fraxure", 44, 611), pk("Druddigon", 44, 621)],
              "₽3,520"
            ),
            trn(
              "Veteran",
              "Rhona",
              [pk("Flygon", 44, 330), pk("Altaria", 44, 334)],
              "₽3,520"
            ),
            trn(
              "Gym Leader",
              "Drayden",
              [
                pk("Druddigon", 46, 621),
                pk("Flygon", 46, 330),
                pk("Haxorus", 48, 612),
              ],
              "₽5,760 + TM82 (Dragon Tail)"
            ),
          ],
          items: [
            item("Legend Badge", "Defeat Drayden"),
            item("TM82 Dragon Tail", "Defeat Drayden"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 9 — Team Plasma attacks, Humilau City
     * ═══════════════════════════════════════════════════════ */
    {
      part: 9,
      title: "Team Plasma Attacks Opelucid & Humilau City",
      summary:
        "Defend Opelucid City from Team Plasma's ice attack and earn the Wave Badge from Marlon.",
      locations: [
        {
          name: "Opelucid City — Team Plasma Attack",
          description:
            "After earning the Legend Badge, Team Plasma launches a devastating attack, using the Plasma Frigate to freeze Opelucid City with ice cannons. The DNA Splicers that Drayden was protecting are stolen. Chase Team Plasma through the frozen streets, battling grunts. Drayden asks you to pursue them and recover the splicers. This leads you toward Humilau City in the east.",
          trainers: [
            trn(
              "Team Plasma Grunt",
              "Grunt",
              [pk("Watchog", 39, 505), pk("Muk", 39, 89)],
              "₽1,560"
            ),
            trn(
              "Team Plasma Grunt",
              "Grunt",
              [pk("Golbat", 39, 42), pk("Garbodor", 39, 569)],
              "₽1,560"
            ),
            trn(
              "Team Plasma Grunt",
              "Grunt",
              [pk("Seviper", 40, 336), pk("Weezing", 40, 110)],
              "₽1,600"
            ),
          ],
        },
        {
          name: "Route 21 — Marine Tube",
          description:
            "Travel east from Opelucid through Route 21 to reach Humilau City. The Marine Tube is an underwater tunnel connecting the mainland to Humilau. Walk through and watch wild Mantine swim by. The views are spectacular.",
          encounters: [
            enc("Mantyke", 458, ["B2", "W2"], "Surfing", "35-45", "30%"),
            enc("Remoraid", 223, ["B2", "W2"], "Surfing", "35-40", "40%"),
            enc("Frillish", 592, ["B2", "W2"], "Surfing", "35-45", "30%"),
          ],
        },
        {
          name: "Humilau City",
          description:
            "A tropical city built on wooden platforms over the ocean. Marlon is the Gym Leader and a free-spirited swimmer. Explore the city, heal up, and prepare for the Water-type gym. Grass and Electric moves are your best bet here.",
          items: [
            item("Heart Scale", "From a girl in one of the huts"),
            item("Shell Bell", "From the Pokemon Center NPC"),
          ],
        },
        {
          name: "Humilau Gym — Leader Marlon",
          description:
            "Marlon's gym is a water lily pad puzzle where you ride lily pads across pools. The gym trainers use Water types. Marlon's team includes Carracosta (Water/Rock), Wailord (pure Water), and Jellicent (Water/Ghost). Grass moves are most universally effective. Electric works on everything except Carracosta's Ground-type resistance via Sturdy. Watch out for Jellicent's Cursed Body ability. Level to 49-51.",
          trainers: [
            trn(
              "Ace Trainer",
              "Doyle",
              [pk("Floatzel", 47, 419), pk("Mantine", 47, 226)],
              "₽2,820"
            ),
            trn(
              "Ace Trainer",
              "Sable",
              [pk("Walrein", 47, 365), pk("Alomomola", 47, 594)],
              "₽2,820"
            ),
            trn(
              "Gym Leader",
              "Marlon",
              [
                pk("Carracosta", 49, 565),
                pk("Wailord", 49, 321),
                pk("Jellicent", 51, 593),
              ],
              "₽6,120 + TM55 (Scald)"
            ),
          ],
          items: [
            item("Wave Badge", "Defeat Marlon"),
            item("TM55 Scald", "Defeat Marlon"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 10 — Plasma Frigate & Giant Chasm
     * ═══════════════════════════════════════════════════════ */
    {
      part: 10,
      title: "Team Plasma Frigate & Giant Chasm",
      summary:
        "Infiltrate the Plasma Frigate, confront Ghetsis and Colress, and stop Team Plasma at Giant Chasm.",
      locations: [
        {
          name: "Route 22 & Plasma Frigate (Dock)",
          description:
            "Head west from Humilau to Route 22 where you'll find the Plasma Frigate docked at Seaside Cave. Battle through Team Plasma grunts on the ship. Colress, the scientist who has been studying Pokemon potential, reveals himself as Team Plasma's new leader — or at least their scientific mind. He battles you with his Magneton and Magnezone.",
          trainers: [
            trn(
              "Team Plasma Grunt",
              "Grunt",
              [pk("Scrafty", 44, 560), pk("Golbat", 44, 42)],
              "₽1,760"
            ),
            trn(
              "Team Plasma Grunt",
              "Grunt",
              [pk("Weezing", 44, 110), pk("Krokorok", 44, 552)],
              "₽1,760"
            ),
            trn(
              "Team Plasma",
              "Colress",
              [
                pk("Magneton", 46, 82),
                pk("Metang", 46, 375),
                pk("Beheeyem", 46, 606),
                pk("Magnezone", 48, 462),
              ],
              "₽9,600"
            ),
          ],
        },
        {
          name: "Giant Chasm",
          description:
            "The Plasma Frigate has moved to Giant Chasm, a massive crater in northeastern Unova. Navigate through the forest and cave sections to reach the Frigate inside. The chasm has Piloswine, Sneasel, Clefairy, and Delibird. Inside the Frigate, battle the Shadow Triad and more grunts. At the deepest point, Ghetsis plans to use Kyurem and the DNA Splicers to fuse Kyurem with Reshiram (B2) or Zekrom (W2) to create Black Kyurem or White Kyurem.",
          encounters: [
            enc("Piloswine", 221, ["B2", "W2"], "Cave", "42-48", "20%"),
            enc("Sneasel", 215, ["B2", "W2"], "Cave", "42-48", "20%"),
            enc("Clefairy", 35, ["B2", "W2"], "Cave", "42-48", "15%"),
            enc("Delibird", 225, ["B2", "W2"], "Cave", "42-48", "15%"),
            enc("Vanillish", 583, ["B2", "W2"], "Cave", "42-48", "10%"),
            enc("Excadrill", 530, ["B2", "W2"], "Cave", "42-48", "5%"),
            enc("Metang", 375, ["B2", "W2"], "Cave", "42-48", "5%"),
            enc("Lunatone", 337, ["B2", "W2"], "Cave", "44-48", "5%"),
            enc("Solrock", 338, ["B2", "W2"], "Cave", "44-48", "5%"),
          ],
          trainers: [
            trn(
              "Shadow Triad",
              "Shadow",
              [pk("Pawniard", 46, 624), pk("Pawniard", 46, 624), pk("Absol", 48, 359)],
              "₽3,840"
            ),
          ],
          items: [
            item("TM13 Ice Beam", "Cave section"),
            item("Max Revive", "Forest section, hidden"),
            item("Star Piece", "Deep in the chasm"),
          ],
        },
        {
          name: "Giant Chasm — Kyurem Encounter",
          description:
            "At the heart of Giant Chasm, Ghetsis uses the DNA Splicers to fuse Kyurem with the legendary dragon. In Black 2, you face Black Kyurem (Kyurem fused with Zekrom). In White 2, you face White Kyurem (Kyurem fused with Reshiram). N arrives with his dragon, and the fusion is forced. You must battle the fused Kyurem — it cannot be caught yet. After the battle, the fusion separates and you face Ghetsis himself. Ghetsis uses a powerful team including Hydreigon with a Life Orb. Hugh and Cheren arrive to help clean up the remaining grunts.",
          trainers: [
            trn(
              "Team Plasma Boss",
              "Ghetsis",
              [
                pk("Cofagrigus", 50, 563),
                pk("Seismitoad", 50, 537),
                pk("Eelektross", 50, 604),
                pk("Drapion", 50, 452),
                pk("Toxicroak", 50, 454),
                pk("Hydreigon", 52, 635),
              ],
              "Boss battle"
            ),
          ],
          items: [
            item("DNA Splicers", "After defeating Ghetsis"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 11 — Victory Road & Pokemon League
     * ═══════════════════════════════════════════════════════ */
    {
      part: 11,
      title: "Victory Road & the Pokemon League",
      summary:
        "Conquer Victory Road and challenge the Elite Four and Champion Iris.",
      locations: [
        {
          name: "Route 23 & Victory Road",
          description:
            "Head west from Opelucid to Route 23, which leads to Victory Road. The route has strong trainers and encounters including Bouffalant, Sawk, and Throh. Victory Road itself is a multi-floor cave with Strength puzzles and slide puzzles. It's one of the longest dungeons in the game. Prepare well with items — Full Restores, Revives, and Max Potions. Recommended level: 55+.",
          encounters: [
            enc("Bouffalant", 626, ["B2", "W2"], "Grass", "47-50", "20%"),
            enc("Sawk", 539, ["B2"], "Grass", "47-50", "15%"),
            enc("Throh", 538, ["W2"], "Grass", "47-50", "15%"),
            enc("Mienfoo", 619, ["B2", "W2"], "Grass", "47-50", "20%"),
            enc("Onix", 95, ["B2", "W2"], "Cave", "47-50", "20%"),
            enc("Boldore", 525, ["B2", "W2"], "Cave", "47-50", "20%"),
            enc("Excadrill", 530, ["B2", "W2"], "Cave", "47-50", "10%"),
            enc("Durant", 632, ["B2", "W2"], "Cave", "47-50", "15%"),
            enc("Deino", 633, ["B2", "W2"], "Cave", "47-50", "5%"),
          ],
          trainers: [
            trn(
              "Ace Trainer",
              "Billy",
              [pk("Unfezant", 55, 521), pk("Excadrill", 55, 530)],
              "₽3,300"
            ),
            trn(
              "Veteran",
              "Claude",
              [
                pk("Braviary", 54, 628),
                pk("Carracosta", 54, 565),
                pk("Haxorus", 54, 612),
              ],
              "₽4,320"
            ),
            trn(
              "Ace Trainer",
              "Shelly",
              [pk("Eelektross", 55, 604), pk("Chandelure", 55, 609)],
              "₽3,300"
            ),
          ],
          items: [
            item("TM93 Wild Charge", "Victory Road, B1F"),
            item("Ultra Ball", "Victory Road, multiple"),
            item("Full Restore", "Victory Road, 2F"),
            item("Rare Candy", "Victory Road, hidden"),
          ],
        },
        {
          name: "Pokemon League",
          description:
            "The Elite Four can be challenged in any order. Buy plenty of Full Restores, Max Potions, and Revives. Stock up on ethers if possible. The Elite Four have been training for 2 years and are significantly stronger than in Black & White. After beating all four, proceed to the Champion's chamber.",
          trainers: [
            trn(
              "Elite Four",
              "Shauntal",
              [
                pk("Cofagrigus", 56, 563),
                pk("Golurk", 56, 623),
                pk("Chandelure", 58, 609),
                pk("Drifblim", 56, 426),
              ],
              "Ghost specialist — use Dark, Ghost"
            ),
            trn(
              "Elite Four",
              "Marshal",
              [
                pk("Throh", 56, 538),
                pk("Sawk", 56, 539),
                pk("Mienshao", 58, 620),
                pk("Conkeldurr", 56, 534),
              ],
              "Fighting specialist — use Psychic, Flying"
            ),
            trn(
              "Elite Four",
              "Grimsley",
              [
                pk("Liepard", 56, 510),
                pk("Scrafty", 56, 560),
                pk("Krookodile", 58, 553),
                pk("Bisharp", 56, 625),
              ],
              "Dark specialist — use Fighting, Bug, Fairy"
            ),
            trn(
              "Elite Four",
              "Caitlin",
              [
                pk("Musharna", 56, 518),
                pk("Reuniclus", 56, 579),
                pk("Sigilyph", 56, 561),
                pk("Gothitelle", 58, 576),
              ],
              "Psychic specialist — use Bug, Dark, Ghost"
            ),
            trn(
              "Champion",
              "Iris",
              [
                pk("Hydreigon", 57, 635),
                pk("Druddigon", 57, 621),
                pk("Haxorus", 59, 612),
                pk("Aggron", 57, 306),
                pk("Archeops", 57, 567),
                pk("Lapras", 57, 131),
              ],
              "Dragon specialist — use Ice, Dragon, Fighting"
            ),
          ],
          items: [
            item("Entry into the Hall of Fame", "Defeat Champion Iris"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 12 — Post-Game: Kyurem Fusion
     * ═══════════════════════════════════════════════════════ */
    {
      part: 12,
      title: "Post-Game — Kyurem & Legendary Dragons",
      summary:
        "Catch Kyurem at Giant Chasm and use the DNA Splicers to create Black Kyurem or White Kyurem.",
      isPostGame: true,
      locations: [
        {
          name: "Giant Chasm — Kyurem",
          description:
            "Return to Giant Chasm after becoming Champion. Navigate back to the deepest point where you battled Ghetsis. Kyurem waits at Level 70. Save before the encounter! Kyurem is Dragon/Ice type. Use Dusk Balls at night or Ultra Balls. Weaken it with False Swipe and inflict Sleep or Paralysis. Once caught, you can use the DNA Splicers to fuse Kyurem with Zekrom (Black 2) to create Black Kyurem, or with Reshiram (White 2) to create White Kyurem.",
          encounters: [
            enc("Kyurem", 646, ["B2", "W2"], "Gift", "70", "—"),
          ],
          items: [
            item("DNA Splicers", "Used to fuse/unfuse Kyurem"),
          ],
        },
        {
          name: "Dragonspiral Tower — Zekrom / Reshiram",
          description:
            "After completing the main story, N appears at his Castle ruins near Victory Road. Follow the story to reach Dragonspiral Tower, where N summons his legendary dragon. In Black 2, you can catch Zekrom (Dragon/Electric). In White 2, you can catch Reshiram (Dragon/Fire). Both appear at Level 70. These can be fused with Kyurem using the DNA Splicers to create the ultimate form.",
          encounters: [
            enc("Zekrom", 644, ["B2"], "Gift", "70", "—"),
            enc("Reshiram", 643, ["W2"], "Gift", "70", "—"),
          ],
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 13 — Post-Game: PWT, Black Tower/White Treehollow
     * ═══════════════════════════════════════════════════════ */
    {
      part: 13,
      title: "Post-Game — PWT & Battle Facilities",
      summary:
        "Challenge Gym Leaders from every region at the PWT and conquer the Black Tower or White Treehollow.",
      isPostGame: true,
      locations: [
        {
          name: "Pokemon World Tournament (Full)",
          description:
            "The PWT in Driftveil City is now fully unlocked. Battle Gym Leaders and Champions from every region in tournament brackets. Tournaments include the Unova Leaders Tournament, Kanto Leaders, Johto Leaders, Hoenn Leaders, Sinnoh Leaders, World Leaders (all regions mixed), and the Champions Tournament featuring Red, Blue, Lance, Steven, Cynthia, and Alder. Pokemon are auto-leveled to 50 in the PWT. This is one of the best post-game facilities in any Pokemon game. Winning tournaments earns you BP to spend on rare items and TMs.",
          items: [
            item("BP Prizes", "Exchange BP for TMs, Power items, etc."),
          ],
        },
        {
          name: "Black Tower / White Treehollow",
          description:
            "In Black 2, the Black Tower in Black City is a 10-area dungeon with increasingly difficult trainers. In White 2, the White Treehollow in White Forest serves the same purpose. Clear each area by finding the Gate Trainer and defeating the boss trainer. Completing Area 10 earns you a Shiny Gible (Black 2) or Shiny Dratini (White 2) as a reward! Trainers use Pokemon up to Level 80. This is the ultimate challenge facility.",
          items: [
            item("Shiny Gible", "Reward for clearing Black Tower Area 10 (B2)"),
            item(
              "Shiny Dratini",
              "Reward for clearing White Treehollow Area 10 (W2)"
            ),
          ],
        },
        {
          name: "Battle Subway",
          description:
            "The Battle Subway in Nimbasa City returns from Black & White. Battle 7 trainers in a row on various lines (Single, Double, Multi, Super lines). Win 21 battles in a row on Super lines to face the Subway Bosses Emmet and Ingo. Earn BP for prizes.",
        },
      ],
    },

    /* ═══════════════════════════════════════════════════════
     *  PART 14 — Post-Game: Legendaries & Nature Preserve
     * ═══════════════════════════════════════════════════════ */
    {
      part: 14,
      title: "Post-Game — Legendary Hunt & Nature Preserve",
      summary:
        "Track down legendary Pokemon across Unova and visit the Nature Preserve for a Shiny Haxorus.",
      isPostGame: true,
      locations: [
        {
          name: "Legendary Pokemon Locations",
          description:
            "Unova holds many legendary Pokemon in the post-game. Heatran is in the deepest part of Reversal Mountain at Level 68. The Swords of Justice — Cobalion (Route 13, Lv 45), Terrakion (Route 22, Lv 45), and Virizion (Route 11, Lv 45) — roam the routes. Keldeo can be obtained via event. The Regi trio (Regirock, Regice, Registeel) are found in hidden chambers accessed via keys. Latias (B2) and Latios (W2) appear at the Dreamyard at Level 68. Uxie, Mesprit, and Azelf appear at their respective caves after certain conditions are met. Cresselia appears on Marvelous Bridge at Level 68.",
          encounters: [
            enc("Heatran", 485, ["B2", "W2"], "Cave", "68", "—"),
            enc("Cobalion", 638, ["B2", "W2"], "Cave", "45", "—"),
            enc("Terrakion", 639, ["B2", "W2"], "Cave", "45", "—"),
            enc("Virizion", 640, ["B2", "W2"], "Grass", "45", "—"),
            enc("Latias", 380, ["B2"], "Gift", "68", "—"),
            enc("Latios", 381, ["W2"], "Gift", "68", "—"),
            enc("Cresselia", 488, ["B2", "W2"], "Gift", "68", "—"),
            enc("Regirock", 377, ["B2", "W2"], "Cave", "65", "—"),
            enc("Regice", 378, ["B2", "W2"], "Cave", "65", "—"),
            enc("Registeel", 379, ["B2", "W2"], "Cave", "65", "—"),
          ],
        },
        {
          name: "Nature Preserve — Shiny Haxorus",
          description:
            "The Nature Preserve is a special area accessible only by plane after completing the Unova Pokedex (seeing all Pokemon in the regional dex). Speak to Professor Juniper to receive the permit. A guaranteed Shiny Haxorus at Level 60 waits here! This is one of the only guaranteed shiny Pokemon in any main series game. The preserve also has rare wild Pokemon at high levels.",
          encounters: [
            enc("Haxorus (Shiny)", 612, ["B2", "W2"], "Gift", "60", "—"),
            enc("Altaria", 334, ["B2", "W2"], "Grass", "47-50", "20%"),
            enc("Golduck", 55, ["B2", "W2"], "Grass", "47-50", "20%"),
            enc("Nuzleaf", 274, ["B2", "W2"], "Grass", "47-50", "20%"),
            enc("Fraxure", 611, ["B2", "W2"], "Grass", "47-50", "10%"),
            enc("Braviary", 628, ["B2"], "Grass", "47-50", "10%"),
            enc("Mandibuzz", 630, ["W2"], "Grass", "47-50", "10%"),
          ],
          items: [
            item("Shiny Haxorus", "Guaranteed encounter in the Nature Preserve"),
          ],
        },
      ],
    },
  ],
};
