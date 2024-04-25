import instance from "./RestClient";

const auth = (emailInput, passwordInput) => {
  const login = instance.post("user/login", {
    email: emailInput,
    password: passwordInput,
  });

  return login;
};
export const signup = (emailIp, usernameIp, passwordIp) => {
  const signupUser = instance.post("user/signup", {
    emailIp: emailIp,
    usernameIp: usernameIp,
    passwordIp: passwordIp,
  });
  return signupUser;
};

export default auth;
