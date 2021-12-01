import React from "react";
import { useLocation } from "react-router-dom";
import Imgcab from "../../components/Imagen cabecera/Imgcab";
import { Approved } from "./Approved";
import "./Feedback.scss";
import { Rejected } from "./Rejected";

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

  console.log(payment_id);
  console.log(status);
  console.log(external_reference);
  console.log(merchant_order_id);

  if (status === "approved") {
    return (
      <>
        <Imgcab nombrehead="Muchas gracias" />
        <Approved merchant_order_id={merchant_order_id} />
      </>
    );
  } else if (status === "rejected") {
    return (
      <>
        <Imgcab nombrehead="Error" />
        <Rejected status={status} />
      </>
    );
  } else {
    return (
      <>
        <Imgcab nombrehead="Error" />
        <Rejected status={status} />
      </>
    );
  }
};

export default Feedback;
