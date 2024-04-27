import React, { useState } from 'react';

function Cards() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value);
}
   
    return (
        <div>
            <section className="search-and-filter">
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

                <div className="filter-container">
                    <label htmlFor="Filter">
                        <select name='Filter' id='Filter'>
                            <option value='' disabled>Select Category</option>
                            <option value='Waste Management'>Waste Management</option>
                            <option value='Sustainable Consumption'>Sustainable Consumption</option>
                            <option value='Reuse & Recycle'>Reuse & Recycle</option>
                            <option value='Responsible Spending'>Responsible Spending</option>
                            <option value='Community'>Community</option>
                        </select>
                    </label>
                </div>
            </section>

        <section>
            <div className="card-container">
                <div className="one-card">
                    <img src="/img/1wasteimage.webp" className="one-card-image" alt="First Image"/>
                    <div className="one-card-body">
                        <h5 className="one-card-title">1: Zero Plastic Pledge</h5>
                        <p className="one-card-text">*Reduce single-use plastic waste by not using cling wrap and sandwich bags during the challenge and replacing them with reusable containers.</p>
                    </div>
                </div>

                <div className="one-card">
                    <img src="/img/2water.jpeg" className="one-card-image" alt="Second Image"/>
                    <div className="one-card-body">
                        <h5 className="one-card-title">2: Short Showers</h5>
                        <p className="one-card-text">*Using water-saving techniques can save you money and diverts less water from our rivers, bays, and estuaries, which helps keep the environment health.</p>
                    </div>
                </div>

                <div className="one-card">
                    <img src="/img/3fashion.webp" className="one-card-image" alt="Third Image"/>
                    <div className="one-card-body">
                        <h5 className="one-card-title">3: Fast Fashion Detox</h5>
                        <p className="one-card-text">*Intervention project which aims to provide practical support for the adoption of responsible clothing consumption habits.</p>
                    </div>
                </div>

                <div className="one-card">
                    <img src="/img/4donatefood.jpeg" className="one-card-image" alt="Second Image"/>
                    <div className="one-card-body">
                        <h5 className="one-card-title">4: Donate Left-Overs</h5>
                        <p className="one-card-text">*Decrease the amount of food waste you produce to minimize your environmental impact.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
}

export default Cards;