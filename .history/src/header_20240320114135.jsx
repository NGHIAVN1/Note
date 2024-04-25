import * as React from "react";
import { Box, Typography, AppBar, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Search = styled("div")(({ theme }) => ({
  position: "static",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
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
        <AppBar position="static" sx={{}}>
          <Toolbar sx={{ flexDirection: "row" }}>
            <Typography
              position={"static"}
              sx={{
                margin: "10px",
              }}
            >
              Note
            </Typography>

            <Search
              sx={{
                position: "relative",
                relative: {
                  position: relative,
                  left: "60px",
                },
              }}
            >
              <SearchIconWrapper></SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton></IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Header;
