import { Outlet, useLoaderData, Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Header/Navbar/navbar";
import SlideBar from "./Header/Slidebar/Slidebar";
// import { getNotes } from "../notes";
import { useEffect } from "react";
// export async function loader() {
//   const note = await getNotes();
//   return { note };
// }
export default function Root() {
  const notes = useLoaderData();
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
