import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
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
