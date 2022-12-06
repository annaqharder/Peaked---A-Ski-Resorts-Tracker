import React, {useState} from "react";

function ResortCard({ resort, onFavoritedResort}) {

    const { id, name, country, state, acres, vertical_drop, snowfall, url, image, favorite } = resort

    const [ isFavorited, setIsFavorited ] = useState(favorite)

    const handleFavoritedChange = () => {
        setIsFavorited(isFavorited => !isFavorited)
        fetch(`http://localhost:4000/resorts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({favorite: !favorite})
        })
            .then(response => response.json())
            // if page == 1
            .then(updatedResort => onFavoritedResort(updatedResort))
            // else 
            // .then (updatedResort => onUnfavoritedResort(updatedResort))

    }
    


    return (
        <div className="resort-card">
            <div className="favorite-btn">
                {isFavorited? (
                <button onClick={handleFavoritedChange}>Remove from Favorites</button>
                ) : ( 
                <button onClick={handleFavoritedChange}>Add to Favorites</button>
                )}
            </div>
            <h2 className="resort-name">{name}</h2>
            <p className="resort-location">{state}, {country}</p>
            <img className="resort-image" src={image} alt={name} />
            <div className="resort-details">
                <p><b>Acres: </b>{acres} acres</p>
                <p><b>Vertical Drop:</b> {vertical_drop} feet</p>
                <p><b>Annual Snowfall:</b> {snowfall} inches</p> 
                <p><b>Resort Website:</b> {url}</p>
            </div>
            <div className="visited-btn">
                <button>Haven't Visited</button>
            </div>
            
        </div>
    );
}

export default ResortCard;