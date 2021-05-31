import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FormLogin.css";
import { Button } from "reactstrap";

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
    if (
      !formLogin.email||
      !formLogin.password 
    ){
      alert("Datos incompletos");
      return;
    }
    alert("El formulario se ha enviado correctamente");
  };
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-title">
          <label className="form-text" htmlFor="email">
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formLogin.email}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-title">
          <label className="form-text" htmlFor="password">
            Contrase&ntilde;a
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formLogin.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="olvido-password">
          <span>
            <Link to="/forgot-password">¿Olvidaste tu contrase&ntilde;a?</Link>
          </span>
        </div>
        <Button type="submit" color="warning" size="lg" onClick={handleSubmit}>
          Ingresar
        </Button>
        <div className="crear-cuenta-login">
          <Link to="/register">
            <span>¿No tienes cuenta? ¡Crea la tuya ahora!</span>
          </Link>
        </div>
      </form>
    </>
  );
}
