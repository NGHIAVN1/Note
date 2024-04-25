import { Outlet, useLoaderData, Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header/navbar";
import SlideBar from "./Header/Slidebar";
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
        <Header />

        <Outlet />
      </div>
    </>
  );
}
