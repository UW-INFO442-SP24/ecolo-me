import React, { useState } from 'react';
import cardsData from '../data/ecochallenges.json';

function Cards() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleFilterChange = (event) => {
        setFilterCategory(event.target.value);
    };

    const filteredCards = cardsData.filter((card) =>
        (card.action.toLowerCase().includes(searchQuery) || card.description.toLowerCase().includes(searchQuery)) &&
        (filterCategory === '' || card.category === filterCategory)
    );

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
                    <label>
                        <select name='Filter' id='Filter' value={filterCategory} onChange={handleFilterChange}>
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

            <div className="card-container">
                {filteredCards.map((card) => (
                    <div key={card.id} className="one-card">
                        <img src={card.image} alt={card.action} className="one-card-image" />
                        <div className="one-card-body">
                            <h5 className="one-card-title">{card.action}</h5>
                            <p className="one-card-text">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;

