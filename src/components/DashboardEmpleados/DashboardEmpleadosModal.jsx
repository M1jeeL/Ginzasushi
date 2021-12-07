import React from "react";
import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./DashboardEmpleadosModal.scss";

export const DashboardEmpleadosModal = ({
  openEmpleadoModal,
  openModalEmpleado,
}) => {
  const { active } = useSelector((state) => state.employees);

  


  return (
    <Modal isOpen={openEmpleadoModal} toggle={openModalEmpleado}>
      <ModalHeader>
        <div>Datos</div>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Nombre</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputName1"
              placeholder={active?.nombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCargo1">Cargo</label>
            <input
              type="cargo"
              className="form-control"
              id="exampleInputCargo1"
              placeholder={active?.cargo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputUsuario1">Usuario</label>
            <input
              type="usuario"
              className="form-control"
              id="exampleInputUsuario1"
              placeholder={active?.usuario}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputCelular1">Celular</label>
            <input
              type="celular"
              className="form-control"
              id="exampleInputCelular1"
              placeholder={active?.celular}
            />
          </div>{" "}
          <div className="form-group">
            <label htmlFor="exampleInputMail1">Mail</label>
            <input
              type="mail"
              className="form-control"
              id="exampleInputMail1"
              placeholder={active?.mail}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <div>
          <button type="button" className="btn btn-info">
            Editar
          </button>
        </div>
        <div>
          <button type="button" className="btn btn-danger">
            Eliminar
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
