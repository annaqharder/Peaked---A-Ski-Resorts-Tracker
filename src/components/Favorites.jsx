import React from "react";
import ResortCard from "./ResortCard"

function Favorites({ favoriteResorts, onHandleRemoveResort }) {
    const favoriteResortsArray = favoriteResorts.map((resort) => (
        <ResortCard key={resort.id} resort={resort} onFavoriteResort={onHandleRemoveResort} />
    ))

    return (
        <div >
            <h2>Favorite Ski Resorts</h2>
            <ul className="favorites-container">{favoriteResortsArray}</ul>
        </div>
     );
}

export default Favorites;