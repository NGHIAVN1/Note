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
        value={value}
        sx={{
          borderRight: 1,
          borderColor: `darkblue`,
        }}
      ></Tabs>
    </Box>
  </div>;
};
export default Slidebar;
