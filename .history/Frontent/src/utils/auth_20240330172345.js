export function isAuth() {
  const userData = localStorage.getItem("user-data");
  if (userData == null || userData == undefined || userData === "") {
    return false;
  }
  return true;
}
