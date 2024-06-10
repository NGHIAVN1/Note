import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import LoginPage from "./Components/LoginPages";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./route/homepage";
import newNote from "./Components/note";
import RegisterUser from "./Components/Register";
import CollectionView from "./Components/note";
import ErrorPage from "./error-page";
import Index from ".";
const container = document.getElementById("root");
const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "collection/:collectionID/:nameCollection",
        element: <CollectionView />,
        children: [{ path: "note", element: <newNote /> }],
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
