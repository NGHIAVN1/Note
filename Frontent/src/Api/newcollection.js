import instance from "./RestClient";
const newCollection = (nameInput, idInput) => {
  //   const config = {
  //     headers: { Authorization: `Bearer ${userToken.accessToken}` },
  //   };
  const addCollection = instance.post(
    "/Collection/new",
    {
      name: nameInput,
      _id: idInput,
    }
    // config
  );
  return addCollection;
};
export default newCollection;
