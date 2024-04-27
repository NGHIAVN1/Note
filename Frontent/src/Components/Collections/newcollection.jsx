import { FormControl, TextField, Box, Button, Grid, Card } from "@mui/material";
import { useState, useContext } from "react";
import addNote from "../../Api/newnote";
import UserContext from "../../context/user-context";
import { Form } from "react-router-dom";
const newNote = () => {
  const user = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function handleSubmit(e) {
    console.log("note");
    addNote(title, content, JSON.parse(user))
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
          method="post"
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
              label="Name Collection"
              fullWidth
              variant="outlined"
              margin="normal"
              onChange={(e) => {
                setTitle(e.target.value);
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
export default newNote;
