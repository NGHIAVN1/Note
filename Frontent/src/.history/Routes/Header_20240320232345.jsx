import * as React from "react";
import {
  Box,
  Typography,
  AppBar,
  Button,
  IconButton,
  MenuIcon,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";

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
    marginLeft: theme.spacing(3),
    width: "40%",
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));
const Header = () => {
  return (
    <div>
      <Box
        sx={{
          flexDirection: "row",
          border: 1,
        }}
      >
        <AppBar position="static">
          <Toolbar sx={{ flexDirection: "row" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
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
            <Search sx={{ position: "relative", left: "5%" }}>
              <SearchIconWrapper></SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
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
