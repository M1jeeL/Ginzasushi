import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Inicio from './pages/Home/Inicio';
import Carta from './pages/Carta';
import Productos from './pages/Productos';
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import BotonWsp from './components/BotonWsp/BotonWsp';
import CrudApi from './components/Crud/CrudApi';
import Cart from './components/Carrito/Cart';
import Pedidos from './components/PanelUsuario/Pedidos/Pedidos';
import PedidoInfo from './components/PanelUsuario/Pedidos/PedidoInfo';
import Direccion from './components/PanelUsuario/Direccion/Direccion';
import MiCuenta from './components/PanelUsuario/MiCuenta/MiCuenta';
import { CartProvider } from './context/CartContext';


const App = () => {


  return (
    <div className = "App"> 
      <CartProvider>
        <Router>
          <BotonWsp/>
          <Navbar/>
          <Switch>
            <Route exact path = "/" component={Inicio} />
            <Route exact path = "/carta" component={Carta}/>
            <Route exact path = "/register" component={Register} />
            <Route path = "/productos/:categoria/:nombre" component={Productos} />
            <Route exact path = "/login" component={Login} />
            <Route exact path="/crud" component={CrudApi}/>
            <Route exact path = "/carro-de-compras" component={Cart} />
            <Route exact path="/mi-cuenta" component={MiCuenta} />
            <Route exact path="/mis-pedidos" component={Pedidos} />
            <Route exact path="/mis-direcciones" component={Direccion} />
            <Route path= "/pedidos/:uuid" component={PedidoInfo}/>
          </Switch>
          <Footer/>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
