import React, { useContext } from "react";
import Card from "./Card";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

export default function Cards({ productos}) {
  const { setSelectProduct } = useContext(CartContext)
  return (
    <div className="container container-carta">
      <Row>
        {productos.map((item) => {
          const { nombre, categoria } = item;
          let name = nombre.toLowerCase();

          let category = categoria.toLowerCase();
          category = category.replace(/ /g, "-");
          return (
            <Col key={item.id} xl="4" md="6" sm="12" xs="12">
              <Link
                to={`/productos/${category}/${name}`}
                onClick={async () => {
                  setSelectProduct(item.id)
                }}
                className="card-container"
              >
                <Card item={item}/>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
