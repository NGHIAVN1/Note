import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardHeader } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "./context/user-context";
import { useState } from "react";
import showNotes from "./Api/notes";
import { useParams } from "react-router-dom";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const user = useContext(UserContext);
  useEffect(() => {
    showNotes()
      .then((res) => {
        const data = res.data;
        setNotes(data);
        console.log(data);
        return data;
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ul>
      {notes.map((data) => (
        <div>
          <Card sx={{ maxWidth: 500, margin: "100px", background: "#edf2f6" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">clear</Button>
                <Button size="small">edit</Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </ul>
  );
}
