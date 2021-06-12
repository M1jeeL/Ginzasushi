import React from "react";
import { Table } from "reactstrap";
import CartTableRow from "./CartTableRow";

const CartTable = ({ cart }) => {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((producto) => (
              <CartTableRow key={producto.id} producto={producto} />
            ))
          ) : (
            <tr>
              <td colSpan="3">No hay productos en el carrito</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CartTable;
