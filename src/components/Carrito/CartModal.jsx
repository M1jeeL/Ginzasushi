import React from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalFooter, Button } from "reactstrap";
import CartTable from "./CartTable";
import "./CartModal.css";

const CartModal = ({ cart, openCartModal, handleCartModal }) => {
  return (
    <div>
      <Modal
        isOpen={openCartModal}
        toggle={handleCartModal}
        className="modal-cart"
      >
        <ModalHeader toggle={handleCartModal}>Carrito de compras</ModalHeader>
        <CartTable cart={cart} />
        <ModalFooter>
          <Link to="/carro-de-compras">
            <Button type="button" color="warning" onClick={handleCartModal}>
              Ir al carrito
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CartModal;
