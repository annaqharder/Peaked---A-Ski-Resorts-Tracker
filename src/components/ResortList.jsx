import React, {useState} from "react";
import ResortCard from "./ResortCard"
import Search from "./Search"

function ResortList({ resorts, setSearchQuery, searchQuery, onFavoritedResort}) {
    const resortsArray = resorts.map((resort) => {
        return <ResortCard 
            key={resort.id} 
            resort={resort}
            onFavoritedResort={onFavoritedResort}
        />
    }); 

    return (
        <div className="all-cards">
            <Search 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery}
            />
            <ul className="app-container">{resortsArray}</ul>
        </div>
    );
}

export default ResortList;