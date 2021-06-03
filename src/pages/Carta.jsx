import React from "react";
import Cards from "../components/Carta/Cards";
import Categorias from "../components/Carta/Categorias/Categorias";
import Imgcab from "../components/Imagen cabecera/Imgcab";

export default function Carta({ db, selectProduct, setSelectProduct }) {
  return (
    <>
      <Imgcab nombrehead="Nuestra Carta" />
      <br></br>
      <div className="main-container">
        <Categorias />
        <Cards
          db={db}
          selectProduct={selectProduct}
          setSelectProduct={setSelectProduct}
        />
      </div>
    </>
  );
}
