import {
  CardContent,
  CardHeader,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { dark } from "@mui/material/styles/createPalette";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import auth from "../Api/auth";
// const defaultTheme = createTheme();
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    console.log("handle login");
    const userData = auth(email, password)
      .then(function (response.data.accessToken) {
        console.log(response);
        alert("Đăng nhập thành công ");
        const getData = response.data.accessToken;
      })
      .catch((error) => {
        console.log(error);
        alert("Thông tin đăng nhập không chính xác");
      });

    e.preventDefault();

    // return userData;
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ frontSize: 20 }} color={dark}>
              Login
            </Typography>
            <Box component="form">
              <CardContent>
                <TextField
                  variant="standard"
                  label="Email"
                  fullWidth
                  margin="normal"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  variant="standard"
                  id="password"
                  label="Password"
                  fullWidth
                  type="password"
                  margin="normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{}}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
