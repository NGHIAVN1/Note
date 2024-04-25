import { Outlet, useLoaderData, Link } from "react-router-dom";
import { Box } from "@mui/material"; // Add the missing import statement
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../notes";

export async function loader() {
  const note = await getNotes();
  return { note };
}

export default function Root() {
  const { items } = useLoaderData();
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
