import React from "react";
import Categorias from "../components/Carta/Categorias/Categorias";
import ProductoSeleccionado from "../components/Producto/ProductoSeleccionado";
import Imgcab from "../components/Imagen cabecera/Imgcab";

const Productos = ({ db, selectProduct }) => {
  return (
    <>
      <Imgcab nombrehead="California Rolls" />
      <br></br>
      <div className="main-container">
        <Categorias />
        <ProductoSeleccionado db={db} selectProduct={selectProduct} />
      </div>
    </>
  );
};

export default Productos;
