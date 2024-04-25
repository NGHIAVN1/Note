import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Routes/root.jsx";
import router from "./Routes/root.jsx";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <router />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <router />
    </BrowserRouter>
  </React.StrictMode>
);
