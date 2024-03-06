import { useState } from "react";
const RegisterUser = () => {
  const [password, updatePassword] = useState("");

  return (
    <div className="location">
      <form>
        <input id={password} placeholder="Password" />
        <submit>Click</submit>
      </form>
    </div>
  );
};
export default RegisterUser;
