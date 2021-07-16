import React, { useState, useEffect } from "react";
// import Categorias from "../components/Carta/Categorias/Categorias";
import ProductoSeleccionado from "../components/Producto/ProductoSeleccionado";
import Imgcab from "../components/Imagen cabecera/Imgcab";

const Productos = ({ selectProduct, cart, setCart }) => {
  const [productos, setProductos] = useState([])
  const url = "http://3.233.87.147:5002/productos";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProductos(data));

    return () => {
      return true;
    };
  }, []);


  fetch()

  return (
    <>
      <Imgcab nombrehead="California Rolls" />
      <br></br>
      <ProductoSeleccionado
        productos={productos}
        selectProduct={selectProduct}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
};

export default Productos;
