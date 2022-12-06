import React from "react";


function Search({ searchQuery, setSearchQuery }) {

    function handleSearchChange(event){
        setSearchQuery(event.target.value)
    }

    function handleSortChange(event) {
        onChangeSort(event.target.value);
    }

    return (
        <div className="search">
            <input 
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search..."
            />
                  <strong>Sort by:</strong>
            <label>
                <input
                type="radio"
                value="Alphabetically"
                name="sort"
                checked={sortBy === "Alphabetically"}
                onChange={handleSortChange}
                />
                Alphabetically
            </label>
        </div>
    );
}

export default Search;