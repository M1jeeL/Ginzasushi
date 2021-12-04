import React, { useState, useEffect } from "react";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import { Input } from "reactstrap";
import "./DashboardEmpleados.scss";
import DashboardEmpleadosTable from "./DashboardEmpleadosTable";
import _ from "lodash";
//import { useSelector } from "react-redux";
import data from '../data.json'

export const DashboardEmpleados = () => {
  //const { empleados } = useSelector((state) => state.empleadosAdmin);
  const empleados = data.empleados
  const [paginatedEmpleados, setPaginatedEmpleados] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    setPaginatedEmpleados(_(empleados).slice(0).take(pageSize).value());
    return () => {
      setPaginatedEmpleados({});
    };
  }, [empleados]);

  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="dashboar-empleados-container">
        <div className="dashboard-empleados-header">
          <div className="dashboard-empleados-title">Recepcion de empleados</div>
          <div className="dashboard-empleados-search">
            <Input type="text" />
            <div className="dashboard-empleados-icon-search">
              <i className="fas fa-search fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="dashboard-empleados-body">
          <DashboardEmpleadosTable
            empleados={empleados}
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
      </div>
    </div>
  );
};
