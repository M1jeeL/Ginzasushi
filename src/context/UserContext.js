import { createContext } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const history = useHistory();
  const urlUsuarios = "http://3.233.87.147:5000";


  const iniciarSesion = async (datos) => {
    await fetch(`${urlUsuarios}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
      })
      .then((token) => {
        localStorage.setItem("token", token);
        history.push("/mis-pedidos");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: "Usuario y/o contraseña incorrecta",
          showConfirmButton: false,
          timer: "1500",
        });
      });
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
      .catch((err) => alert(err));
  };


  const data = {
    registrarUsuario,
    iniciarSesion,
    history,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export { UserProvider };
export default UserContext;
