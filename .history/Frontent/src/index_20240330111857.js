import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataProvider from "./Context/DataProvider";
import LoginPage from "./Components/LoginPages";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <LoginPage />
    </DataProvider>
  </React.StrictMode>
);
