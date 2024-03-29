import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { productsReducer } from "../reducers/productsReducer";
import { uiReducer } from "../reducers/uiReducer";
import { pedidosReducer } from "../reducers/pedidosReducer";
import { pedidosUserReducer } from "../reducers/pedidosUserReducer";
import { employeesReducer } from "../reducers/employeesReducer";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  products: productsReducer,
  ui: uiReducer,
  pedidosUser: pedidosUserReducer,
  pedidosAdmin: pedidosReducer,
  employees: employeesReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
