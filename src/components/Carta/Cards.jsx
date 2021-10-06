import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { activeProduct } from "../../actions/products";
import useFetchCategories from "../../hooks/useFetchCategories";
import Card from "./Card";
import Loader from "../Loader/Loader";
import FiltroCarta from "./FiltroCarta/FiltroCarta";
import "./Cards.scss";

export default function Cards({ setNombreHead }) {
  const dispatch = useDispatch();
  const { products, categories } = useSelector((state) => state.products);
  const { loading } = useFetchCategories();
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
                      dispatch(activeProduct(item.id, item));
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
