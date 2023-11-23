import Footer from "../component/layouts/Footer";
import Nav from "../component/layouts/Nav";
import BookingForm from "../component/reservePage/BookingForm";
import { useReducer, useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "../utils/Api";
import { getTodayDate } from "../utils/date";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const initDate = new Date();
  const initTimes = (initAvailableTimes) => [
    ...initAvailableTimes,
    ...fetchAPI(initDate),
  ];
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date)); // fetchAPI returns a list of available times for the selected date
    return response.length > 0 ? response : availableTimes;
  };

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initTimes);
  const navigate = useNavigate();
  useEffect(() => {
    if (isFormSubmitted) {
      setIsFormSubmitted(false);
      navigate("/booking/comfirmed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmitted]);

  // 提交form的操作
  const submitForm = (formData) => {
    console.log('onSubmit:',formData)
    let response = submitAPI();
    if (response) setIsFormSubmitted(true);
  };
  return (
    <>
      <Nav />
      <main className="background-imge">
        <BookingForm
          date={getTodayDate()}
          availableTimes={availableTimes}
          updateTimes={dispatch}
          submitForm={submitForm}
        />
      </main>
      <Footer />
    </>
  );
}

export default BookingPage;
