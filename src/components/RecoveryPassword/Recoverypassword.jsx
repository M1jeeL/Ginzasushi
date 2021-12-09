import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Recoverypassword.scss";
import Imgcab from "../Imagen cabecera/Imgcab";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startRecoveryPassword } from "../../actions/auth";

const RecoveryPassword = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    email: "",
  });

  const { email } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(startRecoveryPassword(email));
  };
  return (
    <>
      <Imgcab nombrehead="Recuperar contraseña" />
      <div className="recoverypassword-containermain">
        <Form className="recoverypassword-formbox" onSubmit={handleSubmit}>
          <div className="container-recovery">
            <FormGroup className="form-text-recoverypassword">
              <Label className="text-recoverypassword">
                Ingresar Correo Electronico
              </Label>
              <div className="container-info-recoverypassword">
                <Label className="info-recoverypassword">
                  Puedes restablecer tu contraseña aqui.
                </Label>
              </div>
              <div className="container-input-box-recoverypassword">
                <div className="recoverypassword-input">
                  <Input
                    value={email}
                    name="email"
                    type="email"
                    onChange={handleInputChange}
                  />
                </div>
                <i className="far fa-envelope fa-2x"></i>
              </div>
            </FormGroup>
            <Button type="submit" color="warning" size="lg">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default RecoveryPassword;
