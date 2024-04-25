const Pet = (props) => {
  return (
    <div>
      <h1>{props.animal}</h1>,<h2>{props.name}</h2>
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
