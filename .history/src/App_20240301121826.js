import React from "react";
import "./Pet";
import { createRoot } from "react-dom/client";

const App = () => {
  const PetCute = {
    animal: "Bird",
    name: "lunar",
  };
  return (<h1>Welcome Back</h1>), (<Pet />);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
