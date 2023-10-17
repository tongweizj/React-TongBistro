import CallToAction from "../component/CallToAction";
import Specials from "../component/Specials";
import CustomersSay from "../component/CustomersSay";
import Chicago from "../component/Chicago";
import logo from "../assets/logo.png";
import Main from "../component/Main";
import Footer from "../component/Footer";
import Nav from "../component/Nav";
function BookingPage() {
  return (
    <>
      <div className="nav">
        <div id="logo">
          <img src={logo} alt="LITTLE LEMON" />
        </div>
        <Nav />
      </div>
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

export default BookingPage;
