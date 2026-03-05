/**
 * Firestore service for team builder CRUD.
 *
 * Data model:
 *   users/{uid}/teams/{teamId} → TeamDocument
 *
 * Each team is a single document containing up to 6 members.
 * Fully denormalized — no additional lookups needed to display a team.
 */

import {
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  getDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  getCountFromServer,
} from "firebase/firestore";
import { getFirebaseDb } from "./config";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface TeamMember {
  pokemonId: number;
  pokemonName: string;
  nickname: string;
  sprite: string;
  types: string[];
  ability: string;
  nature: string;
  moves: string[]; // up to 4
}

export interface TeamDocument {
  id: string;
  name: string;
  isPublic: boolean;
  members: TeamMember[];
  createdAt: unknown;
  updatedAt: unknown;
}

/** Shape used when creating/updating (no id, timestamps handled by server). */
export interface TeamInput {
  name: string;
  isPublic: boolean;
  members: TeamMember[];
}

// ---------------------------------------------------------------------------
// CRUD
// ---------------------------------------------------------------------------

/** Create a new team. Returns the generated document ID. */
export async function createTeam(uid: string, input: TeamInput): Promise<string> {
  const db = getFirebaseDb();
  const colRef = collection(db, "users", uid, "teams");
  const newRef = doc(colRef); // auto-generate ID
  await setDoc(newRef, {
    name: input.name,
    isPublic: input.isPublic,
    members: input.members,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return newRef.id;
}

/** Update an existing team. */
export async function updateTeam(
  uid: string,
  teamId: string,
  input: TeamInput
): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "teams", teamId);
  await setDoc(
    ref,
    {
      name: input.name,
      isPublic: input.isPublic,
      members: input.members,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

/** Delete a team. */
export async function deleteTeam(uid: string, teamId: string): Promise<void> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "teams", teamId);
  await deleteDoc(ref);
}

/** Get a single team by ID. */
export async function getTeam(
  uid: string,
  teamId: string
): Promise<TeamDocument | undefined> {
  const db = getFirebaseDb();
  const ref = doc(db, "users", uid, "teams", teamId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return undefined;
  return { id: snap.id, ...snap.data() } as TeamDocument;
}

/** Get all teams for a user, ordered by most recently updated. */
export async function getTeams(uid: string): Promise<TeamDocument[]> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", uid, "teams");
  const q = query(ref, orderBy("updatedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as TeamDocument);
}

/** Get the total number of teams for a user. */
export async function getTeamCount(uid: string): Promise<number> {
  const db = getFirebaseDb();
  const ref = collection(db, "users", uid, "teams");
  const snap = await getCountFromServer(ref);
  return snap.data().count;
}
