import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import CartContext from "../../../context/CartContext";
import ItemRowDetalle from "./ItemRowDetalle";

const CardCheckoutAside = ({ formDataCliente, formDespachoCliente }) => {
  const urlPedidos = process.env.REACT_APP_PEDIDOS_API;
  const { cart, subTotalForEach, formatearNumero } = useContext(CartContext);

  let subTotal = 0;

  cart.forEach((item) => {
    subTotal = subTotal + subTotalForEach(item.id);
  });

  let despacho = 3000;

  const total = subTotal + despacho;

  const subTotalShow = formatearNumero(subTotal);
  const despachoShow = formatearNumero(despacho);
  const totalShow = formatearNumero(total);

  const pagarPedido = async () => {
    // console.log(cart)
    const items = cart.map((itemCart) => {
      //   console.log(itemCart)
      const item = {
        title: itemCart.nombre,
        quantity: itemCart.cantidad,
        unit_price: itemCart.precio,
        description: itemCart.nombre,
        envoltura: itemCart.envoltura,
        id: itemCart.id.toString(),
        currency_id: "CLP",
        category_id: itemCart.categoria.toString(),
      };
      return item;
    });

    items.push({
      title: "Despacho",
      description: "Despacho",
      quantity: 1,
      unit_price: despacho,
      currency_id: "CLP",
    });

    const payer = {
      name: formDataCliente.nombre,
      surname: formDataCliente.apellido,
      email: formDataCliente.email,
      phone: {
        area_code: "",
        number: formDataCliente.celular.toString(),
      },
      idenfitication: {
        type: "",
        number: "",
      },
      shipments: {
        receiver_address: {
          street_name: formDespachoCliente.calle,
          street_number: parseInt(formDespachoCliente.numeracion),
          zip_code: "",
        },
      },
    };

    const preference_data = {
      items,
      payer,
      estado: "Pendiente",
      notas: "kelokee",
    };
    const token = localStorage.getItem("token");

    try {
      const preference = await (
        await fetch(`${urlPedidos}/pedidos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(preference_data),
        })
      ).json();

      document.querySelector("#btn-checkout").innerHTML = "";
      const script = document.createElement("script");
      script.src =
        "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
      script.type = "text/javascript";
      script.dataset.preferenceId = preference.id;
      document.querySelector("#btn-checkout").appendChild(script);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="aside-container-checkout">
      <div className="aside-info-checkout">
        <div className="aside-confirmacion-checkout">
          Confirmaci&oacute;n de pedido
        </div>
        <div>
          {cart.map((item) => (
            <ItemRowDetalle key={item.id} item={item} />
          ))}
        </div>
        <div className="aside-precio-checkout">
          <div className="row-aside-checkout">
            <div className="precio-checkout-label">Subtotal</div>
            <div className="precio-checkout-price">$ {subTotalShow}</div>
          </div>
          <div className="row-aside-checkout">
            <div className="precio-checkout-label">Despacho</div>
            <div className="precio-checkout-price">$ {despachoShow}</div>
          </div>
          <hr />
          <div className="row-aside-checkout">
            <div className="precio-checkout-label">
              <strong>Total</strong>
            </div>
            <div className="precio-checkout-price">$ {totalShow}</div>
          </div>
        </div>
        <div className="btn-pagar-pedido" id="btn-checkout">
          <Link to="/checkout">
            <Button
              className="btn-confirmar-pedido"
              onClick={() => {
                pagarPedido();
              }}
            >
              Confirmar mi pedido
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCheckoutAside;
