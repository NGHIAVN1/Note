import { FormControl, TextField } from "@mui/material";

const Notes = () => {
  return (
    <>
      <div>
        <Box position={statics}>
          <FormControl>
            <InputLabel htmlFor="my-input">Title</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl>
        </Box>
      </div>
    </>
  );
};