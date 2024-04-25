import instance from "./RestClient";
import Context from "../context/user-context";
import { useContext } from "react";
const note = (titleInput, contentInput) => {
  const user = useContext(UserContext);
  const newnote = instance.post("note/new", {
    title: titleInput,
    content: contentInput,
  });

  return newnote;
};
export default note;
