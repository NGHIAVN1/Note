import { FormControl, TextField, Box, InputLabel, Input } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { getNotes } from "./notes";
export async function loader() {
  const note = await getNotes();
  return { note };
}
const Note = () => {
  const note = useLoaderData();
  return (
    <>
      <div>
        <Box
          sx={{
            position: "relative",
            left: "30%",
            height: "300px",
            width: "60%",
          }}
        >
          {}
          <FormControl>
            <InputLabel htmlFor="my-input">Title</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
      </div>
    </>
  );
};
export default Note;
