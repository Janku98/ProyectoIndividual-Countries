import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import { connect } from "react-redux";
import { dateado} from "../actions/actions";


function LandingPage({dateado}) {
    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/countries");
      };
      useEffect(()=>{
            dateado()
        },[]);


    return (
        <div className="fondo">
            <h1>Bienvenidx!</h1>
            <h2>Presiona en el boton para ingresar</h2>
            <button onClick={handleRoute}>Ingresar</button>           
        </div>
    )
};
function mapDispatchToProps(dispatch) {
    return {
        dateado: () => dispatch(dateado())
    };
  };
  export default connect(null,mapDispatchToProps)(LandingPage)

 

