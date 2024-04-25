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
  return <Pet type={attribute} />;
};
export default SuperPet;
