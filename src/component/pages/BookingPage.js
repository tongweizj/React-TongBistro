import Footer from "../../component/Footer";
import Nav from "../../component/Nav";
import BookingForm from "../reservePage/BookingForm";
function BookingPage() {
  return (
    <>
      <Nav />
      <main>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
