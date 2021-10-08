import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import CartModal from "../Carrito/CartModal";
import "./Navbar.scss";

export default function Navbar() {
  const { cart } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const [openCartModal, setCartModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCartModal = () => setCartModal(!openCartModal);
  const handleNavLinksToggle = () => setNavLinkOpen(!navLinkOpen);
  const resetNavLink = () => setNavLinkOpen(false);
  const handleDropdown = () => setDropdownOpen(!dropdownOpen);

  const btnNonStyle = {
    outline: "none",
    background: "none",
    border: "none",
    boxShadow: "none",
  };

  //Sumo la cantidad de productos totales que tiene el carrito
  let ContadorProductosCarrito = 0;
  cart.forEach((producto) => (ContadorProductosCarrito += producto.cantidad));

  return (
    <nav className="nav-principal">
      <NavLink exact to="/">
        <div className="nav-logo" />
      </NavLink>
      <ul className={navLinkOpen ? "nav-links active" : "nav-links"}>
        <li className="item-nav-links">
          <NavLink exact to="/carta" onClick={resetNavLink}>
            Carta
          </NavLink>
        </li>
        {/* <li className="item-nav-links">
          <NavLink exact to="/promociones" onClick={resetNavLink}>
            Promociones
          </NavLink>
        </li> */}
        <li className="item-nav-links">
          <NavLink exact to="/contacto" onClick={resetNavLink}>
            Contacto
          </NavLink>
        </li>
      </ul>

      <ul className="nav-icons">
        <li className="item-nav-icons icon-user">
          <Dropdown
            isOpen={dropdownOpen}
            toggle={handleDropdown}
            className="dropdown-icon-user"
          >
            <DropdownToggle style={btnNonStyle}>
              <i className="fas fa-user fa-2x"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-icon-user">
              <NavLink
                exact
                to="/mi-cuenta"
                className="dropdown-item"
                onClick={handleDropdown}
              >
                Mi cuenta
              </NavLink>
              <NavLink
                exact
                to="/mis-direcciones"
                className="dropdown-item"
                onClick={handleDropdown}
              >
                Editar direcci&oacute;n
              </NavLink>
              <NavLink
                exact
                to="/mis-pedidos"
                className="dropdown-item"
                onClick={handleDropdown}
              >
                Mis pedidos
              </NavLink>
              {user?.isAdmin && (
                <NavLink
                  exact
                  to="/dashboard/pedidos"
                  className="dropdown-item"
                  onClick={handleDropdown}
                >
                  Administrar
                </NavLink>
              )}
            </DropdownMenu>
          </Dropdown>
        </li>

        <li className="item-nav-icons icon-cart">
          <Button
            style={btnNonStyle}
            onClick={handleCartModal}
            className="carrito-compras-container"
          >
            <div>{ContadorProductosCarrito}</div>
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Button>
          <CartModal
            handleCartModal={handleCartModal}
            openCartModal={openCartModal}
          />
        </li>
      </ul>
      <Button
        style={btnNonStyle}
        className="icono-barras"
        onClick={handleNavLinksToggle}
      >
        <i className="fas fa-bars fa-2x"></i>
      </Button>
    </nav>
  );
}
