import { loadPedidos } from "../helpers/loadPedidos";
import { types } from "../types/types";

export const startLoadingPedidos = () => {
  return async (dispatch) => {
    const pedidos = await loadPedidos();
    dispatch(setPedidos(pedidos));
  };
};

export const setPedidos = (pedidos) => ({
  type: types.pedidosLoad,
  payload: pedidos,
});
