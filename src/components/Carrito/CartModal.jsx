import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from "reactstrap";
import CartContext from "../../context/CartContext";
import "./CartModal.css";
import CartModalRow from "./CartModalRow";

const CartModal = ({ openCartModal, handleCartModal }) => {
  const { cart, subTotalForEach, removeAllFromCart } = useContext(CartContext);
  let subTotal = 0;
  cart.forEach((item) => {
    subTotal = subTotal + subTotalForEach(item.id);
  });

  subTotal = subTotal
    .toString()
    .split("")
    .reverse()
    .join("")
    .replace(/(?=\d*\.?)(\d{3})/g, "$1.");
  subTotal = subTotal.split("").reverse().join("").replace(/^[.]/, "");

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <div className="modal-cart-container">
      <Modal
        isOpen={openCartModal}
        toggle={handleCartModal}
        className="modal-cart"
      >
        <ModalHeader toggle={handleCartModal} className="header-modal-cart">
          Carrito de compras
        </ModalHeader>
        {cart.length > 0 ? (
          <>
            <ModalBody>
              {cart.map((item) => (
                <CartModalRow
                  key={item.id}
                  item={item}
                  subTotalForEach={subTotalForEach}
                />
              ))}
            </ModalBody>
            <ModalFooter className="footer-modal-cart">
              <strong className="subtotal-modal-cart">
                Subtotal: ${subTotal}
              </strong>
              <Button
                type="button"
                style={styleBtnProduct}
                onClick={removeAllFromCart}
              >
                Vaciar Carrito
              </Button>

              <Link to="/checkout" className="btn-modal-cart">
                <Button
                  type="button"
                  style={styleBtnProduct}
                  onClick={handleCartModal}
                >
                  Finalizar Compra
                </Button>
              </Link>
            </ModalFooter>
          </>
        ) : (
          <>
            <ModalBody>No hay productos en el carrito</ModalBody>
            <ModalFooter className="footer-modal-cart">
              <Link to="/carta">
                <Button
                  type="button"
                  style={styleBtnProduct}
                  onClick={handleCartModal}
                  className="btn-modal-cart"
                >
                  Ver carta
                </Button>
              </Link>
            </ModalFooter>
          </>
        )}
      </Modal>
    </div>
  );
};

export default CartModal;
