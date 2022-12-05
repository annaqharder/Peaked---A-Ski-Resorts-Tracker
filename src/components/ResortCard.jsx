import React from "react";

function ResortCard({ resort }) {

    const { id, name, country, state, acres, vertical_drop, snowfall, url, image } = resort

  
  
    return (
        <div className="resort-card">
            <div className="favorite-btn">
                <button>Favorite</button>
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