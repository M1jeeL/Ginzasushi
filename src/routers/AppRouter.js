import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  startLoadingCategories,
  startLoadingProducts,
} from "../actions/products";
import { login, logout } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
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
import { PrivateRoute } from "./PrivateRoute";
import { startLoadingComunas } from "../actions/ui";
import Loader from "../components/Crud/Loader";
import { DashboardProducts } from "../components/DashboardProducts/DashboardProducts";
import { DashboardPedidos } from "../components/DashboardPedidos/DashboardPedidos";
import { DashboardEstadistica } from "../components/DashboardEstadistica/DashboardEstadistica";
import { DashboardEmpleados } from "../components/DashboardEmpleados/DashboardEmpleados";
import { startLoadingPedidos } from "../actions/pedidos";
import { startLoadingPedidosUser } from "../actions/pedidosUser";
import { startLoadingEmployees } from "../actions/employees";

const url = process.env.REACT_APP_API;

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);

  const [hideSidebar, setHideSidebar] = useState(false);

  const handleShowSidebar = () => {
    setHideSidebar(!hideSidebar);
  };

  useEffect(() => {
    dispatch(startLoadingComunas());
    dispatch(startLoadingProducts());
    dispatch(startLoadingCategories());
    const token = localStorage.getItem("token");

    fetch(`${url}/users/usuario_actual`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (data.message) {
          dispatch(logout());
        } else {
          dispatch(login(data));
          let isAdmin = false;

          data.roles.forEach((rol) => {
            if (rol.name === "admin") {
              isAdmin = true;
            }
          });

          if (isAdmin) {
            dispatch(startLoadingPedidos());
            dispatch(startLoadingEmployees());
            dispatch(startLoadingPedidosUser());
          } else {
            dispatch(startLoadingPedidosUser());
          }
        }
        setChecking(false);
      })
      .catch((err) => {
        setChecking(false);
        dispatch(logout());
        localStorage.removeItem("token");
      });
  }, [dispatch]);

  if (checking) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mt-5">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/carta" component={Carta} />
          <Route path="/productos/:id" component={Productos} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/feedback" component={Feedback} />
          <Route exact path="/contacto" component={Contacto} />

          <PublicRoute
            exact
            path="/register"
            component={Register}
            isAuthenticated={logged}
          />
          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={logged}
          />

          <PrivateRoute
            exact
            path="/mi-cuenta"
            component={MiCuenta}
            isAuthenticated={logged}
          />
          <PrivateRoute
            exact
            path="/mis-pedidos"
            component={Pedidos}
            isAuthenticated={logged}
          />
          <PrivateRoute
            exact
            path="/mis-direcciones"
            component={Direccion}
            isAuthenticated={logged}
          />
          <PrivateRoute
            path="/pedidos/:uuid"
            component={PedidoInfo}
            isAuthenticated={logged}
          />
          <PrivateRoute
            exact
            path="/dashboard/pedidos"
            component={DashboardPedidos}
            hideSidebar={hideSidebar}
            handleShowSidebar={handleShowSidebar}
            isAuthenticated={logged}
          />
          <PrivateRoute
            exact
            path="/dashboard/productos"
            component={DashboardProducts}
            handleShowSidebar={handleShowSidebar}
            hideSidebar={hideSidebar}
            isAuthenticated={logged}
          />
          <PrivateRoute
            exact
            path="/dashboard/estadistica"
            component={DashboardEstadistica}
            hideSidebar={hideSidebar}
            handleShowSidebar={handleShowSidebar}
            isAuthenticated={logged}
          />
          <PrivateRoute
            exact
            path="/dashboard/empleados"
            component={DashboardEmpleados}
            hideSidebar={hideSidebar}
            handleShowSidebar={handleShowSidebar}
            isAuthenticated={logged}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
