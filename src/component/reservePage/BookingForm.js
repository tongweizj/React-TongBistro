import { useState } from "react";
import BookSlot from "./BookSlot";

function BookingForm(props) {
  const [formData, setFormData] = useState({
    date: `${props.date}`,
    time: `${props.availableTimes}`,
    guests: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    console.log('name:',e.target.name,'value:', e.target.value)
    if (e.target.name === "date") {
      props.updateTimes(e.target.value);
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };




  return (
    <div className="box highlight">
      <form className="booking-form" onSubmit={props.submitForm}>
        <label htmlFor="resDate">Choose date</label>
        <input
          type="date"
          id="resDate"
          placeholder="resDate"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <BookSlot
          availableTimes={props.availableTimes}
          handleInputChange={handleInputChange}
        />
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          value={formData.guests}
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          onChange={handleInputChange}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value=''
          name="occasion"
          onChange={handleInputChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Book Now" />
      </form>
    </div>
  );
}
export default BookingForm;
