import React from "react";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import FormDireccionInfo from "./FormDireccionInfo";
import "./Direccion.scss";
import Loader from "../../Loader/Loader";
import { useSelector } from "react-redux";

const Direccion = () => {
  const auth = useSelector((state) => state.auth);
  const { user } = auth;
 

  return (
    <>
      <Imgcab nombrehead="Mis direcciones" />
      {Object.entries(auth).length > 0 ? (
        <div className="container direccion-container">
          <PanelUsuario />
          <div className="container-datos-direccion animate__animated animate__fadeIn animate__faster">
            <FormDireccionInfo usuario={user} />
          </div>
        </div>
      ) : (
        <div className="d-flex direccion-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Direccion;
