import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import Layout from "./Layout";
import NoMatch from "./pages/NoPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Homepage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
