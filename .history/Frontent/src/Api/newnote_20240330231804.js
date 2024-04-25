import instance from "./RestClient";
import UserContext from "../context/user-context";

const note = (titleInput, contentInput) => {
  const user = useContext(UserContext);
  const config = {
    headers: { Authorization: `Bearer ${user.accessToken}` },
  };
  const newnote = instance.post(
    "note/new",
    {
      title: titleInput,
      content: contentInput,
    },
    config
  );

  return newnote;
};
export default note;
