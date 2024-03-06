import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { BoxHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
function BoxSystemProps() {
  return (
    <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "2px solid grey" }}
    ></Box>
  );
}

const RegisterUser = () => {
  const [password, updatePassword] = useState("");

  return (
    <div>
      <Container fixed>
        <Box height={400} width={600} alignItems="center">
          <Grid container alignItems="baseline" rowSpacing={2}>
            <Grid sx={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
            <Grid sx={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default RegisterUser;
