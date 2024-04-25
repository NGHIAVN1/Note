import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header/Navbar/navbar";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import LoginPage from "./Components/LoginPages";
import Root from "./Components/root";
import RegisterUser from "./Components/Register";
import SlideBar from "./Components/Header/Slidebar";
import Note from "./Components/note";
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
