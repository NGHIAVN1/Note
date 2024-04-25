import { Box, Tab, Tabs } from "@mui/material";
import { Link } from "react-router-dom";
const Slidebar = () => {
  <div>
    {/* <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    > */}
    <nav>
      <ul>
        <li>
          <p>
            <Link to={`new`}> Tao ghi chu</Link>
          </p>
        </li>
      </ul>
    </nav>
    {/* </Box> */}
  </div>;
};
export default Slidebar;
