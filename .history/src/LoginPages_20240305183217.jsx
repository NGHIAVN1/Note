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
            <Typography sx={{ frontSize: 14 }} color={dark}>
              Login
            </Typography>

            <CardContent>
              <TextField variant="standard" label="Email" fullWidth />
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
export default LoginPage;
