import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { startUpdateUser } from "../../../actions/auth";

const DatosCuenta = ({ usuario }) => {
  const dispatch = useDispatch();
  const { nombre, apellido, email, celular } = usuario;

  const [formValues, handleInputChange] = useForm({
    nombre,
    apellido,
    celular,
  });

  const [editDatosCuenta, setEditDatosCuenta] = useState(true);

  const handleEditDatosCuenta = () => {
    setEditDatosCuenta(!editDatosCuenta);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startUpdateUser(formValues));
  };

  return (
    <>
      <div className="datos-mi-cuenta">
        <div className="title-panel-user">
          <h4>Mi Perfil</h4>
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
                  value={formValues.nombre}
                  autoComplete="off"
                  required
                  disabled={editDatosCuenta}
                  onChange={handleInputChange}
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
                  value={formValues.apellido}
                  autoComplete="off"
                  required
                  disabled={editDatosCuenta}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="celular">
                  Celular
                </Label>
                <Input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formValues.celular}
                  autoComplete="off"
                  required
                  disabled={editDatosCuenta}
                  onChange={handleInputChange}
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
