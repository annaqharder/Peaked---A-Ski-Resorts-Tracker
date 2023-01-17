import React from "react";


function Search({ searchQuery, setSearchQuery, onChangeSort, sortBy, filterBy, onChangeFilter}) {

    function handleSearchChange(event){
        setSearchQuery(event.target.value)
    }

    function handleSortChange(event) {
        onChangeSort(event.target.value);
    }

    function handleFilterChange(event) {
        onChangeFilter(event.target.value)
    }

    return (
        <div className="search-container">
            <div>
                <strong> Search for Resort: </strong>
                        <input
                            id="searchbar"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder=" Resort Name ..."
                        />
            </div>
            <div id="filter-container">
            <label>
                <strong> Filter by State/Providence: </strong>
                <select onChange={handleFilterChange} value={filterBy} id="filterbar">
                <option>All</option>
                <optgroup label="United States">
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massacusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
                </optgroup>
                <optgroup label="Canada">
                    <option value="Alberta">Alberta</option>
                    <option value="British Columbia">British Columbia</option>
                    <option value="Manitoba">Manitoba</option>
                    <option value="New Brunswick">New Brunswick</option>
                    <option value="Newfoundland/Labrador">Newfoundland/Labrador</option>
                    <option value="Nova Scotia">Nova Scotia</option>
                    <option value="Ontario">Ontario</option>
                    <option value="Quebec">Quebec</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                    <option value="Yukon">Yukon</option>
                </optgroup>
                </select>
            </label>
            </div>
            <div>
            <strong> Sort by:</strong>
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
            <label>
                <input
                type="radio"
                value="Country"
                name="sort"
                checked={sortBy === "Country"}
                onChange={handleSortChange}
                />
                Country
            </label>
            </div>
        </div>
    );
}

export default Search;