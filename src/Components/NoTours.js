import React from "react";

export default function NoTours({ refreshPage }) {
  return (
    <div>
      <h1>No Tours Left to Display</h1>
      <img
        onClick={refreshPage}
        className="refresh-icon"
        alt="refresh"
        src="https://image.flaticon.com/icons/png/512/560/560512.png"
      />
      <div className="center-class">
        <div className="align-center">
          Click above Icon to refresh the Page :)
        </div>
      </div>
    </div>
  );
}
