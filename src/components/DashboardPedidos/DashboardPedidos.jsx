import React, { useState, useEffect } from "react";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import "./DashboardPedidos.scss";
import DashboardPedidosTable from "./DashboardPedidosTable";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  aceptarPedido,
  completarPedido,
  despacharPedido,
  rechazarPedido,
} from "../../actions/pedidos";
import Loader from "../Loader/Loader";
import { DashboardPedidosSearch } from "./DashboardPedidosSeach";

export const DashboardPedidos = () => {
  const { active, pedidos } = useSelector((state) => state.pedidosAdmin);
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [paginatedPedidos, setPaginatedPedidos] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    setPaginatedPedidos(_(pedidos).slice(0).take(pageSize).value());
    return () => {
      setPaginatedPedidos({});
    };
  }, [pedidos]);

  return (
    <>
      {Object.entries(auth).length > 0 ? (
        <div className="dashboard">
          <DashboardNavbar />
          <div className="dashboar-pedidos-container">
            <div className="dashboard-pedidos-header">
              <div className="dashboard-pedidos-title">
                Recepcion de pedidos
              </div>
              <div className="dashboard-pedidos-search">
                <DashboardPedidosSearch
                  pedidos={pedidos}
                  setPaginatedPedidos={setPaginatedPedidos}
                />
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
              <div
                className="dashboard-pedidos-button dashboard-pedido-button-accept"
                onClick={() => {
                  dispatch(aceptarPedido(active.uuid));
                }}
              >
                <i className="fas fa-check"></i>
                <div>Aceptar</div>
              </div>
              <div
                className="dashboard-pedidos-button dashboard-pedido-button-delete"
                onClick={() => {
                  dispatch(rechazarPedido(active.uuid));
                }}
              >
                <i className="fas fa-times"></i>
                <div>Rechazar</div>
              </div>
              <div
                className="dashboard-pedidos-button dashboard-pedido-button-send"
                onClick={() => {
                  dispatch(despacharPedido(active.uuid));
                }}
              >
                <i className="fas fa-share"></i>
                <div>Despachar</div>
              </div>
              <div
                className="dashboard-pedidos-button dashboard-pedido-button-complete"
                onClick={() => {
                  dispatch(completarPedido(active.uuid));
                }}
              >
                <i className="fas fa-clipboard-check"></i>
                <div>Completar</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};
