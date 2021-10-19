import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import { useParams } from "react-router-dom";

const PedidoInfo = () => {
  const { uuid } = useParams();
  const [pedido, setPedido] = useState({});
  const url = process.env.REACT_APP_PEDIDOS_API;

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${url}/pedidos/${uuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((pedido) => {
        setPedido(pedido);
      });
    return () => {
      return true;
    };
  }, [url, uuid]);

  console.log(pedido)

  return (
    <>
      <Imgcab nombrehead="Mi pedido" />
      <div className="container pedidos-container">
        <PanelUsuario />
        <div className="table-container-pedidos">
          <div className="superior">
            <ul className="barraEstado">
              {pedido.estado === "Pendiente" && (
                <>
                  <li className="activado">Pendiente</li>
                  <li className="">En camino</li>
                  <li className="">Recibido</li>
                </>
              )}

              {pedido.estado === "En camino" && (
                <>
                  <li className="activado">Pendiente</li>
                  <li className="activado">En camino</li>
                  <li className="">Recibido</li>
                </>
              )}

              {pedido.estado === "Recibida" && (
                <>
                  <li className="activado">Pendiente</li>
                  <li className="activado">En camino</li>
                  <li className="Activado">Recibido</li>
                </>
              )}
            </ul>
          </div>
          <div className="medio">
            <div className="boxProductos">
              <h1>Productos facturados: </h1>

              {!pedido.items
                ? ""
                : pedido.items.map(
                    (pedido, index, array) =>
                      pedido.description !== "Despacho" && (
                        <>
                          <div className="boxProducto">
                            <div className="imgProducto">
                              <div className="img"></div>
                            </div>
                            <div className="infoProducto">
                              <div className="tituloProducto">
                                <h2>{pedido.title}</h2>
                              </div>
                              <div>
                                <h4 className="descripcion">
                                  Envoltura: {pedido.envoltura}
                                </h4>
                              </div>
                              <div>
                                <h4 className="unidades">
                                  Unidades: {pedido.quantity}
                                </h4>
                              </div>
                              <div className="precio">
                                <h4>Precio: ${pedido.unit_price}</h4>
                              </div>
                            </div>
                          </div>
                        </>
                      )
                  )}
            </div>

            
              
                <div className="boxPrincipal">
                  <div className="boxSuperior">
                    <div className="titulo">
                      <h1>Detalles Factura</h1>
                    </div>
                    <h3>Nombre: </h3>
                    <h4>{pedido.estado}</h4>
                    <h3>Celular: </h3>
                    <h4>+569 67256867</h4>
                    <h3>Correo: </h3>
                    <h4>mail@gmail.com</h4>
                  </div>
                  <div className="boxInferior">
                    <div className="titulo">
                      <h1>Detalles Envío</h1>
                    </div>

                    <h3>Recibe: </h3>
                    <h4>Juan Alverto</h4>
                    <h3>Dirección: </h3>
                    <h4>Avenida Apoquindo 543</h4>
                    <h3>Precio:</h3>
                    <h4>$2.500</h4>
                  </div>
                </div>
              

              <div className="precioTotal">
                <h1>Total: </h1>
              </div>
            
          </div>

          <Table dark striped className="pedidos-table">
            <thead>
              <tr>
                <th>Fecha de ingreso</th>
                <th>Estado</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Fecha de ingreso">{pedido.fechaIngresada}</td>
                {pedido.estado === "Pendiente" && (
                  <td data-label="Estado" className="en-camino">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "Recibida" && (
                  <td data-label="Estado" className="recibida">
                    {pedido.estado}
                  </td>
                )}
                {pedido.estado === "Cancelada" && (
                  <td data-label="Estado" className="cancelada">
                    {pedido.estado}
                  </td>
                )}
                <td data-label="Productos">{pedido.notas}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="pedidoinfo"></div>
      </div>
    </>
  );
};

export default PedidoInfo;
