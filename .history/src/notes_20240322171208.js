import localforage from "localforage";

async function getnotes() {
  const notes = localforage.getItem("notes");
  if (!notes) notes = [];

  return notes;
}
