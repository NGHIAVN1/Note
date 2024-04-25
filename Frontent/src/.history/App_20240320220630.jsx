import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Routes/Header";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
const router = createBrowserRouter([
  {
    path: "Home/",
    element: <Header />,
  },
  {
    path: "/",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
