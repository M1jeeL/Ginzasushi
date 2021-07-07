import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import DireccionInfo from "./DireccionInfo";
import "./Direccion.css";

const Direccion = () => {
  const history = useHistory();
  const [usuario, setUsuario] = useState({});

  const url = `http://localhost:5000/usuario_actual`;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
      return;
    }

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((usuario) => {
        setUsuario(usuario);
      });

    return () => {
      return true;
    };
  }, [url, history]);

  return (
    <>
      <Imgcab nombrehead="Mis direcciones" />
      <div className="container direccion-container">
        <PanelUsuario />
        <DireccionInfo usuario={usuario}/>
      </div>
    </>
  );
};

export default Direccion;
