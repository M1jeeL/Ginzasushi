import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CartModal from "../Carrito/CartModal";
import "./Navbar.css";

export default function Navbar({ cart }) {
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const [openCartModal, setCartModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCartModal = (e) => setCartModal(!openCartModal);
  const handleNavLinksToggle = (e) => setNavLinkOpen(!navLinkOpen);
  const resetNavLink = (e) => setNavLinkOpen(!navLinkOpen);
  const handleDropdown = (e) => setDropdownOpen(!dropdownOpen);

  const btnNonStyle = {
    outline: "none",
    background: "none",
    border: "none",
    boxShadow: "none",
  };

  return (
    <>
      <nav>
        <NavLink exact to="/">
          <div className="nav-logo" />
        </NavLink>
        <ul className={navLinkOpen ? "nav-links active" : "nav-links"}>
          <li className="item-nav-links">
            <NavLink to="/carta" exact onClick={resetNavLink}>
              Carta
            </NavLink>
          </li>
          <li className="item-nav-links">
            <NavLink to="/login" exact onClick={resetNavLink}>
              Login
            </NavLink>
          </li>
          <li className="item-nav-links">
            <NavLink to="/register" exact onClick={resetNavLink}>
              Registro
            </NavLink>
          </li>
        </ul>

        <ul className="nav-icons">
          <li className="item-nav-icons icon-user">
            <Dropdown isOpen={dropdownOpen} toggle={handleDropdown}>
              <DropdownToggle style={btnNonStyle}>
                <i className="fas fa-user fa-2x"></i>
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="mi-cuenta" exact>Mi cuenta</NavLink>
                <NavLink to="mis-pedidos" exact>Mis pedidos</NavLink>
                <NavLink to="/login" exact>Iniciar Sesi&oacute;n</NavLink>
                <NavLink to="/register" exact>Registrarse</NavLink>
              </DropdownMenu>
            </Dropdown>
          </li>

          <li className="item-nav-icons icon-cart">
            <Button
              style={btnNonStyle}
              onClick={handleCartModal}
              className="carrito-compras-container"
            >
              <div>{cart.length}</div>
              <i className="fas fa-shopping-cart fa-2x"></i>
            </Button>
            <CartModal
              handleCartModal={handleCartModal}
              openCartModal={openCartModal}
              cart={cart}
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
        {/* <div className="icono-x">
            <i className="fas fa-times"></i>
          </div> */}
      </nav>
    </>
  );
}
