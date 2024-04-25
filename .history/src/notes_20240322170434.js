import localforage from "localforage";

async function getNotes() {
  const note = localforage.getItem("notes");
  if (!note) note = [];

  return note;
}
