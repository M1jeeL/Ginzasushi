import React from "react";
import { useDispatch } from "react-redux";
import {
  startRemoveOneFromCart,
  startAddQuantityForEach,
  startRemoveQuantityForEach,
} from "../../actions/products";
import { formatearNumero } from "../../helpers/formatearNumero";
import "./CartModalRow.scss";

const CartModalRow = ({ item, index }) => {
  const dispatch = useDispatch();

  const subTotalShow = formatearNumero(item.subTotal);

  return (
    <>
      <div className="modal-row">
        <img
          src={item.image_src}
          alt={item.nombre}
          className="item-img-modal-row"
        />
        <div className="info-modal-row">
          <p>{item.categoria}</p>
          <p>{item.nombre}</p>
          <span>
            {item.cantidad} x {subTotalShow}
          </span>
        </div>

        <div className="cantidad">
          {item.cantidad === 1 ? (
            <button
              className="btn-cantidad-producto"
              onClick={() => dispatch(startRemoveOneFromCart(index))}
            >
              <i className="fas fa-trash fa-2x"></i>
            </button>
          ) : (
            <button
              className="btn-cantidad-producto"
              onClick={() => dispatch(startRemoveQuantityForEach(item))}
            >
              <i className="fas fa-minus-square fa-2x"></i>
            </button>
          )}
          <button
            className="btn-cantidad-producto"
            onClick={() => dispatch(startAddQuantityForEach(item))}
          >
            <i className="fas fa-plus-square fa-2x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModalRow;
