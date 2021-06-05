import React from "react";
import { Table } from "reactstrap";
import CartTableRow from "./CartTableRow";

const CartTable = ({ cart }) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((producto) => (
              <CartTableRow key={producto.id} el={producto} />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default CartTable;
