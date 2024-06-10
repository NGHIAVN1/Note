import instance from "./RestClient";

const customNotes = {
  // config: {  headers: { Authorization: `Bearer ${userToken}` },
  // },
  show: () => {
    //   const config = {
    //     headers: { Authorization: `Bearer ${userToken}` },
    //   };
    const notes = instance.get("/Notes/show");
    return notes;
  },
  delete: (collectionIdInput, idInput) => {
    const notes = instance.post("/Notes/delete", {
      _id: idInput,
      collectionId: collectionIdInput,
    });
    return notes;
  },
  update: (idInput, titleInput, contentInput) => {
    const notes = instance.post("/Notes/update", {
      _id: idInput,
      title: titleInput,
      content: contentInput,
    });
    return notes;
  },
};
export default customNotes;
