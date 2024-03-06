import { useState } from "react";
let a = 0;
const SearchParams = () => {
  a++;
  const [location, updateLocation] = useState("ssss");
  return (
    <div className="search-params">
      <form>
        <label id={location}>UserName</label>
        <input
          id={location}
          value={location}
          placeholder="Username"
          onChange={(e) => {
            e.target.value(updateLocation);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
