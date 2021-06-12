import React from "react";
import { Button } from "reactstrap";

const CartTableRow = ({ producto }) => {
  let { nombreProducto, precioProducto, cantidadProducto } = producto;

  const btnCloseForm = {
    outline: "none",
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
    boxShadow: "none",
  };
  return (
    <tr>
      <td>{nombreProducto}</td>
      <td>{precioProducto}</td>
      <td>{cantidadProducto}</td>
      <td>
        <Button style={btnCloseForm} onClick={() => {}}>
          <i className="far fa-times-circle fa-lg"></i>
        </Button>
      </td>
    </tr>
  );
};

export default CartTableRow;
