/* ──────────────────────────────────────────────────────────
 *  Structured data for every mainline Pokémon game guide.
 *  Paired versions are combined into one entry.
 * ────────────────────────────────────────────────────────── */

export interface GymLeader {
  name: string;
  type: string;
  badge: string;
  location: string;
  pokemon: { name: string; level: number }[];
}

export interface EliteFourMember {
  name: string;
  type: string;
  pokemon: { name: string; level: number }[];
}

export interface LegendaryPokemon {
  name: string;
  type: string;
  location: string;
  notes?: string;
}

export interface GameGuide {
  slug: string;
  title: string;
  shortTitle: string;
  generation: number;
  region: string;
  platform: string;
  releaseYear: number;
  color: string; // tailwind bg class
  accentColor: string; // tailwind text class
  starters: { name: string; type: string }[];
  description: string;
  features: string[];
  gymLeaders: GymLeader[];
  eliteFour: EliteFourMember[];
  champion: EliteFourMember;
  legendaries: LegendaryPokemon[];
  tips: string[];
}

/* ── Helper to keep entries concise ───────────────────── */
const p = (name: string, level: number) => ({ name, level });

export const GAME_GUIDES: GameGuide[] = [
  /* ======================================================
   *  GENERATION I
   * ====================================================== */
  {
    slug: "red-blue",
    title: "Pokémon Red & Blue",
    shortTitle: "Red & Blue",
    generation: 1,
    region: "Kanto",
    platform: "Game Boy",
    releaseYear: 1996,
    color: "bg-red-600",
    accentColor: "text-red-600",
    starters: [
      { name: "Bulbasaur", type: "grass" },
      { name: "Charmander", type: "fire" },
      { name: "Squirtle", type: "water" },
    ],
    description:
      "The original Pokémon adventure that started it all. Travel through the Kanto region, collect 8 badges, and become the Champion.",
    features: [
      "Original 151 Pokémon",
      "First Pokémon RPG",
      "Link Cable trading & battles",
      "MissingNo. glitch",
    ],
    gymLeaders: [
      { name: "Brock", type: "rock", badge: "Boulder Badge", location: "Pewter City", pokemon: [p("Geodude", 12), p("Onix", 14)] },
      { name: "Misty", type: "water", badge: "Cascade Badge", location: "Cerulean City", pokemon: [p("Staryu", 18), p("Starmie", 21)] },
      { name: "Lt. Surge", type: "electric", badge: "Thunder Badge", location: "Vermilion City", pokemon: [p("Voltorb", 21), p("Pikachu", 18), p("Raichu", 24)] },
      { name: "Erika", type: "grass", badge: "Rainbow Badge", location: "Celadon City", pokemon: [p("Victreebel", 29), p("Tangela", 24), p("Vileplume", 29)] },
      { name: "Koga", type: "poison", badge: "Soul Badge", location: "Fuchsia City", pokemon: [p("Koffing", 37), p("Muk", 39), p("Koffing", 37), p("Weezing", 43)] },
      { name: "Sabrina", type: "psychic", badge: "Marsh Badge", location: "Saffron City", pokemon: [p("Kadabra", 38), p("Mr. Mime", 37), p("Venomoth", 38), p("Alakazam", 43)] },
      { name: "Blaine", type: "fire", badge: "Volcano Badge", location: "Cinnabar Island", pokemon: [p("Growlithe", 42), p("Ponyta", 40), p("Rapidash", 42), p("Arcanine", 47)] },
      { name: "Giovanni", type: "ground", badge: "Earth Badge", location: "Viridian City", pokemon: [p("Rhyhorn", 45), p("Dugtrio", 42), p("Nidoqueen", 44), p("Nidoking", 45), p("Rhydon", 50)] },
    ],
    eliteFour: [
      { name: "Lorelei", type: "ice", pokemon: [p("Dewgong", 54), p("Cloyster", 53), p("Slowbro", 54), p("Jynx", 56), p("Lapras", 56)] },
      { name: "Bruno", type: "fighting", pokemon: [p("Onix", 53), p("Hitmonchan", 55), p("Hitmonlee", 55), p("Onix", 56), p("Machamp", 58)] },
      { name: "Agatha", type: "ghost", pokemon: [p("Gengar", 56), p("Golbat", 56), p("Haunter", 55), p("Arbok", 58), p("Gengar", 60)] },
      { name: "Lance", type: "dragon", pokemon: [p("Gyarados", 58), p("Dragonair", 56), p("Dragonair", 56), p("Aerodactyl", 60), p("Dragonite", 62)] },
    ],
    champion: { name: "Blue", type: "mixed", pokemon: [p("Pidgeot", 61), p("Alakazam", 59), p("Rhydon", 61), p("Arcanine", 63), p("Exeggutor", 61), p("Gyarados", 63)] },
    legendaries: [
      { name: "Mewtwo", type: "psychic", location: "Cerulean Cave", notes: "Post-game, Lv. 70" },
      { name: "Articuno", type: "ice", location: "Seafoam Islands" },
      { name: "Zapdos", type: "electric", location: "Power Plant" },
      { name: "Moltres", type: "fire", location: "Victory Road" },
    ],
    tips: [
      "Bulbasaur is the easiest starter for the first two gyms.",
      "Stock up on Potions before Mt. Moon — it's a long dungeon.",
      "Teach a Pokémon Dig for a free escape from caves.",
      "Psychic types are overpowered in Gen I — get an Alakazam!",
      "Save your Master Ball for Mewtwo in Cerulean Cave.",
    ],
  },

  {
    slug: "yellow",
    title: "Pokémon Yellow",
    shortTitle: "Yellow",
    generation: 1,
    region: "Kanto",
    platform: "Game Boy",
    releaseYear: 1998,
    color: "bg-yellow-500",
    accentColor: "text-yellow-600",
    starters: [{ name: "Pikachu", type: "electric" }],
    description:
      "The anime-inspired special edition. Pikachu follows you around, and you can get all three original starters. Based on the TV show.",
    features: [
      "Pikachu follows you",
      "All 3 Kanto starters obtainable",
      "Jessie & James appear",
      "Updated sprites",
    ],
    gymLeaders: [
      { name: "Brock", type: "rock", badge: "Boulder Badge", location: "Pewter City", pokemon: [p("Geodude", 10), p("Onix", 12)] },
      { name: "Misty", type: "water", badge: "Cascade Badge", location: "Cerulean City", pokemon: [p("Staryu", 18), p("Starmie", 21)] },
      { name: "Lt. Surge", type: "electric", badge: "Thunder Badge", location: "Vermilion City", pokemon: [p("Raichu", 28)] },
      { name: "Erika", type: "grass", badge: "Rainbow Badge", location: "Celadon City", pokemon: [p("Tangela", 30), p("Weepinbell", 32), p("Gloom", 32)] },
      { name: "Koga", type: "poison", badge: "Soul Badge", location: "Fuchsia City", pokemon: [p("Venonat", 44), p("Venonat", 46), p("Venonat", 48), p("Venomoth", 50)] },
      { name: "Sabrina", type: "psychic", badge: "Marsh Badge", location: "Saffron City", pokemon: [p("Abra", 50), p("Kadabra", 50), p("Alakazam", 50)] },
      { name: "Blaine", type: "fire", badge: "Volcano Badge", location: "Cinnabar Island", pokemon: [p("Ninetales", 48), p("Rapidash", 50), p("Arcanine", 54)] },
      { name: "Giovanni", type: "ground", badge: "Earth Badge", location: "Viridian City", pokemon: [p("Dugtrio", 50), p("Persian", 53), p("Nidoqueen", 53), p("Nidoking", 55), p("Rhydon", 55)] },
    ],
    eliteFour: [
      { name: "Lorelei", type: "ice", pokemon: [p("Dewgong", 54), p("Cloyster", 53), p("Slowbro", 54), p("Jynx", 56), p("Lapras", 56)] },
      { name: "Bruno", type: "fighting", pokemon: [p("Onix", 53), p("Hitmonchan", 55), p("Hitmonlee", 55), p("Onix", 56), p("Machamp", 58)] },
      { name: "Agatha", type: "ghost", pokemon: [p("Gengar", 56), p("Golbat", 56), p("Haunter", 55), p("Arbok", 58), p("Gengar", 60)] },
      { name: "Lance", type: "dragon", pokemon: [p("Gyarados", 58), p("Dragonair", 56), p("Dragonair", 56), p("Aerodactyl", 60), p("Dragonite", 62)] },
    ],
    champion: { name: "Blue", type: "mixed", pokemon: [p("Sandslash", 61), p("Alakazam", 59), p("Ninetales", 61), p("Exeggutor", 63), p("Cloyster", 61), p("Jolteon", 63)] },
    legendaries: [
      { name: "Mewtwo", type: "psychic", location: "Cerulean Cave", notes: "Post-game, Lv. 70" },
      { name: "Articuno", type: "ice", location: "Seafoam Islands" },
      { name: "Zapdos", type: "electric", location: "Power Plant" },
      { name: "Moltres", type: "fire", location: "Victory Road" },
    ],
    tips: [
      "Pikachu can't evolve — but you can get Bulbasaur, Charmander, and Squirtle for free!",
      "Get Bulbasaur from a woman in Cerulean City when Pikachu is happy.",
      "Brock is tough with just Pikachu — catch a Nidoran♂ and learn Double Kick.",
      "Mankey on Route 22 also destroys Brock.",
      "Surf Pikachu minigame is available if you transfer a Pikachu that knows Surf.",
    ],
  },

  /* ======================================================
   *  GENERATION II
   * ====================================================== */
  {
    slug: "gold-silver",
    title: "Pokémon Gold & Silver",
    shortTitle: "Gold & Silver",
    generation: 2,
    region: "Johto",
    platform: "Game Boy Color",
    releaseYear: 1999,
    color: "bg-amber-500",
    accentColor: "text-amber-600",
    starters: [
      { name: "Chikorita", type: "grass" },
      { name: "Cyndaquil", type: "fire" },
      { name: "Totodile", type: "water" },
    ],
    description:
      "Explore the Johto region with a real-time clock, breeding, and 100 new Pokémon. After beating Johto, travel back to Kanto!",
    features: [
      "Day/night cycle",
      "Pokémon breeding",
      "Shiny Pokémon introduced",
      "Kanto post-game region",
      "Battle Red on Mt. Silver",
    ],
    gymLeaders: [
      { name: "Falkner", type: "flying", badge: "Zephyr Badge", location: "Violet City", pokemon: [p("Pidgey", 7), p("Pidgeotto", 9)] },
      { name: "Bugsy", type: "bug", badge: "Hive Badge", location: "Azalea Town", pokemon: [p("Metapod", 14), p("Kakuna", 14), p("Scyther", 16)] },
      { name: "Whitney", type: "normal", badge: "Plain Badge", location: "Goldenrod City", pokemon: [p("Clefairy", 18), p("Miltank", 20)] },
      { name: "Morty", type: "ghost", badge: "Fog Badge", location: "Ecruteak City", pokemon: [p("Gastly", 21), p("Haunter", 21), p("Haunter", 23), p("Gengar", 25)] },
      { name: "Chuck", type: "fighting", badge: "Storm Badge", location: "Cianwood City", pokemon: [p("Primeape", 27), p("Poliwrath", 30)] },
      { name: "Jasmine", type: "steel", badge: "Mineral Badge", location: "Olivine City", pokemon: [p("Magnemite", 30), p("Magnemite", 30), p("Steelix", 35)] },
      { name: "Pryce", type: "ice", badge: "Glacier Badge", location: "Mahogany Town", pokemon: [p("Seel", 27), p("Dewgong", 29), p("Piloswine", 31)] },
      { name: "Clair", type: "dragon", badge: "Rising Badge", location: "Blackthorn City", pokemon: [p("Dragonair", 37), p("Dragonair", 37), p("Dragonair", 37), p("Kingdra", 40)] },
    ],
    eliteFour: [
      { name: "Will", type: "psychic", pokemon: [p("Xatu", 40), p("Jynx", 41), p("Exeggutor", 41), p("Slowbro", 41), p("Xatu", 42)] },
      { name: "Koga", type: "poison", pokemon: [p("Ariados", 40), p("Forretress", 43), p("Muk", 42), p("Venomoth", 41), p("Crobat", 44)] },
      { name: "Bruno", type: "fighting", pokemon: [p("Hitmontop", 42), p("Hitmonlee", 42), p("Hitmonchan", 42), p("Onix", 43), p("Machamp", 46)] },
      { name: "Karen", type: "dark", pokemon: [p("Umbreon", 42), p("Vileplume", 42), p("Gengar", 45), p("Murkrow", 44), p("Houndoom", 47)] },
    ],
    champion: { name: "Lance", type: "dragon", pokemon: [p("Gyarados", 44), p("Dragonite", 47), p("Dragonite", 47), p("Aerodactyl", 46), p("Charizard", 46), p("Dragonite", 50)] },
    legendaries: [
      { name: "Ho-Oh", type: "fire", location: "Tin Tower", notes: "Gold version (post-game in Silver)" },
      { name: "Lugia", type: "psychic", location: "Whirl Islands", notes: "Silver version (post-game in Gold)" },
      { name: "Suicune", type: "water", location: "Roaming Johto" },
      { name: "Raikou", type: "electric", location: "Roaming Johto" },
      { name: "Entei", type: "fire", location: "Roaming Johto" },
    ],
    tips: [
      "Cyndaquil is the easiest starter — Chikorita has the hardest early game.",
      "Whitney's Miltank is notorious — use a Female Pokémon to avoid Attract, and Machop (trade in Goldenrod) destroys it.",
      "Save before encountering roaming legendaries — they flee on turn 1.",
      "After beating the Elite Four, explore all of Kanto for 8 more badges!",
      "Red awaits on Mt. Silver with Lv. 81 Pikachu — grind before you go.",
    ],
  },

  {
    slug: "crystal",
    title: "Pokémon Crystal",
    shortTitle: "Crystal",
    generation: 2,
    region: "Johto",
    platform: "Game Boy Color",
    releaseYear: 2000,
    color: "bg-cyan-500",
    accentColor: "text-cyan-600",
    starters: [
      { name: "Chikorita", type: "grass" },
      { name: "Cyndaquil", type: "fire" },
      { name: "Totodile", type: "water" },
    ],
    description:
      "The definitive Gen II experience with animated sprites, Suicune storyline, and the first game to let you play as a girl.",
    features: [
      "Animated Pokémon sprites",
      "Suicune subplot",
      "Female player option",
      "Battle Tower",
      "Celebi event (3DS Virtual Console)",
    ],
    gymLeaders: [
      { name: "Falkner", type: "flying", badge: "Zephyr Badge", location: "Violet City", pokemon: [p("Pidgey", 7), p("Pidgeotto", 9)] },
      { name: "Bugsy", type: "bug", badge: "Hive Badge", location: "Azalea Town", pokemon: [p("Metapod", 14), p("Kakuna", 14), p("Scyther", 16)] },
      { name: "Whitney", type: "normal", badge: "Plain Badge", location: "Goldenrod City", pokemon: [p("Clefairy", 18), p("Miltank", 20)] },
      { name: "Morty", type: "ghost", badge: "Fog Badge", location: "Ecruteak City", pokemon: [p("Gastly", 21), p("Haunter", 21), p("Haunter", 23), p("Gengar", 25)] },
      { name: "Chuck", type: "fighting", badge: "Storm Badge", location: "Cianwood City", pokemon: [p("Primeape", 27), p("Poliwrath", 30)] },
      { name: "Jasmine", type: "steel", badge: "Mineral Badge", location: "Olivine City", pokemon: [p("Magnemite", 30), p("Magnemite", 30), p("Steelix", 35)] },
      { name: "Pryce", type: "ice", badge: "Glacier Badge", location: "Mahogany Town", pokemon: [p("Seel", 27), p("Dewgong", 29), p("Piloswine", 31)] },
      { name: "Clair", type: "dragon", badge: "Rising Badge", location: "Blackthorn City", pokemon: [p("Dragonair", 37), p("Dragonair", 37), p("Dragonair", 37), p("Kingdra", 40)] },
    ],
    eliteFour: [
      { name: "Will", type: "psychic", pokemon: [p("Xatu", 40), p("Jynx", 41), p("Exeggutor", 41), p("Slowbro", 41), p("Xatu", 42)] },
      { name: "Koga", type: "poison", pokemon: [p("Ariados", 40), p("Forretress", 43), p("Muk", 42), p("Venomoth", 41), p("Crobat", 44)] },
      { name: "Bruno", type: "fighting", pokemon: [p("Hitmontop", 42), p("Hitmonlee", 42), p("Hitmonchan", 42), p("Onix", 43), p("Machamp", 46)] },
      { name: "Karen", type: "dark", pokemon: [p("Umbreon", 42), p("Vileplume", 42), p("Gengar", 45), p("Murkrow", 44), p("Houndoom", 47)] },
    ],
    champion: { name: "Lance", type: "dragon", pokemon: [p("Gyarados", 44), p("Dragonite", 47), p("Dragonite", 47), p("Aerodactyl", 46), p("Charizard", 46), p("Dragonite", 50)] },
    legendaries: [
      { name: "Suicune", type: "water", location: "Tin Tower", notes: "Fixed encounter after storyline" },
      { name: "Ho-Oh", type: "fire", location: "Tin Tower", notes: "Post-game, requires Clear Bell" },
      { name: "Lugia", type: "psychic", location: "Whirl Islands", notes: "Post-game, requires Silver Wing" },
      { name: "Raikou", type: "electric", location: "Roaming Johto" },
      { name: "Entei", type: "fire", location: "Roaming Johto" },
    ],
    tips: [
      "Crystal has an exclusive Suicune subplot — follow it through Johto's landmarks.",
      "The Odd Egg from the Day Care can hatch a shiny with much higher odds.",
      "Battle Tower in Olivine is great for post-game challenges.",
      "On 3DS Virtual Console, you can get Celebi via the GS Ball event!",
      "Same Kanto post-game as Gold/Silver — 16 badges total.",
    ],
  },

  /* ======================================================
   *  GENERATION III
   * ====================================================== */
  {
    slug: "ruby-sapphire",
    title: "Pokémon Ruby & Sapphire",
    shortTitle: "Ruby & Sapphire",
    generation: 3,
    region: "Hoenn",
    platform: "Game Boy Advance",
    releaseYear: 2002,
    color: "bg-rose-600",
    accentColor: "text-rose-600",
    starters: [
      { name: "Treecko", type: "grass" },
      { name: "Torchic", type: "fire" },
      { name: "Mudkip", type: "water" },
    ],
    description:
      "A fresh start in the tropical Hoenn region with Abilities, Natures, and double battles. Team Magma and Team Aqua clash over land and sea.",
    features: [
      "Abilities introduced",
      "Natures introduced",
      "Double Battles",
      "Pokémon Contests",
      "Secret Bases",
    ],
    gymLeaders: [
      { name: "Roxanne", type: "rock", badge: "Stone Badge", location: "Rustboro City", pokemon: [p("Geodude", 12), p("Geodude", 12), p("Nosepass", 15)] },
      { name: "Brawly", type: "fighting", badge: "Knuckle Badge", location: "Dewford Town", pokemon: [p("Machop", 16), p("Meditite", 16), p("Makuhita", 19)] },
      { name: "Wattson", type: "electric", badge: "Dynamo Badge", location: "Mauville City", pokemon: [p("Voltorb", 20), p("Electrike", 20), p("Magneton", 22), p("Manectric", 24)] },
      { name: "Flannery", type: "fire", badge: "Heat Badge", location: "Lavaridge Town", pokemon: [p("Numel", 24), p("Slugma", 24), p("Camerupt", 26), p("Torkoal", 29)] },
      { name: "Norman", type: "normal", badge: "Balance Badge", location: "Petalburg City", pokemon: [p("Spinda", 27), p("Vigoroth", 27), p("Linoone", 29), p("Slaking", 31)] },
      { name: "Winona", type: "flying", badge: "Feather Badge", location: "Fortree City", pokemon: [p("Swablu", 29), p("Tropius", 29), p("Pelipper", 30), p("Skarmory", 31), p("Altaria", 33)] },
      { name: "Tate & Liza", type: "psychic", badge: "Mind Badge", location: "Mossdeep City", pokemon: [p("Claydol", 41), p("Xatu", 41), p("Lunatone", 42), p("Solrock", 42)] },
      { name: "Wallace", type: "water", badge: "Rain Badge", location: "Sootopolis City", pokemon: [p("Luvdisc", 40), p("Whiscash", 42), p("Sealeo", 40), p("Seaking", 42), p("Milotic", 43)] },
    ],
    eliteFour: [
      { name: "Sidney", type: "dark", pokemon: [p("Mightyena", 46), p("Shiftry", 48), p("Cacturne", 46), p("Crawdaunt", 48), p("Absol", 49)] },
      { name: "Phoebe", type: "ghost", pokemon: [p("Dusclops", 48), p("Banette", 49), p("Sableye", 50), p("Banette", 49), p("Dusclops", 51)] },
      { name: "Glacia", type: "ice", pokemon: [p("Sealeo", 50), p("Glalie", 50), p("Sealeo", 52), p("Glalie", 52), p("Walrein", 53)] },
      { name: "Drake", type: "dragon", pokemon: [p("Shelgon", 52), p("Altaria", 54), p("Flygon", 53), p("Flygon", 53), p("Salamence", 55)] },
    ],
    champion: { name: "Steven", type: "steel", pokemon: [p("Skarmory", 57), p("Claydol", 55), p("Aggron", 56), p("Cradily", 56), p("Armaldo", 56), p("Metagross", 58)] },
    legendaries: [
      { name: "Groudon", type: "ground", location: "Cave of Origin", notes: "Ruby only" },
      { name: "Kyogre", type: "water", location: "Cave of Origin", notes: "Sapphire only" },
      { name: "Rayquaza", type: "dragon", location: "Sky Pillar", notes: "Post-game" },
      { name: "Latios", type: "dragon", location: "Roaming Hoenn", notes: "Ruby only" },
      { name: "Latias", type: "psychic", location: "Roaming Hoenn", notes: "Sapphire only" },
      { name: "Regice", type: "ice", location: "Island Cave" },
      { name: "Regirock", type: "rock", location: "Desert Ruins" },
      { name: "Registeel", type: "steel", location: "Ancient Tomb" },
    ],
    tips: [
      "Mudkip is widely considered the best starter — Water/Ground has only one weakness.",
      "Secret Bases are great for decorating and battling friends.",
      "The Regi trio puzzle requires Relicanth and Wailord in your party.",
      "Dive is required to progress — make sure a Pokémon can learn it.",
      "The weather during battle matters more now — Rain boosts Water, Sun boosts Fire.",
    ],
  },

  {
    slug: "emerald",
    title: "Pokémon Emerald",
    shortTitle: "Emerald",
    generation: 3,
    region: "Hoenn",
    platform: "Game Boy Advance",
    releaseYear: 2004,
    color: "bg-emerald-500",
    accentColor: "text-emerald-600",
    starters: [
      { name: "Treecko", type: "grass" },
      { name: "Torchic", type: "fire" },
      { name: "Mudkip", type: "water" },
    ],
    description:
      "The definitive Hoenn experience. Both Team Magma and Team Aqua are antagonists, and the Battle Frontier awaits after you become Champion.",
    features: [
      "Battle Frontier (7 facilities)",
      "Both teams are antagonists",
      "Animated sprites",
      "Rayquaza storyline",
      "More post-game content",
    ],
    gymLeaders: [
      { name: "Roxanne", type: "rock", badge: "Stone Badge", location: "Rustboro City", pokemon: [p("Geodude", 12), p("Geodude", 12), p("Nosepass", 15)] },
      { name: "Brawly", type: "fighting", badge: "Knuckle Badge", location: "Dewford Town", pokemon: [p("Machop", 16), p("Meditite", 16), p("Makuhita", 19)] },
      { name: "Wattson", type: "electric", badge: "Dynamo Badge", location: "Mauville City", pokemon: [p("Voltorb", 20), p("Electrike", 20), p("Magneton", 22), p("Manectric", 24)] },
      { name: "Flannery", type: "fire", badge: "Heat Badge", location: "Lavaridge Town", pokemon: [p("Numel", 24), p("Slugma", 24), p("Camerupt", 26), p("Torkoal", 29)] },
      { name: "Norman", type: "normal", badge: "Balance Badge", location: "Petalburg City", pokemon: [p("Spinda", 27), p("Vigoroth", 27), p("Linoone", 29), p("Slaking", 31)] },
      { name: "Winona", type: "flying", badge: "Feather Badge", location: "Fortree City", pokemon: [p("Swablu", 29), p("Tropius", 29), p("Pelipper", 30), p("Skarmory", 31), p("Altaria", 33)] },
      { name: "Tate & Liza", type: "psychic", badge: "Mind Badge", location: "Mossdeep City", pokemon: [p("Claydol", 41), p("Xatu", 41), p("Lunatone", 42), p("Solrock", 42)] },
      { name: "Juan", type: "water", badge: "Rain Badge", location: "Sootopolis City", pokemon: [p("Luvdisc", 41), p("Whiscash", 41), p("Sealeo", 43), p("Crawdaunt", 43), p("Kingdra", 46)] },
    ],
    eliteFour: [
      { name: "Sidney", type: "dark", pokemon: [p("Mightyena", 46), p("Shiftry", 48), p("Cacturne", 46), p("Crawdaunt", 48), p("Absol", 49)] },
      { name: "Phoebe", type: "ghost", pokemon: [p("Dusclops", 48), p("Banette", 49), p("Sableye", 50), p("Banette", 49), p("Dusclops", 51)] },
      { name: "Glacia", type: "ice", pokemon: [p("Sealeo", 50), p("Glalie", 50), p("Sealeo", 52), p("Glalie", 52), p("Walrein", 53)] },
      { name: "Drake", type: "dragon", pokemon: [p("Shelgon", 52), p("Altaria", 54), p("Flygon", 53), p("Flygon", 53), p("Salamence", 55)] },
    ],
    champion: { name: "Wallace", type: "water", pokemon: [p("Wailord", 57), p("Tentacruel", 55), p("Ludicolo", 56), p("Whiscash", 56), p("Gyarados", 56), p("Milotic", 58)] },
    legendaries: [
      { name: "Rayquaza", type: "dragon", location: "Sky Pillar", notes: "Story encounter, Lv. 70" },
      { name: "Groudon", type: "ground", location: "Terra Cave", notes: "Post-game, Lv. 70" },
      { name: "Kyogre", type: "water", location: "Marine Cave", notes: "Post-game, Lv. 70" },
      { name: "Latios", type: "dragon", location: "Roaming Hoenn" },
      { name: "Latias", type: "psychic", location: "Southern Island", notes: "Eon Ticket event" },
      { name: "Regice", type: "ice", location: "Island Cave" },
      { name: "Regirock", type: "rock", location: "Desert Ruins" },
      { name: "Registeel", type: "steel", location: "Ancient Tomb" },
    ],
    tips: [
      "The Battle Frontier is the ultimate post-game challenge — 7 unique facilities.",
      "You can catch BOTH Groudon and Kyogre post-game in Emerald.",
      "Juan replaces Wallace as the 8th gym leader; Wallace is now the Champion.",
      "Cloning glitch in the Battle Frontier can duplicate Pokémon and items.",
      "The Trainer Hill offers additional challenges and good rewards.",
    ],
  },

  {
    slug: "firered-leafgreen",
    title: "Pokémon FireRed & LeafGreen",
    shortTitle: "FireRed & LeafGreen",
    generation: 3,
    region: "Kanto",
    platform: "Game Boy Advance",
    releaseYear: 2004,
    color: "bg-orange-500",
    accentColor: "text-orange-600",
    starters: [
      { name: "Bulbasaur", type: "grass" },
      { name: "Charmander", type: "fire" },
      { name: "Squirtle", type: "water" },
    ],
    description:
      "Faithful GBA remakes of Red & Blue with updated graphics, the Sevii Islands post-game, and Gen III mechanics.",
    features: [
      "Kanto remade for GBA",
      "Sevii Islands (1-7)",
      "Wireless Adapter support",
      "Help system for new players",
      "Updated sprites and music",
    ],
    gymLeaders: [
      { name: "Brock", type: "rock", badge: "Boulder Badge", location: "Pewter City", pokemon: [p("Geodude", 12), p("Onix", 14)] },
      { name: "Misty", type: "water", badge: "Cascade Badge", location: "Cerulean City", pokemon: [p("Staryu", 18), p("Starmie", 21)] },
      { name: "Lt. Surge", type: "electric", badge: "Thunder Badge", location: "Vermilion City", pokemon: [p("Voltorb", 21), p("Pikachu", 18), p("Raichu", 24)] },
      { name: "Erika", type: "grass", badge: "Rainbow Badge", location: "Celadon City", pokemon: [p("Victreebel", 29), p("Tangela", 24), p("Vileplume", 29)] },
      { name: "Koga", type: "poison", badge: "Soul Badge", location: "Fuchsia City", pokemon: [p("Koffing", 37), p("Muk", 39), p("Koffing", 37), p("Weezing", 43)] },
      { name: "Sabrina", type: "psychic", badge: "Marsh Badge", location: "Saffron City", pokemon: [p("Kadabra", 38), p("Mr. Mime", 37), p("Venomoth", 38), p("Alakazam", 43)] },
      { name: "Blaine", type: "fire", badge: "Volcano Badge", location: "Cinnabar Island", pokemon: [p("Growlithe", 42), p("Ponyta", 40), p("Rapidash", 42), p("Arcanine", 47)] },
      { name: "Giovanni", type: "ground", badge: "Earth Badge", location: "Viridian City", pokemon: [p("Rhyhorn", 45), p("Dugtrio", 42), p("Nidoqueen", 44), p("Nidoking", 45), p("Rhydon", 50)] },
    ],
    eliteFour: [
      { name: "Lorelei", type: "ice", pokemon: [p("Dewgong", 52), p("Cloyster", 51), p("Slowbro", 52), p("Jynx", 54), p("Lapras", 54)] },
      { name: "Bruno", type: "fighting", pokemon: [p("Onix", 51), p("Hitmonchan", 53), p("Hitmonlee", 53), p("Onix", 54), p("Machamp", 56)] },
      { name: "Agatha", type: "ghost", pokemon: [p("Gengar", 54), p("Golbat", 54), p("Haunter", 53), p("Arbok", 56), p("Gengar", 58)] },
      { name: "Lance", type: "dragon", pokemon: [p("Gyarados", 56), p("Dragonair", 54), p("Dragonair", 54), p("Aerodactyl", 58), p("Dragonite", 60)] },
    ],
    champion: { name: "Blue", type: "mixed", pokemon: [p("Pidgeot", 59), p("Alakazam", 57), p("Rhydon", 59), p("Arcanine", 61), p("Exeggutor", 59), p("Gyarados", 61)] },
    legendaries: [
      { name: "Mewtwo", type: "psychic", location: "Cerulean Cave", notes: "Post-game" },
      { name: "Articuno", type: "ice", location: "Seafoam Islands" },
      { name: "Zapdos", type: "electric", location: "Power Plant" },
      { name: "Moltres", type: "fire", location: "Mt. Ember (One Island)" },
      { name: "Deoxys", type: "psychic", location: "Birth Island", notes: "Event only" },
    ],
    tips: [
      "These are the best way to experience Kanto with modern mechanics.",
      "The Sevii Islands are great for catching Johto Pokémon post-game.",
      "The VS Seeker lets you re-battle trainers for grinding.",
      "Fame Checker collects NPC lore — fun to complete.",
      "You need the National Dex to trade with Ruby/Sapphire/Emerald.",
    ],
  },

  /* ======================================================
   *  GENERATION IV
   * ====================================================== */
  {
    slug: "diamond-pearl",
    title: "Pokémon Diamond & Pearl",
    shortTitle: "Diamond & Pearl",
    generation: 4,
    region: "Sinnoh",
    platform: "Nintendo DS",
    releaseYear: 2006,
    color: "bg-indigo-500",
    accentColor: "text-indigo-600",
    starters: [
      { name: "Turtwig", type: "grass" },
      { name: "Chimchar", type: "fire" },
      { name: "Piplup", type: "water" },
    ],
    description:
      "Explore the Sinnoh region with the physical/special split, online trading via Wi-Fi, and the Underground for fossil hunting.",
    features: [
      "Physical/Special split",
      "Nintendo Wi-Fi trading & battles",
      "The Underground",
      "Pokétch watch apps",
      "Touch screen controls",
    ],
    gymLeaders: [
      { name: "Roark", type: "rock", badge: "Coal Badge", location: "Oreburgh City", pokemon: [p("Geodude", 12), p("Onix", 12), p("Cranidos", 14)] },
      { name: "Gardenia", type: "grass", badge: "Forest Badge", location: "Eterna City", pokemon: [p("Cherubi", 19), p("Turtwig", 19), p("Roserade", 22)] },
      { name: "Maylene", type: "fighting", badge: "Cobble Badge", location: "Veilstone City", pokemon: [p("Meditite", 27), p("Machoke", 27), p("Lucario", 30)] },
      { name: "Crasher Wake", type: "water", badge: "Fen Badge", location: "Pastoria City", pokemon: [p("Gyarados", 27), p("Quagsire", 27), p("Floatzel", 30)] },
      { name: "Fantina", type: "ghost", badge: "Relic Badge", location: "Hearthome City", pokemon: [p("Drifblim", 32), p("Gengar", 34), p("Mismagius", 36)] },
      { name: "Byron", type: "steel", badge: "Mine Badge", location: "Canalave City", pokemon: [p("Magneton", 36), p("Steelix", 36), p("Bastiodon", 39)] },
      { name: "Candice", type: "ice", badge: "Icicle Badge", location: "Snowpoint City", pokemon: [p("Sneasel", 38), p("Piloswine", 38), p("Abomasnow", 40), p("Froslass", 42)] },
      { name: "Volkner", type: "electric", badge: "Beacon Badge", location: "Sunyshore City", pokemon: [p("Raichu", 46), p("Ambipom", 47), p("Octillery", 47), p("Luxray", 49)] },
    ],
    eliteFour: [
      { name: "Aaron", type: "bug", pokemon: [p("Dustox", 53), p("Beautifly", 53), p("Vespiquen", 54), p("Heracross", 54), p("Drapion", 57)] },
      { name: "Bertha", type: "ground", pokemon: [p("Quagsire", 55), p("Sudowoodo", 56), p("Golem", 56), p("Whiscash", 55), p("Hippowdon", 59)] },
      { name: "Flint", type: "fire", pokemon: [p("Rapidash", 58), p("Steelix", 57), p("Drifblim", 58), p("Lopunny", 57), p("Infernape", 61)] },
      { name: "Lucian", type: "psychic", pokemon: [p("Mr. Mime", 59), p("Espeon", 58), p("Bronzong", 60), p("Alakazam", 60), p("Medicham", 59)] },
    ],
    champion: { name: "Cynthia", type: "mixed", pokemon: [p("Spiritomb", 61), p("Roserade", 60), p("Togekiss", 60), p("Lucario", 63), p("Milotic", 63), p("Garchomp", 66)] },
    legendaries: [
      { name: "Dialga", type: "steel", location: "Spear Pillar", notes: "Diamond only" },
      { name: "Palkia", type: "water", location: "Spear Pillar", notes: "Pearl only" },
      { name: "Heatran", type: "fire", location: "Stark Mountain", notes: "Post-game" },
      { name: "Giratina", type: "ghost", location: "Turnback Cave", notes: "Post-game" },
      { name: "Cresselia", type: "psychic", location: "Fullmoon Island", notes: "Roaming" },
      { name: "Uxie", type: "psychic", location: "Lake Acuity" },
      { name: "Mesprit", type: "psychic", location: "Lake Verity", notes: "Roaming" },
      { name: "Azelf", type: "psychic", location: "Lake Valor" },
    ],
    tips: [
      "Chimchar is the best starter — Sinnoh has very few Fire types otherwise.",
      "Cynthia is one of the hardest Champions ever — her Garchomp is devastating.",
      "The physical/special split is game-changing — check move categories!",
      "The Underground is great for finding fossils, spheres, and shards.",
      "Use the GTS in Jubilife to trade Pokémon online.",
    ],
  },

  {
    slug: "platinum",
    title: "Pokémon Platinum",
    shortTitle: "Platinum",
    generation: 4,
    region: "Sinnoh",
    platform: "Nintendo DS",
    releaseYear: 2008,
    color: "bg-gray-500",
    accentColor: "text-gray-600",
    starters: [
      { name: "Turtwig", type: "grass" },
      { name: "Chimchar", type: "fire" },
      { name: "Piplup", type: "water" },
    ],
    description:
      "The definitive Sinnoh experience with the Distortion World, Battle Frontier, expanded Pokédex, and Giratina's Origin Forme.",
    features: [
      "Distortion World dungeon",
      "Giratina Origin Forme",
      "Battle Frontier",
      "Expanded Sinnoh Dex",
      "Wi-Fi Plaza",
    ],
    gymLeaders: [
      { name: "Roark", type: "rock", badge: "Coal Badge", location: "Oreburgh City", pokemon: [p("Geodude", 12), p("Onix", 12), p("Cranidos", 14)] },
      { name: "Gardenia", type: "grass", badge: "Forest Badge", location: "Eterna City", pokemon: [p("Cherubi", 19), p("Turtwig", 19), p("Roserade", 22)] },
      { name: "Fantina", type: "ghost", badge: "Relic Badge", location: "Hearthome City", pokemon: [p("Duskull", 24), p("Haunter", 24), p("Mismagius", 26)] },
      { name: "Maylene", type: "fighting", badge: "Cobble Badge", location: "Veilstone City", pokemon: [p("Meditite", 28), p("Machoke", 29), p("Lucario", 32)] },
      { name: "Crasher Wake", type: "water", badge: "Fen Badge", location: "Pastoria City", pokemon: [p("Gyarados", 33), p("Quagsire", 34), p("Floatzel", 37)] },
      { name: "Byron", type: "steel", badge: "Mine Badge", location: "Canalave City", pokemon: [p("Magneton", 37), p("Steelix", 38), p("Bastiodon", 41)] },
      { name: "Candice", type: "ice", badge: "Icicle Badge", location: "Snowpoint City", pokemon: [p("Sneasel", 40), p("Piloswine", 40), p("Abomasnow", 42), p("Froslass", 44)] },
      { name: "Volkner", type: "electric", badge: "Beacon Badge", location: "Sunyshore City", pokemon: [p("Jolteon", 46), p("Raichu", 46), p("Luxray", 48), p("Electivire", 50)] },
    ],
    eliteFour: [
      { name: "Aaron", type: "bug", pokemon: [p("Yanmega", 49), p("Scizor", 49), p("Vespiquen", 50), p("Heracross", 51), p("Drapion", 53)] },
      { name: "Bertha", type: "ground", pokemon: [p("Whiscash", 50), p("Gliscor", 53), p("Golem", 52), p("Rhyperior", 52), p("Hippowdon", 55)] },
      { name: "Flint", type: "fire", pokemon: [p("Houndoom", 52), p("Flareon", 55), p("Rapidash", 53), p("Infernape", 55), p("Magmortar", 57)] },
      { name: "Lucian", type: "psychic", pokemon: [p("Mr. Mime", 53), p("Espeon", 55), p("Bronzong", 54), p("Alakazam", 56), p("Gallade", 59)] },
    ],
    champion: { name: "Cynthia", type: "mixed", pokemon: [p("Spiritomb", 58), p("Roserade", 58), p("Togekiss", 60), p("Lucario", 60), p("Milotic", 58), p("Garchomp", 62)] },
    legendaries: [
      { name: "Giratina", type: "ghost", location: "Distortion World", notes: "Story encounter, Origin Forme" },
      { name: "Dialga", type: "steel", location: "Spear Pillar", notes: "Post-game" },
      { name: "Palkia", type: "water", location: "Spear Pillar", notes: "Post-game" },
      { name: "Heatran", type: "fire", location: "Stark Mountain" },
      { name: "Regigigas", type: "normal", location: "Snowpoint Temple", notes: "Requires Regi trio" },
      { name: "Cresselia", type: "psychic", location: "Fullmoon Island", notes: "Roaming" },
    ],
    tips: [
      "Platinum fixes Diamond/Pearl's slow speed and limited Fire types.",
      "The Distortion World is one of the coolest dungeons in the series.",
      "You can catch both Dialga and Palkia in the post-game!",
      "Battle Frontier has 5 facilities — a huge post-game challenge.",
      "The Vs. Recorder lets you save and share battle videos online.",
    ],
  },

  {
    slug: "heartgold-soulsilver",
    title: "Pokémon HeartGold & SoulSilver",
    shortTitle: "HeartGold & SoulSilver",
    generation: 4,
    region: "Johto",
    platform: "Nintendo DS",
    releaseYear: 2009,
    color: "bg-amber-600",
    accentColor: "text-amber-700",
    starters: [
      { name: "Chikorita", type: "grass" },
      { name: "Cyndaquil", type: "fire" },
      { name: "Totodile", type: "water" },
    ],
    description:
      "Beloved remakes of Gold & Silver with the Pokéwalker pedometer, following Pokémon, and all the quality-of-life features of Gen IV.",
    features: [
      "Pokémon follow you outside their Poké Balls",
      "Pokéwalker accessory",
      "16 badges (Johto + Kanto)",
      "Battle Frontier",
      "Safari Zone customization",
    ],
    gymLeaders: [
      { name: "Falkner", type: "flying", badge: "Zephyr Badge", location: "Violet City", pokemon: [p("Pidgey", 9), p("Pidgeotto", 13)] },
      { name: "Bugsy", type: "bug", badge: "Hive Badge", location: "Azalea Town", pokemon: [p("Metapod", 15), p("Kakuna", 15), p("Scyther", 17)] },
      { name: "Whitney", type: "normal", badge: "Plain Badge", location: "Goldenrod City", pokemon: [p("Clefairy", 17), p("Miltank", 19)] },
      { name: "Morty", type: "ghost", badge: "Fog Badge", location: "Ecruteak City", pokemon: [p("Gastly", 21), p("Haunter", 21), p("Haunter", 23), p("Gengar", 25)] },
      { name: "Chuck", type: "fighting", badge: "Storm Badge", location: "Cianwood City", pokemon: [p("Primeape", 29), p("Poliwrath", 31)] },
      { name: "Jasmine", type: "steel", badge: "Mineral Badge", location: "Olivine City", pokemon: [p("Magnemite", 30), p("Magnemite", 30), p("Steelix", 35)] },
      { name: "Pryce", type: "ice", badge: "Glacier Badge", location: "Mahogany Town", pokemon: [p("Seel", 30), p("Dewgong", 32), p("Piloswine", 34)] },
      { name: "Clair", type: "dragon", badge: "Rising Badge", location: "Blackthorn City", pokemon: [p("Gyarados", 38), p("Dragonair", 38), p("Dragonair", 38), p("Kingdra", 41)] },
    ],
    eliteFour: [
      { name: "Will", type: "psychic", pokemon: [p("Xatu", 40), p("Jynx", 41), p("Slowbro", 41), p("Exeggutor", 41), p("Xatu", 42)] },
      { name: "Koga", type: "poison", pokemon: [p("Ariados", 40), p("Forretress", 43), p("Muk", 42), p("Venomoth", 41), p("Crobat", 44)] },
      { name: "Bruno", type: "fighting", pokemon: [p("Hitmontop", 42), p("Hitmonlee", 42), p("Hitmonchan", 42), p("Onix", 43), p("Machamp", 46)] },
      { name: "Karen", type: "dark", pokemon: [p("Umbreon", 42), p("Vileplume", 42), p("Gengar", 45), p("Murkrow", 44), p("Houndoom", 47)] },
    ],
    champion: { name: "Lance", type: "dragon", pokemon: [p("Gyarados", 46), p("Dragonite", 49), p("Dragonite", 49), p("Aerodactyl", 48), p("Charizard", 48), p("Dragonite", 50)] },
    legendaries: [
      { name: "Ho-Oh", type: "fire", location: "Bell Tower", notes: "HeartGold (post-game in SoulSilver)" },
      { name: "Lugia", type: "psychic", location: "Whirl Islands", notes: "SoulSilver (post-game in HeartGold)" },
      { name: "Suicune", type: "water", location: "Route 25 / Cerulean Cape" },
      { name: "Raikou", type: "electric", location: "Roaming Johto" },
      { name: "Entei", type: "fire", location: "Roaming Johto" },
      { name: "Groudon", type: "ground", location: "Embedded Tower", notes: "SoulSilver only" },
      { name: "Kyogre", type: "water", location: "Embedded Tower", notes: "HeartGold only" },
      { name: "Rayquaza", type: "dragon", location: "Embedded Tower", notes: "Have both Groudon and Kyogre" },
    ],
    tips: [
      "Often considered the best Pokémon games ever made.",
      "Your lead Pokémon follows you — interact for happiness boosts!",
      "The Pokéwalker lets you level up and catch Pokémon on the go.",
      "Red on Mt. Silver has a Lv. 88 Pikachu — his team is brutal!",
      "You can get Kanto AND Hoenn starters from Steven Stone post-game.",
    ],
  },

  /* ======================================================
   *  GENERATION V
   * ====================================================== */
  {
    slug: "black-white",
    title: "Pokémon Black & White",
    shortTitle: "Black & White",
    generation: 5,
    region: "Unova",
    platform: "Nintendo DS",
    releaseYear: 2010,
    color: "bg-neutral-800",
    accentColor: "text-neutral-700",
    starters: [
      { name: "Snivy", type: "grass" },
      { name: "Tepig", type: "fire" },
      { name: "Oshawott", type: "water" },
    ],
    description:
      "A bold fresh start with 156 brand-new Pokémon and the deepest story in the series. Only new Pokémon appear until post-game.",
    features: [
      "156 new Pokémon (all-new until post-game)",
      "Triple & Rotation Battles",
      "Seasons system",
      "Animated battle sprites",
      "Deepest story with N and Team Plasma",
    ],
    gymLeaders: [
      { name: "Cilan/Chili/Cress", type: "grass/fire/water", badge: "Trio Badge", location: "Striaton City", pokemon: [p("Lillipup", 12), p("Pansage/Pansear/Panpour", 14)] },
      { name: "Lenora", type: "normal", badge: "Basic Badge", location: "Nacrene City", pokemon: [p("Herdier", 18), p("Watchog", 20)] },
      { name: "Burgh", type: "bug", badge: "Insect Badge", location: "Castelia City", pokemon: [p("Whirlipede", 21), p("Dwebble", 21), p("Leavanny", 23)] },
      { name: "Elesa", type: "electric", badge: "Bolt Badge", location: "Nimbasa City", pokemon: [p("Emolga", 25), p("Emolga", 25), p("Zebstrika", 27)] },
      { name: "Clay", type: "ground", badge: "Quake Badge", location: "Driftveil City", pokemon: [p("Krokorok", 29), p("Palpitoad", 29), p("Excadrill", 31)] },
      { name: "Skyla", type: "flying", badge: "Jet Badge", location: "Mistralton City", pokemon: [p("Swoobat", 33), p("Unfezant", 33), p("Swanna", 35)] },
      { name: "Brycen", type: "ice", badge: "Freeze Badge", location: "Icirrus City", pokemon: [p("Vanillish", 37), p("Cryogonal", 37), p("Beartic", 39)] },
      { name: "Drayden/Iris", type: "dragon", badge: "Legend Badge", location: "Opelucid City", pokemon: [p("Fraxure", 41), p("Druddigon", 41), p("Haxorus", 43)] },
    ],
    eliteFour: [
      { name: "Shauntal", type: "ghost", pokemon: [p("Cofagrigus", 48), p("Jellicent", 48), p("Golurk", 48), p("Chandelure", 50)] },
      { name: "Grimsley", type: "dark", pokemon: [p("Scrafty", 48), p("Krookodile", 48), p("Liepard", 48), p("Bisharp", 50)] },
      { name: "Caitlin", type: "psychic", pokemon: [p("Reuniclus", 48), p("Musharna", 48), p("Sigilyph", 48), p("Gothitelle", 50)] },
      { name: "Marshal", type: "fighting", pokemon: [p("Throh", 48), p("Sawk", 48), p("Conkeldurr", 48), p("Mienshao", 50)] },
    ],
    champion: { name: "N → Alder", type: "mixed", pokemon: [p("Reshiram/Zekrom", 50), p("Carracosta", 50), p("Archeops", 50), p("Vanilluxe", 50), p("Zoroark", 50), p("Klinklang", 50)] },
    legendaries: [
      { name: "Reshiram", type: "fire", location: "N's Castle", notes: "Black version" },
      { name: "Zekrom", type: "electric", location: "N's Castle", notes: "White version" },
      { name: "Kyurem", type: "ice", location: "Giant Chasm", notes: "Post-game" },
      { name: "Cobalion", type: "steel", location: "Mistralton Cave" },
      { name: "Terrakion", type: "rock", location: "Victory Road" },
      { name: "Virizion", type: "grass", location: "Pinwheel Forest" },
      { name: "Tornadus", type: "flying", location: "Roaming Unova", notes: "Black only" },
      { name: "Thundurus", type: "electric", location: "Roaming Unova", notes: "White only" },
      { name: "Landorus", type: "ground", location: "Abundant Shrine", notes: "Requires both Tornadus & Thundurus" },
    ],
    tips: [
      "N's story is widely considered the best in the entire Pokémon series.",
      "Only Gen V Pokémon are available until post-game — embrace the new roster!",
      "The Exp. Share is a held item again — plan who gets EXP carefully.",
      "Audino gives huge EXP — look for rustling grass to grind efficiently.",
      "The Dreamyard has great post-game Pokémon.",
    ],
  },

  {
    slug: "black2-white2",
    title: "Pokémon Black 2 & White 2",
    shortTitle: "Black 2 & White 2",
    generation: 5,
    region: "Unova",
    platform: "Nintendo DS",
    releaseYear: 2012,
    color: "bg-zinc-700",
    accentColor: "text-zinc-600",
    starters: [
      { name: "Snivy", type: "grass" },
      { name: "Tepig", type: "fire" },
      { name: "Oshawott", type: "water" },
    ],
    description:
      "True sequels set 2 years after Black & White. New areas, a new story with Neo Team Plasma, and Pokémon from all generations available.",
    features: [
      "Direct sequels (not a third version)",
      "Pokémon World Tournament",
      "Pokéstar Studios",
      "Memory Link with B/W",
      "Pokémon from all gens available",
    ],
    gymLeaders: [
      { name: "Cheren", type: "normal", badge: "Basic Badge", location: "Aspertia City", pokemon: [p("Patrat", 11), p("Lillipup", 13)] },
      { name: "Roxie", type: "poison", badge: "Toxic Badge", location: "Virbank City", pokemon: [p("Koffing", 16), p("Whirlipede", 18)] },
      { name: "Burgh", type: "bug", badge: "Insect Badge", location: "Castelia City", pokemon: [p("Swadloon", 22), p("Dwebble", 22), p("Leavanny", 24)] },
      { name: "Elesa", type: "electric", badge: "Bolt Badge", location: "Nimbasa City", pokemon: [p("Emolga", 28), p("Flaaffy", 28), p("Zebstrika", 30)] },
      { name: "Clay", type: "ground", badge: "Quake Badge", location: "Driftveil City", pokemon: [p("Krokorok", 31), p("Sandslash", 31), p("Excadrill", 33)] },
      { name: "Skyla", type: "flying", badge: "Jet Badge", location: "Mistralton City", pokemon: [p("Swoobat", 37), p("Skarmory", 37), p("Swanna", 39)] },
      { name: "Drayden", type: "dragon", badge: "Legend Badge", location: "Opelucid City", pokemon: [p("Druddigon", 46), p("Flygon", 46), p("Haxorus", 48)] },
      { name: "Marlon", type: "water", badge: "Wave Badge", location: "Humilau City", pokemon: [p("Carracosta", 49), p("Wailord", 49), p("Jellicent", 51)] },
    ],
    eliteFour: [
      { name: "Shauntal", type: "ghost", pokemon: [p("Cofagrigus", 56), p("Golurk", 56), p("Drifblim", 56), p("Chandelure", 58)] },
      { name: "Grimsley", type: "dark", pokemon: [p("Liepard", 56), p("Scrafty", 56), p("Krookodile", 56), p("Bisharp", 58)] },
      { name: "Caitlin", type: "psychic", pokemon: [p("Musharna", 56), p("Reuniclus", 56), p("Sigilyph", 56), p("Gothitelle", 58)] },
      { name: "Marshal", type: "fighting", pokemon: [p("Throh", 56), p("Sawk", 56), p("Mienshao", 56), p("Conkeldurr", 58)] },
    ],
    champion: { name: "Iris", type: "dragon", pokemon: [p("Hydreigon", 57), p("Druddigon", 57), p("Aggron", 57), p("Archeops", 57), p("Lapras", 57), p("Haxorus", 59)] },
    legendaries: [
      { name: "Black Kyurem", type: "ice", location: "Giant Chasm", notes: "Black 2 only" },
      { name: "White Kyurem", type: "ice", location: "Giant Chasm", notes: "White 2 only" },
      { name: "Latios", type: "dragon", location: "Dreamyard", notes: "Black 2 only" },
      { name: "Latias", type: "psychic", location: "Dreamyard", notes: "White 2 only" },
      { name: "Cobalion", type: "steel", location: "Route 13" },
      { name: "Terrakion", type: "rock", location: "Route 22" },
      { name: "Virizion", type: "grass", location: "Route 11" },
      { name: "Heatran", type: "fire", location: "Reversal Mountain" },
      { name: "Regigigas", type: "normal", location: "Twist Mountain", notes: "Requires Regi trio" },
      { name: "Cresselia", type: "psychic", location: "Marvelous Bridge" },
    ],
    tips: [
      "The Pokémon World Tournament lets you battle EVERY past Champion and Gym Leader!",
      "Memory Link connects your B/W save for flashback scenes.",
      "Iris is now Champion instead of Alder — and she's tough!",
      "Hidden Grottos can contain Pokémon with Hidden Abilities.",
      "Join Avenue becomes incredibly useful when leveled up.",
    ],
  },

  /* ======================================================
   *  GENERATION VI
   * ====================================================== */
  {
    slug: "x-y",
    title: "Pokémon X & Y",
    shortTitle: "X & Y",
    generation: 6,
    region: "Kalos",
    platform: "Nintendo 3DS",
    releaseYear: 2013,
    color: "bg-blue-600",
    accentColor: "text-blue-600",
    starters: [
      { name: "Chespin", type: "grass" },
      { name: "Fennekin", type: "fire" },
      { name: "Froakie", type: "water" },
    ],
    description:
      "The first 3D mainline Pokémon games. Explore the France-inspired Kalos region with Mega Evolution and the Fairy type.",
    features: [
      "Full 3D graphics",
      "Mega Evolution introduced",
      "Fairy type introduced",
      "Pokémon-Amie (pet your Pokémon)",
      "Super Training (EV training)",
      "Player customization",
    ],
    gymLeaders: [
      { name: "Viola", type: "bug", badge: "Bug Badge", location: "Santalune City", pokemon: [p("Surskit", 10), p("Vivillon", 12)] },
      { name: "Grant", type: "rock", badge: "Cliff Badge", location: "Cyllage City", pokemon: [p("Amaura", 25), p("Tyrunt", 25)] },
      { name: "Korrina", type: "fighting", badge: "Rumble Badge", location: "Shalour City", pokemon: [p("Mienfoo", 29), p("Machoke", 28), p("Hawlucha", 32)] },
      { name: "Ramos", type: "grass", badge: "Plant Badge", location: "Coumarine City", pokemon: [p("Jumpluff", 30), p("Weepinbell", 31), p("Gogoat", 34)] },
      { name: "Clemont", type: "electric", badge: "Voltage Badge", location: "Lumiose City", pokemon: [p("Emolga", 35), p("Magneton", 35), p("Heliolisk", 37)] },
      { name: "Valerie", type: "fairy", badge: "Fairy Badge", location: "Laverre City", pokemon: [p("Mawile", 38), p("Mr. Mime", 39), p("Sylveon", 42)] },
      { name: "Olympia", type: "psychic", badge: "Psychic Badge", location: "Anistar City", pokemon: [p("Sigilyph", 44), p("Slowking", 45), p("Meowstic", 48)] },
      { name: "Wulfric", type: "ice", badge: "Iceberg Badge", location: "Snowbelle City", pokemon: [p("Abomasnow", 56), p("Cryogonal", 55), p("Avalugg", 59)] },
    ],
    eliteFour: [
      { name: "Malva", type: "fire", pokemon: [p("Pyroar", 63), p("Torkoal", 63), p("Chandelure", 63), p("Talonflame", 65)] },
      { name: "Siebold", type: "water", pokemon: [p("Clawitzer", 63), p("Gyarados", 63), p("Starmie", 63), p("Barbaracle", 65)] },
      { name: "Wikstrom", type: "steel", pokemon: [p("Klefki", 63), p("Probopass", 63), p("Scizor", 63), p("Aegislash", 65)] },
      { name: "Drasna", type: "dragon", pokemon: [p("Dragalge", 63), p("Druddigon", 63), p("Altaria", 63), p("Noivern", 65)] },
    ],
    champion: { name: "Diantha", type: "mixed", pokemon: [p("Hawlucha", 64), p("Tyrantrum", 65), p("Aurorus", 65), p("Gourgeist", 65), p("Goodra", 66), p("Gardevoir", 68)] },
    legendaries: [
      { name: "Xerneas", type: "fairy", location: "Team Flare Secret HQ", notes: "X version" },
      { name: "Yveltal", type: "dark", location: "Team Flare Secret HQ", notes: "Y version" },
      { name: "Zygarde", type: "dragon", location: "Terminus Cave", notes: "Post-game" },
      { name: "Mewtwo", type: "psychic", location: "Pokémon Village", notes: "Can Mega Evolve" },
      { name: "Articuno/Zapdos/Moltres", type: "various", location: "Roaming Kalos", notes: "Based on starter choice" },
    ],
    tips: [
      "Mega Evolution changes the game — look for Mega Stones throughout Kalos.",
      "Froakie → Greninja is one of the most popular Pokémon ever.",
      "The Exp. Share now gives EXP to your whole party — game is easier.",
      "Super Training is the easiest way to EV train Pokémon.",
      "You can get a Kanto starter (with Mega Stone) from Professor Sycamore.",
      "Lumiose City's café battles are great for grinding money.",
    ],
  },

  {
    slug: "omega-ruby-alpha-sapphire",
    title: "Pokémon Omega Ruby & Alpha Sapphire",
    shortTitle: "Omega Ruby & Alpha Sapphire",
    generation: 6,
    region: "Hoenn",
    platform: "Nintendo 3DS",
    releaseYear: 2014,
    color: "bg-red-700",
    accentColor: "text-red-700",
    starters: [
      { name: "Treecko", type: "grass" },
      { name: "Torchic", type: "fire" },
      { name: "Mudkip", type: "water" },
    ],
    description:
      "Gorgeous 3DS remakes of Ruby & Sapphire with Mega Evolutions, Primal Reversions, and the Delta Episode featuring Mega Rayquaza.",
    features: [
      "Primal Reversion (Groudon/Kyogre)",
      "Mega Rayquaza",
      "Delta Episode post-game",
      "Soaring on Latios/Latias",
      "DexNav for hidden Pokémon",
    ],
    gymLeaders: [
      { name: "Roxanne", type: "rock", badge: "Stone Badge", location: "Rustboro City", pokemon: [p("Geodude", 12), p("Geodude", 12), p("Nosepass", 14)] },
      { name: "Brawly", type: "fighting", badge: "Knuckle Badge", location: "Dewford Town", pokemon: [p("Machop", 14), p("Meditite", 14), p("Makuhita", 16)] },
      { name: "Wattson", type: "electric", badge: "Dynamo Badge", location: "Mauville City", pokemon: [p("Magnemite", 19), p("Voltorb", 19), p("Magneton", 21)] },
      { name: "Flannery", type: "fire", badge: "Heat Badge", location: "Lavaridge Town", pokemon: [p("Slugma", 26), p("Numel", 26), p("Torkoal", 28)] },
      { name: "Norman", type: "normal", badge: "Balance Badge", location: "Petalburg City", pokemon: [p("Spinda", 28), p("Vigoroth", 28), p("Linoone", 28), p("Slaking", 30)] },
      { name: "Winona", type: "flying", badge: "Feather Badge", location: "Fortree City", pokemon: [p("Swellow", 33), p("Pelipper", 33), p("Skarmory", 33), p("Altaria", 35)] },
      { name: "Tate & Liza", type: "psychic", badge: "Mind Badge", location: "Mossdeep City", pokemon: [p("Lunatone", 45), p("Solrock", 45)] },
      { name: "Wallace", type: "water", badge: "Rain Badge", location: "Sootopolis City", pokemon: [p("Luvdisc", 44), p("Whiscash", 44), p("Sealeo", 44), p("Seaking", 44), p("Milotic", 46)] },
    ],
    eliteFour: [
      { name: "Sidney", type: "dark", pokemon: [p("Mightyena", 50), p("Shiftry", 50), p("Cacturne", 50), p("Sharpedo", 50), p("Absol", 52)] },
      { name: "Phoebe", type: "ghost", pokemon: [p("Dusclops", 51), p("Banette", 51), p("Sableye", 51), p("Banette", 51), p("Dusknoir", 53)] },
      { name: "Glacia", type: "ice", pokemon: [p("Glalie", 52), p("Froslass", 52), p("Glalie", 52), p("Froslass", 52), p("Walrein", 54)] },
      { name: "Drake", type: "dragon", pokemon: [p("Altaria", 53), p("Flygon", 53), p("Flygon", 53), p("Kingdra", 53), p("Salamence", 55)] },
    ],
    champion: { name: "Steven", type: "steel", pokemon: [p("Skarmory", 57), p("Claydol", 57), p("Aggron", 57), p("Cradily", 57), p("Armaldo", 57), p("Metagross", 59)] },
    legendaries: [
      { name: "Primal Groudon", type: "ground", location: "Cave of Origin", notes: "Omega Ruby" },
      { name: "Primal Kyogre", type: "water", location: "Cave of Origin", notes: "Alpha Sapphire" },
      { name: "Mega Rayquaza", type: "dragon", location: "Sky Pillar", notes: "Delta Episode" },
      { name: "Deoxys", type: "psychic", location: "Space", notes: "Delta Episode, catchable in-game!" },
      { name: "Latios/Latias", type: "dragon", location: "Southern Island", notes: "Soar with them" },
    ],
    tips: [
      "The Delta Episode is an amazing post-game story — you fly into space on Mega Rayquaza!",
      "DexNav lets you find Pokémon with hidden abilities and egg moves in the wild.",
      "Soaring on Latios/Latias lets you access mirage spots with rare legendaries.",
      "You can catch almost every legendary Pokémon ever through mirage spots!",
      "Mega Rayquaza doesn't need a held item to Mega Evolve — it just needs Dragon Ascent.",
    ],
  },

  /* ======================================================
   *  GENERATION VII
   * ====================================================== */
  {
    slug: "sun-moon",
    title: "Pokémon Sun & Moon",
    shortTitle: "Sun & Moon",
    generation: 7,
    region: "Alola",
    platform: "Nintendo 3DS",
    releaseYear: 2016,
    color: "bg-orange-500",
    accentColor: "text-orange-600",
    starters: [
      { name: "Rowlet", type: "grass" },
      { name: "Litten", type: "fire" },
      { name: "Popplio", type: "water" },
    ],
    description:
      "A tropical Hawaii-inspired adventure replacing Gyms with Island Trials. Features regional forms, Z-Moves, and Ultra Beasts.",
    features: [
      "Island Trials replace Gyms",
      "Z-Moves",
      "Alolan regional forms",
      "Poké Pelago",
      "Festival Plaza online hub",
      "No HMs — Poké Ride replaces them",
    ],
    gymLeaders: [
      { name: "Ilima", type: "normal", badge: "Normalium Z", location: "Verdant Cavern", pokemon: [p("Yungoos/Alolan Raticate", 12), p("Gumshoos/Alolan Raticate", 12)] },
      { name: "Lana", type: "water", badge: "Waterium Z", location: "Brooklet Hill", pokemon: [p("Wishiwashi", 20)] },
      { name: "Kiawe", type: "fire", badge: "Firium Z", location: "Wela Volcano Park", pokemon: [p("Alolan Marowak", 22)] },
      { name: "Mallow", type: "grass", badge: "Grassium Z", location: "Lush Jungle", pokemon: [p("Lurantis", 24)] },
      { name: "Sophocles", type: "electric", badge: "Electrium Z", location: "Hokulani Observatory", pokemon: [p("Togedemaru", 29)] },
      { name: "Acerola", type: "ghost", badge: "Ghostium Z", location: "Thrifty Megamart", pokemon: [p("Mimikyu", 33)] },
      { name: "Vast Poni Canyon", type: "dragon", badge: "Dragonium Z", location: "Vast Poni Canyon", pokemon: [p("Jangmo-o", 40), p("Hakamo-o", 40), p("Kommo-o", 45)] },
    ],
    eliteFour: [
      { name: "Hala", type: "fighting", pokemon: [p("Hariyama", 54), p("Primeape", 54), p("Bewear", 54), p("Poliwrath", 54), p("Crabominable", 55)] },
      { name: "Olivia", type: "rock", pokemon: [p("Relicanth", 54), p("Carbink", 54), p("Golem", 54), p("Probopass", 54), p("Lycanroc", 55)] },
      { name: "Acerola", type: "ghost", pokemon: [p("Sableye", 54), p("Drifblim", 54), p("Dhelmise", 54), p("Froslass", 54), p("Palossand", 55)] },
      { name: "Kahili", type: "flying", pokemon: [p("Skarmory", 54), p("Crobat", 54), p("Oricorio", 54), p("Mandibuzz", 54), p("Toucannon", 55)] },
    ],
    champion: { name: "Professor Kukui", type: "mixed", pokemon: [p("Lycanroc", 57), p("Magnezone", 56), p("Braviary", 56), p("Alolan Ninetales", 56), p("Snorlax", 56), p("Incineroar", 58)] },
    legendaries: [
      { name: "Solgaleo", type: "psychic", location: "Altar of the Sunne", notes: "Sun version" },
      { name: "Lunala", type: "psychic", location: "Altar of the Moone", notes: "Moon version" },
      { name: "Tapu Koko", type: "electric", location: "Ruins of Conflict" },
      { name: "Tapu Lele", type: "psychic", location: "Ruins of Life" },
      { name: "Tapu Bulu", type: "grass", location: "Ruins of Abundance" },
      { name: "Tapu Fini", type: "water", location: "Ruins of Hope" },
      { name: "Necrozma", type: "psychic", location: "Ten Carat Hill", notes: "Post-game" },
    ],
    tips: [
      "Trials replace Gyms — Totem Pokémon are boosted and call for help!",
      "Z-Moves are once per battle — save them for tough fights.",
      "Alolan forms give classic Pokémon new types and designs.",
      "SOS battles (wild Pokémon calling for help) are great for shiny hunting.",
      "The Poké Pelago is fantastic for passive berry farming and EV training.",
    ],
  },

  {
    slug: "ultra-sun-ultra-moon",
    title: "Pokémon Ultra Sun & Ultra Moon",
    shortTitle: "Ultra Sun & Ultra Moon",
    generation: 7,
    region: "Alola",
    platform: "Nintendo 3DS",
    releaseYear: 2017,
    color: "bg-orange-600",
    accentColor: "text-orange-700",
    starters: [
      { name: "Rowlet", type: "grass" },
      { name: "Litten", type: "fire" },
      { name: "Popplio", type: "water" },
    ],
    description:
      "Enhanced versions with Ultra Wormholes, Necrozma as the main antagonist, and the ability to catch nearly every legendary through portals.",
    features: [
      "Ultra Wormholes & Ultra Space",
      "Ultra Necrozma boss fight",
      "Nearly every legendary catchable",
      "Mantine Surf minigame",
      "Team Rainbow Rocket post-game",
    ],
    gymLeaders: [
      { name: "Ilima", type: "normal", badge: "Normalium Z", location: "Verdant Cavern", pokemon: [p("Yungoos/Alolan Raticate", 12), p("Gumshoos/Alolan Raticate", 12)] },
      { name: "Lana", type: "water", badge: "Waterium Z", location: "Brooklet Hill", pokemon: [p("Wishiwashi", 20)] },
      { name: "Kiawe", type: "fire", badge: "Firium Z", location: "Wela Volcano Park", pokemon: [p("Alolan Marowak", 22)] },
      { name: "Mallow", type: "grass", badge: "Grassium Z", location: "Lush Jungle", pokemon: [p("Lurantis", 24)] },
      { name: "Sophocles", type: "electric", badge: "Electrium Z", location: "Hokulani Observatory", pokemon: [p("Togedemaru", 29)] },
      { name: "Acerola", type: "ghost", badge: "Ghostium Z", location: "Thrifty Megamart", pokemon: [p("Mimikyu", 33)] },
      { name: "Vast Poni Canyon", type: "dragon", badge: "Dragonium Z", location: "Vast Poni Canyon", pokemon: [p("Jangmo-o", 40), p("Hakamo-o", 40), p("Kommo-o", 45)] },
    ],
    eliteFour: [
      { name: "Molayne", type: "steel", pokemon: [p("Klefki", 56), p("Bisharp", 56), p("Magnezone", 56), p("Metagross", 56), p("Dugtrio", 57)] },
      { name: "Olivia", type: "rock", pokemon: [p("Armaldo", 56), p("Cradily", 56), p("Gigalith", 56), p("Probopass", 56), p("Lycanroc", 57)] },
      { name: "Acerola", type: "ghost", pokemon: [p("Banette", 56), p("Drifblim", 56), p("Dhelmise", 56), p("Froslass", 56), p("Palossand", 57)] },
      { name: "Kahili", type: "flying", pokemon: [p("Braviary", 56), p("Hawlucha", 56), p("Oricorio", 56), p("Mandibuzz", 56), p("Toucannon", 57)] },
    ],
    champion: { name: "Hau", type: "mixed", pokemon: [p("Alolan Raichu", 59), p("Tauros", 58), p("Crabominable", 58), p("Flareon", 58), p("Noivern", 58), p("Primarina", 60)] },
    legendaries: [
      { name: "Ultra Necrozma", type: "psychic", location: "Megalo Tower", notes: "Story boss — extremely powerful" },
      { name: "Solgaleo", type: "psychic", location: "Mahalo Trail", notes: "Ultra Sun" },
      { name: "Lunala", type: "psychic", location: "Mahalo Trail", notes: "Ultra Moon" },
      { name: "Nearly all legendaries", type: "various", location: "Ultra Wormholes", notes: "Catch past legendaries!" },
    ],
    tips: [
      "Ultra Necrozma is one of the hardest boss fights in Pokémon history. Come prepared!",
      "Ultra Wormholes let you catch legendaries from every generation!",
      "Team Rainbow Rocket features every villain leader from past games.",
      "Mantine Surf is surprisingly fun and gives BP rewards.",
      "A Zoroark with Toxic can cheese Ultra Necrozma by using Illusion.",
    ],
  },

  {
    slug: "lets-go",
    title: "Pokémon Let's Go, Pikachu! & Eevee!",
    shortTitle: "Let's Go Pikachu & Eevee",
    generation: 7,
    region: "Kanto",
    platform: "Nintendo Switch",
    releaseYear: 2018,
    color: "bg-yellow-400",
    accentColor: "text-yellow-600",
    starters: [
      { name: "Pikachu", type: "electric" },
      { name: "Eevee", type: "normal" },
    ],
    description:
      "A casual-friendly Kanto remake with Pokémon GO catching mechanics, co-op play, and HD console graphics. Great for newcomers.",
    features: [
      "Pokémon GO catching mechanic",
      "Pokémon visible in overworld",
      "Co-op multiplayer",
      "Ride Pokémon",
      "Poké Ball Plus controller",
      "Transfer from Pokémon GO",
    ],
    gymLeaders: [
      { name: "Brock", type: "rock", badge: "Boulder Badge", location: "Pewter City", pokemon: [p("Geodude", 11), p("Onix", 12)] },
      { name: "Misty", type: "water", badge: "Cascade Badge", location: "Cerulean City", pokemon: [p("Psyduck", 18), p("Starmie", 19)] },
      { name: "Lt. Surge", type: "electric", badge: "Thunder Badge", location: "Vermilion City", pokemon: [p("Voltorb", 25), p("Magnemite", 25), p("Raichu", 26)] },
      { name: "Erika", type: "grass", badge: "Rainbow Badge", location: "Celadon City", pokemon: [p("Tangela", 33), p("Weepinbell", 33), p("Vileplume", 34)] },
      { name: "Koga", type: "poison", badge: "Soul Badge", location: "Fuchsia City", pokemon: [p("Weezing", 43), p("Muk", 43), p("Golbat", 43), p("Venomoth", 44)] },
      { name: "Sabrina", type: "psychic", badge: "Marsh Badge", location: "Saffron City", pokemon: [p("Mr. Mime", 43), p("Slowbro", 43), p("Jynx", 43), p("Alakazam", 44)] },
      { name: "Blaine", type: "fire", badge: "Volcano Badge", location: "Cinnabar Island", pokemon: [p("Magmar", 47), p("Rapidash", 47), p("Arcanine", 48)] },
      { name: "Giovanni", type: "ground", badge: "Earth Badge", location: "Viridian City", pokemon: [p("Dugtrio", 49), p("Nidoqueen", 49), p("Nidoking", 49), p("Rhydon", 50)] },
    ],
    eliteFour: [
      { name: "Lorelei", type: "ice", pokemon: [p("Dewgong", 51), p("Cloyster", 51), p("Slowbro", 51), p("Jynx", 52), p("Lapras", 52)] },
      { name: "Bruno", type: "fighting", pokemon: [p("Onix", 52), p("Hitmonlee", 52), p("Hitmonchan", 52), p("Poliwrath", 52), p("Machamp", 53)] },
      { name: "Agatha", type: "ghost", pokemon: [p("Arbok", 53), p("Gengar", 53), p("Golbat", 53), p("Weezing", 53), p("Gengar", 54)] },
      { name: "Lance", type: "dragon", pokemon: [p("Seadra", 54), p("Aerodactyl", 54), p("Gyarados", 54), p("Charizard", 54), p("Dragonite", 55)] },
    ],
    champion: { name: "Rival (Trace)", type: "mixed", pokemon: [p("Pidgeot", 56), p("Vileplume", 56), p("Marowak", 56), p("Rapidash", 56), p("Slowbro", 56), p("Jolteon", 57)] },
    legendaries: [
      { name: "Mewtwo", type: "psychic", location: "Cerulean Cave", notes: "Post-game" },
      { name: "Articuno", type: "ice", location: "Seafoam Islands" },
      { name: "Zapdos", type: "electric", location: "Power Plant" },
      { name: "Moltres", type: "fire", location: "Victory Road" },
      { name: "Meltan", type: "steel", location: "Transfer from Pokémon GO" },
      { name: "Melmetal", type: "steel", location: "Evolve Meltan in Pokémon GO" },
    ],
    tips: [
      "Great entry point for beginners or Pokémon GO fans.",
      "Catch combos (catching the same species repeatedly) boost shiny odds!",
      "Your partner Pikachu/Eevee learns powerful exclusive moves.",
      "Co-op makes battles easier — 2 Pokémon vs 1 in every fight.",
      "Transfer from Pokémon GO to get the GO Park — catch them again!",
    ],
  },

  /* ======================================================
   *  GENERATION VIII
   * ====================================================== */
  {
    slug: "sword-shield",
    title: "Pokémon Sword & Shield",
    shortTitle: "Sword & Shield",
    generation: 8,
    region: "Galar",
    platform: "Nintendo Switch",
    releaseYear: 2019,
    color: "bg-blue-700",
    accentColor: "text-blue-700",
    starters: [
      { name: "Grookey", type: "grass" },
      { name: "Scorbunny", type: "fire" },
      { name: "Sobble", type: "water" },
    ],
    description:
      "Explore the UK-inspired Galar region with the Wild Area, Dynamax battles, and the most diverse online features yet.",
    features: [
      "Dynamax & Gigantamax",
      "Wild Area open world zone",
      "Max Raid Battles (co-op)",
      "Pokémon Camp",
      "Galarian regional forms",
      "DLC: Isle of Armor & Crown Tundra",
    ],
    gymLeaders: [
      { name: "Milo", type: "grass", badge: "Grass Badge", location: "Turffield", pokemon: [p("Gossifleur", 19), p("Eldegoss", 20)] },
      { name: "Nessa", type: "water", badge: "Water Badge", location: "Hulbury", pokemon: [p("Goldeen", 22), p("Arrokuda", 23), p("Drednaw", 24)] },
      { name: "Kabu", type: "fire", badge: "Fire Badge", location: "Motostoke", pokemon: [p("Ninetales", 25), p("Arcanine", 25), p("Centiskorch", 27)] },
      { name: "Bea/Allister", type: "fighting/ghost", badge: "Fighting/Ghost Badge", location: "Stow-on-Side", pokemon: [p("Hitmontop/Galarian Yamask", 34), p("Pangoro/Mimikyu", 34), p("Sirfetch'd/Cursola", 35), p("Machamp/Gengar", 36)] },
      { name: "Opal", type: "fairy", badge: "Fairy Badge", location: "Ballonlea", pokemon: [p("Weezing", 36), p("Mawile", 36), p("Togekiss", 37), p("Alcremie", 38)] },
      { name: "Gordie/Melony", type: "rock/ice", badge: "Rock/Ice Badge", location: "Circhester", pokemon: [p("Barbaracle/Frosmoth", 40), p("Shuckle/Galarian Darmanitan", 40), p("Stonjourner/Eiscue", 41), p("Coalossal/Lapras", 42)] },
      { name: "Piers", type: "dark", badge: "Dark Badge", location: "Spikemuth", pokemon: [p("Scrafty", 44), p("Malamar", 45), p("Skuntank", 45), p("Obstagoon", 46)] },
      { name: "Raihan", type: "dragon", badge: "Dragon Badge", location: "Hammerlocke", pokemon: [p("Flygon", 47), p("Sandaconda", 46), p("Gigalith", 46), p("Duraludon", 48)] },
    ],
    eliteFour: [
      { name: "Marnie", type: "dark", pokemon: [p("Liepard", 47), p("Toxicroak", 47), p("Scrafty", 47), p("Morpeko", 48), p("Grimmsnarl", 49)] },
      { name: "Hop", type: "mixed", pokemon: [p("Dubwool", 48), p("Cramorant", 48), p("Pincurchin", 47), p("Snorlax", 47), p("Corviknight", 48), p("Cinderace", 49)] },
      { name: "Bede", type: "fairy", pokemon: [p("Mawile", 51), p("Gardevoir", 51), p("Rapidash", 52), p("Hatterene", 53)] },
      { name: "Nessa (rematch)", type: "water", pokemon: [p("Golisopod", 51), p("Pelipper", 51), p("Barraskewda", 52), p("Toxapex", 51), p("Drednaw", 53)] },
    ],
    champion: { name: "Leon", type: "mixed", pokemon: [p("Aegislash", 62), p("Dragapult", 62), p("Haxorus", 63), p("Seismitoad", 64), p("Mr. Rime", 64), p("Charizard", 65)] },
    legendaries: [
      { name: "Zacian", type: "fairy", location: "Energy Plant", notes: "Sword version" },
      { name: "Zamazenta", type: "fighting", location: "Energy Plant", notes: "Shield version" },
      { name: "Eternatus", type: "poison", location: "Energy Plant", notes: "Story encounter" },
      { name: "Calyrex", type: "psychic", location: "Crown Tundra DLC" },
      { name: "Kubfu → Urshifu", type: "fighting", location: "Isle of Armor DLC" },
    ],
    tips: [
      "The Wild Area is where you'll spend most of your time — explore it thoroughly!",
      "Max Raid Battles give TR moves and rare Pokémon with Hidden Abilities.",
      "Leon's Charizard Gigantamaxes — bring Rock-type moves!",
      "The DLC areas (Isle of Armor & Crown Tundra) are huge content additions.",
      "Surprise Trade is the new Wonder Trade — fun way to get random Pokémon.",
      "Camp and cook curry for HP restoration and friendship boosts.",
    ],
  },

  {
    slug: "brilliant-diamond-shining-pearl",
    title: "Pokémon Brilliant Diamond & Shining Pearl",
    shortTitle: "Brilliant Diamond & Shining Pearl",
    generation: 8,
    region: "Sinnoh",
    platform: "Nintendo Switch",
    releaseYear: 2021,
    color: "bg-sky-500",
    accentColor: "text-sky-600",
    starters: [
      { name: "Turtwig", type: "grass" },
      { name: "Chimchar", type: "fire" },
      { name: "Piplup", type: "water" },
    ],
    description:
      "Faithful chibi-style remakes of Diamond & Pearl for Nintendo Switch with the Grand Underground and updated quality of life.",
    features: [
      "Chibi art style overworld",
      "Grand Underground (expanded)",
      "Pokémon Hideaways",
      "Super Contest Shows",
      "Following Pokémon in Amity Square",
    ],
    gymLeaders: [
      { name: "Roark", type: "rock", badge: "Coal Badge", location: "Oreburgh City", pokemon: [p("Geodude", 12), p("Onix", 12), p("Cranidos", 14)] },
      { name: "Gardenia", type: "grass", badge: "Forest Badge", location: "Eterna City", pokemon: [p("Cherubi", 19), p("Turtwig", 19), p("Roserade", 22)] },
      { name: "Maylene", type: "fighting", badge: "Cobble Badge", location: "Veilstone City", pokemon: [p("Meditite", 27), p("Machoke", 27), p("Lucario", 30)] },
      { name: "Crasher Wake", type: "water", badge: "Fen Badge", location: "Pastoria City", pokemon: [p("Gyarados", 27), p("Quagsire", 27), p("Floatzel", 30)] },
      { name: "Fantina", type: "ghost", badge: "Relic Badge", location: "Hearthome City", pokemon: [p("Drifblim", 32), p("Gengar", 34), p("Mismagius", 36)] },
      { name: "Byron", type: "steel", badge: "Mine Badge", location: "Canalave City", pokemon: [p("Magneton", 36), p("Steelix", 36), p("Bastiodon", 39)] },
      { name: "Candice", type: "ice", badge: "Icicle Badge", location: "Snowpoint City", pokemon: [p("Sneasel", 38), p("Piloswine", 38), p("Abomasnow", 40), p("Froslass", 42)] },
      { name: "Volkner", type: "electric", badge: "Beacon Badge", location: "Sunyshore City", pokemon: [p("Raichu", 46), p("Ambipom", 47), p("Octillery", 47), p("Luxray", 49)] },
    ],
    eliteFour: [
      { name: "Aaron", type: "bug", pokemon: [p("Dustox", 53), p("Beautifly", 53), p("Vespiquen", 54), p("Heracross", 54), p("Drapion", 57)] },
      { name: "Bertha", type: "ground", pokemon: [p("Quagsire", 55), p("Sudowoodo", 56), p("Golem", 56), p("Whiscash", 55), p("Hippowdon", 59)] },
      { name: "Flint", type: "fire", pokemon: [p("Rapidash", 58), p("Steelix", 57), p("Drifblim", 58), p("Lopunny", 57), p("Infernape", 61)] },
      { name: "Lucian", type: "psychic", pokemon: [p("Mr. Mime", 59), p("Espeon", 58), p("Bronzong", 60), p("Alakazam", 60), p("Medicham", 59)] },
    ],
    champion: { name: "Cynthia", type: "mixed", pokemon: [p("Spiritomb", 61), p("Roserade", 60), p("Togekiss", 60), p("Lucario", 63), p("Milotic", 63), p("Garchomp", 66)] },
    legendaries: [
      { name: "Dialga", type: "steel", location: "Spear Pillar", notes: "Brilliant Diamond" },
      { name: "Palkia", type: "water", location: "Spear Pillar", notes: "Shining Pearl" },
      { name: "Giratina", type: "ghost", location: "Turnback Cave", notes: "Post-game" },
      { name: "Heatran", type: "fire", location: "Stark Mountain" },
      { name: "Cresselia", type: "psychic", location: "Fullmoon Island" },
    ],
    tips: [
      "Cynthia is just as hard as the originals — prepare for Garchomp!",
      "The Grand Underground has Pokémon Hideaways with Pokémon not in the Sinnoh Dex.",
      "Statues in your Secret Base affect which Pokémon appear in Hideaways.",
      "You can rematch Gym Leaders and the Elite Four with stronger teams.",
      "Post-game unlocks the National Dex and Ramanas Park for legendaries.",
    ],
  },

  {
    slug: "legends-arceus",
    title: "Pokémon Legends: Arceus",
    shortTitle: "Legends: Arceus",
    generation: 8,
    region: "Hisui (ancient Sinnoh)",
    platform: "Nintendo Switch",
    releaseYear: 2022,
    color: "bg-indigo-700",
    accentColor: "text-indigo-700",
    starters: [
      { name: "Rowlet", type: "grass" },
      { name: "Cyndaquil", type: "fire" },
      { name: "Oshawott", type: "water" },
    ],
    description:
      "A revolutionary open-world action RPG set in ancient Sinnoh. Catch Pokémon in real-time, dodge attacks, and complete the first Pokédex.",
    features: [
      "Open-world action gameplay",
      "Real-time catching (no random encounters)",
      "Agile/Strong Style moves",
      "Alpha Pokémon (giant, powerful)",
      "Noble Pokémon boss battles",
      "Crafting system",
    ],
    gymLeaders: [
      { name: "Kleavor", type: "bug", badge: "Quell the frenzy", location: "Obsidian Fieldlands", pokemon: [p("Kleavor", 18)] },
      { name: "Lilligant", type: "grass", badge: "Quell the frenzy", location: "Crimson Mirelands", pokemon: [p("Hisuian Lilligant", 30)] },
      { name: "Arcanine", type: "fire", badge: "Quell the frenzy", location: "Cobalt Coastlands", pokemon: [p("Hisuian Arcanine", 40)] },
      { name: "Electrode", type: "electric", badge: "Quell the frenzy", location: "Coronet Highlands", pokemon: [p("Hisuian Electrode", 46)] },
      { name: "Avalugg", type: "ice", badge: "Quell the frenzy", location: "Alabaster Icelands", pokemon: [p("Hisuian Avalugg", 56)] },
    ],
    eliteFour: [],
    champion: { name: "Volo", type: "mixed", pokemon: [p("Spiritomb", 68), p("Roserade", 68), p("Hisuian Arcanine", 68), p("Lucario", 68), p("Togekiss", 68), p("Giratina", 70)] },
    legendaries: [
      { name: "Dialga (Origin)", type: "steel", location: "Temple of Sinnoh", notes: "Story encounter" },
      { name: "Palkia (Origin)", type: "water", location: "Temple of Sinnoh", notes: "Story encounter" },
      { name: "Arceus", type: "normal", location: "Temple of Sinnoh", notes: "Complete the Pokédex" },
      { name: "Giratina", type: "ghost", location: "Turnback Cave", notes: "Post-game boss" },
      { name: "Heatran", type: "fire", location: "Lava Dome Sanctum" },
      { name: "Cresselia", type: "psychic", location: "Moonview Arena" },
    ],
    tips: [
      "This game plays completely differently — you dodge attacks in real-time!",
      "Stealth matters — crouch and use tall grass to sneak up on Pokémon.",
      "Back strikes give higher catch rates — always aim for the back.",
      "Alpha Pokémon are tough but give great rewards and can be caught.",
      "Completing Pokédex entries requires you to USE moves, not just catch Pokémon.",
      "The Volo fight at the end is one of the hardest battles in Pokémon history.",
    ],
  },

  /* ======================================================
   *  GENERATION IX
   * ====================================================== */
  {
    slug: "scarlet-violet",
    title: "Pokémon Scarlet & Violet",
    shortTitle: "Scarlet & Violet",
    generation: 9,
    region: "Paldea",
    platform: "Nintendo Switch",
    releaseYear: 2022,
    color: "bg-violet-600",
    accentColor: "text-violet-600",
    starters: [
      { name: "Sprigatito", type: "grass" },
      { name: "Fuecoco", type: "fire" },
      { name: "Quaxly", type: "water" },
    ],
    description:
      "The first truly open-world Pokémon game with three storylines to tackle in any order. Features Terastallization and co-op exploration.",
    features: [
      "Fully open world",
      "Three storylines (Victory Road, Starfall Street, Path of Legends)",
      "Terastallization",
      "Koraidon/Miraidon mount",
      "4-player co-op exploration",
      "DLC: The Teal Mask & The Indigo Disk",
    ],
    gymLeaders: [
      { name: "Katy", type: "bug", badge: "Bug Badge", location: "Cortondo", pokemon: [p("Nymble", 14), p("Tarountula", 14), p("Teddiursa", 15)] },
      { name: "Brassius", type: "grass", badge: "Grass Badge", location: "Artazon", pokemon: [p("Petilil", 16), p("Smoliv", 16), p("Sudowoodo", 17)] },
      { name: "Iono", type: "electric", badge: "Electric Badge", location: "Levincia", pokemon: [p("Wattrel", 23), p("Bellibolt", 23), p("Luxio", 23), p("Mismagius", 24)] },
      { name: "Kofu", type: "water", badge: "Water Badge", location: "Cascarrafa", pokemon: [p("Veluza", 29), p("Wugtrio", 29), p("Crabominable", 30)] },
      { name: "Larry", type: "normal", badge: "Normal Badge", location: "Medali", pokemon: [p("Komala", 35), p("Dudunsparce", 35), p("Staraptor", 36)] },
      { name: "Ryme", type: "ghost", badge: "Ghost Badge", location: "Montenevera", pokemon: [p("Banette", 41), p("Mimikyu", 41), p("Houndstone", 41), p("Toxtricity", 42)] },
      { name: "Tulip", type: "psychic", badge: "Psychic Badge", location: "Alfornada", pokemon: [p("Farigiraf", 44), p("Gardevoir", 44), p("Espathra", 44), p("Florges", 45)] },
      { name: "Grusha", type: "ice", badge: "Ice Badge", location: "Glaseado", pokemon: [p("Frosmoth", 47), p("Beartic", 47), p("Cetitan", 47), p("Altaria", 48)] },
    ],
    eliteFour: [
      { name: "Rika", type: "ground", pokemon: [p("Whiscash", 57), p("Camerupt", 57), p("Donphan", 57), p("Dugtrio", 57), p("Clodsire", 58)] },
      { name: "Poppy", type: "steel", pokemon: [p("Copperajah", 58), p("Magnezone", 58), p("Bronzong", 58), p("Corviknight", 58), p("Tinkaton", 59)] },
      { name: "Larry", type: "flying", pokemon: [p("Tropius", 59), p("Staraptor", 59), p("Oricorio", 59), p("Altaria", 59), p("Flamigo", 60)] },
      { name: "Hassel", type: "dragon", pokemon: [p("Noivern", 60), p("Haxorus", 60), p("Dragalge", 60), p("Flapple", 60), p("Baxcalibur", 61)] },
    ],
    champion: { name: "Geeta", type: "mixed", pokemon: [p("Espathra", 61), p("Gogoat", 61), p("Veluza", 61), p("Avalugg", 61), p("Kingambit", 62), p("Glimmora", 62)] },
    legendaries: [
      { name: "Koraidon", type: "fighting", location: "Area Zero", notes: "Scarlet — also your mount" },
      { name: "Miraidon", type: "electric", location: "Area Zero", notes: "Violet — also your mount" },
      { name: "Wo-Chien", type: "dark", location: "Casseroya Lake area" },
      { name: "Chien-Pao", type: "dark", location: "West Province (Area One)" },
      { name: "Ting-Lu", type: "dark", location: "Socarrat Trail" },
      { name: "Chi-Yu", type: "dark", location: "North Province (Area Two)" },
      { name: "Ogerpon", type: "grass", location: "Kitakami (Teal Mask DLC)" },
      { name: "Terapagos", type: "normal", location: "Area Zero (Indigo Disk DLC)" },
    ],
    tips: [
      "Do the three storylines in any order — true freedom!",
      "Recommended gym order by level: Katy → Brassius → Iono → Kofu → Larry → Ryme → Tulip → Grusha.",
      "Terastallize your Pokémon to change its type mid-battle for STAB surprises.",
      "Titan Pokémon (Path of Legends) unlock new traversal abilities for your mount.",
      "Team Star bases (Starfall Street) are fun timed challenges.",
      "The Area Zero story at the end ties all three paths together — it's fantastic.",
      "DLC adds Kitakami and Blueberry Academy with tons of new content.",
    ],
  },
];

/* ── Helpers ──────────────────────────────────────────── */
export function getGuideBySlug(slug: string): GameGuide | undefined {
  return GAME_GUIDES.find((g) => g.slug === slug);
}

export function getGuidesByGeneration(gen: number): GameGuide[] {
  return GAME_GUIDES.filter((g) => g.generation === gen);
}

export const GENERATION_LABELS: Record<number, string> = {
  1: "Generation I",
  2: "Generation II",
  3: "Generation III",
  4: "Generation IV",
  5: "Generation V",
  6: "Generation VI",
  7: "Generation VII",
  8: "Generation VIII",
  9: "Generation IX",
};
