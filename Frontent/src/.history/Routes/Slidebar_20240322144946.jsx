import { Box, Typography, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
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
        {
          <nav>
            <ul>
              <li>
                {" "}
                <Link to={`items/1`}>New Notes</Link>
              </li>
              <li>
                {" "}
                <Link to={`items/2`}>Create Tags</Link>
              </li>
              <li>
                {" "}
                <Link to={`items/3`}>New Collection</Link>
              </li>
              <li>
                {" "}
                <Link to={`items/4`}>Trash</Link>
              </li>
            </ul>
          </nav>
        }
      </Box>
    </div>
  );
}
