import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
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
        <p>© Ginzasushi delivery - Desarrollado por mijel</p>
      </div>
    </div>
  );
}
