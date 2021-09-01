import React from "react";
import Cards from "../components/Carta/Cards";
import Imgcab from "../components/Imagen cabecera/Imgcab";

export default function Carta() {
  return (
    <>
      <Imgcab nombrehead="Nuestra Carta" />
      <div className="container">
        <Cards
        />
      </div>
    </>
  );
}
