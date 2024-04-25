import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../notes";
export async function loader() {
  const note = await getNotes();
  return { items };
}

export default function Root() {
  // const { items } = useLoaderData();
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
