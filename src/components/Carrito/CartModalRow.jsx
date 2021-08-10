import React from "react";
import "./CartModalRow.css";

const CartModalRow = ({ item, subTotalForEach }) => {
  //   console.log(item);

  const { id } = item;
  const subTotal = subTotalForEach(id);

  return (
    <>
      <div className="modal-row">
        <img
          src="https://images.vexels.com/media/users/3/230800/isolated/preview/6fae7b492e567aae76ab5220a894087c-cute-dibujos-animados-de-sushi.png"
          alt={item.nombre}
          className="item-img-modal-row"
        />
        <div className="info-modal-row">
          <p>{item.nombre}</p>
          <span>
            {item.cantidad} x {subTotal}
          </span>
        </div>

          <div className="cantidad">
            <button
              className="btn-cantidad-producto"
              //   onClick={quitarCantidad}
            >
              <i className="fas fa-minus-square fa-2x"></i>
            </button>
            <span className="cantidad-productos"></span>
            <button className="btn-cantidad-producto">
              <i className="fas fa-plus-square fa-2x"></i>
            </button>
          </div>
      </div>
    </>
  );
};

export default CartModalRow;
