import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider
}
import LoginPage from "./Components/LoginPages";
import { createBrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const App = createBrowserRouter([{
  path: "/",
  element: <div>"Hello World</div>
}]) 

const root = ReactDOM.createRoot(container);
root.render(
  
<App />


);
