import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Nav() {
  return (
    <div className="nav">
      <div id="logo">
        <img src={logo} alt="LITTLE LEMON" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
