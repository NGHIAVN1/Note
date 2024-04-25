import { FormControl, TextField, Box, Button, Grid, Card } from "@mui/material";
import { useLoaderData } from "react-router-dom";
// import { createNote } from "../notes";
const NewNote = () => {
  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            flex: "70%",
            padding: 20px
          }}
        >
          {}
          <Card variant="outlined" sx={{ margin: "100px", padding: "50px" }}>
            <TextField
              id="outlined-basic"
              label="Tieu de"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              fullWidth
              label="Noi Dung"
              variant="outlined"
              margin="normal"
            />

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button>Luu</Button>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </div>
    </>
  );
};
export default NewNote;
