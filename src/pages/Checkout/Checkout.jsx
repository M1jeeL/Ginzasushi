import { useContext, useEffect, useState } from "react";
import Imgcab from "../../components/Imagen cabecera/Imgcab";
import UserContext from "../../context/UserContext";
import CardDatosCheckout from "../../components/Checkout/FormDatosUsuario/CardDatosCheckout";
import CardDespachoCheckout from "../../components/Checkout/FormDespachoUsuario/CardDespachoCheckout";
import CardCheckoutAside from "../../components/Checkout/CardCheckoutAside/CardCheckoutAside";
import "./Checkout.scss";

const Checkout = () => {
  const { usuario, logged } = useContext(UserContext);
  const initialDespachoCliente = {
    id: "",
    calle: "",
    comuna: "",
    numeracion: "",
    depto: "",
    tipoEntrega: "Dejar pedido en la puerta",
  };
  const [formDespachoCliente, setFormDespachoCliente] = useState(
    initialDespachoCliente
  );
  const initialDataCliente = {
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
  };
  const [formDataCliente, setFormDataCliente] = useState(initialDataCliente);
//   console.log(formDataCliente);
  console.log(logged)
  useEffect(() => {
    if (Object.entries(usuario).length > 0) {
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
      setFormDataCliente({
        id,
        nombre,
        apellido,
        email,
        celular,
      });

      setFormDespachoCliente({
        id,
        calle,
        comuna,
        numeracion,
        depto,
        tipoEntrega: "Dejar pedido en la puerta",
      });
    }
  }, [usuario]);

  return (
    <>
      <Imgcab nombrehead="Checkout" />
      <div className="container checkout">
        <div className="left-side-checkout">
          {logged ? (
            <>
              <CardDatosCheckout
                formDataCliente={formDataCliente}
                setFormDataCliente={setFormDataCliente}
              />
              <CardDespachoCheckout
                formDespachoCliente={formDespachoCliente}
                setFormDespachoCliente={setFormDespachoCliente}
              />
            </>
          ) : (
            <>
              <h1>ola</h1>
            </>
          )}
        </div>
        <CardCheckoutAside
          formDataCliente={formDataCliente}
          formDespachoCliente={formDespachoCliente}
        />
      </div>
    </>
  );
};

export default Checkout;
