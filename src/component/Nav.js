import logo from "../assets/logo.png";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "../Homepage";
import BookingPage from "../BookingPage";
function Nav() {
  return (
    <div>
      nav
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About Little Lemon
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<BookingPage />}></Route>
      </Routes>
    </div>
  );
}
export default Nav;

//    <nav>
// <div id="logo">
//   <img src={logo} alt="LITTLE LEMON" />
// </div>
// <ul>
//   <li>
//     <a href="index.html">Home</a>
//   </li>
//   <li>
//     <a href="menu.html">Menu</a>
//   </li>
//   <li>
//     <a href="book.html">Book</a>
//   </li>
//   <li>
//     <a href="about.html">About</a>
//   </li>
// </ul>
// </nav>

// {/* <nav className="nav">
//       <Link to="/" className="nav-item">
//         Homepage
//       </Link>
//       <Link to="/booking" className="nav-item">
//         About Me
//       </Link>
//       {/* </nav> */}
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/booking" element={<BookingPage />} />
//       </Routes>{" "}
