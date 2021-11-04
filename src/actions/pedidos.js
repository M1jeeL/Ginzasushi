import Swal from "sweetalert2";
import { loadPedidos } from "../helpers/loadPedidos";
import { types } from "../types/types";
import { startAddToCart } from "./products";

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

export const startRepeatOrder = (pedido) => {
  return (dispatch, getState) => {
    let noHayStock = false;
    const { products } = getState().products;
    pedido.items.forEach((element) => {
      // eslint-disable-next-line eqeqeq
      const [produ] = products.filter((product) => product.id == element.id);

      if (produ?.activo === false) {
        noHayStock = true;
      }
    });
    if (noHayStock === true) {
      Swal.fire({
        title:
          "Lamentablemente uno de los productos no se encuentra disponible",
        text: "Vuelve a realizar un nuevo pedido",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "¿Seguro que deseas realizar nuevamente éste pedido?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Se han agregado los productos al carrito");
          //   console.log(itemsComprados);
          //   console.log(pedido);
          pedido.items.forEach((item) => {
            if (item.id !== undefined) {
              const [productSelected] = products.filter(
                (filtrado) => filtrado.id === parseInt(item.id)
              );
              console.log(productSelected);
              //   console.log(item);
              dispatch(
                startAddToCart(
                  productSelected,
                  item.quantity,
                  item.envoltura,
                  item.category_id
                )
              );
            }
          });
        }
      });
    }
  };
};
