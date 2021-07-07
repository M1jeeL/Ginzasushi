import React from "react";
import PanelNavRow from "./PanelNavRow";
import { NavLink, useHistory } from "react-router-dom";
import "./PanelUsuario.css";

const PanelUsuario = () => {
  const history = useHistory();

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    history.push("/");
  };

  return (
    <nav className="panel-nav">
      <PanelNavRow url="/mi-cuenta" title="Mi cuenta" />
      <PanelNavRow url="/mis-direcciones" title="Mi dirección" />
      <PanelNavRow url="/mis-pedidos" title="Mis pedidos" />
      <NavLink exact to="/" className="panel-nav-item" onClick={cerrarSesion}>
        <span>Salir</span>
      </NavLink>
    </nav>
  );
};

export default PanelUsuario;
