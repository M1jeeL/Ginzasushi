import React, {useState} from "react";
import { Table } from "reactstrap";
import _ from "lodash";
import { DashboardPedidosModal } from "./DashboardPedidosModal";

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

  return (
    <div className="table-container-pedidos-dashboard">
      <Table bordered className="pedidos-table">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre</th>
            <th>Fecha de ingreso</th>
            <th>Estado</th>
            <th>Despacho</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPedidos.length > 0 ? (
            paginatedPedidos.map((pedidos) => (
              <tr key={pedidos.id}>
                <td data-label="id">{pedidos.id}</td>
                <td data-label="name">{pedidos.payer.name}</td>
                <td data-label="Fecha Ingreso">{pedidos.fechaIngresada}</td>
                <td>{pedidos.estado}</td>
                <td>{pedidos.despacho}</td>
                <td>
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
