import React from 'react';
import Search from "./search.js";
import './navbar.css';
import { useHistory } from "react-router-dom";

export default function Navbar() {
    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/activities");
      };

      const handleRoute2 = () =>{ 
        history.push("/countries");
      };



    return (
        <div className="navbar">
            <a onClick={handleRoute2} className="rutas"> <h2>All Countries </h2></a>
             <a onClick={handleRoute} className="rutas"><h2>Add Tourist Activity</h2></a>
            
            <Search/>
            
        </div>
    )    
};