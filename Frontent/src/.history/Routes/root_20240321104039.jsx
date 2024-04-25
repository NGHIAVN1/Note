import { Outlet } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
export default function Root() {
  return (
    <>
      <div>
        <SlideBar />
        <Outlet />
      </div>
    </>
  );
}
