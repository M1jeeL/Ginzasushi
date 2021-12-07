import React from "react";
import { DashboardProductCard } from "./DashboardProductCard";

export const DashboardProductsList = ({
  showProducts,
  categories,
  handleActiveProduct,
}) => {
  return (
    <div className="dashboard-products-list">
      {showProducts.map((product, index) => (
        <div
          key={product._id}
          onClick={() => {
            handleActiveProduct(product);
          }}
        >
          <DashboardProductCard
            index={index}
            product={product}
            categories={categories}
          />
        </div>
      ))}
    </div>
  );
};
