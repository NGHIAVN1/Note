const Pet = (props) => {
  return (
    <div>
      <h1>{props.type.animal}</h1>,<h2>{props.type.name}</h2>
    </div>
  );
};
const SuperPet = () => {
  const attribute = {
    animal: "bird",
    name: "lunar",
  };
  return (<h2>Welcome Back</h2>), (<Pet type={attribute} />);
};
export default SuperPet;
