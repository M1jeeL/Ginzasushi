import React, { useState } from "react";
import "./Producto.css";

export default function Producto({ producto }) {
  const {
    nombreProducto,
    precioProducto,
    envolturaProducto,
    ingredientesProducto,
  } = producto;
  
  const [cantidad, setCantidad] = useState(1);
  const addCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const quitarCantidad = () => {
    if (cantidad === 1) {
      return;
    } else {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <>
      <div className="producto-container">
        <div className="producto-pic"></div>
        <div className="info-producto">
          <div className="producto-titulo">
            <span>{nombreProducto}</span>
          </div>
          <div className="linea-producto">
            <hr />
          </div>
          <div className="producto-precio">
            <span>$ {precioProducto}</span>
          </div>
          <div className="linea-producto">
            <hr />
          </div>
          <div className="producto-envoltura">
            <span className="ing">Envuelto en:</span>
            <br />
            <span className="envoltura">{envolturaProducto}</span>
          </div>
          <div className="linea-producto">
            <hr />
          </div>
          <div className="producto-ingredientes">
            <span className="ing">Ingredientes: </span>
            <br />
            <span className="ing-desc">{ingredientesProducto}</span>
          </div>
          <div className="linea-producto">
            <hr />
          </div>
          <div className="añadir-al-carro">
            <div className="cantidad">
              <button className="btn-cantidad-producto" onClick={addCantidad}>
                <i className="fas fa-plus-square fa-2x"></i>
              </button>
              <span className="cantidad-productos">{cantidad}</span>
              <button
                className="btn-cantidad-producto"
                onClick={quitarCantidad}
              >
                <i className="fas fa-minus-square fa-2x"></i>
              </button>
            </div>
            <div className="boton">
              <input value="Añadir al carrito" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
