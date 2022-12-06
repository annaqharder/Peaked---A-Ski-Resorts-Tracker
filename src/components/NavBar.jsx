import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "lightblue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return ( 
        <div className="navbar">
            <NavLink 
                to="/"
                exact 
                style={linkStyles}
                activeStyle={{
                    background: "mediumblue"
                }}
            >
            All Resorts
            </NavLink>
            <NavLink 
                to="/Favorites"
                exact 
                style={linkStyles}
                activeStyle={{
                    background: "mediumblue"
                }}
            >
            Favorites
            </NavLink>
            <NavLink 
                to="/NewResortForm"
                exact 
                style={linkStyles}
                activeStyle={{
                    background: "mediumblue"
                }}
            >
            Add Resort
            </NavLink>

        </div>
    );
}

export default NavBar;