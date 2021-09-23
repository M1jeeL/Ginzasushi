import React, { useEffect, useState } from "react";
import InfoDespacho from "./InfoDespacho";
import FormDespacho from "./FormDespacho";

const CardDespachoCheckout = ({
  formDespachoCliente,
  setFormDespachoCliente,
  isLogged,
}) => {
  const [activarDespachoCliente, setActivarDespachoCliente] =
    useState(isLogged);

  useEffect(() => {
    setActivarDespachoCliente(isLogged);
  }, [isLogged]);

  const handleFormDespachoCliente = () => {
    setActivarDespachoCliente(!activarDespachoCliente);
  };

  return (
    <>
      <div className="info-container-checkout">
        <div className="title-info-checkout">
          <div>Datos de Despacho</div>
          {activarDespachoCliente && (
            <div
              className="btn-editar-checkout"
              onClick={() => {
                handleFormDespachoCliente();
              }}
            >
              Editar
            </div>
          )}
        </div>
        {activarDespachoCliente ? (
          <InfoDespacho formDespachoCliente={formDespachoCliente} />
        ) : (
          <FormDespacho
            formDespachoCliente={formDespachoCliente}
            setFormDespachoCliente={setFormDespachoCliente}
            handleFormDespachoCliente={handleFormDespachoCliente}
            id={formDespachoCliente.id}
            isLogged={isLogged}
          />
        )}
      </div>
    </>
  );
};

export default CardDespachoCheckout;
