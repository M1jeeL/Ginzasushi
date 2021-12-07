import React, { useState } from "react";
import { Input, Table } from "reactstrap";
import _ from "lodash";
import { DashboardEmpleadosModal } from "./DashboardEmpleadosModal";
import { DashboardEmpleadosModalAgregar } from "./DashboardEmpleadosModalAgregar";
import { useDispatch } from "react-redux";
import { startActiveEmployee } from "../../actions/employees";

const DashboardEmpleadosTable = ({
  empleados,
  paginatedEmpleados,
  pageSize,
  currentPage,
  setCurrentPage,
  setPaginatedEmpleados,
  pageNumberLimit,
  maxPageNumberLimit,
  minPageNumberLimit,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
}) => {
  const pageCount = empleados ? Math.ceil(empleados.length / pageSize) : 0;
  const pages = _.range(1, pageCount + 1);
  const [checkedInputRadio, setCheckedInputRadio] = useState(0);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedEmpleado = _(empleados)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedEmpleados(paginatedEmpleado);
  };

  const handleNextBtn = () => {
    pagination(currentPage + 1);
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    pagination(currentPage - 1);
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const [openEmpleadoModal, setOpenEmpleadoModal] = useState(false);
  const dispatch = useDispatch();
  const openModalEmpleado = () => {
    setOpenEmpleadoModal(!openEmpleadoModal);
  };

  const [openEmpleadoModalAgregar, setOpenEmpleadoModalAgregar] =
    useState(false);

  const openModalEmpleadoAgregar = () => {
    setOpenEmpleadoModalAgregar(!openEmpleadoModalAgregar);
  };

  return (
    <div className="table-container-empleados-dashboard">
      <Table bordered dark hover className="empleados-table">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre</th>
            <th>Celular</th>
            <th>Email</th>
            <th className="dashboard-empleados-table-eye">Editar</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEmpleados.length > 0 ? (
            paginatedEmpleados.map((empleado, index) => (
              <tr
                key={empleado._id}
                className="dashboard-empleados-table-row"
                onClick={() => {
                  setCheckedInputRadio(empleado._id);
                  dispatch(startActiveEmployee(empleado._id));
                }}
              >
                <td data-label="N">
                  <Input
                    type="radio"
                    value={empleado._id}
                    className="dashboard-pedidos-table-checked"
                    checked={empleado._id === checkedInputRadio}
                    key={empleado._id}
                    onChange={(e) => {
                      setCheckedInputRadio(e.target.value);
                    }}
                  />
                </td>
                <td data-label="name">
                  {empleado.nombre} {empleado.apellido}
                </td>
                <td data-label="celular">{empleado.celular}</td>
                <td data-label="email">{empleado.email}</td>
                <td className="dashboard-empleados-table-eye">
                  <i
                    className="dashboard-empleados-icon-select far fa-eye"
                    onClick={() => {
                      openModalEmpleado();
                    }}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <span className="d-flex justify-content-center text-align-center">
                  No hay ningún empleado registrado con este nombre
                </span>
              </td>
            </tr>
          )}
        </tbody>
        <DashboardEmpleadosModal
          openEmpleadoModal={openEmpleadoModal}
          openModalEmpleado={openModalEmpleado}
        />
        <DashboardEmpleadosModalAgregar
          openEmpleadoModalAgregar={openEmpleadoModalAgregar}
          openModalEmpleadoAgregar={openModalEmpleadoAgregar}
        />
      </Table>
      <nav className="nav-empleados">
        <ul className="pagination">
          <li
            className={currentPage === 1 ? "page-item disabled" : "page-item"}
          >
            <button className="page-link" onClick={handlePrevBtn}>
              Anterior
            </button>
          </li>
          {pages.map((page) => {
            if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
              return (
                <li
                  key={page}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p
                    className="page-link"
                    onClick={() => {
                      pagination(page);
                    }}
                  >
                    {page}
                  </p>
                </li>
              );
            } else {
              return null;
            }
          })}
          <li
            className={
              currentPage === pageCount ? "page-item disabled" : "page-item"
            }
          >
            <span className="page-link" onClick={handleNextBtn}>
              Siguiente
            </span>
          </li>
        </ul>
      </nav>
      <div>
        <div className="row">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={openModalEmpleadoAgregar}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardEmpleadosTable;
