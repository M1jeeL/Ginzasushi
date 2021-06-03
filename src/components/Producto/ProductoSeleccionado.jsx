import React from "react";
import Producto from "./Producto";

const ProductoSeleccionado = ({ db, selectProduct}) => {
  let [showProduct] = db.filter((producto) => producto.id === selectProduct);
  console.log(showProduct)
  return (
    <Producto
      nombreProducto={showProduct.nombreProducto}
      precioProducto={showProduct.precioProducto}
      ingredientesProducto={showProduct.ingredientesProducto}
      envolturaProducto={showProduct.envolturaProducto}
    />
  );
};

export default ProductoSeleccionado;
