import { Box, Typography } from "@mui/material";

export default function SlideBar() {
  return (
    <div>
      <Box
        position={"static"}
        sx={{ flexDirection: "column", display: "flex", marginLeft: "30%" }}
      >
        <Typography variant="h5">New Notes</Typography>,
        <Typography variant="h5">Create Tags</Typography>
      </Box>
    </div>
  );
}
