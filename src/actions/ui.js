import { loadComunas } from "../helpers/loadComunas";
import { types } from "../types/types";

export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});

export const removeError = (err) => ({
  type: types.uiRemoveError,
  payload: err,
});

export const startLoading = () => ({
  type: types.uiStartLoading,
});

export const finishLoading = () => ({
  type: types.uiFinishLoading,
});

export const startLoadingComunas = () => {
  return async (dispatch) => {
    const comunas = await loadComunas();
    dispatch(setComunas(comunas));
  };
};

export const setComunas = (comunas) => ({
  type: types.uiLoadComunas,
  payload: comunas,
});

export const handleShowSidebar = () => ({
  type: types.uiShowSidebar,
});
