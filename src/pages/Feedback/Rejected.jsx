import React from "react";
import { Button } from "reactstrap";
export const Rejected = () => {
  return (
    <div className="feedback-rejected-container">
      <h1>Error al procesar el pago</h1>
      <p>
        Ocurri&oacute; un error al intentar realizar el pago, no se ha generado
        ning&uacute;n cargo a tu tarjeta.
      </p>
      <Button className="button-feedback-rejected">Volver a intentarlo</Button>
    </div>
  );
};
