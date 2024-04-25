const registerAccount = () => {
  return (
    <div>
      <h1>Register Account</h1>
      <form id="location">
        <label>Fist Name</label>
        <input placeholder="Fist Name" />
      </form>
      <form>
        <label>Last Name</label>
        <input placeholder="Last Name" />
      </form>
      <form>
        <label>Email</label>
        <input placeholder="Email" />
      </form>
      <form>
        <label>Password</label>
        <input placeholder="Password" />
        <input placeholder="RepeatsPassword" />
      </form>
    </div>
  );
};
export default registerAccount;
