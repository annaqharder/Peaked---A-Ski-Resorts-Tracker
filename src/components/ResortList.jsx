import React from "react";
import ResortCard from "./ResortCard"
import Search from "./Search"


function ResortList({ resorts, onHandleAddResort }) {
    const resortsArray = resorts.map((resort) => {
        return <ResortCard 
            key={resort.id} 
            resort={resort}
            onFavoriteResort={onHandleAddResort}
        />
    }); 

    return (
        <div className="all-cards">
            <ul className="app-container">{resortsArray}</ul>
            <Search />
        </div>
    );
}

export default ResortList;