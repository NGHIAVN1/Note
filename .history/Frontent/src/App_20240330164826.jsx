import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./Components/LoginPages";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Components/homepage";
const container = document.getElementById("root");
const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);
