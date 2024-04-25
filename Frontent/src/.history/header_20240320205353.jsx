import * as React from "react";
import { Box, Typography, AppBar, Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { positions } from "@mui/system";
const Search = styled("div")(({ theme }) => ({
  position: "static",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "40%",
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
              sx={{ marginLeft: "30%", marginRight: "30px" }}
            >
              <Typography sx={{ padding: "2px" }}>Login</Typography>
            </Button>
            <Button variant="contained" sx={{ flexDirection: "row" }}>
              <Typography x={{ padding: "2px" }}>Sign up</Typography>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Header;
