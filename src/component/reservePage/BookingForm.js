import { useState } from "react";
import BookSlot from "./BookSlot";
import {  useBookTime } from "../../BookTimeContext";
function BookingForm() {
  const [formData, setFormData] = useState({
    date: "2023-11-27",
    time: "19:00",
    guests: "3",
    occasion: "",
  });
  const {toggleTime} = useBookTime();
  const [selectedSlot, setSelectedSlot] = useState(100);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default HTML form behavior
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: "2023-11-27",
      guests: "3",
      occasion: "",
    })); // Clear the input fields after the form is submitted
    toggleTime(selectedSlot);
  };
  const handleBookSlot = (index) => {
    setSelectedSlot(index);
    let timeStr = `${index + 17}:00`;
    setFormData((prevFormData) => ({ ...prevFormData, time: timeStr }));
  };
  return (
    <div className="box highlight">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          id="resDate"
          placeholder="resDate"
          name="resDate"
          value={formData.date}
          onChange={(e) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              date: e.target.value,
            }))
          }
        />
        <BookSlot handleBookSlot={handleBookSlot} />
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          value={formData.guests}
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          onChange={(e) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              guests: e.target.value,
            }))
          }
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={(e) =>
            setFormData((prevFormData) => ({
              ...prevFormData,
              occasion: e.target.value,
            }))
          }
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}
export default BookingForm;
