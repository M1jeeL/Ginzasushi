import React from "react";
import CartTable from "./CartTable";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <h3>Carrito</h3>
        <CartTable cart={cart} setCart={setCart} />
    </div>
  );
};

export default Cart;
