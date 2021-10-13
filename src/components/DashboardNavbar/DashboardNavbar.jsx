import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleShowSidebar } from "../../actions/ui";
import "./DashboardNavbar.scss";

export const DashboardNavbar = () => {
  const { showSidebar } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  return (
    <nav className={showSidebar ? "dashboard-navbar" : "dashboard-navbar hide"}>
      <div className="dashboard-nav-btn">
        <i
          className="fas fa-chevron-left fa-2x dashboard-navbar-icon"
          onClick={() => {
            dispatch(handleShowSidebar());
          }}
        ></i>
      </div>
      <ul className="dashboard-navbar-navlinks">
        <li>
          <NavLink
            to="/dashboard/pedidos"
            className="dashboard-navbar-navlink-item"
          >
            <i className="fas fa-shopping-bag fa-2x" alt="Pedidos"></i>
            <p className="dashboard-navbar-name">Pedidos</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/productos"
            className="dashboard-navbar-navlink-item"
          >
            <i className="fas fa-clipboard fa-2x"></i>
            <p className="dashboard-navbar-name">Productos</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/estadistica"
            className="dashboard-navbar-navlink-item"
          >
            <i className="fas fa-chart-bar fa-2x"></i>
            <p className="dashboard-navbar-name">Estad&iacute;stica</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/personal"
            className="dashboard-navbar-navlink-item"
          >
            <i className="fas fa-users fa-2x"></i>
            <p className="dashboard-navbar-name">Personal</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
