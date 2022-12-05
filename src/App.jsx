import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import ResortPage from "./components/ResortPage";
import Favorites from './components/Favorites';
import NewResortForm from "./components/NewResortForm";

function App() {
  return (
    <div className="app-container">
      <NavBar /> 
      <Switch>
        <Route exact path="/All-Resorts">
          <ResortPage />
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
