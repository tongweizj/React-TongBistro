import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedbookingPage from "./pages/ConfirmedBookingPage";
import NoMatch from "./pages/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/booking/comfirmed" element={<ConfirmedbookingPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
