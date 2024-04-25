import { Outlet, useLoaderData, Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../notes";
import { useEffect } from "react";

export default function Root() {
  const { items } = useLoaderData();
  const { id } = useParams(); // Get the route parameters

  useEffect(() => {
    // Call the function to load data
    const loadData = async () => {
      const note = await getNotes(id); // Pass the id to the getNotes function
      // Do something with the note
    };

    loadData();
  }, [id]); // Depend on the id so the effect runs again when the id changes

  return (
    <>
      <div>
        <Header />
        <SlideBar />
        <Outlet />
      </div>
    </>
  );
}
