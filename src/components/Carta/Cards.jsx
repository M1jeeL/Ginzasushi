import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import Loader from "../Loader/Loader";
import useFetchCategories from "../../hooks/useFetchCategories";
import FiltroCarta from "./FiltroCarta/FiltroCarta";
import "./Cards.scss";

export default function Cards({ setNombreHead }) {
  const { products, setSelectProduct } = useContext(CartContext);
  const { data: categories, loading } = useFetchCategories();
  const [categorySelected, setCategorySelected] = useState("");
  const [showProducts, setShowProducts] = useState(products);

  useEffect(() => {
    setShowProducts(products);
  }, [products]);

  useEffect(() => {
    if (categorySelected !== "") {
      setShowProducts(
        products.filter((product) => product.categoria === categorySelected)
      );
    }
    if (categorySelected === null) {
      setShowProducts(products);
    }
  }, [categorySelected, products]);
  return (
    <>
      {loading && showProducts.length > 0 ? (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      ) : (
        <div className="container-carta">
          <div className="filter-container">
            <FiltroCarta
              categories={categories}
              setCategorySelected={setCategorySelected}
              setNombreHead={setNombreHead}
            />
          </div>
          <Row>
            {showProducts.map((item) => {
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
