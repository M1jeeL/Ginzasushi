import React from "react";
import Producto from "./Producto";

const ProductoSeleccionado = ({ db, selectProduct }) =>{

  let [showProduct] = db.filter((producto) => producto.id === selectProduct )

  console.log(showProduct.id)

  return (
    <Producto
    nombreProducto={showProduct.nombreProducto}
    precioProducto={showProduct.precioProducto}
    ingredientesProducto={showProduct.ingredientesProducto}
    />
  );
}

export default ProductoSeleccionado;
