import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { CardHeader } from "@mui/material";
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
      <Container maxWidth="md">
        <Card sx={{ minWidth: 175 }}>
          <CardHeader content="Register Account"></CardHeader>
          <CardContent>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-basic"
                    label="Fist name"
                    variant="outlined"
                  >
                    <Input type="text" />
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField id="outlined-basic" label="" variant="outlined" />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={4}></Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};
export default RegisterUser;
