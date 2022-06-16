import './App.css';
import Navbar from './components/Navbar';
import {HashRouter ,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import {useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Pages/Login';


function App(){
  

  var Token = localStorage.getItem('login-token');


  




  return (
    
    <Router>
      <div className='App'>
      <Navbar />
      <div className='container'>
      <Switch>
       {routes.map(routes => {
         return(
           <Route 
           key={routes.path}
           path={routes.path}
           exact>
           <routes.component />
           </Route>
         )
       })}
      </Switch>
      </div>
      </div>
    </Router>
   
  );
}
export default App;