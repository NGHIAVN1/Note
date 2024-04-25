import { Box, Tab, Tabs } from "@mui/material";
const Slidebar = () => {
  <div>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        aria-label="Vertical tabs example"
        width: "30%",
      }}
    >
      <Tabs
        orientation="vertical"
        sx={{
          borderRight: 1,
          borderColor: `darkblue`,
        }}
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </Box>
  </div>;
};
export default Slidebar;
