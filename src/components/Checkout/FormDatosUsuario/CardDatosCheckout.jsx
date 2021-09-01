import React, { useState } from "react";
import CardCheckout from "./InfoDatos";
import FormDatos from "./FormDatos";

const CardDatosCheckout = ({ formDataCliente, setFormDataCliente}) => {
  const [activarDataCliente, setActivarDataCliente] = useState(false);

  const handleFormDataCliente = () => {
    setActivarDataCliente(!activarDataCliente);
  };

  

  return (
    <>
      <div className="info-container-checkout">
        <div className="title-info-checkout">
          <div>Datos Personales</div>
          {!activarDataCliente && (
            <div
              className="btn-editar-checkout"
              onClick={() => {
                handleFormDataCliente();
              }}
            >
              Editar
            </div>
          )}
        </div>
        {activarDataCliente ? (
          <FormDatos
            id={formDataCliente.id}
            formDataCliente={formDataCliente}
            setFormDataCliente={setFormDataCliente}
            handleFormDataCliente={handleFormDataCliente}
          />
        ) : (
          <CardCheckout formDataCliente={formDataCliente} />
        )}
      </div>
    </>
  );
};

export default CardDatosCheckout;
