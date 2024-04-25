import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Routes/root.jsx";
import router from "./Routes/root.jsx";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Router, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
