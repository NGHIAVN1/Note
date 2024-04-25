import instance from "./RestClient";

const auth = (emailInput, passwordInput) => {
  const login = instance.post("user/login", {
    data: {
      email: emailInput,
      password: passwordInput,
    },
  });

  return login;
};

export default auth;
