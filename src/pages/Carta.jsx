import React, { useState, useEffect } from "react";
import Cards from "../components/Carta/Cards";
import Imgcab from "../components/Imagen cabecera/Imgcab";
import FiltroCarta from "../components/Carta/FiltroCarta/FiltroCarta";

export default function Carta({ selectProduct, setSelectProduct }) {
  const url = "http://3.233.87.147:5002/productos";
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
