import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { BoxHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";

const RegisterUser = () => {
  const [password, updatePassword] = useState("");

  return (
    <div>
      <Container fixed>
        <BoxContent>
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
        </BoxContent>
      </Container>
    </div>
  );
};
export default RegisterUser;
