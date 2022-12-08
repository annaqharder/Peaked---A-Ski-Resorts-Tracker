import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return ( 
        <header id="header"> 
            <div id="logo-container">
                <img id="logo-image" src="src/assets/logoimage.PNG"/>
                <div id="logo-text">
                    <h2 className="website-title"><b>PEAKED</b></h2>
                    <h4 className="website-subtitle"> your favorite ski resorts in one place.</h4>
                </div>
            </div>
            <nav id="navbar-container" className="navbar">
                <NavLink 
                    to="/"
                    exact 
                    id="navbar-home"
                    activeStyle={{
                        background: "rgba(202, 121, 8, 0.739)"
                    }}
                >
                <b>All Resorts</b>
                </NavLink>
                <NavLink 
                    to="/Favorites"
                    exact 
                    id="navbar-favorites"
                    activeStyle={{
                        background: "rgba(202, 121, 8, 0.739)"
                    }}
                >
                <b>Favorites</b>
                </NavLink>
                <NavLink 
                    to="/NewResortForm"
                    exact 
                    id="navbar-form"
                    activeStyle={{
                        background: "rgba(202, 121, 8, 0.739)"
                    }}
                >
                <b>Add Resort</b>
                </NavLink>
            </nav>
        </header>
    );
}

export default NavBar;