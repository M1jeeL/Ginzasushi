import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
 
} from "reactstrap";
import "./DashboardPedidosModal.scss";


export const DashboardPedidosModal = ({
  openPedidoModal,
  openModalPedido,
}) => {
 

  return (
    <Modal isOpen={openPedidoModal} toggle={openModalPedido}>
      <ModalHeader>
        
        
      </ModalHeader>
      <ModalBody>
        
      </ModalBody>
      <ModalFooter>
        
      </ModalFooter>
    </Modal>
  );
};
