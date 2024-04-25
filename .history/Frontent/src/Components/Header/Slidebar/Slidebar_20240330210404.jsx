import { Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
const Slidebar = () => {
  <div>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <ul>
        <li>
          <Link to={`new`}> Tao ghi chu</Link>
        </li>
      </ul>
    </Box>
  </div>;
};
export default Slidebar;
