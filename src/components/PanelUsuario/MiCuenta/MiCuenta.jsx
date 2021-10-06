import React from "react";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import DatosCuenta from "./DatosCuenta";
import "./MiCuenta.scss";
import Loader from "../../Loader/Loader";
import { useSelector } from "react-redux";

const MiCuenta = () => {

  const auth = useSelector((state) => state.auth);

  const { user } = auth; 

  return (
    <>
      <Imgcab nombrehead="Mi cuenta" />
      {Object.entries(auth).length > 0 ? (
        <div className="container micuenta-container">
          <PanelUsuario />
          <div className="container-datos-mi-cuenta">
            <DatosCuenta usuario={user} />
          </div>
        </div>
      ) : (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default MiCuenta;
