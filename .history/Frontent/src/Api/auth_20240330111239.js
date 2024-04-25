import instance from "./RestClient";

const Authen = (emailInput, passwordInput) => {
  const login = instance
    .post({
      url: "user/login",
      data: {
        email: emailInput,
        password: passwordInput,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return login;
};

export default Authen;
