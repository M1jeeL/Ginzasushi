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
import db from './components/ListaCarta.json'
import Cart from './components/Carrito/Cart';
// import Ejemplos from './components/Ejemplos/Ejemplos';

const App = () => {
  
  const [selectProduct, setSelectProduct] = useState({
    id: 1
  })

  const [cart, setCart] = useState([])

  return (
    <div className = "App"> 
      <Router>
        <BotonWsp/>
        <Navbar cart={cart}/>
        <Switch>
          <Route exact path = "/">
            <Inicio/>
          </Route>
          <Route exact path = "/carta">
            <Carta  db={db.productos} selectProduct={selectProduct} setSelectProduct={setSelectProduct}/>
          </Route>
          <Route exact path = "/register">
            <Register/>
          </Route>
          <Route path = "/productos/">
            <Productos  db={db.productos} selectProduct={selectProduct} cart={cart} setCart={setCart}/>
          </Route>
          <Route exact path = "/login">
            <Login/>
          </Route>
          <Route exact path = "/crud">
            <CrudApi/>
          </Route>
          <Route exact path = "/carro-de-compras">
            <Cart cart={cart} setCart={setCart}/>
          </Route>
          {/* <Route exact path = "/ejemplos" component = {Ejemplos}/> */}
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
