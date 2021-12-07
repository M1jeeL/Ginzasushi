import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import { activePedido, startRepeatOrder } from "../../../actions/pedidosUser";
import { formatearNumero } from "../../../helpers/formatearNumero";
import moment from "moment";
import Loader from "../../Loader/Loader";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
const url = process.env.REACT_APP_API;

const PedidoInfo = () => {
  const { uuid } = useParams();
  const { products } = useSelector((state) => state.products);
  const [pedido, setPedido] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`${url}/orders/${uuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((pedido) => {
        setPedido(pedido);
        dispatch(activePedido(pedido));
      });
  }, [dispatch, uuid]);

  return (
    <>
      <Imgcab nombrehead="Mi pedido" />
      <div className="container pedidos-container">
        <PanelUsuario />
        {Object.entries(pedido).length > 0 ? (
          <div className="table-container-pedidos">
            {pedido.estado === "Pendiente" && (
              <>
                <ul className="pedido-estado">
                  <li className="pedido-estado-item activado">Pendiente</li>
                  <li className="pedido-estado-item ">Aceptado</li>
                  <li className="pedido-estado-item ">Completado</li>
                </ul>
              </>
            )}

            {pedido.estado === "Aceptado" && (
              <>
                <ul className="pedido-estado">
                  <li className="pedido-estado-item activado">Pendiente</li>
                  <li className="pedido-estado-item activado">Aceptado</li>
                  <li className="pedido-estado-item ">Completado</li>
                </ul>
              </>
            )}

            {pedido.estado === "Completado" && (
              <>
                <ul className="pedido-estado">
                  <li className="pedido-estado-item activado">Pendiente</li>
                  <li className="pedido-estado-item activado">Aceptado</li>
                  <li className="pedido-estado-item activado">Completado</li>
                </ul>
              </>
            )}

            {pedido.estado === "Rechazado" && (
              <div className="avisoRechazado">Pedido Rechazado</div>
            )}

            <div className="pedido-productos">
              <h1>Productos facturados:</h1>
              {!pedido.items
                ? ""
                : pedido.items.map((productInPedido, index) => {
                    const [productSelected] = products.filter(
                      (item) => item._id === productInPedido.id
                    );
                    return (
                      productInPedido.description !== "Despacho" && (
                        <div key={index} className="pedido-productos-detalle">
                          <div className="pedido-productos-detalle-bodyImage">
                            <div>
                              <img
                                src={productSelected.image_src}
                                alt={productInPedido.title}
                                className="pedido-productos-detalle-bodyImage-image"
                              />
                            </div>
                          </div>
                          <div className="pedido-productos-detalle-bodyTitle">
                            <div className="pedido-productos-detalle-bodyTitle-title">
                              <h2>{productInPedido.title}</h2>
                            </div>
                            <div className="pedido-productos-detalle-bodyEnvolture-envolture">
                              <h3>Envoltura: </h3>
                              <h4>{productInPedido.envoltura}</h4>
                            </div>
                            <div>
                              <h3>Unidades: </h3>
                              <h4 className="unidades">
                                {productInPedido.quantity}
                              </h4>
                            </div>
                            <div className="precio">
                              <h3>Precio: </h3>
                              <h4>
                                ${formatearNumero(productInPedido.unit_price)}
                              </h4>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
            </div>

            <div className="pedido-infoCliente">
              <div className="pedido-infoCliente-facturante">
                <div className="titulo">
                  <h1>Detalles Factura:</h1>
                </div>
                <h3>Fecha: </h3>
                <h4>{moment(pedido.createdAt).format("LLL")}</h4>
                <h3>Nombre de Cliente: </h3>
                <h4>{`${pedido.payer.name} ${pedido.payer.surname}`}</h4>
                <h3>Celular: </h3>
                <h4>+56{pedido.payer.phone.number}</h4>
                <h3>Correo: </h3>
                <h4>{pedido.payer.email}</h4>
              </div>
              <div className="pedido-infoCliente-envio">
                <div className="titulo">
                  <h1>Detalles Envío:</h1>
                </div>
                <h3>Recibe: </h3>
                <h4>{`${pedido.payer.name} ${pedido.payer.surname}`}</h4>
                <h3>Dirección: </h3>
                <h4>{`${pedido.payer.shipments.receiver_address.street_name} ${pedido.payer.shipments.receiver_address.street_number}`}</h4>
                <h3>Precio:</h3>
                <h4>${formatearNumero(pedido.precio_despacho)}</h4>
              </div>
            </div>

            <div className="pedido-facturaTotal">
              <div className="pedido-facturaTotal-item">
                <h2>SubTotal: </h2>
                <h1>$ {formatearNumero(pedido.precio_subtotal)}</h1>
              </div>

              <div className="pedido-facturaTotal-item">
                <h2 className="destacado">Total: </h2>
                <h1 className="destacado2">
                  $ {formatearNumero(pedido.precio_total)}
                </h1>
              </div>
            </div>

            <div className="pedido-repetir">
              <h1>¿Te gustaría solicitar nuevamente éste pedido?</h1>
              <Button
                color="warning"
                onClick={() => dispatch(startRepeatOrder(pedido))}
              >
                Repetir Pedido
              </Button>
            </div>
          </div>
        ) : (
          <div className="d-flex micuenta-container justify-content-center align-items-center">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default PedidoInfo;
