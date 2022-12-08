import React, {useState} from "react";
import ResortCard from "./ResortCard"
import Search from "./Search"

function ResortList({ resorts, setSearchQuery, searchQuery, onFavoritedResort, onUnfavoritedResort, sortBy, onChangeSort, filterBy, onChangeFilter}) {
    const resortsArray = resorts.map((resort) => {
        return <ResortCard 
            key={resort.id} 
            resort={resort}
            onFavoritedResort={onFavoritedResort}
            onUnfavoritedResort={onUnfavoritedResort}
        />
    }); 

    return (
        <div className="all-cards">
            <Search 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
                sortBy={sortBy}
                onChangeSort={onChangeSort}
                filterBy={filterBy}
                onChangeFilter={onChangeFilter}
            />
            <ul className="app-container">{resortsArray}</ul>
        </div>
    );
}

export default ResortList;