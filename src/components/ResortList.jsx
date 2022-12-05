import React from "react";
import ResortCard from "./ResortCard"
import Search from "./Search"


function ResortList({ resorts }) {
    const resortsArray = resorts.map((resort) => {
        return <ResortCard 
            key={resort.id} 
            resort={resort}
        />
    }); 

    return (
        <div>
            <ul className="cards">{resortsArray}</ul>
            <Search />
        </div>
    );
}

export default ResortList;