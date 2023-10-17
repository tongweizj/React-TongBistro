import Reviewer from "./Reviewer";
function CustomersSay() {
  return (
    <div class="fullbox">
      <div id="testimonials" class="box">
        <div class="header">Testimonials</div>
        <div class="cards">
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
