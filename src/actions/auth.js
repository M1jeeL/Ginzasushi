import Swal from "sweetalert2";
import { types } from "../types/types";
import { startLoadingEmployees } from "./employees";
import { startLoadingPedidos } from "./pedidos";
import { startLoadingPedidosUser } from "./pedidosUser";
import { finishLoading, startLoading } from "./ui";

const url = process.env.REACT_APP_API;

export const startLogin = (token) => {
  return async (dispatch) => {
    try {
      dispatch(startLoading());

      const res = await fetch(`${url}/users/usuario_actual`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const user = await res.json();

        let isAdmin = false;

        user.roles.forEach((rol) => {
          if (rol.name === "admin") {
            isAdmin = true;
          }
        });

        if (isAdmin) {
          dispatch(startLoadingPedidos());
          dispatch(startLoadingPedidosUser());
          dispatch(startLoadingEmployees());
        } else {
          dispatch(startLoadingPedidosUser());
        }

        if (res.message) {
          dispatch(logout());
        } else {
          dispatch(login(user));
        }
        dispatch(finishLoading());
      } else {
        dispatch(logout());
        dispatch(finishLoading());
      }
    } catch (error) {
      console.log(error);
      dispatch(logout());
      dispatch(finishLoading());
    }
  };
};

export const startGetToken = (datos) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${url}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem("token", token);
        dispatch(startLogin(token));
      } else {
        Swal.fire({
          icon: "error",
          text: "Usuario y/o contraseña incorrecta",
          showConfirmButton: false,
          timer: "1500",
        });
        logout();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: "Usuario y/o contraseña incorrecta",
        showConfirmButton: false,
        timer: "1500",
      });
      logout();
    }
  };
};

export const startRegister = (newUser) => {
  return async (dispatch) => {
    await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            icon: "success",
            text: "Su cuenta fue creada exitosamente!",
            showConfirmButton: false,
            timer: "1500",
          });
          return response.json();
        }
      })
      .then((token) => {
        localStorage.setItem("token", token);
        dispatch(startLogin(token));
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Ups...",
          text: "El nombre de usuario y/o el email ingresado ya existe",
        })
      );
  };
};

export const startUpdateUser = (dataToChange) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth;

    const token = localStorage.getItem("token");

    const res = await fetch(`${url}/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToChange),
    });

    if (res.ok) {
      const data = await res.json();

      if (data.modifiedCount === 1) {
        dispatch(startLogin(token));
      }
    }
  };
};

export const startUpdatePassword = (dataToChange) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth;

    const token = localStorage.getItem("token");

    const res = await fetch(`${url}/users/update_password/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToChange),
    });

    if (res.ok) {
      dispatch(startLogin(token));
      Swal.fire({
        icon: "success",
        text: "Su contraseña fue cambiada exitosamente!",
        showConfirmButton: false,
        timer: "1500",
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "La contraseña actual es incorrecta",
        showConfirmButton: false,
        timer: "1500",
      });
    }
  };
};

export const login = (user) => ({
  type: types.login,
  payload: user,
});

export const logout = () => ({
  type: types.logout,
});
