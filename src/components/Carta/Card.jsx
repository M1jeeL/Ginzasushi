import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ item}) {
  const { nombre, categoria, ingredientes, precio } = item;
  const src = ""

  let name = nombre.toLowerCase()
  
  let category = categoria.toLowerCase()
  category = category.replace(/ /g, "-")

  return (
    <>
      <Link
        to={`/${category}/${name}`}
        className="card-container"
      >
        <div className="card-info">
          <div className="card-titulo">
            <span>{nombre}</span>
          </div>
          <div className="card-ingredientes">
            <span>{ingredientes}</span>
          </div>

          <div className="card-precio">
            <footer>
              <span>$ {precio}</span>
            </footer>
          </div>
        </div>
        {src !== "" ? (
          <div className="producto-pic-container-card">
            <img
              src={src}
              alt="ginzasushi sushi barros luco"
              className="producto-pic-card"
            />
          </div>
        ) : (
          ""
        )}
      </Link>
    </>
  );
}

export default Card;
