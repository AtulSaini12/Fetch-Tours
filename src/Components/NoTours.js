import React from "react";

export default function NoTours({ refreshPage }) {
  return (
    <div>
      <h1>No Tours Left to Display</h1>
      <img
        onClick={refreshPage}
        className="refresh-icon"
        alt="refresh"
        src="https://img-premium.flaticon.com/png/512/1176/premium/1176428.png?token=exp=1625147358~hmac=ac27dd43c91d2cc3ffb8589627c1807f"
      />
      <div className="center-class">
        <div className="align-center">
          Click above Icon to refresh the Page :)
        </div>
      </div>
    </div>
  );
}
