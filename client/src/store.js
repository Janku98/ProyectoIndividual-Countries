import { createStore, applyMiddleware, compose } from "redux";
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

export default store;







// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import dateado from './actions/actions';

// import Countries from './components/Countries';


// function mapStateToProps (state)  {
//     return {
//         paises: state.paises
//     };
// };

// function mapDispatchToProps (dispatch) {
//     return bindActionCreators(Countries, dispatch)
// };

// const App = connect(mapStateToProps, mapDispatchToProps)(Countries);

// export default App;