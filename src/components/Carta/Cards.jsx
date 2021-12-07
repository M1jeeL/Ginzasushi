import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { activeProduct } from "../../actions/products";
import Card from "./Card";
// import FiltroCarta from "./FiltroCarta/FiltroCarta";
import "./Cards.scss";

export default function Cards({ setNombreHead }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  //   const [categorySelected, setCategorySelected] = useState("");
  const [showProducts, setShowProducts] = useState(products);

  const mostrarTodo = useCallback(() => {
    setShowProducts(products.filter((item) => item.activo === true));
  }, [products]);

  useEffect(() => {
    mostrarTodo();
  }, [products, mostrarTodo]);

  //   useEffect(() => {
  //     if (categorySelected !== "") {
  //       setShowProducts(
  //         products.filter(
  //           (product) =>
  //             product.categoria[0].nombre === categorySelected &&
  //             product.activo === true
  //         )
  //       );
  //     }
  //     if (categorySelected === null) {
  //       setShowProducts(products);
  //     }
  //   }, [categorySelected, products]);

  return (
    <>
      <div className="container-carta animate__animated animate__fadeIn animate__faster">
        <div className="filter-container">
          {/* <FiltroCarta
            categories={categories}
            setCategorySelected={setCategorySelected}
            setNombreHead={setNombreHead}
            mostrarTodo={mostrarTodo}
          /> */}
        </div>
        <Row>
          {showProducts.map((item) => {
            return (
              <Col key={item._id} xl="4" md="6" sm="12" xs="12">
                <Link
                  to={`/productos/${item._id}`}
                  onClick={async () => {
                    dispatch(activeProduct(item._id, item));
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
    </>
  );
}
