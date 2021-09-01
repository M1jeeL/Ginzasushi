import React from "react";

const CardCheckout = ({ formDataCliente }) => {
  const { nombre, apellido, email, celular } = formDataCliente;
  return (
    <>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-user"></i>
        </div>
        <div className="data-row-checkout">{`${nombre} ${apellido}`}</div>
      </div>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-envelope"></i>
        </div>
        <div className="data-row-checkout">{email}</div>
      </div>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-phone-alt"></i>
        </div>
        <div className="data-row-checkout">{`+56${celular}`}</div>
      </div>
    </>
  );
};

export default CardCheckout;
