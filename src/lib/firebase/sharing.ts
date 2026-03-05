/**
 * Firestore service for team sharing.
 *
 * Data model:
 *   sharedTeams/{shareId} → SharedTeamDocument
 *
 * Shared teams are publicly readable (no auth needed).
 * Only the owner can update or delete their shared teams.
 */

import {
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getFirebaseDb } from "./config";
import type { TeamMember } from "./teams";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SharedTeamDocument {
  id: string;
  ownerUid: string;
  ownerDisplayName: string;
  teamName: string;
  members: TeamMember[];
  sharedAt: unknown;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Generate a short alphanumeric share ID (10 chars). */
function generateShareId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

// ---------------------------------------------------------------------------
// CRUD
// ---------------------------------------------------------------------------

/**
 * Create a shared team snapshot. Returns the share ID.
 */
export async function createSharedTeam(
  ownerUid: string,
  ownerDisplayName: string,
  teamName: string,
  members: TeamMember[]
): Promise<string> {
  const db = getFirebaseDb();
  const shareId = generateShareId();
  const ref = doc(db, "sharedTeams", shareId);

  await setDoc(ref, {
    ownerUid,
    ownerDisplayName,
    teamName,
    members,
    sharedAt: serverTimestamp(),
  });

  return shareId;
}

/**
 * Get a shared team by its share ID. No auth required.
 */
export async function getSharedTeam(
  shareId: string
): Promise<SharedTeamDocument | null> {
  const db = getFirebaseDb();
  const ref = doc(db, "sharedTeams", shareId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as SharedTeamDocument;
}

/**
 * Delete a shared team.
 */
export async function deleteSharedTeam(shareId: string): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "sharedTeams", shareId);
  await deleteDoc(ref);
}
