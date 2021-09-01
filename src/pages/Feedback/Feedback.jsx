import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  const search = useLocation().search;
  const payment_id = new URLSearchParams(search).get("payment_id");
  const status = new URLSearchParams(search).get("status");
  const external_reference = new URLSearchParams(search).get(
    "external_reference"
  );
  const merchant_order_id = new URLSearchParams(search).get(
    "merchant_order_id"
  );
  console.log(search);
  console.log(payment_id);
  console.log(status);
  console.log(external_reference);
  console.log(merchant_order_id);

  useEffect(() => {
    fetch(
      `https://api.mercadopago.com/v1/payments/${payment_id}/?access_token=${process.env.REACT_APP_TOKEN_ACCESS_MP}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data.status));
  }, [payment_id]);
  return <></>;
};

export default Feedback;
