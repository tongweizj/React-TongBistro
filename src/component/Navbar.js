import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="LITTLE LEMON" />
      </div>
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="menu.html">Menu</a>
        </li>
        <li>
          <a href="book.html">Book</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
