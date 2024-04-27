import { Box, Button, TextField, Modal, Typography } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState, useRef } from "react";
import newCollection from "../Api/newcollection";

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

const NewCollection = (event) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit() {
    newCollection(name).then((response) => {
      console.log(response);
      alert("data inserted suceess");
    });
    event.preventDefault();
  }

  const handleOpen = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const ref = useRef(null);
  return (
    <div>
      <Box sx={{ display: "-ms-flexbox", background: "#eee" }}>
        <Button
          sx={{
            marginLef: "10px",
            marginRight: "10px",
          }}
          onClick={handleOpen}
          startIcon={<AddCircleIcon />}
          disableRipple
        >
          New
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
            sx={{ marginLeft: "310px" }}
            color="success"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default NewCollection;
