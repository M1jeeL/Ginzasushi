import React, { useContext } from "react";
import Card from "./Card";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Loader from "../Loader/Loader";
import useFetchCategories from "../../hooks/useFetchCategories";

export default function Cards() {
  const { products, setSelectProduct } = useContext(CartContext);
  const { loading } = useFetchCategories();
  return (
    <>
      {loading ? (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <div className="container container-carta">
          <Row>
            {products.map((item) => {
              return (
                <Col key={item.id} xl="4" md="6" sm="12" xs="12">
                  <Link
                    to={`/productos/${item.id}`}
                    onClick={async () => {
                      await setSelectProduct(item.id);
                    }}
                    className="card-container"
                  >
                    <Card item={item} />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      )}
    </>
  );
}
