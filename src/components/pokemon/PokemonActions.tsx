"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useUserDataStore } from "@/stores/user-data-store";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";

interface PokemonActionsProps {
  pokemonId: number;
}

export function PokemonActions({ pokemonId }: PokemonActionsProps) {
  const { user } = useAuth();
  const router = useRouter();
  const { toggleFavorite, toggleCaught, isFavorite, isCaught } =
    useUserDataStore();

  const favorited = isFavorite(pokemonId);
  const caught = isCaught(pokemonId);

  function handleFavorite() {
    if (!user) {
      router.push("/login");
      return;
    }
    toggleFavorite(user.uid, pokemonId);
  }

  function handleCaught() {
    if (!user) {
      router.push("/login");
      return;
    }
    toggleCaught(user.uid, pokemonId);
  }

  return (
    <div className="flex gap-2">
      {/* Favorite button */}
      <button
        onClick={handleFavorite}
        className={cn(
          "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all active:scale-[0.97]",
          favorited
            ? "bg-pink-50 text-pink-500 border border-pink-200 dark:bg-pink-900/20 dark:border-pink-800"
            : "bg-white text-gray-600 border border-gray-200 hover:border-pink-200 hover:text-pink-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:border-pink-800"
        )}
      >
        <svg
          className="h-5 w-5"
          fill={favorited ? "currentColor" : "none"}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        {favorited ? "Favorited" : "Favorite"}
      </button>

      {/* Caught button */}
      <button
        onClick={handleCaught}
        className={cn(
          "flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all active:scale-[0.97]",
          caught
            ? "bg-green-50 text-green-600 border border-green-200 dark:bg-green-900/20 dark:border-green-800"
            : "bg-white text-gray-600 border border-gray-200 hover:border-green-200 hover:text-green-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:border-green-800"
        )}
      >
        {caught ? (
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" strokeWidth={2} />
            <path strokeLinecap="round" strokeWidth={2} d="M9 12l2 2 4-4" />
          </svg>
        )}
        {caught ? "Caught!" : "Mark Caught"}
      </button>
    </div>
  );
}
