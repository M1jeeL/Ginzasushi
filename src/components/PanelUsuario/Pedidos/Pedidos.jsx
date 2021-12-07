import React, { useState, useEffect } from "react";
import _ from "lodash";
import PanelUsuario from "../PanelUsuario";
import PedidosTable from "./PedidosTable";
import Imgcab from "../../Imagen cabecera/Imgcab";
import Loader from "../../Loader/Loader";
import "./Pedidos.scss";
import { useSelector } from "react-redux";

const Pedidos = () => {
  const { pedidos } = useSelector((state) => state.pedidosUser);
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
      <Imgcab nombrehead="Pedidos" />
      {pedidos ? (
        <div className="container pedidos-container animate__animated animate__fadeIn animate__faster">
          <PanelUsuario />
          <PedidosTable
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
      ) : (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default Pedidos;
