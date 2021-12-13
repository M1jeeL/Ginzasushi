import React, { useState, useEffect } from "react";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import "./DashboardEmpleados.scss";
import DashboardEmpleadosTable from "./DashboardEmpleadosTable";
import _ from "lodash";
import { useSelector } from "react-redux";
import { DashboardEmpleadosSearch } from "./DashboardEmpleadosSearch";
import { DashboardEmpleadosModalAgregar } from "./DashboardEmpleadosModalAgregar";

export const DashboardEmpleados = () => {
  const { employees } = useSelector((state) => state.employees);
  const [paginatedEmpleados, setPaginatedEmpleados] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    setPaginatedEmpleados(_(employees).slice(0).take(pageSize).value());
    return () => {
      setPaginatedEmpleados({});
    };
  }, [employees]);

  const [openEmpleadoModalAgregar, setOpenEmpleadoModalAgregar] =
    useState(false);

  const openModalEmpleadoAgregar = () => {
    setOpenEmpleadoModalAgregar(!openEmpleadoModalAgregar);
  };

  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="dashboar-empleados-container">
        <div className="dashboard-empleados-header">
          <div className="dashboard-empleados-title">
            Recepcion de empleados
          </div>
          <div className="dashboard-empleados-search">
            <DashboardEmpleadosSearch
              employees={employees}
              setPaginatedEmpleados={setPaginatedEmpleados}
            />
            <DashboardEmpleadosModalAgregar
              openEmpleadoModalAgregar={openEmpleadoModalAgregar}
              openModalEmpleadoAgregar={openModalEmpleadoAgregar}
            />
          </div>
        </div>
        <div className="dashboard-empleados-body">
          <DashboardEmpleadosTable
            empleados={employees}
            currentPage={currentPage}
            pageSize={pageSize}
            paginatedEmpleados={paginatedEmpleados}
            setCurrentPage={setCurrentPage}
            setPaginatedEmpleados={setPaginatedEmpleados}
            pageNumberLimit={pageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
            setMaxPageNumberLimit={setMaxPageNumberLimit}
            setMinPageNumberLimit={setMinPageNumberLimit}
          />
        </div>

        <div className="dashboard-pedidos-container-buttons">
          <div
            className="dashboard-pedidos-button dashboard-pedido-button-accept"
            onClick={() => {
              openModalEmpleadoAgregar();
            }}
          >
            <i class="fas fa-plus"></i>
            <div>Agregar</div>
          </div>
          <div
            className="dashboard-pedidos-button dashboard-pedido-button-send"
            onClick={() => {
              //   dispatch(despacharPedido(active.uuid));
            }}
          >
            <i class="fas fa-user-edit"></i>
            <div>Editar</div>
          </div>
          <div
            className="dashboard-pedidos-button dashboard-pedido-button-delete"
            onClick={() => {
              //   dispatch(rechazarPedido(active.uuid));
            }}
          >
            <i class="fas fa-user-slash"></i>
            <div>Eliminar</div>
          </div>
        </div>
      </div>
    </div>
  );
};
