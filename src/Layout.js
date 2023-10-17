import logo from "./assets/logo.png";
import Footer from "./component/Footer";
import Nav from "./component/Nav";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
    return (
      <>
        {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
        <div className="nav">
          <div id="logo">
            <img src={logo} alt="LITTLE LEMON" />
          </div>
          <Nav/>
       
        </div>
        <Outlet />
        <Footer />
      </>
  
    );
  }

  export default Layout;