import { FormControl, TextField, Box, InputLabel, Input } from "@mui/material";
import { getNote } from "../Routes/notes";
export async function loader() {
  const note = getNote();
  return { note };
}
const Note = () => {
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
