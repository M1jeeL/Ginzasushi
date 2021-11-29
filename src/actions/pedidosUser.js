import { clamp } from "lodash";
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

export const startActivePedido = (pedido) => {
  return async (dispatch, getState) => {
    // Separa el item de despacho para obtener el valor de envio
    const [itemDespacho] = pedido.items.filter(
      (item) => item.description === "Despacho"
    );
    const subTotalDespacho = itemDespacho.unit_price;

    // Separa los items de productos para obtener el subTotal de los productos
    const itemsProductos = pedido.items.filter(
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
    dispatch(activePedido(pedido));
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
    var mensaje = "";

    pedido.items.forEach((element) => {
      // eslint-disable-next-line eqeqeq
      const [produ] = products.filter((product) => product.id == element.id);

      if (produ?.activo === false) {
        noHayStock = true;
        titleProduct.push(element.title);
      }
    });

    if (titleProduct.length === 2) {
      mensaje = "Los siguientes productos no se encuentran disponibles: " + titleProduct.join(" y ");
      console.log(mensaje);
    }
    else if(titleProduct.length === 1){
        mensaje = "El siguiente producto no se encuentra disponible: " + titleProduct.join("");
    }
    else{
        mensaje = "Los siguientes productos no se encuentran disponibles: " + titleProduct.join(", ");
    }

    if (noHayStock === true) {
      Swal.fire({
        title: "Lamentablemente ahora no podrás repetir éste pedido",
        text: mensaje,
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
