import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import BotonWsp from "../components/BotonWsp/BotonWsp";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import CrudApi from "../components/Crud/CrudApi";
import Direccion from "../components/PanelUsuario/Direccion/Direccion";
import MiCuenta from "../components/PanelUsuario/MiCuenta/MiCuenta";
import PedidoInfo from "../components/PanelUsuario/Pedidos/PedidoInfo";
import Pedidos from "../components/PanelUsuario/Pedidos/Pedidos";
import Carta from "../pages/Carta";
import Checkout from "../pages/Checkout/Checkout";
import Contacto from "../pages/Contacto/Contacto";
import Feedback from "../pages/Feedback/Feedback";
import Inicio from "../pages/Home/Inicio";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import Register from "../pages/Register";

export const AppRouter = () => {
  return (
    <div>
      <Router>
        <BotonWsp />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/carta" component={Carta} />
          <Route path="/productos/:id" component={Productos} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/feedback" component={Feedback} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/crud" component={CrudApi} />

          <Route exact path="/mi-cuenta" component={MiCuenta} />
          <Route exact path="/mis-pedidos" component={Pedidos} />
          <Route exact path="/mis-direcciones" component={Direccion} />
          <Route path="/pedidos/:uuid" component={PedidoInfo} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
