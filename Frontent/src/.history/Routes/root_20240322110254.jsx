import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../Newnote";

export async function loader() {
  const note = await getNotes();
  return { Newnote };
}

export default function Root() {
  const { Newnote } = useLoaderData;
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
