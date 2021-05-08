import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Carta from './pages/Carta';
import Productos from './pages/Productos';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';

function App() {
  return (
    <div className = "App"> 
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = {Inicio}/>
          <Route exact path = "/carta" component = {Carta}/>
          <Route exact path = "/register" component = {Register}/>
          <Route exact path = "/productos" component = {Productos}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
