import logo from "../assets/footer-logo.png";
function Footer() {
  return (
    <footer>
      <div class="footer-logo">
        <img src={logo} width="100%" alt="tong" />
      </div>
      <div>
        <h5>Doormate Navigation</h5>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="menu.html">Menu</a>
          </li>
          <li>
            <a href="reservations.html">Reservations</a>
          </li>
          <li>
            <a href="order.html">Order Online</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li>
            <a href="index.html">Address</a>
          </li>
          <li>
            <a href="menu.html">Phone Number</a>
          </li>
          <li>
            <a href="book.html">Email</a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Social Media Links</h5>
        <ul>
          <li>
            <a href="index.html">Facebook</a>
          </li>
          <li>
            <a href="about.html">Instagram</a>
          </li>
          <li>
            <a href="menu.html">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
