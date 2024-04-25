import { Outlet, useLoaderData, Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Header/Navbar/navbar";
import SlideBar from "./Header/Slidebar/Slidebar";
// import { getNotes } from "../notes";
import { useEffect, useState } from "react";
// export async function loader() {
//   const note = await getNotes();
//   return { note };
// }
export default function Root() {
  [token, SetToken] = useState();
  if (!token) {
    return <Login SetToken={SetToken} />;
  }
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
