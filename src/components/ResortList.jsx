import React from "react";
import ResortCard from "./ResortCard"


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
        </div>
    );
}

export default ResortList;