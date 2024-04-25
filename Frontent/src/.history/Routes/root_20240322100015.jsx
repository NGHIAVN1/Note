import { Outlet } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
// async function loader() {}
async function loader() {
  const note = await getNote();
  return { SlideBar };
}

export default function Root() {
  return (
    <>
      <div>
        <Header />
        {/* <SlideBar /> */}
        <Outlet />
      </div>
    </>
  );
}
