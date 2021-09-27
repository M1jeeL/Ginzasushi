import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  const [comunas, setComunas] = useState([]);
  const [logged, setLogged] = useState(false);
  const urlUsuarios = process.env.REACT_APP_USUARIOS_API;

  useEffect(() => {
    fetch("https://apis.digital.gob.cl/dpa/regiones/13/comunas")
      .then((response) => response.json())
      .then((comunas) => setComunas(comunas));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
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
        })
        .catch((err) => {
          setLogged(false);
          localStorage.removeItem("token");
        });
    };
    obtenerUsuario(token);
  }, [urlUsuarios]);

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
          return;
        }
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
    usuario,
    logged,
    comunas,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
