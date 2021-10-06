import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { startAddToCart } from "../../actions/products";
import "./Producto.scss";

export default function Producto({ producto }) {
  const dispatch = useDispatch();
  const { category, product } = producto;
  const { nombre, precio, descripcion, image_src } = product;
  const [cantidadProducto, setCantidadProducto] = useState(1);
  const [envol] = useState(category.envoltura);
  const [selectEnvol, setSelectEnvol] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageError, setShowMessageError] = useState(false);

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

  useEffect(() => {
    return () => {
      setShowMessage(false);
      setShowMessageError(false);
    };
  }, []);

  const mostrarMensaje = () => {
    if (showMessage === false) {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 1500);
      return;
    }
  };

  const mostrarMensajeError = () => {
    if (showMessageError === false) {
      setShowMessageError(true);
      setTimeout(() => {
        setShowMessageError(false);
      }, 1500);
      return;
    }
  };

  const handleChange = (e) => {
    setSelectEnvol(e.target.value);
  };

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <>
      <div className="container">
        <Link
          to={"/carta"}
          className="d-flex justify-content-end align-items-center"
        >
          <span className="return-to-products mx-3">Volver a la carta</span>
          <i className="fas fa-arrow-left fa-3x"></i>
        </Link>
        <div className="producto-container">
          <div className="producto-pic-container">
            <img
              src={image_src}
              alt="sushito ginzasushi"
              className="producto-pic"
            />
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
              <Input
                type="select"
                name="envoltura"
                id="envoltura"
                className="envoltura"
                value={selectEnvol}
                required
                onChange={handleChange}
              >
                <option value="" disabled>
                  Seleccione la envoltura
                </option>
                {envol.map((envol, index) => (
                  <option key={index} value={envol}>
                    {envol}
                  </option>
                ))}
              </Input>
              <span className="envoltura">{}</span>
            </div>
            <div className="linea-producto">
              <hr />
            </div>
            <div className="producto-ingredientes">
              <span className="ing">Ingredientes: </span>
              <br />
              <span className="ing-desc">{descripcion}</span>
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
              <div className="boton-add-cart">
                <Button
                  style={styleBtnProduct}
                  onClick={() => {
                    if (selectEnvol === "") {
                      mostrarMensajeError();
                      return;
                    }

                    dispatch(
                      startAddToCart(
                        product,
                        cantidadProducto,
                        selectEnvol,
                        category.nombre
                      )
                    );
                    mostrarMensaje();
                  }}
                >
                  Añadir al carrito
                </Button>
              </div>
            </div>
          </div>
        </div>
        {showMessage && (
          <span className="message">
            Su producto fue agregado al carrito con &eacute;xito
          </span>
        )}
        {showMessageError && (
          <span className="messageError">Seleccione una envoltura</span>
        )}
      </div>
    </>
  );
}
