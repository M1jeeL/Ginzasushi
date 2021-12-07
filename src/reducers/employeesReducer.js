import { types } from "../types/types";

const initialState = {
  employees: [],
  active: {},
};

export const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.employesLoad:
      return {
        ...state,
        employees: [...action.payload],
      };

    case types.employeeActive:
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
