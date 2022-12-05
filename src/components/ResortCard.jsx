import React from "react";

function ResortCard({ resort }) {

    const { id, name, country, state, acres, vertical_drop, snowfall, url, image } = resort

    return (
        <div className="card">
            <h2>{name}</h2>
            <img className="resort-image" src={image} alt={name} />
            <p>Country: {country} </p>
            <p>State/Providence: {state}</p>
            <p>Acres: {acres} acres</p>
            <p>Vertical Drop: {vertical_drop} feet</p>
            <p>Annual Snowfall: {snowfall} inches</p> 
            <p>Resort Website: {url}</p>
        </div>
    );
}

export default ResortCard;