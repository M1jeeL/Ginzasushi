import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import { useParams } from "react-router-dom";

const PedidoInfo = () => {
  const { uuid } = useParams();
  const [pedido, setPedido] = useState({});
  const url = `http://localhost:5001/pedidos/${uuid}`;

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((pedido) => {
        setPedido(pedido);
      });

    return () => {
      return true;
    };
  }, [url]);

  return (
    <>
      <Imgcab nombrehead="Mi pedido" />
      <div className="container pedidos-container">
        <PanelUsuario />
        <Table dark striped className="pedidos-table">
          <thead>
            <tr>
              <th>Fecha de ingreso</th>
              <th>Estado</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pedido.fechaIngresada}</td>
              {pedido.estado === "En camino" && (
                <td className="en-camino">{pedido.estado}</td>
              )}
              {pedido.estado === "Recibida" && (
                <td className="recibida">{pedido.estado}</td>
              )}
              {pedido.estado === "Cancelada" && (
                <td className="cancelada">{pedido.estado}</td>
              )}
              <td>{pedido.descripcion}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default PedidoInfo;
