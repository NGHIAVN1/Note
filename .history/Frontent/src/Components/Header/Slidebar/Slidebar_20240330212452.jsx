import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        flexGrow: 2,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
        width: "30%",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Item One" />
      </Tabs>
    </Box>
  );
}
