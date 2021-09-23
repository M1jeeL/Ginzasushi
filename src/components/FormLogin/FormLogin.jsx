import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useForm } from "../../hooks/useForm";
import UserContext from "../../context/UserContext";
import "./FormLogin.scss";

const FormLogin = () => {
  const { iniciarSesion } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    localStorage.getItem("token") && history.push("mi-cuenta");
    return () => {
      return true;
    };
  }, [history]);

  const [formLogin, handleInputChange] = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formLogin.username || !formLogin.password) {
      alert("Datos incompletos");
      return;
    }

    await iniciarSesion(formLogin);
    history.push('/mi-cuenta')
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
