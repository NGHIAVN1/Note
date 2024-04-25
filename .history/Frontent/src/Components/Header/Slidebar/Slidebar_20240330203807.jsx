import { Box, Tab, Tabs } from "@mui/material";
const Slidebar = () => {
  <div>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
      }}
    >
      <Tabs
        orientation="vertical"
        sx={{
          borderRight: 1,
          borderColor: `darkblue`,
        }}
      ></Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  </div>;
};
export default Slidebar;
