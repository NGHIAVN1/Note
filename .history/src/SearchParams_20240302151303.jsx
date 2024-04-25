import { useState } from "react";
const SearchParams = () => {
  const [password, updatePassword] = useState("");
  const [username, updateUsername] = useState("");
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
          id={username}}
          value={username}
          placeholder="Username"
          onChange={(e) => {
            updateUsername(e.target.value);
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
