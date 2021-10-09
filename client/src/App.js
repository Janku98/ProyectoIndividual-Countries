import './App.css';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { dateado } from './actions/actions';

import Countries from './components/Countries';




function App(props) {
  
  useEffect(()=>{
  props.dateado()
},[]);

  return(
    <div className="App">
      <Countries/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)


