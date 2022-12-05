import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import ResortList from './components/ResortList';
import Favorites from './components/Favorites';
import NewResortForm from "./components/NewResortForm";

function App() {


  const [ resorts, setResorts ] = useState([])

  useEffect(() => {
      fetch(" http://localhost:4000/resorts")
          .then(response => response.json())
          .then((resorts) => setResorts(resorts))
  }, [])

  return (
    <div className="app-container">
      <NavBar /> 
      <Switch>
        <Route exact path="/All-Resorts">
          <ResortList 
            resorts={resorts}
          />
        </Route>
        <Route exact path="/Favorites">
          <Favorites />
        </Route>
        <Route exact path="/NewResortForm">
          <NewResortForm />
        </Route>
      </Switch>
    </div>
  )
}

export default App; 
