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
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/img/1wasteimage.webp" className="one-card-image" alt="First Image" />
                                <div className="one-card-body">
                                    <h5 className="one-card-title">1: Zero Plastic Pledge</h5>
                                    <p className="one-card-text">*Reduce single-use plastic waste by not using cling wrap and sandwich bags during the challenge and replacing them with reusable containers.</p>
                                </div>
                            </div>
                            <div className="card-back">
                                <p>By reducing your single-use plastic waste, you can significantly reduce your environmental impact. Plastic pollution is a major issue, and it's important to make conscious efforts to reduce our reliance on single-use plastics.</p>
                            </div>
                        </div>
                    </div>

                    <div className="one-card">
                        <div className="card-inner">
                            <div className="card-front">
                                <img src="/img/2water.jpeg" className="one-card-image" alt="Second Image" />
                                <div className="one-card-body">
                                    <h5 className="one-card-title">2: Short Showers</h5>
                                    <p className="one-card-text">*Using water-saving techniques can save you money and diverts less water from our rivers, bays, and estuaries, which helps keep the environment health.</p>
                                </div>
                            </div>
                            <div className="card-back">
                                <p>Taking shorter showers can significantly reduce your water consumption, which is beneficial for both the environment and your wallet. By conserving water, you're helping to preserve this precious resource and maintain healthy ecosystems.</p>
                            </div>
                        </div>
                    </div>

                    {/* Add the remaining cards with the same structure */}
                </div>
            </section>
        </div>
    );
}

export default Cards;