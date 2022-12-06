import React from "react";
import ResortCard from "./ResortCard"

function Favorites({ resorts }) {

    const favoriteResorts = resorts.filter((resort) => (resort.favorite))

    const favoriteResortCard = favoriteResorts.map((resort) => (
        <ResortCard key={resort.id} resort={resort} />
    ))

    return (
        <div>
            <h2>Favorite Ski Resorts</h2>
            <ul className="favorites-container">{favoriteResortCard}</ul>
        </div>
     );
}

export default Favorites;