import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import CartModal from "../Carrito/CartModal";
import "./Navbar.css";

export default function Navbar({ cart }) {
  const [navLinkOpen, setNavLinkOpen] = useState(false);
  const [openCartModal, setCartModal] = useState(false);
  const handleCartModal = (e) => setCartModal(!openCartModal);

  const handleNavLinksToggle= () => {
    setNavLinkOpen(!navLinkOpen)
  }

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
          <ul className={navLinkOpen ? "nav-links active":"nav-links"}>
            <li className="item-nav-links">
              <NavLink to="/carta" exact>
                Carta
              </NavLink>
            </li>
            <li className="item-nav-links">
              <NavLink to="/login" exact>
                Login
              </NavLink>
            </li>
            <li className="item-nav-links">
              <NavLink to="/register" exact>
                Registro
              </NavLink>
            </li>
          </ul>

          <ul className="nav-icons">
            <li className="item-nav-icons">
              <NavLink to="/mi-cuenta" exact>
                <i className="fas fa-user fa-2x"></i>
              </NavLink>
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
          <Button  style={btnNonStyle} className="icono-barras" onClick={handleNavLinksToggle}>
            <i className="fas fa-bars fa-2x"></i>
          </Button>
          {/* <div className="icono-x">
            <i className="fas fa-times"></i>
          </div> */}

      </nav>
    </>
  );
}
