import { useState } from "react";
const COLORS = ["yellow", "red", "blue"];
const SearchParams = () => {
  const [location, updateLocation] = useState("Search", "Page");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="colors">
          Colors
          <select id="selector">
            <option id="location" value={COLORS}>
              o
            </option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
