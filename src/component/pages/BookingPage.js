import Footer from "../../component/Footer";
import Nav from "../../component/Nav";
import BookingForm from "../reservePage/BookingForm";
import { useReducer } from "react";

const updateTimes = (availableTimes, index) => {
  let temp = [...availableTimes];
  temp[index] = temp[index] === "undefined" ? 1 : 0;
  return temp;
};

function BookingPage() {
  const initialState = Array.from({length:6});
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);
  return (
    <>
      <Nav />
      <main>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
