import React from "react";
import Imgcab from "../Imagen cabecera/Imgcab";
import "./Cart.css";
import CartTable from "./CartTable";

const Cart = () => {
  return (
    <>
      <Imgcab nombrehead="Carrito de compras" />
      <div className="cart">
        <CartTable
        />
      </div>
    </>
  );
};

export default Cart;
