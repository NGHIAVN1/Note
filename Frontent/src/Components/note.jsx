import {
  TextField,
  Box,
  Button,
  Card,
  FilledInput,
  IconButton,
} from "@mui/material";
import UserContext from "../context/user-context";
import { useState, useContext } from "react";
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import EditIcon from "@mui/icons-material/Edit";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import { CardActionArea, CardHeader } from "@mui/material";
import { useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import {
  Form,
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import addNote from "../Api/newnote";
import showNotes from "../Api/notes";
import SearchForm from "../searchparams";
import customNotes from "../Api/notes";
import { createContext } from "react";

const layout = {
  display: "flex",
  width: "70%",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "left",
};
const newNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const local = localStorage.getItem("user-data");
  const [notes, setNotes] = useState([]);
  const [custom, setCustom] = useState(null);
  const locate = useLocation();
  let id = useParams();
  const useContext = createContext();
  console.log(id);

  const toggleVisibility = (id) => {
    setCustom((prevId) => (prevId === id ? null : id));
  };

  async function handleSubmit(event) {
    await addNote(title, content, id.collectionID, JSON.parse(local))
      .then(function (response) {
        const data = response.data;
        alert(`Success`);

        return data;
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }
  // CRUD notes
  async function DeleteNotes(noteId) {
    await customNotes
      .delete(id.collectionID, noteId)
      .then((res) => {
        const data = res.data;
        alert("delete success");
        return data;
      })
      .catch((err) => {
        console.log(EvalError);
      });
  }

  // Show notes
  useEffect(() => {
    customNotes
      .show()
      .then((res) => {
        const data = res.data;
        setNotes(data);
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }, []);
  function UpdatesNotes(idNote) {
    customNotes.update(idNote, title, content).then((res) => {
      const data = res.data;
      alert("Edited Success");
      return data;
    });
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#f0f5f2",
        }}
      >
        <SearchForm />
      </div>{" "}
      <h1>{id.nameCollection}</h1>
      <div style={layout}>
        <br></br>
        <Box
          sx={{
            border: "10px",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "flex-end",
            width: "40%",
          }}
        >
          <TextField
            id={title}
            fullWidth
            variant="outlined"
            label="Title"
            margin="normal"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <TextField
            id={content}
            label="Content"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            margin="normal"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Button
            type="submit" //     headers: { Authorization: `Bearer ${userToken}` },
            variant="contained"
            color="success"
            onClick={handleSubmit}
          >
            add
          </Button>
        </Box>
        <div>
          <hr />
        </div>
        <Box sx={{}}>
          <ul>
            {notes
              .filter((s) => {
                return s.collectionId == id.collectionID;
              })
              .map((data) => (
                <div key={data._id}>
                  <Card
                    sx={{
                      width: "500px",
                      background: "#edf2f6",
                      margin: "50px",
                    }}
                  >
                    <Box>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {custom !== data._id && data.title}
                        </Typography>
                        {custom === data._id && (
                          <FilledInput
                            id={title}
                            fullWidth
                            name={data.title}
                            defaultValue={data.title}
                            hidden
                            sx={{ background: "White" }}
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                          ></FilledInput>
                        )}
                        <Typography variant="body2" color="text.secondary">
                          {custom !== data._id && data.content}
                        </Typography>
                        {custom === data._id && (
                          <FilledInput
                            id={content}
                            fullWidth
                            hidden
                            defaultValue={data.content}
                            sx={{ background: "white", marginTop: "5px" }}
                            onChange={(e) => {
                              setContent(e.target.value);
                            }}
                          ></FilledInput>
                        )}
                      </CardContent>
                      <CardActions>
                        <IconButton
                          onClick={() => {
                            DeleteNotes(data._id);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={() => toggleVisibility(data._id)}>
                          {custom === null ? (
                            <div>
                              <IconButton
                                onClick={() => UpdatesNotes(data._id)}
                              >
                                <SendIcon />
                              </IconButton>
                            </div>
                          ) : (
                            <div>
                              <EditIcon />
                            </div>
                          )}
                        </IconButton>
                      </CardActions>
                    </Box>
                  </Card>
                </div>
              ))}
          </ul>
        </Box>
      </div>
    </>
  );
};
export default newNote;
