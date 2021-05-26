import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  //const [menuDisplay, setMenuDisplay] = useState(false);

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
                  <i className="fas fa-user"></i>
                </Link>
              </li>
              <li className="item-nav-icons">
                <Link to="/carro-de-compras">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
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
