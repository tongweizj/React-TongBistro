import { useState } from "react";
function BookingForm() {
  const [formData, setFormData] = useState({date:"2023-11-27",time:"19:00",guests:"3",occasion:""});

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default HTML form behavior
    console.log("formData:",formData);
    setFormData(prevFormData=>({...prevFormData,date:"2023-11-27",time:"19:00",guests:"3",occasion:""})); // Clear the input fields after the form is submitted
    console.log("formData2:",formData);
    console.log("Form submitted!");
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
          onChange={(e) => setFormData(prevFormData=>({...prevFormData,date:e.target.value}))}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time "   value={formData.time} onChange={(e) => setFormData(prevFormData=>({...prevFormData,time:e.target.value}))}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number"  value={formData.guests} placeholder="1" min="1" max="10" id="guests"  onChange={(e) => setFormData(prevFormData=>({...prevFormData,guests:e.target.value}))} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion"  value={formData.occasion} onChange={(e) => setFormData(prevFormData=>({...prevFormData,occasion:e.target.value}))}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}
export default BookingForm;
