import React from "react";
import { Button } from "reactstrap";

const CartTableRow = ({ producto, cart, setCart, eliminarProducto }) => {
  let { nombreProducto, precioProducto, cantidadProducto, id } = producto;

  // const eliminarProducto = () => {
  //   let newCart = cart.filter((producto) => producto.id !== id);
  //   console.log(newCart);
  //   // console.log(cart);
  //   setCart(newCart);
  // };

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
        <Button style={btnCloseForm} onClick={() => eliminarProducto(id)}>
          <i className="far fa-times-circle fa-lg"></i>
        </Button>
      </td>
    </tr>
  );
};

export default CartTableRow;
