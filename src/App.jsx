import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import ResortList from './components/ResortList';
import Favorites from './components/Favorites';
import NewResortForm from "./components/NewResortForm";

function App() {

  const [ resorts, setResorts ] = useState([])
  const [ favoriteResorts, setFavoriteResorts ] = useState([])

  useEffect(() => {
      fetch(" http://localhost:4000/resorts")
          .then(response => response.json())
          .then((resorts) => setResorts(resorts))
  }, [])

  function handleAddResort(resortToAdd){
    const resortInFavorites = favoriteResorts.find((resort) => resort.id === resortToAdd.id); 
      if(!resortInFavorites) {
        setFavoriteResorts([...favoriteResorts, resortToAdd])
      }
  }

  function handleRemoveResort(resortToRemove){
    setFavoriteResorts((favoriteResorts) => 
      favoriteResorts.filter((resort) => resort.id !== resortToRemove.id)
    );
  }

  return (
    <div >
      <NavBar /> 
      <Switch>
        <Route exact path="/All-Resorts">
          <ResortList 
            resorts={resorts}
            onHandleAddResort={handleAddResort}
          />
        </Route>
        <Route exact path="/Favorites">
          <Favorites
            favoriteResorts={favoriteResorts}
            onHandleRemoveResort={handleRemoveResort}
          />
        </Route>
        <Route exact path="/NewResortForm">
          <NewResortForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App; 
