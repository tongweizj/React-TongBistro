import Footer from "../component/layouts/Footer";
import Nav from "../component/layouts/Nav";
import { Link } from "react-router-dom";
function ConfirmedbookingPage() {
  return (
    <>
      <Nav />
      <main>
      <h2>订阅成功!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}

export default ConfirmedbookingPage;
