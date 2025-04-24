import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

function Main() {
  const navigate = useNavigate();

  function submitForm() {
    navigate("/confirmedbooking");
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={<BookingForm submitForm={submitForm} />}
        />
        <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
