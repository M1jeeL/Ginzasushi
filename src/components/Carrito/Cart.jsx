import React from "react";
import CartTable from "./CartTable";

const Cart = ({ cart, setCart, eliminarProducto }) => {
  return (
    <div className="cart">
      <h3>Carrito</h3>
      <CartTable cart={cart} setCart={setCart} eliminarProducto={eliminarProducto} />
      
    </div>
  );
};

export default Cart;
