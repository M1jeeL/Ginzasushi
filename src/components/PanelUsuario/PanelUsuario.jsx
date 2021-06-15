import React, { useEffect } from "react";
import { Button } from "reactstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const PanelUsuario = () => {
  useEffect(() => {
    if (!cookies.get("email")) {
      window.location.href = "./login";
    }
  }, []);

  const cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("email", { path: "/" });

    window.location.href = "./login";
  };

  console.log("id: " + cookies.get("id"));
  console.log("nombre: " + cookies.get("nombre"));
  console.log("apellido: " + cookies.get("apellido"));
  console.log("email: " + cookies.get("email"));

  return (
    <div>
      <Button onClick={cerrarSesion}>Cerrar sesi&oacute;n</Button>
    </div>
  );
};

export default PanelUsuario;
