import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import RegisterUser from "./Register";
import LoginPage from "./LoginPages";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <StrictMode>
        <Home />
      </StrictMode>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
