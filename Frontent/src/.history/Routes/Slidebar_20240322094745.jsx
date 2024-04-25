import { Box, Typography, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
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
          height: "1000px",
          width: "30%",
          border: "1",
        }}
      >
        <Link to={`newNote`}>New Notes</Link>
        <Link to={`CreateTag`}>Create Tags</Link>
      </Box>
    </div>
  );
}
