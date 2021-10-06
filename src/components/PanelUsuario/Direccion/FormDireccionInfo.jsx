import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import { startUpdateUser } from "../../../actions/auth";
import { useForm } from "../../../hooks/useForm";

const DireccionInfo = ({ usuario }) => {
  const dispatch = useDispatch();
  const { comunas } = useSelector((state) => state.ui);
  const { comuna, calle, numeracion, depto } = usuario;

  const [formValues, handleInputChange] = useForm({
    comuna,
    calle,
    numeracion,
    depto,
  });
  const [editDireccionDespacho, seteditDireccionDespacho] = useState(true);

  const handleEditDireccionDespacho = () => {
    seteditDireccionDespacho(!editDireccionDespacho);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startUpdateUser(formValues));
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
                  value={formValues.comuna}
                  required
                  disabled={editDireccionDespacho}
                  onChange={handleInputChange}
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
                  value={formValues.calle}
                  autoComplete="off"
                  required
                  disabled={editDireccionDespacho}
                  onChange={handleInputChange}
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
                  value={formValues.numeracion}
                  autoComplete="off"
                  required
                  disabled={editDireccionDespacho}
                  onChange={handleInputChange}
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
                  autoComplete="off"
                  name="depto"
                  value={formValues.depto}
                  disabled={editDireccionDespacho}
                  onChange={handleInputChange}
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
