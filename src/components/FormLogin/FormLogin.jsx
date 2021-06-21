import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FormLogin.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:5000/usuarios";
const cookies = new Cookies();

export default function FormLogin() {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (cookies.get("email")) {
      window.location.href = "./mi-cuenta";
    }
  }, []);

  const handleChange = async (e) => {
    await setFormLogin({
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
  };

  const iniciarSesion = async () => {
    await axios
      .get(baseUrl, {
        params: { email: formLogin.email, password: formLogin.password },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          let respuesta = response[0];

          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("nombre", respuesta.nombre, { path: "/" });
          cookies.set("apellido", respuesta.apellido, { path: "/" });
          cookies.set("email", respuesta.email, { path: "/" });

          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido}`);
          window.location.href = "./mi-cuenta";
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
            onClick={iniciarSesion}
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
