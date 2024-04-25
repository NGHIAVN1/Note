import { AppBar, Box } from "@mui/material";
import { AppBar } from "@mui/material/AppBar";
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
          position="relative"
          sx={{
            flexGrow: 2,
          }}
        ></AppBar>
      </Box>
    </div>
  );
};
