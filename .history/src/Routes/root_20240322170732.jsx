import { Outlet, useLoaderData, Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../notes";
import { useEffect } from "react";
export async function loader() {
  const note = await getNotes();
  return { note };
}
export default function Root() {
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
