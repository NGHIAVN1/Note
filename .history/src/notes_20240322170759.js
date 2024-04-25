import localforage from "localforage";

async function getnotes() {
  const notes = localforage.getItem("notess");
  if (!notes) notes = [];

  return notes;
}
