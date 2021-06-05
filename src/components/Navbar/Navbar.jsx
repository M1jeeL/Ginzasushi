import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import CartModal from "../Carrito/CartModal";
import "./Navbar.css";

export default function Navbar({ cart }) {
  //const [menuDisplay, setMenuDisplay] = useState(false);
  const [openCartModal, setCartModal] = useState(false);
  const openModal = (e) => setCartModal(!openCartModal);

  const btnCartForm = {
    outline: "none",
    background: "none",
    border: "none",
    boxShadow: "none",
  };

  return (
    <>
      <div className="navbar">
        <nav className="nav-container">
          <Link to="/">
            <div className="nav-logo" />
          </Link>
          <div>
            <ul className="nav-links">
              <li className="item-nav-links">
                <Link to="/carta">Carta</Link>
              </li>
              <li className="item-nav-links">
                <Link to="/login">Login</Link>
              </li>
              <li className="item-nav-links">
                <Link to="/register">Registro</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="nav-icons">
              <li className="item-nav-icons">
                <Link to="/mi-cuenta">
                  <i className="fas fa-user fa-2x"></i>
                </Link>
              </li>
              <li className="item-nav-icons">
                <Button
                style={btnCartForm}
                  onClick={openModal}
                  className="carrito-compras-container"
                >
                  <div>
                    <div className="contador-carrito-compras">
                      {cart.length}
                    </div>
                  </div>
                  <i className="fas fa-shopping-cart fa-2x"></i>
                </Button>
                <CartModal
                  openModal={openModal}
                  openCartModal={openCartModal}
                  cart={cart}
                />
              </li>
            </ul>
          </div>
          <div className="icono-barras">
            <i className="fas fa-bars"></i>
          </div>
          <div className="icono-x">
            <i className="fas fa-times"></i>
          </div>
        </nav>
      </div>
    </>
  );
}
