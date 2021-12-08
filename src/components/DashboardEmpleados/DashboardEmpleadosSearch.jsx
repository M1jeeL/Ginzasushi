import React, { useCallback, useEffect } from "react";
import { Input } from "reactstrap";
import { useForm } from "../../hooks/useForm";

export const DashboardEmpleadosSearch = ({
  employees,
  setPaginatedEmpleados,
}) => {
  const [formValues, handleInputChange] = useForm({
    search: "",
  });

  const { search } = formValues;

  const getEmpleadosByName = useCallback(
    (name = "") => {
      if (name === "") {
        return employees;
      }

      name = name.toLowerCase();

      return employees.filter(
        (employee) =>
          employee.nombre.toLowerCase().includes(name) ||
          employee.apellido.toLowerCase().includes(name) ||
          employee.email.toLowerCase().includes(name)
      );
    },
    [employees]
  );

  useEffect(() => {
    if (search === "") {
      setPaginatedEmpleados(employees);
    } else {
      setPaginatedEmpleados(getEmpleadosByName(search));
    }
  }, [getEmpleadosByName, search, setPaginatedEmpleados, employees]);

  return (
    <div className="employee-search-container">
      <Input
        type="text"
        className="employee-search-input"
        name="search"
        value={search}
        onChange={handleInputChange}
      />
      <i className="fas fa-search fa-2x"></i>
    </div>
  );
};
