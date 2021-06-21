import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import { Button, Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import CartModal from "../Carrito/CartModal";
import "./Navbar.css";

export default function Navbar({ cart, eliminarProducto }) {
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
  cart.forEach(
    (producto) => (ContadorProductosCarrito += producto.cantidadProducto)
  );

  return (
    <nav>
      <NavLink exact to="/">
        <div className="nav-logo" />
      </NavLink>
      <ul className={navLinkOpen ? "nav-links active" : "nav-links"}>
        <li className="item-nav-links">
          <NavLink exact to="/carta" onClick={resetNavLink}>
            Carta
          </NavLink>
        </li>
        <li className="item-nav-links">
          <NavLink exact to="/promociones" onClick={resetNavLink}>
            Promociones
          </NavLink>
        </li>
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
              <NavLink exact to="/login" className="dropdown-item">
                Mi cuenta
              </NavLink>
              <NavLink exact to="/register" className="dropdown-item">
                Registrarse
              </NavLink>
              <NavLink exact to="/mis-pedidos" className="dropdown-item">
                Mis pedidos
              </NavLink>
              <NavLink exact to="/mis-direcciones" className="dropdown-item">
                Editar direcci&oacute;n
              </NavLink>
              <NavLink exact to="/carro-de-compras" className="dropdown-item">
                Mi carrito
              </NavLink>
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
            cart={cart}
            eliminarProducto={eliminarProducto}
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
  );
}
