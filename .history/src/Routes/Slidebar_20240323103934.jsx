import { Box, Typography, Tabs } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import Tab from "@mui/material/Tab";
// export async function loader() {
//   const notes = getNotes();
//   return { notes };
// }
export default function SlideBar() {
  const notes = useLoaderData();
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
        <nav>
          <ul>
            <li>
              {" "}
              <Link to={`notes/1`}>New Notes</Link>
            </li>
            <li>
              {" "}
              <Link to={`notes/2`}>Create Tags</Link>
            </li>
            <li>
              {" "}
              <Link to={`notes/3`}>New Collection</Link>
            </li>
            <li>
              {" "}
              <Link to={`notes/4`}>Trash</Link>
            </li>
          </ul>
        </nav>
      </Box>
    </div>
  );
}
