import localforage from "localforage";

export async function getnotes() {
  const notes = localforage.getItem("notes");
  if (!notes) notes = [];
  return notes;
}
export async function createNote({ tittle, contents }) {
  let id = Math.random.toString;
  let note = { id, tittle, contents };
  let notes = getnotes();
  await set(notes);
  return note;
}
