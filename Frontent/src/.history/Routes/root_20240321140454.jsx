import { Outlet, loader } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
async function loader() {}
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
