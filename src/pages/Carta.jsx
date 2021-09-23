import React, { useState } from "react";
import Cards from "../components/Carta/Cards";
import Imgcab from "../components/Imagen cabecera/Imgcab";

export default function Carta() {
  const [nombreHead, setNombreHead] = useState("Nuestra Carta");
  return (
    <>
      <Imgcab nombrehead={nombreHead} />
      <div className="container">
        <Cards setNombreHead={setNombreHead} />
      </div>
    </>
  );
}
