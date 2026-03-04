import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  loadAllPokemonDetailSync,
  loadAllPokemonListSync,
} from "@/lib/pokemon/data-loader.server";
import { PokemonDetail } from "@/components/pokemon/PokemonDetail";
import { formatPokemonName } from "@/lib/utils/format";

// ---------------------------------------------------------------------------
// SSG: Generate all 1025 Pokemon pages at build time
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  const list = loadAllPokemonListSync();
  return list.map((p) => ({ id: String(p.id) }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata per Pokemon
// ---------------------------------------------------------------------------

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const pokemonId = parseInt(id, 10);
  const allPokemon = loadAllPokemonDetailSync();
  const pokemon = allPokemon.find((p) => p.id === pokemonId);

  if (!pokemon) {
    return { title: "Pokemon Not Found" };
  }

  const displayName = formatPokemonName(pokemon.name);
  const types = pokemon.types.map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join("/");

  return {
    title: `${displayName} #${pokemon.id} — Pokédex`,
    description: `${displayName} is a ${types} type Pokemon. ${pokemon.species.flavorText}`,
    openGraph: {
      title: `${displayName} — Pokédex`,
      description: pokemon.species.flavorText,
      images: pokemon.officialArtwork ? [pokemon.officialArtwork] : [],
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function PokemonPage({ params }: PageProps) {
  const { id } = await params;
  const pokemonId = parseInt(id, 10);

  if (isNaN(pokemonId) || pokemonId < 1 || pokemonId > 1025) {
    notFound();
  }

  const allPokemon = loadAllPokemonDetailSync();
  const pokemon = allPokemon.find((p) => p.id === pokemonId);

  if (!pokemon) {
    notFound();
  }

  return (
    <PokemonDetail pokemon={pokemon} totalPokemon={allPokemon.length} />
  );
}
