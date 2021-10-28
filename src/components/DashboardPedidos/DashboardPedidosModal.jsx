import React from "react";
import { useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./DashboardPedidosModal.scss";
import moment from "moment";

export const DashboardPedidosModal = ({ openPedidoModal, openModalPedido }) => {
  const { active } = useSelector((state) => state.pedidos);
  console.log(active);
  return (
    <Modal isOpen={openPedidoModal} toggle={openModalPedido}>
      <ModalHeader>
        <div>Pedido</div>
      </ModalHeader>
      <ModalBody>
        <div>N° Pedido: {active?.id}</div>
        <div>Nombre: {active?.payer.name}</div>
        <div>
          Direccion:
          {`${active?.payer.shipments.receiver_address.street_name} ${active?.payer.shipments.receiver_address.street_number} `}
        </div>
        <div>Celular: {`+56${active?.payer.phone.number}`}</div>
        <div>
          Fecha de ingreso:{" "}
          {moment(active?.fechaIngresada).subtract(3, "hours").format("LLL")}
        </div>
        <div>Estado: {active?.estado}</div>
        <div>
          Detalles:
          {!active?.items
            ? ""
            : active?.items.map(
                (pedido) =>
                  pedido.description !== "Despacho" && (
                    <div key={pedido.id}>
                      <div>
                        <div>{pedido.title}</div>
                        <div>
                        Envoltura: {pedido.envoltura}
                        </div>
                        <div>
                          Unidades: {pedido.quantity}
                        </div>
                        <div>
                          Precio: ${pedido.unit_price}
                        </div>
                      </div>
                    </div>
                  )
              )}
        </div>
      </ModalBody>
      <ModalFooter>
        <div>Total:</div>
      </ModalFooter>
    </Modal>
  );
};
