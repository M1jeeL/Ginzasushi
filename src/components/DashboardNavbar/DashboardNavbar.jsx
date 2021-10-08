import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardNavbar.scss";

export const DashboardNavbar = () => {
  return (
    <nav className="dashboard-navbar">
      <div>
        <ul className="dashboard-navbar-navlinks">
          <li>
            <NavLink
              to="/dashboard/pedidos"
              className="dashboard-navbar-navlink-item"
            >
              <i className="fas fa-shopping-bag fa-2x"></i>
              <p>Pedidos</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/productos"
              className="dashboard-navbar-navlink-item"
            >
              <i className="fas fa-clipboard fa-2x"></i>
              <p>Productos</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/estadistica"
              className="dashboard-navbar-navlink-item"
            >
              <i className="fas fa-chart-bar fa-2x"></i>
              <p>Estad&iacute;stica</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/personal"
              className="dashboard-navbar-navlink-item"
            >
              <i className="fas fa-users fa-2x"></i>
              <p>Personal</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
