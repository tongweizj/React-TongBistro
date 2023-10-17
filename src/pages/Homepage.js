import CallToAction from "../component/CallToAction";
import Specials from "../component/Specials";
import CustomersSay from "../component/CustomersSay";
import Chicago from "../component/Chicago";

function Homepage() {
  return (
    <>
      <main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
    </>
  );
}

export default Homepage;
