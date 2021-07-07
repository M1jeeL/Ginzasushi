import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const PedidosTable = ({ pedidos }) => {
  const btnNonStyle = {
    outline: "none",
    background: "none",
    border: "none",
    boxShadow: "none",
  };
  return (
    <Table dark striped className="pedidos-table">
      <thead>
        <tr>
          <th>Fecha de ingreso</th>
          <th>Estado</th>
          <th>Descripcion</th>
          <th>Ver pedido</th>
        </tr>
      </thead>
      <tbody>
        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <tr key={pedido.id}>
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
              <td>
                <Link to={`/pedidos/${pedido.uuid}`}>
                  <Button style={btnNonStyle} className="ver-info-pedido">
                    <i className="fas fa-eye"></i>
                  </Button>
                </Link>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Sin datos</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default PedidosTable;
