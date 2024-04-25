import { Box, Typography, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
export default function SlideBar() {
  return (
    <div>
      <Box
        position={"relative"}
        sx={{
          display: "flex",
          width: "30%",
          height: "10%",
          border: "1",
        }}
      >
        {/* <Tabs orientation="vertical" variant="Standard" textColor="secondary">
          <Tab label="Create Note" />
          <Tab label="Create Tags" />
          <Tab label="Trash" />
          <Tab label="Saved" />
        </Tabs> */}
      </Box>
    </div>
  );
}
