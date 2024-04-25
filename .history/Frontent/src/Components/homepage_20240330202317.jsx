import { useState, createContext, useEffect } from "react";
import Navbar from "./Header/Navbar/navbar";
import UserContext from "../context/user-context";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../utils/auth";
export default function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("user-data"));
  useEffect(() => {
    if (!isAuth()) {
      navigate("/login");
    }
  });
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{user}</h1>
      </div>
      </Navbar>
    </UserContext.Provider>
  );
}
