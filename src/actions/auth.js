import Swal from "sweetalert2";
import { types } from "../types/types";
import { startLoadingPedidos } from "./pedidos";
import { startLoadingPedidosUser } from "./pedidosUser";
import { finishLoading, startLoading } from "./ui";

const urlUsuarios = process.env.REACT_APP_USUARIOS_API;

export const startLogin = (token) => {
  return async (dispatch) => {
    dispatch(startLoading());
    await fetch(`${urlUsuarios}/usuario_actual`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(login(data));
        dispatch(finishLoading());
        if (data.isAdmin) {
          dispatch(startLoadingPedidos());
          dispatch(startLoadingPedidosUser());
        } else {
          dispatch(startLoadingPedidosUser());
        }
      })
      .catch((err) => {
        localStorage.removeItem("token");
        dispatch(finishLoading());
      });
  };
};

export const startGetToken = (datos) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${urlUsuarios}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
      if (res.ok) {
        const token = await res.text();
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
    const { username, password } = newUser;

    await fetch(`${urlUsuarios}/register`, {
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
          dispatch(startGetToken({ username, password }));
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
};

export const startUpdateUser = (dataToChange) => {
  return async (dispatch, getState) => {
    const { user } = getState().auth;

    const token = localStorage.getItem("token");

    const url = `${urlUsuarios}/usuarios/${user.id}`;

    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToChange),
    });
    const data = await res.json();
    dispatch(login(data));
  };
};

export const login = (user) => ({
  type: types.login,
  payload: user,
});

export const logout = () => ({
  type: types.logout,
});
