import React from "react";
import { Button } from "reactstrap";

const CartTableRow = ({ producto, removeFromCart }) => {
  let { nombre, precio, cantidad, id } = producto;

  const btnCloseForm = {
    outline: "none",
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
    boxShadow: "none",
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>{cantidad}</td>
      <td>
        <Button style={btnCloseForm} onClick={() => removeFromCart(id)}>
          <i className="far fa-times-circle fa-lg"></i>
        </Button>
      </td>
    </tr>
  );
};

export default CartTableRow;
