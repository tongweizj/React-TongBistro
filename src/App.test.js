import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './component/reservePage/BookingForm';
import { useReducer } from "react";

import BookingPage from './component/pages/BookingPage';

// test('Renders the BookingForm heading', () => {
//   const updateTimes = (availableTimes, index) => {
//     let temp = [...availableTimes];
//     temp[index] = temp[index] === "undefined" ? 1 : 0;
//     return temp;
//   };
//   const initialState = Array.from({length:6});
//   // const [availableTimes, dispatch] = useReducer(updateTimes, initialState);
//   render(<BookingForm availableTimes={initialState} updateTimes={updateTimes}  />);
//   const headingElement = screen.getByText("Book Now");
//   expect(headingElement).toBeInTheDocument();
// });

test('Renders the BookingForm heading', () => {

  // const [availableTimes, dispatch] = useReducer(updateTimes, initialState);
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
