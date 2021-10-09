import { useState } from "react";
import React  from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";



function Search(props) {

    const [busqueda, setBusqueda] = useState("");
    const [path, setPath] = useState("");

    const onChange = (e)=>{
        var str = e.target.value;
        var str2 = str.charAt(0).toUpperCase() + str.slice(1);
        setBusqueda(str2);
        var pais = props.paises.filter(p=> p.name.match(busqueda));
        try{
            setPath(pais[0]["id"])
        }catch(error){
            alert("El pais no existe")
        }
        
    };
    

    
    const history = useHistory();
    const handleRoute = () =>{ 
            history.push(`/countries/${path}`);  
    };


    return(
           <div>
            <input  placeholder="Country" type="text" onChange={onChange}  ></input>
            <button onClick={handleRoute} >Search</button>
           </div>
    ) 
    }
function mapStateToProps (state)  {
    return {
        paises: state.paises
    }
}; 
 export default connect(mapStateToProps)(Search);