import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useForm } from "../../../hooks/useForm";

export const CambiarPassword = () => {
  const erPassword = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const [formValues, handleInputChange] = useForm({
    passwordActual: "",
    newPassword: "",
    repeatNewPassword: "",
  });
  const [editDatosPassword, setEditDatosPassword] = useState(true);

  const handleEditPassword = () => {
    setEditDatosPassword(!editDatosPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(startUpdateUser(formValues));
  };

  const validarPassword = (e) => {
    if (e.target.type === "password") {
      if (erPassword.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };

  const validarPasswordIguales = (e) => {
    if (e.target.type === "password") {
      if (
        erPassword.test(e.target.value) &&
        e.target.value === formValues.newPassword
      ) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  };

  return (
    <>
      <div className="datos-mi-cuenta-password">
        <div className="title-panel-user-password">
          <h4>Editar contraseña</h4>
          <div
            className="btn-editar-user-password"
            onClick={handleEditPassword}
          >
            Editar
          </div>
        </div>
        <Form id="form-editar-datos-cuenta-password" onSubmit={handleSubmit}>
          <Row form>
            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="passwordActual">
                  Contrase&ntilde;a Actual
                </Label>
                <Input
                  type="password"
                  id="passwordActual"
                  name="passwordActual"
                  value={formValues.passwordActual}
                  autoComplete="off"
                  required
                  disabled={editDatosPassword}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>

            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="newPassword">
                  Nueva Contrase&ntilde;a
                </Label>
                <Input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formValues.newPassword}
                  autoComplete="off"
                  required
                  disabled={editDatosPassword}
                  onChange={(e) => {
                    handleInputChange(e);
                    validarPassword(e);
                  }}
                />
                <FormFeedback tooltip>
                  La contrase&ntilde;a debe tener m&iacute;nimo 6
                  c&aacute;racteres y m&aacute;ximo 16, adem&aacute;s, debe
                  poseer un n&uacute;mero.
                </FormFeedback>
              </FormGroup>
            </Col>

            <Col lg={12} md={12} sm={12}>
              <FormGroup className="form-title">
                <Label className="form-text" htmlFor="repeatNewPassword">
                  Repetir Nueva Contrase&ntilde;a
                </Label>
                <Input
                  type="password"
                  id="repeatNewPassword"
                  name="repeatNewPassword"
                  value={formValues.repeatNewPassword}
                  autoComplete="off"
                  required
                  disabled={editDatosPassword}
                  onChange={(e) => {
                    handleInputChange(e);
                    validarPasswordIguales(e);
                  }}
                />
                <FormFeedback tooltip>
                  Las contrase&ntilde;as deben ser iguales
                </FormFeedback>
              </FormGroup>
            </Col>
          </Row>
          {editDatosPassword ? null : (
            <>
              <div className="btn-guardar-datos">
                <Button
                  type="submit"
                  color="warning"
                  size="lg"
                  onClick={(e) => {
                    handleSubmit(e);
                    handleEditPassword();
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
