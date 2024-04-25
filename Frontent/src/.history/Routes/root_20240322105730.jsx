import { Outlet } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../Note";
// import { getItemsComponents } from "./Slidebar";
async function loader() {}
export async function loader() {
  const note = await getItemsComponents();
  return { SlideBar };
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