import logo from "../assets/logo.png";
import Main from "../component/Main";
import Footer from "../component/Footer";
import Nav from "../component/Nav";

function Homepage() {
  return (
    <>
        <div className="nav">
          <div id="logo">
            <img src={logo} alt="LITTLE LEMON" />
          </div>
          <Nav/>
        </div>
        <Main/>
        <Footer />
      </>
  );
}

export default Homepage;
