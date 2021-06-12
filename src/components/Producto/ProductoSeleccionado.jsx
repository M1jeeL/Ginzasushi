import React from "react";
import Producto from "./Producto";

const ProductoSeleccionado = ({ productos, selectProduct, cart, setCart }) => {
  let [showProduct] = productos.filter((producto) => producto.id === selectProduct);
  // console.log(showProduct)

  return <Producto productos={productos} producto={showProduct} cart={cart} setCart={setCart} />;
};

export default ProductoSeleccionado;
