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
          UserName:<p>{username}</p>
        </label>
        <input
          id={username}
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            updateUsername(e.target.value);
          }}
        />
        <label id={password}>
          Password
          <p>{password}</p>
        </label>
        <input
          id={password}
          type="password"
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
