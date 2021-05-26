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
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import BotonWsp from './components/BotonWsp/BotonWsp';
import CrudApi from './components/Crud/CrudApi';
// import Ejemplos from './components/Ejemplos/Ejemplos';

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
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/crud" component = {CrudApi} />
          {/* <Route exact path = "/ejemplos" component = {Ejemplos}/> */}
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
