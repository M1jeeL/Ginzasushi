import React from "react";

const InfoDatos = ({ formDataCliente, isLogged, user }) => {
  const { nombre, apellido, email, celular } = formDataCliente;
  return (
    <>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-user"></i>
        </div>
        {isLogged ? (
          <div className="data-row-checkout">{`${user.nombre} ${user.apellido}`}</div>
        ) : (
          <div className="data-row-checkout">{`${nombre} ${apellido}`}</div>
        )}
      </div>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-envelope"></i>
        </div>
        {isLogged ? (
          <div className="data-row-checkout">{user.email}</div>
        ) : (
          <div className="data-row-checkout">{email}</div>
        )}
      </div>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-phone-alt"></i>
        </div>
        {isLogged ? (
          <div className="data-row-checkout">{`+56${user.celular}`}</div>
        ) : (
          <div className="data-row-checkout">{`+56${celular}`}</div>
        )}
      </div>
    </>
  );
};

export default InfoDatos;
