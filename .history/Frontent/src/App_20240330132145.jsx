import React from "react";
import ReactDOM from "react-dom/client";

import LoginPage from "./Components/LoginPages";

const container = document.getElementById("root");
const App = () => {
  return (
    <>
      '
      <div>
        <LoginPage />
      </div>
    </>
  );
};
const root = ReactDOM.createRoot(container);
root.render(<App />);
