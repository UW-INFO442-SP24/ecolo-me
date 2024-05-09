import React, { useState, useEffect } from 'react';
import cardsData from '../data/ecochallenges.json';
import Challenge from './Challenge';

function Cards({ acceptedChallenges, totalChallenges, onAccept, onDecline, isChallengePage }) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    // Filter cards based on search query and category
    const filteredCards = cardsData.filter((card) =>
        (card.action.toLowerCase().includes(searchQuery) || card.description.toLowerCase().includes(searchQuery)) &&
        (filterCategory === '' || card.category === filterCategory)
    );

    useEffect(() => {
        if (isChallengePage && filteredCards.length > 0) {
            setCurrentCardIndex(Math.floor(Math.random() * filteredCards.length));  // Ensures a card is shown when page is loaded
        }
    }, [isChallengePage, filteredCards.length]);  // Now correctly depends on filteredCards

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const handleFilterChange = (event) => {
        setFilterCategory(event.target.value);
    };

    const progressPercent = acceptedChallenges ? (acceptedChallenges.length / totalChallenges) * 100 : 0;

    return (
        <div className={isChallengePage ? "challenge-container" : "card-container"}>
            <div className="search-and-filter">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    className="search-input"
                />
                <select
                    value={filterCategory}
                    onChange={handleFilterChange}
                    className="filter-select"
                >
                    <option value=''>Select Category</option>
                    <option value='Waste Management'>Waste Management</option>
                    <option value='Sustainable Consumption'>Sustainable Consumption</option>
                    <option value='Reuse & Recycle'>Reuse & Recycle</option>
                    <option value='Responsible Spending'>Responsible Spending</option>
                    <option value='Community'>Community</option>
                </select>
            </div>
            {isChallengePage ? (
                <>
                    <div className="progress-bar-container" style={{width: '100%'}}>
                        <div className="progress-bar" style={{width: `${progressPercent}%`}}>
                            {acceptedChallenges.length}/{totalChallenges} challenges completed
                        </div>
                    </div>
                    <Challenge
                        card={cardsData[currentCardIndex]}
                        onAccept={onAccept}
                        onDecline={onDecline}
                        showActions={true}
                    />
                </>
            ) : (
                filteredCards.map(card => (
                    <Challenge
                        key={card.id}
                        card={card}
                        onAccept={() => {}}
                        onDecline={() => {}}
                        showActions={false}
                    />
                ))
            )}
        </div>
    );
}

export default Cards;
