import { useState } from "react";
let a = 0;
const SearchParams = () => {
  a++;
  const [location, updateLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label id={location}>UserName</label>
        <input
          id={location}
          value={location}
          placeholder="Username"
          onChange={(e) => {
            updateLocation(e.target.value);
          }}
        />
        <label id={location}>Password</label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
