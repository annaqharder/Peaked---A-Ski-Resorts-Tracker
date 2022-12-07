import React, {useState, useTransition} from "react";

function ResortCard({ resort, onFavoritedResort}) {

    const { id, name, country, state, acres, vertical_drop, snowfall, url, image, favorite, visited } = resort

    const [ isFavorited, setIsFavorited ] = useState(favorite)
    const [ isVisited, setIsVisited] = useState(visited)
    const [ isDarkMode, setIsDarkMode ] = useState(visited)


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
            .then(updatedResort => onFavoritedResort(updatedResort))
    }

    function handleDarkModeClick (){
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }
    
    const handleVisitedResort = () => {
        // handleDarkModeClick();
        setIsVisited(isVisited => !isVisited)
        fetch(`http://localhost:4000/resorts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({visited: !visited})
            })
                .then(response => response.json())
                .then(visitedResort => handleDarkModeClick(visitedResort) )
    }

    const resortCard = isDarkMode ? "App dark" : "App light";

    return (
        <div className={resortCard}>
            <div id="card-buttons">
                <div>
                    {isVisited ? (
                        <img className="unvisited-btn"  onClick={handleVisitedResort} src="src/assets/ski-goggles1.png"/>
                    ) : (
                        <img className="visited-btn" onClick={handleVisitedResort} src="src/assets/ski-goggles.png"/>
                    )}
                </div>
                    {isFavorited? (
                    <div onClick={handleFavoritedChange}> 
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth={1.5} 
                            stroke="currentColor" 
                            className="unfavorite-btn"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                            />
                        </svg>
                    </div>
                    ) : ( 
                    <div onClick={handleFavoritedChange}>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="favorite-btn"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    </div>
                    )}
            </div>
            <h2 className="resort-name">{name}</h2>
            <p className="resort-location">{state}, {country}</p>
            <img className="resort-image" src={image} alt={name} />
            <div className="resort-details">
                <p><b>Acres: </b>{acres} acres</p>
                <p><b>Vertical Drop:</b> {vertical_drop} feet</p>
                <p><b>Annual Snowfall:</b> {snowfall} inches</p> 
            </div>
            <div className="resort-url" >
                <a href={url} target="_blank"><b>Resort Website</b></a>
            </div>
            
        </div>
    );
}

export default ResortCard;