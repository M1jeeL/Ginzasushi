import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./Changepassword.scss"


const ChangePasswordForm = () => {

  return (
    <div className="changepassword-container-main">
    <Form className="changepassword-form">
      <div className="changepassword-form-container">
        <FormGroup className="form-text-changepassword">
          <Label className="changepassword-text">
            Nueva Contraseña
          </Label>
          <Input
          />
          <Label className="changepassword-text">
            Confirmar Contraseña
          </Label>
          <Input
          />
        </FormGroup>
        <Button type="submit" color="warning" size="lg">
          Enviar
        </Button>
        
      </div>
    </Form>
    </div>
  );
};
export default ChangePasswordForm ;
