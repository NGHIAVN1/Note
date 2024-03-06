import React, { StrictMode } from "react";
import "./Register";
import "./LoginPages";
import "./SearchParams";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import RegisterUser from "./Register";
import LoginPage from "./LoginPages";

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
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
