import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { rechazarPedido } from "../../actions/pedidos";
export const Rejected = ({ status }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "rejected") {
      dispatch(rechazarPedido());
    }
  }, [dispatch, status]);

  return (
    <div className="feedback-rejected-container">
      <h1>Error al procesar el pago</h1>
      <p>
        Ocurri&oacute; un error al intentar realizar el pago, no se ha generado
        ning&uacute;n cargo a tu tarjeta.
      </p>
      <Link to="/carta">
        <Button className="button-feedback-rejected">
          Volver a intentarlo
        </Button>
      </Link>
    </div>
  );
};
