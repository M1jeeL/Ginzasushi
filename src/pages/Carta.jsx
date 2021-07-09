import React, { useState, useEffect } from "react";
import Cards from "../components/Carta/Cards";
import Imgcab from "../components/Imagen cabecera/Imgcab";
import FiltroCarta from "../components/Carta/FiltroCarta/FiltroCarta";

export default function Carta({ selectProduct, setSelectProduct }) {
  const [categoria, setCategoria] = useState("");
  const [productos, setProductos] = useState([])
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

  let showProducts = productos.filter(
    (producto) => producto.categoriaProducto === categoria
  );

  const url = "http://localhost:5002/productos";


  return (
    <>
      <Imgcab nombrehead="Nuestra Carta" />
      <div className="container">
        <FiltroCarta setCategoria={setCategoria}></FiltroCarta>
        <Cards
          productos={showProducts.length ? showProducts : productos}
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        />
      </div>
    </>
  );
}
