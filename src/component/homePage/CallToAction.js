import herobanner from "../../assets/restauranfood.jpg";
function CallToAction() {
  return (
    <div className="fullbox herosection">
      <div id="herosection" className="box">
        <div className="info">
          <h2 className="title yellow">LITTLE LEMON</h2>
          <span className="subtitle white">Chicago</span>
          <p  className="lead-text white">
          Lorem insum dolor sit amet. lor Aorror corvollic ric lerom dol In
          tomrue reru veroratic lo go eror irrum ¿olor cit amet Aenean convalis
          nis loren do In tempus neglie venenatis k deler IACC
        </p>
          <button  className="button-primary">Reserve a Table</button>
        </div>
        <div  className="heroad">
          <img src={herobanner} alt="LITTLE LEMON" />
        </div>
      </div>
    </div>
  );
}
export default CallToAction;
