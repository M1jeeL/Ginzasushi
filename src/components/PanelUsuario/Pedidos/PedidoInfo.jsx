import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import { useParams } from "react-router-dom";

const PedidoInfo = () => {
  const { uuid } = useParams();
  const [pedido, setPedido] = useState({});
  const url = process.env.REACT_APP_PEDIDOS_API;

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${url}/pedidos/${uuid}`, {
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
  }, [url, uuid]);

  console.log(pedido)

  return (
    <>
      <Imgcab nombrehead="Mi pedido" />
      <div className="container pedidos-container">
        <PanelUsuario />
        <div className="table-container-pedidos">
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
                <td data-label="Fecha de ingreso">{pedido.fechaIngresada}</td>
                {pedido.estado === "Pendiente" && (
                  <td data-label="Estado" className="en-camino">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "Recibida" && (
                  <td data-label="Estado" className="recibida">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "Cancelada" && (
                  <td data-label="Estado" className="cancelada">
                    {pedido.estado}
                  </td>
                )}
                <td data-label="Productos">{pedido.notas}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default PedidoInfo;
