import React from "react";
import Cards from "../components/Carta/Cards";
// import Categorias from "../components/Carta/Categorias/Categorias";
import Imgcab from "../components/Imagen cabecera/Imgcab";

export default function Carta({ productos, categorias, selectProduct, setSelectProduct }) {


  

  let showProducts = productos.filter((producto) => producto.categoriaProducto === categorias[3].categoria)
  
  console.log(categorias[3].categoria)
  return (
    <>
      <Imgcab nombrehead="Nuestra Carta" />
      <Cards
        productos={showProducts.length ? showProducts : productos}
        selectProduct={selectProduct}
        setSelectProduct={setSelectProduct}
      />
    </>
  );
}
