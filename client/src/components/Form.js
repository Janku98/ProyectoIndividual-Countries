import React, { useState, useEffect } from "react";
import './Form.css';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Select from "react-select";
import { dateado} from "../actions/actions";
import { MultiSelect } from "react-multi-select-component";


function Form(props) {

    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [time, setTime] = useState('');
    const [season, setSeason] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [countryId, setCountryId] = useState([]);
    const [price, setPrice] = useState('');

    useEffect(()=>{
        dateado()
    },[]);


    const history = useHistory();
    const handleRoute = () =>{ 
        history.push("/countries");
      };

    const onChangeTime = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setTime(e.target.value)
         }
    } 

      const handleCheckboxChange = (event) => {
        if (event.target.checked) {
          if (!countryId.includes(event.target.value)) {
            setCountryId( [...countryId, event.target.value])
          }else {
            setCountryId(countryId.filter(pais => pais !== event.target.value))
          }
        } else {
          setCountryId(countryId.filter(pais => pais !== event.target.value));
        }
        console.log(countryId)
      }

    const handleSubmit =  e => {
        e.preventDefault();
        if (!name || !difficulty || !time || !season || !countryId || !price){ return alert("Falta psar informacion")}
        const post = {name, difficulty, time, season, countryId : countryId.map((p)=>p.value), price};
        console.log(post)
        setIsPending(true); 

        fetch('http://localhost:3001/activity', {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(()=>{
            setIsPending(false);
        })
      };

      const options =    props.paises.map((p)=> ({label: p.name, value: p.id}));
      console.log("options", options)


    return(
        <div className="contenedorpadre">
            <br/>
            <div>
                <button onClick={handleRoute}>Back</button>
            </div>
            <br/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="labels1">Name of activity</label>
                    
                    <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label className="labels2">Difficulty</label>
                    <select className="selectdificultad" type="text" name="difficulty" value={difficulty} onChange={(e)=> setDifficulty(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <br/>
                <div>
                    <label className="labels3">Time of the activity</label>
                    <input type="text" pattern="[0-9]*" name="time" value={time} onChange={onChangeTime }/>
                </div>
                <br/>
                <div>
                    <label className="labels4">Season  </label>
                    <select type="text" name="season" value={season} onChange={(e)=> setSeason(e.target.value)}>
                        <option value="invierno">Winter</option>
                        <option value="verano">Summer</option>
                        <option value="otoño">Autumn</option>
                        <option value="primavera">Spring</option>
                    </select>
                </div>
                <br/>
                <div>
                    <label className="labels5">Price</label>
                    <input type="text" name="price" value={price} onChange={(e)=> setPrice(e.target.value)}></input>
                </div>
                <div>
                    <label className="labels">Choose a country for you activity</label>
                </div>
                <div>
                    <div> <MultiSelect
                                                    options={options}
                                                    value={countryId}
                                                    onChange={setCountryId}
                                                    labelledBy="Select">
                                                  </MultiSelect></div>
                </div>
                <br/>
                <div>
                    {!isPending && <button className="buton">Submit</button>}
                    {isPending && <button disabled>Submiting...</button>}
                </div>
                
                
                
                
            </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(Form)