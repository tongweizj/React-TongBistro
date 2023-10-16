import restauran from "../assets/restaurant-chef.jpg";
function About() {
  return (
    <div id="about" class="box">
      <div class="restauran-about">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem insum dolor sit amet. lor Aorror corvollic ric lerom dol In
          tomrue reru veroratic lo go eror irrum ¿olor cit amet Aenean convalis
          nis loren do In tempus neglie venenatis k deler IACC
        </p>
      </div>
      <div class="restauran-img">
        <img src={restauran} />
      </div>
    </div>
  );
}
export default About;
