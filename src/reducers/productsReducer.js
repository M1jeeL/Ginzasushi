import { types } from "../types/types";

const initialState = {
  products: [],
  active: null,
  cart: [],
  total: 0,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.productsAddNew:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case types.productsActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };

    case types.productsLoad:
      return {
        ...state,
        products: [...action.payload],
      };

    case types.productsUpdated:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload.product : product
        ),
      };

    case types.productsDelete:
      return {
        ...state,
        active: null,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case types.categoriesLoad:
      return {
        ...state,
        categories: [...action.payload],
      };

    case types.categoriesAddNew:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };

    case types.addToCart:
      return {
        ...state,
        cart: action.payload,
      };

    case types.removeOneFromCart:
      return {
        ...state,
        cart: action.payload,
      };

    case types.addQuantityForEach:
      return {
        ...state,
        cart: action.payload,
      };

    case types.removeQuantityForEach:
      return {
        ...state,
        cart: action.payload,
      };

    case types.removeAllFromCart:
      return {
        ...state,
        cart: [],
      };

    case types.calculateTotal:
      let totalAux = 0;
      state.cart.forEach((item) => {
        totalAux += item.subTotal * item.cantidad;
      });
      return {
        ...state,
        total: totalAux,
      };
    default:
      return state;
  }
};
