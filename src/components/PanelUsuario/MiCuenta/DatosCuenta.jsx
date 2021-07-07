import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

const DatosCuenta = ({ usuario }) => {
  const { id, nombre, apellido, email } = usuario;

  const inicialState = {
    nombre: "",
    apellido: "",
    email: "",
  };

  const [usuarioState, setUsuarioState] = useState(inicialState);

  const handleChange = (e) => {
    setUsuarioState({
      ...usuarioState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url = `http://3.233.87.147:5000/usuarios/${id}`

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(usuarioState),
    })
      .then((response) => (response.json()))
      .catch((error) => {
        alert(error);
      });
      
    console.log('enviando datos...', usuarioState)
  };

  return (
    <Form
      className="container datos-mi-cuenta"
      id="form-editar-datos-cuenta"
      onSubmit={handleSubmit}
    >
      <h4>Editar Perfil</h4>
      <Row form>
        <Col lg={12} md={12} sm={12}>
          <FormGroup className="form-title" row>
            <Label className="form-text" htmlFor="nombre">
              Nombre
            </Label>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={usuarioState.nombre}
              placeholder={`${nombre}`}
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="apellido">
              Apellido
            </Label>
            <Input
              type="text"
              id="apellido"
              name="apellido"
              value={usuarioState.apellido}
              placeholder={`${apellido}`}
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col lg={12} md={12} sm={12}>
          <FormGroup className="form-title">
            <Label className="form-text" htmlFor="email">
              Correo
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={usuarioState.email}
              placeholder={`${email}`}
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button type="submit" color="warning" size="lg" onClick={handleSubmit}>
        Guardar datos
      </Button>
    </Form>
  );
};

export default DatosCuenta;
