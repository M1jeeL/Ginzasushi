import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Inicio from './pages/Inicio'

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/" exact>
          <Inicio/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
      </Switch>
    </Router>
   
  );
}

export default App;
