import dateado from '../actions/actions';


const initialState = {
                        paises:[],
                        pais:[],
                    };

export default function reducer (state= initialState, action){
    switch (action.type){
        case "dateado":{
            return {
                ...state,
                paises: action.payload
            }
                    
        }
        case "soloUno":{
            return {
                ...state,
                pais: action.payload
            }
        }
        default:
            return state;
    }
};

