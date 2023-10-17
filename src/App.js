import "./App.css";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Homepage from "./Homepage";
import { Routes, Route, Link } from "react-router-dom";
import BookingPage from "./BookingPage";
function App() {
  return (
    <>
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
      <Homepage />
    </>
  );
}

export default App;
