import React from "react";
//import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./DashboardEmpleadosModal.scss";
import data from '../data.json'

export const DashboardEmpleadosModal = ({ openEmpleadoModal, openModalEmpleado }) => {
  //const { active } = useSelector((state) => state.empleadosAdmin);
  const active = data.empleados[0]
  return (
    <Modal isOpen={openEmpleadoModal} toggle={openModalEmpleado}>
      <ModalHeader>
        <div>Datos</div>
      </ModalHeader>
      <ModalBody>
        <form>
          <div class="form-group">
            <label for="exampleInputName1">Nombre</label>
            <input type="name" class="form-control" id="exampleInputName1" placeholder={active?.nombre}/>
          </div>
          <div class="form-group">
            <label for="exampleInputCargo1">Cargo</label>
            <input type="cargo" class="form-control" id="exampleInputCargo1" placeholder={active?.cargo}/>
          </div>
          <div class="form-group">
            <label for="exampleInputUsuario1">Usuario</label>
            <input type="usuario" class="form-control" id="exampleInputUsuario1" placeholder={active?.usuario}/>
          </div>
          <div class="form-group">
            <label for="exampleInputCelular1">Celular</label>
            <input type="celular" class="form-control" id="exampleInputCelular1" placeholder={active?.celular}/>
          </div>         <div class="form-group">
            <label for="exampleInputMail1">Mail</label>
            <input type="mail" class="form-control" id="exampleInputMail1" placeholder={active?.mail}/>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <div>
          <button type="button" class="btn btn-info">Editar</button>
        </div>
        <div>
          <button type="button" class="btn btn-danger">Eliminar</button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
