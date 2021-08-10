import React from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from "reactstrap";
import "./CartModal.css";
import CartModalRow from "./CartModalRow";

const CartModal = ({
  openCartModal,
  handleCartModal,
  cart,
  subTotalForEach,
}) => {
  let subTotal = 0;
  cart.forEach((item) => {
    subTotal = subTotal + subTotalForEach(item.id);
  });

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <div>
      <Modal
        isOpen={openCartModal}
        toggle={handleCartModal}
        className="modal-cart"
      >
        <ModalHeader toggle={handleCartModal}>Carrito de compras</ModalHeader>
        {cart.length > 0 ? (
          <>
            <ModalBody >
              {cart.map((item) => (
                <CartModalRow
                  key={item.id}
                  item={item}
                  subTotalForEach={subTotalForEach}
                />
              ))}
            </ModalBody>
            <ModalFooter className="footer-modal-cart">
              <strong className="subtotal-modal-cart">Subtotal: ${subTotal}</strong>
              <Link to="/carro-de-compras" className="btn-modal-cart">
                <Button type="button" style={styleBtnProduct} onClick={handleCartModal}>
                  Ir al carrito
                </Button>
              </Link>
              <Link to="/checkout" className="btn-modal-cart">
                <Button type="button" style={styleBtnProduct} onClick={handleCartModal}>
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
                <Button type="button" color="warning" onClick={handleCartModal} className="btn-modal-cart">
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
