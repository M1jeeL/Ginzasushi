import React from "react";
import { Link } from "react-router-dom";
import logopng from "../../img/prueba/logo.png";
import "./Card.css";

function Card({ item, setSelectProduct }) {
  const { nombreProducto, ingredientesProducto, precioProducto, id, src, url } =
    item;

  return (
    <>
      <Link
        to={url}
        onClick={() => setSelectProduct(id)}
        className="card-container"
      >
        <div className="card-info">
          <div className="card-titulo">
            <span>{nombreProducto}</span>
          </div>
            <div className="card-ingredientes">
              <span>{ingredientesProducto}</span>
            </div>

            <div className="card-precio">
              <footer>
                <span>$ {precioProducto}</span>
              </footer>
            </div>
        </div>
        {(src !== "") ? (<div className="producto-pic-container-card">
          <img
            src={src}
            alt="ginzasushi sushi barros luco"
            className="producto-pic-card"
          />
        </div>) : ("")}
        
      </Link>
    </>
  );
}

export default Card;
