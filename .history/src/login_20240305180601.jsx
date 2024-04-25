import {
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { dark } from "@mui/material/styles/createPalette";
import Grid from "@mui/material/Grid";
const Login = () => {
  return (
    <div>
      <Container component={main} maxWidth={xs}>
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
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardHeader>
              <Typography sx={{ frontSize: 14 }} color={dark}>
                Login
              </Typography>
            </CardHeader>
            <CardContent>
              <Grid container spacing={2}>
                <TextField variant="standard" label="Email" />
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};
