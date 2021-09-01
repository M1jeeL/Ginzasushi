import React, { useContext } from "react";
import UserContext from "../../../context/UserContext";

import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const FormDespacho = ({
  formDataCliente,
  setFormDataCliente,
  handleFormDataCliente,
  id
}) => {
  const erCelular = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;
  const { obtenerUsuario } = useContext(UserContext);

  const handleChangeDataCliente = (e) => {
    setFormDataCliente({
      ...formDataCliente,
      [e.target.name]: e.target.value,
    });
  };
  const validarCelular = (e) => {
    if (e.target.type === "tel") {
      if (erCelular.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const datosCliente = {
      nombre: formDataCliente.nombre,
      apellido: formDataCliente.apellido,
      celular: formDataCliente.celular,
    };
    const token = localStorage.getItem("token");
    const url = process.env.REACT_APP_USUARIOS_API;

    fetch(`${url}/usuarios/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datosCliente),
    })
      .then((response) => {
        response.json();
        obtenerUsuario(token);
        handleFormDataCliente();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row form>
        <Col lg={12} md={12} sm={12}>
          <FormGroup>
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={formDataCliente.nombre}
              required
              onChange={(e) => {
                handleChangeDataCliente(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <FormGroup>
            <Label htmlFor="apellido">Apellido</Label>
            <Input
              type="text"
              id="apellido"
              name="apellido"
              value={formDataCliente.apellido}
              required
              onChange={(e) => {
                handleChangeDataCliente(e);
              }}
            />
          </FormGroup>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <FormGroup>
            <Label htmlFor="celular">Celular</Label>
            <Input
              type="tel"
              id="celular"
              name="celular"
              value={formDataCliente.celular}
              placeholder="ej: 987654321"
              required
              onChange={(e) => {
                handleChangeDataCliente(e);
                validarCelular(e);
              }}
            />
          </FormGroup>
        </Col>
        <Button
          className="btn-confirm-save-data-checkout"
          style={styleBtnProduct}
          type="submit"
        >
          Guardar
        </Button>
      </Row>
    </Form>
  );
};

export default FormDespacho;
