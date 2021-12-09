import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Recoverypassword.scss"

const Recover = () => {

  return (
    <div className="recoverypassword-containermain">
    <Form className="recoverypassword-formbox">
      <div className="container-recovery">
        <FormGroup className="form-text-recoverypassword">
          <Label className="text-recoverypassword" >
            Ingresar Correo Electronico
          </Label>
          <div className="container-info-recoverypassword">
          <Label className="info-recoverypassword" >
            Puedes restablecer tu contraseña aqui.
          </Label>
          </div>
          <div className="container-input-box-recoverypassword">
            <div className="recoverypassword-input"> 
          <Input
          placeholder="Email Adress"
          />
          </div>
          <i className= "far fa-envelope fa-2x"></i>
          </div>
        </FormGroup>
        <Button type="submit" color="warning" size="lg">
          Enviar
        </Button>
      </div>
    </Form>
    </div>
  );
};

export default Recover;
