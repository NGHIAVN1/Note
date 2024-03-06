import { useState } from "react";
const SearchParams = () => {
  const [password, updatePassword] = useState("");
  return (
    <div className="search-params">
      <form>
        <label
          id={password}
          onChange={(e) => {
            updatePassword(e.target.value);
          }}
        >
          UserName
        </label>
        <input
          id={password}
          value={password}
          placeholder="Username"
          onChange={(e) => {
            updatePassword(e.target.value);
          }}
        />
        <label id={password}>Password</label>
        <input
          id={password}
          value={password}
          placeholder="Password"
          onChange={(e) => {
            updatePassword(e.target.value);
          }}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
