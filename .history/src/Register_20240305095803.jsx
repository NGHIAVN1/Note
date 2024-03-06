import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import BoxActions from "@mui/material/BoxActions";
import BoxContent from "@mui/material/BoxContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { BoxHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.5)" }}
  >
    •
  </Box>
);
const RegisterUser = () => {
  const [password, updatePassword] = useState("");

  return (
    <div>
      <Container fixed>
        <Box>
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
