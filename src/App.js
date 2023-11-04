import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./component/pages/HomePage";
import BookingPage from "./component/pages/BookingPage";
import NoMatch from "./component/pages/NoPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
