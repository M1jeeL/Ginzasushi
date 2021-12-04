import React from "react";
//import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./DashboardEmpleadosModal.scss";

export const DashboardEmpleadosModalAgregar = ({ openEmpleadoModalAgregar, openModalEmpleadoAgregar }) => {
  return (
    <Modal isOpen={openEmpleadoModalAgregar} toggle={openModalEmpleadoAgregar}>
      <ModalHeader>
        <div>Datos Nuevo Empleado</div>
      </ModalHeader>
      <ModalBody>
        <form>
          <div class="form-group">
            <label for="exampleInputName1">Nombre</label>
            <input type="name" class="form-control" id="exampleInputName1" placeholder="Nombre"/>
          </div>
          <div class="form-group">
            <label for="exampleInputCargo1">Cargo</label>
            <input type="cargo" class="form-control" id="exampleInputCargo1" placeholder="Cargo"/>
          </div>
          <div class="form-group">
            <label for="exampleInputUsuario1">Usuario</label>
            <input type="usuario" class="form-control" id="exampleInputUsuario1" placeholder="Usuario"/>
          </div>
          <div class="form-group">
            <label for="exampleInputCelular1">Celular</label>
            <input type="celular" class="form-control" id="exampleInputCelular1" placeholder="Celular"/>
          </div>         <div class="form-group">
            <label for="exampleInputMail1">Mail</label>
            <input type="mail" class="form-control" id="exampleInputMail1" placeholder="Mail"/>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <div>
          <button type="button" class="btn btn-success">Agregar</button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
