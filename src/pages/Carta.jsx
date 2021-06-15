import React, { useState } from "react";
import Cards from "../components/Carta/Cards";
import Imgcab from "../components/Imagen cabecera/Imgcab";
import FiltroCarta from "../components/Carta/FiltroCarta/FiltroCarta";

export default function Carta({
  productos,
  selectProduct,
  setSelectProduct,
}) {
  const [categoria, setCategoria] = useState("");

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
