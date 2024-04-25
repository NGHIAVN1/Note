import {
  FormControl,
  TextField,
  Box,
  InputLabel,
  Input,
  Card,
} from "@mui/material";
// import { useLoaderData } from "react-router-dom";
// import { getNotes } from "./notes";
// export async function loader() {
//   const note = await getNotes();
//   return { note };
// }
const Note = () => {
  // const note = useLoaderData();
  const note = {
    tittle: "",
    contents: "",
  };
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
          <Card variant="outlined" sx={{ margin: "100px", padding: "50px" }}>
            <TextField fullWidth label="fullWidth" id="fullWidth" />
          </Card>
        </Box>
      </div>
    </>
  );
};
export default Note;
