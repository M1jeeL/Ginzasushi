import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import FormDireccionInfo from "./FormDireccionInfo";
import "./Direccion.scss";
import Loader from "../../Loader/Loader";

const Direccion = () => {
  const history = useHistory();
  const [usuario, setUsuario] = useState({});

  const url = process.env.REACT_APP_USUARIOS_API;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
      return;
    }

    fetch(`${url}/usuario_actual`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((usuario) => {
        setUsuario(usuario);
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
        history.push("/login");
      });

    return () => {
      return true;
    };
  }, [url, history]);

  return (
    <>
      <Imgcab nombrehead="Mis direcciones" />
      {Object.entries(usuario).length > 0 ? (
        <div className="container direccion-container">
          <PanelUsuario />
          <div className="container-datos-direccion">
            <FormDireccionInfo usuario={usuario} />
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
