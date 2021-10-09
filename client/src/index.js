import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Info from './components/Info'
import {Provider} from 'react-redux';
import store from './store'; 
import Form from './components/Form';
import Navbar from './components/navbar';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Navbar}/>
        <Route exact path="/activities" component={Form}/>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/countries" component={App}/>
        <Route path="/countries/:id" component={Info}/>
     </BrowserRouter> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
