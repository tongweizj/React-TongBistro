import herobanner from "../assets/restauranfood.jpg";
function Herosection() {
  return (
    <div class="fullbox herosection">
      <div id="herosection" class="box">
        <div class="info">
          <h2>LITTLE LEMON</h2>
          <span>Chicago</span>
          <p>
            ChicagoChicagoChicagoChicagoChicagoChicagoChicagoChicagoChicago
            ChicagoChicagoChicago
          </p>
          <button>Reserve a Table</button>
        </div>
        <div class="heroad">
          <img src={herobanner} alt="LITTLE LEMON" />
        </div>
      </div>
    </div>
  );
}
export default Herosection;
