import { useState, useEffect } from "react";
const SearchParams = () => {
  const [password, updatePassword] = useState("");
  const [username, updateUsername] = useState("");
  useEffect(() => {
    requestPets();
  });
  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
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
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
