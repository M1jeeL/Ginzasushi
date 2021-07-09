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
import db from './components/data.json'
import Cart from './components/Carrito/Cart';
import Pedidos from './components/PanelUsuario/Pedidos/Pedidos';
import PedidoInfo from './components/PanelUsuario/Pedidos/PedidoInfo';
import Direccion from './components/PanelUsuario/Direccion/Direccion';
import MiCuenta from './components/PanelUsuario/MiCuenta/MiCuenta';


const App = () => {
  


  const [selectProduct, setSelectProduct] = useState({
    id: 1
  })

  const [cart, setCart] = useState([])
  
  const eliminarProducto = (id) => {
    let newCart = cart.filter((producto) => producto.id !== id);
     setCart(newCart);
  };


  return (
    <div className = "App"> 
      <Router>
        <BotonWsp/>
        <Navbar cart={cart} eliminarProducto={eliminarProducto}/>
        <Switch>
          <Route exact path = "/" component={Inicio} />
          <Route exact path = "/carta">
            <Carta categorias={db.categorias} selectProduct={selectProduct} setSelectProduct={setSelectProduct} cart={cart} setCart={setCart}/>
          </Route>
          <Route exact path = "/register" component={Register} />
          <Route path = "/productos/">
            <Productos  productos={db.productos} selectProduct={selectProduct} cart={cart} setCart={setCart}/>
          </Route>
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/crud" component={CrudApi}/>
          <Route exact path = "/carro-de-compras">
            <Cart cart={cart} setCart={setCart} eliminarProducto={eliminarProducto} />
          </Route>
          <Route exact path="/mi-cuenta" component={MiCuenta} />
          <Route exact path="/mis-pedidos" component={Pedidos} />
          <Route exact path="/mis-direcciones" component={Direccion} />
          <Route path= "/pedidos/:uuid" component={PedidoInfo}/>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
