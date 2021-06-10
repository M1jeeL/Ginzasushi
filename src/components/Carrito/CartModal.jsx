import React from "react";
import { Modal, ModalHeader } from "reactstrap";
import CartTable from "./CartTable";
import './CartModal.css';

const CartModal = ({ cart, openCartModal, handleCartModal }) => {
  return (
    <div>
      <Modal isOpen={openCartModal} toggle={handleCartModal} className="modal-cart">
        <ModalHeader toggle={handleCartModal}>
          Carrito de compras
        </ModalHeader>

        <CartTable cart={cart} />
      </Modal>
    </div>
  );
};

export default CartModal;
