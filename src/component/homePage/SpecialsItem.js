function SpecialsItem(props) {
  const item = props.data;
  return (
    <div className="card">
      <div className="card_image">
        <img src={item.image} alt="Greek Salad" />
      </div>
      <div className="card_content">
        <div className="card_title">
          <div className="card_name">{item.title}</div>
          <span className="card_price yellowred">{item.price}</span>
        </div>
        <p className="card_text">{item.description}</p>
        <button className="button-txt">
          <a href="/">Order a delivery</a>
        </button>
      </div>
    </div>
  );
}
export default SpecialsItem;
