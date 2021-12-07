import Swal from "sweetalert2";
import { loadEmployees } from "../helpers/loadEmployees";
import { types } from "../types/types";

const url = process.env.REACT_APP_API;

export const startLoadingEmployees = () => {
  return async (dispatch) => {
    const employee = await loadEmployees();
    dispatch(setEmployees(employee));
  };
};

export const startRegisterEmployee = (employee) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(employee),
    });

    if (response.ok) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "El empleado se ha registrado correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      dispatch(startLoadingEmployees());
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Ocurrio un error al registrar el empleado!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
};

export const startActiveEmployee = (id) => {
  return async (dispatch, getState) => {
    const { employees } = getState().employees;

    const [employeeActive] = employees.filter(
      (employee) => employee._id === id
    );

    console.log(employeeActive);
    dispatch(activeEmployee(employeeActive));
  };
};

export const activeEmployee = (employee) => ({
  type: types.employeeActive,
  payload: employee,
});

export const setEmployees = (employee) => {
  return {
    type: types.employesLoad,
    payload: employee,
  };
};
