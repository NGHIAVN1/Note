import { FormControl, TextField, Box, InputLabel } from "@mui/material";

const Notes = () => {
  return (
    <>
      <div>
        <Box position={"statics"} sx={{ height: "300px", width: "60%" }}>
          <FormControl>
            <InputLabel htmlFor="my-input">Title</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
      </div>
    </>
  );
};
export default Notes;
