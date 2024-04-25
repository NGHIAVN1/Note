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
import { useState } from "react";
import Authen from "../Api/auth";
// const defaultTheme = createTheme();
const LoginPage = () => {
  const handleSubmit = async () => {
    const userData = Authen(email, password).then(function (response) {
      console.log(response);
    });
    return userData;
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            <Box component="form" submit onSubmit={handleSubmit}>
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
                  onClick={() => {}}
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
LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default LoginPage;
