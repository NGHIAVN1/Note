import { Outlet, useLoaderData, Link } from "react-router-dom";
import Header from "./Header";
import SlideBar from "./Slidebar";
import { getItems } from "../items";
export async function loader() {
  const note = await getItemss();
  return { items };
}

export default function Root() {
  // const { items } = useLoaderData();
  return (
    <>
      <div>
        <Box
          sx={{
            position: "absolute",
            flexDirection: "column",
            display: "flex",
            width: "30%",
            border: "1",
          }}
        >
          <ul>
            <li>
              {" "}
              <Link to={`items/1`}>New Notes</Link>
            </li>
            <li>
              {" "}
              <Link to={`items/2`}>Create Tags</Link>
            </li>
            <li>
              {" "}
              <Link to={`items/3`}>New Collection</Link>
            </li>
            <li>
              {" "}
              <Link to={`items/4`}>Trash</Link>
            </li>
          </ul>
        </Box>

        <Header />
        <SlideBar />
        <Outlet />
      </div>
    </>
  );
}
//
