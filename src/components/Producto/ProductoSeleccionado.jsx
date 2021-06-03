import React from "react";
import Producto from "./Producto";

const ProductoSeleccionado = ({ db, selectProduct}) => {
  let [showProduct] = db.filter((producto) => producto.id === selectProduct);
  // console.log(showProduct)

  return (
    <Producto
      producto= {showProduct}
    />
  );
};

export default ProductoSeleccionado;
