import React, { useEffect, useState } from "react";
import InfoDatos from "./InfoDatos";
import FormDatos from "./FormDatos";

const CardDatosCheckout = ({
  formDataCliente,
  handleInputChangeData,
  isLogged,
  resetData,
  user,
}) => {
  const [showDataInfo, setShowDataInfo] = useState(null);

  useEffect(() => {
    setShowDataInfo(isLogged);
  }, [isLogged]);

  const handleShowData = () => {
    setShowDataInfo(!showDataInfo);
  };

  const fillFormData = () => {
    resetData({
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      celular: user.celular,
    });
  };

  return (
    <>
      <div className="info-container-checkout animate__animated animate__fadeInLeft animate__faster">
        <div className="title-info-checkout">
          <div>Datos Personales</div>
          {showDataInfo && (
            <div
              className="btn-editar-checkout"
              onClick={() => {
                if (isLogged) {
                  fillFormData();
                }
                handleShowData();
              }}
            >
              Editar
            </div>
          )}
        </div>
        {showDataInfo ? (
          <InfoDatos
            formDataCliente={formDataCliente}
            isLogged={isLogged}
            user={user}
          />
        ) : (
          <FormDatos
            id={formDataCliente.id}
            formDataCliente={formDataCliente}
            handleInputChangeData={handleInputChangeData}
            handleShowData={handleShowData}
            isLogged={isLogged}
          />
        )}
      </div>
    </>
  );
};

export default CardDatosCheckout;
