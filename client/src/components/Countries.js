// import React, {useState, useEffect} from "react";
import Country from "./Country";
import "./Countries.css"
import { connect } from "react-redux";
import { dateado} from "../actions/actions";
import React, {useState, useEffect} from "react";
import Pagination from "./Pagination";



function Countries(props ){
    useEffect(()=>{
        props.dateado()
    },[]);

    //--------------------------------------------------------------Sorts functions
    const[poblacion, setPoblacion] = useState("none")
    
    

    const onChange2 = (e)=>{
        setPoblacion(e.target.value)
    };
    


    function menorAmayor (a, b) {
        if (a.population > b.population) {
          return 1;
        }
        if (a.population < b.population) {
          return -1;
        }    
        return 0;
      };

      function mayorAmenor (a, b) {
        if (b.population > a.population) {
          return 1;
        }
        if (b.population < a.population) {
          return -1;
        }
        return 0;
      };
      function alfabeticamente (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      };
      function alfabeticamenteZ (a, b) {
        if (b.name > a.name) {
          return 1;
        }
        if (b.name < a.name) {
          return -1;
        }
        return 0;
      };
      function actividades (a, b) {
        if (b.activities.length > a.activities.length) {
          return 1;
        }
        if (b.activities.length < a.activities.length) {
          return -1;
        }
        return 0;
      };
      function actividadesz (a, b) {
        if (a.activities.length > b.activities.length) {
          return 1;
        }
        if (a.activities.length < b.activities.length) {
          return -1;
        }
        return 0;
      };
      function area20 (a, b) {
        if (b.area> a.area) {
          return 1;
        }
        if (b.area < a.area) {
          return -1;
        }
        return 0;
      };
      
      var filtradosPorPoblacion = props.paises;

      if(poblacion==="mayorAmenor"){
          filtradosPorPoblacion = props.paises.sort(mayorAmenor)
      } else if (poblacion==="menorAmayor"){
          filtradosPorPoblacion = props.paises.sort(menorAmayor)
      } else if (poblacion==="none"){
          filtradosPorPoblacion = props.paises.sort(alfabeticamente)
      } else if (poblacion ==="noneZ"){
          filtradosPorPoblacion = props.paises.sort(alfabeticamenteZ)
      } else if (poblacion === "poractividad"){
          filtradosPorPoblacion = props.paises.sort(actividades)
      } else if (poblacion === "poractividadz"){
        filtradosPorPoblacion = props.paises.sort(actividadesz)
      } else if (poblacion === "area20"){
        filtradosPorPoblacion = props.paises.filter((p)=> p.area > 20000)
      }

      console.log("props.paises", props.paises)

    // ------------------------------------------------------------- filtrado por continente

    const [continent, setContinent] = useState("All");
    const onChange = (e)=>{
        setContinent(e.target.value)
    };

    var paisesFiltradosPorContinente = filtradosPorPoblacion;
    if (continent === "Asia"){ 
        paisesFiltradosPorContinente = props.paises.filter(pais => pais.continent === "Asia")
    }else if (continent === "Europe") {
         paisesFiltradosPorContinente = props.paises.filter(pais => pais.continent === "Europe")
    }else if (continent === "Africa") {
         paisesFiltradosPorContinente = props.paises.filter(pais => pais.continent === "Africa")
    }else if (continent === "Americas") {
         paisesFiltradosPorContinente = props.paises.filter(pais => pais.continent === "Americas")
    }else if (continent === "Polar") {
         paisesFiltradosPorContinente = props.paises.filter(pais => pais.continent === "Polar")
    }else if (continent === "Oceania") {
         paisesFiltradosPorContinente = props.paises.filter(pais => pais.continent === "Oceania")
    }else if (continent === "All"){
         paisesFiltradosPorContinente = props.paises
    };
    console.log("ver actividades", props.paises)


    //--------------------------------------------------------------

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(9);

    //get current country
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountry = paisesFiltradosPorContinente.slice(indexOfFirstCountry, indexOfLastCountry);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //---------------------------------------------------------------

    return(
        <div className="contenedor">
            
          
            <div className="paginadoYpaises">
              <div className="filtros">
                <div>
                    <label>Filter by continent</label>
                    <select onChange={onChange} className="select">
                        <option value="All">All</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Europe">Europa</option>
                        <option value="Americas">America</option>
                        <option value="Polar">Polar</option>
                    </select>
                </div>
                <div>
                    <label>Filters</label>
                    <select onChange={onChange2} className="select">
                        <option value="mayorAmenor">Mayor poblacion</option>
                        <option value="menorAmayor">Menor poblacion</option>
                        <option value="none">Alfabeticamente A-Z</option>
                        <option value="noneZ">Alfabeticamente Z-A</option>
                        <option value="poractividad">Por mas actividades</option>
                        <option value="poractividadz">Por menos actividades</option>
                        <option value="area20">Mayores a 20000km</option>
                    </select>
                </div>
              </div>
                <br/>
                
                <div>
                    <Pagination countriesPerPage={countriesPerPage} totalCountries={props.paises.length} paginate={paginate}/>
                </div>
                <div >
                    <ul className="listapaises">
                        {currentCountry.map(pais =><li> <Country name={pais.name} flag={pais.flag} region={pais.continent} key={pais.id} id={pais.id}></Country> </li>)}  
                    </ul>
                </div>
            </div>
            
            
        </div>
    )
};



function mapStateToProps (state)  {
    return {
        paises: state.paises
    };
};

function mapDispatchToProps(dispatch) {
    return {
        dateado: () => dispatch(dateado())
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Countries)




