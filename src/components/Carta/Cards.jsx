import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Cards({ db, selectProduct, setSelectProduct }) {
  return (
    <>
      <div className="cards-container">
        {db.map((item) => {
          return (
            <div key={item.id}>
              <ul>
                <li className="cards-links">
                  <Link to="/productos" onClick={() => setSelectProduct(item.id)}>
                    <Card
                      nombreProducto={item.nombreProducto}
                      ingredientesProducto={item.ingredientesProducto}
                      precioProducto={item.precioProducto}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
