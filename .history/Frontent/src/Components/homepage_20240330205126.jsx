import { useState, createContext, useEffect } from "react";
import Navbar from "./Header/Navbar/navbar";
import UserContext from "../context/user-context";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../utils/auth";
import Slidebar from "./Header/Slidebar/Slidebar";
import { Outlet } from "react-router-dom";
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
      <div></div>

      <Navbar />
    </UserContext.Provider>
  );
}
