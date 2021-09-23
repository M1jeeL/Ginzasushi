import React, { useEffect, useState } from "react";
import InfoDatos from "./InfoDatos";
import FormDatos from "./FormDatos";

const CardDatosCheckout = ({
  formDataCliente,
  setFormDataCliente,
  isLogged,
}) => {
  const [activarDataCliente, setActivarDataCliente] = useState(null);
  useEffect(() => {
    setActivarDataCliente(isLogged);
  }, [isLogged]);

  const handleFormDataCliente = () => {
    setActivarDataCliente(!activarDataCliente);
  };

  return (
    <>
      <div className="info-container-checkout">
        <div className="title-info-checkout">
          <div>Datos Personales</div>
          {activarDataCliente && (
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
          <InfoDatos formDataCliente={formDataCliente} />
        ) : (
          <FormDatos
            id={formDataCliente.id}
            formDataCliente={formDataCliente}
            setFormDataCliente={setFormDataCliente}
            handleFormDataCliente={handleFormDataCliente}
            isLogged={isLogged}
          />
        )}
      </div>
    </>
  );
};

export default CardDatosCheckout;
