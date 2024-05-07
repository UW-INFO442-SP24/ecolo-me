import React, { useState } from 'react';
import cardsData from '../data/ecochallenges.json';
import Challenge from './Challenge';

function Cards({ acceptedChallenges, totalChallenges, onAccept, onDecline }) {
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
                    <Challenge
                        key={card.id}
                        card={card}
                        onAccept={onAccept}
                        onDecline={onDecline}
                        acceptedChallenges={acceptedChallenges}
                        totalChallenges={totalChallenges}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cards;