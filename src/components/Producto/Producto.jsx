import React, { useState } from "react";
import "./Producto.css";
import { Button } from "reactstrap";

export default function Producto({ productos, producto, cart, setCart }) {
  const {
    nombreProducto,
    precioProducto,
    envolturaProducto,
    ingredientesProducto,
    src,
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
    const newCart = productos.filter((product) => product.id === id);
    //Con estos auxiliares puedo aumentar la cantidad del producto sumandolo a lo que ya tenia, resolviendo el problema
    //de que se añadiera el mismo objeto en el arreglo del carrito.
    let aux = cart.findIndex((product) => product.id === id);
    let cartAux = [...cart];
    let productAux = { ...cartAux[aux] };
    productAux.cantidadProducto += cantidadProducto;
    cartAux[aux] = productAux;
    // console.log(productAux);

    aux >= 0 ? setCart([...cartAux]) : setCart([...cart, ...newCart]);
  };
  // console.table(cart);

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="producto-container">
        <div className="producto-pic-container">
          <img
            src={src}
            alt="sushito ginzasushi"
            className="producto-pic"
          />
        </div>
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
              <button
                className="btn-cantidad-producto"
                onClick={quitarCantidad}
              >
                <i className="fas fa-minus-square fa-2x"></i>
              </button>
              <span className="cantidad-productos">{cantidadProducto}</span>
              <button className="btn-cantidad-producto" onClick={addCantidad}>
                <i className="fas fa-plus-square fa-2x"></i>
              </button>
            </div>
            <div className="boton">
              <Button style={styleBtnProduct} onClick={addCart}>
                Añadir al carrito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
