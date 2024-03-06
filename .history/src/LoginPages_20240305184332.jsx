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
// const defaultTheme = createTheme();
const LoginPage = () => {
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
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ frontSize: 20 }} color={dark}>
              Login
            </Typography>
            <Box component="form" submit>
              <CardContent>
                <TextField
                  variant="standard"
                  label="Email"
                  fullWidth
                  margin="normal"
                  id="password"
                />
                <TextField
                  variant="standard"
                  id="password"
                  label="Password"
                  fullWidth
                  margin="normal"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
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
