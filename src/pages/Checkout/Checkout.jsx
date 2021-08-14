import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Imgcab from "../../components/Imagen cabecera/Imgcab";
import CartContext from "../../context/CartContext";
import UserContext from "../../context/UserContext";
import FormDatosUsuario from "../../components/Checkout/FormDatosUsuario/FormDatosUsuario";
import FormDespachoUsuario from "../../components/Checkout/FormDespachoUsuario/FormDespachoUsuario";
import "./Checkout.css";

const Checkout = () => {
  const { cart, subTotalForEach, formatearNumero } = useContext(CartContext);
  const { usuario, logged } = useContext(UserContext);
  const {
    nombre,
    apellido,
    email,
    celular,
    calle,
    comuna,
    depto,
    numeracion,
    id,
  } = usuario;

  let subTotal = 0;
  cart.forEach((item) => {
    subTotal = subTotal + subTotalForEach(item.id);
  });
  let despacho = 3000;
  let total = subTotal + despacho;

  let subTotalShow = formatearNumero(subTotal);
  let despachoShow = formatearNumero(despacho);
  let totalShow = formatearNumero(total);

  const styleBtnProduct = {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    width: "12rem",
  };

  return (
    <>
      <Imgcab nombrehead="Checkout" />
      <div className="container checkout">
        <div className="left-side-checkout">
          {logged ? (
            <>
              <FormDatosUsuario
                nombre={nombre}
                apellido={apellido}
                email={email}
                celular={celular}
                id={id}
              />
              <FormDespachoUsuario
                calle={calle}
                numeracion={numeracion}
                depto={depto}
                comuna={comuna}
                id={id}
              />
            </>
          ) : (
            <>
              <h1>ola</h1>
            </>
          )}
        </div>
        <div className="aside-container-checkout">
          <div className="aside-info-checkout">
            <div className="aside-confirmacion-checkout">
              Confirmaci&oacute;n de pedido
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
              <div className="row-aside-checkout">
                <div className="precio-checkout-label">
                  <strong>Total</strong>
                </div>
                <div className="precio-checkout-price">$ {totalShow}</div>
              </div>
            </div>
            <div className="btn-pagar-pedido">
              <Link to="/checkout">
                <Button style={styleBtnProduct}>Pagar mi pedido</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
