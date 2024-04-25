import { Box, Typography, AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
const Header = () => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 3,
          border: 1,
        }}
      >
        <AppBar
          position="static"
          sx={{
            flexGrow: 2,
          }}
        >
          <Toolbar>
            <Typography sx={{ flex: 1 }}>Note</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Header;
