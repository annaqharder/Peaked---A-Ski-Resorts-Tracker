import React from "react";
import ResortCard from "./ResortCard"

function Favorites({ resorts }) {

    const favoriteResorts = resorts.filter((resort) => (resort.favorite))

    const favoriteResortCard = favoriteResorts.map((resort) => (
        <ResortCard key={resort.id} resort={resort} />
    ))

    return (
        <div>
            <div>
                <h2 className="favorite-resort-header">Favorite Ski Resorts</h2>
            </div>
            <div>
                <ul className="favorites-container">{favoriteResortCard}</ul>
            </div>
        </div>
     );
}

export default Favorites;