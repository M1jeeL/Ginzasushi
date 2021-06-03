import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
import ListaCarta from './components/ListaCarta.json'
// import Ejemplos from './components/Ejemplos/Ejemplos';

const App = () => {
  
  const [selectProduct, setSelectProduct] = useState({
    id: 1
  })

  return (
    <div className = "App"> 
      <Router>
        <BotonWsp/>
        <Navbar/>
        <Switch>
          <Route exact path = "/">
            <Inicio/>
          </Route>
          <Route exact path = "/carta">
            <Carta  db={ListaCarta.productos} selectProduct={selectProduct} setSelectProduct={setSelectProduct}/>
          </Route>
          <Route exact path = "/register">
            <Register/>
          </Route>
          <Route exact path = "/productos">
            <Productos  db={ListaCarta.productos} selectProduct={selectProduct}/>
          </Route>
          <Route exact path = "/login">
            <Login/>
          </Route>
          <Route exact path = "/crud">
            <CrudApi/>
          </Route>
          {/* <Route exact path = "/ejemplos" component = {Ejemplos}/> */}
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
