import React, { useState } from "react";
import { Table } from "reactstrap";
import _ from "lodash";
import { DashboardEmpleadosModal} from "./DashboardEmpleadosModal";
import { DashboardEmpleadosModalAgregar} from "./DashboardEmpleadosModalAgregar";

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

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedEmpleado = _(empleados).slice(startIndex).take(pageSize).value();
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

  const openModalEmpleado = () => {
    setOpenEmpleadoModal(!openEmpleadoModal);
  };

  const [openEmpleadoModalAgregar, setOpenEmpleadoModalAgregar] = useState(false);

  const openModalEmpleadoAgregar = () => {
    setOpenEmpleadoModalAgregar(!openEmpleadoModalAgregar);
  };

  const [, setCheckedInputRadio] = useState(0);

  return (
    <div className="table-container-empleados-dashboard">
      <Table bordered dark hover className="empleados-table">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre</th>
            <th className="dashboard-empleados-table-eye">Editar</th>
          </tr>
        </thead>
        <tbody>
          {paginatedEmpleados.length > 0 ? (
            paginatedEmpleados.map((empleado) => (
              <tr
                key={empleado.id}
                className="dashboard-empleados-table-row"
                onClick={() => {
                  setCheckedInputRadio(empleado.id);
                }}
              >
                <td data-label="N">{empleado.id}</td>
                <td data-label="name">{empleado.nombre}</td>
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
              <td colSpan="6">Sin datos</td>
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
       <div class="row">
        <div class="col text-center">
         <button type="button" class="btn btn-success" onClick={openModalEmpleadoAgregar}>Agregar</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default DashboardEmpleadosTable;
