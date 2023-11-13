import Footer from "../component/layouts/Footer";
import Nav from "../component/layouts/Nav";
import CallToAction from "../component/homePage/CallToAction";
import Specials from "../component/homePage/Specials";
import CustomersSay from "../component/homePage/CustomersSay";
import Chicago from "../component/homePage/Chicago";
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
