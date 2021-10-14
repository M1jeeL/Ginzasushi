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
        user: action.payload,
        logged: true,
      };
    case types.logout:
      localStorage.removeItem("token");
      return {
        ...state,
        user: {},
        logged: false,
      };
    default:
      return state;
  }
};
