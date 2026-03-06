/**
 * Veekun CSV downloader and parser.
 *
 * Downloads CSV files from the Veekun Pokedex GitHub repo at build time,
 * caches them locally, and parses them into typed arrays.
 */

import * as fs from "fs";
import * as path from "path";
import { parse } from "csv-parse/sync";

const VEEKUN_BASE =
  "https://raw.githubusercontent.com/veekun/pokedex/master/pokedex/data/csv";
const CACHE_DIR = path.join(process.cwd(), "data", ".cache");

// Ensure cache directory exists
fs.mkdirSync(CACHE_DIR, { recursive: true });

/**
 * Download a CSV file from Veekun's GitHub repo.
 * Caches locally for 24 hours to avoid re-downloading.
 */
export async function downloadCSV(filename: string): Promise<string> {
  const cachePath = path.join(CACHE_DIR, filename);

  // Check cache freshness (24 hours)
  if (fs.existsSync(cachePath)) {
    const stat = fs.statSync(cachePath);
    const age = Date.now() - stat.mtimeMs;
    if (age < 24 * 60 * 60 * 1000) {
      return fs.readFileSync(cachePath, "utf-8");
    }
  }

  const url = `${VEEKUN_BASE}/${filename}`;
  console.log(`  Downloading ${filename}...`);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${filename}: HTTP ${res.status}`);
  }

  const text = await res.text();
  fs.writeFileSync(cachePath, text);
  return text;
}

/**
 * Parse CSV text into an array of objects with string values.
 */
export function parseCSV<T extends Record<string, string>>(
  csvText: string
): T[] {
  return parse(csvText, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as T[];
}

/**
 * Download and parse a Veekun CSV file in one step.
 */
export async function loadVeekunCSV<T extends Record<string, string>>(
  filename: string
): Promise<T[]> {
  const text = await downloadCSV(filename);
  return parseCSV<T>(text);
}
