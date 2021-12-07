import Swal from "sweetalert2";
import { loadPedidos } from "../helpers/loadPedidos";
import { types } from "../types/types";

const url = process.env.REACT_APP_API;

export const startLoadingPedidos = () => {
  return async (dispatch) => {
    const pedidos = await loadPedidos();
    dispatch(setPedidos(pedidos));
  };
};

export const aceptarPedido = (uuid) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${url}/orders/${uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          estado: "Aceptado",
        }),
      });

      if (response.ok) {
        const data = await response.json();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue aceptado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });

        if (data.modifiedCount === 1) {
          const res = await fetch(`${url}/orders/${uuid}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          const pedidoUpdated = await res.json();

          dispatch(refreshPedido(pedidoUpdated._id, pedidoUpdated));
        }
      } else {
        throw new Error("No esta autorizado para realizar esta acción");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const rechazarPedido = (uuid) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${url}/orders/${uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          estado: "Rechazado",
        }),
      });

      if (response.ok) {
        const data = await response.json();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue cancelado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });

        if (data.modifiedCount === 1) {
          const res = await fetch(`${url}/orders/${uuid}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          const pedidoUpdated = await res.json();
          dispatch(refreshPedido(pedidoUpdated._id, pedidoUpdated));
        }
      } else {
        throw new Error("No esta autorizado para realizar esta acción");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const despacharPedido = (uuid) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${url}/orders/${uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          estado: "En camino",
        }),
      });

      if (response.ok) {
        const data = await response.json();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue despachado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });

        if (data.modifiedCount === 1) {
          const res = await fetch(`${url}/orders/${uuid}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          const pedidoUpdated = await res.json();
          dispatch(refreshPedido(pedidoUpdated._id, pedidoUpdated));
        }
      } else {
        throw new Error("No esta autorizado para realizar esta acción");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const completarPedido = (uuid) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${url}/orders/${uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          estado: "Completado",
        }),
      });

      if (response.ok) {
        const data = await response.json();

        Swal.fire({
          position: "center",
          icon: "success",
          title: "El pedido fue completado con éxito!",
          showConfirmButton: false,
          timer: 2000,
        });

        if (data.modifiedCount === 1) {
          const res = await fetch(`${url}/orders/${uuid}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          const pedidoUpdated = await res.json();
          dispatch(refreshPedido(pedidoUpdated._id, pedidoUpdated));
        }
      } else {
        throw new Error("No esta autorizado para realizar esta acción");
      }
    } catch (error) {
      console.log(error);
    }
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

export const startActivePedido = (id) => {
  return async (dispatch, getState) => {
    const { pedidos } = getState().pedidosAdmin;

    // Obtiene el pedido activo
    const [pedidoActive] = pedidos.filter((item) => item._id === id);

    dispatch(setSubTotalDespacho(pedidoActive.precio_despacho));
    dispatch(setSubTotalProducts(pedidoActive.precio_subtotal));
    dispatch(setTotalPedido(pedidoActive.precio_total));
    dispatch(activePedido(pedidoActive));
  };
};

export const activePedido = (pedido) => ({
  type: types.pedidosActive,
  payload: pedido,
});

export const setSubTotalDespacho = (subTotalDespacho) => ({
  type: types.pedidosSetSubTotalDespacho,
  payload: subTotalDespacho,
});
export const setTotalPedido = (total) => ({
  type: types.pedidosSetTotalPedido,
  payload: total,
});

export const setSubTotalProducts = (subTotalProducts) => ({
  type: types.pedidosSetSubTotalProducts,
  payload: subTotalProducts,
});

export const setPedidos = (pedidos) => ({
  type: types.pedidosLoad,
  payload: pedidos,
});
