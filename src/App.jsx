import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import ResortList from './components/ResortList';
import Favorites from './components/Favorites';
import NewResortForm from "./components/NewResortForm";

function App() {

  const [ resorts, setResorts ] = useState([])
  const [ searchQuery, setSearchQuery ] = useState("")
  const [ sortBy, setSortBy ] = useState("Alphabetically");
  const [ filterBy, setFilterBy ] = useState("Alaska");
 

  useEffect(() => {
      fetch("http://localhost:4000/resorts")
          .then(response => response.json())
          .then((resorts) => setResorts(resorts))
  }, [])

  const filteredResorts = resorts.filter((resort) => {
    return (resort.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }) 
 
  function handleNewResort(newResort){
    setResorts([...resorts, newResort])
  }

  function handleFavoritedResort(updatedResort){
    const updatedResortArray = resorts.map((resort) => {
      if(resort.id === updatedResort.id) {
        return updatedResort;
      } else {
        return resort
      }
    }); 
    setResorts(updatedResortArray)
  }

  return (
    <div >
      <NavBar /> 
      <Switch>
        <Route exact path="/">
          <ResortList 
            resorts={filteredResorts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onFavoritedResort={handleFavoritedResort}
          />
        </Route>
        <Route exact path="/Favorites">
          <Favorites
            resorts={resorts}
          />
        </Route>
        <Route exact path="/NewResortForm">
          <NewResortForm 
            onNewResort={handleNewResort}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App; 
