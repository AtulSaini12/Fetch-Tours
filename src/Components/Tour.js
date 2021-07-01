import React from "react";

export default function Tour(props) {
  const { tour, handleChange } = props;
  return (
    <div>
      <div className="single-tour-container">
        {/* Tour - Image */}
        <img src={tour.image} alt="Tour-Desc" />

        {/* Tour info container */}
        <div className="tour-info">
          {/* Tour display flex */}
          <div className="before-class tour-info-upperrow">
            <h3 className="tour-name">{tour.name}</h3>
            <h3 className="tour-price">{tour.price}</h3>
          </div>
          {/* Tour Description */}
          <div className="tour-info-lowerrow">
            <p>{tour.info}</p>
          </div>
          {/* Button - Container */}
        </div>
        <div className="btn-container">
          <button
            className="not-interested-btn"
            onClick={() => {
              handleChange(tour.id);
            }}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}
