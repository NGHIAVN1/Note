import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Routes/Header/Header";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import LoginPage from "./Routes/LoginPages";
import Root from "./Routes/root";
import RegisterUser from "./Routes/Register";
import SlideBar from "./Routes/Slidebar";
import Note from "./Routes/note";
// import { loader as rootLoader } from "./Routes/root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        path: "Login",
        element: <LoginPage />,
      },
      {
        path: "Signin",
        element: <RegisterUser />,
      },
      {
        path: "notes/:noteId",
        element: <Note />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
