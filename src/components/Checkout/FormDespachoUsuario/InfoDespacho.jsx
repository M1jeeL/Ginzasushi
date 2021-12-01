import React from "react";

const InfoDespacho = ({ formDespachoCliente, isLogged, user }) => {
  const { calle, numeracion, comuna, depto, tipoEntrega, notas } =
    formDespachoCliente;
  return (
    <>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-motorcycle"></i>
        </div>
        <div className="data-row-checkout">Delivery: {tipoEntrega}</div>
      </div>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        {isLogged ? (
          <div className="data-row-checkout">
            Direcci&oacute;n: {user.calle} {user.numeracion}, {user.comuna}
            {user.depto.trim() === "" ? "" : `, ${user.depto}`}
          </div>
        ) : (
          <div className="data-row-checkout">
            Direcci&oacute;n: {calle} {numeracion}, {comuna}
            {depto.trim() === "" ? "" : `, ${depto}`}
          </div>
        )}
      </div>
      <div className="row-checkout">
        <div className="logo-row-checkout">
          <i className="fas fa-file-alt"></i>
        </div>
        <div className="data-row-checkout">Indicaciones: {notas}</div>
      </div>
    </>
  );
};

export default InfoDespacho;
