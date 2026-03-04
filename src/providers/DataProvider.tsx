"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { isDataLoaded, hydrateFromStatic } from "@/lib/db/pokemon-db";

interface DataContextType {
  isReady: boolean;
  isHydrating: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType>({
  isReady: false,
  isHydrating: false,
  error: null,
});

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [isHydrating, setIsHydrating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function init() {
      try {
        const loaded = await isDataLoaded();
        if (loaded) {
          setIsReady(true);
          return;
        }

        // First visit — hydrate from static JSON
        setIsHydrating(true);
        await hydrateFromStatic();
        setIsReady(true);
      } catch (err) {
        console.error("[DataProvider] Hydration error:", err);
        setError(err instanceof Error ? err.message : "Failed to load data");
        // Still mark as ready — components can fall back to static JSON
        setIsReady(true);
      } finally {
        setIsHydrating(false);
      }
    }

    init();
  }, []);

  return (
    <DataContext.Provider value={{ isReady, isHydrating, error }}>
      {children}
    </DataContext.Provider>
  );
}
