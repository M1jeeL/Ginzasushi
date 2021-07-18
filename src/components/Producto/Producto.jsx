import React, { useContext, useState } from "react";
import "./Producto.css";
import { Button } from "reactstrap";
import CartContext from "../../context/CartContext";

export default function Producto({ producto }) {
  const { addToCart } = useContext(CartContext);

  const { nombre, precio, envoltura, ingredientes } = producto;

  const src =
    "https://images.vexels.com/media/users/3/230800/isolated/preview/6fae7b492e567aae76ab5220a894087c-cute-dibujos-animados-de-sushi.png";
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

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div className="container producto-container">
      <div className="producto-pic-container">
        <img src={src} alt="sushito ginzasushi" className="producto-pic" />
      </div>
      <div className="info-producto">
        <div className="producto-titulo">
          <span>{nombre}</span>
        </div>
        <div className="linea-producto">
          <hr />
        </div>
        <div className="producto-precio">
          <span>$ {precio}</span>
        </div>
        <div className="linea-producto">
          <hr />
        </div>
        <div className="producto-envoltura">
          <span className="ing">Envuelto en:</span>
          <br />
          <span className="envoltura">{envoltura}</span>
        </div>
        <div className="linea-producto">
          <hr />
        </div>
        <div className="producto-ingredientes">
          <span className="ing">Ingredientes: </span>
          <br />
          <span className="ing-desc">{ingredientes}</span>
        </div>
        <div className="linea-producto">
          <hr />
        </div>
        <div className="añadir-al-carro">
          <div className="cantidad">
            <button className="btn-cantidad-producto" onClick={quitarCantidad}>
              <i className="fas fa-minus-square fa-2x"></i>
            </button>
            <span className="cantidad-productos">{cantidadProducto}</span>
            <button className="btn-cantidad-producto" onClick={addCantidad}>
              <i className="fas fa-plus-square fa-2x"></i>
            </button>
          </div>
          <div className="boton">
            <Button
              style={styleBtnProduct}
              onClick={() => addToCart(producto, cantidadProducto)}
            >
              Añadir al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
