import React from "react";
import './Pagination.css';

export default function Pagination({countriesPerPage, totalCountries, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalCountries / countriesPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav className="pageNumbers">
            {pageNumbers.map(number => (
                <li className="pageNumbersLi" key={number} >
                    <a onClick={()=> paginate(number)} >
                        {number}
                    </a>
                </li>
            ))}
        </nav>
    )
}