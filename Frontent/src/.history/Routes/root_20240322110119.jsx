import { Outlet } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../Newnote";
async function loader() {}
export async function loader() {
  const note = await getNotes();
  return { Note };
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
