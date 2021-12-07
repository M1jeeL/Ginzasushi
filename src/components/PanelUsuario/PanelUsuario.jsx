import React from "react";
import PanelNavRow from "./PanelNavRow";
import { NavLink } from "react-router-dom";
import "./PanelUsuario.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";

const PanelUsuario = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  let isAdmin = false;

  if (Object.keys(user).length > 0) {
    user.roles.forEach((rol) => {
      if (rol.name === "admin") {
        isAdmin = true;
      }
    });
  }

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="panel-nav">
      <PanelNavRow url="/mi-cuenta" title="Mi cuenta" />
      <PanelNavRow url="/mis-direcciones" title="Mi dirección" />
      <PanelNavRow url="/mis-pedidos" title="Mis pedidos" />
      {isAdmin && (
        <PanelNavRow url="/dashboard/productos" title="Administrar" />
      )}
      <NavLink exact to="/" className="panel-nav-item" onClick={handleLogout}>
        <span>Salir</span>
      </NavLink>
    </nav>
  );
};

export default PanelUsuario;
