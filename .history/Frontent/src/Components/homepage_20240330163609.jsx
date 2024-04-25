import { useState, createContext } from "react";
import Navbar from "./Header/Navbar/navbar";
export default function HomePage() {
  const UserContext = createContext();
  const [user, setUser] = useState(localStorage.getItem("accessToken"));
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{user}</h1>
      </div>
      <Navbar></Navbar>
    </UserContext.Provider>
  );
}
