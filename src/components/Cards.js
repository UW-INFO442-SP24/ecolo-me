import React, { useState } from 'react';

function Cards() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value);
    }

    return (
      <div>
        <div className="search-container">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchInput}
            />
          </div>
        </div>
        <div className="card-container">
          <div className="one-card">
            <div className="card-inner">
              <div className="card-front">
                <img src="/img/wasteimage.webp" className="one-card-image" alt="First Image" />
                <div className="one-card-body">
                  <h5 className="one-card-title">1: Zero Plastic Pledge</h5>
                </div>
              </div>
              <div className="card-back">
                <div className="one-card-body">
                  <p className="one-card-text">*Reduce single-use plastic waste by not using cling wrap and sandwich bags during the challenge and replacing them with reusable containers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="one-card">
            <div className="card-inner">
              <div className="card-front">
                <img src="/img/2water.jpeg" className="one-card-image" alt="Second Image" />
                <div className="one-card-body">
                  <h5 className="one-card-title">2: Short Showers</h5>
                </div>
              </div>
              <div className="card-back">
                <div className="one-card-body">
                  <p className="one-card-text">*Using water-saving techniques can save you money and diverts less water from our rivers, bays, and estuaries, which helps keep the environment health.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="one-card">
            <div className="card-inner">
              <div className="card-front">
                <img src="/img/3fashion.webp" className="one-card-image" alt="Third Image" />
                <div className="one-card-body">
                  <h5 className="one-card-title">3: Fast Fashion Detox</h5>
                </div>
              </div>
              <div className="card-back">
                <div className="one-card-body">
                  <p className="one-card-text">*Intervention project which aims to provide practical support for the adoption of responsible clothing consumption habits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cards;