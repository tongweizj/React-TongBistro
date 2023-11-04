import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { BookTimeProvider } from "./BookTimeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookTimeProvider>
        <App />
      </BookTimeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
