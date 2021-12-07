// import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import { formatearNumero } from "../../../helpers/formatearNumero";
import ItemRowDetalle from "./ItemRowDetalle";

const url = process.env.REACT_APP_API;

const CardCheckoutAside = ({ formDataCliente, formDespachoCliente }) => {
  const { cart, total } = useSelector((state) => state.products);
  const { user, logged } = useSelector((state) => state.auth);

  let despacho = 2000;

  const totalFinal = total + despacho;

  const subTotalShow = formatearNumero(total);
  const despachoShow = formatearNumero(despacho);
  const totalShow = formatearNumero(totalFinal);
  const [vacio, setVacio] = useState(true);

  useEffect(() => {
    if (cart.length > 0) {
      setVacio(false);
    }
  }, [cart]);

  const pagarPedido = async () => {
    const items = cart.map((itemCart) => {
      //   console.log(itemCart);
      const item = {
        title: itemCart.nombre,
        quantity: itemCart.cantidad,
        unit_price: itemCart.precio,
        description: itemCart.nombre,
        envoltura: itemCart.envoltura,
        id: itemCart.id,
        currency_id: "CLP",
        category_id: itemCart.categoria.toString(),
      };
      return item;
    });

    let payer;

    if (logged) {
      payer = {
        name: user.nombre,
        surname: user.apellido,
        email: user.email,
        phone: {
          area_code: "",
          number: user.celular.toString(),
        },
        idenfitication: {
          type: "",
          number: "",
        },
        shipments: {
          receiver_address: {
            street_name: user.calle,
            street_number: parseInt(user.numeracion),
            zip_code: "",
          },
        },
      };
    } else {
      payer = {
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
    }

    const preference_data = {
      items,
      payer,
      estado: "Pendiente",
      notas: formDespachoCliente.notas,
      precio_despacho: despacho,
      tipo_orden: formDespachoCliente.tipoOrden,
    };
    const token = localStorage.getItem("token");

    const preference = await (
      await fetch(`${url}/orders`, {
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
  };

  return (
    <div className="aside-container-checkout animate__animated animate__faster animate__fadeInRight">
      <div className="aside-info-checkout">
        <div className="aside-confirmacion-checkout">
          Confirmaci&oacute;n de pedido
        </div>
        <div>
          {cart.map((item, index) => (
            <ItemRowDetalle key={index} item={item} />
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
          <Button
            className="btn-confirmar-pedido"
            disabled={vacio}
            onClick={() => {
              pagarPedido();
            }}
          >
            Confirmar mi pedido
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardCheckoutAside;
