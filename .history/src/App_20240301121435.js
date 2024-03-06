import React from "react";
import "./Pet";
import { createRoot } from "react-dom/client";
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Lunar"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h3", {}, "Cat"),
  ]);
};

const App = () => {
  const PetCute = {
    animal: "Bird",
    name: "lunar",
  };
  return <Pet.jsx />;
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
