import { useState } from "../../Frontent/node_modules/@types/react";

const searchParam = () => {
  [setSearch, updatesSearch] = useState("Search Information");
  async function loaderData() {
    const data = await fetch("http://noteapp.com/data.json");
  }
};
