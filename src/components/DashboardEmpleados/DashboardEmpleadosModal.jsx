import React from "react";
import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import "./DashboardEmpleadosModal.scss";

export const DashboardEmpleadosModal = ({
  openEmpleadoModal,
  openModalEmpleado,
}) => {
  const { active } = useSelector((state) => state.employees);
  
  const btnCloseForm = {
    outline: "none",
    backgroundColor: "#ffba00",
    border: "none",
    boxShadow: "none",
  };

  return (
    <Modal isOpen={openEmpleadoModal} toggle={openModalEmpleado}>
      <ModalHeader className="header-crud-form">
        <div className="titulo-form-crud ">Datos Empleado</div>
        <div className="btn-cerrar-form-modal">
          <Button
            style={btnCloseForm}
            color="secondary"
            onClick={openModalEmpleado}
          >
            <i className="far fa-times-circle fa-3x"></i>
          </Button>
        </div>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="modal-body">
            <h5 htmlFor="exampleInputName1">Nombre: {active?.nombre}</h5>
          </div>
          <div className="modal-body">
            <h5 htmlFor="exampleInputName1">Apellido: {active?.apellido}</h5>
          </div>
          <div className="modal-body">
            <h5 htmlFor="exampleInputCargo1">Cargo: {active?.cargo}</h5>
          </div>
          <div className="modal-body">
            <h5 htmlFor="exampleInputUsuario1">Usuario: {active?.username}</h5>
          </div>
          <div className="modal-body">
            <h5 htmlFor="exampleInputCelular1">Celular: {active?.celular}</h5>
          </div>
          <div className="modal-body">
            <h5 htmlFor="exampleInputMail1">Mail: {active?.email}</h5>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};
