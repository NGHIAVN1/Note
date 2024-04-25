import { useState, createContext } from "react";
import Navbar from "./Header/Navbar/navbar";
import UserContext from "../context/user-context";
export default function HomePage() {
  const [user, setUser] = useState(localStorage.getItem("user-data"));
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{user}</h1>
      </div>
      <Navbar></Navbar>
    </UserContext.Provider>
  );
}
