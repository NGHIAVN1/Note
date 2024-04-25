import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Routes/root";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
