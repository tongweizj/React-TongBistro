import Footer from "../Footer";
import Nav from "../Nav";
import CallToAction from "../homePage/CallToAction";
import Specials from "../homePage/Specials";
import CustomersSay from "../homePage/CustomersSay";
import Chicago from "../homePage/Chicago";
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
