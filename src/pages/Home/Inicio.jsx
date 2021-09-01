import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import MapView from "../../components/Map/MapView";
import "./Inicio.scss";

export default function Inicio() {
  return (
    <>
      <div className="jumbo-home">
        <div className="column-link-home">
          <h2>¡Pide ya tu roll favorito!</h2>
          <h1>
            <Link to="carta">Revisa nuestra carta</Link>
          </h1>
        </div>
      </div>
      <div className="seccion"></div>
      <div className="redes">
        <div className="encuentranos">
          <div className="box-1-wrap">
            <h3>Pedidos y Delivery</h3>
            <br />
            <h4>
              Llamanos al:{" "}
              <span>
                <a href="tel:+56937396320">+56 9 3739 6320</a>
              </span>
            </h4>
            <p>Tambi&eacute;n puedes agregar productos a tu carrito </p>
            <p>No esperes m&aacute;s!</p>
            <Button color="warning">
              <Link to="/carta">Ver carta</Link>
            </Button>
          </div>
          <div className="box-2-wrap"></div>
          <div className="box-3-wrap"></div>
          <div className="box-4-wrap">
            <h3>S&iacute;guenos en nuestras redes!</h3>
            <h4>Etiquetanos en tus historias!</h4>
            <div className="social-network">
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
        </div>
      </div>
      <h2 className="seccion-title" id="contacto">
        ¿D&oacute;nde encontrarnos?
      </h2>
      <div className="map-container">
        <MapView />
        <div className="horarios">
          <div className="horario-item">
            <h3>Lunes a Jueves</h3>
            <h4>12:00 a 22:00 hrs</h4>
          </div>
          <div className="horario-item">
            <h3>Viernes y S&aacute;bado</h3>
            <h4>12:30 a 23:00 hrs</h4>
          </div>
          <div className="horario-item">
            <h3>Domingo</h3>
            <h4>12:00 a 21:00 hrs</h4>
          </div>
        </div>
      </div>
    </>
  );
}
