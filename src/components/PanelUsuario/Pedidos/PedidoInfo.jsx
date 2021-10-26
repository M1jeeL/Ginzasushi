import React, { useState, useEffect } from "react";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";

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

  console.log(pedido);

  return (
    <>
      <Imgcab nombrehead="Mi pedido" />
      <div className="container pedidos-container">
        <PanelUsuario />
        <div className="table-container-pedidos">
          <ul className="pedido-estado">
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

          <div className="pedido-productos">
            <h1>Productos facturados: </h1>
            {!pedido.items
              ? ""
              : pedido.items.map(
                  (pedido, index, array) =>
                    pedido.description !== "Despacho" && (
                      <div key={index} className="pedido-productos-detalle">
                        <div className="pedido-productos-detalle-bodyImage">
                          <div className="pedido-productos-detalle-bodyImage-image"></div>
                        </div>
                        <div className="pedido-productos-detalle-bodyTitle">
                          <div className="pedido-productos-detalle-bodyTitle-title">
                            <h2>{pedido.title}</h2>
                          </div>
                          <div className="pedido-productos-detalle-bodyEnvolture-envolture">
                            <h4>
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
                    )
                )}
          </div>

          <div className="pedido-infoCliente">
            <div className="pedido-infoCliente-facturante">
              <div className="titulo">
                <h1>Detalles Factura</h1>
              </div>
              <h3>Fecha: </h3>
              <h4>{pedido.fechaIngresada}</h4>
              <h3>Nombre: </h3>
              <h4>{pedido.estado}</h4>
              <h3>Celular: </h3>
              <h4>+569 67256867</h4>
              <h3>Correo: </h3>
              <h4>mail@gmail.com</h4>
            </div>
            <div className="pedido-infoCliente-envio">
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

          <div className="pedido-facturaTotal">
            <div className="pedido-facturaTotal-item">
              <h2>SubTotal: </h2>
              <h1>$ 20.000</h1>
            </div>

            <div className="pedido-facturaTotal-item">
              <h2 className="destacado">Total: </h2>
              <h1 className="destacado2">$ 22.000</h1>
            </div>
          </div>

          <div className="pedido-repetir">
            <h1>¿Te gustaría solicitar nuevamente éste pedido?</h1>
            <Button color="success">Repetir Pedido</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PedidoInfo;
