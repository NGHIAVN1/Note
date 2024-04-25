import { Box, Typography, Tabs } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import Tab from "@mui/material/Tab";
export default function SlideBar() {
  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          flexDirection: "column",
          display: "flex",
          width: "30%",
          border: "1",
        }}
      >
        <Link to={`newNote`}>New Notes</Link>
        <Link to={`CreateTag`}>Create Tags</Link>
        <Link to={`CreateColection`}>New Collection</Link>
        <Link to={`Trash`}>Trash</Link>
      </Box>
    </div>
  );
}
