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

export const startActivePedido = (id) => {
  return async (dispatch, getState) => {
    const { pedidos } = getState().pedidosAdmin;

    // Obtiene el pedido activo
    const [pedidoActive] = pedidos.filter((item) => item.id === id);

    // Separa el item de despacho para obtener el valor de envio
    const [itemDespacho] = pedidoActive.items.filter(
      (item) => item.description === "Despacho"
    );
    const subTotalDespacho = itemDespacho.unit_price;

    // Separa los items de productos para obtener el subTotal de los productos
    const itemsProductos = pedidoActive.items.filter(
      (item) => item.description !== "Despacho"
    );

    let subTotalProducts = 0;

    itemsProductos.forEach((item) => {
      subTotalProducts += item.unit_price * item.quantity;
    });

    const total = subTotalDespacho + subTotalProducts;

    dispatch(setSubTotalDespacho(subTotalDespacho));
    dispatch(setSubTotalProducts(subTotalProducts));
    dispatch(setTotalPedido(total));
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
