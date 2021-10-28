import React, { useState } from "react";
import { Input, Table } from "reactstrap";
import _ from "lodash";
import { DashboardPedidosModal } from "./DashboardPedidosModal";
import { useDispatch } from "react-redux";
import { activePedido } from "../../actions/pedidos";
import moment from "moment";

const DashboardPedidosTable = ({
  pedidos,
  paginatedPedidos,
  pageSize,
  currentPage,
  setCurrentPage,
  setPaginatedPedidos,
  pageNumberLimit,
  maxPageNumberLimit,
  minPageNumberLimit,
  setMaxPageNumberLimit,
  setMinPageNumberLimit,
}) => {
  const pageCount = pedidos ? Math.ceil(pedidos.length / pageSize) : 0;
  const dispatch = useDispatch();

  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPedido = _(pedidos).slice(startIndex).take(pageSize).value();
    setPaginatedPedidos(paginatedPedido);
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

  const [openPedidoModal, setOpenPedidoModal] = useState(false);

  const openModalPedido = () => {
    setOpenPedidoModal(!openPedidoModal);
  };

  const [checkedInputRadio, setCheckedInputRadio] = useState(0);

  return (
    <div className="table-container-pedidos-dashboard">
      <Table bordered dark hover className="pedidos-table">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre</th>
            <th>Fecha de ingreso</th>
            <th>Estado</th>
            <th>Despacho</th>
            <th className="dashboard-pedidos-table-eye">Visualizar</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPedidos.length > 0 ? (
            paginatedPedidos.map((pedido) => (
              <tr
                key={pedido.id}
                className="dashboard-pedidos-table-row"
                onClick={(e) => {
                  dispatch(activePedido(pedido.id, pedido));
                  setCheckedInputRadio(pedido.id);
                }}
              >
                <td data-label="N">
                  <Input
                    type="radio"
                    value={pedido.id}
                    className="dashboard-pedidos-table-checked"
                    checked={pedido.id === checkedInputRadio}
                    key={pedido.id}
                    onChange={(e) => {
                      setCheckedInputRadio(e.target.value);
                    }}
                  />
                </td>
                <td data-label="name">{pedido.payer.name}</td>
                <td data-label="Fecha Ingreso">
                  {moment(pedido.fechaIngresada)
                    .subtract(3, "hours")
                    .format("LLL")}
                </td>
                {pedido.estado === "Pendiente" && (
                  <td data-label="Estado" className="en-camino">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "Completado" && (
                  <td data-label="Estado" className="recibida">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "Aceptado" && (
                  <td data-label="Estado" className="en-camino">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "Rechazado" && (
                  <td data-label="Estado" className="cancelada">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "En camino" && (
                  <td data-label="Estado" className="en-camino">
                    {pedido.estado}
                  </td>
                )}
                <td>Delivery</td>
                <td className="dashboard-pedidos-table-eye">
                  <i
                    className="dashboard-pedidos-icon-select far fa-eye"
                    onClick={() => {
                      openModalPedido();
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
        <DashboardPedidosModal
          openPedidoModal={openPedidoModal}
          openModalPedido={openModalPedido}
        />
      </Table>
      <nav className="nav-pedidos">
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
    </div>
  );
};

export default DashboardPedidosTable;
