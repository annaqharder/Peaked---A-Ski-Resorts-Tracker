import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "lightblue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return ( 
        <div>
            <NavLink 
                to="/All-Resorts"
                exact 
                style={linkStyles}
                activeStyle={{
                    background: "blue"
                }}
            >
            All Resorts
            </NavLink>
            <NavLink 
                to="/Favorites"
                exact 
                style={linkStyles}
                activeStyle={{
                    background: "darkblue"
                }}
            >
            Favorites
            </NavLink>
            <NavLink 
                to="/NewResortForm"
                exact 
                style={linkStyles}
                activeStyle={{
                    background: "darkblue"
                }}
            >
            Add Resort
            </NavLink>

        </div>
    );
}

export default NavBar;