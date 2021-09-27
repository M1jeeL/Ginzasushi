import React, { useState } from "react";
import { useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import UserContext from "../../../context/UserContext";

const DireccionInfo = ({ usuario }) => {
  const { id, comuna, calle, numeracion, depto } = usuario;
  const { obtenerUsuario, comunas } = useContext(UserContext);

  const inicialState = {
    comuna,
    calle,
    numeracion,
    depto,
  };

  const [usuarioState, setUsuarioState] = useState(inicialState);
  const [editDireccionDespacho, seteditDireccionDespacho] = useState(true);

  const handleEditDireccionDespacho = () => {
    seteditDireccionDespacho(!editDireccionDespacho);
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
      <div className="datos-direccion">
        <div className="title-panel-user">
          <h4>Direcci&oacute;n de despacho</h4>
          <div
            className="btn-editar-user"
            onClick={handleEditDireccionDespacho}
          >
            Editar
          </div>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row form>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="comuna">
                  Comuna
                </Label>
                <Input
                  name="comuna"
                  id="comuna"
                  type="select"
                  value={usuarioState.comuna}
                  required
                  disabled={editDireccionDespacho}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Seleccione su comuna
                  </option>
                  {comunas.map((comuna) => (
                    <option key={comuna.codigo} value={comuna.nombre}>
                      {comuna.nombre}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="calle">
                  Calle
                </Label>
                <Input
                  type="text"
                  id="calle"
                  name="calle"
                  value={usuarioState.calle}
                  required
                  disabled={editDireccionDespacho}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="numeracion">
                  N&uacute;mero
                </Label>
                <Input
                  type="text"
                  id="numeracion"
                  name="numeracion"
                  value={usuarioState.numeracion}
                  required
                  disabled={editDireccionDespacho}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="depto">
                  Depto (opcional)
                </Label>
                <Input
                  type="text"
                  id="depto"
                  name="depto"
                  value={usuarioState.depto}
                  disabled={editDireccionDespacho}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          {editDireccionDespacho ? null : (
            <>
              <div className="btn-guardar-datos">
                <Button
                  type="submit"
                  color="warning"
                  size="lg"
                  onClick={(e) => {
                    handleSubmit(e);
                    handleEditDireccionDespacho();
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

export default DireccionInfo;
