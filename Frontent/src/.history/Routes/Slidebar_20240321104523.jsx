import { Box, Typography } from "@mui/material";

export default function SlideBar() {
  return (
    <div>
      <Box
        position={"relative"}
        sx={{ flexDirection: "column", display: "flex" }}
      >
        <Typography variant="h5">New Notes</Typography>
        <Typography variant="h5">Create Tags</Typography>
        <Typography variant="h5">Trash</Typography>
      </Box>
    </div>
  );
}
