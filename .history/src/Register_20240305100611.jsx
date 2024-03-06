import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { BoxHeader } from "@mui/material";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
function BoxContent() {
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
