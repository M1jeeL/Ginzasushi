import React from "react";
import { Modal, Button } from "reactstrap";
import CartTable from "./CartTable";

const CartModal = ({ cart, openCartModal, openModal }) => {
  return (
    <div>
      <Modal isOpen={openCartModal === true} backdrop={false}>
        <div>
          <Button close onClick={openModal} />
        </div>
        <CartTable cart={cart} />
      </Modal>
    </div>
  );
};

export default CartModal;
