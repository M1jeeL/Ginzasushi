import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormLogin.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function FormLogin() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formLogin.email || !formLogin.password) {
      alert("Datos incompletos");
      return;
    }
    alert("El formulario se ha enviado correctamente");
  };
  return (
    <>
      <Form className="container" onSubmit={handleSubmit}>
        <div className="login-form-container">
          <FormGroup className="form-text-login">
            <Label className="form-text" htmlFor="email">
              Correo
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formLogin.email}
              required
              valid={false}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="form-text-login">
            <Label className="form-text" htmlFor="password">
              Contrase&ntilde;a
            </Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formLogin.password}
              required
              onChange={handleChange}
            />
          </FormGroup>
          <Link to="/forgot-password" className="olvido-password">
            ¿Olvidaste tu contrase&ntilde;a?
          </Link>
          <Button
            type="submit"
            color="warning"
            size="lg"
            onClick={handleSubmit}
          >
            Ingresar
          </Button>
          <Link to="/register" className="crear-cuenta-login">
            ¿No tienes cuenta? ¡Crea la tuya ahora!
          </Link>
        </div>
      </Form>
    </>
  );
}
