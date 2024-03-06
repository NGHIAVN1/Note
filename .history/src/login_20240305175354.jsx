import { Container, CssBaseline } from "@mui/material";

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
          <Card></Card>
        </Box>
      </Container>
    </div>
  );
};
