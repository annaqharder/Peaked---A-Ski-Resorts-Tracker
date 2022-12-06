import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import ResortList from './components/ResortList';
import Favorites from './components/Favorites';
import NewResortForm from "./components/NewResortForm";
import Search from './components/Search';

function App() {

  const [ resorts, setResorts ] = useState([])
  const [ searchQuery, setSearchQuery ] = useState("")
  const [ sortBy, setSortBy ] = useState("Alphabetically");
  const [ filterBy, setFilterBy ] = useState("All")

 
  useEffect(() => {
      fetch("http://localhost:4000/resorts")
          .then(response => response.json())
          .then((resorts) => setResorts(resorts))
  }, [])

 
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

  const sortedResorts = [...resorts].sort((resort1, resort2) => {
    if (sortBy === "Alphabetically") {
      return resort1.name.localeCompare(resort2.name); 
    } else if (sortBy === "Country") { 
      return resort1.country.localeCompare(resort2.country); 
    } else {
      return null
    }
  }); 

  const filteredSearchResorts = sortedResorts.filter((resort) => {
    if (filterBy === "All") return true; 
    return resort.state === filterBy}); 

  const filteredResorts = filteredSearchResorts.filter((resort) => {
    return (resort.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }) 

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
            sortBy={sortBy}
            onChangeSort={setSortBy} 
            filterBy={filterBy}
            onChangeFilter={setFilterBy}

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
