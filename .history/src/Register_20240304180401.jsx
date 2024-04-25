import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const RegisterUser = () => {
  const [password, updatePassword] = useState("");

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <form>
            <input id={password} placeholder="Password" />
            <submit>Click</submit>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
export default RegisterUser;
