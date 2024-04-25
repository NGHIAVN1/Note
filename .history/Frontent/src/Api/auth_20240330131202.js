import instance from "./RestClient";

const auth = (emailInput, passwordInput) => {
  const login = instance.post("user/login", {
    email: emailInput,
    password: passwordInput,
  });

  return login;
};

export default auth;
