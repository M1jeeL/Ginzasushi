import React from "react";
import PanelNavRow from "./PanelNavRow";
import { NavLink } from "react-router-dom";
import "./PanelUsuario.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/auth";

const PanelUsuario = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="panel-nav">
      <PanelNavRow url="/mi-cuenta" title="Mi cuenta" />
      <PanelNavRow url="/mis-direcciones" title="Mi dirección" />
      <PanelNavRow url="/mis-pedidos" title="Mis pedidos" />
      <NavLink exact to="/" className="panel-nav-item" onClick={handleLogout}>
        <span>Salir</span>
      </NavLink>
    </nav>
  );
};

export default PanelUsuario;
