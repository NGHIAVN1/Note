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
          <Tab>
            <Typography variant="h5">New Notes</Typography>
          </Tab>
        </Tabs>

        <Typography variant="h5">Create Tags</Typography>
        <Typography variant="h5">Trash</Typography>
      </Box>
    </div>
  );
}
