import React from "react";
import Producto from "./Producto";

const ProductoSeleccionado = ({ db, selectProduct, cart, setCart }) => {
  let [showProduct] = db.filter((producto) => producto.id === selectProduct);
  // console.log(showProduct)

  return <Producto db={db} producto={showProduct} cart={cart} setCart={setCart} />;
};

export default ProductoSeleccionado;
