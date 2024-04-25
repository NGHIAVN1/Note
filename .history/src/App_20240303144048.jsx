import React from "react";
import "./SearchParams";
import { createRoot } from "react-dom/client";

import "./register";

const App = () => {
  return (
    <div>
      <h1></h1>
      <h2>Welcome Back</h2>
      <SearchParams />
      <registerAccount />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
