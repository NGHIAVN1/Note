import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Routes/Header";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import LoginPage from "./Routes/LoginPages";
import Root from "./Routes/root";
import RegisterUser from "./Routes/Register";
import { loader as rootLoader } from "./Routes/root";
const router = createBrowserRouter([
  {
    path: "Home/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "Signin",
        element: <RegisterUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
