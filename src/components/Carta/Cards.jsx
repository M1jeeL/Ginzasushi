import React from "react";
import Card from "./Card";
import { Col, Row } from "reactstrap";

export default function Cards({ productos, setSelectProduct }) {

  // console.log(productos)
  return (
    <div className="container container-carta">
      <Row>
        {productos.map((item) => {
          return (
            <Col key={item.id} xl="4" md="6" sm="12" xs="12">
              <Card item={item} setSelectProduct={setSelectProduct} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
