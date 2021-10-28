import { types } from "../types/types";

const initialState = {
  pedidos: [],
  active: null,
  subTotal: 0,
  despacho: 0,
  total: 0,
};

export const pedidosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pedidosLoad:
      return {
        ...state,
        pedidos: [...action.payload],
      };

    case types.pedidosUpdated:
      return {
        ...state,
        pedidos: state.pedidos.map((pedido) =>
          pedido.id === action.payload.id ? action.payload.pedido : pedido
        ),
      };

    case types.pedidosActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
