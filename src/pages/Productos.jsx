import React from "react";
import Categorias from "../components/Carta/Categorias/Categorias";
import ProductoSeleccionado from "../components/Producto/ProductoSeleccionado";
import Imgcab from "../components/Imagen cabecera/Imgcab";

const Productos = ({ db, selectProduct, cart, setCart }) => {
  return (
    <>
      <Imgcab nombrehead="California Rolls" />
      <br></br>
      <div className="main-container">
        <Categorias />
        <ProductoSeleccionado
          db={db}
          selectProduct={selectProduct}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </>
  );
};

export default Productos;
