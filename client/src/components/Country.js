import React from "react";
import { useHistory } from "react-router-dom";

import "./Country.css"



 export default function Country({name, flag, region, key, id}) {
    
    

    

    return(
        <a href={`http://localhost:3000/countries/${id}`} className="link">
        <div className="tarjetadepais" key={key}>
            <div className="cadadiv">
                <h2> {name}</h2>
            </div>
            <div >
                <img alt={key} de  src={flag} width="175px" height="150"/>
            </div>
            <div>
                <h2>{region}</h2>
            </div>
        </div>
        </a>
    )
}



