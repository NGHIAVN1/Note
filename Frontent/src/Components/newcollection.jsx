import {
  Box,
  Button,
  TextField,
  Modal,
  Typography,
  CssBaseline,
  Alert,
} from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState, useRef } from "react";
import newCollection from "../Api/new_collection";
import { useContext } from "react";
import UserContext from "../context/user-context";
import {
  Form,
  Link,
  NavLink,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import Sidebar from "../route/Header/sidebar";
import HomePage from "../route/homepage";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NewCollection = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("user-data");
  const user = useContext(UserContext);
  const handleSubmit = async (e) => {
    await newCollection(name, JSON.parse(user))
      .then((response) => {
        const data = response.data;
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
    setName(" ");
  };
  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const ref = useRef(null);
  return (
    <CssBaseline>
      <Box
        sx={{
          display: "flex",
          background: "#eee",
          flexGrow: "1",
        }}
      >
        <Button
          sx={{
            marginLef: "10px",
            marginRight: "10px",
          }}
          onClick={handleOpen}
          startIcon={<AddCircleIcon />}
          disableRipple
        >
          <Link to={`collection/new`}> new </Link>
        </Button>
      </Box>
      <Modal open={show} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="arial">Add Collection</Typography>
          <TextField
            id="name"
            size="small"
            fullWidth
            onChange={(e) => {
              setName(e.target.value);
            }}
            sx={{
              background: "white",
              marginBottom: "20px",
            }}
          ></TextField>

          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{ marginLeft: "73%" }}
            color="success"
          >
            {
              <Link to={`/`} state={{ Sidebar: true }}>
                create
              </Link>
            }
          </Button>
        </Box>
      </Modal>
    </CssBaseline>
  );
};
export default NewCollection;
