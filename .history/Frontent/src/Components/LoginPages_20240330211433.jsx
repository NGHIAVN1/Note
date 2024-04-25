import { CardContent, CssBaseline, TextField, Typography } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
import { isAuth } from "../Util/auth";
import { Link } from "react-router-dom";
// const defaultTheme = createTheme();
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate("/");
    }
  });
  const handleSubmit = async (e) => {
    console.log("handle login");
    auth(email, password)
      .then(function (response) {
        console.log(response);
        alert("Đăng nhập thành công");
        const data = response.data;
        if (data) {
          localStorage.setItem("user-data", JSON.stringify(data));
          navigate("/");
        } else {
          localStorage.removeItem("user-data");
        }
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
            <Typography component="h1" sx={{ frontSize: 20 }} color={dark}>
              Đăng nhập
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
                  label="Mật khẩu"
                  fullWidth
                  type="password"
                  margin="normal"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Ghi nhớ mật khẩu"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Đăng nhập
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to={`/Signup`}>
                      Bạn chưa có tài khoản? Đăng ký tài khoản.
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Box>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
