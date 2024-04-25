import { Box, Typography, Tabs } from "@mui/material";
import Tab from "@mui/material/Tab";
export default function SlideBar() {
  return (
    <div>
      <Box
        position={"relative"}
        sx={{
          flexDirection: "column",
          display: "flex",
          marginRight: "10%",
          height: "200px%",
          width:30%,
          border: "1",
        }}
      >
        <Tabs orientation="vertical" variant="Standard" textColor="secondary">
          <Tab label="Create Note" />
          <Tab label="Create Tags" />
          <Tab label="Trash" />
          <Tab label="Saved" />
        </Tabs>
      </Box>
    </div>
  );
}
