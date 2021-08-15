import React, { useContext, useState } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import UserContext from "../../../context/UserContext";

const DatosCuenta = ({ usuario }) => {
  const { id, nombre, apellido, email, celular } = usuario;
  const { obtenerUsuario } = useContext(UserContext);

  const inicialState = {
    nombre,
    apellido,
  };
  const [usuarioState, setUsuarioState] = useState(inicialState);

  const [editDatosCuenta, setEditDatosCuenta] = useState(true);

  const handleEditDatosCuenta = () => {
    setEditDatosCuenta(!editDatosCuenta);
  };

  const handleChange = (e) => {
    setUsuarioState({
      ...usuarioState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url = `http://3.233.87.147:5000/usuarios/${id}`;

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(usuarioState),
    })
      .then((response) => {
        response.json();
        obtenerUsuario(token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="datos-mi-cuenta">
        <div className="title-panel-user">
          <h4>Mi Perfil</h4>
          <div className="btn-editar-user" onClick={handleEditDatosCuenta}>
            Editar
          </div>
        </div>
        <Form id="form-editar-datos-cuenta" onSubmit={handleSubmit}>
          <Row form>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="nombre">
                  Nombre
                </Label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={usuarioState.nombre}
                  required
                  disabled={editDatosCuenta}
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
                  required
                  disabled={editDatosCuenta}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="celular">
                  Correo
                </Label>
                <Input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={celular}
                  required
                  disabled={editDatosCuenta}
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
                  value={email}
                  disabled
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          {editDatosCuenta ? null : (
            <>
              <div className="btn-guardar-datos">
                <Button
                  type="submit"
                  color="warning"
                  size="lg"
                  onClick={(e) => {
                    handleSubmit(e);
                    handleEditDatosCuenta();
                  }}
                >
                  Guardar datos
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </>
  );
};

export default DatosCuenta;
