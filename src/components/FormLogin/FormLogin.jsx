import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "../../hooks/useForm";
import "./FormLogin.scss";
import { useDispatch } from "react-redux";
import { startGetToken } from "../../actions/auth";

const FormLogin = () => {
  const dispatch = useDispatch();

  const [formLogin, handleInputChange] = useForm({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formLogin.username || !formLogin.password) {
      alert("Datos incompletos");
      return;
    }

    dispatch(startGetToken(formLogin));
  };

  return (
    <Form className="container" id="form-login" onSubmit={handleLogin}>
      <div className="login-form-container">
        <FormGroup className="form-text-login">
          <Label className="form-text" htmlFor="username">
            Nombre de usuario
          </Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formLogin.username}
            required
            autoComplete="off"
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </FormGroup>
        <Link to="/recovery-password" className="olvido-password">
          <strong>¿Olvidaste tu contrase&ntilde;a?</strong>
        </Link>
        <Button type="submit" color="warning" size="lg">
          Ingresar
        </Button>
        <Link to="/register" className="crear-cuenta-login">
          ¿No tienes cuenta? <strong>¡Crea la tuya ahora!</strong>
        </Link>
      </div>
    </Form>
  );
};

export default FormLogin;
