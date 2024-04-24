import React, { useState } from 'react';

function Cards() {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchInput = (event) => {
        setSearchQuery(event.target.value)
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
        </div>
    );
}

export default Cards;