import Swal from "sweetalert2";
import { loadPedidosUser } from "../helpers/loadPedidosUser";
import { types } from "../types/types";
import { startAddToCart } from "./products";

export const startLoadingPedidosUser = () => {
  return async (dispatch) => {
    const pedidos = await loadPedidosUser();
    dispatch(setPedidos(pedidos));
  };
};

export const activePedido = (pedido) => ({
  type: types.pedidosUserActive,
  payload: pedido,
});

export const setSubTotalDespacho = (subTotalDespacho) => ({
  type: types.pedidosUserSetSubTotalDespacho,
  payload: subTotalDespacho,
});
export const setTotalPedido = (total) => ({
  type: types.pedidosUserSetTotalPedido,
  payload: total,
});

export const setSubTotalProducts = (subTotalProducts) => ({
  type: types.pedidosUserSetSubTotalProducts,
  payload: subTotalProducts,
});

export const setPedidos = (pedidos) => ({
  type: types.pedidosUserLoad,
  payload: pedidos,
});

export const startRepeatOrder = (pedido) => {
  return (dispatch, getState) => {
    let noHayStock = false;
    const { products } = getState().products;
    const titleProduct = []; //Almacena los nombres de los productos no disponibles
    let mensaje = "";

    pedido.items.forEach((element) => {
      // eslint-disable-next-line eqeqeq
      const [produ] = products.filter((product) => product._id == element.id);

      if (produ?.activo === false) {
        noHayStock = true;
        titleProduct.push(element.title);
      }
    });

    if (titleProduct.length === 2) {
      mensaje =
        "Los siguientes productos no se encuentran disponibles: " +
        titleProduct.join(" y ");
      console.log(mensaje);
    } else if (titleProduct.length === 1) {
      mensaje =
        "El siguiente producto no se encuentra disponible: " +
        titleProduct.join("");
    } else {
      for (let i = 0; i < titleProduct.length - 1; i++) {
        mensaje = mensaje + titleProduct[i] + ", ";
      }
      mensaje =
        "Los siguientes productos no se encuentran disponibles: " +
        mensaje.substring(0, mensaje.length - 2) +
        " y " +
        titleProduct[titleProduct.length - 1];
    }

    if (noHayStock === true) {
      Swal.fire({
        title: "Lamentablemente ahora no podrás repetir éste pedido",
        text: mensaje,
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ir a comprar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          var URLactual = window.location.host;
          window.location = "http://" + URLactual + "/carta";
        }
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
                (filtrado) => filtrado._id === item.id
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
