import restauran from "../assets/marioadriantop.jpg";
import chef2 from "../assets/Mario-Adrian.jpg";
function Chicago() {
  return (
    <div id="about" className="box">
      <div className="restauran-about">
        <h2 className="title yellow">About us</h2>
        <h3  className="subtitle">Mario & Adrian</h3>
        <p>
        We're Mario and Adrian, two passionate chefs who share a love for cooking Italian, Turkish, and Greek food.
Our menu features a wide range of delicious dishes that showcase the unique flavors and traditions of Italian, Turkish, and Greek cuisine.
        </p>
      </div>
      <div className="restauran-img">
        <img className="chefR" src={chef2} alt="restauran" />
        <img className="chefL" src={restauran} alt="restauran chef" />
      </div>
    </div>
  );
}
export default Chicago;
