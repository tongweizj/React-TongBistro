import Reviewer from "./Reviewer";
function CustomersSay() {
  return (
    <div className="fullbox yellowsection">
      <div id="testimonials" className="box">
        <div className="header"><h2 className="section-title">Testimonials</h2></div>
        <div className="cards">
          <Reviewer />
          <Reviewer />
          <Reviewer />
          <Reviewer />
        </div>
      </div>
    </div>
  );
}
export default CustomersSay;
