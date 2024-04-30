import instance from "./RestClient";

const auth = (emailInput, passwordInput) => {
  const login = instance.post("Users/login", {
    email: emailInput,
    password: passwordInput,
  });

  return login;
};
export const signup = (emailIp, usernameIp, passwordIp) => {
  const signupUser = instance.post("Users/signup", {
    email: emailIp,
    username: usernameIp,
    password: passwordIp,
  });
  return signupUser;
};
export const logout
export default auth;
