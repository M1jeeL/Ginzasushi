import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Button,
  Form,
} from "reactstrap";
import { startRegisterEmployee } from "../../actions/employees";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import "./DashboardEmpleadosModal.scss";

const initialFormState = {
  nombre: "",
  apellido: "",
  email: "",
  celular: "",
  cargo: "",
  username: "",
  password: "",
  comuna: "",
  calle: "",
  depto: "",
  numeracion: "",
  roles: ["admin", "moderator"],
};

export const DashboardEmpleadosModalAgregar = ({
  openEmpleadoModalAgregar,
  openModalEmpleadoAgregar,
}) => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, resetForm] = useForm(initialFormState);

  const { nombre, apellido, email, cargo, celular, username, password } =
    formValues;

  const btnCloseForm = {
    outline: "none",
    backgroundColor: "#ffba00",
    border: "none",
    boxShadow: "none",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startRegisterEmployee(formValues));
    openModalEmpleadoAgregar();
    resetForm();
  };
  return (
    <Modal isOpen={openEmpleadoModalAgregar} toggle={openModalEmpleadoAgregar}>
      <ModalHeader className="header-crud-form">
        <div className="titulo-form-crud ">Registrar nuevo empleado</div>
        <div className="btn-cerrar-form-modal">
          <Button
            style={btnCloseForm}
            color="secondary"
            onClick={openModalEmpleadoAgregar}
          >
            <i className="far fa-times-circle fa-3x"></i>
          </Button>
        </div>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit} className="form-modal-product">
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />

          <Label htmlFor="apellido">Apellido</Label>
          <Input
            type="text"
            name="apellido"
            value={apellido}
            onChange={handleInputChange}
          />

          <Label htmlFor="username">Nombre de usuario</Label>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />

          <Label htmlFor="password">Contrase&ntilde;a</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />

          <Label htmlFor="cargo">Cargo</Label>
          <Input
            type="text"
            name="cargo"
            value={cargo}
            onChange={handleInputChange}
          />

          <Label htmlFor="celular">Celular</Label>
          <Input
            type="text"
            name="celular"
            value={celular}
            onChange={handleInputChange}
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          type="submit"
          value="Agregar"
          onClick={handleSubmit}
          className="dashboard-modal-btn"
        >
          Agregar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
