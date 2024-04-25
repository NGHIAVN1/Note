import { FormControl, TextField, Box, Button, Grid, Card } from "@mui/material";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import note from "../../Api/newnote";
// import { createNote } from "../notes";
const NewNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleSubmit(e) {
    console.log("note");
    note(title, content)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    e.preventDefault();
  }
  return (
    <>
      <div>
        <Box
          component="form"
          sx={{
            position: "relative",
            left: "7%",
            height: "300px",
            width: "60%",
          }}
        >
          {}
          <Card variant="outlined" sx={{ margin: "100px", padding: "50px" }}>
            <TextField
              id={title}
              label="Tieu de"
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <TextField
              id={content}
              fullWidth
              label="Noi Dung"
              variant="outlined"
              margin="normal"
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Luu
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </div>
    </>
  );
};
export default NewNote;
