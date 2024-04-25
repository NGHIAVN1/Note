import {
  FormControl,
  TextField,
  Box,
  InputLabel,
  Input,
  Card,
} from "@mui/material";
import { useLoaderData } from "react-router-dom";
// import { createNote } from "../notes";
const Note = () => {
  return (
    <>
      <div>
        <Box
          component={form}
          sx={{
            position: "relative",
            left: "30%",
            height: "300px",
            width: "60%",
          }}
        >
          {}
          <Card variant="outlined" sx={{ margin: "100px", padding: "50px" }}>
            <TextField id="outlined-basic" label="Tieu de" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Noi Dung"
              variant="outlined"
            />
            <Button>Luu</Button>
          </Card>
        </Box>
      </div>
    </>
  );
};
export async function loader(request) {}
export default Note;
