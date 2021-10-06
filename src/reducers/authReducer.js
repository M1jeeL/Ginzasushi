import { types } from "../types/types";

const initialState = {
  user: {},
  logged: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        user: {
          apellido: action.payload.apellido,
          calle: action.payload.calle,
          celular: action.payload.celular,
          comuna: action.payload.comuna,
          depto: action.payload.depto,
          email: action.payload.email,
          id: action.payload.id,
          idAdmin: action.payload.isAdmin,
          nombre: action.payload.nombre,
          numeracion: action.payload.numeracion,
          username: action.payload.username,
        },
        logged: true,
      };
    case types.logout:
      return {
        ...state,
        user: {},
        logged: false,
      };
    default:
      return state;
  }
};
