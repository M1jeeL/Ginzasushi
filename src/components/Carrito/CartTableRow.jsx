import React from "react";

const CartTableRow = ({el}) => {
  let {
    nombreProducto,
    precioProducto,
    cantidadProducto
  } = el;

  return (
    <tr>
      <td>{nombreProducto}</td>
      <td>{precioProducto}</td>
      <td>{cantidadProducto}</td>
    </tr>
  );
};

export default CartTableRow;
