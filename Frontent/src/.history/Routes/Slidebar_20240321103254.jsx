import { Box, Typography } from "@mui/material";

export default function SlideBar() {
  return (
    <div>
      <Box
        position={"static"}
        sx={{ flexDirection: "column", display: "flex" }}
      >
        <Typography variant="h2">New Notes</Typography>
      </Box>
    </div>
  );
}
