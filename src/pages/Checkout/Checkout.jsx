import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import Imgcab from "../../components/Imagen cabecera/Imgcab";
import CardDatosCheckout from "../../components/Checkout/FormDatosUsuario/CardDatosCheckout";
import CardDespachoCheckout from "../../components/Checkout/FormDespachoUsuario/CardDespachoCheckout";
import CardCheckoutAside from "../../components/Checkout/CardCheckoutAside/CardCheckoutAside";
import "./Checkout.scss";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";

const Checkout = () => {
  const { user, logged } = useSelector((state) => state.auth);

  //   const [socket, setSocket] = useState(null);

  //   useEffect(() => {
  //     const newSocket = io("http://localhost:5001");
  //     setSocket(newSocket);
  //     return () => newSocket.close();
  //   }, [setSocket]);

  //   console.log(socket);

  const [formDataCliente, handleInputChangeData, resetData] = useForm({
    id: "",
    nombre: "",
    apellido: "",
    email: "",
    celular: "",
  });

  const [formDespachoCliente, handleInputChangeDespacho, resetDespacho] =
    useForm({
      id: "",
      calle: "",
      comuna: "",
      numeracion: "",
      depto: "",
      tipoEntrega: "Dejar pedido en la puerta",
      notas: "",
    });

  return (
    <>
      <Imgcab nombrehead="Checkout" />
      <div className="container checkout">
        <div className="left-side-checkout">
          {logged ? (
            <>
              <CardDatosCheckout
                formDataCliente={formDataCliente}
                handleInputChangeData={handleInputChangeData}
                isLogged={logged}
                resetData={resetData}
                user={user}
              />
              <CardDespachoCheckout
                formDespachoCliente={formDespachoCliente}
                handleInputChangeDespacho={handleInputChangeDespacho}
                isLogged={logged}
                resetDespacho={resetDespacho}
                user={user}
              />
            </>
          ) : (
            <>
              <CardDatosCheckout
                formDataCliente={formDataCliente}
                handleInputChangeData={handleInputChangeData}
                isLogged={logged}
              />
              <CardDespachoCheckout
                formDespachoCliente={formDespachoCliente}
                handleInputChangeDespacho={handleInputChangeDespacho}
                isLogged={logged}
              />
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
