/**
 * Veekun move effect prose enrichment.
 *
 * Downloads move effect descriptions from Veekun CSVs and
 * enriches the PokeAPI-sourced moves data with better effect text.
 */

import { loadVeekunCSV } from "./veekun-parser";

interface VeekunMoveEffectProse extends Record<string, string> {
  move_effect_id: string;
  local_language_id: string;
  short_effect: string;
  effect: string;
}

interface VeekunMove extends Record<string, string> {
  id: string;
  identifier: string;
  generation_id: string;
  type_id: string;
  power: string;
  pp: string;
  accuracy: string;
  priority: string;
  target_id: string;
  damage_class_id: string;
  effect_id: string;
  effect_chance: string;
  contest_type_id: string;
  contest_effect_id: string;
  super_contest_effect_id: string;
}

export interface MoveEffectMap {
  /** Map from move name (identifier) to detailed effect description */
  effects: Map<string, string>;
}

/**
 * Load Veekun move effect descriptions.
 * Returns a map from move identifier → detailed English effect text.
 */
export async function loadVeekunMoveEffects(): Promise<MoveEffectMap> {
  // Load moves CSV (maps move id → effect_id and identifier)
  const moves = await loadVeekunCSV<VeekunMove>("moves.csv");

  // Load effect prose (maps effect_id → English effect text)
  const prose = await loadVeekunCSV<VeekunMoveEffectProse>(
    "move_effect_prose.csv"
  );

  // Build effect_id → English short_effect map
  // language_id 9 = English
  const effectTexts = new Map<string, string>();
  for (const row of prose) {
    if (row.local_language_id === "9" && row.short_effect) {
      effectTexts.set(row.move_effect_id, row.short_effect);
    }
  }

  // Build move identifier → effect text
  const effects = new Map<string, string>();
  for (const move of moves) {
    const effectText = effectTexts.get(move.effect_id);
    if (effectText) {
      // Replace $effect_chance placeholder
      let text = effectText;
      if (move.effect_chance) {
        text = text.replace(/\$effect_chance/g, move.effect_chance);
      }
      effects.set(move.identifier, text);
    }
  }

  console.log(`  Loaded ${effects.size} move effect descriptions from Veekun`);
  return { effects };
}
