import { useState, createContext, useEffect } from "react";
import { Box, IconButton, InputBase, Typography } from "@mui/material";
import Navbar from "./Header/Navbar/navbar";
import UserContext from "../context/user-context";
import { useNavigate } from "react-router-dom";
import Collection from "./collection";
import { isAuth } from "../Util/auth";
import { Outlet, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import NewCollection from "./newcollection";
import SearchIcon from "@mui/icons-material/Search";

const styleSearch = { ml: 1, flex: 1 };
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
        <Navbar />
        <Box
          sx={{ display: "-ms-flexbox", marginLeft: "20%", marginRight: "20%" }}
        >
          <Container>
            {/* <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                marginLeft: "80%",
                background: "#edecd3",
                border: "solid",
              }}
            >
              <InputBase placeholder="Search Collection" size="small" />
              <IconButton
                type="button"
                sx={{ p: "10px", flexDirection: "row-reverse" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Box> */}
          </Container>

          <NewCollection />
          <Collection />
          <Outlet />
        </Box>
      </div>
    </UserContext.Provider>
  );
}
