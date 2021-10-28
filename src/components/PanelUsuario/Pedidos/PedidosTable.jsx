import React from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import _ from "lodash";
import moment from "moment";

const PedidosTable = ({
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

  //   console.log(JSON.parse(pedidos[130].items[0]));

  const btnNonStyle = {
    outline: "none",
    background: "none",
    border: "none",
    boxShadow: "none",
  };

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

  return (
    <div className="table-container-pedidos">
      <Table dark striped className="pedidos-table">
        <thead>
          <tr>
            <th>Fecha de ingreso</th>
            <th>Estado</th>
            <th>Descripcion</th>
            <th>Ver pedido</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPedidos.length > 0 ? (
            paginatedPedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td data-label="Fecha Ingresada">
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
                {pedido.estado === "Rechazado" && (
                  <td data-label="Estado" className="cancelada">
                    {pedido.estado}
                  </td>
                )}
                <td data-label="Descripción">{pedido.notas}</td>
                <td data-label="Ver más información">
                  <Link to={`/pedidos/${pedido.uuid}`}>
                    <Button style={btnNonStyle} className="ver-info-pedido">
                      <i className="fas fa-eye"></i>
                    </Button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">
                <span className="d-flex justify-content-center text-align-center">
                  No haz realizado ningún pedido
                </span>
              </td>
            </tr>
          )}
        </tbody>
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

export default PedidosTable;
