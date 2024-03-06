import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

// under location
const [animal, updateAnimal] = useState("");

// under the location label
<label htmlFor="animal">
  Animal
  <select
    id="animal"
    value={animal}
    onChange={(e) => {
      updateAnimal(e.target.value);
      updateBreed("");
    }}
    onBlur={(e) => {
      updateAnimal(e.target.value);
      updateBreed("");
    }}
  >
    <option />
    {ANIMALS.map((animal) => (
      <option key={animal} value={animal}>
        {animal}
      </option>
    ))}
  </select>
</label>;
