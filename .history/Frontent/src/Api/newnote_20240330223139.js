import instance from "./RestClient";

const note = (titleInput, contentInput) => {
  const newnote = instance.post("note/new", {
    title: titleInput,
    content: contentInput,
  });

  return newnote;
};
export default note;
