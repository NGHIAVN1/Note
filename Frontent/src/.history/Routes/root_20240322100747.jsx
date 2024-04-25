import { Outlet } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
// async function loader() {}
export async function loader() {
  const note = await getNote();
  return { SlideBar };
}

export default function Root() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}
