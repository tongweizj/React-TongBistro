function BookSlot(props) {

  const listItems = props.availableTimes.map((item, index) => {
    return (
      <option key={index} value={index}>
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
