import instance from "./RestClient";

const auth = (emailInput, passwordInput) => {
  const login = instance
    .post({
      url: "user/login",
      data: {
        email: emailInput,
        password: passwordInput,
      },
    })
    .catch((error) => {
      console.log(error);
    });
  return login;
};

export default auth;
