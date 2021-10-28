import Swal from "sweetalert2";
import { loadPedidos } from "../helpers/loadPedidos";
import { types } from "../types/types";

const urlPedidos = process.env.REACT_APP_PEDIDOS_API;

export const startLoadingPedidos = () => {
  return async (dispatch) => {
    const pedidos = await loadPedidos();
    dispatch(setPedidos(pedidos));
  };
};

export const aceptarPedido = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    fetch(`${urlPedidos}/pedidos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        estado: "Aceptado",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("No esta autorizado para realizar esta acción");
        }
      })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue aceptado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });
        dispatch(refreshPedido(data.id, data));
      });
  };
};

export const rechazarPedido = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    fetch(`${urlPedidos}/pedidos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        estado: "Rechazado",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("No esta autorizado para realizar esta acción");
        }
      })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue rechazado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });
        dispatch(refreshPedido(data.id, data));
      });
  };
};

export const despacharPedido = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    fetch(`${urlPedidos}/pedidos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        estado: "En camino",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("No esta autorizado para realizar esta acción");
        }
      })
      .then((data) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue despachado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });
        dispatch(refreshPedido(data.id, data));
      });
  };
};

export const completarPedido = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    fetch(`${urlPedidos}/pedidos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        estado: "Completado",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("No esta autorizado para realizar esta acción");
        }
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue completado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });
        dispatch(refreshPedido(data.id, data));
      });
  };
};

export const refreshPedido = (id, pedido) => ({
  type: types.pedidosUpdated,
  payload: {
    id,
    pedido: {
      ...pedido,
    },
  },
});

export const activePedido = (id, pedido) => ({
  type: types.pedidosActive,
  payload: {
    id,
    ...pedido,
  },
});

export const setPedidos = (pedidos) => ({
  type: types.pedidosLoad,
  payload: pedidos,
});
