import React from "react";
import { Tour } from "./index";

export default function TourList({ tours, handleChange }) {
  //   const { tours } = props;
  return (
    <div>
      <header id="header-section">
        <h1>Our Tours...</h1>
      </header>
      <div>
        {tours.map((tour) => {
          return <Tour tour={tour} key={tour.id} handleChange={handleChange} />;
        })}
      </div>
    </div>
  );
}
