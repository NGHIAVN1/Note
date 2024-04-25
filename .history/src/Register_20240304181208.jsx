import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
      <Card sx={{ minWidth: 175 }}>
        <CardContent>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </CardContent>
      </Card>
    </div>
  );
};
export default RegisterUser;
