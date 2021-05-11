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
import Footer from './components/Footer/Footer';
import BotonWsp from './components/BotonWsp/BotonWsp';

function App() {
  return (
    <div className = "App"> 
      <Router>
        <BotonWsp/>
        <Navbar/>
        <Switch>
          <Route exact path = "/" component = {Inicio}/>
          <Route exact path = "/carta" component = {Carta}/>
          <Route exact path = "/register" component = {Register}/>
          <Route exact path = "/productos" component = {Productos}/>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
