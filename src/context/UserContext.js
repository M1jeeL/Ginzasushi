import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const history = useHistory();
  const [usuario, setUsuario] = useState({});
  const [logged, setLogged] = useState(false);
  const urlUsuarios = "http://3.233.87.147:5000";

  useEffect(() => {
    const token = localStorage.getItem("token");

    obtenerUsuario(token);
  }, []);

  const obtenerUsuario = async (token) => {
    await fetch(`${urlUsuarios}/usuario_actual`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsuario(data);
        setLogged(true);
      });
  };

  const iniciarSesion = async (datos) => {
    try {
      const response = await fetch(`${urlUsuarios}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
      const token = await response.text();
      localStorage.setItem("token", token);
      await obtenerUsuario(token);
      history.push("/mis-pedidos");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Usuario y/o contraseña incorrecta",
        showConfirmButton: false,
        timer: "1500",
      });
    }
  };

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    setUsuario({});
    setLogged(false);
    history.push("/");
  };

  const registrarUsuario = async (nuevoUsuario) => {
    await fetch(`${urlUsuarios}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            text: "Su cuenta fue creada exitosamente!",
            showConfirmButton: false,
            timer: "1500",
          });
          history.push("/login");
          return;
        }
        throw new Error(
          "El nombre de usuario y/o el email ingresado ya existe"
        );
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "El nombre de usuario y/o el email ingresado ya existe",
        })
      );
  };

  const data = {
    registrarUsuario,
    iniciarSesion,
    cerrarSesion,
    obtenerUsuario,
    history,
    usuario,
    logged,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
