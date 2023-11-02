import SpecialsItem from "./SpecialsItem";
import imgA from "../assets/Asset22.png";
import imgB from "../assets/Asset23.png";
import imgC from "../assets/Asset24.png";
const data = [
  {
    id: "1",
    title: "Tiramisu",
    description: "The best tiramisu in town",
    image: imgA,
    price: "$5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    image: imgB,
    price: "$4.50",
  },
  {
    id: "3",
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image: imgC,
    price: "$6.00",
  },
];

function Specials() {
  const listItems = data.map((item) => {
    return (
      <li key={item.id} className="cards_item">
        <SpecialsItem data={item} />
      </li>
    );
  });
  return (
    <div className="box highlight">
      <div className="header">
        <h2 className="section-title">This weeks specials!</h2>
        <button className="button-primary">Online Menu</button>
      </div>
      <div className="food-cards">
        <ul className="cards">{listItems}</ul>
      </div>
    </div>
  );
}
export default Specials;
