import {  useBookTime } from "../../BookTimeContext";
function BookSlot(props) {
  const { bookTime } = useBookTime();
  const listItems = bookTime.map((item, index) => {
    return (
      <option value={index}>
        {index + 17}:00-{item === undefined ? "Available" : "Unavailable"}
      </option>
    );
  });
  return (
    <>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={props.time}
        onChange={(e) => props.handleBookSlot(Number(e.target.value))}
      >
        {listItems}
      </select>
    </>
  );
}
export default BookSlot;
