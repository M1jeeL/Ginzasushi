import React, { useContext } from "react";
import { Table } from "reactstrap";
import CartContext from "../../context/CartContext";
import CartTableRow from "./CartTableRow";

const CartTable = () => {
  const { cart, removeFromCart} = useContext(CartContext)
  return (
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
              <CartTableRow
                key={producto.id}
                producto={producto}
                removeFromCart={removeFromCart}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay productos en el carrito</td>
            </tr>
          )}
        </tbody>
      </Table>
  );
};

export default CartTable;
