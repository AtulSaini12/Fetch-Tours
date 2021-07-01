function App() {
  return (
    <div>
      {/* Header -section */}
      <header id="header-section">
        <h1>Our Tours...</h1>
      </header>

      {/*Single Tour  */}
      <div className="single-tour-container">
        {/* Tour - Image */}
        <img
          src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"
          alt="Tour-Image"
        />

        {/* Tour info container */}
        <div className="tour-info">
          {/* Tour display flex */}
          <div className="before-class tour-info-upperrow">
            <h3 className="tour-name">Best of Paris in 7 Days Tour</h3>
            <h3 className="tour-price">$1,995</h3>
          </div>
          {/* Tour Description */}
          <div className="tour-info-lowerrow">
            <p>
              Paris is synonymous with the finest things that culture can offer
              — in art, fashion, food, literature, and ideas. On this tour, your
              Paris-savvy Rick Steves guide will immerse you in the very best of
              the City of Light: the masterpiece-packed Louvre and Orsay
              museums, resilient Notre-Dame Cathedral, exquisite
              Sainte-Chapelle, and extravagant Palace of Versailles. You'll also
              enjoy guided neighborhood walks through the city's historic heart
              as well as quieter moments to slow down and savor the city's
              intimate cafés, colorful markets, and joie de vivre. Join us for
              the Best of Paris in 7 Days!
            </p>
          </div>
          {/* Button - Container */}
        </div>
        <div className="btn-container">
          <button className="not-interested-btn">Not Interested</button>
        </div>
      </div>
    </div>
  );
}

export default App;
