import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Sidebar() {
  return (
    <Box
      sx={{
        flexDirection: "column",
        bgcolor: "background.paper",
        display: "flex",
        flex: "30%",
      }}
    >
      <Tabs
        orientation="vertical"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <ul>
          <li>
            <Link to="new">Tao Ghi Chu</Link>
          </li>
        </ul>
      </Tabs>
    </Box>
  );
}
