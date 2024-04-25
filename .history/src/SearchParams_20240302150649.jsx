import { useState } from "react";
const SearchParams = () => {
  const [location, updateLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label
          id={location}
          onChange={(e) => {
            updateLocation(e.target.value);
          }}
        >
          UserName
        </label>
        <input
          id={location}
          value={location}
          placeholder="Username"
          onChange={(e) => {
            updateLocation(e.target.value);
          }}
        />
        <label id={location}>Password</label>
        <input
          id={location}
          value={location}
          placeholder="Password"
          onChange={(e) => {
            updateLocation(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
