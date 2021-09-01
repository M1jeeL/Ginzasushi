import React, { useState, useEffect, useContext } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./FormLogin.scss";

const FormLogin = () => {
  const { iniciarSesion, history } = useContext(UserContext);
  useEffect(() => {
    localStorage.getItem("token") && history.push("mi-cuenta");
    return () => {
      return true;
    };
  }, [history]);

  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = async (e) => {
    await setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formLogin.username || !formLogin.password) {
      alert("Datos incompletos");
      return;
    }

    iniciarSesion(formLogin);
  };

  return (
    <Form className="container" id="form-login" onSubmit={handleSubmit}>
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
          <strong>¿Olvidaste tu contrase&ntilde;a?</strong>
        </Link>
        <Button type="submit" color="warning" size="lg" onClick={handleSubmit}>
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
