import Footer from "../component/Footer";
import Nav from "../component/Nav";
import CallToAction from "../component/CallToAction";
import Specials from "../component/Specials";
import CustomersSay from "../component/CustomersSay";
import Chicago from "../component/Chicago";
function Homepage() {
  return (
    <>
      <Nav />
      <main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
