import { types } from "../types/types";

const initialState = {
  pedidos: [],
  active: null,
  subTotal: 0,
  despacho: 0,
  total: 0,
};

export const pedidosUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.pedidosUserLoad:
      return {
        ...state,
        pedidos: [...action.payload],
      };

    case types.pedidosUserActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.pedidosUserSetSubTotalDespacho:
      return {
        ...state,
        despacho: action.payload,
      };

    case types.pedidosUserSetSubTotalProducts:
      return {
        ...state,
        subTotal: action.payload,
      };

    case types.pedidosUserSetTotalPedido:
      return {
        ...state,
        total: action.payload,
      };

    default:
      return state;
  }
};
