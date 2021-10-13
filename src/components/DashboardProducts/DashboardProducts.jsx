// import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Input } from "reactstrap";
import { DashboardNavbar } from "../DashboardNavbar/DashboardNavbar";
import { DashboardCategoriesList } from "./DashboardCategoriesList";
import "./DashboardProducts.scss";
import { DashboardProductsList } from "./DashboardProductsList";

export const DashboardProducts = () => {
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.products);

  //   const [activeProduct, setActiveProduct] = useState({});

  //   const handleActiveProduct = (product) => {
  //     setActiveProduct(product);
  //   };

  return (
    <>
      <div className="dashboard">
        <DashboardNavbar />
        <div className="container-dashboard-products">
          <div className="dashboard-products-header">
            <div className="dashboard-products-header-title">Productos</div>
            <Input type="text" />
            <i className="fas fa-search fa-2x"></i>
            <div className="dashboard-categories-btn-add">
              <Button>+ Nuevo Producto</Button>
            </div>
          </div>
          <div className="dashboard-products-body">
            <DashboardCategoriesList categories={categories} />
            <DashboardProductsList
              products={products}
              categories={categories}
              //   handleActiveProduct={handleActiveProduct}
            />
          </div>
        </div>
      </div>
    </>
  );
};
