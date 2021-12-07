import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "reactstrap";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import { DashboardCategoriesList } from "./DashboardCategoriesList";
import { DashboardProductsList } from "./DashboardProductsList";
import { DashboardNewProductModal } from "./DashboardNewProductModal";
import { DashboardProductActive } from "./DashboardProductActive";
import "./DashboardProducts.scss";
import { DashboardProductSearch } from "./DashboardProductSearch";
import Loader from "../Loader/Loader";

export const DashboardProducts = () => {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.products);
  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const [openProductModal, setOpenProductModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const [showProducts, setShowProducts] = useState(products);

  const openModalProduct = () => {
    setOpenProductModal(!openProductModal);
  };

  const handleActiveProduct = (product) => {
    setActiveProduct(product);
  };

  let isAdmin = false;

  user.roles.forEach((rol) => {
    if (rol.name === "admin") {
      isAdmin = true;
    }
  });

  if (isAdmin === false) {
    return <Redirect to="/" />;
  }

  

  return (
    <>
      {Object.entries(auth).length > 0 ? (
        <div className="dashboard">
          <DashboardNavbar />
          <div className="container-dashboard-products animate__animated animate__fadeIn animate__faster">
            <div className="dashboard-products-header">
              <div className="dashboard-products-header-title">Productos</div>
              <DashboardProductSearch
                setShowProducts={setShowProducts}
                products={products}
              />
              <div className="dashboard-categories-btn-add">
                <Button
                  onClick={() => {
                    openModalProduct();
                    setActiveProduct(null);
                  }}
                >
                  + Nuevo Producto
                </Button>
              </div>
              <DashboardNewProductModal
                activeProduct={activeProduct}
                setActiveProduct={setActiveProduct}
                openProductModal={openProductModal}
                setOpenProductModal={setOpenProductModal}
                openModalProduct={openModalProduct}
              />
            </div>
            <div className="dashboard-products-body">
              <DashboardCategoriesList categories={categories} />
              <DashboardProductsList
                showProducts={showProducts}
                categories={categories}
                handleActiveProduct={handleActiveProduct}
              />
            </div>
          </div>
          {activeProduct && (
            <DashboardProductActive
              activeProduct={activeProduct}
              categories={categories}
              openModalProduct={openModalProduct}
            />
          )}
        </div>
      ) : (
        <div className="d-flex micuenta-container justify-content-center align-items-center">
          <Loader />
        </div>
      )}
    </>
  );
};
