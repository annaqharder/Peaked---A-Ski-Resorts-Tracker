import React, {useEffect, useState} from "react";
import Search from "./Search";
import ResortList from "./ResortList";


function ResortPage() {

    const [ resorts, setResorts ] = useState([])

    useEffect(() => {
        fetch(" http://localhost:4000/resorts")
            .then(response => response.json())
            .then((resorts) => setResorts(resorts))
    }, [])

    return ( 
        <div>
            <Search />
            <div>
                <ResortList resorts={resorts} />
            </div>
        </div>
    );
}

export default ResortPage;