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

export const BLACK_WHITE_WALKTHROUGH: GameWalkthrough = {
  slug: "black-white",
  gameLabel: "Black & White",
  versionTags: ["B", "W"],
  parts: [
    /* ===============================================================
     *  PART 1 — Nuvema Town: Choose Your Starter
     * =============================================================== */
    {
      part: 1,
      title: "Nuvema Town — A New Beginning",
      summary:
        "Choose your starter Pokemon and battle your rivals Bianca and Cheren.",
      locations: [
        {
          name: "Nuvema Town",
          description:
            "Your adventure in the Unova region begins! Professor Juniper has left a gift box in your room containing three starter Pokemon. Choose Snivy (Grass), Tepig (Fire), or Oshawott (Water). After choosing, Bianca will challenge you right in your bedroom — the room gets trashed! Then Cheren battles you downstairs. Visit Professor Juniper's lab to receive your Pokedex, and say goodbye to your Mom before heading out to Route 1. Juniper will demonstrate how to catch Pokemon on Route 1.",
          items: [
            item("Starter Pokemon", "Gift box in your room — choose Snivy, Tepig, or Oshawott"),
            item("Pokedex", "From Professor Juniper at her lab"),
            item("Town Map", "From your Mom outside the lab"),
            item("Xtransceiver", "From your Mom"),
          ],
          trainers: [
            trn("Rival", "Bianca", [pk("Oshawott", 5, 501)], "Starter varies — she picks the one weak to yours"),
            trn("Rival", "Cheren", [pk("Snivy", 5, 495)], "Starter varies — he picks the one strong against yours"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 2 — Routes 1-3, Accumula Town, Striaton City & Gym
     * =============================================================== */
    {
      part: 2,
      title: "Route 1 to Striaton City & Striaton Gym",
      summary:
        "Travel through early routes, witness Team Plasma's speech in Accumula Town, meet N, and earn your first badge at the Striaton Gym.",
      locations: [
        {
          name: "Route 1",
          description:
            "Professor Juniper walks you through catching your first Pokemon here. The wild Pokemon are low level — perfect for building your team. Both Patrat and Lillipup are solid early catches. Lillipup in particular evolves into the useful Herdier.",
          encounters: [
            enc("Patrat", 504, ["B", "W"], "Grass", "2-4", "50%"),
            enc("Lillipup", 506, ["B", "W"], "Grass", "2-4", "50%"),
          ],
        },
        {
          name: "Accumula Town",
          description:
            "Heal up at the Pokemon Center. Outside, you'll witness Team Plasma's Ghetsis giving a public speech about Pokemon liberation — urging trainers to release their Pokemon. After the crowd disperses, a mysterious green-haired young man named N approaches you. He claims he can hear the voices of Pokemon and challenges you to a battle. This is your first encounter with the central storyline of Black & White.",
          trainers: [
            trn("Trainer", "N", [pk("Purrloin", 7, 509)], "N claims to hear Pokemon voices"),
          ],
        },
        {
          name: "Route 2",
          description:
            "Head north from Accumula Town. Your Mom will catch up and give you Running Shoes. Bianca challenges you again here. Trainers line the route, so make sure you're healed up. Continue north to Striaton City.",
          encounters: [
            enc("Patrat", 504, ["B", "W"], "Grass", "4-7", "50%"),
            enc("Lillipup", 506, ["B", "W"], "Grass", "4-7", "40%"),
            enc("Purrloin", 509, ["B", "W"], "Grass", "4-7", "10%"),
          ],
          trainers: [
            trn("Rival", "Bianca", [pk("Lillipup", 7, 506), pk("Oshawott", 7, 501)], "Starter varies"),
          ],
          items: [
            item("Running Shoes", "From your Mom"),
            item("Potion", "Near the grass"),
          ],
        },
        {
          name: "Route 3 & Dreamyard",
          description:
            "Route 3 is east of Striaton City but visit the Dreamyard first. Before the gym, head east to the Dreamyard where a girl will give you one of the elemental monkeys based on your starter: Pansage if you chose Tepig, Pansear if you chose Oshawott, or Panpour if you chose Snivy. This gift Pokemon has a type advantage against the Gym Leader's strongest Pokemon, so use it wisely! Cheren battles you on Route 3. Team Plasma grunts also appear — Bianca's Pokemon gets stolen and you must help recover it.",
          encounters: [
            enc("Pidove", 519, ["B", "W"], "Grass", "8-11", "30%"),
            enc("Blitzle", 522, ["B", "W"], "Grass", "8-11", "20%"),
            enc("Patrat", 504, ["B", "W"], "Grass", "8-11", "20%"),
            enc("Lillipup", 506, ["B", "W"], "Grass", "8-11", "20%"),
            enc("Purrloin", 509, ["B", "W"], "Grass", "8-11", "10%"),
          ],
          trainers: [
            trn("Rival", "Cheren", [pk("Snivy", 8, 495), pk("Purrloin", 8, 509)], "Starter varies"),
          ],
          items: [
            item("Pansage", "Gift in Dreamyard (if you chose Tepig)"),
            item("Pansear", "Gift in Dreamyard (if you chose Oshawott)"),
            item("Panpour", "Gift in Dreamyard (if you chose Snivy)"),
          ],
        },
        {
          name: "Striaton Gym — Leaders Cilan, Chili & Cress",
          description:
            "The Striaton Gym is a restaurant-themed gym with a type advantage puzzle. The leader you face depends on your starter choice: Cilan (Grass) if you chose Oshawott, Chili (Fire) if you chose Snivy, or Cress (Water) if you chose Tepig. Each leader uses a Lillipup plus their signature elemental monkey. Use the gift monkey from the Dreamyard to counter the leader's ace. This triple-leader concept is unique to Black & White! Winning earns you the Trio Badge.",
          trainers: [
            trn("Gym Leader", "Cilan (Grass)", [pk("Lillipup", 12, 506), pk("Pansage", 14, 511)], "₽1,680 + TM83 (Work Up) — if you chose Oshawott"),
            trn("Gym Leader", "Chili (Fire)", [pk("Lillipup", 12, 506), pk("Pansear", 14, 513)], "₽1,680 + TM83 (Work Up) — if you chose Snivy"),
            trn("Gym Leader", "Cress (Water)", [pk("Lillipup", 12, 506), pk("Panpour", 14, 515)], "₽1,680 + TM83 (Work Up) — if you chose Tepig"),
          ],
          items: [
            item("Trio Badge", "Defeat your corresponding Gym Leader"),
            item("TM83 Work Up", "Defeat Gym Leader"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 3 — Nacrene City, Nacrene Gym, Pinwheel Forest
     * =============================================================== */
    {
      part: 3,
      title: "Nacrene City, Nacrene Gym & Pinwheel Forest",
      summary:
        "Explore the artistic Nacrene City, earn the Basic Badge from Lenora, and chase Team Plasma through Pinwheel Forest.",
      locations: [
        {
          name: "Nacrene City",
          description:
            "A city built from converted warehouses, known for its art scene. The Nacrene Museum doubles as the Pokemon Gym. Before challenging Lenora, make sure you have Fighting-type moves — Timburr from the nearby area is excellent here. Cheren battles you outside the gym. N also appears, philosophizing about the relationship between trainers and Pokemon.",
          trainers: [
            trn("Rival", "Cheren", [pk("Snivy", 14, 495), pk("Purrloin", 14, 509)], "Starter varies"),
            trn("Trainer", "N", [pk("Pidove", 13, 519), pk("Tympole", 13, 535), pk("Timburr", 13, 532)], "N uses Pokemon found nearby"),
          ],
        },
        {
          name: "Nacrene Gym — Leader Lenora",
          description:
            "The gym is inside the Nacrene Museum library. Solve the book puzzle by reading clues to find the right books and reveal the hidden staircase to Lenora. She specializes in Normal types. Her Herdier uses Take Down and Intimidate to lower your Attack, while Watchog has Retaliate — which does double damage if Herdier fainted the previous turn. Fighting-type moves are your best bet. Timburr, Throh, or Sawk from Route 4 or the outskirts are excellent choices.",
          trainers: [
            trn("Gym Leader", "Lenora", [pk("Herdier", 18, 507), pk("Watchog", 20, 505)], "₽2,400 + TM67 (Retaliate)"),
          ],
          items: [
            item("Basic Badge", "Defeat Lenora"),
            item("TM67 Retaliate", "Defeat Lenora"),
          ],
        },
        {
          name: "Pinwheel Forest",
          description:
            "After beating Lenora, Team Plasma steals a Dragon Skull from the museum! Chase them through Pinwheel Forest. The forest has two paths — the main road and the interior forest. Team Plasma grunts are scattered through the inner forest. Burgh, the Castelia City Gym Leader, helps you track them down. This area is great for catching Bug and Grass types. Sewaddle and Venipede are strong choices for your team. After recovering the skull, continue south toward Castelia City via Skyarrow Bridge — the first truly dramatic bridge in Pokemon games.",
          encounters: [
            enc("Sewaddle", 540, ["B", "W"], "Grass", "12-15", "30%"),
            enc("Venipede", 543, ["B", "W"], "Grass", "12-15", "20%"),
            enc("Pidove", 519, ["B", "W"], "Grass", "12-15", "15%"),
            enc("Timburr", 532, ["B", "W"], "Grass", "12-15", "15%"),
            enc("Tympole", 535, ["B", "W"], "Grass", "12-15", "10%"),
            enc("Cottonee", 546, ["B"], "Grass", "12-15", "10%"),
            enc("Petilil", 548, ["W"], "Grass", "12-15", "10%"),
          ],
          items: [
            item("Dragon Skull", "Recovered from Team Plasma"),
            item("TM94 Rock Smash", "Found in the inner forest"),
            item("Miracle Seed", "Inner forest path"),
            item("Net Ball", "Main road area"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 4 — Castelia City & Castelia Gym
     * =============================================================== */
    {
      part: 4,
      title: "Castelia City & Castelia Gym",
      summary:
        "Explore the massive Castelia City, deal with Team Plasma, and earn the Insect Badge from Burgh.",
      locations: [
        {
          name: "Skyarrow Bridge",
          description:
            "Cross the grand Skyarrow Bridge from Pinwheel Forest to Castelia City. This is the most cinematic bridge in the game — the camera pans dramatically as you walk across. No wild encounters or trainers here, just enjoy the view of the Unova skyline.",
        },
        {
          name: "Castelia City",
          description:
            "The largest city in Unova — a bustling metropolis with numerous buildings to explore. Visit the docks, the art gallery, and many side streets. Get a free Bicycle from the Cycle Shop on the central street. You can receive a gift Zorua from a man in a building on a side street (requires an event Celebi in the original games). Team Plasma is active here — Burgh helps you chase them through the sewers. Find the Name Rater, Medal Office, and many other facilities. Bianca has her Pokemon stolen by Team Plasma and you help retrieve it. After dealing with Plasma, head to Burgh's gym.",
          items: [
            item("Bicycle", "Cycle Shop on the main street"),
            item("Amulet Coin", "Building on the north boulevard"),
            item("Exp. Share", "Building near the docks (from a researcher)"),
          ],
        },
        {
          name: "Castelia Gym — Leader Burgh",
          description:
            "Burgh's gym is an artistic hive made of honey walls. Navigate through the sticky honey barriers to reach him. He specializes in Bug types. Fire, Flying, and Rock moves are super effective. His Leavanny is the ace — it's Bug/Grass, giving it a 4x weakness to Fire and Flying. Pansear, Pidove's evolution Tranquill, or any Fire move will sweep. Darumaka from the Desert Resort (if you've visited) is excellent here too.",
          trainers: [
            trn("Gym Leader", "Burgh", [
              pk("Whirlipede", 21, 544),
              pk("Dwebble", 21, 557),
              pk("Leavanny", 23, 542),
            ], "₽2,760 + TM76 (Struggle Bug)"),
          ],
          items: [
            item("Insect Badge", "Defeat Burgh"),
            item("TM76 Struggle Bug", "Defeat Burgh"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 5 — Route 4, Desert Resort, Nimbasa City & Gym
     * =============================================================== */
    {
      part: 5,
      title: "Route 4, Desert Resort & Nimbasa City Gym",
      summary:
        "Cross the sandy Route 4, explore the Desert Resort for fossils, and earn the Bolt Badge from Elesa.",
      locations: [
        {
          name: "Route 4 & Desert Resort",
          description:
            "Route 4 is a sandy construction zone that differs between versions — Black shows a bustling construction area while White shows a more complete cityscape. The Desert Resort is accessed from Route 4 and features a sandstorm. Here you can find the Relic Castle ruins, home to ancient Pokemon like Yamask and Sigilyph. A backpacker gives you a Cover Fossil (Tirtouga) or Plume Fossil (Archen) — choose one! Darumaka is an excellent Fire-type catch here. Sandile evolves into the powerful Krokorok and eventually Krookodile. Catch a Scraggy in the desert for a great Dark/Fighting type.",
          encounters: [
            enc("Sandile", 551, ["B", "W"], "Grass", "15-18", "30%"),
            enc("Darumaka", 554, ["B", "W"], "Grass", "15-18", "20%"),
            enc("Scraggy", 559, ["B", "W"], "Grass", "15-18", "20%"),
            enc("Maractus", 556, ["B", "W"], "Grass", "15-18", "10%"),
            enc("Sigilyph", 561, ["B", "W"], "Grass", "15-18", "10%"),
            enc("Yamask", 562, ["B", "W"], "Cave", "15-18", "30%"),
          ],
          items: [
            item("Cover Fossil", "From backpacker in Relic Castle (Tirtouga)"),
            item("Plume Fossil", "From backpacker in Relic Castle (Archen)"),
            item("Fire Stone", "Desert Resort"),
          ],
        },
        {
          name: "Nimbasa City",
          description:
            "An entertainment capital with the Big Stadium, Small Court, Musical Theater, and Battle Subway. Before the gym, N invites you to ride the Ferris wheel together where he reveals he is the king of Team Plasma! Then he battles you. Bianca's father arrives to take her home, but Elesa convinces him to let Bianca continue her journey. Visit the stadiums daily for trainer battles. The Gym is in the amusement park area.",
          trainers: [
            trn("Trainer", "N", [
              pk("Sandile", 22, 551),
              pk("Darumaka", 22, 554),
              pk("Scraggy", 22, 559),
              pk("Sigilyph", 22, 561),
            ], "N uses Pokemon from the desert"),
          ],
          items: [
            item("Vs. Recorder", "From a man near the stadiums"),
            item("Sun Stone", "Received from a person in the city"),
          ],
        },
        {
          name: "Nimbasa Gym — Leader Elesa",
          description:
            "Elesa's gym is a roller coaster ride! Ride the coasters to reach different platforms and battle trainers along the way. She specializes in Electric types. Ground-type moves are essential — Sandile or Drilbur are perfect. Her two Emolga are tricky because they're Electric/Flying, making them immune to Ground moves. Use Rock or Ice moves for the Emolga. Her ace Zebstrika is fast and powerful but falls quickly to Ground attacks. Bring a Ground type and a Rock type and you'll be fine.",
          trainers: [
            trn("Gym Leader", "Elesa", [
              pk("Emolga", 25, 587),
              pk("Emolga", 25, 587),
              pk("Zebstrika", 27, 523),
            ], "₽3,240 + TM72 (Volt Switch)"),
          ],
          items: [
            item("Bolt Badge", "Defeat Elesa"),
            item("TM72 Volt Switch", "Defeat Elesa"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 6 — Route 5, Driftveil Drawbridge, Driftveil City & Gym
     * =============================================================== */
    {
      part: 6,
      title: "Route 5, Driftveil City & Driftveil Gym",
      summary:
        "Cross the Driftveil Drawbridge, explore the industrial Driftveil City, and earn the Quake Badge from Clay.",
      locations: [
        {
          name: "Route 5 & Driftveil Drawbridge",
          description:
            "Route 5 has Cheren waiting to battle you. There are also performers and musicians on this route. Cross the Driftveil Drawbridge — keep an eye out for feather shadows on the bridge that give you stat-boosting wing items when stepped on. Minccino and Liepard can be found on Route 5. The bridge is iconic — long and grand with Ducklett flying underneath.",
          encounters: [
            enc("Minccino", 572, ["B", "W"], "Grass", "19-22", "20%"),
            enc("Gothita", 574, ["B"], "Grass", "19-22", "20%"),
            enc("Solosis", 577, ["W"], "Grass", "19-22", "20%"),
            enc("Trubbish", 568, ["B", "W"], "Grass", "19-22", "20%"),
            enc("Liepard", 510, ["B", "W"], "Grass", "19-22", "10%"),
          ],
          trainers: [
            trn("Rival", "Cheren", [
              pk("Liepard", 24, 510),
              pk("Tranquill", 24, 520),
              pk("Servine", 26, 496),
            ], "Starter varies"),
          ],
          items: [
            item("HM02 Fly", "From Bianca after Route 5"),
          ],
        },
        {
          name: "Driftveil City & Cold Storage",
          description:
            "An industrial port city run by Gym Leader Clay, a wealthy mine owner. Visit the Driftveil Market for rare items. Team Plasma grunts are hiding in the Cold Storage warehouse south of the city. Help Clay flush them out by navigating the sliding ice puzzle in the freezer containers. After clearing Team Plasma, Clay will accept your gym challenge.",
          encounters: [
            enc("Vanillite", 582, ["B", "W"], "Cave", "20-23", "30%"),
          ],
          items: [
            item("Heart Scale", "Driftveil Market (daily)"),
            item("Shell Bell", "From a man in Driftveil City"),
          ],
        },
        {
          name: "Driftveil Gym — Leader Clay",
          description:
            "Clay's gym is a mine shaft with elevators and conveyor belts. Ride the lifts down through layers of the mine to reach Clay at the bottom. He specializes in Ground types. Water and Grass moves are essential. His Excadrill is the star — Ground/Steel with high Attack. A strong Water or Fighting move will take it down. Tympole's evolution Palpitoad (Water/Ground) is tricky since it resists Electric but is weak to Grass. Clay's whole team falls apart against any good Grass type like Leavanny or Whimsicott.",
          trainers: [
            trn("Gym Leader", "Clay", [
              pk("Krokorok", 29, 552),
              pk("Palpitoad", 29, 536),
              pk("Excadrill", 31, 530),
            ], "₽3,720 + TM78 (Bulldoze)"),
          ],
          items: [
            item("Quake Badge", "Defeat Clay"),
            item("TM78 Bulldoze", "Defeat Clay"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 7 — Route 6, Chargestone Cave, Mistralton City & Gym
     * =============================================================== */
    {
      part: 7,
      title: "Route 6, Chargestone Cave & Mistralton Gym",
      summary:
        "Navigate the magnetically charged Chargestone Cave and earn the Jet Badge from Skyla.",
      locations: [
        {
          name: "Route 6 & Chargestone Cave",
          description:
            "Route 6 has tall grass and a Season Research Lab. The cave entrance is blocked until Clay meets you there and clears the web. Chargestone Cave is filled with electrically charged crystals that you push to create paths. N appears multiple times here with his Team Plasma allies, the Shadow Triad. Bianca and Professor Juniper are also exploring. Joltik and Ferroseed are great catches here — Ferroseed evolves into the incredibly bulky Ferrothorn. Klink and Tynamo are unique Electric types found here. N battles you near the exit with Pokemon caught in the cave.",
          encounters: [
            enc("Joltik", 595, ["B", "W"], "Cave", "24-28", "25%"),
            enc("Ferroseed", 597, ["B", "W"], "Cave", "24-28", "20%"),
            enc("Klink", 599, ["B", "W"], "Cave", "24-28", "20%"),
            enc("Tynamo", 602, ["B", "W"], "Cave", "24-28", "10%"),
            enc("Boldore", 525, ["B", "W"], "Cave", "24-28", "15%"),
            enc("Drilbur", 529, ["B", "W"], "Cave", "24-28", "10%"),
          ],
          trainers: [
            trn("Trainer", "N", [
              pk("Boldore", 28, 525),
              pk("Joltik", 28, 595),
              pk("Ferroseed", 28, 597),
              pk("Klink", 28, 599),
            ], "N uses Pokemon from the cave"),
          ],
          items: [
            item("Lucky Egg", "From Professor Juniper inside the cave"),
            item("Thunderstone", "Hidden in the cave"),
            item("Revive", "Near the cave entrance"),
          ],
        },
        {
          name: "Mistralton City",
          description:
            "A city built around a cargo airport. Skyla is the pilot and Gym Leader. Before challenging her, you need to help Professor Juniper's father, Cedric Juniper, at the Celestial Tower on Route 7 to ring the bell for departed Pokemon. The tower is also where you can catch Litwick — the Ghost/Fire candle Pokemon that evolves into the powerful Chandelure.",
          items: [
            item("TM40 Aerial Ace", "From a person near the runway"),
          ],
        },
        {
          name: "Mistralton Gym — Leader Skyla",
          description:
            "Skyla's gym features cannons that shoot you between platforms. Aim the cannons correctly to navigate to Skyla. She specializes in Flying types. Electric, Rock, and Ice moves are super effective. Her Swoobat is Psychic/Flying so Dark moves also work. Unfezant has good Attack but is pure Normal/Flying. Swanna is Water/Flying — Electric moves deal 4x damage! A single Electric type like Zebstrika or Galvantula can sweep her entire team.",
          trainers: [
            trn("Gym Leader", "Skyla", [
              pk("Swoobat", 33, 528),
              pk("Unfezant", 33, 521),
              pk("Swanna", 35, 581),
            ], "₽4,200 + TM62 (Acrobatics)"),
          ],
          items: [
            item("Jet Badge", "Defeat Skyla"),
            item("TM62 Acrobatics", "Defeat Skyla"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 8 — Route 7, Celestial Tower, Twist Mountain, Icirrus City & Gym
     * =============================================================== */
    {
      part: 8,
      title: "Celestial Tower, Twist Mountain & Icirrus Gym",
      summary:
        "Explore the haunted Celestial Tower, traverse Twist Mountain, and earn the Freeze Badge from Brycen.",
      locations: [
        {
          name: "Route 7 & Celestial Tower",
          description:
            "Route 7 features season-dependent terrain. In autumn, the leaves are spectacular. The Celestial Tower is a memorial tower for deceased Pokemon with wild Litwick and Elgyem. Ring the bell at the top after battling through trainers. Litwick is an excellent catch — its final evolution Chandelure has one of the highest Special Attack stats in the game. Deerling on Route 7 changes form based on the in-game season — a unique Black & White mechanic.",
          encounters: [
            enc("Deerling", 585, ["B", "W"], "Grass", "26-29", "30%"),
            enc("Foongus", 590, ["B", "W"], "Grass", "26-29", "20%"),
            enc("Tranquill", 520, ["B", "W"], "Grass", "26-29", "20%"),
            enc("Watchog", 505, ["B", "W"], "Grass", "26-29", "15%"),
            enc("Zebstrika", 523, ["B", "W"], "Grass", "26-29", "15%"),
            enc("Litwick", 607, ["B", "W"], "Building", "26-29", "50%"),
            enc("Elgyem", 605, ["B", "W"], "Building", "26-29", "50%"),
          ],
          items: [
            item("TM61 Will-O-Wisp", "Celestial Tower 3F"),
            item("Spell Tag", "Celestial Tower"),
          ],
        },
        {
          name: "Twist Mountain",
          description:
            "A winding mountain cave that changes layout depending on the season. In winter, ice covers certain paths creating new routes. Wild Cubchoo and Boldore roam the cave. Cheren battles you at the entrance. This cave connects Route 7 to Icirrus City. A worker inside gives you a fossil daily (post-game). Bring repels if Woobat encounters get tiring.",
          encounters: [
            enc("Cubchoo", 613, ["B", "W"], "Cave", "28-31", "20%"),
            enc("Boldore", 525, ["B", "W"], "Cave", "28-31", "30%"),
            enc("Woobat", 527, ["B", "W"], "Cave", "28-31", "20%"),
            enc("Gurdurr", 533, ["B", "W"], "Cave", "28-31", "15%"),
            enc("Heatmor", 631, ["B", "W"], "Cave", "28-31", "5%"),
            enc("Durant", 632, ["B", "W"], "Cave", "28-31", "10%"),
          ],
          trainers: [
            trn("Rival", "Cheren", [
              pk("Unfezant", 33, 521),
              pk("Liepard", 33, 510),
              pk("Simisage", 33, 512),
              pk("Serperior", 35, 497),
            ], "Starter varies"),
          ],
          items: [
            item("Old Gateau", "From an old man in the cave"),
          ],
        },
        {
          name: "Icirrus City",
          description:
            "A rustic city with marshlands and the Dragonspiral Tower nearby. The city has seasonal puddles — in winter, they freeze over. Brycen lives here and trains at the gym. Visit the Fan Club and talk to NPCs for items. The Moor of Icirrus south of town has wild Stunfisk and other marsh Pokemon. Prepare Ice and Rock counters for the gym — Fire, Fighting, and Steel moves are all effective against Ice types.",
          encounters: [
            enc("Stunfisk", 618, ["B", "W"], "Grass", "29-32", "25%"),
            enc("Palpitoad", 536, ["B", "W"], "Grass", "29-32", "25%"),
            enc("Shelmet", 616, ["B", "W"], "Grass", "29-32", "25%"),
            enc("Karrablast", 588, ["B", "W"], "Grass", "29-32", "25%"),
          ],
        },
        {
          name: "Icirrus Gym — Leader Brycen",
          description:
            "Brycen's gym is an ice rink puzzle. Slide across the ice and jump off ramps to reach him. The ice floor sends you sliding until you hit a wall or obstacle. He specializes in Ice types. Fire, Fighting, Rock, and Steel moves are all super effective. His Vanillish is straightforward. Cryogonal is unusual — pure Ice with high Special Defense but low physical Defense, so physical attacks work better. Beartic is the ace — a powerful physical attacker. Any strong Fighting type like Scraggy's evolution Scrafty will tear through this gym.",
          trainers: [
            trn("Gym Leader", "Brycen", [
              pk("Vanillish", 37, 583),
              pk("Cryogonal", 37, 615),
              pk("Beartic", 39, 614),
            ], "₽4,680 + TM79 (Frost Breath)"),
          ],
          items: [
            item("Freeze Badge", "Defeat Brycen"),
            item("TM79 Frost Breath", "Defeat Brycen"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 9 — Dragonspiral Tower, Route 8, Opelucid City & Gym
     * =============================================================== */
    {
      part: 9,
      title: "Dragonspiral Tower, Route 8-9 & Opelucid Gym",
      summary:
        "Pursue N to Dragonspiral Tower, travel through Routes 8 and 9, and earn the Legend Badge from Drayden or Iris.",
      locations: [
        {
          name: "Dragonspiral Tower",
          description:
            "After beating Brycen, Team Plasma attacks and N heads to Dragonspiral Tower to awaken the legendary dragon. Cheren and Bianca meet you here. Fight through Team Plasma grunts as you climb the crumbling tower. At the top, N has already awakened Zekrom (Black) or Reshiram (White). He flies away on the legendary Pokemon. This is a pivotal story moment — the stakes are now clear. Alder, the Champion, arrives and explains that to stop N, you need the other legendary dragon.",
          trainers: [
            trn("Team Plasma Grunt", "Grunt", [pk("Watchog", 32, 505), pk("Krokorok", 32, 552)], "₽1,280"),
            trn("Team Plasma Grunt", "Grunt", [pk("Liepard", 32, 510), pk("Scraggy", 32, 559)], "₽1,280"),
          ],
          items: [
            item("Shiny Stone", "Dragonspiral Tower floor"),
            item("Dragon Fang", "Upper floors"),
          ],
        },
        {
          name: "Route 8, Tubeline Bridge & Route 9",
          description:
            "Route 8 is a marshy area with seasonal changes. Cross the Tubeline Bridge — the Shadow Triad appears and gives you the Dark Stone (Black) or Light Stone (White), which contains the dormant legendary dragon. Route 9 is a shopping street with rough trainers. Pawniard is a great catch on Route 9 — its evolution Bisharp is one of the best Gen 5 Pokemon.",
          encounters: [
            enc("Palpitoad", 536, ["B", "W"], "Grass", "31-34", "20%"),
            enc("Stunfisk", 618, ["B", "W"], "Grass", "31-34", "20%"),
            enc("Shelmet", 616, ["B", "W"], "Grass", "31-34", "15%"),
            enc("Pawniard", 624, ["B", "W"], "Grass", "31-34", "25%"),
            enc("Garbodor", 569, ["B", "W"], "Grass", "31-34", "10%"),
            enc("Golett", 622, ["B", "W"], "Grass", "31-34", "10%"),
          ],
          items: [
            item("Dark Stone", "From Shadow Triad on Tubeline Bridge (Black)"),
            item("Light Stone", "From Shadow Triad on Tubeline Bridge (White)"),
            item("TM56 Fling", "Route 9"),
          ],
        },
        {
          name: "Opelucid City",
          description:
            "The city looks completely different between versions — futuristic in Black, traditional in White. The Gym Leader is Drayden in Black and Iris in White, but they use the same team. Alder briefs you on the legend of the twin heroes and the two dragons. Visit Drayden/Iris's house to learn more lore. The gym challenge awaits.",
        },
        {
          name: "Opelucid Gym — Leader Drayden / Iris",
          description:
            "This Dragon-type gym features mechanical dragon statues you ride through the gym. Jump between dragon heads to navigate. Drayden (Black) or Iris (White) specializes in Dragon types. Ice moves deal 4x damage to Fraxure and Haxorus. Dragon moves also work but remember they'll hit you back hard too. Haxorus is the ace at Level 43 — incredibly high Attack. A strong Ice move will one-shot it. Vanillish or Beartic from Twist Mountain can carry you here. Avoid letting Haxorus set up with Dragon Dance.",
          trainers: [
            trn("Gym Leader", "Drayden / Iris", [
              pk("Fraxure", 41, 611),
              pk("Druddigon", 41, 621),
              pk("Haxorus", 43, 612),
            ], "₽5,160 + TM82 (Dragon Tail)"),
          ],
          items: [
            item("Legend Badge", "Defeat Drayden/Iris"),
            item("TM82 Dragon Tail", "Defeat Drayden/Iris"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 10 — Route 10, Team Plasma Attack & Victory Road
     * =============================================================== */
    {
      part: 10,
      title: "Route 10 & Victory Road",
      summary:
        "Battle through Route 10 as Team Plasma attacks, then conquer Victory Road.",
      locations: [
        {
          name: "Route 10",
          description:
            "After earning the Legend Badge, Team Plasma attacks Opelucid City! The sages appear and create chaos, but the Gym Leaders across Unova rally to stop them. You push forward on Route 10 toward the Pokemon League. Cheren and Bianca each have a final moment with you. This route has strong wild Pokemon — Bouffalant, Rufflet (White), and Vullaby (Black) are all available. The Badge Check Gates verify you have all eight badges before allowing passage.",
          encounters: [
            enc("Bouffalant", 626, ["B", "W"], "Grass", "34-37", "20%"),
            enc("Rufflet", 627, ["W"], "Grass", "34-37", "15%"),
            enc("Vullaby", 629, ["B"], "Grass", "34-37", "15%"),
            enc("Herdier", 507, ["B", "W"], "Grass", "34-37", "20%"),
            enc("Foongus", 590, ["B", "W"], "Grass", "34-37", "20%"),
            enc("Mienfoo", 619, ["B", "W"], "Grass", "34-37", "10%"),
          ],
          trainers: [
            trn("Rival", "Cheren", [
              pk("Unfezant", 43, 521),
              pk("Liepard", 43, 510),
              pk("Simisage", 43, 512),
              pk("Serperior", 45, 497),
            ], "Starter varies — final pre-League battle"),
          ],
          items: [
            item("Full Restore", "Near Badge Check Gates"),
            item("Max Revive", "Hidden on the route"),
          ],
        },
        {
          name: "Victory Road",
          description:
            "The final challenge before the Pokemon League. Victory Road in Unova is a cave system with shifting platforms, strength puzzles, and powerful trainers. Wild Deino (the pseudo-legendary Dragon/Dark type) appears here but is rare. Durant and Heatmor have a predator-prey relationship and both appear. Mienfoo evolves into the fast and strong Mienshao. Stock up on healing items and make sure your team is Level 45+. The cave is long with many floors.",
          encounters: [
            enc("Durant", 632, ["B", "W"], "Cave", "37-40", "20%"),
            enc("Heatmor", 631, ["B", "W"], "Cave", "37-40", "10%"),
            enc("Deino", 633, ["B", "W"], "Cave", "38-40", "5%"),
            enc("Mienfoo", 619, ["B", "W"], "Cave", "37-40", "20%"),
            enc("Boldore", 525, ["B", "W"], "Cave", "37-40", "20%"),
            enc("Woobat", 527, ["B", "W"], "Cave", "37-40", "15%"),
            enc("Golurk", 623, ["B", "W"], "Cave", "37-40", "10%"),
          ],
          items: [
            item("TM93 Wild Charge", "Victory Road cave"),
            item("Full Heal", "Victory Road 1F"),
            item("Ultra Ball", "Various floors"),
            item("Max Revive", "Victory Road 3F"),
            item("TM01 Hone Claws", "Victory Road exterior"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 11 — Pokemon League, N's Castle, Final Battles
     * =============================================================== */
    {
      part: 11,
      title: "Pokemon League & N's Castle",
      summary:
        "Challenge the Elite Four, face N and his legendary dragon, and battle Ghetsis to save Unova.",
      locations: [
        {
          name: "Pokemon League — Elite Four",
          description:
            "The Unova Elite Four can be challenged in any order! Buy Max Potions, Full Restores, and Revives. Unlike previous games, you choose which door to enter. Shauntal uses Ghost types (use Dark and Ghost moves), Grimsley uses Dark types (use Fighting and Bug moves), Caitlin uses Psychic types (use Dark, Ghost, and Bug moves), and Marshal uses Fighting types (use Psychic and Flying moves). Recommended level: 48+.",
          trainers: [
            trn("Elite Four", "Shauntal", [
              pk("Cofagrigus", 48, 563),
              pk("Jellicent", 48, 593),
              pk("Golurk", 48, 623),
              pk("Chandelure", 50, 609),
            ], "Ghost specialist — use Dark, Ghost"),
            trn("Elite Four", "Grimsley", [
              pk("Scrafty", 48, 560),
              pk("Krookodile", 48, 553),
              pk("Liepard", 48, 510),
              pk("Bisharp", 50, 625),
            ], "Dark specialist — use Fighting, Bug"),
            trn("Elite Four", "Caitlin", [
              pk("Reuniclus", 48, 579),
              pk("Musharna", 48, 518),
              pk("Sigilyph", 48, 561),
              pk("Gothitelle", 50, 576),
            ], "Psychic specialist — use Dark, Ghost, Bug"),
            trn("Elite Four", "Marshal", [
              pk("Throh", 48, 538),
              pk("Sawk", 48, 539),
              pk("Conkeldurr", 48, 534),
              pk("Mienshao", 50, 620),
            ], "Fighting specialist — use Psychic, Flying"),
          ],
        },
        {
          name: "N's Castle — The Climax",
          description:
            "After defeating the Elite Four, you enter the Champion's room only to find N has already beaten Alder! N's Castle rises from the ground, fusing with the Pokemon League building in one of the most dramatic scenes in Pokemon history. Inside the castle, Team Plasma's sages try to stop you but the Gym Leaders arrive to hold them off. Explore the castle to find N's childhood room — a haunting space with toys and a basketball court, revealing N was raised in isolation by Ghetsis. Anthea and Concordia tell you N's story. At the throne room, N awaits with his legendary dragon. Your Dark/Light Stone reacts and you must catch Reshiram (Black) or Zekrom (White) — the game essentially forces the capture. Then you battle N with his full team led by the opposite legendary.",
          trainers: [
            trn("Team Plasma King", "N", [
              pk("Zekrom", 52, 644),
              pk("Carracosta", 50, 565),
              pk("Vanilluxe", 50, 584),
              pk("Archeops", 50, 567),
              pk("Zoroark", 50, 571),
              pk("Klinklang", 50, 601),
            ], "In Black — N has Zekrom; in White — N has Reshiram"),
          ],
          items: [
            item("Reshiram", "Caught from Light Stone in N's Castle (Black)"),
            item("Zekrom", "Caught from Dark Stone in N's Castle (White)"),
          ],
        },
        {
          name: "Ghetsis Battle",
          description:
            "Immediately after defeating N, Ghetsis reveals himself as the true villain — he manipulated N from birth to use the legendary dragon so Ghetsis could rule Unova unopposed. He battles you without healing! Ghetsis's team is brutal. His Hydreigon is Level 54 — far above anything else at this point in the game — with coverage moves including Surf, Fire Blast, Dragon Pulse, and Focus Blast. Use Fighting moves against most of his team. Ice and Fighting moves for Hydreigon. This is one of the hardest champion-equivalent battles in the series. After defeating Ghetsis, N says goodbye and flies away on his dragon. Alder thanks you and the credits roll.",
          trainers: [
            trn("Team Plasma", "Ghetsis", [
              pk("Cofagrigus", 52, 563),
              pk("Bouffalant", 52, 626),
              pk("Seismitoad", 52, 537),
              pk("Bisharp", 52, 625),
              pk("Eelektross", 52, 604),
              pk("Hydreigon", 54, 635),
            ], "The true final boss — Hydreigon is devastating"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 12 — Post-Game: Eastern Unova & Legendaries
     * =============================================================== */
    {
      part: 12,
      title: "Post-Game: Eastern Unova Exploration",
      summary:
        "Explore the previously inaccessible eastern half of Unova, encounter stronger wild Pokemon, and hunt legendaries.",
      isPostGame: true,
      locations: [
        {
          name: "Eastern Unova — Routes 11-15",
          description:
            "After the credits, Looker from the International Police asks you to help find the Seven Sages of Team Plasma scattered across Unova. The eastern routes are now accessible — Route 11 through Route 15, plus new areas like the Village Bridge, Lacunosa Town, and Undella Town. Wild Pokemon here are Level 45-65 and include species not seen in the main game. Larvesta appears on Route 18 (extremely rare) and its evolution Volcarona is one of the strongest non-legendary Pokemon. Cobalion, Terrakion, and Virizion — the Swords of Justice — can now be caught. Cobalion is in Mistralton Cave, Terrakion in Victory Road, and Virizion in Pinwheel Forest.",
          encounters: [
            enc("Golduck", 55, ["B", "W"], "Grass", "47-55", "20%"),
            enc("Altaria", 334, ["B", "W"], "Grass", "47-55", "10%"),
            enc("Gligar", 207, ["B", "W"], "Grass", "47-55", "10%"),
            enc("Larvesta", 636, ["B", "W"], "Grass", "47-50", "2%"),
            enc("Absol", 359, ["B", "W"], "Grass", "47-55", "10%"),
          ],
          items: [
            item("Super Rod", "From a fisherman on Route 13"),
            item("Cobalion", "Mistralton Cave (Lv. 42)"),
            item("Terrakion", "Victory Road post-game area (Lv. 42)"),
            item("Virizion", "Pinwheel Forest inner area (Lv. 42)"),
          ],
        },
        {
          name: "Undella Town & Abyssal Ruins",
          description:
            "A seaside resort town where Cynthia, the Sinnoh Champion, is vacationing. She'll battle you daily in the summer season! The Abyssal Ruins are accessible by diving in Undella Bay — explore the submerged temple for valuable Relic items worth massive amounts at shops. The Riches family in Undella Town provides daily battles with escalating prize money.",
          trainers: [
            trn("Sinnoh Champion", "Cynthia", [
              pk("Spiritomb", 75, 442),
              pk("Milotic", 75, 350),
              pk("Eelektross", 75, 604),
              pk("Lucario", 75, 448),
              pk("Braviary", 75, 628),
              pk("Garchomp", 77, 445),
            ], "Daily rematch in spring"),
          ],
        },
        {
          name: "Legendary Hunting: Tornadus & Thundurus",
          description:
            "After visiting a house on Route 7, Tornadus (Black) or Thundurus (White) begins roaming across Unova. Check the route gate bulletin boards to track its location. It flees every time you encounter it in the wild. Use Mean Look or a trapping ability to prevent fleeing. Reduce its HP slowly across multiple encounters. These are at Level 40 and are required to summon Landorus later (requires both, so trading is needed). Save your Master Ball for one of these roamers if you still have it!",
          items: [
            item("Tornadus", "Roaming Unova (Black only, Lv. 40)"),
            item("Thundurus", "Roaming Unova (White only, Lv. 40)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 13 — Post-Game: Challenger's Cave & Giant Chasm (Kyurem)
     * =============================================================== */
    {
      part: 13,
      title: "Post-Game: Challenger's Cave & Giant Chasm",
      summary:
        "Explore the post-game dungeons and catch the legendary Kyurem in the frozen Giant Chasm.",
      isPostGame: true,
      locations: [
        {
          name: "Challenger's Cave",
          description:
            "Located on Route 9, Challenger's Cave is a post-game dungeon with high-level wild Pokemon including Riolu and Excadrill. This is a great training ground for the stronger post-game battles. The cave has multiple floors with strong trainers.",
          encounters: [
            enc("Excadrill", 530, ["B", "W"], "Cave", "48-55", "10%"),
            enc("Boldore", 525, ["B", "W"], "Cave", "48-55", "30%"),
            enc("Woobat", 527, ["B", "W"], "Cave", "48-55", "20%"),
            enc("Riolu", 447, ["B", "W"], "Cave", "48-55", "10%"),
            enc("Sawk", 539, ["B"], "Cave", "48-55", "15%"),
            enc("Throh", 538, ["W"], "Cave", "48-55", "15%"),
          ],
        },
        {
          name: "Giant Chasm — Kyurem",
          description:
            "The Giant Chasm is located north of Route 13 — a meteor impact crater surrounded by a dense forest. As you enter the inner cave, the temperature drops drastically and snow begins to fall. Navigate through the icy cavern to the deepest point where Kyurem, the legendary boundary Pokemon, awaits at Level 75. Kyurem is Dragon/Ice type with the ability Pressure. It knows Glaciate (its signature move), Dragon Pulse, Imprison, and Endeavor. Bring plenty of Ultra Balls, Dusk Balls (it's dark inside), and Timer Balls. Reduce its HP to red and inflict Sleep or Paralysis. Save before the encounter! Kyurem is tied to the lore of Reshiram and Zekrom — it is the empty husk left when the original dragon split.",
          encounters: [
            enc("Clefairy", 35, ["B", "W"], "Cave", "48-55", "10%"),
            enc("Piloswine", 221, ["B", "W"], "Cave", "48-55", "20%"),
            enc("Delibird", 225, ["B", "W"], "Cave", "48-55", "20%"),
            enc("Vanillish", 583, ["B", "W"], "Cave", "48-55", "20%"),
            enc("Excadrill", 530, ["B", "W"], "Cave", "48-55", "10%"),
          ],
          items: [
            item("Kyurem", "Deepest chamber of Giant Chasm (Lv. 75 — save first!)"),
            item("TM13 Ice Beam", "Giant Chasm cave floor"),
            item("Star Piece", "Hidden in the forest section"),
          ],
        },
        {
          name: "Landorus Shrine",
          description:
            "If you have both Tornadus and Thundurus in your party (requires trading between Black and White), bring them to the Abundant Shrine on Route 14. Landorus will appear at Level 70. Landorus is Ground/Flying and is one of the most powerful Pokemon in competitive play. This is the only way to obtain it without trading for one directly.",
          items: [
            item("Landorus", "Abundant Shrine with Tornadus + Thundurus in party (Lv. 70)"),
          ],
        },
      ],
    },

    /* ===============================================================
     *  PART 14 — Post-Game: Battle Subway & Elite Four Rematch
     * =============================================================== */
    {
      part: 14,
      title: "Post-Game: Battle Subway & Elite Four Rematch",
      summary:
        "Test your skills in the Battle Subway and challenge the powered-up Elite Four and Champion.",
      isPostGame: true,
      locations: [
        {
          name: "Battle Subway",
          description:
            "Located in Nimbasa City, the Battle Subway is Unova's battle facility. Choose Single, Double, or Multi Battle lines. Win 7 consecutive battles per run to earn Battle Points (BP). At every 21st battle, face the Subway Bosses — Ingo (Single) or Emmet (Double). After 48 consecutive wins on the Super lines, you face them again with stronger teams. BP can be exchanged for TMs, held items (Choice items, Life Orb, Focus Sash), and vitamins. Use competitive-ready Pokemon with proper EVs, IVs, and movesets. The Super lines use Level 50 auto-leveling.",
          items: [
            item("Battle Points", "Earned from consecutive wins"),
            item("Various TMs", "Purchasable with BP at the exchange counter"),
            item("Choice Band / Scarf / Specs", "48 BP each"),
            item("Focus Sash", "48 BP"),
            item("Life Orb", "48 BP"),
          ],
        },
        {
          name: "Elite Four Rematch",
          description:
            "After entering the Hall of Fame, the Elite Four's teams are significantly upgraded with higher levels (around 71-77) and expanded rosters. Shauntal adds Drifblim and Froslass. Grimsley adds Honchkrow and Drapion. Caitlin adds Metagross and Bronzong. Marshal adds Lucario and Toxicroak. Champion Alder can now be properly battled — his team includes Accelgor, Bouffalant, Druddigon, Vanilluxe, Escavalier, and his ace Volcarona at Level 77. Recommended level: 75+. Alder's Volcarona is extremely dangerous with Quiver Dance boosting its already high Special Attack and Speed.",
          trainers: [
            trn("Elite Four", "Shauntal (Rematch)", [
              pk("Cofagrigus", 71, 563),
              pk("Golurk", 71, 623),
              pk("Jellicent", 71, 593),
              pk("Drifblim", 71, 426),
              pk("Froslass", 71, 478),
              pk("Chandelure", 73, 609),
            ], "Ghost specialist — upgraded team"),
            trn("Elite Four", "Grimsley (Rematch)", [
              pk("Scrafty", 71, 560),
              pk("Krookodile", 71, 553),
              pk("Liepard", 71, 510),
              pk("Honchkrow", 71, 430),
              pk("Drapion", 71, 452),
              pk("Bisharp", 73, 625),
            ], "Dark specialist — upgraded team"),
            trn("Elite Four", "Caitlin (Rematch)", [
              pk("Reuniclus", 71, 579),
              pk("Musharna", 71, 518),
              pk("Sigilyph", 71, 561),
              pk("Metagross", 71, 376),
              pk("Bronzong", 71, 437),
              pk("Gothitelle", 73, 576),
            ], "Psychic specialist — upgraded team"),
            trn("Elite Four", "Marshal (Rematch)", [
              pk("Throh", 71, 538),
              pk("Sawk", 71, 539),
              pk("Conkeldurr", 71, 534),
              pk("Lucario", 71, 448),
              pk("Toxicroak", 71, 454),
              pk("Mienshao", 73, 620),
            ], "Fighting specialist — upgraded team"),
            trn("Champion", "Alder", [
              pk("Accelgor", 75, 617),
              pk("Bouffalant", 75, 626),
              pk("Druddigon", 75, 621),
              pk("Vanilluxe", 75, 584),
              pk("Escavalier", 75, 589),
              pk("Volcarona", 77, 637),
            ], "Champion — mixed team, Volcarona is devastating"),
          ],
        },
        {
          name: "Completing the Unova Pokedex",
          description:
            "With all areas explored, work toward completing the Unova Pokedex (seen all 153 Unova Pokemon). Professor Juniper rewards you with a certificate. For the full National Pokedex, trade with other Gen 5 games and transfer from Gen 4 via the Poke Transfer Lab on Route 15. Key version exclusives to trade: Black has Cottonee, Gothita, Vullaby, Tornadus, and Reshiram. White has Petilil, Solosis, Rufflet, Thundurus, and Zekrom. Both versions need the other's exclusives to complete the dex.",
          items: [
            item("Certificate", "From Professor Juniper for completing the Unova Pokedex"),
          ],
        },
      ],
    },
  ],
};
