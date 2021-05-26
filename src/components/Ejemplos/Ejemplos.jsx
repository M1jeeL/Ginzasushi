// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

import React from "react";

export default function Ejemplos() {
  const contadorCaracteres = (cadena) => {
    let cadenaDividida, contador;
    if (cadena.length === 1) {
      return console.log("Cadena tiene 1 letra");
    }
    if (typeof cadena === "string") {
      cadenaDividida = cadena.split("");
      contador = cadenaDividida.length;
      return console.log(`Cadena tiene ${contador} caracteres`);
    } else {
      return console.log("Valor no es un string");
    }
  };

  const cortarString = (cadena, corte) => {
    let cadenaDividida = cadena.split("");
    let cadenaCortada = [];
    for (let i = 0; i < corte; i++) {
      cadenaCortada[i] = [...cadenaDividida[i]];
    }

    let mensaje = cadenaCortada.join("");

    return console.log(mensaje);
  };

  const repetirString = (cadena, repetir) => {
    let repetido = "";
    for (let i = 0; i < repetir; i++) {
      repetido += cadena + " ";
    }
    console.log(repetido);
  };

  contadorCaracteres("hola mundo");
  cortarString("Crispoh weco", 12);
  repetirString("Blind weco", 3);
  return <></>;
}
