import instance from "./RestClient";
const newCollection = (nameInput, userToken) => {
  const config = {
    headers: { Authorization: `Bearer ${userToken}` },
  };
  const addCollection = instance.post(
    "/Collection/new",
    {
      name: nameInput,
    },
    config
  );
  return addCollection;
};
export default newCollection;
