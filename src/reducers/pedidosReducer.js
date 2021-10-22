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

    default:
      return state;
  }
};
