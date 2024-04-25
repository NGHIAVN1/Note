import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Routes/root";
import root from "./Routes/root";

const App = () => {
  return (
    <div>
      <StrictMode>
        <root />
      </StrictMode>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
