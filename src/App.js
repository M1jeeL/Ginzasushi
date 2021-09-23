import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import Inicio from "./pages/Home/Inicio";
import Carta from "./pages/Carta";
import Productos from "./pages/Productos";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from "./components/Footer/Footer";
import BotonWsp from "./components/BotonWsp/BotonWsp";
import CrudApi from "./components/Crud/CrudApi";
import Pedidos from "./components/PanelUsuario/Pedidos/Pedidos";
import PedidoInfo from "./components/PanelUsuario/Pedidos/PedidoInfo";
import Direccion from "./components/PanelUsuario/Direccion/Direccion";
import MiCuenta from "./components/PanelUsuario/MiCuenta/MiCuenta";
import Checkout from "./pages/Checkout/Checkout";
import Contacto from "./pages/Contacto/Contacto";
import Feedback from "./pages/Feedback/Feedback";

const App = () => {
  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <Router>
            <BotonWsp />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route exact path="/carta" component={Carta} />
              <Route exact path="/register" component={Register} />
              <Route path="/productos/:id" component={Productos} />
              <Route exact path="/contacto" component={Contacto} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/crud" component={CrudApi} />
              <Route exact path="/mi-cuenta" component={MiCuenta} />
              <Route exact path="/mis-pedidos" component={Pedidos} />
              <Route exact path="/mis-direcciones" component={Direccion} />
              <Route path="/pedidos/:uuid" component={PedidoInfo} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/feedback" component={Feedback} />
            </Switch>
            <Footer />
          </Router>
        </CartProvider>
      </UserProvider>
    </div>
  );
};

export default App;
