import { useState } from "react";
const COLORS = ["yellow", "red", "blue"];
let a = 0;
const SearchParams = () => {
  a++;
  const [location, updateLocation] = useState("");
  const [color, updateColor] = useState("");
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
          <select
            id="selector"
            onChange={(e) => {
              updateColor(e.target.value);
            }}
          >
            <option />
            {COLORS.map((color) => {
              <option key={color} value={color}>
                {color}
              </option>;
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
