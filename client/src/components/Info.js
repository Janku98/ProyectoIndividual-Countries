import { useHistory } from "react-router-dom";
import { soloUno } from '../actions/actions';
import { connect } from "react-redux";
import React, {useEffect} from 'react';
import "./Info.css"
import {dateado} from "../actions/actions";

function Info (props) {
    const url = window.location.pathname;
    const path= url.split("/")[2];
    useEffect(()=>{
        props.soloUno(path);
        
    },[]);
    
const {id, name, flag, region, capital, continent, area, population, activities, timezone, error, price} = props.pais;
console.log("error",error)


const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/countries");
      }

    
   
    return(
        <div>
            {name !== undefined && <div className="contenedorpadre">
            <button className="botonaso" onClick={handleRoute}>Back</button>
            <div className="acomodador">
                <div className="imagen">
                    <img alt="bandera de pais" src={flag} width="450" height="300"/>
                </div>
                <div className="texto">
                    <div className="titulo">
                        <h1>{name}</h1>
                        <h3>{id}</h3>
                    </div>
                    <div>
                        <h5>Continent: {continent}</h5>
                        <h5>Region: {region}</h5>
                        <h5>Capital: {capital}</h5>
                        <h5>Area: {area}km²</h5>
                        <h5>Population: {population}hab.</h5>
                        <h5>Timezone= {timezone}</h5>
                </div>

            </div>  
                        <div>
                            <h5 className="touristactivities">Tourist activities:</h5>
                            <ul>
                                {activities === undefined ? null : activities.map(a => <div className="cadaActividad">
                                                                                      <il >
                                                                                      <h5>{a.name}</h5>
                                                                                      <h6>Dificultad(1* al 5*): {a.difficulty}* </h6>
                                                                                      <h6>Estacion: {a.season}</h6>
                                                                                      <h6>Tiempo: {a.time}hrs</h6>
                                                                                      <h6>Precio: {a.price}</h6>
                                                                                      </il>
                                                                                       </div>)}
                            </ul>
                        </div>
                        
                    </div>
                
            
        </div>}
        {error==="Master el pais no existe" && <div><h1 className="error">El pais solicitado no existe</h1> </div>}
        </div>
        
    )
}

function mapDispatchToProps(dispatch) {
        
    return {
        soloUno: path => dispatch(soloUno(path)),
        dateado: () => dispatch(dateado())
    };
  }

function mapStateToProps (state)  {
    return {
        pais: state.pais
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Info)