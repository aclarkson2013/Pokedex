/**
 * Veekun encounter data enrichment.
 *
 * Downloads encounter-related CSVs from Veekun and produces enriched
 * location name mappings for better display names in the app.
 */

import { loadVeekunCSV } from "./veekun-parser";

interface VeekunLocation extends Record<string, string> {
  id: string;
  region_id: string;
  identifier: string;
}

interface VeekunLocationName extends Record<string, string> {
  location_id: string;
  local_language_id: string;
  name: string;
}

interface VeekunLocationArea extends Record<string, string> {
  id: string;
  location_id: string;
  game_index: string;
  identifier: string;
}

export interface LocationNameMap {
  /** Map from location-area identifier → proper English location name */
  names: Map<string, string>;
}

/**
 * Load location name mappings from Veekun.
 * Maps location area identifiers (used by PokeAPI) to proper English names.
 */
export async function loadVeekunLocationNames(): Promise<LocationNameMap> {
  const locations = await loadVeekunCSV<VeekunLocation>("locations.csv");
  const locationNames = await loadVeekunCSV<VeekunLocationName>(
    "location_names.csv"
  );
  const locationAreas = await loadVeekunCSV<VeekunLocationArea>(
    "location_areas.csv"
  );

  // Build location_id → English name map (language_id 9 = English)
  const locationNameById = new Map<string, string>();
  for (const row of locationNames) {
    if (row.local_language_id === "9" && row.name) {
      locationNameById.set(row.location_id, row.name);
    }
  }

  // Build location_area identifier → proper English name
  // location_areas link to locations which have English names
  const names = new Map<string, string>();
  for (const area of locationAreas) {
    const locationName = locationNameById.get(area.location_id);
    if (locationName) {
      names.set(area.identifier, locationName);
    }
  }

  // Also map location identifiers directly
  for (const loc of locations) {
    const name = locationNameById.get(loc.id);
    if (name) {
      names.set(loc.identifier, name);
    }
  }

  console.log(`  Loaded ${names.size} location name mappings from Veekun`);
  return { names };
}
