import React, { useState, useEffect } from "react";
import PanelUsuario from "../PanelUsuario";
import Imgcab from "../../Imagen cabecera/Imgcab";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import moment from "moment";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const PedidoInfo = () => {
  const { uuid } = useParams();
  const { products } = useSelector((state) => state.products);
  const [pedido, setPedido] = useState({});
  const url = process.env.REACT_APP_PEDIDOS_API;

  console.log(products);
  const startRepeatOrder = () => {
    let noHayStock = false;
    pedido.items.forEach((element) => {
      const [produ] = products.filter((product) => (product.id = element.id));
      
      if(produ?.activo === false){
        noHayStock = true;
      }
      console.log(noHayStock);
    });
      if (noHayStock === true) {
        Swal.fire({
          title:
            "Lamentablemente uno de los productos no se encuentra disponible",
          text: "Vuelve a realizar un nuevo pedido",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "¿Seguro que deseas realizar nuevamente éste pedido?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirmar",
          cancelButtonText: "Cancelar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Confirmado");
          }
        });
      }
  };

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

  //   const [subTotal, setSubTotal] = useState(0);

  return (
    <>
      <Imgcab nombrehead="Mi pedido" />
      <div className="container pedidos-container">
        <PanelUsuario />
        {Object.entries(pedido).length > 0 ? (
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
                    (pedido, index) =>
                      pedido.description !== "Despacho" && (
                        <div key={index} className="pedido-productos-detalle">
                          <div className="pedido-productos-detalle-bodyImage">
                            <div>
                              <img
                                src="https://picsum.photos/500"
                                alt="sushi"
                                className="pedido-productos-detalle-bodyImage-image"
                              />
                            </div>
                          </div>
                          <div className="pedido-productos-detalle-bodyTitle">
                            <div className="pedido-productos-detalle-bodyTitle-title">
                              <h2>{pedido.title}</h2>
                            </div>
                            <div className="pedido-productos-detalle-bodyEnvolture-envolture">
                              <h3>Envoltura: </h3>
                              <h4>{pedido.envoltura}</h4>
                            </div>
                            <div>
                              <h3>Unidades: </h3>
                              <h4 className="unidades">{pedido.quantity}</h4>
                            </div>
                            <div className="precio">
                              <h3>Precio: </h3>
                              <h4>${pedido.unit_price}</h4>
                            </div>
                          </div>
                        </div>
                      )
                  )}
            </div>

            <div className="pedido-infoCliente">
              <div className="pedido-infoCliente-facturante">
                <div className="titulo">
                  <h1>Detalles Factura:</h1>
                </div>
                <h3>Fecha: </h3>
                <h4>
                  {moment(pedido.fechaIngresada)
                    .subtract(3, "hours")
                    .format("LLL")}
                </h4>
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
              <Button
                color="warning"
                outline
                onClick={() => startRepeatOrder()}
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
