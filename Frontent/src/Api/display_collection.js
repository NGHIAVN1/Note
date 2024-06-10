import instance from "./RestClient";
function displayCollection() {
  // const config = {
  //   headers: { Authorization: `Bearer ${userToken}` },
  // };
  const collection = instance.get("/Collection/display");
  return collection;
}
export default displayCollection;
