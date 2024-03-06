import React from "react";
import "./Pet";
import { createRoot } from "react-dom/client";
import SuperPet from "./Pet";

const App = () => {
  return (
    <div>
      <h1></h1>
      <SuperPet />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
