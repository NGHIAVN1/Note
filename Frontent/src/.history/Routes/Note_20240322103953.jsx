import { FormControl, TextField, Box, InputLabel, Input } from "@mui/material";

const Notes = () => {
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
            <InputLabel htmlFor="my-input">Content</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
      </div>
    </>
  );
};
export default Notes;
