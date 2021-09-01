import React, { useContext } from "react";
import PanelNavRow from "./PanelNavRow";
import { NavLink } from "react-router-dom";
import "./PanelUsuario.scss";
import UserContext from "../../context/UserContext";

const PanelUsuario = () => {
  const { cerrarSesion } = useContext(UserContext);

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
