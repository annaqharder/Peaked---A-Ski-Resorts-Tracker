import React, {useState} from "react";

function NewResortForm({onNewResort}) {
    const [ formData, setFormData ] = useState({
        name: "",
        country: "",
        state: "",
        acres: "",
        vertical_drop: "",
        snowfall: "",
        url: "",
        image: "", 
        favorite: false, 
        visited: false, 
    });

    function onSubmit(event){
        event.preventDefault(); 

        const newResort = {
            name: formData.name,
            country: formData.country,
            state: formData.state,
            acres: formData.acres,
            vertical_drop: formData.vertical_drop,
            snowfall: formData.snowfall,
            url: formData.url,
            image: formData.image, 
            favorite: formData.favorite, 
            visited: formData.visited, 
        }

        fetch("http://localhost:4000/resorts", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newResort)
        })
            .then((response) => response.json())
            .then((newResort) => onNewResort(newResort))
    }; 

    function handleFormChange(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleChecked(event){
        setFormData({...formData, [event.target.name]: event.target.checked})
    }

    return (
        <div className="form-container">
        <div className="new-resort-form">
            <h2>Add New Ski Resort</h2>
            <form onSubmit={onSubmit} >
                <div>
                    <h4 className="form-labels">Resort Name:</h4>
                    <input 
                    className="form-resortname"
                    type="text" 
                    name="name" 
                    placeholder="Resort Name..." 
                    value={formData.name}
                    onChange={handleFormChange}
                    />
                </div>
                    <br/>
                <div>
                    <h4 className="form-labels">Resort Country:</h4>
                    <input 
                    className="form-resortcountry"
                    type="text" 
                    name="country" 
                    placeholder="Resort Country..." 
                    value={formData.country}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Resort State/Providence:</h4>
                    <input 
                    className="form-resortstate"
                    type="text" 
                    name="state" 
                    placeholder="Resort State/Providence..." 
                    value={formData.state}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Terrain:</h4>
                    <input 
                    className="form-resortacres"
                    type="number" 
                    name="acres" 
                    placeholder="Terrain (acres)..." 
                    value={formData.acres}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Vertical Drop:</h4>
                    <input 
                    className="form-resortverticaldrop"
                    type="number" 
                    name="vertical_drop" 
                    placeholder="Vertical Drop (ft)..." 
                    value={formData.vertical_drop}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Annual Snowfall:</h4>
                    <input 
                    className="form-resortsnowfall"
                    type="number" 
                    name="snowfall" 
                    placeholder="Annual Snowfall (in)..." 
                    value={formData.snowfall}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Resort Website:</h4>
                    <input 
                    className="form-resorturl"
                    type="text"
                    name="url"
                    placeholder="Website URL..." 
                    value={formData.url}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <div>
                    <h4 className="form-labels">Resort Image:</h4>
                    <input 
                    className="form-resortimage"
                    type="text"
                    name="image"
                    placeholder="Image URL..." 
                    value={formData.image}
                    onChange={handleFormChange}
                    />
                </div>
                <br/>
                <input 
                className="form-resortfavorite"
                type="radio" 
                name="favorite" 
                value={formData.favorite}
                onChange={handleChecked}
                />
                    <label>Favorite?</label>
                <br/>
                <input 
                className="form-resortvisited"
                type="radio" 
                name="visited" 
                value={formData.visited}
                onChange={handleChecked}
                />
                    <label>Visited?</label>
                <br/>
                <button type="submit">Add Resort</button>
            </form>
        </div> 
        </div>
    );
}

export default NewResortForm;