import React, { useState, useEffect } from "react";
import PanelUsuario from "../PanelUsuario";
import PedidosTable from "./PedidosTable";
import { useHistory } from "react-router-dom";
import Imgcab from "../../Imagen cabecera/Imgcab";
import "./Pedidos.css";

const Pedidos = () => {
  const history = useHistory();

  const [pedidos, setPedidos] = useState([]);

  const url = "http://3.233.87.147:5001/pedidos";

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
      .then((pedidos) => {
        setPedidos(pedidos);
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
      });
  }, [history]);

  return (
    <>
      <Imgcab nombrehead="Pedidos" />
      <div className="container pedidos-container">
        <PanelUsuario />
        <PedidosTable pedidos={pedidos} />
      </div>
    </>
  );
};

export default Pedidos;
