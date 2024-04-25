import { Box, Typography, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
export default function SlideBar() {
  return (
    <div>
      <Box
        position={"relative"}
        sx={{ flexDirection: "column", display: "flex", marginRight: "10%" }}
      >
        <Tabs orientation="vertical" variant="scrollable">
          <Tab label="Create Note" />
          <Tab label="Create Tags" />
        </Tabs>
      </Box>
    </div>
  );
}
