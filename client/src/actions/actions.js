

export  function dateado (){
    console.log("llego al action")
    return async function (dispatch){
        const respons = await fetch (`http://localhost:3001/countries`);    
        const data = await respons.json();
        return dispatch({type:"dateado", payload: data});
        };
    };

 export function soloUno(pais) {
     return async function (dispatch){
         const respons = await fetch (`http://localhost:3001/countries/${pais}`);
         const data = await respons.json();
         return dispatch({type:"soloUno", payload: data});
     };
 };



export default {
    dateado,
    soloUno
};