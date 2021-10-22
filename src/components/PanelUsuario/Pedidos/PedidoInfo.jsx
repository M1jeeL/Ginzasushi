import React, { useState, useEffect } from "react";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../Loader/Loader";

const PedidoInfo = () => {
  const { uuid } = useParams();
  const [pedido, setPedido] = useState({});
  const url = process.env.REACT_APP_PEDIDOS_API;
  const { products } = useSelector((state) => state.products);

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
  }, [url, uuid]);

  const [subTotal, setSubTotal] = useState(0);
  console.log(pedido);

  return (
    <>
      <Imgcab nombrehead="Mi pedido" />
      <div className="container pedidos-container">
        <PanelUsuario />
        {Object.entries(pedido).length > 0 ? (
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
                    <li className="activado">Recibido</li>
                  </>
                )}
              </ul>
            </div>
            <div className="medio">
              <div className="boxProductos">
                <h1>Productos facturados: </h1>
                {pedido.items &&
                  pedido.items.map((pedidoItem, index) => {
                    const [productSelected] = products.filter(
                      (item) => Number(item.id) === Number(pedidoItem.id)
                    );
                    return (
                      pedidoItem.description !== "Despacho" && (
                        <div key={index} className="boxProducto">
                          <div className="imgProducto">
                            <img
                              src={productSelected.image_src}
                              alt={pedidoItem.title}
                              className="pedido-info-pic"
                            />
                          </div>
                          <div className="infoProducto">
                            <div className="tituloProducto">
                              <h2>{pedidoItem.title}</h2>
                            </div>
                            <div>
                              <h4 className="descripcion">
                                Envoltura: {pedidoItem.envoltura}
                              </h4>
                            </div>
                            <div>
                              <h4 className="unidades">
                                Unidades: {pedidoItem.quantity}
                              </h4>
                            </div>
                            <div className="precio">
                              <h4>Precio: ${pedidoItem.unit_price}</h4>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>

              <div className="boxPrincipal">
                <div className="boxSuperior">
                  <div className="titulo">
                    <h1>Detalles Factura</h1>
                  </div>
                  <h3>Nombre: </h3>
                  <h4>{`${pedido.payer.name} ${pedido.payer.surname}`}</h4>
                  <h3>Celular: </h3>
                  <h4>+56{pedido.payer.phone.number}</h4>
                  <h3>Correo: </h3>
                  <h4>{pedido.payer.email}</h4>
                </div>
                <div className="boxInferior">
                  <div className="titulo">
                    <h1>Detalles Envío</h1>
                  </div>

                  <h3>Recibe: </h3>
                  <h4>{`${pedido.payer.name} ${pedido.payer.surname}`}</h4>
                  <h3>Dirección: </h3>
                  <h4>{`${pedido.payer.shipments.receiver_address.street_name} ${pedido.payer.shipments.receiver_address.street_number}`}</h4>
                  <h3>Precio:</h3>
                  <h4>$2.500</h4>
                </div>
              </div>

              <div className="boxTotal">
                <div className="boxElemento">
                  <h2>SubTotal: </h2>
                  <h1>$ 2.700</h1>
                </div>

                <div className="boxElemento">
                  <h2>Costo de Envío: </h2>
                  <h1>$ 2.000</h1>
                </div>

                <div className="boxElemento">
                  <h2 className="destacado">Total: </h2>
                  <h1 className="destacado2">$ 4.700</h1>
                </div>
              </div>
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
