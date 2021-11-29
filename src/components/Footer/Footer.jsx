import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <div className="footer-logo" />
        <div className="footer-iconos">
          <div className="footer-ig">
            <a
              href="https://www.instagram.com/ginzasushi_delivery/?hl=es-la"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram  fa-2x"></i>
            </a>
          </div>
          <div className="footer-facebook">
            <a
              href="https://www.facebook.com/GinzasushiDelivery"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-firma">
        <p>© Ginzasushi Delivery - Desarrollado por Miguel Loza</p>
      </div>
    </footer>
  );
}
