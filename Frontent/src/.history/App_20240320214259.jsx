import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./Routes/root";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  </React.StrictMode>
);
