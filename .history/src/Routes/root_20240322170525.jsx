import { Outlet, useLoaderData, Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getNotes } from "../notes";

export default function Root() {
  const { items } = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const note = await getNotes(id); // Pass the id to the getNotes function
    };

    loadData();
  }, [id]); // Depend on the id so the effect runs again when the id changes

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
