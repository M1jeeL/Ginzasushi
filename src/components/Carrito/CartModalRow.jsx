import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./CartModalRow.css";

const CartModalRow = ({ item }) => {
  //   console.log(item);
  const { subTotalForEach, addQuantityForEach, removeQuantityForEach, removeFromCart } =
    useContext(CartContext);
  const { id } = item;
  let subTotal = subTotalForEach(id);
  subTotal = subTotal
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
  subTotal = subTotal.split("").reverse().join("").replace(/^[.]/, "");

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
          {item.cantidad === 1 ? (
            <button
              className="btn-cantidad-producto"
              onClick={() => removeFromCart(item.id)} 
            >
              <i className="fas fa-trash fa-2x"></i>
            </button>
          ) : (
            <button
              className="btn-cantidad-producto"
              onClick={() => removeQuantityForEach(item)}
            >
              <i className="fas fa-minus-square fa-2x"></i>
            </button>
          )}
          <button
            className="btn-cantidad-producto"
            onClick={() => addQuantityForEach(item)}
          >
            <i className="fas fa-plus-square fa-2x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModalRow;
