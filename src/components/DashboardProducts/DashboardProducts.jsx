import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import { DashboardCategoriesList } from "./DashboardCategoriesList";
import { DashboardProductsList } from "./DashboardProductsList";
import { DashboardNewProductModal } from "./DashboardNewProductModal";
import { DashboardProductActive } from "./DashboardProductActive";
import "./DashboardProducts.scss";

export const DashboardProducts = () => {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  const [openProductModal, setOpenProductModal] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const openModalProduct = () => {
    setOpenProductModal(!openProductModal);
  };

  const handleActiveProduct = (product) => {
    setActiveProduct(product);
  };

  if (user.isAdmin === false) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="dashboard">
        <DashboardNavbar />
        <div className="container-dashboard-products animate__animated animate__fadeIn animate__faster">
          <div className="dashboard-products-header">
            <div className="dashboard-products-header-title">Productos</div>
            <Input type="text" />
            <i className="fas fa-search fa-2x"></i>
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
              products={products}
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
    </>
  );
};
