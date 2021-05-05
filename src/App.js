import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';
import Inicio from './pages/Inicio';
import Carta from './pages/Carta';
import Productos from './pages/Productos';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className = "App"> 
      <Router>
      <Navbar/>
      <Switch>
        <Route path = "/" exact component = {Inicio}/>
        <Route path = "/carta" exact component = {Carta}/>
        <Route path = "/contacto" exact component = {Carta}/>
        <Route path = "/productos" exact component = {Productos}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
