import { useState, createContext, useEffect } from "react";
import Navbar from "./Header/Navbar/navbar";
import UserContext from "../context/user-context";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../Util/auth";
import Slidebar from "./Header/Slidebar/Slidebar";
import { Outlet, Link } from "react-router-dom";
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
        <Slidebar />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
}
