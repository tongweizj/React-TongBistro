function BookSlot(props) {

  const listItems = props.availableTimes.map((item, index) => {
    return (
      <option key={index} >
       {item}
      </option>
    );
  });
  return (
    <>
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        onChange={props.handleInputChange}
      >
        {listItems}
      </select>
    </>
  );
}
export default BookSlot;
