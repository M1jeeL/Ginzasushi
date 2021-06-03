import React from "react";
import { ListaCategorias } from "./ListaCategorias";
import "./Categorias.css";
import { Link } from "react-router-dom";

const Categorias = () => {
  
    return (
      <>
        <div className="categorias-container">
          <div className="categorias-titulo">
            <h1> Categor&iacute;as</h1>
          </div>
          <div className="categorias-lista">
            {ListaCategorias.map((item, index) => {
              return (
                <div key={index}>
                  <ul>
                    <li className="categorias-links">
                      <Link to={item.url}>{item.categoria}</Link>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  
}

export default Categorias;
