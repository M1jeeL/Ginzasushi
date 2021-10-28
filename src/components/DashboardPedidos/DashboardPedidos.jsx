import React, { useState, useEffect } from "react";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import { Input } from "reactstrap";
import "./DashboardPedidos.scss";
import DashboardPedidosTable from "./DashboardPedidosTable";

import { useHistory } from "react-router-dom";
import _ from "lodash";

const url = process.env.REACT_APP_PEDIDOS_API;

export const DashboardPedidos = () => {
  const history = useHistory();
  const [pedidos, setPedidos] = useState([]);
  const [paginatedPedidos, setPaginatedPedidos] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${url}/pedidos/admin`, {


  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${url}/pedidos`, {

      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((pedidos) => {
        setPedidos(pedidos);
        setPaginatedPedidos(_(pedidos).slice(0).take(pageSize).value());
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem("token");
        history.push("/login");
      });

    return () => {
      setPedidos([]);
      setPaginatedPedidos({});
    };
  }, [history]);


  
  console.log(pedidos);

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

        <div className="dashboard-pedidos-buttons">
          <BotonPedido info="Editar" icono="far fa-edit fa-2x" />
          <BotonPedido info="Eliminar" icono="fas fa-times fa-2x" />

        </div>
      </div>
    </div>
  );
};
