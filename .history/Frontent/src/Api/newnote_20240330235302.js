import instance from "./RestClient";
import UserContext from "../context/user-context";
import { useContext } from "react";
const addNote = (titleInput, contentInput, userToken) => {
  const config = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };
  const newNote = instance.post(
    "note/new",
    {
      title: titleInput,
      content: contentInput,
    },
    config
  );

  return newNote;
};
export default addNote;
