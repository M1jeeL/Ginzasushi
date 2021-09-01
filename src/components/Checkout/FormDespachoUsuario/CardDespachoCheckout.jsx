import React, { useState } from "react";
import InfoDespacho from "./InfoDespacho";
import FormDespacho from "./FormDespacho";

const CardDespachoCheckout = ({
  formDespachoCliente,
  setFormDespachoCliente,
}) => {
  const [activarDespachoCliente, setActivarDespachoCliente] = useState(false);

  const handleFormDespachoCliente = () => {
    setActivarDespachoCliente(!activarDespachoCliente);
  };

  return (
    <>
      <div className="info-container-checkout">
        <div className="title-info-checkout">
          <div>Datos de Despacho</div>
          {!activarDespachoCliente && (
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
          <FormDespacho
            formDespachoCliente={formDespachoCliente}
            setFormDespachoCliente={setFormDespachoCliente}
            handleFormDespachoCliente={handleFormDespachoCliente}
            id={formDespachoCliente.id}
          />
        ) : (
          <InfoDespacho formDespachoCliente={formDespachoCliente} />
        )}
      </div>
    </>
  );
};

export default CardDespachoCheckout;
