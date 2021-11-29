import React from "react";

export const Approved = ({ merchant_order_id }) => {
  return (
    <div className="feedback-approved-container">
      <h1>Muchas gracias por tu compra!</h1>
      <p>
        Recibir&aacute;s un correo con el detalle de tu compra. Si necesitas
        ayuda no dudes en comunicarte con nuestro equipo.
      </p>
      <div className="feedback-approved-number-order-container">
        <span className="feedback-approved-number-order-label">
          N&uacute;mero de pedido:{" "}
        </span>
        <span className="feedback-approved-number-order">
          {merchant_order_id}
        </span>
      </div>
      <h2>Síguenos tambi&eacute;n en nuestras redes sociales</h2>
      <div className="feedback-approved-social-icons">
        <a
          href="https://www.instagram.com/ginzasushi_delivery/?hl=es-la"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>

        <a
          href="https://www.facebook.com/GinzasushiDelivery"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square fa-2x"></i>
        </a>
      </div>
    </div>
  );
};
