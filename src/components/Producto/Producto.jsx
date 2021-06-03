import React, { useState } from "react";
import "./Producto.css";
import { Button } from "reactstrap";

export default function Producto({ db, producto, cart, setCart }) {
  const {
    nombreProducto,
    precioProducto,
    envolturaProducto,
    ingredientesProducto,
    id,
  } = producto;

  const [cantidadProducto, setCantidadProducto] = useState(1);

  const addCantidad = () => {
    setCantidadProducto(cantidadProducto + 1);
  };

  const quitarCantidad = () => {
    if (cantidadProducto === 1) {
      return;
    } else {
      setCantidadProducto(cantidadProducto - 1);
    }
  };

  producto.cantidadProducto = cantidadProducto;

  const addCart = () => {
    const producto = db.filter((product) => product.id === id);
    let aux = cart.findIndex((product) => product.id === id);

    let cartAux = [...cart];
    let productAux = { ...cartAux[aux] };
    productAux.cantidadProducto = productAux.cantidadProducto + cantidadProducto;
    cartAux[aux] = productAux;
    console.log(productAux);

    aux >= 0 ? setCart([...cartAux]) : setCart([...cart, ...producto]);
  };
  console.table(cart);

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
              <span className="cantidad-productos">{cantidadProducto}</span>
              <button
                className="btn-cantidad-producto"
                onClick={quitarCantidad}
              >
                <i className="fas fa-minus-square fa-2x"></i>
              </button>
            </div>
            <div className="boton">
              <Button color="warning" onClick={addCart}>
                Añadir al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
