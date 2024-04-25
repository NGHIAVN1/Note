import React from "react";
import "./Register";
import "./Login";
import "./SearchParams";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import RegisterUser from "./Register";
import LoginPage from "./Login";

const App = () => {
  return (
    <div>
      <h1></h1>
      <h2>Welcome Back</h2>
      <LoginPage />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
