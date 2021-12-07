import React, { useEffect, useState } from "react";
import InfoDespacho from "./InfoDespacho";
import FormDespacho from "./FormDespacho";

const CardDespachoCheckout = ({
  formDespachoCliente,
  handleInputChangeDespacho,
  isLogged,
  resetDespacho,
  user,
}) => {
  const [showDespachoInfo, setShowDespachoInfo] = useState(false);
  useEffect(() => {
    setShowDespachoInfo(isLogged);
  }, [isLogged]);

  const handleShowDespacho = () => {
    setShowDespachoInfo(!showDespachoInfo);
  };

  const fillFormDespacho = () => {
    resetDespacho({
      ...formDespachoCliente,
      id: user.id,
      calle: user.calle,
      comuna: user.comuna,
      numeracion: user.numeracion,
      depto: user.depto,
    });
  };

  return (
    <>
      <div className="info-container-checkout animate__animated animate__fadeInLeft animate__faster">
        <div className="title-info-checkout">
          <div>Datos de Despacho</div>
          {showDespachoInfo && (
            <div
              className="btn-editar-checkout"
              onClick={() => {
                handleShowDespacho();

                if (isLogged) {
                  fillFormDespacho();
                }
              }}
            >
              Editar
            </div>
          )}
        </div>
        {showDespachoInfo ? (
          <InfoDespacho
            formDespachoCliente={formDespachoCliente}
            isLogged={isLogged}
            user={user}
          />
        ) : (
          <FormDespacho
            formDespachoCliente={formDespachoCliente}
            handleInputChangeDespacho={handleInputChangeDespacho}
            handleShowDespacho={handleShowDespacho}
            id={formDespachoCliente.id}
            isLogged={isLogged}
          />
        )}
      </div>
    </>
  );
};

export default CardDespachoCheckout;
