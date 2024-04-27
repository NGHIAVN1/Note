import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./Components/LoginPages";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/homepage";
import RegisterUser from "./Components/Register";
import NewCollection from "./Components/newcollection";
const container = document.getElementById("root");
const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/collection",
        element: <NewCollection />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  { path: "/Signup", element: <RegisterUser /> },
]);

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);
