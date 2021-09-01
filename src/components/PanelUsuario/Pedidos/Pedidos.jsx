import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import PanelUsuario from "../PanelUsuario";
import PedidosTable from "./PedidosTable";
import Imgcab from "../../Imagen cabecera/Imgcab";
import Loader from "../../Loader/Loader";
import "./Pedidos.scss";

const Pedidos = () => {
  const history = useHistory();
  const url = process.env.REACT_APP_PEDIDOS_API;
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginatedPedidos, setPaginatedPedidos] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) {
      history.push("/login");
      return;
    }

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
        setLoading(false);
        setPaginatedPedidos(_(pedidos).slice(0).take(pageSize).value());
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        localStorage.removeItem("token");
        history.push("/login");
      });
  }, [history, url]);

  return (
    <>
      <Imgcab nombrehead="Pedidos" />
      {loading ? (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <div className="container pedidos-container">
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
      )}
    </>
  );
};

export default Pedidos;
