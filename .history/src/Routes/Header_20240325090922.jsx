import * as React from "react";
import { Box, Typography, AppBar, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import SlideBar from "./Slidebar";

const Search = styled("div")(({ theme }) => ({
  position: "static",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "70%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));
const Header = () => {
  const [search, setSearch] = useState("Search Information");
  return (
    <div>
      <Box
        sx={{
          flexDirection: "row",
        }}
      >
        <AppBar position="static" color="transparent">
          <Toolbar sx={{ flexDirection: "row" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 3 }}
              onClick={this.handleClick}
            >
              <SlideBar></SlideBar>
              <MenuIcon />
            </IconButton>
            <Typography
              position={"static"}
              sx={{
                margin: "10px",
              }}
            >
              Note
            </Typography>
            <Search sx={{ position: "relative", left: "10%" }}>
              <SearchIconWrapper></SearchIconWrapper>
              <StyledInputBase
                onChange={(p) => setSearch(p.target.value)}
                placeholder={search}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box></Box>
            <Button
              variant="contained"
              sx={{ marginLeft: "60%", marginRight: "30px" }}
            >
              <Link to={`Login`} underline="none">
                Login
              </Link>
            </Button>
            <Button variant="contained">
              <Link to={`Signin`} under>
                Signin
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Header;
