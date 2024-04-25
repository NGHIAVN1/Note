import { Box, Typography } from "@mui/material";

import Tab from "@mui/material/Tab";
export default function SlideBar() {
  return (
    <div>
      <Box
        position={"relative"}
        sx={{ flexDirection: "column", display: "flex", marginRight: "10%" }}
      >
        <Tabs or></Tabs>
        <Typography variant="h5">New Notes</Typography>
        <Typography variant="h5">Create Tags</Typography>
        <Typography variant="h5">Trash</Typography>
      </Box>
    </div>
  );
}
