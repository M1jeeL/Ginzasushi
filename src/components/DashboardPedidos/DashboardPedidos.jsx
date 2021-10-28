import React, { useState, useEffect } from "react";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import { Input } from "reactstrap";
import "./DashboardPedidos.scss";
import DashboardPedidosTable from "./DashboardPedidosTable";
import _ from "lodash";
import { useSelector } from "react-redux";

export const DashboardPedidos = () => {
  const [paginatedPedidos, setPaginatedPedidos] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pageSize = 10;

  const { pedidos } = useSelector((state) => state.pedidos);

  useEffect(() => {
    setPaginatedPedidos(_(pedidos).slice(0).take(pageSize).value());
    return () => {
      setPaginatedPedidos({});
    };
  }, [pedidos]);

  return (
    <div className="dashboard">
      <DashboardNavbar />
      <div className="dashboar-pedidos-container">
        <div className="dashboard-pedidos-header">
          <div className="dashboard-pedidos-title">Recepcion de pedidos</div>
          <div className="dashboard-pedidos-search">
            <Input type="text" />
            <div className="dashboard-pedidos-icon-search">
              <i className="fas fa-search fa-2x"></i>
            </div>
          </div>
        </div>
        <div className="dashboard-pedidos-body">
          <DashboardPedidosTable
            pedidos={pedidos}
            currentPage={currentPage}
            pageSize={pageSize}
            paginatedPedidos={paginatedPedidos}
            setCurrentPage={setCurrentPage}
            setPaginatedPedidos={setPaginatedPedidos}
            pageNumberLimit={pageNumberLimit}
            maxPageNumberLimit={maxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
            setMaxPageNumberLimit={setMaxPageNumberLimit}
            setMinPageNumberLimit={setMinPageNumberLimit}
          />
        </div>
        <div className="dashboard-pedidos-container-buttons">
          <div className="dashboard-pedidos-button dashboard-pedido-button-accept">
            <i className="fas fa-check"></i>
            <div>Aceptar</div>
          </div>
          <div className="dashboard-pedidos-button dashboard-pedido-button-delete">
            <i className="fas fa-times"></i>
            <div>Eliminar</div>
          </div>
          <div className="dashboard-pedidos-button dashboard-pedido-button-send">
            <i className="fas fa-share"></i>
            <div>Despachar</div>
          </div>
          <div className="dashboard-pedidos-button dashboard-pedido-button-complete">
            <i className="fas fa-clipboard-check"></i>
            <div>Completar</div>
          </div>
        </div>
      </div>
    </div>
  );
};
